import '@/app/legacy.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/content/case-studies';
import { Breadcrumbs, PageIntro, Cta, JsonLd } from '@/components/ui';
import { ArrowIcon } from '@/components/icons';
import { pageMetadata, webPageSchema } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return pageMetadata({
    title: `Example: ${study.title}`,
    description: study.description,
    path: `/case-studies/${slug}`,
  });
}
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  const path = `/case-studies/${slug}`;
  return (
    <>
      <JsonLd
        data={webPageSchema(`Illustrative example: ${study.title}`, study.description, path)}
      />
      <article className="container">
        <Breadcrumbs
          items={[
            { name: 'Case studies', href: '/case-studies' },
            { name: study.title, href: path },
          ]}
        />
        <PageIntro
          eyebrow={`${study.sector} / ILLUSTRATIVE EXAMPLE`}
          title={study.title}
          description={study.description}
        />
        <div className="example-notice">
          <strong>A constructed scenario</strong>
          <p>
            This is a fictional worked example. Any figures are synthetic demonstration data, not
            achieved client results. The scope, timeline, and interpretation explain how a real
            engagement could be documented.
          </p>
        </div>
        {study.profile && (
          <dl className="case-profile">
            {Object.entries(study.profile).map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
        {study.metrics && (
          <section className="case-results" aria-label="Synthetic before and after metrics">
            <div className="section-heading">
              <span className="eyebrow">ILLUSTRATIVE OUTCOMES</span>
              <h2>The report, with the context attached.</h2>
              <p>
                Invented baseline → follow-up figures. These are not a forecast or client result.
              </p>
            </div>
            <div className="case-metrics">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>
                    <del>{metric.before}</del>
                    <span aria-hidden="true"> → </span>
                    <span className="sr-only"> to </span>
                    {metric.after}
                  </strong>
                  <p>{metric.context}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        <div className="case-question">
          <span className="eyebrow">THE BUYER QUESTION</span>
          <p>“{study.question}”</p>
        </div>
        <div className="service-detail-grid">
          <div className="prose">
            <section className="content-section">
              <h2>The challenge</h2>
              <p>{study.challenge}</p>
            </section>
            <section className="content-section">
              <h2>A proposed approach</h2>
              <ol className="study-steps">
                {study.approach.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </section>
            {study.timeline && (
              <section className="content-section">
                <h2>A 90-day delivery plan</h2>
                <div className="study-timeline">
                  {study.timeline.map((step) => (
                    <div key={step.period}>
                      <span className="eyebrow">{step.period}</span>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
            <section className="content-section">
              <h2>How we would evaluate the work</h2>
              <ul>
                {study.measurement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            {study.interpretation && (
              <section className="content-section">
                <h2>Reading the example results</h2>
                <p>{study.interpretation}</p>
              </section>
            )}
            <section className="answer-block">
              <span className="eyebrow">THE NEXT DECISION</span>
              <p>{study.decision}</p>
            </section>
            <p className="source-note">
              This educational example was created by Citevia. For our measurement principles, read{' '}
              <Link href="/blog/measuring-ai-search-visibility">
                how to measure AI search visibility
              </Link>
              .
            </p>
          </div>
          <aside className="deliverables-panel">
            <span className="eyebrow">PROPOSED DELIVERABLES</span>
            <h2>What the team would receive</h2>
            <ul>
              {study.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="text-link" href={`/services/${study.relatedService}`}>
              Explore the service <ArrowIcon />
            </Link>
          </aside>
        </div>
        <div className="resource-callout">
          <div>
            <span className="eyebrow">APPLY IT TO YOUR BUSINESS</span>
            <h2>What would your starting point look like?</h2>
          </div>
          <Link
            className="button button-outline"
            href={study.industry ? `/industries/${study.industry}` : `/solutions/${study.solution}`}
          >
            Explore the sector <ArrowIcon />
          </Link>
        </div>
      </article>
      <Cta />
    </>
  );
}
