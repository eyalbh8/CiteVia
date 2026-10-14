import type { Service } from './services';

export const marketingServices: Service[] = [
  {
    slug: 'brand-reputation-management',
    name: 'Brand reputation management',
    shortName: 'Brand reputation management',
    number: '02',
    category: 'REPUTATION',
    summary:
      'Understand how your business is described across search and AI, correct outdated information, and support your reputation with verifiable evidence.',
    question: 'What does brand reputation management include?',
    answer:
      'It begins with a documented review of the descriptions buyers encounter: company details, service claims, external profiles, reviews, and cited sources. The work connects legitimate factual corrections with a plan to publish better supporting information.',
    audience:
      'Businesses whose reputation depends on accurate, specific descriptions of their expertise and service.',
    sections: [
      {
        title: 'Establish what people can find',
        body: 'Record the questions, search surfaces, dates, and sources behind an initial reputation review. Distinguish incorrect facts from criticism, opinion, and missing context. The response should fit the evidence rather than attempt to suppress legitimate feedback.',
      },
      {
        title: 'Resolve inconsistencies at the source',
        body: 'Confirm the approved company facts, update owned pages, and identify outdated third-party listings. Prepare factual correction requests where appropriate. Track the status of each request and keep independent editorial decisions separate from the work delivered.',
      },
      {
        title: 'Build a repeatable review process',
        body: 'Agree which issues require escalation, who approves a response, and when to revisit the observation. Connect recurring buyer misunderstandings to clearer service pages, expert explanations, and documented evidence.',
      },
    ],
    deliverables: [
      'Search and AI description baseline',
      'Company fact and source register',
      'Prioritized correction plan',
      'Review ownership and escalation process',
    ],
    faq: [
      {
        question: 'Can you remove any negative mention?',
        answer:
          'No. We focus on accurate information, legitimate corrections, and useful context. Independent publishers and platforms decide how they handle their content.',
      },
      {
        question: 'What information is needed?',
        answer:
          'Current company and service facts, approved public materials, and the issues you want to understand. Confidential details can be scoped separately.',
      },
    ],
  },
  {
    slug: 'user-acquisition',
    name: 'User acquisition',
    shortName: 'User acquisition',
    number: '04',
    category: 'ACQUISITION',
    summary:
      'Connect audience research, search visibility, landing pages, and channel measurement around the inquiries your business wants to receive.',
    question: 'How does Citevia approach user acquisition?',
    answer:
      'We start with audience fit and the decision a buyer is making. A channel plan connects those needs to a relevant message, useful landing experience, and an agreed way to assess inquiry quality.',
    audience:
      'Marketing teams that need to connect discovery activity with suitable opportunities.',
    sections: [
      {
        title: 'Define who should arrive',
        body: 'Agree the buyer roles, markets, decision stage, and exclusions before choosing a channel. Review how the intended audience researches options and the evidence it needs before making contact.',
      },
      {
        title: 'Give every channel a clear role',
        body: 'Map organic search, AI discovery, specialist publications, partnerships, and any paid activity in scope. Develop message and page briefs around the same buying questions. Budget and campaign execution are agreed separately before any spending.',
      },
      {
        title: 'Follow the inquiry through',
        body: 'Separate visits, contact interactions, delivered inquiries, and qualification. Review the available source information with the team handling new business. Use the findings to refine audience fit and the arrival experience.',
      },
    ],
    deliverables: [
      'Audience and channel opportunity map',
      'Message and landing-page briefs',
      'Agreed conversion definitions',
      'A channel review and allocation plan',
    ],
    faq: [
      {
        question: 'Does this automatically include advertising spend?',
        answer:
          'No. Media budgets, accounts, and execution responsibilities require an agreed scope. No campaign spending is initiated through this website.',
      },
      {
        question: 'How do you measure AI-influenced acquisition?',
        answer:
          'Observed referrals and self-reported discovery provide different evidence. We keep them separate and explain gaps in attribution.',
      },
    ],
  },
  {
    slug: 'aeo',
    name: 'AEO — Answer engine optimization',
    shortName: 'AEO',
    number: '07',
    category: 'AI SEARCH',
    summary:
      'Make your offering easier to interpret and reference through clear answers, connected evidence, and a documented view of buyer questions.',
    question: 'What is answer engine optimization?',
    answer:
      'Answer engine optimization improves how well published information answers a reader’s question. It combines useful explanations, accurate business facts, accessible pages, and supporting sources with observation of how answers describe the business.',
    audience:
      'Brands whose buyers use search and AI assistants to research, compare, and select providers.',
    sections: [
      {
        title: 'Find the questions that change a decision',
        body: 'Use audience research and customer conversations to identify specific concerns. Separate informational questions from comparisons and provider selection. The resulting map guides content, without treating invented prompt volume as measured demand.',
      },
      {
        title: 'Make the answer understandable on its own',
        body: 'Put the direct explanation near the question, qualify material claims, and link to evidence. Clarify audience, geography, prerequisites, and limitations. Keep relevant facts consistent across service pages, profiles, and expert material.',
      },
      {
        title: 'Observe and improve',
        body: 'Repeat a documented sample across agreed search surfaces. Record mentions, citations, factual accuracy, and source changes separately. Use recurring gaps to guide editorial and technical work while preserving the limits of the sample.',
      },
    ],
    deliverables: [
      'Question and intent map',
      'Answer-focused content briefs',
      'Entity and fact consistency review',
      'A baseline and follow-up measurement plan',
    ],
    faq: [
      {
        question: 'Is special AI schema required?',
        answer:
          'There is no universal special AI schema requirement. We use appropriate structured data that matches visible content and maintain established search fundamentals.',
      },
      {
        question: 'Can you guarantee that an assistant recommends us?',
        answer:
          'No. Independent systems control their outputs. We can define the improvements and the measurement process, not guarantee a specific answer.',
      },
    ],
  },
];

export const primaryServiceSlugs = [
  'conversion-rate-optimization',
  'brand-reputation-management',
  'content-creation',
  'user-acquisition',
  'strategic-pr-placement',
  'seo',
  'aeo',
];
export const serviceHeadlines: Record<string, string> = {
  'conversion-rate-optimization': 'Make the next step feel natural.',
  'brand-reputation-management': 'A clearer picture of who you are.',
  'content-creation': 'Give your expertise a useful voice.',
  'user-acquisition': 'Reach people with a reason to choose you.',
  'strategic-pr-placement': 'Put your expertise in credible company.',
  seo: 'Build a stronger foundation for discovery.',
  aeo: 'Be understood when the question matters.',
};
