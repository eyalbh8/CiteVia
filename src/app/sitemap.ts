import type { MetadataRoute } from 'next';
import { contentIndex } from '@/lib/content-index';
import { absoluteUrl, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.indexable) return [];
  return contentIndex.map((page) => ({ url: absoluteUrl(page.path), lastModified: page.updated }));
}
