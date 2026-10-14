import Link from 'next/link';
import { notFound } from 'next/navigation';
import { solutions } from '@/content/solutions';
import { services } from '@/content/services';
import { Breadcrumbs, PageIntro, JsonLd, Cta } from '@/components/ui';
import { ArrowIcon } from '@/components/icons';
import { pageMetadata, webPageSchema } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  return pageMetadata({
    title: `GEO for ${solution.name}`,
    description: solution.description,
    path: `/solutions/${slug}`,
  });
}
export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  const path = `/solutions/${slug}`;
  return (
    <>
      <JsonLd data={webPageSchema(solution.title, solution.description, path)} />
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Solutions', href: '/solutions' },
            { name: solution.name, href: path },
          ]}
        />
        <PageIntro
          eyebrow={`GEO FOR ${solution.name.toUpperCase()}`}
          title={solution.title}
          description={solution.intro}
        />
        <section className="buyer-questions">
          <span className="eyebrow">START WITH THE QUESTIONS</span>
          <div>
            {solution.questions.map((question) => (
              <p key={question}>“{question}”</p>
            ))}
          </div>
        </section>
        <div className="service-detail-grid">
          <div className="prose">
            {solution.priorities.map((priority) => (
              <section className="content-section" key={priority.title}>
                <h2>{priority.title}</h2>
                <p>{priority.body}</p>
              </section>
            ))}
          </div>
          <aside className="deliverables-panel">
            <span className="eyebrow">A PRACTICAL STARTING POINT</span>
            <h2>What the work can include</h2>
            <ul>
              {solution.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button button-primary" href="/contact">
              Discuss your priorities <ArrowIcon />
            </Link>
          </aside>
        </div>
        <div className="resource-callout">
          <div>
            <span className="example-label">Illustrative example</span>
            <h2>See how the work could take shape.</h2>
            <p>
              Explore a constructed scenario with an approach, deliverables, and a measurement plan.
            </p>
          </div>
          <Link className="text-link" href={`/case-studies/${solution.study}`}>
            Read the example study <ArrowIcon />
          </Link>
        </div>
        <section className="related-services">
          <h2>Services behind this solution</h2>
          <div className="related-links">
            {solution.services.map((slug) => (
              <Link key={slug} href={`/services/${slug}`}>
                {services.find((service) => service.slug === slug)?.name}
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Cta />
    </>
  );
}
