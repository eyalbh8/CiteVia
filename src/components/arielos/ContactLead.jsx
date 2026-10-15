'use client';

import { useHomeSettings } from './settings.jsx';
import { useState } from 'react';
import { Link } from './Link.jsx';
import BookMeeting from './BookMeeting.jsx';
import { useLanguage } from '@/i18n/LanguageProvider.jsx';
import { validateContact } from '@/lib/contact';

export default function ContactLead({ standalone = false }) {
  const { email, directDelivery } = useHomeSettings();
  const { language } = useLanguage();
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState(null);
  const Heading = standalone ? 'h1' : 'h2';

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get('companyFax')) return;
    const { data, error } = validateContact({
      ...Object.fromEntries(fields),
      website: '',
      interest: 'Something else',
      message: '',
    });
    if (error || !data) {
      setStatus({ error: true, message: error || 'Please check your details.' });
      return;
    }
    setStatus(null);
    if (!directDelivery) {
      const body =
        language === 'es'
          ? `Nombre: ${data.name}\nCorreo electrónico: ${data.email}\nEmpresa: ${data.company}\nTeléfono: ${data.phone || 'No indicado'}\n\nMe gustaría hablar con Citevia sobre la visibilidad en búsquedas con IA.`
          : language === 'tr'
            ? `Ad: ${data.name}\nE-posta: ${data.email}\nŞirket: ${data.company}\nTelefon: ${data.phone || 'Belirtilmedi'}\n\nCitevia ile yapay zekâ arama görünürlüğü hakkında görüşmek istiyorum.`
            : `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nPhone: ${data.phone || 'Not supplied'}\n\nI would like to discuss AI search visibility with Citevia.`;
      const subject =
        language === 'es'
          ? 'Citevia — solicitud de contacto'
          : language === 'tr'
            ? 'Citevia — iletişim talebi'
            : 'Citevia — contact request';
      const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({
        message:
          'Your email draft is ready. Send it from your email app to complete your request. Nothing has been submitted through this website.',
        href,
        error: false,
      });
      window.location.href = href;
      return;
    }
    setPending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15000),
      });
      const payload = await response.json();
      if (!response.ok)
        throw new Error(
          payload.error || 'We could not deliver your request. Please email us directly.',
        );
      setStatus({
        message:
          'Your request has been delivered. Thank you — we will follow up using the email you provided.',
        error: false,
      });
      form.reset();
    } catch {
      setStatus({
        message: 'We could not confirm delivery. Please try again or email us directly.',
        error: true,
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <section
      className={`contact-lead${standalone ? ' contact-lead--page' : ''}`}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell contact-lead__layout">
        <div className="contact-lead__copy">
          <p className="eyebrow">LET’S TALK</p>
          <Heading id="contact-title">Contact us</Heading>
          <p>Let’s talk about your business and how we can help you get found.</p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>Prefer to choose a time?</p>
          <BookMeeting className="button button--primary contact-lead__booking">
            <span>Book on Cal.com</span>
            <span aria-hidden="true">↗</span>
          </BookMeeting>
        </div>
        <form
          className="contact-lead__form contact-lead__card"
          onSubmit={submit}
          aria-label="Contact us"
          aria-busy={pending}
        >
          <div className="form-grid">
            {[
              { name: 'name', title: 'Name', autoComplete: 'name', minLength: 2, maxLength: 100 },
              {
                name: 'email',
                title: 'Email',
                type: 'email',
                autoComplete: 'email',
                maxLength: 254,
              },
              {
                name: 'company',
                title: 'Company name',
                autoComplete: 'organization',
                minLength: 2,
                maxLength: 150,
              },
              {
                name: 'phone',
                title: 'Phone number',
                type: 'tel',
                autoComplete: 'tel',
                maxLength: 50,
                optional: true,
              },
            ].map(({ name, title, optional, ...props }) => (
              <div className="form-field" key={name}>
                <label htmlFor={`contact-${name}`}>
                  {title}{' '}
                  {optional ? (
                    <span className="field-optional">optional</span>
                  ) : (
                    <span aria-hidden="true">*</span>
                  )}
                </label>
                <input id={`contact-${name}`} name={name} required={!optional} {...props} />
              </div>
            ))}
          </div>
          <div hidden>
            <label>
              Leave this field empty
              <input name="companyFax" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <button
            className="button button--primary contact-lead-submit"
            type="submit"
            disabled={pending}
          >
            <span>
              {pending
                ? 'Sending your request…'
                : directDelivery
                  ? 'Send details'
                  : 'Prepare my email request'}
            </span>
            <span aria-hidden="true">→</span>
          </button>
          {!directDelivery && (
            <p className="email-handoff">
              Opens an email draft to <a href={`mailto:${email}`}>{email}</a>. Review and send it in
              your email app.
            </p>
          )}
          <p className="email-handoff">
            * Required fields. We use your details to respond to your inquiry. Read our{' '}
            <Link to="/privacy">privacy notice</Link>.
          </p>
          <div role="status" aria-live="polite" aria-atomic="true">
            {status && (
              <div className="email-handoff contact-lead__status" data-error={status.error}>
                <p>{status.message}</p>
                {status.href && <a href={status.href}>Open the email draft again</a>}
                {status.error && <a href={`mailto:${email}`}>{email}</a>}
              </div>
            )}
          </div>
          <noscript>
            <p className="email-handoff">
              Please email <a href={`mailto:${email}`}>{email}</a> directly to make an inquiry.
            </p>
          </noscript>
        </form>
      </div>
    </section>
  );
}
