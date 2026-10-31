'use client';

import { useState } from 'react';
import { Link } from './Link.jsx';
import { useHomeSettings } from './settings.jsx';
import { validatePartnerReferral } from '@/lib/contact';

export default function PartnerReferralForm() {
  const { email, directDelivery } = useHomeSettings();
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState(null);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const input = Object.fromEntries(new FormData(form));
    if (input.companyFax) return;
    const { data, error } = validatePartnerReferral(input);
    if (error || !data) {
      setStatus({ error: true, message: error || 'Please check your details.' });
      return;
    }
    setStatus(null);
    if (!directDelivery) {
      const body = `Hello Citevia,\n\nI would like to refer a lead through your partner program.\n\nPartner name: ${data.name}\nPartner email: ${data.email}\nLead company: ${data.company}\n\n${data.message}`;
      const href = `mailto:${email}?subject=${encodeURIComponent(`Partner referral — ${data.company}`)}&body=${encodeURIComponent(body)}`;
      setStatus({
        error: false,
        message:
          'Your referral email draft is ready. Review and send it in your email app to complete the introduction.',
        href,
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
        throw new Error(payload.error || 'Referral delivery could not be confirmed.');
      setStatus({
        error: false,
        message: 'Your referral has been delivered. We’ll follow up using the email you provided.',
      });
      form.reset();
    } catch {
      setStatus({
        error: true,
        message: 'We could not confirm delivery. Please try again or email us directly.',
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="contact-lead__form contact-lead__card"
      onSubmit={submit}
      aria-label="Refer a lead"
      aria-busy={pending}
    >
      <div className="form-grid">
        {[
          { name: 'name', title: 'Your name', autoComplete: 'name', minLength: 2, maxLength: 100 },
          {
            name: 'email',
            title: 'Your email',
            type: 'email',
            autoComplete: 'email',
            maxLength: 254,
          },
          { name: 'leadCompany', title: 'Lead’s company', minLength: 2, maxLength: 150 },
          { name: 'leadName', title: 'Lead’s contact name', minLength: 2, maxLength: 100 },
          { name: 'leadEmail', title: 'Lead’s email', type: 'email', maxLength: 254 },
        ].map(({ name, title, ...props }) => (
          <div className="form-field" key={name}>
            <label htmlFor={`referral-${name}`}>
              {title} <span aria-hidden="true">*</span>
            </label>
            <input id={`referral-${name}`} name={name} required autoComplete="off" {...props} />
          </div>
        ))}
        <div className="form-field partners-referral__notes">
          <label htmlFor="referral-notes">
            A little context <span className="field-optional">optional</span>
          </label>
          <textarea id="referral-notes" name="notes" rows={4} maxLength={1500} />
        </div>
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
            ? 'Sending your referral…'
            : directDelivery
              ? 'Send referral'
              : 'Prepare referral email'}
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
        * Required fields. Share contact details you have permission to pass on. Read our{' '}
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
          Email your introduction to <a href={`mailto:${email}`}>{email}</a> with your name and the
          lead’s contact details.
        </p>
      </noscript>
    </form>
  );
}
