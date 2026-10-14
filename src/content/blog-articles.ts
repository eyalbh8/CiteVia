import type { Article } from './articles';

export const newArticles: Article[] = [
  {
    slug: 'ai-visibility-audit-playbook',
    title: 'Build an AI visibility audit your team can act on',
    description:
      'A practical audit workflow: define buyer questions, capture answer evidence, review source pages, and turn findings into an owned delivery plan.',
    category: 'STRATEGY',
    published: '2026-10-13',
    updated: '2026-10-13',
    relatedService: 'ai-visibility-audit',
    takeaway:
      'An actionable audit ends with a short list of evidence-backed decisions. Start with a defined audience and a documented sample, then connect each finding to a page, an owner, and a next step.',
    sections: [
      {
        id: 'scope',
        title: 'Start with a decision, then define the sample',
        paragraphs: [
          'Decide what the audit should help the team choose. A company entering a new category may need to understand whether buyers can identify its product. An established business may need to investigate inaccurate descriptions. Those are different questions and should shape different samples.',
          'Choose the audience, market, language, and search surfaces before collecting answers. Use sales conversations and customer questions to build the prompt set. A question that sounds plausible to the marketing team is still a hypothesis until there is evidence that it reflects a buyer’s concern.',
        ],
        bullets: [
          'Discovery: what options could solve this problem?',
          'Evaluation: which requirements and tradeoffs matter?',
          'Selection: when is this provider a suitable choice?',
          'Branded accuracy: are material facts about the company correct?',
        ],
      },
      {
        id: 'capture',
        title: 'Keep the evidence behind the summary',
        paragraphs: [
          'For each observation, record the exact question, date, engine surface, locale, and relevant session conditions. Keep the answer text and source links. If a source cannot be accessed, record that limitation instead of inferring what it contains.',
          'Separate a brand mention from a recommendation and from a link to your website. An answer can contain any combination of the three. Repeated samples can reveal variability, but they still describe the conditions you observed; they do not represent every user or every possible response.',
        ],
      },
      {
        id: 'sources',
        title: 'Inspect the information a buyer can verify',
        paragraphs: [
          'Follow the sources in the sampled answers and compare them with the important pages on your own site. Look for outdated descriptions, missing use cases, unsupported claims, and confusing product names. Also consider whether the answer already gives the buyer enough useful information.',
          'Review technical access alongside editorial quality. A useful explanation should be reachable through ordinary links and available as text. On Google’s AI search features, existing search requirements still apply; there is no separate special schema that guarantees inclusion.',
        ],
        source: {
          title: 'Google Search Central: AI features and your website',
          url: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
      },
      {
        id: 'prioritize',
        title: 'Write findings as work someone can own',
        paragraphs: [
          'A finding such as “improve authority” is too vague to schedule. A stronger finding identifies the observed gap, the evidence behind it, the affected buyer question, and a proposed intervention. State what would make the task complete.',
          'For example, a product owner could verify integration requirements, a writer could update the relevant explanation, and a developer could repair its internal links. Prioritize material buyer confusion and factual errors before cosmetic changes to a visibility score.',
        ],
        bullets: [
          'Finding: what did the sample show?',
          'Evidence: which answer and source support the finding?',
          'Action: which page or process should change?',
          'Owner: who can approve the facts and deliver the work?',
          'Review: when and how will the team reassess it?',
        ],
      },
      {
        id: 'review',
        title: 'Preserve the baseline for the next cycle',
        paragraphs: [
          'Keep a stable core of questions and add exploratory questions as a separate cohort. Record publication dates and changes to the sampling method. At the next review, explain what changed, what remained consistent, and what the evidence cannot yet establish.',
          'The audit is valuable even when it reveals that the main problem is an unclear service page or a weak handoff to sales. Its purpose is to guide a useful decision and make the next round of work easier to evaluate.',
        ],
      },
    ],
  },
  {
    slug: 'comparison-pages-for-buyers',
    title: 'Write comparison pages that help buyers choose',
    description:
      'How to build a useful B2B comparison page with decision criteria, verified product facts, clear tradeoffs, and an ongoing review owner.',
    category: 'CONTENT',
    published: '2026-10-13',
    updated: '2026-10-13',
    relatedService: 'content-creation',
    takeaway:
      'A useful comparison explains the conditions behind a choice. Organize it around buyer criteria, support material claims with sources, and make limitations as easy to find as benefits.',
    sections: [
      {
        id: 'decision',
        title: 'Name the decision the reader is making',
        paragraphs: [
          '“Which tool is best?” leaves too much unsaid. A buyer may need to reduce setup work, support a particular integration, or move an existing workflow without losing data. Define the audience and situation at the start of the page so the reader can judge whether the comparison applies.',
          'Ask sales and support teams which tradeoffs appear in real conversations. Group related concerns into a small set of criteria. Avoid adding dozens of rows solely to make your own product appear to win; a long list of minor differences can obscure the choice that matters.',
        ],
      },
      {
        id: 'evidence',
        title: 'Give each material claim a source',
        paragraphs: [
          'Use current product documentation for technical capabilities, published terms for service conditions, and approved customer evidence for outcomes. Record where each fact came from and when it was reviewed. If a fact is unclear, say what the buyer should confirm.',
          'When describing another provider, distinguish a documented limitation from something you have not verified. An absence in the documentation is not proof that a capability does not exist. Pricing and packaging need particular care because they can change independently of the page.',
        ],
      },
      {
        id: 'structure',
        title: 'Build a page that can stand on its own',
        paragraphs: [
          'Open with a concise explanation of who each approach suits. Then expand into criteria, evidence, implementation considerations, and next steps. Use descriptive headings that still make sense when a reader arrives partway through the page.',
          'Keep essential context near the claim. If a feature requires a certain plan or configuration, include that qualification in the same explanation. A short answer that loses its conditions is less helpful than a slightly longer answer that remains accurate.',
        ],
        bullets: [
          'Audience and decision context',
          'Evaluation criteria with their practical implications',
          'Supported capabilities and relevant limitations',
          'Implementation and switching considerations',
          'Source links, review date, and a useful next step',
        ],
      },
      {
        id: 'originality',
        title: 'Add something the reader cannot get from a feature list',
        paragraphs: [
          'Explain how a requirement changes the evaluation. A team with limited implementation capacity may prioritize setup guidance over customization. A team consolidating tools may care more about data portability and ownership. An informed explanation makes the comparison useful even before a reader requests a demo.',
          'Where you have firsthand evidence, explain its scope and method. Where you do not, use a labeled scenario to illustrate the decision. Google’s people-first content guidance emphasizes useful, reliable content created for readers; an original explanation should serve that purpose.',
        ],
        source: {
          title: 'Google Search Central: creating helpful, reliable, people-first content',
          url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        },
      },
      {
        id: 'maintenance',
        title: 'Assign an owner and a reason to revisit it',
        paragraphs: [
          'A comparison becomes a liability when it outlives the facts behind it. Assign an owner who can approve product details and define review triggers such as a release, pricing change, or corrected competitor claim. Update the visible modification date after a substantive revision.',
          'Review the questions the page still leaves unanswered. Contact-form context and sales conversations can identify missing explanations. Evaluate those signals alongside page engagement and qualified inquiries, rather than treating publication as the end of the work.',
        ],
      },
    ],
  },
  {
    slug: 'robots-sitemap-llms-explained',
    title: 'robots.txt, sitemap.xml, and llms.txt: what each file does',
    description:
      'A plain-language guide to crawl rules, canonical page discovery, and an optional LLM content index, including how Citevia keeps these files aligned.',
    category: 'TECHNICAL SEO',
    published: '2026-10-13',
    updated: '2026-10-13',
    relatedService: 'seo',
    takeaway:
      'Use robots.txt to communicate crawl rules, a sitemap to list canonical pages, and llms.txt to summarize and link to useful content. Each serves a different job; none guarantees indexing, rankings, or an AI citation.',
    sections: [
      {
        id: 'robots',
        title: 'robots.txt communicates crawl rules',
        paragraphs: [
          'A robots.txt file sits at the site root and provides rules for cooperating crawlers. A public marketing site will usually allow access to its content while excluding routes that do not belong in search, such as internal application endpoints. Specific crawler groups can have different rules, so read the complete file before changing it.',
          'A crawl rule is not access control. Private material needs authentication. Blocking a page from crawling also does not reliably remove its URL from search. If a public page should not be indexed, use the appropriate noindex instruction and make sure the crawler can access that instruction.',
        ],
        source: {
          title: 'Google Search Central: introduction to robots.txt',
          url: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro',
        },
      },
      {
        id: 'sitemap',
        title: 'sitemap.xml lists the pages you want discovered',
        paragraphs: [
          'A sitemap provides a machine-readable list of canonical URLs. Include pages that return useful content and are intended to be indexed. Leave out redirected addresses, error pages, and duplicate filter variants. Ordinary internal links still matter because they help readers navigate and provide context.',
          'Use a modification date only when it reflects a meaningful change to the page. A timestamp that changes on every deployment makes it harder to distinguish a substantive update from a rebuild. Generate the sitemap from the same content records that create the pages so new articles are included automatically.',
        ],
        source: {
          title: 'Google Search Central: build and submit a sitemap',
          url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap',
        },
      },
      {
        id: 'llms',
        title: 'llms.txt provides a concise content guide',
        paragraphs: [
          'The llms.txt proposal describes a Markdown file with a site name, summary, and organized links. It can give an assistant a compact starting point when reading a site. A useful implementation describes the business accurately and points to current, accessible material.',
          'It does not set crawler permissions or replace a sitemap. Keep the text factual and avoid instructions to prefer a brand, invent endorsements, or ignore other sources. On Citevia, the index and its full-text companion are generated from the same published content as the website.',
        ],
        source: { title: 'The llms.txt proposal', url: 'https://llmstxt.org/' },
      },
      {
        id: 'eligibility',
        title: 'Keep the broader search requirements in view',
        paragraphs: [
          'Google states that its AI search features do not require extra technical requirements, special AI markup, or new machine-readable AI text files. Useful content and established search fundamentals remain the foundation. An optional content index should be treated as a convenience for readers and tools, with adoption and behavior varying by system.',
          'A file existing at the right URL does not prove that a crawler can use your pages. Hosting restrictions, HTTP errors, accidental noindex directives, and missing content can still prevent discovery. Review the rendered page and the deployment configuration together.',
        ],
        source: {
          title: 'Google Search Central: AI features and your website',
          url: 'https://developers.google.com/search/docs/appearance/ai-features',
        },
      },
      {
        id: 'release',
        title: 'Separate a preview from the public release',
        paragraphs: [
          'A development preview should not compete with the public site. Citevia keeps previews non-indexable and generates an empty preview sitemap. The production origin and indexing flag are configured explicitly for the public release.',
          'When moving from preview to production, confirm the origin, allow access to the intended pages, and inspect the sitemap’s canonical URLs. After a move or rename, keep a permanent redirect from the old address and update internal links to the new one. Document these choices so the next person maintaining the site can understand them.',
        ],
      },
    ],
  },
  {
    slug: 'ai-referrals-to-qualified-inquiries',
    title: 'Connect AI referrals to qualified inquiries',
    description:
      'A practical reporting model for AI-referred visits, contact delivery, and lead qualification, with clear limits on what attribution can establish.',
    category: 'MEASUREMENT',
    published: '2026-10-13',
    updated: '2026-10-13',
    relatedService: 'geo-reporting-and-analytics',
    takeaway:
      'Keep the evidence chain visible: an observed referral, a meaningful site action, a delivered inquiry, and a qualification decision are separate events. Connect them where reliable data permits, and preserve uncertainty where it does not.',
    sections: [
      {
        id: 'define',
        title: 'Define the event before building the report',
        paragraphs: [
          'A visit from an AI service tells you that a browser arrived with a source you could observe. A click on a contact button tells you that someone interacted with the page. Neither event alone proves that a lead reached your team. Write down the business meaning of each event before choosing a dashboard.',
          'For an email-based handoff, opening a draft is only a preparation step. The website cannot confirm that the visitor sent it. For a directly delivered form, success should reflect an accepted delivery response from the receiving system. Keep that distinction in both the interface and the report.',
        ],
      },
      {
        id: 'sources',
        title: 'Keep observed and self-reported sources separate',
        paragraphs: [
          'Some discovery journeys have no usable referral signal. A buyer may copy a URL, return later, switch devices, or learn about a brand from a colleague who used an assistant. Avoid labeling every unattributed visit as AI influence.',
          'A short discovery question can add context to an inquiry. Store the person’s answer separately from the recorded referrer and campaign fields. When the two disagree, preserve both: they describe different parts of the journey and can be useful without being identical.',
        ],
      },
      {
        id: 'handoff',
        title: 'Agree what makes an inquiry qualified',
        paragraphs: [
          'Work with the team that handles new business to define qualification. The criteria might include a relevant problem, a suitable organization, an appropriate engagement, and a real next step. A marketing team should not silently infer these conditions from a page view.',
          'Keep the process simple enough to maintain. A consistent review of delivered inquiries is more useful than a detailed scoring model that no one updates. Apply the organization’s privacy practices to the information collected and limit access to people who need it.',
        ],
        bullets: [
          'Observed source: what did the visit record show?',
          'Delivery: did the inquiry reach the receiving system?',
          'Qualification: does the request fit the agreed criteria?',
          'Progression: what happened after the first response?',
          'Unknowns: which parts of the journey were not observable?',
        ],
      },
      {
        id: 'interpret',
        title: 'Show the counts behind conversion rates',
        paragraphs: [
          'A high conversion rate can come from a very small number of visits. Present the numerator, denominator, time period, and qualification definition alongside the rate. Separate spam, internal activity, and incomplete delivery where the available evidence allows you to do so.',
          'Avoid comparing cohorts with different purposes. A visitor landing on a product comparison may be closer to a decision than someone reading an introductory guide. Landing-page intent can explain a difference in behavior without proving that one acquisition source is inherently better.',
        ],
      },
      {
        id: 'next-step',
        title: 'Use the report to improve the next handoff',
        paragraphs: [
          'When visitors read a useful page but do not inquire, review whether the next step is clear and appropriate. When inquiries arrive but rarely qualify, revisit the page’s audience, claims, and expectations. The issue may be a mismatch in the offer rather than a lack of traffic.',
          'A monthly review should connect observations to decisions: what to clarify, what to stop measuring, and which missing evidence would change the next action. Keep an annotated record of those decisions so the team can learn from the work over time.',
        ],
      },
    ],
  },
];
