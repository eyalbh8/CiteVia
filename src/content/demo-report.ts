// Static, synthetic demonstration data. Never presented as a live account or actual client result.
export const demoReport = {
  account: 'Example property group',
  market: 'Mediterranean real estate',
  period: 'Illustrative 90-day program',
  answers: 180,
  questions: 60,
  mentions: 63,
  baselineMentions: 36,
  citations: 36,
  baselineCitations: 18,
  visits: 240,
  baselineVisits: 150,
  inquiries: 12,
  qualified: 7,
  platforms: [
    { name: 'ChatGPT', symbol: '◎', mentions: 28, answers: 60, visits: 170 },
    { name: 'Gemini', symbol: '✦', mentions: 21, answers: 60, visits: 40 },
    { name: 'Perplexity', symbol: '✳', mentions: 14, answers: 60, visits: 20 },
    { name: 'Other AI referrals', symbol: '↗', mentions: 0, answers: 0, visits: 10 },
  ],
  competitors: [
    { name: 'Example property group', mentions: 63, citations: 36 },
    { name: 'Example competitor A', mentions: 54, citations: 29 },
    { name: 'Example competitor B', mentions: 42, citations: 23 },
    { name: 'Example competitor C', mentions: 27, citations: 15 },
  ],
  prompts: [
    {
      question: 'How should a buyer compare property developers?',
      intent: 'Evaluation',
      status: 'Content opportunity',
    },
    {
      question: 'Which project details should we verify before a viewing?',
      intent: 'Selection',
      status: 'Evidence mapped',
    },
    {
      question: 'What should a relocating family ask about the area?',
      intent: 'Discovery',
      status: 'Guide planned',
    },
    {
      question: 'What services does Example property group provide?',
      intent: 'Branded',
      status: 'Accuracy reviewed',
    },
  ],
  sources: [
    { name: 'Owned project pages', count: 18 },
    { name: 'Specialist editorial', count: 9 },
    { name: 'Company profiles', count: 6 },
    { name: 'Other references', count: 3 },
  ],
  locations: [
    { name: 'Cyprus', visits: 90 },
    { name: 'United Kingdom', visits: 80 },
    { name: 'United Arab Emirates', visits: 40 },
    { name: 'Other markets', visits: 30 },
  ],
};
