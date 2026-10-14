export const EDITORIAL_ORGANIZATION = 'Citevia Editorial';
export const EXPERT_REVIEW_STATUS = 'pending';

export const insightArticles = [
  {
    slug: 'recommendation-gap-known-vs-selected',
    title: 'The AI recommendation gap: why known brands get missed',
    seoTitle: 'AI Recommendation Gap: Why Brands Get Missed',
    focusKeyphrase: 'AI recommendation gap',
    deck: 'Understand the AI recommendation gap. Learn how to audit buyer questions, improve evidence, and measure whether your brand earns relevant mentions.',
    purpose:
      'Help brand and marketing teams connect public evidence to the buyer decisions they want to support.',
    datePublished: '2026-10-14',
    dateModified: '2026-10-14',
    lastReviewed: '2026-10-14',
    author: EDITORIAL_ORGANIZATION,
    reviewStatus: EXPERT_REVIEW_STATUS,
    executiveSummary: [
      'The AI recommendation gap is the distance between being recognised and being recommended for a specific buyer need. To diagnose it, compare how assistants describe your brand with how they answer buying questions. Then improve the evidence behind your services, comparisons, and claims. Track repeated observations before deciding whether the work changed your visibility.',
    ],
    definitions: [
      {
        term: 'Recommendation gap',
        quote:
          'A mismatch between a brand’s general recognition and its inclusion in answers about a defined purchase or decision.',
      },
      {
        term: 'Selection evidence',
        quote:
          'Information that helps someone assess fit, such as service scope, supported use cases, qualifications, constraints, and attributable proof.',
      },
    ],
    sections: [
      {
        heading: 'Start with the buyer decision',
        paragraphs: [
          'A brand can appear in a broad category list yet disappear from a more specific comparison. That difference is worth investigating. A request for a payment provider serving unattended retail has different requirements from a request for a general checkout tool. Geography, integrations, support, and deployment needs all change the evaluation.',
          'Write down the audience, task, constraints, and decision stage before reviewing any answers. Use a short group of representative questions. Include both category discovery and specific comparisons. Our guide to [high-intent prompt intelligence](/blog/high-intent-prompt-intelligence) explains how to choose questions from real customer conversations.',
          'Keep brand-naming questions in a separate group. Asking an assistant about your company can reveal inaccurate facts. It cannot establish that buyers would encounter the company when they ask an unbranded question.',
        ],
        example: {
          title: 'Illustrative example: a payment provider',
          text: 'Compare “What does this provider offer?” with “Which payment providers support unattended retail across several European markets?” The first tests brand understanding. The second tests a defined buying situation. Record the answers separately.',
        },
      },
      {
        heading: 'Audit the AI recommendation gap in four passes',
        paragraphs: [
          'First, record presence. Note whether the brand appears, where it appears, and whether it is recommended or merely mentioned. Save the complete response and its citations. Repeat the same questions under documented conditions, including the assistant, date, language, location, and search settings.',
          'Second, review fit. Does the answer explain a capability that the business actually offers? Third, review accuracy. Check locations, product names, service boundaries, and availability. Fourth, inspect evidence. Open each cited page and check whether it supports the claim beside it.',
          'Treat conflicting responses as useful findings. The [NIST AI Risk Management Framework](https://doi.org/10.6028/NIST.AI.100-1) offers a broader framework for evaluating AI trustworthiness and risk. For this audit, keep a record of observed errors and uncertainty instead of treating one answer as a definitive assessment. Use our [AI visibility audit playbook](/blog/ai-visibility-audit-playbook) to organise the work.',
        ],
        example: {
          title: 'A useful audit row',
          text: 'Record the question, observed answer, cited source, factual problem, proposed correction, and owner. “Outdated integration list on the product page” gives the team a specific action. “AI does not like us” does not identify anything they can fix.',
        },
      },
      {
        heading: 'Match each missing answer to supporting evidence',
        paragraphs: [
          'For each valuable question, identify the page that should help a buyer answer it. Read that page without your internal product knowledge. Can a new visitor understand who the service serves, what it includes, and where its limits lie? If the answer is unclear, improve those details before adding more promotional language.',
          'Connect important claims to approved proof. A feature needs current documentation. A qualification needs a verifiable credential. A performance claim needs a defined period and method. Where evidence is unavailable, narrow the claim or remove it.',
          'Google’s [guidance on AI features in Search](https://developers.google.com/search/docs/appearance/ai-features) says established SEO practices remain relevant. It also says that no special AI markup is required. Apply those principles to crawlable, useful pages, while remembering that Google’s guidance does not describe every assistant. Our [citable page guide](/blog/anatomy-of-a-citable-page) provides a practical content structure.',
        ],
        example: {
          title: 'Illustrative example: service coverage',
          text: 'A provider describes itself as “global” but publishes no coverage details. A maintained country list, local support information, and explicit exclusions would help buyers evaluate fit more directly than another broad claim about scale.',
        },
      },
      {
        heading: 'Publish fair comparisons and clear limitations',
        paragraphs: [
          'Some gaps need a comparison page. Others need an implementation guide, a pricing explanation, or a better service description. Choose the format that answers the question with the least friction. Avoid creating several near-identical pages for minor variations of the same query.',
          'Show the criteria behind a comparison and the date on which facts were reviewed. Explain suitable use cases and meaningful trade-offs. Link to the original documentation for competitors as well as your own product. See our guide to [comparison pages that help buyers choose](/blog/comparison-pages-for-buyers).',
          'For confidential work, describe an approved process or capability rather than inventing an anonymous success story. Clear boundaries help a reader decide whether a conversation is worthwhile. They also reduce the chance that a vague statement becomes an exaggerated claim elsewhere.',
        ],
        example: {
          title: 'A bounded claim',
          text: '“Supports the listed terminal models through this integration” tells a buyer what to check. “Works with every payment system” creates an evidence burden that a single successful installation cannot satisfy.',
        },
      },
      {
        heading: 'Measure progress and choose the next action',
        paragraphs: [
          'After publishing a change, rerun the documented question set. Compare presence, factual accuracy, citations, and relevant referrals separately. Keep the previous responses so a model or source change does not erase the history. Use [AI search visibility metrics](/blog/measuring-ai-search-visibility) to define each measure.',
          'Agree on a review interval that fits the project and its publishing pace. Log technical changes, new content, and major product updates alongside observations. A later mention may follow your work, but that sequence alone does not prove causation.',
          'Begin with one decision that matters to your business, one evidence gap, and one responsible owner. That creates a manageable improvement cycle. Citevia’s [AEO service](/services/aeo) can help organise the questions, page changes, and ongoing review around that decision.',
        ],
        example: {
          title: 'A practical first milestone',
          text: 'Complete a small baseline, correct one recurring factual error, and publish one missing buyer resource. Review the same questions again. The milestone is a clearer, documented evidence base; recommendations remain outside the brand’s control.',
        },
      },
    ],
    limitations: [
      'Assistant responses vary with model, retrieval method, location, account context, and wording. A small prompt sample cannot describe an entire market.',
      'This article presents an editorial framework. Its examples are illustrative, and it makes no claim about client outcomes or guaranteed recommendations.',
    ],
    sources: [
      {
        title: 'AI features and your website',
        organization: 'Google Search Central',
        url: 'https://developers.google.com/search/docs/appearance/ai-features',
      },
      {
        title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0)',
        organization: 'National Institute of Standards and Technology',
        url: 'https://doi.org/10.6028/NIST.AI.100-1',
      },
      {
        title: 'OECD AI Principles',
        organization: 'Organisation for Economic Co-operation and Development',
        url: 'https://oecd.ai/en/ai-principles',
      },
      {
        title: 'Guidelines for Human-AI Interaction',
        organization: 'Microsoft Research / CHI 2019',
        url: 'https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/',
      },
    ],
    related: [
      {
        label: 'Answer engine optimisation (AEO)',
        href: '/services/aeo',
      },
      {
        label: 'Brand reputation management',
        href: '/services/brand-reputation-management',
      },
      {
        label: 'Citevia methodology',
        href: '/methodology',
      },
      {
        label: 'Private aviation decision context',
        href: '/industries/private-aviation',
      },
      {
        label: 'High-intent prompt intelligence',
        href: '/blog/high-intent-prompt-intelligence',
      },
    ],
  },
  {
    slug: 'high-intent-prompt-intelligence',
    title: 'High-intent prompt intelligence: find questions that matter',
    seoTitle: 'High-Intent Prompt Intelligence: A Practical Guide',
    focusKeyphrase: 'high-intent prompt intelligence',
    deck: 'Use high-intent prompt intelligence to find buyer questions, prioritise content gaps, and build a repeatable AI visibility research process.',
    purpose:
      'Give marketing teams a practical method for selecting buyer questions without confusing search interest with assistant usage.',
    datePublished: '2026-10-14',
    dateModified: '2026-10-14',
    lastReviewed: '2026-10-14',
    author: EDITORIAL_ORGANIZATION,
    reviewStatus: EXPERT_REVIEW_STATUS,
    executiveSummary: [
      'High-intent prompt intelligence is the practice of finding and evaluating questions that help buyers make a decision. Start with enquiries, sales conversations, and product questions. Group them by need, assess their relevance, and observe how assistants answer. Use the findings to improve useful content. Treat any prompt-volume estimate according to its stated data source and method.',
    ],
    definitions: [
      {
        term: 'High-intent prompt',
        quote:
          'A question with a clear task, constraint, comparison, or next step that suggests someone is evaluating a decision.',
      },
      {
        term: 'Prompt intelligence',
        quote:
          'A documented process for selecting questions, reviewing assistant responses, and turning the findings into content or product actions.',
      },
    ],
    sections: [
      {
        heading: 'Understand what your data actually measures',
        paragraphs: [
          'Keyword tools and customer conversations answer different questions. Search data can show the language people use around a topic. Sales notes can expose a requirement that matters during a purchase. A prompt observation shows what one assistant returned under recorded conditions. Keep those evidence types distinct in your reporting.',
          '[Google explains how Trends data works](https://support.google.com/trends/answer/4365533): it uses sampled Google searches and normalises interest to a relative scale. The numbers are not counts of conversations in ChatGPT, Claude, or another assistant. A low Trends value also does not establish that a specific buyer question has no value.',
          'When a tool provides estimated prompt demand, ask how it collected the data, which products it covers, and what period it represents. Label the estimate accordingly. Our guide to [GEO, AEO, and SEO](/blog/geo-aeo-and-seo) explains how these activities connect.',
        ],
        example: {
          title: 'Illustrative example: a hotel booking',
          text: '“Hotels in Paris” gives a broad topic. “Which Paris hotel has connecting suites for three generations and accessible arrival?” reveals several decision criteria. The second question can guide a useful page even when no reliable conversation count is available.',
        },
      },
      {
        heading: 'Build high-intent prompt intelligence from customer needs',
        paragraphs: [
          'Start with questions your team already receives. Review approved enquiry themes, site search terms, support questions, and interview notes. Remove personal and confidential details before using the material for external research. Keep a short source note so the team knows whether a question came from a customer, colleague, or editorial hypothesis.',
          'Write each candidate in natural language. Include the user’s task and only the constraints needed to understand it. Avoid adding your brand name unless the goal is to assess brand knowledge. Otherwise, you may steer the answer toward the outcome you hoped to observe.',
          'Group similar questions into themes such as suitability, integration, comparison, cost, implementation, and risk. Preserve important differences within a theme. A new customer choosing a platform and an existing customer planning a migration may need different evidence.',
        ],
        example: {
          title: 'A useful research record',
          text: 'For a migration question, record the buyer role, existing system, required integrations, expected decision, and source of the question. Mark assumptions explicitly. This lets a product specialist correct the brief before anyone builds content around it.',
        },
      },
      {
        heading: 'Prioritise questions with a transparent scoring method',
        paragraphs: [
          'Use a small scorecard to make discussions concrete. Rate audience fit, proximity to a decision, business relevance, and available evidence on a simple scale. Write a sentence explaining each rating. These are internal planning judgements, so avoid presenting the final score as measured market demand.',
          'Ask whether you can genuinely help the person asking. A commercially attractive question may concern a market or feature you do not serve. In that case, a clear limitation or referral can be more helpful than producing a page that implies capabilities you lack.',
          'Then check the content gap. Is the answer missing, hard to find, outdated, or poorly supported? Prioritise a question when there is both a relevant audience and a realistic improvement. Our [AI visibility audit playbook](/blog/ai-visibility-audit-playbook) connects that assessment to an action backlog.',
        ],
        example: {
          title: 'Illustrative example: choosing an integration',
          text: 'Two questions receive similar priority ratings. One requires a product capability that does not exist. The other needs an updated integration guide. Start with the guide and send the unsupported requirement to product planning.',
        },
      },
      {
        heading: 'Run a repeatable observation cycle',
        paragraphs: [
          'For each question, save the exact wording, assistant, date, language, location, and available model or search settings. Start a fresh conversation when you want a comparable first response. If you are studying follow-up behaviour, document the whole conversation instead.',
          'Repeat a manageable set and keep all responses, including unhelpful ones. Record the brands mentioned, supporting URLs, factual errors, and unresolved questions. This will expose variation more clearly than a gallery of selected screenshots.',
          'The [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/) offers voluntary guidance for mapping, measuring, and managing AI risks. The practical lesson for this workflow is to define the evaluation context and its limits. Our [AI search measurement guide](/blog/measuring-ai-search-visibility) explains how to report observations without turning them into a universal ranking.',
        ],
        example: {
          title: 'A fair comparison',
          text: 'Keep the question set stable during a review period. When new questions become important, place them in a new group. Otherwise, an apparent visibility increase might simply reflect a different set of questions.',
        },
      },
      {
        heading: 'Turn findings into useful pages and decisions',
        paragraphs: [
          'Assign each finding to the resource that can resolve it. A repeated suitability question may need a comparison page. A mistaken product description may need clearer documentation. A recurring concern about implementation may need a step-by-step guide and a realistic support boundary.',
          'Build the page around the buyer’s next decision. Answer the question early, explain important trade-offs, and link to supporting facts. Our [comparison page guide](/blog/comparison-pages-for-buyers) shows how to make evaluations useful without disguising a sales pitch as neutral research.',
          'After publication, return to the same questions and inspect the evidence again. Also review qualified enquiries and customer feedback. A clearer page can help people even before a change appears in assistant responses. If your team needs a starting point, explore Citevia’s [content creation service](/services/content-creation).',
        ],
        example: {
          title: 'A realistic first deliverable',
          text: 'Produce a short list of priority questions, their evidence sources, the existing page for each, and the next edit. Give every edit an owner and review date. Expand the question set once the team can maintain that cycle.',
        },
      },
    ],
    limitations: [
      'This is an editorial prioritisation method. Its suggested scorecard is a planning aid, not a validated demand model or revenue forecast.',
      'Illustrative examples do not describe client work. Assistant responses and third-party data coverage can change, so report the observation period and sampling limits.',
    ],
    sources: [
      {
        title: 'FAQ about Google Trends data',
        organization: 'Google',
        url: 'https://support.google.com/trends/answer/4365533',
      },
      {
        title: 'AI RMF Playbook',
        organization: 'National Institute of Standards and Technology',
        url: 'https://airc.nist.gov/airmf-resources/playbook/',
      },
      {
        title: 'Guidelines for Human-AI Interaction',
        organization: 'Microsoft Research / CHI 2019',
        url: 'https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/',
      },
      {
        title: 'Search Quality Rater Guidelines: An Overview',
        organization: 'Google',
        url: 'https://services.google.com/fh/files/misc/hsw-sqrg.pdf',
      },
    ],
    related: [
      {
        label: 'The AI recommendation gap',
        href: '/blog/recommendation-gap-known-vs-selected',
      },
      {
        label: 'Answer engine optimisation (AEO)',
        href: '/services/aeo',
      },
      {
        label: 'Content creation for buyer questions',
        href: '/services/content-creation',
      },
      {
        label: 'Yachting decision context',
        href: '/industries/yachting',
      },
      {
        label: 'Luxury hospitality decision context',
        href: '/industries/luxury-hospitality',
      },
    ],
  },
  {
    slug: 'authority-without-overexposure',
    title: 'Brand authority without overexposure: a practical guide',
    seoTitle: 'Brand Authority Without Overexposure: A Guide',
    focusKeyphrase: 'brand authority',
    deck: 'Build brand authority with clear claims, credible sources, and a sensible review process. Show your expertise while protecting confidential details.',
    purpose:
      'Help teams publish credible evidence of expertise while keeping sensitive information under appropriate review.',
    datePublished: '2026-10-14',
    dateModified: '2026-10-14',
    lastReviewed: '2026-10-14',
    author: EDITORIAL_ORGANIZATION,
    reviewStatus: EXPERT_REVIEW_STATUS,
    executiveSummary: [
      'Brand authority grows when people can understand what you do and check the evidence behind your claims. Start with accurate service information, attributable expertise, and relevant sources. Then decide which evidence is suitable for publication. A clear process can demonstrate capability while protecting client identities, commercial information, and details that belong in private conversations.',
    ],
    definitions: [
      {
        term: 'Brand authority',
        quote:
          'The credibility a brand earns through relevant expertise, accurate information, and evidence that people can evaluate.',
      },
      {
        term: 'Minimum necessary disclosure',
        quote:
          'An editorial practice of sharing the least sensitive information needed to support a useful, approved claim. It does not replace legal or contractual obligations.',
      },
    ],
    sections: [
      {
        heading: 'Build brand authority around a specific claim',
        paragraphs: [
          'Begin with the question a buyer needs to resolve. Then write the smallest claim that answers it accurately. A statement about the markets you serve needs different evidence from a statement about delivery speed. Separating those claims makes the review simpler.',
          'Create a claim record with the proposed wording, original source, responsible owner, and review date. Add the audience and intended channel. A statement approved for a private proposal may be unsuitable for a public landing page or a widely distributed press release.',
          'Google’s [guidance on helpful, reliable content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) encourages clear sourcing and accurate authorship. Use those principles to help readers evaluate your material. Our [guide to a citable page](/blog/anatomy-of-a-citable-page) explains how to connect a useful answer to its evidence.',
        ],
        example: {
          title: 'Illustrative example: a specialist adviser',
          text: 'Instead of claiming broad expertise in every market, an adviser can name the markets served, explain the available service, and link to relevant qualifications. The visitor gains a clearer basis for deciding whether the firm fits their situation.',
        },
      },
      {
        heading: 'Classify evidence before drafting the story',
        paragraphs: [
          'Sort potential evidence into four groups: approved public material, material that needs review, restricted information, and material with unclear ownership. Keep the last group out of publication until the right person resolves it. A shared label is more reliable than a writer guessing what can be disclosed.',
          'Consider the combination of details as well as each detail alone. Removing a client name may still leave a location, date, and project description that identify the client. Ask the owner to assess that combination before treating a story as anonymous.',
          'The [ICO’s data minimisation guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/) explains that personal data should be relevant and limited to the purpose. Apply an appropriate review when content contains personal information. The ICO page notes that its guidance is under review; qualified owners should assess the obligations relevant to your situation.',
        ],
        example: {
          title: 'Illustrative example: a private project',
          text: 'A photograph with no visible client name can still reveal a distinctive property or asset. Before using it, check the approval scope, image details, and caption together. A generic process diagram may answer the buyer’s question with less disclosure.',
        },
      },
      {
        heading: 'Show expertise through useful public evidence',
        paragraphs: [
          'Public authority can come from clear product documentation, maintained service descriptions, named disciplines, and relevant qualifications. Explain how your team handles a task and where its responsibilities begin and end. Give readers the information needed to ask a better next question.',
          'Use independent sources for the claims they actually support. A professional register can help establish a credential. A technical standard can explain a method. Neither automatically proves that every project succeeds. Keep the relationship between the source and the claim explicit.',
          'A carefully bounded guide can be useful even when you cannot publish client outcomes. Describe inputs, decision criteria, review stages, and limitations. Citevia’s [content creation service](/services/content-creation) applies this approach to buyer resources and explanations that can be maintained over time.',
        ],
        example: {
          title: 'Illustrative example: an implementation team',
          text: 'The team cannot disclose a customer’s systems. It can still explain the information required before an integration, the stages of a typical rollout, and the checks used before handover. Label any fictional walkthrough so readers understand its status.',
        },
      },
      {
        heading: 'Keep approval and maintenance practical',
        paragraphs: [
          'Assign one accountable content owner and identify who must review particular claims. Product specialists should check capabilities. The appropriate privacy, legal, or security owner should assess sensitive details. Agree on these responsibilities before drafting so review does not depend on last-minute guesses.',
          'Keep approved wording and source material together. Record permitted channels and the next review date. When a credential, product feature, or relationship changes, that record makes it easier to find the affected pages and update them.',
          'The [FTC’s guide to protecting personal information](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business) recommends understanding what information a business holds and limiting unnecessary retention and access. For editorial work, include source documents, drafts, shared folders, and agency handoffs in the relevant information-management process. Avoid copying sensitive records into every writing tool.',
        ],
        example: {
          title: 'A useful approval note',
          text: 'Record “approved for the service page, without client identifiers, review after the product release” beside the source. This gives the next editor enough context to avoid reusing the claim in a broader setting without a fresh check.',
        },
      },
      {
        heading: 'Review how your public evidence is understood',
        paragraphs: [
          'After publication, inspect how people and assistants interpret the claim. Check whether summaries preserve the service limits and whether citations point to the intended evidence. If a statement is repeatedly misunderstood, examine the wording and page structure before adding more content.',
          'Use the same documented questions across review periods. The [AI visibility audit playbook](/blog/ai-visibility-audit-playbook) helps track factual errors, citations, and useful next actions. Our article on [the AI recommendation gap](/blog/recommendation-gap-known-vs-selected) explains how recognition and suitable recommendations can diverge.',
          'Start with a small public evidence library: accurate service facts, approved expertise information, source links, and review ownership. Then expand it where buyer questions reveal a genuine need. Citevia’s [methodology](/methodology) connects that evidence review to a maintainable content plan.',
        ],
        example: {
          title: 'A practical first review',
          text: 'Choose one important service page. Trace each material claim to an owner and a source, remove unsupported wording, and confirm the publication permissions. The result should help a buyer understand the service without relying on private client details.',
        },
      },
    ],
    limitations: [
      'This article provides general editorial information. Qualified owners must assess legal, privacy, security, and contractual obligations for the relevant circumstances.',
      'Examples are illustrative and make no client-performance claims. Public evidence can improve clarity, but it does not guarantee citations, recommendations, or reputation outcomes.',
    ],
    sources: [
      {
        title: 'Creating helpful, reliable, people-first content',
        organization: 'Google Search Central',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
      },
      {
        title: 'NIST Privacy Framework 1.0',
        organization: 'National Institute of Standards and Technology',
        url: 'https://doi.org/10.6028/NIST.CSWP.01162020',
      },
      {
        title: 'Principle (c): Data minimisation',
        organization: 'UK Information Commissioner’s Office',
        url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/',
      },
      {
        title: 'Cybersecurity Framework 2.0',
        organization: 'National Institute of Standards and Technology',
        url: 'https://doi.org/10.6028/NIST.CSWP.29',
      },
      {
        title: 'Protecting Personal Information: A Guide for Business',
        organization: 'US Federal Trade Commission',
        url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business',
      },
    ],
    related: [
      {
        label: 'Strategic PR placement',
        href: '/services/strategic-pr-placement',
      },
      {
        label: 'Brand reputation management',
        href: '/services/brand-reputation-management',
      },
      {
        label: 'Citevia methodology',
        href: '/methodology',
      },
      {
        label: 'Jewellery and watches decision context',
        href: '/industries/jewellery-watches',
      },
      {
        label: 'The AI recommendation gap',
        href: '/blog/recommendation-gap-known-vs-selected',
      },
    ],
  },
];

const requiredArticleFields = [
  'slug',
  'title',
  'seoTitle',
  'focusKeyphrase',
  'deck',
  'purpose',
  'datePublished',
  'dateModified',
  'lastReviewed',
  'author',
  'reviewStatus',
  'executiveSummary',
  'definitions',
  'sections',
  'limitations',
  'sources',
  'related',
];

export function validateInsightArticle(article) {
  const missing = requiredArticleFields.filter((field) => {
    const value = article?.[field];
    return value == null || value === '' || (Array.isArray(value) && value.length === 0);
  });
  if (article?.author !== EDITORIAL_ORGANIZATION) missing.push('organization author');
  if (article?.sources?.some((source) => !source.title || !source.organization || !source.url))
    missing.push('complete sources');
  return { valid: missing.length === 0, missing };
}

export function getInsightArticle(slug) {
  return insightArticles.find((article) => article.slug === slug);
}
