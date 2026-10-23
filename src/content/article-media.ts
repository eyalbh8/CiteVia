const media = {
  intelligence: {
    src: '/images/generated/service-intelligence.jpg',
    alt: 'Hands using a keyboard in blue light',
  },
  authority: {
    src: '/images/generated/service-authority.jpg',
    alt: 'Printed documents on a desk beneath a reading lamp',
  },
  positioning: {
    src: '/images/generated/service-positioning.jpg',
    alt: 'A traveler using a phone in an airport lounge',
  },
  monitoring: {
    src: '/images/generated/service-monitoring.jpg',
    alt: 'Two people studying data visualizations on a wall of screens',
  },
  discovery: {
    src: '/images/generated/market-ask-ai.jpg',
    alt: 'A person reading their phone beside a city waterfront at night',
  },
};

const bySlug: Record<string, keyof typeof media> = {
  'service-area-business-seo-ai-search': 'discovery',
  'faq-schema-ai-search': 'authority',
  'multilingual-seo-ai-search': 'positioning',
  'ai-crawler-policy-training-search': 'intelligence',
  'geo-aeo-and-seo': 'intelligence',
  'anatomy-of-a-citable-page': 'authority',
  'measuring-ai-search-visibility': 'monitoring',
  'ai-visibility-audit-playbook': 'intelligence',
  'comparison-pages-for-buyers': 'positioning',
  'robots-sitemap-llms-explained': 'monitoring',
  'ai-referrals-to-qualified-inquiries': 'positioning',
  'recommendation-gap-known-vs-selected': 'discovery',
  'high-intent-prompt-intelligence': 'intelligence',
  'authority-without-overexposure': 'authority',
};

export function articleMedia(slug: string) {
  return media[bySlug[slug] || 'intelligence'];
}
