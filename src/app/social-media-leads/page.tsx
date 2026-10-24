import SocialMediaLeads from '@/components/arielos/SocialMediaLeads';
import { JsonLd } from '@/components/ui';
import { breadcrumbSchema, faqPageSchema, pageMetadata, webPageSchema } from '@/lib/seo';
import { socialLeadIntro, socialLeadFaqs } from '@/content/social-media-leads';

export const metadata = pageMetadata({
  title: 'Social Media Leads — Reddit & Instagram',
  description: socialLeadIntro.description,
  path: '/social-media-leads',
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(socialLeadIntro.title, socialLeadIntro.description, '/social-media-leads'),
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Social media leads', href: '/social-media-leads' },
          ]),
          faqPageSchema(socialLeadFaqs.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />
      <SocialMediaLeads />
    </>
  );
}
