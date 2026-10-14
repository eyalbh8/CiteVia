import { PageHero, Section } from '@/components/arielos/UI';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
export const metadata = {
  ...pageMetadata({
    title: 'Privacy Notice',
    description: 'How information is handled when you use the Citevia website or contact us.',
    path: '/privacy',
  }),
  robots: { index: false, follow: true },
};
export default function PrivacyPage() {
  return (
    <div className="arielos-home">
      <PageHero
        eyebrow="WEBSITE INFORMATION"
        title="Privacy notice"
        copy="This notice describes the contact and storage features of this website. Last updated 14 October 2026."
      />
      <Section tone="paper">
        <div className="legal-copy">
          <section>
            <h2>Contact information</h2>
            <p>
              When you contact Citevia, you choose which information to share. This may include your
              name, email address, company, website, and the details of your inquiry. We use that
              information to understand and respond to your request and discuss the services you
              asked about.
            </p>
          </section>
          <section>
            <h2>How the contact form works</h2>
            <p>
              When the form says “Prepare my email request,” it prepares a draft in your email
              application. The details are not submitted to Citevia through the website. You must
              send the email yourself to complete the inquiry.
            </p>
            <p>
              If direct submission is enabled and the button says “Send your request,” the website
              sends your details to Citevia’s configured inquiry service. The website reports
              success only after that service accepts the request. Please avoid sending sensitive
              personal information in the form.
            </p>
          </section>
          <section>
            <h2>Browser storage and technical information</h2>
            <p>
              The website uses a light theme and does not include advertising cookies or third-party
              analytics scripts. A preference saved by an earlier version can be removed through
              your browser settings.
            </p>
            <p>
              The hosting and email services used to operate the site and respond to inquiries may
              process technical or delivery information. Their processing depends on the services
              used. The application does not create a separate contact database.
            </p>
          </section>
          <section>
            <h2>Questions about your information</h2>
            <p>
              To ask about an inquiry, request a correction, or request deletion of information you
              have shared, contact <a href={`mailto:${site.email}`}>{site.email}</a>. We will review
              your request and any applicable record-keeping requirements.
            </p>
          </section>
        </div>
      </Section>
    </div>
  );
}
