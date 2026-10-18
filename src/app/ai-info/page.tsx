import '@/app/legacy.css';
import Link from 'next/link';
import { Breadcrumbs, PageIntro, JsonLd } from '@/components/ui';
import { services } from '@/content/services';
import { pageMetadata, webPageSchema } from '@/lib/seo';
import { site } from '@/lib/site';

const description =
  'A factual reference for Citevia: its website, contact address, search and marketing services, editorial approach, and the status of illustrative example studies.';
export const metadata = pageMetadata({
  title: 'Citevia Company Facts & Content Reference',
  description,
  path: '/ai-info',
});
export default function AiInfoPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Citevia company facts', description, '/ai-info', 'AboutPage')} />
      <div className="container">
        <Breadcrumbs items={[{ name: 'Citevia facts', href: '/ai-info' }]} />
        <PageIntro
          eyebrow="COMPANY & CONTENT REFERENCE"
          title="Citevia, in plain language."
          description="A concise reference for people and tools reading this website. The linked pages provide the full context for each topic."
        />
        <div className="prose legal-prose">
          <h2>Identity and contact</h2>
          <dl className="company-facts">
            <div>
              <dt>Brand</dt>
              <dd>Citevia</dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>
                <a href={site.url}>{site.url}</a>
              </dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>
                AI search strategy, SEO, AEO, content, reputation, acquisition, conversion, and
                measurement.
              </dd>
            </div>
          </dl>
          <h2>What Citevia does</h2>
          <p>
            {site.description} The website describes services and a consulting approach. Project
            scope and deliverables are agreed through a conversation about the business and its
            priorities.
          </p>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.name}</Link>: {service.summary}
              </li>
            ))}
          </ul>
          <h2>Who the work is for</h2>
          <p>
            Explore the <Link href="/solutions">solution pages</Link> for B2B software, professional
            services, and marketing teams. These pages describe intended use cases, not a published
            list of clients. The <Link href="/industries">industry pages</Link> cover yachting,
            private aviation, real estate, jewellery and watches, and hospitality.
          </p>
          <h2>Examples and evidence</h2>
          <p>
            The <Link href="/case-studies">case study collection</Link> contains constructed,
            clearly labeled educational examples. They are not completed client engagements,
            testimonials, or evidence of achieved performance. Dashboard figures and
            before-and-after metrics are synthetic; no live analytics API is connected. No
            independent AI recommendation, search ranking, or commercial outcome is guaranteed.
          </p>
          <h2>Published resources</h2>
          <p>
            The <Link href="/blog">blog</Link> contains original guides with an organization byline,
            publication dates, and source links beside relevant claims. The{' '}
            <Link href="/resources">resource library</Link> includes a glossary and common
            questions.
          </p>
          <p>
            <a href="/llms.txt">llms.txt</a> provides a concise content index.{' '}
            <a href="/llms-full.txt">llms-full.txt</a> provides a text companion generated from the
            same content records. Both supplement the human-readable pages.
          </p>
          <h2>Corrections</h2>
          <p>
            Send factual corrections or questions to{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>. This reference was updated on{' '}
            <time dateTime={site.updated}>{site.updated}</time>.
          </p>
        </div>
      </div>
    </>
  );
}
