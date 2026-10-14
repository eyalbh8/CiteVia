import type { CaseStudy } from './case-studies';

export const sectorCaseStudies: CaseStudy[] = [
  {
    slug: 'property-buyer-discovery',
    sector: 'LUXURY REAL ESTATE',
    title: 'A clearer path from a property question to a qualified inquiry.',
    description:
      'A worked 90-day example connecting buyer research, project content, AI visibility, and inquiry quality for a fictional property group.',
    question: 'How should we compare property developers before arranging a viewing?',
    profile: {
      company: 'Example property group',
      market: 'Mediterranean real estate',
      scope: 'Buyer research, project pages, technical SEO, and reporting',
      duration: '90-day example program',
    },
    metrics: [
      {
        label: 'Brand mention rate',
        before: '20%',
        after: '35%',
        context: '36 → 63 of 180 sampled answers per period',
      },
      {
        label: 'Owned citation rate',
        before: '10%',
        after: '20%',
        context: '18 → 36 of 180 sampled answers per period',
      },
      {
        label: 'AI referral visits',
        before: '150',
        after: '240',
        context: 'Synthetic 30-day baseline and follow-up periods',
      },
      {
        label: 'Qualified inquiries',
        before: '4',
        after: '7',
        context: 'From 8 baseline and 12 follow-up inquiries',
      },
    ],
    challenge:
      'The fictional group has a substantial project portfolio, but its pages mix company claims, location information, and individual developments. A relocating buyer struggles to establish which project fits their needs, what is current, and who can answer a specific question. In our constructed baseline, the brand appears in 36 of 180 sampled answers, while only 18 answers cite an owned page.',
    approach: [
      {
        title: 'Map the questions behind a viewing',
        body: 'Group 60 example questions around relocation needs, developer comparisons, project verification, and service scope. Keep branded questions separate from discovery and comparison questions. Sample each question once across three platforms to create 180 observations per period.',
      },
      {
        title: 'Give each project a reliable source page',
        body: 'Separate the company profile from individual projects and location guides. Define consistent fields for project status, location, available services, relevant documents, and a named review owner. Avoid financial return claims and direct regulated questions to qualified advisers.',
      },
      {
        title: 'Publish useful decision content',
        body: 'Create a developer evaluation guide, three project-page briefs, two location guides, and a viewing-preparation checklist. Link each material claim to an approved source and connect the guides to an inquiry route with clear next steps.',
      },
      {
        title: 'Connect the observation to the conversation',
        body: 'Repeat the core question sample under documented conditions. Keep answer mentions, owned citations, referral visits, and inquiry qualification in separate reporting sections. Record content release dates and other campaigns alongside the comparison.',
      },
    ],
    timeline: [
      {
        period: 'Days 1–30',
        title: 'Establish the baseline',
        body: 'Review the site and project facts, agree buyer cohorts, and record the initial answer and referral sample.',
      },
      {
        period: 'Days 31–60',
        title: 'Build and release',
        body: 'Publish the approved guides and project improvements, connect internal links, and clarify the viewing inquiry.',
      },
      {
        period: 'Days 61–90',
        title: 'Review and decide',
        body: 'Repeat the answer sample, compare equal 30-day referral windows, and review the quality of each inquiry.',
      },
    ],
    deliverables: [
      '60-question register and 180-answer baseline',
      'Company, project, and location content architecture',
      'Three project-page briefs and two location guides',
      'Developer comparison and viewing checklist',
      'Monthly report with a source register and release log',
    ],
    measurement: [
      'Mention rate is answers naming the brand divided by 180 sampled answers in each period.',
      'Owned citation rate is answers linking to an owned page divided by the same 180 answers.',
      'Referral visits use equal 30-day periods; privacy and missing referrer data can leave journeys unobserved.',
      'A qualified inquiry matches the agreed location, project scope, and genuine buying timeline; the sales team makes that determination.',
    ],
    interpretation:
      'In this invented dataset, mention rate rises by 15 percentage points and owned citation rate by 10 percentage points. Visits rise from 150 to 240, while qualified inquiries rise from 4 to 7. These figures illustrate how a report could connect observations without treating a mention as a lead. No actual experiment, client engagement, or causal result is represented.',
    decision:
      'If visibility improves but inquiries remain poorly matched, review project clarity and the inquiry journey before expanding the question set. Preserve the original cohort so a wider program does not erase its baseline.',
    relatedService: 'seo',
    solution: 'professional-services',
    industry: 'luxury-real-estate',
    updated: '2026-10-13',
  },
  {
    slug: 'aviation-mission-fit',
    sector: 'PRIVATE AVIATION',
    title: 'Helping a specialist aviation adviser show where it fits.',
    description:
      'An illustrative engagement that turns broad aviation positioning into mission-specific content, clear provider roles, and a useful inquiry route.',
    question: 'Which adviser can help us evaluate an aircraft for our operating needs?',
    profile: {
      company: 'Example aviation advisory',
      market: 'International acquisition and management advisory',
      scope: 'Service positioning, expert content, AEO, and conversion',
      duration: '90-day example program',
    },
    metrics: [
      {
        label: 'Accurate service descriptions',
        before: '24 / 40',
        after: '35 / 40',
        context: 'Synthetic branded-answer review, same 40 questions',
      },
      {
        label: 'Relevant brand mentions',
        before: '18 / 120',
        after: '33 / 120',
        context: 'Separate sample of 40 discovery questions across 3 platforms',
      },
      {
        label: 'AI referral visits',
        before: '80',
        after: '124',
        context: 'Equal illustrative 30-day comparison periods',
      },
      {
        label: 'Qualified inquiries',
        before: '2',
        after: '5',
        context: 'From 5 baseline and 9 follow-up inquiries',
      },
    ],
    challenge:
      'The example firm describes itself with broad promises about private aviation. It does not clearly separate independent acquisition advice, aircraft management advice, and charter brokerage. Prospective buyers arrive with different missions, while the team spends initial conversations explaining what it actually does. A constructed answer review identifies the same role confusion.',
    approach: [
      {
        title: 'Define the role before the message',
        body: 'Create an approved description of each service, who performs it, and what lies outside the engagement. Verify qualifications and geographic scope with a designated expert. Do not imply that an adviser is an operator or that it holds an unverified certification.',
      },
      {
        title: 'Organize content around mission decisions',
        body: 'Develop separate pages for acquisition evaluation and management selection, supported by a mission-planning question guide. Explain the information a buyer should bring to an adviser: usage, destinations, operating constraints, and decision responsibilities.',
      },
      {
        title: 'Make expertise reviewable',
        body: 'Publish expert biographies, the advisory process, and an explanation of how evaluations are documented. Build a source register and review dates for operationally sensitive facts rather than relying on generic claims of experience.',
      },
      {
        title: 'Improve the first conversation',
        body: 'Connect the guides to a short inquiry that distinguishes the buyer’s role and purpose. Keep private itineraries, identity documents, and commercially sensitive details out of the public form.',
      },
    ],
    timeline: [
      {
        period: 'Days 1–30',
        title: 'Clarify and baseline',
        body: 'Approve service definitions and record separate branded accuracy and unbranded discovery samples.',
      },
      {
        period: 'Days 31–60',
        title: 'Publish the explanation',
        body: 'Release two service pages, a mission guide, and updated expert profiles with clear source ownership.',
      },
      {
        period: 'Days 61–90',
        title: 'Review mission fit',
        body: 'Repeat both samples and ask the advisory team which inquiries match the services offered.',
      },
    ],
    deliverables: [
      'Service role and scope matrix',
      'Two service-page briefs and mission-planning guide',
      'Expert profile and evidence register',
      'Branded accuracy and discovery question cohorts',
      'Inquiry qualification notes and monthly report',
    ],
    measurement: [
      'Keep the 40-question branded accuracy review separate from the 120-answer discovery sample.',
      'Score a description against approved service facts using a written rubric.',
      'Count discovery mentions separately from endorsements and recommendations.',
      'Have the business team qualify inquiries against mission, role, and service scope rather than inferring quality from a page visit.',
    ],
    interpretation:
      'The synthetic accuracy count improves from 24 to 35 of 40 answers, while discovery mentions increase from 18 to 33 of 120 answers. The example illustrates why factual clarity and discovery need separate measures. The figures are invented and cannot substantiate an aviation client result.',
    decision:
      'If the brand is mentioned more frequently but its role remains unclear, revise the source explanations before expanding acquisition activity. Buyer understanding is part of the decision, alongside reach.',
    relatedService: 'aeo',
    solution: 'professional-services',
    industry: 'private-aviation',
    updated: '2026-10-13',
  },
  {
    slug: 'hospitality-guest-intent',
    sector: 'LUXURY HOSPITALITY',
    title: 'Connecting the right guest question to the right stay.',
    description:
      'A worked example of organizing hotel content around guest needs, consistent property facts, and a clearer booking inquiry.',
    question: 'Which property fits a small family gathering with different access needs?',
    profile: {
      company: 'Example coastal retreat',
      market: 'Destination hospitality',
      scope: 'Guest-intent content, listing consistency, and inquiry conversion',
      duration: '90-day example program',
    },
    metrics: [
      {
        label: 'Brand mention rate',
        before: '15%',
        after: '27.5%',
        context: '18 → 33 of 120 synthetic answers per period',
      },
      {
        label: 'Owned citation rate',
        before: '7.5%',
        after: '15%',
        context: '9 → 18 of 120 synthetic answers per period',
      },
      {
        label: 'AI referral visits',
        before: '200',
        after: '310',
        context: 'Equal illustrative 30-day comparison periods',
      },
      {
        label: 'Suitable stay inquiries',
        before: '6',
        after: '11',
        context: 'From 12 baseline and 19 follow-up inquiries',
      },
    ],
    challenge:
      'The fictional property has attractive imagery, but practical guest information is fragmented across room pages, third-party listings, and reservation emails. A family or retreat organizer cannot easily understand room configurations, accessibility information, seasonal amenities, or the questions to confirm with the team. The result is a beautiful introduction with too little decision support.',
    approach: [
      {
        title: 'Start with the purpose of the trip',
        body: 'Group 40 example questions around family gatherings, small retreats, quieter stays, and destination planning. Confirm which experiences the property can actually support and avoid claiming a fit for every kind of guest.',
      },
      {
        title: 'Make property facts consistent',
        body: 'Create a maintained record of room configurations, access information, seasonal services, and booking policies. Assign property staff to approve each section and reconcile important differences across owned pages and current listings.',
      },
      {
        title: 'Build useful paths through the site',
        body: 'Publish a family-stay guide, a small-retreat guide, and an accurate practical-information page. Link each to appropriate rooms and an inquiry form that captures dates, group size, and the purpose of the stay through a direct conversation.',
      },
      {
        title: 'Separate inquiries from bookings',
        body: 'Review the guest question sample and referral visits, then ask reservations staff to classify inquiry suitability. Confirmed bookings, cancellations, and revenue belong in separate commercial records.',
      },
    ],
    timeline: [
      {
        period: 'Days 1–30',
        title: 'Audit the guest journey',
        body: 'Record current facts and listings, define trip-intent questions, and capture the example baseline.',
      },
      {
        period: 'Days 31–60',
        title: 'Create useful guest content',
        body: 'Release two intent guides, practical information, and clearer links to rooms and the reservations team.',
      },
      {
        period: 'Days 61–90',
        title: 'Learn from inquiries',
        body: 'Repeat the question sample and review inquiry fit with notes on seasonality, rates, and availability.',
      },
    ],
    deliverables: [
      'Guest-intent map and 40-question register',
      'Property fact and listing-consistency review',
      'Two guest guides and practical-information page',
      'Internal links and inquiry journey brief',
      'Reporting template with reservations-team feedback',
    ],
    measurement: [
      'Use 40 questions across three platforms for 120 answers in each synthetic sample.',
      'Separate an owned citation from a mention that relies on a third-party listing.',
      'Compare equal referral windows and annotate changes in rates, availability, and seasonality.',
      'Define a suitable inquiry with the reservations team; do not treat it as a confirmed booking.',
    ],
    interpretation:
      'In this sample, mentions rise from 18 to 33 of 120 answers and suitable inquiries from 6 to 11. These numbers show the shape of a report, not achieved hotel performance. Seasonality and inventory changes would need attention in a real comparison.',
    decision:
      'If discovery improves for a trip type the property cannot consistently support, refine the explanation. The goal is a well-informed guest choosing a suitable experience.',
    relatedService: 'conversion-rate-optimization',
    solution: 'professional-services',
    industry: 'luxury-hospitality',
    updated: '2026-10-13',
  },
];
