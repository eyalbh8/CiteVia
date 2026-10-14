import { Breadcrumbs, PageIntro, Cta, JsonLd } from '@/components/ui';
import { CaseStudyCard } from '@/components/case-study-card';
import { caseStudies } from '@/content/case-studies';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const description =
  'Explore illustrative GEO case studies for property, aviation, hospitality, software, and professional services. Detailed approaches, sample metrics, and measurement context.';
export const metadata = pageMetadata({
  title: 'GEO Case Studies & Worked Examples',
  description,
  path: '/case-studies',
});
export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'Citevia example case studies',
          description,
          '/case-studies',
          'CollectionPage',
        )}
      />
      <div className="container">
        <Breadcrumbs items={[{ name: 'Case studies', href: '/case-studies' }]} />
        <PageIntro
          eyebrow="THE WORK, MADE CONCRETE"
          title="From a buyer question to a better answer."
          description="Explore how an AI visibility challenge can become a focused content, technical, and measurement plan."
        />
        <div className="example-notice">
          <strong>Illustrative studies</strong>
          <p>
            These are constructed educational examples, not client engagements or reported results.
            All dashboard figures and before-and-after numbers are synthetic. Verified client
            stories will be published when evidence and permission are available.
          </p>
        </div>
        <div className="studies-grid">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
        <section className="evidence-standard">
          <span className="eyebrow">WHAT MAKES A USEFUL CASE STUDY</span>
          <h2>Context before conclusions.</h2>
          <div className="principles-grid">
            <div>
              <h3>A defined starting point</h3>
              <p>The audience, market, dates, and baseline behind the work.</p>
            </div>
            <div>
              <h3>A visible method</h3>
              <p>What changed, who approved it, and how observations were collected.</p>
            </div>
            <div>
              <h3>Results with limits</h3>
              <p>
                Counts, denominators, and attribution limits, supported by publishable evidence.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Cta />
    </>
  );
}
