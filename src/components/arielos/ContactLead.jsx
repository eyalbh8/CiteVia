'use client';

import { useHomeSettings } from './settings.jsx';
import { useState } from 'react';
import { Link } from './Link.jsx';
import { assessmentHref } from './data.js';

export default function ContactLead() {
  const { email } = useHomeSettings();
  const [draft, setDraft] = useState('');
  function prepareEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('website')) return;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nPhone: ${data.get('phone') || 'Not supplied'}\n\nI would like to discuss AI search visibility with Citevia.`;
    const href = `mailto:${email}?subject=${encodeURIComponent('Citevia — contact request')}&body=${encodeURIComponent(body)}`;
    setDraft(href);
    window.location.href = href;
  }
  return (
    <section className="contact-lead" id="contact">
      <div className="shell contact-lead__layout">
        <div className="contact-lead__copy">
          <p className="eyebrow">Leave your details</p>
          <h2>Tell us who to reach.</h2>
          <p>
            Share a few details and we will follow up. Prefer a full private assessment?{' '}
            <Link to={assessmentHref}>Start here</Link>.
          </p>
        </div>
        <form className="contact-lead__form contact-lead__card" onSubmit={prepareEmail}>
          <div className="form-grid">
            {[
              { name: 'name', title: 'Name', autoComplete: 'name', maxLength: 120 },
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
                maxLength: 160,
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
                <label htmlFor={`home-${name}`}>
                  {title} {optional && <span className="field-optional">optional</span>}
                </label>
                <input id={`home-${name}`} name={name} required={!optional} {...props} />
              </div>
            ))}
          </div>
          <div hidden>
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <button className="button button--primary contact-lead-submit" type="submit">
            <span>Send details</span>
            <span aria-hidden="true">→</span>
          </button>
          <p className="email-handoff">
            Opens an email draft to <a href={`mailto:${email}`}>{email}</a>. Review and send it in
            your email app.
          </p>
          <p className="email-handoff" role="status">
            {draft && (
              <>
                Your draft is ready. <a href={draft}>Open the email draft again</a>.
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
