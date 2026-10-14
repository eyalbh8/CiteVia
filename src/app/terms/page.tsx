import { PageHero, Section } from '@/components/arielos/UI';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
export const metadata = {
  ...pageMetadata({
    title: 'Website Terms',
    description: 'Information about using the Citevia website and discussing a service engagement.',
    path: '/terms',
  }),
  robots: { index: false, follow: true },
};
export default function TermsPage() {
  return (
    <div className="arielos-home">
      <PageHero
        eyebrow="WEBSITE INFORMATION"
        title="Website terms"
        copy="Information about this website and our service descriptions. Last updated 13 October 2026."
      />
      <Section tone="paper">
        <div className="legal-copy">
          <section>
            <h2>Purpose of the website</h2>
            <p>
              This website introduces Citevia’s services and shares general information about search
              visibility, content, and measurement. Articles describe approaches and considerations;
              they are not a promise of a particular outcome for your business.
            </p>
          </section>
          <section>
            <h2>Service engagements</h2>
            <p>
              Contacting Citevia or requesting an audit does not by itself create a service
              agreement. Scope, fees, deliverables, timing, responsibilities, and any other
              engagement terms are agreed separately before work begins.
            </p>
          </section>
          <section>
            <h2>Search visibility and examples</h2>
            <p>
              Search and AI providers control their own systems. Citevia does not guarantee
              indexing, a particular ranking, a citation, or a recommendation. Illustrations on this
              website explain concepts and do not represent client results unless explicitly
              identified and supported as such.
            </p>
          </section>
          <section>
            <h2>External services and trademarks</h2>
            <p>
              References to ChatGPT, Gemini, Perplexity, Claude, and Google identify the relevant
              services. Their names belong to their respective owners. A mention on this website
              does not imply a partnership or endorsement. External links lead to content maintained
              by other organizations.
            </p>
          </section>
          <section>
            <h2>Corrections and questions</h2>
            <p>
              If you notice inaccurate information or have a question about the site, email{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>
        </div>
      </Section>
    </div>
  );
}
