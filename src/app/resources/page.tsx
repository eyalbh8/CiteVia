import Link from 'next/link';
import { Breadcrumbs, PageIntro, Faq, Cta, JsonLd } from '@/components/ui';
import { ArrowIcon } from '@/components/icons';
import { glossary, resourceFaqs } from '@/content/resources';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const description =
  'Start learning about AI search with Citevia’s practical reading paths, GEO and AEO glossary, frequently asked questions, and website discovery resources.';
export const metadata = pageMetadata({
  title: 'AI Search Resources & GEO Glossary',
  description,
  path: '/resources',
});
const paths = [
  {
    label: 'UNDERSTAND THE FOUNDATIONS',
    title: 'Get clear on the terms.',
    body: 'Learn how GEO, AEO, and SEO overlap, and which fundamentals still matter.',
    href: '/blog/geo-aeo-and-seo',
  },
  {
    label: 'PLAN THE FIRST CYCLE',
    title: 'Go from questions to work.',
    body: 'Build an audit that ends with evidence, priorities, and a clear owner.',
    href: '/blog/ai-visibility-audit-playbook',
  },
  {
    label: 'MAKE MEASUREMENT USEFUL',
    title: 'Know what the numbers mean.',
    body: 'Separate answers, visits, and business outcomes in your reporting.',
    href: '/blog/measuring-ai-search-visibility',
  },
];
export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'Citevia resource library',
          description,
          '/resources',
          'CollectionPage',
        )}
      />
      <div className="container">
        <Breadcrumbs items={[{ name: 'Resources', href: '/resources' }]} />
        <PageIntro
          eyebrow="A USEFUL PLACE TO START"
          title="Less jargon. More understanding."
          description="Reading paths, straightforward definitions, and practical answers for teams finding their footing in AI search."
        />
        <nav className="resource-jump-links" aria-label="Resource sections">
          <a href="#reading-paths">Reading paths</a>
          <a href="#glossary">Glossary</a>
          <a href="#questions">Common questions</a>
          <a href="#discovery">Website resources</a>
        </nav>
        <section className="resource-section" id="reading-paths">
          <h2>Choose your starting point.</h2>
          <div className="reading-paths">
            {paths.map((path) => (
              <Link className="reading-path" key={path.href} href={path.href}>
                <span className="eyebrow">{path.label}</span>
                <h3>{path.title}</h3>
                <p>{path.body}</p>
                <span className="text-link">
                  Read the guide <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="resource-section" id="glossary">
          <span className="eyebrow">THE LANGUAGE OF AI SEARCH</span>
          <h2>A glossary you can use.</h2>
          <dl className="glossary-grid">
            {glossary.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.definition}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="resource-section" id="questions">
          <div className="faq-grid">
            <div>
              <span className="eyebrow">COMMON QUESTIONS</span>
              <h2>A few useful distinctions.</h2>
            </div>
            <Faq items={resourceFaqs} />
          </div>
        </section>
        <section className="resource-section" id="discovery">
          <span className="eyebrow">WEBSITE RESOURCES</span>
          <h2>Find the facts and the source material.</h2>
          <p className="resource-section-intro">
            A short company reference and readable content files are available alongside the
            website. Our{' '}
            <Link href="/blog/robots-sitemap-llms-explained">
              guide to crawl and discovery files
            </Link>{' '}
            explains their different purposes.
          </p>
          <div className="file-links">
            <Link href="/ai-info">
              <strong>Citevia facts</strong>
              <span>Company identity, services, and contact information ↗</span>
            </Link>
            <a href="/llms.txt">
              <strong>llms.txt</strong>
              <span>A concise index of published content ↗</span>
            </a>
            <a href="/llms-full.txt">
              <strong>llms-full.txt</strong>
              <span>Readable content from the same published records ↗</span>
            </a>
            <a href="/robots.txt">
              <strong>robots.txt</strong>
              <span>Public crawl rules ↗</span>
            </a>
            <a href="/sitemap.xml">
              <strong>sitemap.xml</strong>
              <span>Canonical URLs for the production website ↗</span>
            </a>
          </div>
        </section>
      </div>
      <Cta />
    </>
  );
}
