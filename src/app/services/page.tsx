import { ServicesPage } from '@/components/arielos/Pages';
import { JsonLd } from '@/components/ui';
import { breadcrumbSchema, faqPageSchema, pageMetadata, webPageSchema } from '@/lib/seo';
import { serviceFaqs } from '@/components/arielos/data.js';
const description =
  'We build the marketing infrastructure that turns AI Search signals into continuous, compounding execution.';
export const metadata = pageMetadata({
  title: 'AI Search Marketing Services',
  description,
  path: '/services',
});
export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ])}
      />
      <JsonLd
        data={webPageSchema(
          'AI Search Marketing Services',
          description,
          '/services',
          'CollectionPage',
        )}
      />
      <JsonLd data={faqPageSchema(serviceFaqs.map(({ q, a }) => ({ question: q, answer: a })))} />
      <div className="arielos-home">
        <ServicesPage />
      </div>
    </>
  );
}
