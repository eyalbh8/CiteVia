import snapshot from './freedomPowerSnapshot.json' with { type: 'json' };

// Static export of citevia-app's Freedom Power demo account. Its generated
// reporting is illustrative, not measured customer performance. The snapshot
// records separate periods for visibility, traffic and the latest citation scan.
const client = 'Freedom Power';
const period = 'Illustrative reporting · 30 days';
const source = 'Illustrative data, not Citevia client results';
const target = snapshot.visibility.ranking.find((brand) => brand.isTarget);

export const freedomPowerAccountBrief = {
  client,
  period,
  source: 'Source: Citevia Freedom Power example · 20 Oct–18 Nov 2026',
  metrics: {
    totalMentions: target.mentions,
    averageRank: target.rank,
    sentiment: target.sentiment,
  },
  marketPosition: snapshot.visibility.ranking,
};

export const freedomPowerMetrics = [
  { value: target.mentions.toLocaleString('en-US'), label: 'Total AI mentions' },
  { value: target.rank.toFixed(1), label: 'Average rank' },
  { value: target.sentiment + '/100', label: 'Sentiment score' },
];

const platformNames = {
  openai: ['chatgpt', 'ChatGPT'],
  perplexity: ['perplexity', 'Perplexity'],
  gemini: ['gemini', 'Gemini'],
  claude: ['claude', 'Claude'],
  copilot: ['copilot', 'Copilot'],
  deepseek: ['deepseek', 'DeepSeek'],
};
const countries = { US: 'United States', CA: 'Canada', GB: 'United Kingdom', AU: 'Australia' };

export const aiTrafficData = {
  client,
  period,
  source,
  total: snapshot.traffic.total,
  // Compare visit totals with the previous period. citevia-app's separate
  // modeled growth curve is not the change in the integer visit totals.
  change: snapshot.traffic.change,
  byPlatform: snapshot.traffic.providers
    .map(({ provider, visits }) => ({
      id: platformNames[provider][0],
      name: platformNames[provider][1],
      entries: visits,
    }))
    .sort((a, b) => b.entries - a.entries),
  topLocations: snapshot.traffic.locations.slice(0, 3).map(({ country, entries }) => ({
    country: countries[country],
    entries,
  })),
};

export const citationsData = {
  client,
  period: 'Illustrative reporting · latest ChatGPT scan',
  source,
  total: snapshot.citations.total,
  domains: snapshot.citations.domains,
  byType: snapshot.citations.byType,
  topSources: snapshot.citations.topSources,
};

export const promptsData = {
  client,
  period: 'Illustrative prompt library',
  source,
  total: snapshot.prompts.total,
  topics: snapshot.prompts.topics.length,
  intentSplit: snapshot.prompts.intentSplit,
  samples: snapshot.prompts.samples,
};
