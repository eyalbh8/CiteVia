import HomeExperience from '@/components/arielos/HomeExperience';
import { JsonLd } from '@/components/ui';
import { pageMetadata, webPageSchema } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'AI Search Marketing & Visibility',
  description: site.description,
  path: '/',
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema('Citevia — AI search marketing and visibility', site.description, '/')}
      />
      <HomeExperience />
    </>
  );
}
