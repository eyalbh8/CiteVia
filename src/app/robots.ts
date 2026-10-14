import type { MetadataRoute } from 'next';
import { absoluteUrl, site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: site.indexable
      ? // The wildcard also covers cooperating AI crawlers. Keep public content and assets accessible.
        [{ userAgent: '*', allow: '/', disallow: ['/api', '/api/'] }]
      : [{ userAgent: '*', disallow: '/' }],
    ...(site.indexable ? { sitemap: absoluteUrl('/sitemap.xml'), host: site.url } : {}),
  };
}
