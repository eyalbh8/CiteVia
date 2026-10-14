import { AboutPage } from '@/components/arielos/Pages';
import { JsonLd } from '@/components/ui';
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo';
const description =
  'Citevia is a data-driven AI Search marketing partner. We build custom infrastructure around each client, using data to identify where to act, executing at speed, and continuously learning from results.';
export const metadata = pageMetadata({ title: 'About Citevia', description, path: '/about' });
export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'About Citevia', href: '/about' },
        ])}
      />
      <JsonLd data={webPageSchema('About Citevia', description, '/about', 'AboutPage')} />
      <div className="arielos-home">
        <AboutPage />
      </div>
    </>
  );
}
