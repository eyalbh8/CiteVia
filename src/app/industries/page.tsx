import { IndustriesPage } from '@/components/arielos/Pages';
import { JsonLd } from '@/components/ui';
import { pageMetadata, webPageSchema } from '@/lib/seo';
const description =
  'We work where buyers research privately, decisions carry meaningful consequence and a generic mention is no substitute for a credible, context-specific recommendation.';
export const metadata = pageMetadata({
  title: 'Industries — High-Consideration Markets',
  description,
  path: '/industries',
});
export default function Page() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'Industries — High-Consideration Markets',
          description,
          '/industries',
          'CollectionPage',
        )}
      />
      <div className="arielos-home">
        <IndustriesPage />
      </div>
    </>
  );
}
