// Reporting previews retain illustrative design figures; the Nayax ranking below
// is transcribed separately from the user-supplied screenshot.
export const aiTrafficData = {
  client: 'Nayax',
  period: 'Illustrative reporting · 90 days',
  source: 'Illustrative data, not Citevia client results',
  total: 7476,
  change: 133,
  byPlatform: [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      entries: 6909,
    },
    {
      id: 'gemini',
      name: 'Gemini',
      entries: 171,
    },
    {
      id: 'perplexity',
      name: 'Perplexity',
      entries: 143,
    },
    {
      id: 'claude',
      name: 'Claude',
      entries: 128,
    },
    {
      id: 'copilot',
      name: 'Copilot',
      entries: 125,
    },
  ],
  topLocations: [
    {
      country: 'United States',
      entries: 2029,
    },
    {
      country: 'Canada',
      entries: 1042,
    },
    {
      country: 'Israel',
      entries: 584,
    },
  ],
};
// Transcribed from the user-supplied Nayax screenshot. No date range or
// platform breakdown was supplied; do not infer either from the design samples.
export const nayaxAccountBrief = {
  client: 'Nayax',
  period: 'Visibility snapshot',
  source: 'Source: supplied brand-ranking snapshot',
  metrics: {
    totalMentions: 1403,
    averageRank: 1.0,
    sentiment: 92,
  },
  marketPosition: [
    { rank: 1.0, brand: 'Nayax', mentions: 1403, sentiment: 92 },
    { rank: 2.3, brand: 'squareup', mentions: 507, sentiment: 88 },
    { rank: 2.7, brand: 'Cantaloupe', mentions: 496, sentiment: 96 },
    { rank: 4.3, brand: '365 Retail Markets', mentions: 237, sentiment: 94 },
    { rank: 5.0, brand: 'ingenico.com', mentions: 230, sentiment: 88 },
  ],
};

// One shared set of headline figures for every Nayax snapshot on the homepage.
export const nayaxMetrics = [
  {
    value: nayaxAccountBrief.metrics.totalMentions.toLocaleString('en-US'),
    label: 'Total AI mentions',
  },
  { value: nayaxAccountBrief.metrics.averageRank.toFixed(1), label: 'Average rank' },
  { value: nayaxAccountBrief.metrics.sentiment + '/100', label: 'Sentiment score' },
];

export const citationsData = {
  client: 'Nayax',
  period: 'Illustrative reporting · 14 days',
  source: 'Illustrative data, not Citevia client results',
  total: 80993,
  previousTotal: 55823,
  change: 45.1,
  domains: 3405,
  byType: [
    {
      type: 'Corporate',
      count: 34043,
      color: '#2d4f9e',
    },
    {
      type: 'Other',
      count: 31299,
      color: '#6f8fd8',
    },
    {
      type: 'Institutional',
      count: 9112,
      color: '#8ca6e0',
    },
    {
      type: 'Editorial',
      count: 3024,
      color: '#bfcdf0',
    },
    {
      type: 'UGC',
      count: 2912,
      color: '#d4d8f6',
    },
    {
      type: 'Reference',
      count: 603,
      color: '#eef1fa',
    },
  ],
  topSources: [
    {
      domain: 'nayax.com',
      usage: 91.5,
    },
    {
      domain: 'vertexaisearch.cloud.google.com',
      usage: 71.6,
    },
    {
      domain: 'squareup.com',
      usage: 67.5,
    },
    {
      domain: 'cantaloupe.com',
      usage: 35.7,
    },
    {
      domain: 'ingenico.com',
      usage: 32.8,
    },
  ],
};
export const promptsData = {
  client: 'Nayax',
  period: 'Illustrative reporting · 90 days',
  source: 'Illustrative data, not Citevia client results',
  total: 150,
  topics: 10,
  intentSplit: [
    {
      intent: 'Informational',
      percent: 76,
      color: '#2d4f9e',
    },
    {
      intent: 'Commercial',
      percent: 17,
      color: '#6f8fd8',
    },
    {
      intent: 'Navigational',
      percent: 3,
      color: '#8ca6e0',
    },
    {
      intent: 'Transactional',
      percent: 3,
      color: '#bfcdf0',
    },
  ],
};
