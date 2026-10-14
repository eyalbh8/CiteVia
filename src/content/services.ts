import { serviceOfferings } from '@/components/arielos/content/services';
import { marketingServices, primaryServiceSlugs } from './marketing-services';

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  number: string;
  category: string;
  summary: string;
  answer: string;
  question: string;
  audience: string;
  sections: { title: string; body: string }[];
  deliverables: string[];
  faq: { question: string; answer: string }[];
};

const originalServices: Service[] = [
  ...marketingServices,
  {
    slug: 'geo-strategy',
    name: 'GEO strategy',
    shortName: 'Find your opportunity',
    number: '01',
    category: 'STRATEGY',
    summary:
      'Understand what buyers ask, where your brand appears, and which opportunities deserve your attention.',
    question: 'What is a GEO strategy?',
    answer:
      'A Generative Engine Optimization strategy connects the questions your buyers ask AI assistants with the content, technical improvements, and external evidence needed to make your brand easier to discover and evaluate.',
    audience:
      'B2B teams entering AI search, repositioning a product, or deciding where to invest their content and engineering resources.',
    sections: [
      {
        title: 'Start with buying decisions',
        body: 'We map the questions that arise as buyers discover a category, compare alternatives, and evaluate a supplier. Sales conversations, existing search data, and customer research give that map a foundation. Prompts are grouped by intent, market, and audience rather than collected as an arbitrary list.',
      },
      {
        title: 'Find gaps you can act on',
        body: 'We review sampled answers, cited sources, and competitor coverage alongside your existing pages. A missing explanation, inconsistent product description, or inaccessible comparison page becomes a specific task. Opportunities are ranked by relevance to the business, evidence, effort, and dependencies.',
      },
      {
        title: 'Turn the plan into a working backlog',
        body: 'The strategy names the pages to create, fixes to ship, people responsible, and measures to watch. It also defines a repeatable prompt sample and reporting cadence. We revisit the plan as your offering and the search experience change; a recommendation is a hypothesis to evaluate, not a promised ranking.',
      },
    ],
    deliverables: [
      'Buyer question and intent map',
      'Competitor and source landscape',
      'Prioritized quarterly execution plan',
      'Measurement definitions and baseline',
    ],
    faq: [
      {
        question: 'Does GEO replace SEO?',
        answer:
          'No. Crawlability, useful content, internal links, and a good user experience support both. GEO adds a focus on how AI systems describe and reference a brand during a buying decision.',
      },
      {
        question: 'Can you work with our existing team?',
        answer:
          'Yes. A strategy can guide your internal content and engineering teams, or form the starting point for an engagement in which Citevia helps execute the work.',
      },
    ],
  },
  {
    slug: 'ai-visibility-audit',
    name: 'AI visibility audit',
    shortName: 'Know where you stand',
    number: '02',
    category: 'DISCOVERY',
    summary:
      'A clear baseline of brand mentions, citations, competitors, and the pages holding you back.',
    question: 'What does an AI visibility audit show?',
    answer:
      'An AI visibility audit examines whether and how your brand appears in a defined sample of AI answers. It records the prompts, engines, dates, cited sources, and technical or content issues behind the findings.',
    audience:
      'Marketing leaders who need a practical starting point before committing to an ongoing program.',
    sections: [
      {
        title: 'Define the sample first',
        body: 'An audit starts with your product, audience, target markets, and competitors. We agree on a set of questions that reflects actual customer decisions. Branded and non-branded questions are reported separately so a branded query does not overstate your discoverability.',
      },
      {
        title: 'Look beyond a mention',
        body: 'We examine what the answer says, whether it accurately describes your offer, and which sources it references. A brand mention, a citation to your site, and a recommendation are different observations. We keep those distinctions visible and retain evidence for the findings.',
      },
      {
        title: 'Leave with a sequence of fixes',
        body: 'The audit connects answer observations to pages, entity inconsistencies, crawl issues, and missing evidence. Each recommendation describes the issue and an actionable next step. Because answers vary with time and context, the report states its sampling limitations and avoids treating one response as a universal result.',
      },
    ],
    deliverables: [
      'Documented prompt and engine sample',
      'Brand and competitor visibility baseline',
      'Source and citation review',
      'Ranked opportunities and next steps',
    ],
    faq: [
      {
        question: 'Which AI search experiences can you review?',
        answer:
          'The scope can include ChatGPT, Gemini, Perplexity, Claude, and Google AI search experiences. We agree on the relevant engines and record availability and sampling conditions in the audit.',
      },
      {
        question: 'Is one audit enough?',
        answer:
          'An audit provides a starting point. Repeated sampling is useful after changes ship, because a single snapshot cannot establish a durable trend or prove causation.',
      },
    ],
  },
  {
    slug: 'ai-search-monitoring',
    name: 'AI search monitoring',
    shortName: 'Track the change',
    number: '03',
    category: 'MONITORING',
    summary:
      'Repeatable observation of the questions, citations, and recommendations that matter to your business.',
    question: 'How do you monitor AI search visibility?',
    answer:
      'AI search monitoring repeats a documented set of buyer questions across agreed engines and records brand mentions, citations, answer accuracy, and competitor coverage over time.',
    audience:
      'Teams with an active content or GEO program that need to distinguish isolated responses from sustained movement.',
    sections: [
      {
        title: 'Keep the method consistent',
        body: 'We define the prompt set, sampling frequency, engine, language, and market before comparing results. When a question or model changes, we record that change. Stable cohorts make trends easier to interpret; new opportunities can be tracked as a separate cohort.',
      },
      {
        title: 'Make every metric explainable',
        body: 'Mention rate is the proportion of sampled answers that name your brand. Owned citation rate tracks answers linking to your website. We report those measures separately from sentiment or recommendation judgments and keep the denominator visible. A score without its method is difficult to use.',
      },
      {
        title: 'Connect observations to action',
        body: 'We use recurring gaps to identify missing pages, outdated claims, or weak supporting evidence. Reports link observations to the change backlog and flag sampling limits. Monitoring helps prioritize decisions; it cannot reproduce every personalized answer a buyer might receive.',
      },
    ],
    deliverables: [
      'Maintained prompt cohorts',
      'Engine-level mention and citation reporting',
      'Competitor and source movement',
      'A dated evidence log and action backlog',
    ],
    faq: [
      {
        question: 'Do you track a universal AI ranking?',
        answer:
          'No. AI answers vary by query, context, engine, and time. We report observations for a defined sample instead of presenting a single universal rank.',
      },
      {
        question: 'How often should we measure?',
        answer:
          'The cadence depends on content volume, engine access, and the decisions you need to make. The reporting plan specifies a sustainable frequency and the sample size behind each result.',
      },
    ],
  },
  {
    slug: 'content-creation',
    name: 'Content creation',
    shortName: 'Content creation',
    number: '04',
    category: 'CONTENT',
    summary:
      'Clear service pages, honest comparisons, and useful guides built around real buyer questions.',
    question: 'What makes content useful for AI search?',
    answer:
      'Useful content gives a reader a direct, accurate answer, explains the relevant tradeoffs, and supports material claims with accessible evidence. Clear structure and explicit product details also make it easier for systems to interpret.',
    audience:
      'B2B companies whose expertise is hidden in sales decks, fragmented pages, or content that does not answer evaluation questions.',
    sections: [
      {
        title: 'Choose a real question',
        body: 'Every page starts with a reader and a decision. We map the question to the appropriate format: a service explanation, use-case guide, comparison, glossary entry, or implementation resource. Existing pages are improved where they already serve the need, avoiding unnecessary duplication.',
      },
      {
        title: 'Write from evidence',
        body: 'Subject matter input, product documentation, and verifiable references form the substance of the page. We make the answer easy to find and distinguish facts from opinions. Comparisons use consistent criteria, acknowledge tradeoffs, and identify when an alternative may be a better fit.',
      },
      {
        title: 'Keep the answer useful',
        body: 'Content receives an owner, publication date, and review trigger. We connect it to relevant service pages and supporting resources with descriptive links. Changes to product features, pricing, or source material trigger a review. Publishing is the beginning of maintenance, not the end of the assignment.',
      },
    ],
    deliverables: [
      'Question-led content briefs',
      'Service, use-case, and comparison copy',
      'Source and claim review',
      'Internal linking and content review plan',
    ],
    faq: [
      {
        question: 'Is there an ideal word count for GEO?',
        answer:
          'No. The page should give its audience enough information to make the intended decision. Length and format follow the subject, evidence, and reader needs.',
      },
      {
        question: 'Can you guarantee a page will be cited?',
        answer:
          'No. Engines choose which sources to use. We improve the quality, accessibility, and clarity of the content and monitor what happens after publication.',
      },
    ],
  },
  {
    slug: 'seo',
    name: 'SEO — Search engine optimization',
    shortName: 'SEO',
    number: '05',
    category: 'FOUNDATIONS',
    summary:
      'Crawlable pages, consistent entities, structured data, and a fast experience for real people.',
    question: 'How does technical SEO support GEO?',
    answer:
      'Technical SEO helps search systems discover, retrieve, and understand a website. Server-rendered content, accurate metadata, sensible internal links, and appropriate indexing controls provide a sound foundation for both conventional and AI search.',
    audience:
      'Teams launching, migrating, or maintaining a site whose content needs to be reliably accessible to search systems.',
    sections: [
      {
        title: 'Make the important pages reachable',
        body: 'We inspect status codes, crawl directives, rendering, navigation, and indexation signals. A useful page needs a stable URL and a clear path from related content. Redirects preserve access when URLs change; canonical URLs clarify the preferred version of duplicate pages.',
      },
      {
        title: 'Describe what is actually on the page',
        body: 'Unique titles and descriptions reflect each page’s purpose. Structured data describes visible organizations, services, articles, and navigation without inventing reviews or claims. Entity details such as brand name and contact information are kept consistent across the site.',
      },
      {
        title: 'Build for ongoing maintenance',
        body: 'Reusable templates and centralized content make changes easier to review. We consider image dimensions, font delivery, client-side JavaScript, and mobile usability. A sitemap, appropriate robots rules, and search-console verification give the team practical tools for observing the site after launch.',
      },
    ],
    deliverables: [
      'Crawl and rendering review',
      'Metadata and canonical URL framework',
      'Relevant JSON-LD and XML sitemap',
      'Performance and migration priorities',
    ],
    faq: [
      {
        question: 'Do I need special AI schema?',
        answer:
          'No special schema guarantees AI visibility. Use relevant structured data that accurately describes visible content, and prioritize accessible, helpful pages.',
      },
      {
        question: 'Can you support a Next.js migration?',
        answer:
          'Yes. The work can include server-rendered page templates, metadata, redirects, image delivery, content architecture, and verification of the resulting HTML.',
      },
    ],
  },
  {
    slug: 'strategic-pr-placement',
    name: 'Strategic PR placement',
    shortName: 'Strategic PR placement',
    number: '06',
    category: 'AUTHORITY',
    summary:
      'Help the wider web describe your business accurately through credible references and useful expertise.',
    question: 'What role does authority play in AI visibility?',
    answer:
      'External references give readers and search systems evidence beyond a company’s own claims. An authority program improves factual consistency and contributes relevant expertise to credible publications, directories, and communities.',
    audience:
      'Brands with useful expertise or a distinctive product that is poorly represented in the sources their buyers consult.',
    sections: [
      {
        title: 'Understand the source landscape',
        body: 'We inspect the publications, review platforms, directories, and specialist resources that appear in relevant answers. Relevance to buyers matters more than collecting arbitrary mentions. The review also identifies outdated profiles and inconsistent descriptions that can be corrected.',
      },
      {
        title: 'Offer something worth referencing',
        body: 'A useful contribution may be original research, a clear explanation from a specialist, a documented product capability, or a practical resource. We shape the material around the needs of the publication and audience. Editorial decisions remain with the publisher.',
      },
      {
        title: 'Record evidence, not promises',
        body: 'The program tracks published references, factual corrections, referral activity where observable, and subsequent visibility trends. Paid placements must be identified appropriately. We do not present a purchased link, a fabricated review, or an unearned endorsement as independent authority.',
      },
    ],
    deliverables: [
      'Relevant source and profile audit',
      'Entity consistency improvements',
      'Evidence-led editorial opportunities',
      'Published reference and referral log',
    ],
    faq: [
      {
        question: 'Do you guarantee media coverage?',
        answer:
          'No. Publishers control editorial acceptance. An engagement defines the research, preparation, and outreach work, with published coverage reported separately.',
      },
      {
        question: 'Is this just link building?',
        answer:
          'Links can be one outcome, but the focus is accurate, relevant corroboration and useful contributions that help buyers evaluate your brand.',
      },
    ],
  },
  {
    slug: 'conversion-rate-optimization',
    name: 'CRO — Conversion rate optimization',
    shortName: 'CRO',
    number: '07',
    category: 'EXPERIENCE',
    summary:
      'Turn a relevant visit into a clear understanding of your offer and a useful next action.',
    question: 'What should an AI-referred landing page do?',
    answer:
      'A landing page should confirm what the visitor came to learn, explain who the offer is for, support its claims, and provide a clear next step. The underlying conversion principles apply regardless of how the visitor discovered it.',
    audience:
      'Companies attracting relevant visits but losing people to unclear positioning, unsupported claims, or difficult contact flows.',
    sections: [
      {
        title: 'Continue the buyer’s question',
        body: 'We align the page with the promise made by the source or search result. A visitor comparing services needs scope, deliverables, fit, and tradeoffs. A visitor exploring a concept needs a clear explanation and a path to more detail. The page hierarchy follows that context.',
      },
      {
        title: 'Reduce uncertainty',
        body: 'We replace vague statements with specific explanations and verified evidence. Forms ask only for information the team needs, errors explain how to recover, and calls to action describe what will happen. Mobile layouts, keyboard access, and loading behavior are part of the conversion experience.',
      },
      {
        title: 'Measure the intended action',
        body: 'We agree on the conversion event and check that it reflects a meaningful action. A confirmed form delivery differs from a button click. Where an experiment is appropriate, we define the hypothesis, sample requirements, and evaluation period before reading a result.',
      },
    ],
    deliverables: [
      'Intent and message review',
      'Responsive landing-page design and copy',
      'Accessible contact and CTA flows',
      'Conversion event specification',
    ],
    faq: [
      {
        question: 'Are AI visitors always more likely to convert?',
        answer:
          'That depends on the audience, source, page, and attribution method. We compare observed cohorts and avoid treating a general claim as a result for your business.',
      },
      {
        question: 'Can you improve existing pages?',
        answer:
          'Yes. If the current URL already serves the right purpose, improving its content and experience may be more useful than creating another page.',
      },
    ],
  },
  {
    slug: 'geo-reporting-and-analytics',
    name: 'GEO reporting & analytics',
    shortName: 'Connect work to outcomes',
    number: '08',
    category: 'MEASUREMENT',
    summary:
      'A grounded view of visibility, referred visits, and qualified inquiries, with the limits made clear.',
    question: 'How do you measure GEO results?',
    answer:
      'GEO measurement combines sampled answer visibility, observable referrals, and business outcomes. Each metric uses a stated definition and source so that a brand mention is not confused with a visit, lead, or causal revenue claim.',
    audience:
      'Marketing leaders who need an understandable report for planning, investment decisions, and leadership conversations.',
    sections: [
      {
        title: 'Separate the layers',
        body: 'Visibility describes what appeared in a prompt sample. Referral data describes recorded visits. Conversion data describes a defined action or qualified inquiry. We connect these layers where evidence allows, while keeping their scopes and blind spots explicit.',
      },
      {
        title: 'Document the attribution limits',
        body: 'Referrers can be missing, copied links can lose context, and a buyer may use several channels before contacting you. Self-reported discovery can add context but is also incomplete. Reports distinguish observed referrals from broader AI-assisted journeys and avoid assigning certainty where none exists.',
      },
      {
        title: 'Use reporting to decide',
        body: 'A report should explain what shipped, what changed, how the change was measured, and which action follows. Stable metric definitions and dated content changes help teams interpret movement. We use comparisons carefully and do not assume that a before-and-after increase proves a single cause.',
      },
    ],
    deliverables: [
      'Metric dictionary and attribution plan',
      'Visibility and referral reporting',
      'Qualified inquiry and conversion mapping',
      'Monthly findings and next actions',
    ],
    faq: [
      {
        question: 'Can you measure all AI-influenced revenue?',
        answer:
          'No. Some journeys are unobservable. We report the evidence available and identify missing information rather than implying complete attribution.',
      },
      {
        question: 'What is a useful first metric?',
        answer:
          'Start with a documented visibility baseline for relevant questions, then connect observable referrals to a clearly defined business action. Avoid selecting a metric only because it is easy to inflate.',
      },
    ],
  },
];

