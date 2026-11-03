import Campaigns from '@/components/arielos/Campaigns';
import { JsonLd } from '@/components/ui';
import { breadcrumbSchema, faqPageSchema, pageMetadata, webPageSchema } from '@/lib/seo';
import { campaignIntro, campaignFaqs } from '@/content/campaigns';

export const metadata = pageMetadata({
  title: 'Campaign Management — ChatGPT, Social & Search',
  description: campaignIntro.description,
  path: '/campaigns',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(campaignIntro.title, campaignIntro.description, '/campaigns'),
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Campaigns', href: '/campaigns' },
          ]),
          faqPageSchema(campaignFaqs.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />
      <Campaigns />
    </>
  );
}
