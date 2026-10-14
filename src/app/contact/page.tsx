import { Breadcrumbs, PageIntro, JsonLd } from '@/components/ui';
import { ContactForm } from '@/components/contact-form';
import { ArrowIcon, CheckIcon } from '@/components/icons';
import { pageMetadata, webPageSchema } from '@/lib/seo';
import { site } from '@/lib/site';

const description =
  'Contact Citevia to discuss your B2B brand’s AI visibility, GEO strategy, content, and technical SEO. Email eyal@citevia.com.';
export const metadata = pageMetadata({
  title: 'Contact Citevia — Start with an AI Visibility Audit',
  description,
  path: '/contact',
});
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Contact Citevia', description, '/contact', 'ContactPage')} />
      <div className="container">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
        <div className="contact-layout">
          <div>
            <PageIntro
              eyebrow="LET’S START WITH YOUR QUESTIONS"
              title="A clearer path to your next customer."
              description="Tell us about your business and the buyers you want to reach. We’ll discuss where an audit or a focused engagement can help."
            />
            <a className="contact-email" href={`mailto:${site.email}`}>
              {site.email}
              <ArrowIcon />
            </a>
            {site.bookingUrl !== '/contact' && (
              <p>
                <a className="button button-primary" href={site.bookingUrl}>
                  {site.bookingUrl === '/private-ai-visibility-assessment'
                    ? 'Request a private assessment'
                    : 'Book a strategy call'}{' '}
                  <ArrowIcon />
                </a>
              </p>
            )}
            <div className="contact-expect">
              <h2>A useful first conversation.</h2>
              <ul>
                {[
                  'Your audience, your offer, and the questions buyers ask.',
                  'How your brand appears in AI search today.',
                  'The scope, evidence, and next steps that make sense.',
                ].map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm
            email={site.email}
            directDelivery={Boolean(process.env.CONTACT_WEBHOOK_URL)}
          />
        </div>
      </div>
    </>
  );
}
