import type { Metadata } from 'next';
import { absoluteUrl, site } from './site';

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  published?: string;
  modified?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  published,
  modified,
}: PageMeta): Metadata {
  return {
    title: { absolute: `${title} | ${site.name}` },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: 'en_US',
      type,
      images: [
        {
          url: absoluteUrl('/opengraph-image'),
          width: 1200,
          height: 630,
          alt: 'Citevia — When buyers ask AI, be the answer.',
        },
      ],
      ...(type === 'article'
        ? { publishedTime: published, modifiedTime: modified, authors: [absoluteUrl('/about')] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
      images: [absoluteUrl('/opengraph-image')],
    },
  };
}

export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: absoluteUrl('/logo/citevia-logo-light.png'),
  email: site.email,
  description: site.description,
};

export function webPageSchema(title: string, description: string, path: string, type = 'WebPage') {
  return {
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#organization` },
    inLanguage: 'en',
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
