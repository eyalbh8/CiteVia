'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { contactInterests, validateContact } from '@/lib/contact';
import { ArrowIcon } from './icons';

export function ContactForm({
  email,
  directDelivery,
  assessment = false,
}: {
  email: string;
  directDelivery: boolean;
  assessment?: boolean;
}) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ message: string; error: boolean; mailto?: string } | null>(
    null,
  );

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const input = Object.fromEntries(new FormData(form));
    const { data, error } = validateContact(input);
    if (error || !data) {
      setStatus({ message: error || 'Please check your details.', error: true });
      return;
    }
    if (data.companyFax) return;
    setStatus(null);
    if (!directDelivery) {
      const body = `Hello Citevia,\n\nI would like to discuss: ${data.interest}\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nWebsite: ${data.website || 'Not provided'}${data.role ? `\nRole: ${data.role}` : ''}${data.industry ? `\nIndustry: ${data.industry}` : ''}${data.markets ? `\nPriority markets: ${data.markets}` : ''}\n\n${data.message}`;
      const mailto = `mailto:${email}?subject=${encodeURIComponent(`${data.interest} — ${data.company}`)}&body=${encodeURIComponent(body)}`;
      setStatus({
        message:
          'Your email draft is ready. Send it from your email app to complete your request. Nothing has been submitted through this website.',
        error: false,
        mailto,
      });
      window.location.href = mailto;
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
    } catch (error) {
      setStatus({
        message:
          error instanceof Error && error.name !== 'TimeoutError'
            ? error.message
            : `Delivery could not be confirmed. Please email ${email} directly.`,
        error: true,
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="contact-form"
      action="/api/contact"
      method="post"
      onSubmit={submit}
      aria-busy={pending}
    >
      <h2>{assessment ? 'Request your private assessment.' : 'Tell us where you want to go.'}</h2>
      <p>
        {directDelivery
          ? 'Share a little context so we can start with the right questions.'
          : 'Fill in your details to prepare an email. You’ll review and send it in your email app.'}
      </p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="Alex Morgan"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Work email *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="alex@company.com"
          />
        </div>
        <div className="field">
          <label htmlFor="company">Company *</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            required
            minLength={2}
            maxLength={150}
            placeholder="Your company"
          />
        </div>
        <div className="field">
          <label htmlFor="website">
            Website <span>(optional)</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            maxLength={500}
            placeholder="https://company.com"
          />
        </div>
        {assessment && (
          <>
            <div className="field">
              <label htmlFor="role">
                Your role <span>(optional)</span>
              </label>
              <input
                id="role"
                name="role"
                autoComplete="organization-title"
                maxLength={200}
                placeholder="Marketing director"
              />
            </div>
            <div className="field">
              <label htmlFor="industry">
                Industry <span>(optional)</span>
              </label>
              <input
                id="industry"
                name="industry"
                maxLength={200}
                placeholder="Real estate, software, hospitality…"
              />
            </div>
            <div className="field field-full">
              <label htmlFor="markets">
                Priority markets <span>(optional)</span>
              </label>
              <input
                id="markets"
                name="markets"
                maxLength={200}
                placeholder="Countries, regions, and languages"
              />
            </div>
          </>
        )}
        <div className="field field-full">
          <label htmlFor="interest">What can we help with? *</label>
          <select
            id="interest"
            name="interest"
            required
            defaultValue={assessment ? 'Private AI visibility assessment' : 'AI visibility audit'}
          >
            {contactInterests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor="message">
            A little context <span>(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            maxLength={3000}
            rows={4}
            placeholder="Your audience, your priorities, or the question you’re trying to answer…"
          />
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="companyFax">Leave this field empty</label>
        <input id="companyFax" name="companyFax" autoComplete="off" tabIndex={-1} />
      </div>
      <button type="submit" className="button button-primary" disabled={pending}>
        {pending
          ? 'Sending your request…'
          : directDelivery
            ? 'Send your request'
            : 'Prepare my email request'}
        <ArrowIcon />
      </button>
      <div className="form-policy">
        * Required fields. We use your details to respond to your inquiry. Read our{' '}
        <Link href="/privacy">privacy notice</Link>.
      </div>
      <noscript>
        <p>
          Please email <a href={`mailto:${email}`}>{email}</a> directly to make an inquiry.
        </p>
      </noscript>
      <div aria-live="polite" aria-atomic="true">
        {status && (
          <div className="form-message" data-error={status.error}>
            <p>{status.message}</p>
            {status.mailto && <a href={status.mailto}>Open the email draft again ↗</a>}
            {status.error && <a href={`mailto:${email}`}>Email {email} ↗</a>}
          </div>
        )}
      </div>
    </form>
  );
}
