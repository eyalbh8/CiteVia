import { ServicesPage } from '@/components/arielos/Pages';
import { JsonLd } from '@/components/ui';
import { pageMetadata, webPageSchema } from '@/lib/seo';
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
        data={webPageSchema(
          'AI Search Marketing Services',
          description,
          '/services',
          'CollectionPage',
        )}
      />
      <div className="arielos-home">
        <ServicesPage />
      </div>
    </>
  );
}