// Matching source pages and the discovery exports share the same content.
export const services: Service[] = originalServices.map((original) => {
  const source = serviceOfferings.find((item) => item.slug === original.slug);
  if (!source) return original;
  return {
    ...original,
    name: source.name,
    shortName: source.navLabel,
    summary: source.summary,
    question: source.faqs[0].q,
    answer: source.introduction[0]
      .map((segment) => (typeof segment === 'string' ? segment : segment.text))
      .join(''),
    audience: source.fit.join(' '),
    deliverables: source.deliverables,
    sections: [
      ...source.introduction.map((paragraph, index) => ({
        title: `Why it matters${index ? ` (${index + 1})` : ''}`,
        body: paragraph
          .map((segment) => (typeof segment === 'string' ? segment : segment.text))
          .join(''),
      })),
      ...source.approach.map((step) => ({ title: step.title, body: step.copy })),
      { title: 'Common challenges', body: source.challenges.join('\n') },
      { title: 'How progress is measured', body: source.measures.join('\n') },
    ],
    faq: source.faqs.map((faq) => ({ question: faq.q, answer: faq.a })),
  };
});

export const processSteps = [
  {
    name: 'Audit',
    description:
      'See how your brand appears today. Examine buyer questions, answers, sources, and your site.',
    output: 'A clear visibility baseline',
  },
  {
    name: 'Prioritize',
    description: 'Find the gaps that matter to buyers and turn them into an achievable plan.',
    output: 'An evidence-led roadmap',
  },
  {
    name: 'Build',
    description:
      'Publish useful content, improve the site, and make your expertise easier to find and verify.',
    output: 'Shipped pages and improvements',
  },
  {
    name: 'Corroborate',
    description:
      'Strengthen accurate brand references in the places your audience already consults.',
    output: 'A stronger external presence',
  },
  {
    name: 'Measure',
    description:
      'Review answer visibility, observable referrals, and qualified inquiries. Apply what you learn.',
    output: 'A report with a next action',
  },
];

