import type { Metadata, Viewport } from 'next';
import SiteExperience from '@/components/arielos/SiteExperience';
import { JsonLd } from '@/components/ui';
import { site } from '@/lib/site';
import { organizationSchema } from '@/lib/seo';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import './site-base.css';
import './arielos-source.css';
import './arielos-theme.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Citevia — AI Search Marketing & Visibility', template: '%s | Citevia' },
  description: site.description,
  applicationName: site.name,
  robots: {
    index: site.indexable,
    follow: true,
    googleBot: {
      index: site.indexable,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: { icon: '/icon', apple: '/apple-icon' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#ffffff' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <JsonLd
          data={[
            organizationSchema,
            {
              '@type': 'WebSite',
              '@id': `${site.url}/#website`,
              url: site.url,
              name: site.name,
              publisher: { '@id': `${site.url}/#organization` },
              inLanguage: 'en',
            },
          ]}
        />
        <SiteExperience
          email={site.email}
          bookingUrl={site.bookingUrl}
          directDelivery={Boolean(process.env.CONTACT_WEBHOOK_URL)}
        >
          {children}
        </SiteExperience>
      </body>
    </html>
  );
}
