import AssessmentPage from '@/components/arielos/AssessmentPage';
import { JsonLd } from '@/components/ui';
import { pageMetadata, webPageSchema } from '@/lib/seo';
const description =
  'A discreet first look at how your brand is understood. Share your organisation, markets and buyer priorities with Citevia.';
export const metadata = pageMetadata({
  title: 'Private AI Visibility Assessment',
  description,
  path: '/private-ai-visibility-assessment',
});
export const dynamic = 'force-dynamic';
export default function Page() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'Private AI visibility assessment',
          description,
          '/private-ai-visibility-assessment',
          'ContactPage',
        )}
      />
      <div className="arielos-home">
        <AssessmentPage directDelivery={Boolean(process.env.CONTACT_WEBHOOK_URL)} />
      </div>
    </>
  );
}
