'use client';

import { useHomeSettings } from './settings.jsx';
import { useState } from 'react';
import { Link } from './Link.jsx';
import { assessmentHref, footerIndustryItems, footerNavItems, footerServiceItems } from './data.js';
import { AssessmentLink, BrandMark } from './UI.jsx';
import ContactLead from './ContactLead.jsx';

function FooterLinkGroup({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer__links">
      <button
        type="button"
        className="footer__links-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{title}</span>
        <span className="footer__links-chevron" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      <div className={`footer__links-content ${open ? 'is-open' : ''}`}>{children}</div>
    </div>
  );
}

export default function Footer() {
  const { email } = useHomeSettings();
  return (
    <footer className="footer">
      <div className="footer__cta">
        <img
          className="footer__cta-bg"
          src="/images/generated/cta-advisor.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="hero__aurora" aria-hidden="true" />
        <div className="shell">
          <h2>
            <span className="final-cta__line">See where</span>{' '}
            <span className="final-cta__line final-cta__line--ghost">to act</span>
          </h2>
          <AssessmentLink placement="footer-cta">Private assessment</AssessmentLink>
        </div>
      </div>
      <ContactLead />
      <div className="shell">
        <div className="footer__main">
          <div className="footer__brand">
            <Link className="brand" to="/">
              <BrandMark />
              <span className="brand__name">Citevia</span>
            </Link>
            <p>
              AI Search marketing infrastructure for brands built to lead the next iteration of the
              Internet.
            </p>
          </div>
          <FooterLinkGroup title="Explore">
            {footerNavItems.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </FooterLinkGroup>
          <FooterLinkGroup title="Services">
            {footerServiceItems.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </FooterLinkGroup>
          <FooterLinkGroup title="Industries">
            {footerIndustryItems.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </FooterLinkGroup>
          <FooterLinkGroup title="Enquiries">
            <Link to={assessmentHref}>Private assessment</Link>
            <a href={`mailto:${email}`}>{email}</a>
            <span>Engagements are reviewed for fit and category conflict.</span>
          </FooterLinkGroup>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Citevia. All rights reserved.</span>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="/sitemap.xml">Sitemap</a>
            <a href="/robots.txt">Robots</a>
            <a href="/llms.txt">LLM index</a>
          </div>
        </div>
        <p className="footer__wordmark" aria-hidden="true">
          Citevia
        </p>
      </div>
    </footer>
  );
}
