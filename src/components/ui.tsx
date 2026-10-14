import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { ArrowIcon } from './icons';
import { breadcrumbSchema, faqPageSchema } from '@/lib/seo';

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...(Array.isArray(data) ? { '@graph': data } : data),
        }).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: 'Home', href: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {all.map((item, i) => (
            <li key={item.href}>
              {i === all.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-intro">
      <span className="eyebrow">
        <span className="signal-dot" />
        {eyebrow}
      </span>
      <h1>{title}</h1>
      <p className="lede">{description}</p>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <>
      <JsonLd data={faqPageSchema(items)} />
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function Cta() {
  return (
    <section className="closing-section">
      <div className="container">
        <div className="closing-banner">
          <Image
            src="/images/editorial/cta-advisor.jpg"
            alt=""
            fill
            sizes="(max-width: 760px) 100vw, 1200px"
          />
          <div className="closing-content">
            <span className="eyebrow">A CLEARER STARTING POINT</span>
            <h2>See where to act.</h2>
            <p>
              Understand how your brand is described, where the gaps are, and which next step
              deserves your attention.
            </p>
            <Link href="/private-ai-visibility-assessment" className="button">
              Request a private assessment <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
