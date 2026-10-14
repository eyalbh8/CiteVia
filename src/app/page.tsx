import HomeExperience from '@/components/arielos/HomeExperience';
import { JsonLd } from '@/components/ui';
import { faqPageSchema, pageMetadata, webPageSchema } from '@/lib/seo';
import { site } from '@/lib/site';
import { faqs } from '@/components/arielos/data.js';

export const metadata = pageMetadata({
  title: 'AI Search Marketing & Visibility',
  description: site.description,
  path: '/',
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema('Citevia — AI search marketing and visibility', site.description, '/'),
          faqPageSchema(faqs.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />
      <HomeExperience />
    </>
  );
}
