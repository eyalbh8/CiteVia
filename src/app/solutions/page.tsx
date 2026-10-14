import Link from 'next/link';
import { Breadcrumbs, PageIntro, Cta, JsonLd } from '@/components/ui';
import { ArrowIcon } from '@/components/icons';
import { solutions } from '@/content/solutions';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const description =
  'AI search and GEO solutions for B2B software, professional services, and marketing teams. Explore work shaped around your buyers and delivery needs.';
export const metadata = pageMetadata({
  title: 'GEO Solutions for B2B Teams',
  description,
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema('Citevia solutions', description, '/solutions', 'CollectionPage')}
      />
      <div className="container">
        <Breadcrumbs items={[{ name: 'Solutions', href: '/solutions' }]} />
        <PageIntro
          eyebrow="BUILT AROUND YOUR BUYERS"
          title="Different decisions. The right evidence."
          description="Your audience, sales process, and internal capacity shape the work. Find a starting point that fits the way your business grows."
        />
        <div className="solution-directory">
          {solutions.map((solution, i) => (
            <article className="solution-row" key={solution.slug}>
              <span className="large-step">0{i + 1}</span>
              <div>
                <span className="eyebrow">{solution.name}</span>
                <h2>{solution.title}</h2>
                <p>{solution.intro}</p>
                <Link className="text-link" href={`/solutions/${solution.slug}`}>
                  Explore this solution <ArrowIcon />
                </Link>
              </div>
              <aside>
                <span className="small-label">A BUYER MIGHT ASK</span>
                <p>“{solution.questions[0]}”</p>
              </aside>
            </article>
          ))}
        </div>
        <div className="resource-callout">
          <div>
            <span className="eyebrow">ONE CONNECTED APPROACH</span>
            <h2>Start with what your buyers need to know.</h2>
            <p>
              We connect strategy, evidence, publishing, and measurement. The scope follows the
              problem and the team available to solve it.
            </p>
          </div>
          <Link className="button button-outline" href="/methodology">
            See our approach <ArrowIcon />
          </Link>
        </div>
      </div>
      <Cta />
    </>
  );
}
