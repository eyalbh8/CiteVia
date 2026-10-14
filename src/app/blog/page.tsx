import Image from 'next/image';
import Link from 'next/link';
import { BlogDirectory } from '@/components/blog-directory';
import { articles, articleSummary, formatDate, readingMinutes } from '@/content/articles';
import { articleMedia } from '@/content/article-media';
import { JsonLd } from '@/components/ui';
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo';
import { absoluteUrl, site } from '@/lib/site';
import './blog.css';

const description =
  'Practical guides and research on SEO, GEO, AEO, content strategy, and measuring your visibility in AI search.';
export const metadata = pageMetadata({
  title: 'Blog — SEO, GEO & AI Search Guides',
  description,
  path: '/blog',
});

export default function BlogPage() {
  const featured = articles.find((article) => article.slug === 'geo-aeo-and-seo')!;
  const sortedArticles = [...articles].sort((a, b) => b.published.localeCompare(a.published));
  return (
    <>
      <JsonLd
        data={[
          webPageSchema('Citevia Blog', description, '/blog', 'CollectionPage'),
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
          ]),
          {
            '@type': 'Blog',
            '@id': `${absoluteUrl('/blog')}#blog`,
            name: 'Citevia Blog',
            description,
            url: absoluteUrl('/blog'),
            publisher: { '@id': `${site.url}/#organization` },
            blogPost: sortedArticles.map((article) => ({
              '@type': 'BlogPosting',
              '@id': `${absoluteUrl(`/blog/${article.slug}`)}#article`,
              headline: article.title,
              url: absoluteUrl(`/blog/${article.slug}`),
              datePublished: article.published,
              dateModified: article.updated,
            })),
          },
        ]}
      />
      <div className="arielos-home citevia-blog">
        <section className="page-hero blog-hero">
          <div className="shell">
            <p className="eyebrow">THE CITEVIA BLOG</p>
            <h1>
              Good questions.
              <br />
              <em>Clearer answers.</em>
            </h1>
            <p className="page-hero__copy">
              Ideas, research, and practical guides for getting found, understood, and chosen.
              Explore the changing world of SEO, GEO, and AI search.
            </p>
            <a className="blog-browse" href="#all-articles">
              Explore the articles <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <div className="shell blog-content">
          <section className="blog-featured" aria-labelledby="featured-guide">
            <Link
              className="blog-featured__image"
              href={`/blog/${featured.slug}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={articleMedia(featured.slug).src}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <span>START WITH THE FOUNDATIONS</span>
            </Link>
            <div className="blog-featured__body">
              <p className="eyebrow">FEATURED GUIDE</p>
              <h2 id="featured-guide">
                <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p>{featured.description}</p>
              <div className="blog-meta">
                <time dateTime={featured.published}>{formatDate(featured.published)}</time>
                <span>{readingMinutes(featured)} min read</span>
              </div>
              <Link className="blog-read" href={`/blog/${featured.slug}`}>
                Read the guide <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>

          <BlogDirectory articles={sortedArticles.map(articleSummary)} />

          <aside className="blog-next" aria-labelledby="blog-next-title">
            <div>
              <p className="eyebrow">PUT THE IDEAS TO WORK</p>
              <h2 id="blog-next-title">What does this mean for your brand?</h2>
              <p>Start with a private assessment of your search and AI visibility.</p>
            </div>
            <Link className="button button--primary" href="/private-ai-visibility-assessment">
              Private assessment <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
