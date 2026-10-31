import Link from 'next/link';
import { Breadcrumbs, JsonLd } from '@/components/ui';
import PartnerReferralForm from '@/components/arielos/PartnerReferralForm';
import { partnerDescription, partnerFaqs, partnerSteps } from '@/content/partners';
import { faqPageSchema, pageMetadata, webPageSchema } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Referral partners',
  description: partnerDescription,
  path: '/partners',
});

export default function PartnersPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema('Citevia referral partners', partnerDescription, '/partners'),
          faqPageSchema(partnerFaqs.map(({ q, a }) => ({ question: q, answer: a }))),
        ]}
      />
      <div className="arielos-home partners-page">
        <section className="page-hero partners-hero" aria-labelledby="partners-title">
          <div className="shell">
            <Breadcrumbs items={[{ name: 'Partners', href: '/partners' }]} />
            <div className="partners-hero__layout">
              <div>
                <p className="eyebrow">CITEVIA PARTNER PROGRAM</p>
                <h1 id="partners-title">
                  Bring a lead. <em>Earn every month.</em>
                </h1>
                <p className="page-hero__copy">
                  Introduce us to our next client and earn 10% of their monthly payment. You bring
                  the lead. We handle the rest.
                </p>
                <div className="page-hero__actions">
                  <Link className="button button--primary" href="#refer-a-lead">
                    <span>Refer a lead</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <aside className="partners-commission" aria-label="Referral commission">
                <p className="eyebrow">YOUR INTRODUCTION. YOUR REWARD.</p>
                <p className="partners-commission__rate">10%</p>
                <p className="partners-commission__label">of the client’s monthly payment</p>
                <p className="partners-commission__note">
                  Earn a recurring commission when your lead becomes a paying Citevia client.
                </p>
              </aside>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="partners-how-title">
          <div className="shell">
            <header className="section-header">
              <p className="eyebrow">HOW IT WORKS</p>
              <h2 id="partners-how-title">
                One introduction. <em>Ongoing rewards.</em>
              </h2>
            </header>
            <ol className="partners-steps">
              {partnerSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="partners-steps__number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section
          className="section section--paper"
          id="refer-a-lead"
          aria-labelledby="referral-title"
        >
          <div className="shell partners-referral">
            <div className="section-header">
              <p className="eyebrow">MAKE THE INTRODUCTION</p>
              <h2 id="referral-title">
                Know someone <em>we should meet?</em>
              </h2>
              <p className="section-copy">
                Share your details so we can credit the referral to you, then tell us who to
                contact. That’s all you need to get started.
              </p>
            </div>
            <PartnerReferralForm />
          </div>
        </section>
        <section className="section" aria-labelledby="partners-faq-title">
          <div className="shell partners-faq">
            <header className="section-header">
              <p className="eyebrow">A FEW DETAILS</p>
              <h2 id="partners-faq-title">
                Partner questions, <em>answered.</em>
              </h2>
            </header>
            <div>
              {partnerFaqs.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
