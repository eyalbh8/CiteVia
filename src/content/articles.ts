import { arielosArticles } from './arielos-articles';
import { newArticles } from './blog-articles';

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  takeaway: string;
  relatedService: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    source?: { title: string; url: string };
  }[];
};

export const articles: Article[] = [
  ...arielosArticles,
  ...newArticles,
  {
    slug: 'geo-aeo-and-seo',
    title: 'GEO, AEO, and SEO: what actually changes?',
    category: 'FOUNDATIONS',
    published: '2026-10-13',
    updated: '2026-10-13',
    relatedService: 'geo-strategy',
    description:
      'Understand how SEO, Answer Engine Optimization, and Generative Engine Optimization overlap, and how to turn the terminology into practical work.',
    takeaway:
      'Start with a useful, accessible website. GEO and AEO add attention to buyer questions, answer accuracy, and citations; they do not remove the need for established SEO fundamentals.',
    sections: [
      {
        id: 'definitions',
        title: 'Three terms, overlapping work',
        paragraphs: [
          'Search Engine Optimization (SEO) helps people discover a website through search. It includes technical access, relevant content, internal links, and a good experience on the page. Answer Engine Optimization (AEO) is commonly used to describe work that makes information useful as a direct answer. Generative Engine Optimization (GEO) focuses on how brands and sources appear in generated responses.',
          'These terms do not define three isolated technical systems. A product page that explains its audience, limitations, and capabilities can help a person evaluating a supplier, a search engine interpreting the page, and an assistant looking for supporting information. The same improvement can serve all three.',
        ],
      },
      {
        id: 'what-changes',
        title: 'The unit of observation changes',
        paragraphs: [
          'A traditional report might begin with a query, a landing page, and recorded search visits. An AI visibility review also examines the generated answer: was the brand mentioned, was its offering described accurately, and was a source linked? Those observations should remain distinct.',
          'For example, an answer may name a company without citing its website. Another may cite a technical guide without recommending the company as a supplier. Neither observation automatically represents a visit or a lead. Decide which question the metric answers before reporting a number.',
        ],
      },
      {
        id: 'technical-foundation',
        title: 'Keep the technical foundation',
        paragraphs: [
          'For Google’s AI search features, ordinary search eligibility still matters. Google states that no additional technical requirements or special AI schema are needed. Accessible text, discoverable internal links, and structured data that matches the page remain practical priorities.',
          'This is a reason to make the site easier to maintain. A shared metadata framework, stable URLs, and a clear publishing workflow reduce the chance that a new page accidentally hides its best content or points to the wrong canonical URL.',
        ],
        source: {
          title: 'Google Search Central: AI features and your website',
          url: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
      },
      {
        id: 'a-practical-plan',
        title: 'Build a plan around the buyer',
        paragraphs: [
          'Begin with the decisions your audience needs to make. Use customer conversations, product questions, and sales objections to identify the missing explanations. Then compare those needs with the information already available on your site.',
          'A useful first cycle produces a small set of concrete improvements and a documented baseline. Avoid creating a separate page for every slight wording variation. Group questions that need the same answer and use distinct pages when the reader’s purpose actually changes.',
        ],
        bullets: [
          'Document a relevant set of buying questions and the conditions under which you sample answers.',
          'Improve the pages that explain your offer, evidence, and tradeoffs.',
          'Correct inconsistent brand details and outdated external profiles.',
          'Review mentions, citations, referrals, and inquiries as separate measures.',
        ],
      },
      {
        id: 'set-expectations',
        title: 'Set expectations you can defend',
        paragraphs: [
          'No agency controls the answer produced by an independent AI provider. A responsible program defines the work, evidence, and method it can deliver. It also records the limits of the sample and explains when a conclusion is uncertain.',
          'The useful question is whether buyers can find and understand accurate information about your business, and whether the work is improving that experience. Terminology should help organize the effort rather than distract from it.',
        ],
      },
    ],
  },
  {
    slug: 'anatomy-of-a-citable-page',
    title: 'The anatomy of a page worth citing',
    category: 'CONTENT PLAYBOOK',
    published: '2026-10-13',
    updated: '2026-10-13',
    relatedService: 'content-creation',
    description:
      'A practical editorial framework for clear answers, verifiable evidence, useful comparisons, and content that remains accurate after publication.',
    takeaway:
      'A page worth citing makes a useful claim easy to understand and verify. Start with the reader’s question, provide the evidence and limitations, and give the page an owner who keeps it current.',
    sections: [
      {
        id: 'answer-the-question',
        title: 'Make the main answer easy to find',
        paragraphs: [
          'A visitor should quickly understand what the page explains and whether it applies to them. The title should name the subject. The opening should provide a direct answer or a clear explanation of the offer. Supporting detail can then address scope, tradeoffs, examples, and the next decision.',
          'For a service page, this may mean explaining who it is for, what work is included, and what the buyer receives. For a comparison, it means naming the criteria and acknowledging that different needs lead to different choices. A direct answer does not require oversimplifying the subject.',
        ],
      },
      {
        id: 'support-the-claim',
        title: 'Put evidence next to the claim',
        paragraphs: [
          'Readers need to distinguish facts, analysis, and illustrative examples. A numerical claim should include its source, timeframe, and relevant definition. A product claim should be traceable to documentation or a demonstrated capability. An example should say that it is an example.',
          'If you publish original research, describe the sample and method. If you rely on external work, link to a primary source where possible and explain the limits of applying it to your audience. A link alone does not make an unsupported interpretation reliable.',
        ],
        source: {
          title: 'Google Search Central: creating helpful, reliable content',
          url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        },
      },
      {
        id: 'useful-structure',
        title: 'Use structure to support reading',
        paragraphs: [
          'Descriptive headings help readers locate the section they need. Lists work well for steps or parallel criteria. A comparison table can clarify a genuine comparison, while a paragraph is often better for an explanation. Choose the format that makes the information easier to use.',
          'Keep the important material available as text on the page. A chart can explain a trend visually, but its takeaway and method should also be readable. Avoid forcing a visitor to download a presentation to discover basic details about your offering.',
        ],
        bullets: [
          'Use one clear main heading and a logical hierarchy of section headings.',
          'Give meaningful names to links, files, and related resources.',
          'Explain acronyms on first use.',
          'Include limitations where they affect the reader’s decision.',
        ],
      },
      {
        id: 'structured-data',
        title: 'Keep structured data consistent',
        paragraphs: [
          'Structured data describes the page; it should not create a second, more impressive version of it. An article’s title, author, and dates should match the visible page. An organization should use consistent identity and contact information.',
          'Do not add fabricated ratings, testimonials, or claims to markup. Only use a schema type that fits the actual content. Correct markup can help eligible search features, but it does not guarantee a search appearance or an AI citation.',
        ],
        source: {
          title: 'Google Search Central: structured data guidelines',
          url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies',
        },
      },
      {
        id: 'maintain-the-page',
        title: 'Treat publication as the start of maintenance',
        paragraphs: [
          'Assign an owner and a reason to review the page: a product release, changed regulation, a new source, or a recurring editorial review. Update the visible modification date when the substance changes. A fresh timestamp on unchanged copy does not make the information more useful.',
          'Before publication, read the page as a buyer would. Can you explain the answer in one sentence? Can you verify the important claims? Do you understand who the offer is for and what happens next? Those questions create a more durable editorial standard than optimizing for an assumed citation formula.',
        ],
      },
    ],
  },
  {
    slug: 'measuring-ai-search-visibility',
    title: 'Measure AI visibility without fooling yourself',
    category: 'MEASUREMENT',
    published: '2026-10-13',
    updated: '2026-10-13',
    relatedService: 'geo-reporting-and-analytics',
    description:
      'Separate sampled brand visibility, recorded referrals, and qualified inquiries to build a defensible AI search measurement plan.',
    takeaway:
      'Track three layers separately: what appears in a documented answer sample, which visits you can observe, and which business actions those visits produce. Report the gaps as clearly as the gains.',
    sections: [
      {
        id: 'define-the-sample',
        title: 'Define what you observed',
        paragraphs: [
          'A visibility number only makes sense alongside its sample. Record the prompts, engine, date, language, market, and relevant settings. Keep branded queries separate from questions that do not already name your company. Repeat observations where access and budget allow.',
          'If 12 of 40 sampled answers mention a brand, the mention rate for that sample is 30%. That is not 30% of every answer produced by the engine, and it is not market share. Keeping the denominator visible prevents a narrow observation from becoming a much broader claim.',
        ],
      },
      {
        id: 'separate-metrics',
        title: 'Keep mentions, citations, and recommendations distinct',
        paragraphs: [
          'A mention records that the answer names the brand. An owned citation records a link to a page on the brand’s site. A recommendation describes how the offering is positioned for a buyer’s need and may require a documented judgment rule.',
          'Store examples behind the report so a team can understand what a change means. A rise in mentions accompanied by inaccurate descriptions is a different result from a rise in accurate, relevant recommendations. Define each measure before comparing periods.',
        ],
        bullets: [
          'Mention rate: answers naming the brand divided by answers sampled.',
          'Owned citation rate: answers linking to an owned page divided by answers sampled.',
          'Accuracy review: documented checks of material product or company descriptions.',
          'Competitor coverage: observations using the same prompt cohort and conditions.',
        ],
      },
      {
        id: 'referral-limits',
        title: 'Treat referral data as partial evidence',
        paragraphs: [
          'Analytics can record some visits arriving from AI services. It cannot reliably identify every visit influenced by an assistant. A person might copy a link, switch devices, return through a search engine, or speak to a colleague before making contact.',
          'Self-reported discovery can add context. Ask a simple question such as how the buyer first heard about the company, and keep their answer distinct from observed referral data. Neither source should silently overwrite the other.',
        ],
      },
      {
        id: 'business-outcomes',
        title: 'Define a meaningful business action',
        paragraphs: [
          'Choose a conversion that reflects the purpose of the page: a delivered inquiry, an account signup, or another agreed action. A click on a contact button is useful interaction data, but it does not prove that an inquiry reached the team.',
          'Where possible, connect recorded source information to qualification in your existing CRM. Apply your ordinary privacy and consent requirements. Report counts and conversion rates together; a high rate from a tiny sample should not carry the same weight as a sustained pattern.',
        ],
      },
      {
        id: 'interpret-change',
        title: 'Explain change without overstating causation',
        paragraphs: [
          'Keep a dated log of content changes, technical releases, campaigns, and changes to the sampling method. A before-and-after difference can guide investigation, but it does not prove that one activity caused the result.',
          'A useful monthly review states what shipped, what the data shows, what remains uncertain, and what the team will do next. It is acceptable for an early review to conclude that more observations are needed. Clear limits make the report more useful for decisions.',
        ],
      },
    ],
  },
];

export function readingMinutes(article: Article) {
  const text = [
    article.takeaway,
    ...article.sections.flatMap((s) => [s.title, ...s.paragraphs, ...(s.bullets || [])]),
  ].join(' ');
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 220));
}

export function articleSummary(article: Article) {
  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
    category: article.category,
    published: article.published,
    minutes: readingMinutes(article),
  };
}

export type ArticleSummary = ReturnType<typeof articleSummary>;

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
