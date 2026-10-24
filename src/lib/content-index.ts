import { articles } from '@/content/articles';
import { services } from '@/content/services';
import { solutions } from '@/content/solutions';
import { caseStudies } from '@/content/case-studies';
import { site } from './site';
import { industries } from '@/content/industries';

export const contentIndex = [
  {
    path: '/private-ai-visibility-assessment',
    title: 'Private AI visibility assessment',
    description: 'Start a focused discussion about your brand, markets, and buyer questions.',
    group: 'Company',
    updated: site.updated,
  },
  {
    path: '/industries',
    title: 'Industries',
    description: 'AI search marketing for specialist markets and considered purchases.',
    group: 'Industries',
    updated: site.updated,
  },
  ...industries.map((item) => ({
    path: `/industries/${item.slug}`,
    title: item.name,
    description: item.description,
    group: 'Industries',
    updated: site.updated,
  })),
  {
    path: '/',
    title: 'Citevia',
    description: site.description,
    group: 'Company',
    updated: site.updated,
  },
  {
    path: '/about',
    title: 'About Citevia',
    description: 'Our focus, principles, and approach to evidence.',
    group: 'Company',
    updated: site.updated,
  },
  {
    path: '/methodology',
    title: 'Our methodology',
    description: 'How strategy, content, technical SEO, and measurement connect.',
    group: 'Company',
    updated: site.updated,
  },
  {
    path: '/contact',
    title: 'Contact Citevia',
    description: `Discuss your priorities. Contact: ${site.email}.`,
    group: 'Company',
    updated: site.updated,
  },
  {
    path: '/ai-info',
    title: 'Company facts',
    description: 'Factual company and content reference.',
    group: 'Company',
    updated: site.updated,
  },
  {
    path: '/services',
    title: 'Services',
    description: 'The complete Citevia service directory.',
    group: 'Services',
    updated: site.updated,
  },
  {
    path: '/social-media-leads',
    title: 'Social media lead generation',
    description:
      'Turn relevant comments into qualified conversations, with Reddit and Instagram first, followed by LinkedIn, X, YouTube and Medium.',
    group: 'Services',
    updated: '2026-10-24',
  },
  ...services.map((item) => ({
    path: `/services/${item.slug}`,
    title: item.name,
    description: item.summary,
    group: 'Services',
    updated: site.updated,
  })),
  {
    path: '/solutions',
    title: 'Solutions',
    description: 'Work shaped around specific audiences and teams.',
    group: 'Solutions',
    updated: site.updated,
  },
  ...solutions.map((item) => ({
    path: `/solutions/${item.slug}`,
    title: item.name,
    description: item.description,
    group: 'Solutions',
    updated: site.updated,
  })),
  {
    path: '/case-studies',
    title: 'Illustrative case studies',
    description: 'Constructed educational scenarios, not client engagements or achieved results.',
    group: 'Illustrative examples',
    updated: site.updated,
  },
  ...caseStudies.map((item) => ({
    path: `/case-studies/${item.slug}`,
    title: `Illustrative example: ${item.title}`,
    description: item.description,
    group: 'Illustrative examples',
    updated: item.updated,
  })),
  {
    path: '/blog',
    title: 'Citevia blog',
    description: 'Guides and research on GEO, AEO, SEO, content, and measurement.',
    group: 'Learning',
    updated: site.updated,
  },
  {
    path: '/resources',
    title: 'Resources and glossary',
    description: 'Reading paths, definitions, frequently asked questions, and discovery files.',
    group: 'Learning',
    updated: site.updated,
  },
  ...articles.map((item) => ({
    path: `/blog/${item.slug}`,
    title: item.title,
    description: item.description,
    group: 'Learning',
    updated: item.updated,
  })),
];
