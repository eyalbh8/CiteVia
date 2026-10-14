import { MethodologyPage } from '@/components/arielos/Pages';
import { JsonLd } from '@/components/ui';
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo';
const description =
  'Data tells us where to act. The methodology turns those signals into infrastructure that executes faster, learns continuously, and compounds over time.';
export const metadata = pageMetadata({
  title: 'AI Search Marketing Methodology',
  description,
  path: '/methodology',
});
export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Methodology', href: '/methodology' },
        ])}
      />
      <JsonLd
        data={webPageSchema(
          'AI Search Marketing Methodology',
          description,
          '/methodology',
          'WebPage',
        )}
      />
      <div className="arielos-home">
        <MethodologyPage />
      </div>
    </>
  );
}
