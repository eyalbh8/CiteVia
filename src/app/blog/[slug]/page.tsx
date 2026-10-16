import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, readingMinutes, formatDate, articleWordCount } from '@/content/articles';
import { articleMedia } from '@/content/article-media';
import { ArticleText } from '@/components/article-text';
import { Breadcrumbs, JsonLd } from '@/components/ui';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';
import { parseArticleText } from '@/lib/article-text';
import { absoluteUrl, site } from '@/lib/site';
import './article.css';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const image = articleMedia(slug);
  const metadata = pageMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/blog/${slug}`,
    type: 'article',
    published: article.published,
    modified: article.updated,
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [{ url: absoluteUrl(image.src), alt: image.alt }],
    },
    twitter: { ...metadata.twitter, images: [absoluteUrl(image.src)] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const path = `/blog/${slug}`;
  const image = articleMedia(slug);
  const linkedSlugs = article.sections
    .flatMap((section) => [...section.paragraphs, ...(section.bullets || [])])
    .flatMap(parseArticleText)
    .filter((part) => part.href?.startsWith('/blog/'))
    .map((part) => part.href!.split('/')[2].split('#')[0]);
  const related = articles
    .filter((item) => item.slug !== slug)
    .map((item) => ({
      article: item,
      relevance:
        (linkedSlugs.includes(item.slug) ? 2 : 0) + (item.category === article.category ? 1 : 0),
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3)
    .map((item) => item.article);

  return (
    <>
      <JsonLd
        localize={Boolean(article.faq)}
        data={[
          {
            ...webPageSchema(article.title, article.description, path),
            ...(article.faq ? faqPageSchema(article.faq.items) : {}),
          },
          {
            '@type': 'BlogPosting',
            '@id': `${absoluteUrl(path)}#article`,
            url: absoluteUrl(path),
            headline: article.title,
            description: article.description,
            datePublished: article.published,
            dateModified: article.updated,
            image: [absoluteUrl(image.src)],
            articleSection: article.category,
            inLanguage: 'en',
            wordCount: articleWordCount(article),
            isPartOf: { '@id': `${absoluteUrl('/blog')}#blog` },
            author: {
              '@type': 'Organization',
              '@id': `${site.url}/#organization`,
              name: 'Citevia',
              url: absoluteUrl('/about'),
            },
            publisher: { '@id': `${site.url}/#organization` },
            mainEntityOfPage: { '@id': `${absoluteUrl(path)}#webpage` },
          },
        ]}
      />
      <div className="arielos-home citevia-post">
        <article className="shell post-shell">
          <Breadcrumbs
            localize={Boolean(article.faq)}
            items={[
              { name: 'Blog', href: '/blog' },
              { name: article.title, href: path },
            ]}
          />
          <header className="post-header">
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="post-deck">{article.description}</p>
            <div className="post-byline">
              <Link href="/about">By Citevia</Link>
              <span>
                Published <time dateTime={article.published}>{formatDate(article.published)}</time>
              </span>
              <span>
                Updated <time dateTime={article.updated}>{formatDate(article.updated)}</time>
              </span>
              <span>
                <span data-article-minutes>{readingMinutes(article)}</span> min read
              </span>
            </div>
          </header>
          <figure className="post-cover">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 1100px" />
          </figure>
          <div className="post-layout">
            <aside className="post-toc">
              <p className="eyebrow">IN THIS ARTICLE</p>
              <nav aria-label="Article contents">
                {article.sections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>
                    {section.title}
                  </a>
                ))}
                {article.faq && <a href="#faq">{article.faq.title}</a>}
              </nav>
              <Link className="post-back" href="/blog">
                ← All blog posts
              </Link>
            </aside>
            <div className="post-body">
              <div className="post-takeaway">
                <p className="eyebrow">THE SHORT ANSWER</p>
                <p data-article-words>
                  <ArticleText>{article.takeaway}</ArticleText>
                </p>
              </div>
              {article.sections.map((section) => (
                <section id={section.id} key={section.id}>
                  <h2 data-article-words>{section.title}</h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} data-article-words>
                      <ArticleText>{paragraph}</ArticleText>
                    </p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet, index) => (
                        <li key={index} data-article-words>
                          <ArticleText>{bullet}</ArticleText>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.example && (
                    <aside className="post-example">
                      <h3 data-article-words>{section.example.title}</h3>
                      <p data-article-words>
                        <ArticleText>{section.example.text}</ArticleText>
                      </p>
                    </aside>
                  )}
                  {section.source && (
                    <p className="post-source" data-article-words>
                      Source: <a href={section.source.url}>{section.source.title}</a>
                    </p>
                  )}
                </section>
              ))}
              {article.faq && (
                <section id="faq" aria-labelledby="article-faq-heading" className="post-faq">
                  <h2 id="article-faq-heading" data-article-words>
                    {article.faq.title}
                  </h2>
                  {article.faq.items.map(({ question, answer }, index) => (
                    <div key={question}>
                      <h3 id={`faq-${index + 1}`} data-article-words>
                        {question}
                      </h3>
                      <p data-article-words>{answer}</p>
                    </div>
                  ))}
                </section>
              )}
              <footer className="post-review">
                <p>
                  Written by <Link href="/about">Citevia</Link>. Updated{' '}
                  <time dateTime={article.updated}>{formatDate(article.updated)}</time>.
                </p>
                <p>
                  Have a correction or a question?{' '}
                  <a href={`mailto:${site.email}`}>Contact our team</a>.
                </p>
                <Link href={`/services/${article.relatedService}`}>
                  Explore the related service →
                </Link>
              </footer>
            </div>
          </div>
        </article>
        <section className="post-related" aria-labelledby="related-reading">
          <div className="shell">
            <p className="eyebrow">KEEP READING</p>
            <h2 id="related-reading">Build on what you’ve learned.</h2>
            <div className="post-related-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="post-related-card">
                  <span className="eyebrow">
                    {item.category} · {readingMinutes(item)} MIN READ
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="post-read">
                    Read article <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              ))}
            </div>
            <Link className="post-all" href="/blog">
              Explore the blog →
            </Link>
          </div>
        </section>
        <section className="post-cta shell" aria-labelledby="post-cta-heading">
          <div>
            <p className="eyebrow">YOUR NEXT STEP</p>
            <h2 id="post-cta-heading">Turn a useful idea into a clear plan.</h2>
            <p>Explore what search and AI visibility mean for your business.</p>
          </div>
          <Link className="button button--primary" href="/private-ai-visibility-assessment">
            Private assessment <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </>
  );
}
