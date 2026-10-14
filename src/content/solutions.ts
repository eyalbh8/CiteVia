export type Solution = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  questions: string[];
  priorities: { title: string; body: string }[];
  deliverables: string[];
  services: string[];
  study: string;
};

export const solutions: Solution[] = [
  {
    slug: 'b2b-saas',
    name: 'B2B SaaS',
    title: 'Help buyers understand where your software fits.',
    description:
      'GEO and SEO for B2B software teams: clarify product fit, improve comparison content, and measure visibility across real buying questions.',
    intro:
      'Software buyers need to understand capabilities, integrations, implementation effort, and limitations before they book a demo. We organize those answers into a connected body of product evidence that your team can maintain as the product changes.',
    questions: [
      'Which platform fits a small team with a complex workflow?',
      'Does this product integrate with our existing tools?',
      'What should we compare before switching providers?',
    ],
    priorities: [
      {
        title: 'Explain the buying decision',
        body: 'Translate sales objections and product questions into useful use-case pages. Describe the conditions that make your product a good fit, including prerequisites and situations where another approach may work better.',
      },
      {
        title: 'Connect claims to evidence',
        body: 'Connect integration claims to current documentation, implementation advice to a real process, and customer outcomes to approved evidence. Give every material statement an owner who can keep it accurate.',
      },
      {
        title: 'Follow the path to a qualified demo',
        body: 'Review sampled AI answers alongside landing-page visits and qualified demo requests. Record the product version, market, and prompt cohort so a shift in monitoring does not look like a shift in performance.',
      },
    ],
    deliverables: [
      'Buyer-question and page map',
      'Product and comparison content briefs',
      'Technical discovery priorities',
      'A baseline with a repeatable measurement method',
    ],
    services: ['content-creation', 'seo', 'ai-search-monitoring'],
    study: 'saas-comparison-content',
  },
  {
    slug: 'professional-services',
    name: 'Professional services',
    title: 'Make your expertise easier to evaluate.',
    description:
      'AI search visibility for consultancies and specialist service firms, with clear service scope, expert evidence, and a considered inquiry journey.',
    intro:
      'A specialist service can be difficult to evaluate from a short description. Buyers need to understand who does the work, what an engagement includes, and how the firm approaches a problem. We help turn that expertise into useful public information.',
    questions: [
      'Which consultancy has experience with this kind of project?',
      'What should a first engagement include?',
      'How can we assess expertise before sharing confidential information?',
    ],
    priorities: [
      {
        title: 'Describe the work precisely',
        body: 'Create service pages that explain the problem, scope, process, and expected deliverables. Avoid broad claims that could describe any firm. Give buyers enough context to decide whether a first conversation is worthwhile.',
      },
      {
        title: 'Publish expertise with permission',
        body: 'Develop expert explanations and approved project narratives. When client details are confidential, agree what can be published before writing. An illustrative example can explain an approach, but must never be presented as a client result.',
      },
      {
        title: 'Make the next step useful',
        body: 'Explain what happens after an inquiry, what information is needed, and which questions belong in a private discussion. Review inquiry quality with the team that handles new business.',
      },
    ],
    deliverables: [
      'Service and expertise content map',
      'Expert interview and evidence brief',
      'Clear assessment or inquiry page',
      'A review process for confidential material',
    ],
    services: ['geo-strategy', 'strategic-pr-placement', 'conversion-rate-optimization'],
    study: 'consultancy-expertise',
  },
  {
    slug: 'marketing-teams',
    name: 'Marketing teams & agencies',
    title: 'Turn AI visibility observations into a delivery plan.',
    description:
      'A practical GEO operating model for marketing teams and agencies: shared baselines, prioritized content work, and reporting with clear ownership.',
    intro:
      'Monitoring creates questions. Progress needs a team that can decide what matters, assign the work, and explain what changed. We help marketing teams connect their existing search, content, and reporting workflows around a shared plan.',
    questions: [
      'Which gaps deserve attention this month?',
      'Who owns the content and evidence behind this answer?',
      'How do we compare progress when engines and prompts change?',
    ],
    priorities: [
      {
        title: 'Agree a shared baseline',
        body: 'Define the markets, buyer questions, competitors, and engine surfaces before collecting observations. Keep branded questions separate from category discovery and preserve the raw sample behind the summary.',
      },
      {
        title: 'Give each finding a next action',
        body: 'Turn useful observations into a brief with a page, an owner, a reason to act, and an acceptance criterion. A content gap may call for a new explanation; an inaccurate product description may require correcting an existing source.',
      },
      {
        title: 'Report decisions as well as metrics',
        body: 'Maintain a release log and review the evidence with the people responsible for delivery. Explain sample changes, attribution limits, and the next decision instead of reducing the program to a single visibility score.',
      },
    ],
    deliverables: [
      'Shared measurement definitions',
      'Prioritized work queue with owners',
      'Editorial and technical acceptance criteria',
      'A monthly review format',
    ],
    services: ['ai-visibility-audit', 'geo-reporting-and-analytics', 'geo-strategy'],
    study: 'multi-market-measurement',
  },
];
