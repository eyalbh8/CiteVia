import { sectorCaseStudies } from './sector-case-studies';

export type CaseStudy = {
  profile?: { company: string; market: string; scope: string; duration: string };
  metrics?: { label: string; before: string; after: string; context: string }[];
  timeline?: { period: string; title: string; body: string }[];
  interpretation?: string;
  industry?: string;
  slug: string;
  sector: string;
  title: string;
  description: string;
  question: string;
  challenge: string;
  approach: { title: string; body: string }[];
  deliverables: string[];
  measurement: string[];
  decision: string;
  relatedService: string;
  solution: string;
  updated: string;
};

// These are educational scenarios, not anonymized or verified client engagements.
export const caseStudies: CaseStudy[] = [
  ...sectorCaseStudies,
  {
    slug: 'saas-comparison-content',
    sector: 'B2B SAAS',
    title: 'Making a complex software comparison easier to answer.',
    description:
      'An illustrative study of turning scattered product information into a useful comparison page, with clear evidence and a defined measurement plan.',
    question: 'Which workflow platform fits a growing operations team?',
    challenge:
      'Imagine a software company whose product capabilities are spread across launch posts, help pages, and sales decks. A buyer can find feature names, but cannot easily compare integration requirements, onboarding work, or limitations. The same gap can make a generated comparison incomplete.',
    approach: [
      {
        title: 'Collect the evidence',
        body: 'Interview product and sales owners. List the criteria buyers actually use: team size, existing systems, migration effort, support, and constraints. Verify each capability against current documentation before including it in a comparison.',
      },
      {
        title: 'Build one useful decision page',
        body: 'Write a direct explanation of who the product serves, a criteria-based comparison, and a section on tradeoffs. Link each technical claim to supporting documentation. Keep competitor descriptions factual, dated, and reviewable.',
      },
      {
        title: 'Make the page discoverable',
        body: 'Link the comparison from relevant product and use-case pages, publish its canonical URL, and check that the main explanation is available in the rendered HTML. Assign a product owner to review it after meaningful releases.',
      },
    ],
    deliverables: [
      'An evidence inventory with source owners',
      'A comparison page brief and supporting links',
      'A documented set of buying questions',
      'A release and review log',
    ],
    measurement: [
      'Sample the same buying questions before and after publication.',
      'Record whether the page is cited and whether product descriptions are accurate.',
      'Review page visits and qualified demo requests separately from answer observations.',
      'Flag product launches or campaign changes that complicate a before-and-after comparison.',
    ],
    decision:
      'If the page is discoverable but answers still misstate a capability, inspect the sources attached to those answers. The next step may be correcting older documentation rather than publishing another comparison.',
    relatedService: 'content-creation',
    solution: 'b2b-saas',
    updated: '2026-10-13',
  },
  {
    slug: 'consultancy-expertise',
    sector: 'PROFESSIONAL SERVICES',
    title: 'Turning specialist knowledge into a credible service story.',
    description:
      'An illustrative study of how a consultancy could explain expertise, scope, and process while respecting client confidentiality.',
    question: 'How do we choose a consultancy for a complex implementation?',
    challenge:
      'Consider a consultancy with experienced practitioners and a website that only lists broad service names. Its strongest evidence lives in private proposals and client conversations. Buyers have little public context for judging the firm’s approach, and much of the underlying work cannot be disclosed.',
    approach: [
      {
        title: 'Set publishing boundaries',
        body: 'Ask the delivery team which methods, qualifications, and examples can be discussed publicly. Record permissions for any client reference. Exclude sensitive project details from drafts shared with external systems.',
      },
      {
        title: 'Explain an engagement',
        body: 'Build a service page around the buyer’s decision: the problem, prerequisites, stages, responsibilities, and deliverables. Use an expert interview to explain practical tradeoffs. Label a constructed example as an example at every point where it is presented.',
      },
      {
        title: 'Create a useful first conversation',
        body: 'Connect the service page to an inquiry form that asks for enough context to assess fit. Explain the next step and offer a direct contact route. Keep detailed confidential material for an agreed private channel.',
      },
    ],
    deliverables: [
      'Approved expertise and qualification inventory',
      'Service page with scope and exclusions',
      'An expert-led guide answering a buyer question',
      'A consent and content-review record',
    ],
    measurement: [
      'Review whether sampled answers describe the service scope accurately.',
      'Track visits to the guide and relevant service page.',
      'Ask the business-development team whether inquiries match the intended engagement.',
      'Keep self-reported discovery separate from observed referral sources.',
    ],
    decision:
      'If inquiries reveal the same misunderstanding repeatedly, revise the service explanation. Success criteria should include better-informed conversations, with evidence from the team handling them.',
    relatedService: 'strategic-pr-placement',
    solution: 'professional-services',
    updated: '2026-10-13',
  },
  {
    slug: 'multi-market-measurement',
    sector: 'MARKETING OPERATIONS',
    title: 'Building a visibility baseline a team can compare over time.',
    description:
      'An illustrative study of a marketing team defining prompt cohorts, market context, and reporting rules before expanding AI search measurement.',
    question: 'Are we becoming easier to find in the markets we serve?',
    challenge:
      'Imagine a marketing team comparing screenshots gathered by different people, in different markets, using different questions. The answers are interesting, but an apparent improvement could come from a changed prompt or a personalized session. The team needs a consistent basis for deciding what to do next.',
    approach: [
      {
        title: 'Define the observation',
        body: 'Choose a buyer segment and market for each cohort. Record the question, language, engine surface, date, available model information, and session conditions. Separate branded checks from unbranded discovery and comparison questions.',
      },
      {
        title: 'Preserve the sample',
        body: 'Store the observed answer and its linked sources alongside the sampling details. Count brand mentions, owned citations, and factual errors separately. Use a stable core of questions and label any new exploratory cohort.',
      },
      {
        title: 'Connect findings to delivery',
        body: 'Review recurring issues and identify the pages or facts that can be improved. Assign owners, record publication dates, and annotate reporting changes. Discuss referrals and qualified inquiries in their own sections.',
      },
    ],
    deliverables: [
      'Prompt register with cohorts and context',
      'Metric definitions and denominators',
      'A source and answer review sheet',
      'An annotated monthly decision log',
    ],
    measurement: [
      'Compare like-for-like cohorts before combining results.',
      'Show answer counts alongside every rate.',
      'Record missing observations and sampling changes.',
      'Treat changes as evidence to investigate, without claiming a single edit caused them.',
    ],
    decision:
      'If the sample changes materially, establish a new baseline and keep the earlier series visible. A transparent discontinuity is more useful than a smooth chart that hides a different method.',
    relatedService: 'geo-reporting-and-analytics',
    solution: 'marketing-teams',
    updated: '2026-10-13',
  },
];
