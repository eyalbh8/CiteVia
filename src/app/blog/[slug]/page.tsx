import { InsightArticlePage } from '@/components/arielos/Pages';
import { getInsightArticle } from '@/components/arielos/content/insights';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, readingMinutes, formatDate, articleSummary } from '@/content/articles';
import { ArticleCard } from '@/components/article-card';
import { Breadcrumbs, JsonLd, Cta } from '@/components/ui';
import { pageMetadata, webPageSchema } from '@/lib/seo';
import { absoluteUrl, site } from '@/lib/site';
import { ArrowIcon } from '@/components/icons';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
    type: 'article',
    published: article.published,
    modified: article.updated,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const path = `/blog/${slug}`;
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(article.title, article.description, path),
          {
            '@type': 'Article',
            '@id': `${absoluteUrl(path)}#article`,
            headline: article.title,
            description: article.description,
            datePublished: article.published,
            dateModified: article.updated,
            image: [absoluteUrl('/opengraph-image')],
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
      {getInsightArticle(slug) ? (
        <div className="arielos-home">
          <InsightArticlePage slug={slug} />
        </div>
      ) : (
        <>
          <article className="container">
            <Breadcrumbs
              items={[
                { name: 'Blog', href: '/blog' },
                { name: article.title, href: path },
              ]}
            />
            <header className="page-intro article-intro">
              <span className="eyebrow">{article.category}</span>
              <h1>{article.title}</h1>
              <p className="lede">{article.description}</p>
              <div className="article-meta">
                <Link href="/about">By Citevia</Link>
                <span>
                  Published{' '}
                  <time dateTime={article.published}>{formatDate(article.published)}</time>
                </span>
                <span>{readingMinutes(article)} min read</span>
              </div>
            </header>
            <div className="article-layout">
              <aside className="article-toc">
                <span className="eyebrow">IN THIS ARTICLE</span>
                <nav aria-label="Article contents">
                  {article.sections.map((s) => (
                    <a href={`#${s.id}`} key={s.id}>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </aside>
              <div className="prose article-prose">
                <div className="answer-block">
                  <span className="eyebrow">THE TAKEAWAY</span>
                  <p>{article.takeaway}</p>
                </div>
                {article.sections.map((section) => (
                  <section id={section.id} key={section.id}>
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {section.bullets && (
                      <ul>
                        {section.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {section.source && (
                      <p className="source-note">
                        Source: <a href={section.source.url}>{section.source.title} ↗</a>
                      </p>
                    )}
                  </section>
                ))}
                <div className="article-review">
                  <p>
                    Written by <Link href="/about">Citevia</Link>. Last substantively updated{' '}
                    <time dateTime={article.updated}>{formatDate(article.updated)}</time>.
                  </p>
                  <p>
                    Found something that needs a correction?{' '}
                    <a href={`mailto:${site.email}`}>Let us know.</a>
                  </p>
                </div>
                <Link className="text-link" href={`/services/${article.relatedService}`}>
                  Explore the related service <ArrowIcon />
                </Link>
              </div>
            </div>
            <section className="related-reading" aria-labelledby="related-reading">
              <span className="eyebrow">KEEP EXPLORING</span>
              <h2 id="related-reading">Continue the conversation.</h2>
              <div className="articles-grid">
                {articles
                  .filter((item) => item.slug !== article.slug)
                  .slice(0, 3)
                  .map((item, i) => (
                    <ArticleCard key={item.slug} article={articleSummary(item)} index={i} />
                  ))}
              </div>
              <Link href="/blog" className="text-link">
                Back to the blog <ArrowIcon />
              </Link>
            </section>
          </article>
          <Cta />{' '}
        </>
      )}
    </>
  );
}
