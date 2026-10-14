'use client';

import { useRef, useState } from 'react';
import { Link } from './Link.jsx';
import { useHomeSettings } from './settings.jsx';
import { validateContact } from '@/lib/contact';
const initialAssessmentValues = {
  name: '',
  email: '',
  company: '',
  website: '',
  role: '',
  industry: '',
  markets: '',
  objective: '',
  concern: '',
  privacyConsent: false,
  websiteConfirmation: '',
};

const roles = [
  'Founder / owner',
  'Chief executive',
  'Marketing / brand leader',
  'Communications / reputation leader',
  'Digital / growth leader',
  'Adviser / agency partner',
  'Other',
];
const industries = [
  'Yachting',
  'Private aviation',
  'Luxury real estate',
  'Jewellery & watches',
  'Luxury hospitality',
  'Financial / professional services',
  'Other high-consideration category',
];
const objectives = [
  'Establish an AI recommendation baseline',
  'Improve visibility with priority buyers',
  'Correct inaccurate or outdated interpretation',
  'Strengthen authority and reputation signals',
  'Prepare for a market, brand or reputation initiative',
  'Explore strategic fit',
];
function Field({ id, label, hint, error, children, className = '' }) {
  const describedBy =
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`form-field ${className}`.trim()}>
      <label htmlFor={id}>{label}</label>
      {hint && (
        <p className="field-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {children({ id, describedBy, invalid: Boolean(error) })}
      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function AssessmentPage({ directDelivery = false }) {
  const { email } = useHomeSettings();
  const [values, setValues] = useState(initialAssessmentValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const errorSummary = useRef(null);
  const [draft, setDraft] = useState('');

  const update = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };
  const inputProps = (field, details) => ({
    id: details.id,
    name: field,
    value: values[field],
    onChange: update(field),
    'aria-describedby': details.describedBy,
    'aria-invalid': details.invalid,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    if (status === 'loading') return;
    const nextErrors = {};
    for (const field of [
      'name',
      'email',
      'company',
      'website',
      'role',
      'industry',
      'markets',
      'objective',
    ]) {
      if (!values[field].trim()) nextErrors[field] = 'Please complete this required field.';
    }
    if (!values.privacyConsent) nextErrors.privacyConsent = 'Please confirm the privacy consent.';
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      requestAnimationFrame(() => errorSummary.current?.focus());
      return;
    }
    const website = /^https?:\/\//i.test(values.website)
      ? values.website
      : `https://${values.website}`;
    const { data, error } = validateContact({
      name: values.name,
      email: values.email,
      company: values.company,
      website,
      role: values.role,
      industry: values.industry,
      markets: values.markets,
      interest: 'Private AI visibility assessment',
      message: `Objective: ${values.objective}\n\n${values.concern}`,
      companyFax: values.websiteConfirmation,
    });
    if (error || !data || data.companyFax) {
      setStatus('error');
      setStatusMessage(error || 'Please email us directly to discuss your request.');
      return;
    }
    setErrors({});
    setStatusMessage('');
    setDraft('');
    if (!directDelivery) {
      const body = `Hello Citevia,\n\nI would like a private AI visibility assessment.\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nWebsite: ${data.website}\nRole: ${data.role}\nIndustry: ${data.industry}\nMarkets: ${data.markets}\n\n${data.message}`;
      const mailto = `mailto:${email}?subject=${encodeURIComponent(`Private assessment — ${data.company}`)}&body=${encodeURIComponent(body)}`;
      setDraft(mailto);
      setStatus('ready');
      setStatusMessage(
        'Your email draft is ready. Review and send it from your email app to complete your request. Nothing has been submitted through this website.',
      );
      window.location.href = mailto;
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error || 'Delivery could not be confirmed. Please email us directly.',
        );
      setStatus('success');
      setStatusMessage(
        'Your request has been delivered. We will follow up using the email you provided.',
      );
      setValues(initialAssessmentValues);
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error.name === 'TimeoutError'
          ? 'Delivery could not be confirmed. Please email us directly.'
          : error.message,
      );
    }
  };

  return (
    <>
      <section className="assessment-hero">
        <div className="shell">
          <div className="assessment-intro">
            <div>
              <p className="eyebrow">Private AI visibility assessment</p>
              <h1>A discreet first look at how your brand is understood.</h1>
            </div>
            <div>
              <p>
                This confidential enquiry helps us assess strategic fit, category context and the
                buyer questions most relevant to your organisation It is not an automated score or a
                promise of model placement.
              </p>
              <ul>
                <li>Reviewed for fit and potential category conflict</li>
                <li>No confidential client or project details required</li>
                <li>
                  {directDelivery
                    ? 'Sent to Citevia’s inquiry service'
                    : 'Review and send your request from your email app'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="assessment-section">
        <div className="shell assessment-layout">
          <aside>
            <p className="eyebrow">Before you begin</p>
            <h2>Share only what is appropriate at this stage.</h2>
            <p>
              Please do not include passwords, special-category personal data, privileged material
              or confidential client identities. We will agree information boundaries before any
              substantive review.
            </p>
          </aside>

          <form className="assessment-form" noValidate onSubmit={onSubmit}>
            {Object.keys(errors).length > 0 && (
              <div className="error-summary" role="alert" tabIndex="-1" ref={errorSummary}>
                <h2>Please review the highlighted details.</h2>
                <ul>
                  {Object.entries(errors)
                    .filter(([, message]) => message)
                    .map(([field, message]) => (
                      <li key={field}>
                        <a href={`#${field}`}>{message}</a>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            <fieldset>
              <legend>About you and your organisation</legend>
              <p className="fieldset-intro">
                Fields marked “required” are needed to assess and respond to your request.
              </p>
              <div className="form-grid">
                <Field id="name" label="Name  -  required" error={errors.name}>
                  {(details) => <input {...inputProps('name', details)} autoComplete="name" />}
                </Field>
                <Field
                  id="email"
                  label="Work email  -  required"
                  hint="Use an address where you are authorised to discuss this enquiry"
                  error={errors.email}
                >
                  {(details) => (
                    <input {...inputProps('email', details)} type="email" autoComplete="email" />
                  )}
                </Field>
                <Field id="company" label="Company  -  required" error={errors.company}>
                  {(details) => (
                    <input {...inputProps('company', details)} autoComplete="organization" />
                  )}
                </Field>
                <Field
                  id="website"
                  label="Company website  -  required"
                  hint="For example, example.com"
                  error={errors.website}
                >
                  {(details) => (
                    <input
                      {...inputProps('website', details)}
                      type="url"
                      inputMode="url"
                      autoComplete="url"
                    />
                  )}
                </Field>
                <Field id="role" label="Your role  -  required" error={errors.role}>
                  {(details) => (
                    <select {...inputProps('role', details)}>
                      <option value="">Select a role</option>
                      {roles.map((role) => (
                        <option key={role}>{role}</option>
                      ))}
                    </select>
                  )}
                </Field>
                <Field id="industry" label="Industry  -  required" error={errors.industry}>
                  {(details) => (
                    <select {...inputProps('industry', details)}>
                      <option value="">Select an industry</option>
                      {industries.map((industry) => (
                        <option key={industry}>{industry}</option>
                      ))}
                    </select>
                  )}
                </Field>
              </div>
            </fieldset>

            <fieldset>
              <legend>Your priorities</legend>
              <div className="form-grid">
                <Field
                  id="markets"
                  label="Primary markets  -  required"
                  hint="Countries, regions or buyer markets most relevant to the brief"
                  error={errors.markets}
                  className="form-field--wide"
                >
                  {(details) => <input {...inputProps('markets', details)} />}
                </Field>
                <Field
                  id="objective"
                  label="Main objective  -  required"
                  error={errors.objective}
                  className="form-field--wide"
                >
                  {(details) => (
                    <select {...inputProps('objective', details)}>
                      <option value="">Select an objective</option>
                      {objectives.map((objective) => (
                        <option key={objective}>{objective}</option>
                      ))}
                    </select>
                  )}
                </Field>
                <Field
                  id="concern"
                  label="Current concern or optional message"
                  hint="Avoid sensitive, privileged or confidential details at this stage"
                  error={errors.concern}
                  className="form-field--wide"
                >
                  {(details) => (
                    <textarea {...inputProps('concern', details)} rows="6" maxLength="2000" />
                  )}
                </Field>
              </div>
            </fieldset>

            <div className="form-honeypot" hidden>
              <label htmlFor="websiteConfirmation">Leave this field empty</label>
              <input
                id="websiteConfirmation"
                name="websiteConfirmation"
                value={values.websiteConfirmation}
                onChange={update('websiteConfirmation')}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <Field
              id="privacyConsent"
              label="Privacy consent  -  required"
              error={errors.privacyConsent}
              className="consent-field"
            >
              {(details) => (
                <div className="consent-control">
                  <input
                    id={details.id}
                    name="privacyConsent"
                    type="checkbox"
                    checked={values.privacyConsent}
                    onChange={update('privacyConsent')}
                    aria-describedby={details.describedBy}
                    aria-invalid={details.invalid}
                  />
                  <p>
                    I consent to Citevia using the information I send to assess fit and respond.{' '}
                    <Link to="/privacy">Read the current privacy notice.</Link>
                  </p>
                </div>
              )}
            </Field>
            <div className="form-submit">
              <button
                className="button button--primary"
                type="submit"
                disabled={status === 'loading'}
              >
                <span>
                  {status === 'loading'
                    ? 'Sending your request…'
                    : directDelivery
                      ? 'Send your request'
                      : 'Prepare my email request'}
                </span>
                <span aria-hidden="true">→</span>
              </button>
              <p>
                {directDelivery
                  ? 'Submission does not create an engagement or guarantee availability.'
                  : `This prepares an email to ${email}. You review and send it yourself.`}
              </p>
            </div>
            <div
              className={`form-status ${status === 'error' ? 'form-status--error' : ''}`}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
              {draft && (
                <p>
                  <a href={draft}>Open the email draft again →</a>
                </p>
              )}
              {status === 'error' && (
                <p>
                  <a href={`mailto:${email}`}>Email {email}</a>
                </p>
              )}
            </div>
            <noscript>
              Please email <a href={`mailto:${email}`}>{email}</a> directly.
            </noscript>
          </form>
        </div>
      </section>
    </>
  );
}
