const origin = new URL(process.env.SITE_URL || 'https://citevia.io');
if (
  !['http:', 'https:'].includes(origin.protocol) ||
  origin.pathname !== '/' ||
  origin.search ||
  origin.hash ||
  origin.username ||
  origin.password
) {
  throw new Error('SITE_URL must be an HTTP(S) origin without a path, query, or credentials.');
}

export const site = {
  name: 'Citevia',
  domain: origin.hostname,
  url: origin.origin,
  email: process.env.CONTACT_EMAIL || 'eyal@citevia.com',
  description:
    'Citevia connects AI search strategy, SEO, content, reputation, and measurement to help brands become easier to find, understand, and choose.',
  bookingUrl: process.env.BOOKING_URL || '/private-ai-visibility-assessment',
  indexable:
    process.env.SITE_INDEXABLE === 'true' &&
    process.env.NODE_ENV === 'production' &&
    process.env.VERCEL_ENV !== 'preview',
  // Change only after a substantive site-wide content update.
  updated: '2026-10-14',
} as const;

export function absoluteUrl(path = '/') {
  return new URL(path, `${site.url}/`).toString();
}

export const navigation = [
  { href: '/blog', label: 'Blog' },
  { href: '/services', label: 'All services' },
  { href: '/methodology', label: 'Methodology' },
];