export const homeFaqs = [
  {
    question: 'What is Generative Engine Optimization (GEO)?',
    answer:
      'GEO is the work of making a brand and its expertise easier to discover, understand, and reference in AI-generated answers. It combines useful content, sound technical SEO, consistent business information, credible supporting sources, and measurement.',
  },
  {
    question: 'How are GEO, AEO, and SEO related?',
    answer:
      'SEO supports visibility in search engines. AEO, or Answer Engine Optimization, focuses on answering questions clearly. GEO extends that focus to how generative systems describe and reference brands. The practices overlap: clear answers still need useful content and an accessible website.',
  },
  {
    question: 'Can you guarantee a recommendation in ChatGPT or Google AI?',
    answer:
      'No. AI providers control their systems, and answers change with the question, context, and model. Citevia improves the content and signals you control, then measures observations using a documented method.',
  },
  {
    question: 'Who is Citevia for?',
    answer:
      'Citevia focuses on considered purchases, from B2B software and professional services to property, aviation, yachting, jewellery, and hospitality. The work is shaped around the buyer, the market, and the evidence a business can publish.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Tell us about your website, target audience, and current priorities. We can discuss an initial visibility audit, the scope of an engagement, and the information needed to establish a useful baseline.',
  },
  {
    question: 'Are the dashboards connected to a live account?',
    answer:
      'No. The reports use static, synthetic figures to show how mentions, citations, visits, and inquiries can be presented. No analytics API or client account is connected.',
  },
];

export const primaryServices = primaryServiceSlugs.map((slug) =>
  services.find((service) => service.slug === slug)!,
);
