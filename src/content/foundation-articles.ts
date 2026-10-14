import type { Article } from './articles';

export const foundationArticles: Article[] = [
  {
    slug: 'geo-aeo-and-seo',
    title: 'GEO, AEO and SEO: differences and a practical plan',
    seoTitle: 'GEO, AEO and SEO: A Practical Guide',
    focusKeyphrase: 'GEO, AEO and SEO',
    category: 'FOUNDATIONS',
    published: '2026-10-13',
    updated: '2026-10-14',
    relatedService: 'geo-strategy',
    description:
      'Understand GEO, AEO and SEO, see where the work overlaps, and build a practical plan for useful content, accurate answers and measurable results.',
    takeaway:
      'GEO, AEO and SEO share a foundation: accessible pages that answer real questions with reliable evidence. Start there, then measure search visits, AI mentions and citations separately.',
    sections: [
      {
        id: 'definitions',
        title: 'What do GEO, AEO and SEO mean?',
        paragraphs: [
          'GEO, AEO and SEO describe overlapping ways to help people discover and understand your business. The terms can make planning feel complicated. A useful starting point is the buyer’s question: what information would help someone choose confidently?',
          'Search engine optimization, or SEO, helps search engines discover and interpret pages that serve that need. Answer engine optimization, or AEO, focuses on making information useful as a direct answer. Generative engine optimization, or GEO, examines how sources and brands appear in generated responses.',
          'AEO and GEO are industry labels with varying definitions. Before commissioning work, ask what the provider will change, observe and report. Agreeing on those deliverables matters more than choosing a preferred acronym.',
        ],
      },
      {
        id: 'shared-foundation',
        title: 'Start with the foundation all three share',
        paragraphs: [
          'A strong website explains who an offer serves, what it includes and where its limits lie. It also makes that information easy to reach. Clear navigation and meaningful links help visitors move from an introduction to the evidence behind it.',
          'Google’s [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) explains the basics of making content discoverable and understandable. Use those fundamentals to review important pages before adding new publishing tools or reporting systems.',
          'For example, a payment provider could clarify which terminals support an unattended retail setup. The page should cover compatibility, installation requirements and support options. That single improvement helps a buyer evaluate the product and gives search systems clearer information to interpret.',
        ],
      },
      {
        id: 'what-changes',
        title: 'Add the generated answer to your review',
        paragraphs: [
          'Traditional search reporting often starts with queries, landing pages and visits. An AI visibility review also looks at the answer itself. Does it name the brand? Does it describe the offering accurately? Does it link to a useful source?',
          'These observations mean different things. An assistant might mention a company while recommending another supplier. It might cite a technical guide without discussing the company’s services. Treating either event as a lead would make the report misleading.',
          'Keep a record of the question, response and source links. Our guide to [AI visibility measurement](/blog/measuring-ai-search-visibility) explains how to define these measures and report the limits of a sample.',
        ],
      },
      {
        id: 'technical-foundation',
        title: 'Keep technical access on the checklist',
        paragraphs: [
          'For Google’s AI Overviews and AI Mode, pages must be indexed and eligible to appear with a search snippet. Google’s [guidance for AI search features](https://developers.google.com/search/docs/appearance/ai-features) says there are no additional technical requirements or special schema types for inclusion.',
          'That guidance applies to Google’s features. Other providers have their own access controls and documentation. Review the providers that matter to your audience before changing crawler rules across the whole site.',
          'Start by checking your important pages: can a visitor reach them, read the main content and follow related links? Then review indexing controls and canonical URLs. Our explanation of [robots.txt, sitemap.xml and llms.txt](/blog/robots-sitemap-llms-explained) helps separate the purpose of each file.',
        ],
      },
      {
        id: 'content-priorities',
        title: 'Choose content from actual buying questions',
        paragraphs: [
          'Collect questions from sales calls, support requests, product demonstrations and customer research. Group them by the decision they support. Questions about price, compatibility, implementation and alternatives often need different evidence.',
          'Next, map each group to an existing page. Improve a page when it already serves the right purpose. Create a new one when the reader needs a distinct answer. This approach gives each URL a clear job and reduces repeated content.',
          'A buyer comparing two approaches may need a concise comparison with clear tradeoffs. A buyer planning implementation may need prerequisites and a realistic sequence. Use the [citable content checklist](/blog/anatomy-of-a-citable-page) to check the clarity and support behind each answer.',
        ],
      },
      {
        id: 'first-cycle',
        title: 'Run a focused first improvement cycle',
        paragraphs: [
          'Give the first cycle a clear owner and a manageable scope. A small set of well-supported updates is easier to review than a large batch of thin pages. Record what changed so later observations have context.',
          'For a hypothetical software company, that cycle might cover one product page and one comparison guide. The team could add supported integrations, explain migration steps and document who the product suits. It would then review the same buyer questions again.',
        ],
        bullets: [
          'Define the audience, market and decisions you want to support.',
          'Save a baseline of search performance and a documented answer sample.',
          'Choose pages with a clear information gap and business purpose.',
          'Add evidence, relevant internal links and a useful next action.',
          'Publish the changes, record their dates and schedule a review.',
        ],
      },
      {
        id: 'set-expectations',
        title: 'Measure progress with clear expectations',
        paragraphs: [
          'Agree on measures before work starts. Search visits, sampled mentions, owned citations and qualified inquiries each answer a different question. Report them separately, with dates and definitions, so the team can understand what improved.',
          'No provider can promise control over an independent assistant’s recommendation. A useful engagement instead specifies the research, technical changes, content improvements and reporting it will deliver. Early results may identify a missing explanation before they show a change in inquiries.',
          'Start with one important buyer journey and improve it end to end. Citevia’s [methodology](/methodology) connects that research to content and measurement. The aim is a site people can use and trust, supported by evidence your team can explain.',
        ],
      },
    ],
  },
  {
    slug: 'anatomy-of-a-citable-page',
    title: 'How to create citable content: a practical guide',
    seoTitle: 'Citable Content: A Practical Publishing Guide',
    focusKeyphrase: 'citable content',
    category: 'CONTENT PLAYBOOK',
    published: '2026-10-13',
    updated: '2026-10-14',
    relatedService: 'content-creation',
    description:
      'Create citable content with clear answers, verifiable sources and useful examples. Follow a practical checklist for structure, evidence and maintenance.',
    takeaway:
      'Citable content makes an answer easy to understand and verify. State the answer early, place evidence beside important claims, explain the limits and assign someone to maintain the page.',
    sections: [
      {
        id: 'answer-the-question',
        title: 'Give citable content a clear purpose',
        paragraphs: [
          'Citable content gives a reader a useful answer and enough evidence to check it. That makes the page easier to reference in a buying discussion, an article or an AI response. It does not guarantee that any publisher or assistant will select it.',
          'Begin with one specific question. For example: which payment methods can this terminal accept in this market? The opening should answer that question within the available evidence. Then explain compatibility, restrictions and the next step.',
          'Write down the intended reader and the decision before drafting. A page for a technical evaluator needs different detail from a broad introduction. Our guide to [high-intent prompt research](/blog/high-intent-prompt-intelligence) can help identify those differences.',
        ],
      },
      {
        id: 'support-the-claim',
        title: 'Place evidence beside the claim it supports',
        paragraphs: [
          'A source should support the particular statement beside it. Link a product capability to current product documentation. Link an industry finding to the original report, with its relevant date and scope. Avoid sending readers to a homepage when a precise source exists.',
          'Google’s [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) encourages clear sourcing, original value and accurate authorship. Those principles are useful editorial checks. Simply collecting links does not make an argument reliable.',
          'Separate what the source establishes from your interpretation. A study of one market may inform a question in another market, but it cannot establish the same result there. Explain that gap in plain language.',
          'For original research, provide the sample, method and observation period. For an illustrative example, label it clearly. This helps readers understand what they can reasonably conclude.',
        ],
      },
      {
        id: 'useful-structure',
        title: 'Build a structure readers can scan',
        paragraphs: [
          'Use the title to name the question or outcome. Give each section a descriptive heading, then keep its paragraphs focused on that subject. Readers should be able to scan the headings and understand the argument before reading every sentence.',
          'The [W3C guidance on headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) explains how heading levels communicate a page’s organization. A logical hierarchy also helps people using assistive technology navigate to relevant sections.',
          'Choose the format that fits the information. Use steps for a process, bullets for parallel criteria and a table for a genuine comparison. Keep the main answer available as text, even when a chart or image supports it.',
        ],
        bullets: [
          'Introduce acronyms before using them throughout the page.',
          'Keep each paragraph focused on one point.',
          'Use descriptive link text that explains the destination.',
          'Write image alternatives that convey the relevant information.',
        ],
      },
      {
        id: 'worked-example',
        title: 'Turn a broad claim into a useful answer',
        paragraphs: [
          'Consider this hypothetical claim: “Our platform works with every system.” It creates questions instead of resolving them. Which systems, which versions and which tasks does the integration support?',
          'A stronger page would name the supported systems and link their documentation. It would separate a standard integration from custom development. It would also explain what the customer must provide and how to check an unsupported setup.',
          'The same approach improves comparisons. State the criteria, show the evidence for each option and acknowledge where another choice may suit the buyer. Our guide to [writing useful comparison pages](/blog/comparison-pages-for-buyers) develops this process.',
          'This level of detail gives a reader something concrete to quote. It also reduces the chance that someone repeats an overly broad promise on your behalf.',
        ],
      },
      {
        id: 'structured-data',
        title: 'Keep metadata and structured data accurate',
        paragraphs: [
          'The search title and description should set an expectation the page meets. Use a specific title and a short summary of the answer. Avoid promising a benchmark, checklist or research result that the body does not provide.',
          'Structured data should describe the visible page accurately. Google’s [structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) prohibit misleading markup and claims that readers cannot find on the page. Do not invent ratings, credentials or reviews.',
          'For articles, make the visible title, byline and dates consistent with the markup. Use the original publication date and update the modification date when the substance changes. Correct markup supports interpretation, but it does not promise a citation or special search appearance.',
        ],
      },
      {
        id: 'publication-checklist',
        title: 'Review the page before publication',
        paragraphs: [
          'Ask someone familiar with the subject to review the claims and someone less familiar to review clarity. Their questions often reveal missing context that the author overlooks. Record any unresolved points before the page goes live.',
          'Next, follow every link. Check that the source remains available and supports the wording used. Internal links should lead to the most useful next explanation, rather than send readers back to a general category page.',
        ],
        bullets: [
          'Can the reader find a direct answer near the beginning?',
          'Does every important claim have evidence or a clear qualification?',
          'Are examples, estimates and measured findings distinguishable?',
          'Do the headings reflect the actual contents of each section?',
          'Is the next step appropriate for the reader’s stage?',
        ],
      },
      {
        id: 'maintain-the-page',
        title: 'Give citable content an owner after publication',
        paragraphs: [
          'Assign a person or team to maintain the page. Record why it needs review: a product release, a changed source or a recurring editorial check. Prioritize claims that affect a buyer’s decision, such as compatibility and service scope.',
          'Keep a short change log. If an external source disappears, replace it with evidence that supports the same claim or revise the claim. A new timestamp alone does not repair outdated information.',
          'Finally, review how the page serves readers using [separate visibility and business measures](/blog/measuring-ai-search-visibility). Citevia’s [content creation service](/services/content-creation) brings research, writing and maintenance into that workflow. Start by improving one page your buyers already rely on.',
        ],
      },
    ],
  },
  {
    slug: 'measuring-ai-search-visibility',
    title: 'AI visibility measurement: metrics that matter',
    seoTitle: 'AI Visibility Measurement: Metrics That Matter',
    focusKeyphrase: 'AI visibility measurement',
    category: 'MEASUREMENT',
    published: '2026-10-13',
    updated: '2026-10-14',
    relatedService: 'geo-reporting-and-analytics',
    description:
      'Build an AI visibility measurement plan that separates mentions, citations, referrals and qualified inquiries, with clear definitions and reporting limits.',
    takeaway:
      'AI visibility measurement needs three distinct layers: a documented sample of answers, observed website visits and meaningful business actions. Define each measure and show its limits before comparing results.',
    sections: [
      {
        id: 'measurement-purpose',
        title: 'Start AI visibility measurement with a decision',
        paragraphs: [
          'AI visibility measurement should help your team decide what to improve next. A single score rarely explains whether the problem is missing information, an inaccurate description or a weak path to contact. Start by naming the decision the report must support.',
          'For example, a product team may want to know whether assistants describe its integration requirements correctly. A marketing team may want to understand which guides attract visits. Sales may want to know whether those visits produce suitable inquiries.',
          'Keep these questions separate while using a shared reporting period. Our [AI visibility audit playbook](/blog/ai-visibility-audit-playbook) explains how to turn the initial findings into a prioritized set of actions.',
        ],
      },
      {
        id: 'define-the-sample',
        title: 'Define the answer sample before collecting it',
        paragraphs: [
          'Create a fixed group of questions that reflects real buying decisions. Record the engine, date, language, market and settings you can observe. Also record whether the question already names your brand. Branded questions and open supplier searches serve different purposes.',
          'Repeat observations when resources allow. Save the answer and its links so another reviewer can understand the score. If you change the questions or sampling method, mark that change before comparing periods.',
          'In a hypothetical sample, 12 of 40 answers might mention a brand. The mention rate is 30% for those observations. It says nothing by itself about the brand’s share of all answers or all buyers.',
        ],
        bullets: [
          'Store a stable question identifier and the exact wording.',
          'Keep unavailable or failed responses separate from valid answers.',
          'Record repeats and use the same counting rule each period.',
          'Save the model or product version when it is available.',
        ],
      },
      {
        id: 'separate-metrics',
        title: 'Separate mentions, citations and recommendations',
        paragraphs: [
          'Define a mention as an answer that names the brand. Define an owned citation as an answer that links to the brand’s website. Then define what counts as a recommendation for the buyer’s stated need. These events can overlap, so do not add their percentages together.',
          'Count each answer once per measure if you use an answer-based rate. A response with three links to your site would then count as one answer with an owned citation. Document any alternative rule clearly.',
          'Review accuracy alongside frequency. An answer may name a product often while getting a critical limitation wrong. Our article on [the recommendation gap](/blog/recommendation-gap-known-vs-selected) explains why being known and being selected need separate attention.',
        ],
        bullets: [
          'Mention rate: valid answers naming the brand divided by valid answers sampled.',
          'Owned citation rate: valid answers linking to an owned page divided by valid answers sampled.',
          'Recommendation rate: valid answers meeting your documented recommendation rule divided by valid answers sampled.',
          'Accuracy review: a record of material claims checked against current evidence.',
        ],
      },
      {
        id: 'referral-limits',
        title: 'Use analytics to examine observed visits',
        paragraphs: [
          'Website analytics answers a different question: which visits did the site record? In GA4, use session-level dimensions for a visit-level review. Google’s [Traffic acquisition documentation](https://support.google.com/analytics/answer/12923437?hl=en) explains session source, medium and the available report dimensions.',
          'Review the actual source values and landing pages in your property. Channel labels depend on classification rules. Google now documents an [AI Assistant default channel](https://support.google.com/analytics/answer/9756891?hl=en), but a channel total still depends on the traffic and attribution information available.',
          'An assistant can influence a buyer without producing an identifiable visit. Someone may copy a link, switch devices or return later through search. Collect a simple self-reported discovery answer when useful, and keep it separate from recorded attribution.',
        ],
      },
      {
        id: 'business-outcomes',
        title: 'Choose a business action you can confirm',
        paragraphs: [
          'Decide which event reflects a meaningful outcome: a delivered inquiry, completed signup or confirmed purchase. A contact-button click shows intent to interact. It does not prove that the person sent a message or became a qualified opportunity.',
          'Google’s [key event setup guidance](https://support.google.com/analytics/answer/13128484?hl=en) explains how to mark important events for reporting. Before using an event in a performance claim, confirm that it fires for the intended action and follows a consistent counting rule.',
          'Where your systems permit, connect the inquiry to an agreed qualification outcome. Record counts as well as rates. Two suitable inquiries from ten sessions and twenty from a thousand sessions require different business discussions. Our [guide to qualified inquiries from AI referrals](/blog/ai-referrals-to-qualified-inquiries) covers that handoff.',
        ],
      },
      {
        id: 'worked-report',
        title: 'Build a report that preserves the denominators',
        paragraphs: [
          'Consider a hypothetical monthly report. The team samples 40 valid answers and records 12 brand mentions and five answers with owned citations. Analytics separately records 60 sessions from identified AI sources. Those sessions produce four delivered inquiries, of which two meet the team’s qualification criteria.',
          'The answer sample gives a 30% mention rate and a 12.5% owned citation rate. The session and inquiry figures describe a different dataset. Do not divide the inquiries by the sampled answers or imply that the sample caused those visits.',
          'Show the reporting window beside each dataset. If the qualification review is still incomplete, say how many inquiries remain open. This makes the report useful without pretending every step of the buyer journey is visible.',
        ],
      },
      {
        id: 'interpret-change',
        title: 'Use changes to guide the next action',
        paragraphs: [
          'Keep a dated log of content releases, technical changes, campaigns and measurement changes. Compare like with like where possible. A new prompt group or a changed event definition can shift a chart even when the underlying buyer experience stays similar.',
          'A before-and-after change suggests something to investigate. It does not establish that a particular activity caused the result. Review saved answers, landing pages and inquiry quality before deciding whether to repeat the work.',
          'Close the report with four points: what shipped, what changed, what remains uncertain and what happens next. Use Citevia’s [methodology](/methodology) to connect that review to a practical work plan. Consistent definitions make small datasets more useful than an impressive number nobody can explain.',
        ],
      },
    ],
  },
];
