import type { Article } from './articles';
import { aiCrawlerPolicy } from './ai-crawler-policy.js';
import { multilingualSeo } from './multilingual-seo.js';

export const newArticles: Article[] = [
  multilingualSeo,
  aiCrawlerPolicy,
  {
    slug: 'ai-visibility-audit-playbook',
    title: 'How to run an AI visibility audit your team can use',
    seoTitle: 'AI Visibility Audit: A Practical 7-Step Playbook',
    focusKeyphrase: 'AI visibility audit',
    description:
      'Run an AI visibility audit that connects buyer questions, answer evidence, and source gaps to a clear action plan with owners and review dates.',
    category: 'STRATEGY',
    published: '2026-10-13',
    updated: '2026-10-14',
    relatedService: 'ai-visibility-audit',
    takeaway:
      'An AI visibility audit shows how a defined set of assistant answers represents your business. Record the questions, responses, and sources. Then turn verified gaps into page updates with an owner, a completion rule, and a review date.',
    sections: [
      {
        id: 'scope',
        title: '1. Give your AI visibility audit a specific purpose',
        paragraphs: [
          'An AI visibility audit starts with a business decision. Perhaps buyers cannot find your product for a new use case. Perhaps assistants describe an outdated service. Write down the question your team needs to answer before collecting screenshots or calculating a score.',
          'Define the audience, country, language, and product scope. Then choose which assistant experiences to observe. A consumer chat interface and a search feature can produce different evidence. Record the exact experience you use so another person can repeat the work.',
          'Agree on a small initial scope that someone can maintain. One market and one product category are often enough for a first cycle. Our guide to [GEO, AEO, and SEO](/blog/geo-aeo-and-seo) explains how this work connects with your wider search program.',
        ],
      },
      {
        id: 'questions',
        title: '2. Build the question set from buyer conversations',
        paragraphs: [
          'Collect questions from sales calls, support tickets, on-site search, and interviews. Remove personal information before using any material. Keep the original wording where it helps preserve the buyer’s intent, then group questions by the decision they support.',
          'For a payment provider, useful questions might concern supported hardware, installation effort, or international settlement. “Which provider is best?” gives less context than “Which payment systems support our existing vending machines in Spain?” The second question helps you inspect a specific buying requirement.',
          'Keep branded accuracy questions separate from category discovery questions. Otherwise, a large number of easy branded mentions can obscure weak category coverage. Read our [guide to high-intent questions](/blog/high-intent-prompt-intelligence) for a practical way to prioritize this list.',
        ],
        bullets: [
          'Discovery: which options address the buyer’s problem?',
          'Evaluation: which capabilities, costs, and limitations matter?',
          'Selection: which provider suits the stated requirements?',
          'Accuracy: are product names, locations, and services correct?',
        ],
      },
      {
        id: 'capture',
        title: '3. Capture enough context to interpret each answer',
        paragraphs: [
          'Save the question, date, assistant, visible model label, locale, and relevant session conditions. Preserve the complete answer and its source URLs. A screenshot can support the record, but searchable text makes later review easier.',
          'Use separate fields for a brand mention, a recommendation, and a link to your website. Also record the answer’s qualifications. “Consider this provider if you need local support” means something different from an unconditional recommendation.',
          'Repeat selected questions under the same documented conditions. Keep each observation, including unexpected answers. Repetition can reveal variability, but your sample still describes only the runs you observed. It cannot establish how every buyer sees your brand.',
        ],
      },
      {
        id: 'sources',
        title: '4. Check the source pages and technical access',
        paragraphs: [
          'Open the sources cited in each answer. Check whether they actually support the description, and note publication or review dates. Compare those sources with your product documentation and service pages. Look for missing conditions, inconsistent names, and outdated facts.',
          'For Google’s AI search features, [Google’s eligibility guidance](https://developers.google.com/search/docs/appearance/ai-features) keeps established search requirements in place. A supporting page needs to be indexed and eligible for a search snippet. Special AI markup does not guarantee inclusion.',
          'When a page appears inaccessible, use [Search Console’s URL Inspection tool](https://support.google.com/webmasters/answer/9012289?hl=en) to investigate your own URLs. Compare indexed information with the live page. A successful live check confirms access conditions; it does not promise indexing.',
        ],
      },
      {
        id: 'prioritize',
        title: '5. Turn each finding into a small, owned task',
        paragraphs: [
          'A useful finding describes the observed problem and its business consequence. “Publish the supported-device list on the integration page” gives a team something concrete to do. Add the answer record that exposed the gap and the person who can verify the facts.',
          'Prioritize incorrect facts that could affect a buying decision. Next, address missing explanations on important pages. Finally, consider wider content opportunities. Avoid treating every absent mention as a content problem: some questions may fall outside your offer.',
          'Use our [citable-page checklist](/blog/anatomy-of-a-citable-page) when turning a finding into a publishing brief. It helps keep definitions, evidence, and limitations close together.',
        ],
        bullets: [
          'Evidence: the saved answer and source behind the finding.',
          'Action: the page or process that needs a change.',
          'Owner: the person responsible for approval and delivery.',
          'Completion: the facts, links, or access conditions to confirm.',
          'Review date: when the team will sample the question again.',
        ],
      },
      {
        id: 'example',
        title: '6. Work through a concrete audit finding',
        paragraphs: [
          'Imagine an assistant says a fictional provider supports only new machines. The product team confirms that an approved adapter also supports certain older models. The current website describes the adapter in a PDF but omits it from the integration page.',
          'The task is to publish the supported models, installation conditions, and documentation link on that page. A product owner approves the list. An editor explains the limits. A developer ensures the page is reachable from the main product navigation.',
          'At the next review, check the corrected page first. Then repeat the relevant questions and record any response changes. If an assistant still repeats the old statement, keep that result. Publishing the fix and observing its adoption are separate milestones.',
        ],
      },
      {
        id: 'review',
        title: '7. Finish with decisions and a repeatable review',
        paragraphs: [
          'Keep a stable core of questions between cycles. Add new questions as a separate group, and record any change in assistant settings. This makes it easier to distinguish a content change from a change in how you collected evidence.',
          'Summarize completed actions, unresolved issues, and the next decision. Use [clear visibility measures](/blog/measuring-ai-search-visibility) to explain progress without overstating causation. The audit earns its value when it helps the team correct facts and improve useful pages.',
          'Start with one category, assign an owner, and schedule the next review. If you need help defining that scope, a [private AI visibility assessment](/private-ai-visibility-assessment) can turn your initial questions into a focused plan.',
        ],
      },
    ],
  },
  {
    slug: 'comparison-pages-for-buyers',
    title: 'How to write B2B comparison pages that help buyers choose',
    seoTitle: 'B2B Comparison Pages: A Useful Writing Framework',
    focusKeyphrase: 'B2B comparison pages',
    description:
      'Build B2B comparison pages around buyer criteria, verified claims, clear tradeoffs, and useful next steps. Follow a practical publishing framework.',
    category: 'CONTENT',
    published: '2026-10-13',
    updated: '2026-10-14',
    relatedService: 'content-creation',
    takeaway:
      'Useful B2B comparison pages explain which option suits a defined situation. Start with buyer requirements, support material claims with current sources, and describe important limitations. Assign an owner to keep the comparison accurate after publication.',
    sections: [
      {
        id: 'decision',
        title: 'Start B2B comparison pages with a clear buying decision',
        paragraphs: [
          'B2B comparison pages help readers judge fit before they speak to sales. A useful page answers a specific decision: which approach meets this team’s requirements? Name the audience and situation in the introduction so readers can quickly decide whether the comparison applies.',
          'Choose the scope before choosing the products. For example, a regional operator evaluating payment systems may care about existing hardware and local support. An international operator may need multi-country settlement and centralized reporting. Those buyers need different explanations.',
          'Use sales and support questions to identify the recurring tradeoffs. Our [prompt-intelligence guide](/blog/high-intent-prompt-intelligence) offers a useful way to group these questions. Treat each requirement as an editorial decision, with a reason for including it.',
        ],
      },
      {
        id: 'criteria',
        title: 'Choose criteria that change the recommendation',
        paragraphs: [
          'Begin with a short set of meaningful criteria. Ask what would make a buyer reject an otherwise suitable option. Those constraints deserve more attention than minor interface differences or features that every provider offers.',
          'Explain why each criterion matters. “Data export” is a label. “Export historical transactions in a documented format before switching systems” describes a practical requirement. Give readers enough context to judge the impact on their own team.',
          'Avoid a universal numerical score unless you can explain the weighting and evidence. A simple fit summary is often clearer: best suited to a small team with standard workflows, or better suited to a team that needs custom integrations.',
        ],
        bullets: [
          'Capability: does the option support the required workflow?',
          'Implementation: what skills, time, and dependencies are involved?',
          'Commercial terms: what limits or additional charges apply?',
          'Operations: how do support, reporting, and ownership work?',
          'Exit: what happens to data and contracts when the buyer leaves?',
        ],
      },
      {
        id: 'evidence',
        title: 'Build a claim register before writing the verdict',
        paragraphs: [
          'For every important claim, record the source URL, review date, and relevant product version or plan. Use official documentation for capabilities and published terms for commercial conditions. If your team has tested a workflow, describe the method and its limits.',
          'Treat missing evidence carefully. If documentation does not mention a capability, mark it for confirmation. Do not turn that gap into a claim that a competitor cannot provide it. Give the reader a specific question to ask the vendor.',
          'Google’s [guidance for high-quality reviews](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews) supports evidence, meaningful decision factors, and explained benefits and drawbacks. Apply those principles to your comparison while making your relationship to the products clear.',
        ],
      },
      {
        id: 'structure',
        title: 'Use a structure readers can scan and verify',
        paragraphs: [
          'Open with the decision and a short fit summary. Follow with the criteria, implementation questions, and limitations. End with a practical next step. Descriptive headings help readers find the section that matches their concern.',
          'Keep conditions beside the claim they qualify. If an integration requires a particular plan, include that fact in the same row or paragraph. Readers should not need to find a distant footnote to understand a material restriction.',
          'Link key claims to their sources and link unfamiliar concepts to useful explanations. Our [guide to building a citable page](/blog/anatomy-of-a-citable-page) shows how to keep answers understandable when readers arrive midway through an article.',
        ],
        bullets: [
          'Who the comparison is for and which options it covers.',
          'A concise recommendation for each relevant buyer situation.',
          'Criteria with evidence, conditions, and practical consequences.',
          'Implementation, switching, and unresolved vendor questions.',
          'A review date, responsible publisher, and appropriate next step.',
        ],
      },
      {
        id: 'example',
        title: 'Show a tradeoff through a worked scenario',
        paragraphs: [
          'Consider two fictional systems. System A offers a standard onboarding process. System B allows more configuration but requires development work. A team with no technical owner may value A’s simpler setup. A team replacing several custom workflows may need B’s flexibility.',
          'The comparison should explain how to confirm that fit. Ask each vendor to demonstrate one real workflow using representative data. Record the steps, handoffs, and unresolved requirements. Then let the buyer weigh the effort against the capability gained.',
          'This scenario illustrates a decision method; it does not describe a client result. Use real product names only when you have verified the corresponding facts. Specific, supportable examples make the page more useful than a collection of promotional adjectives.',
        ],
      },
      {
        id: 'originality',
        title: 'Add judgment that goes beyond a feature list',
        paragraphs: [
          'Explain what the buyer should investigate next. A comparison can reveal that contract flexibility matters more than a small price difference. It can also show why a lower setup cost may require more internal work later.',
          'Separate your own observations from vendor claims and assumptions. Readers can then evaluate the strength of each conclusion. Google’s [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) encourages original value and a satisfying answer to the reader’s task.',
          'Link to a relevant service or detailed guide when it resolves the next question. A reader who needs help planning these pages can explore our [content creation service](/services/content-creation). Keep the comparison itself complete enough to support a decision.',
        ],
      },
      {
        id: 'maintenance',
        title: 'Publish with an owner and a review trigger',
        paragraphs: [
          'Assign someone who can approve product details and maintain the source register. Revisit the page after a significant release, pricing change, or corrected claim. Update the visible modification date when you make a substantive revision.',
          'Use sales questions to find gaps after publication. If readers repeatedly ask about migration, improve that explanation. If inquiries rarely fit the offer, review the opening audience statement. Our guide to [connecting visits with qualified inquiries](/blog/ai-referrals-to-qualified-inquiries) helps evaluate that handoff.',
          'Before publishing, ask one colleague unfamiliar with the products to summarize who each option suits. If they cannot explain the difference, sharpen the criteria and conclusion. A strong comparison leaves the reader with a clearer decision and a useful next action.',
        ],
      },
    ],
  },
  {
    slug: 'robots-sitemap-llms-explained',
    title: 'robots.txt, sitemap.xml, and llms.txt: what each file does',
    seoTitle: 'robots.txt, sitemap.xml, and llms.txt Explained',
    focusKeyphrase: 'robots.txt, sitemap.xml, and llms.txt',
    description:
      'Understand robots.txt, sitemap.xml, and llms.txt. Learn their different roles, common mistakes, and the checks to make before publishing your site.',
    category: 'TECHNICAL SEO',
    published: '2026-10-13',
    updated: '2026-10-14',
    relatedService: 'seo',
    takeaway:
      'robots.txt, sitemap.xml, and llms.txt serve different purposes. The first communicates crawl rules. The second lists preferred page URLs. The third offers an optional guide for agents. Keep all three consistent with your public content and indexing settings.',
    sections: [
      {
        id: 'roles',
        title: 'Give robots.txt, sitemap.xml, and llms.txt separate jobs',
        paragraphs: [
          'robots.txt, sitemap.xml, and llms.txt can help different systems navigate a website. Their filenames sound similar, but each answers a different question. Understanding those roles makes it easier to diagnose a missing page or plan a new site launch.',
          'Think of a public library. Crawl rules describe which areas a cooperating visitor may explore. A sitemap lists the main shelves. An optional agent guide highlights useful collections. The information on those shelves still needs to be accurate, accessible, and worth reading.',
          'For the wider context, start with our [explanation of SEO, GEO, and AEO](/blog/geo-aeo-and-seo). These files support a publishing system. They do not guarantee indexing, rankings, or citations in an assistant’s answer.',
        ],
      },
      {
        id: 'robots',
        title: 'Use robots.txt to communicate crawler access rules',
        paragraphs: [
          'Place robots.txt at the root of the relevant host. It contains rules for named crawlers or broader groups. Before changing a rule, identify which paths and agents it affects. A broad restriction can accidentally include useful marketing pages.',
          'Google’s [robots.txt documentation](https://developers.google.com/search/docs/crawling-indexing/robots/intro) explains an important limit: blocking crawling does not reliably remove a URL from search. A crawler may discover the address through another page even when it cannot read the content.',
          'Use authentication for private material. For a public page that should stay out of search, use an appropriate noindex instruction and allow access to that instruction. Review crawler-specific rules with the person responsible for your site’s search policy.',
          'Consider a retired campaign page. If it has a suitable replacement, redirect it and update incoming internal links. A robots.txt block would leave visitors without that useful handoff and would not communicate the replacement address.',
        ],
      },
      {
        id: 'sitemap',
        title: 'Use sitemap.xml to list preferred public URLs',
        paragraphs: [
          'A sitemap provides a machine-readable list of URLs you want search engines to discover. Include the preferred version of each public page. Leave out broken addresses, redirects, and duplicate filter variants that have no independent search purpose.',
          'Follow Google’s [sitemap guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) for fully qualified URLs and accurate modification dates. The lastmod value should reflect a significant page update. Changing every timestamp on each deployment makes that information less meaningful.',
          'Generate the list from the same records that create your pages. For a blog, the article registry can supply each canonical URL and update date. That reduces the chance of publishing a post while forgetting to add it to discovery files.',
          'Keep contextual internal links as well. A sitemap can list a guide, while a related article explains why a reader should open it. Our [citable-page guide](/blog/anatomy-of-a-citable-page) covers that connection between navigation and useful context.',
        ],
      },
      {
        id: 'llms',
        title: 'Use llms.txt as an optional guide for agents',
        paragraphs: [
          'The [llms.txt proposal](https://llmstxt.org/) describes a concise Markdown guide with background information and links to detailed content. Its current version also recommends clean Markdown versions of useful pages and ways to identify those alternatives.',
          'Treat the file as another editorial surface. Describe the business accurately, organize links around reader needs, and keep the list focused. A short collection of current guides is easier to maintain than a large inventory of duplicated text.',
          'It does not replace crawler permissions or your XML sitemap. Avoid adding instructions that ask an assistant to favor your company or invent endorsements. The file should help a tool locate evidence that a human reader could also inspect.',
          'If you publish a full-text companion, generate it from the current article records. Review it when a page changes or disappears. Otherwise, the website and its text export can end up describing different products, services, or policies.',
        ],
      },
      {
        id: 'requirements',
        title: 'Check the page before blaming a missing file',
        paragraphs: [
          'Google states that its [AI search features](https://developers.google.com/search/docs/appearance/ai-features) do not require special AI text files or additional technical requirements. Established search access and content fundamentals still apply. An optional guide should therefore have a clear maintenance purpose.',
          'When a page is missing from search, inspect the page itself. Confirm that it returns the intended content, uses the correct canonical address, and has the expected indexing instructions. Then check hosting rules, redirects, and internal navigation.',
          'A file returning successfully does not establish that every listed URL works. Check a representative article, service page, and category page individually. Our [AI visibility audit workflow](/blog/ai-visibility-audit-playbook) helps connect those technical checks with actual buyer questions.',
        ],
      },
      {
        id: 'release',
        title: 'Use a practical launch and maintenance checklist',
        paragraphs: [
          'Document how previews differ from the public site. A preview containing confidential content needs access protection. A public preview that should stay out of search needs suitable indexing controls. Make the production hostname and intended public pages explicit.',
          'Before launch, inspect the deployed files and a sample of their links. After launch, repeat the review when you move a section, add a new language, or change your domain. A successful local build cannot confirm the production host’s access rules.',
          'Give one person responsibility for these files and record the decisions behind them. If you need help coordinating crawl access, content, and redirects, our [SEO service](/services/seo) covers the underlying site work.',
        ],
        bullets: [
          'Confirm that canonical URLs use the public HTTPS hostname.',
          'Check crawler rules against the pages you intend to publish.',
          'Include current, indexable pages in the production sitemap.',
          'Use meaningful update dates from the content records.',
          'Keep agent-guide descriptions and links consistent with the site.',
          'Review old URLs and internal links after any route change.',
        ],
      },
    ],
  },
  {
    slug: 'ai-referrals-to-qualified-inquiries',
    title: 'AI referral tracking: connect visits to qualified inquiries',
    seoTitle: 'AI Referral Tracking: Visits to Qualified Leads',
    focusKeyphrase: 'AI referral tracking',
    description:
      'Set up AI referral tracking to connect observed visits, delivered inquiries, and qualified leads. Use clear events and understand attribution limits.',
    category: 'MEASUREMENT',
    published: '2026-10-13',
    updated: '2026-10-14',
    relatedService: 'geo-reporting-and-analytics',
    takeaway:
      'AI referral tracking connects an observed source with a site visit, a delivered inquiry, and a qualification decision. Define each stage separately. Keep the underlying counts and unknowns visible so your team can act without claiming more attribution than the data supports.',
    sections: [
      {
        id: 'define',
        title: 'Define what AI referral tracking should tell your team',
        paragraphs: [
          'AI referral tracking helps you understand what happens after someone arrives from an assistant. Start with the business question: do these visits lead to relevant conversations? Then define the events needed to answer it.',
          'A page view, a contact-button click, and a delivered inquiry describe different actions. Give each a clear name and meaning. The person reading the report should know exactly what happened when a count increased.',
          'Write this event dictionary before configuring a dashboard. Include the trigger, responsible system, deduplication rule, and owner. Our guide to [measuring AI search visibility](/blog/measuring-ai-search-visibility) explains how referral data fits alongside mentions and citations.',
        ],
      },
      {
        id: 'sources',
        title: 'Identify observed sources without losing their context',
        paragraphs: [
          'In GA4, begin with the [Traffic acquisition report](https://support.google.com/analytics/answer/12923437?hl=en). Its session source and medium dimensions describe the source associated with a session. Keep those fields available when reviewing any aggregated channel total.',
          'Google’s current [default channel definitions](https://support.google.com/analytics/answer/9756891?hl=en) include an AI Assistant channel. It uses recognized assistant referrers and the ai-assistant medium. Google’s AI Overviews and AI Mode remain within Organic Search rather than that assistant channel.',
          'Inspect your own property’s data and reporting period before building filters. A custom definition or an older export may classify sources differently. Record which rules your report uses, and investigate unfamiliar domains before adding them to an AI category.',
          'Some journeys have no usable referral signal. A person may copy a URL, switch devices, or return later. Keep these unknowns visible. A missing source does not establish that AI influenced the visit.',
        ],
      },
      {
        id: 'delivery',
        title: 'Measure a completed handoff at the right point',
        paragraphs: [
          'If your website opens an email draft, record that action as a draft or contact-link interaction. The browser cannot confirm that the person sent the email. Use the receiving mailbox or another confirmed record to establish that an inquiry arrived.',
          'For a directly delivered form, define success around the receiving system’s accepted response. Prevent repeat clicks or page reloads from creating duplicate leads. Keep an inquiry identifier in the operational system so delivery and qualification can be reconciled.',
          'Google documents separate [generate_lead and qualify_lead events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead). Map them to your real business stages. Do not trigger both automatically when someone opens a form.',
          'Send only the data your measurement setup needs. Keep names, email addresses, and message bodies out of routine analytics event parameters. Store inquiry details in the appropriate operational system with suitable access controls.',
        ],
      },
      {
        id: 'qualification',
        title: 'Agree how a delivered inquiry becomes qualified',
        paragraphs: [
          'Ask the team handling new business to define qualification. Useful criteria could include a relevant need, a suitable organization, and an agreed next step. Document the criteria so different reviewers make comparable decisions.',
          'Use a small set of statuses that someone will maintain. For instance: awaiting review, qualified, unsuitable, duplicate, and spam. Record the reason for an unsuitable inquiry. Those reasons can reveal whether a page attracts the wrong audience or sets unclear expectations.',
          'Add an optional discovery question to the inquiry process, such as “Where did you first hear about us?” Store that answer separately from the observed referrer. A buyer’s recollection and a session record describe different parts of the journey.',
        ],
      },
      {
        id: 'example',
        title: 'Calculate rates from visible counts and matching periods',
        paragraphs: [
          'Consider a hypothetical reporting cohort with 200 observed assistant sessions, 10 delivered inquiries, and four qualified inquiries. The session-to-inquiry rate is 5%. The inquiry-to-qualified rate is 40%. The session-to-qualified rate is 2%. These are illustrative numbers, not Citevia client results.',
          'Show the counts beside each percentage. Also state the period, qualification definition, and attribution rule. Four qualified inquiries cannot support the same confidence as hundreds, even when the displayed rate looks strong.',
          'Allow time for qualification. An inquiry received on the last day of the month may still await review. Compare mature cohorts or identify pending records explicitly. Keep the date of the visit and the date of qualification available.',
          'Avoid multiplying conversion rates from unrelated cohorts. A visit-based report and a CRM report may use different time windows or identity rules. Reconcile their definitions before combining them into a funnel.',
        ],
      },
      {
        id: 'interpret',
        title: 'Use landing-page intent to explain the outcome',
        paragraphs: [
          'Group visits by the kind of page people entered. Someone reading a beginner’s guide may need a related explanation. Someone viewing an implementation comparison may be ready to discuss requirements. Their next steps should reflect those different needs.',
          'When visits produce few inquiries, inspect the offer and contact path. When inquiries rarely qualify, inspect the audience statement and claims. Our [comparison-page framework](/blog/comparison-pages-for-buyers) can help a decision page set clearer expectations.',
          'Look at trends alongside sales feedback and known site changes. A change in observed source does not prove that the source caused a change in revenue. Keep channel reporting useful by describing the evidence and the remaining uncertainty.',
        ],
      },
      {
        id: 'review',
        title: 'Turn the report into a monthly action list',
        paragraphs: [
          'Review one question each month: what would improve the next relevant conversation? Choose a specific action, such as clarifying an integration requirement or shortening an unnecessary form. Assign an owner and record when the change goes live.',
          'Keep a short log of tracking changes as well as content changes. Otherwise, a corrected event can look like a sudden growth improvement. Use the same definitions until there is a clear reason to revise them.',
          'Start with reliable source fields, confirmed delivery, and a maintained qualification decision. Then add detail where it changes an action. Our [methodology](/methodology) connects this measurement work with content and technical improvements across the site.',
        ],
      },
    ],
  },
];
