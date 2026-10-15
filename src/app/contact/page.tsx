import { Breadcrumbs, JsonLd } from '@/components/ui';
import ContactLead from '@/components/arielos/ContactLead';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const description =
  'Contact Citevia to discuss your brand’s AI visibility, GEO strategy, content, and technical SEO. Share your details or book a call.';
export const metadata = pageMetadata({
  title: 'Contact us',
  description,
  path: '/contact',
});
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Contact Citevia', description, '/contact', 'ContactPage')} />
      <div className="arielos-home contact-page">
        <div className="shell">
          <Breadcrumbs items={[{ name: 'Contact us', href: '/contact' }]} />
        </div>
        <ContactLead standalone />
      </div>
    </>
  );
}
