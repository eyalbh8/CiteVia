export const socialLeadIntro = {
  title: 'Social media lead generation',
  description:
    'Turn relevant comments on Reddit and Instagram into lead opportunities. Citevia also helps you reach buyers on LinkedIn, X, YouTube, and Medium.',
};

export const socialLeadChannels = [
  {
    id: 'reddit',
    name: 'Reddit',
    description:
      'Reach people comparing options, asking for recommendations, and solving problems in relevant communities.',
    context: 'Community discussion · software recommendations',
    intent: 'Comparing solutions',
    question:
      'We have outgrown spreadsheets. Which CRM would you shortlist for a five-person agency?',
    reply:
      'Start with a shared pipeline, email history, and follow-up reminders. I work with [Brand]; its lightweight CRM may fit a small agency. Compare the reporting and pricing against your shortlist before deciding.',
    action: 'A useful comparison that gives the buyer a reason to explore your product.',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description:
      'Join product discovery conversations in relevant posts and Reels, where a question can become a purchase decision.',
    context: 'Travel Reel · product discovery',
    intent: 'Looking for a product',
    question:
      'Any recommendations for a carry-on backpack with room for a laptop and a weekend away?',
    reply:
      'Check the airline dimensions, a separate laptop sleeve, and a clamshell opening. We make [Brand] bags around this kind of trip. The size guide can help you see whether one fits your airline and packing list.',
    action: 'Answer the practical question and open the door to a product enquiry.',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description:
      'Meet decision-makers discussing business challenges, choosing partners, and asking their network for advice.',
    context: 'Professional discussion · partner search',
    intent: 'Seeking a service',
    question:
      'Who can recommend a customer support partner for weekend cover without hiring a full team?',
    reply:
      'Ask about weekend staffing, escalation ownership, and access to your help desk. My team at [Brand] offers this kind of cover. Happy to share a checklist so you can compare providers on the same terms.',
    action: 'Connect a specific business need with a relevant next conversation.',
  },
  {
    id: 'x',
    name: 'X',
    description:
      'Spot timely requests for alternatives and recommendations, then respond while the conversation is active.',
    context: 'Public post · alternative search',
    intent: 'Evaluating alternatives',
    question: 'Looking for simpler analytics for a small team. What should we try?',
    reply:
      'Which reports do you actually use each week? If you mainly need acquisition and conversion, start there. I am with [Brand]; our tool focuses on those essentials. Compare the event limits and data export options too.',
    action: 'Turn a broad recommendation request into a focused product discussion.',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    description:
      'Help viewers asking implementation and product questions beneath videos relevant to your offer.',
    context: 'Tutorial comments · workflow question',
    intent: 'Solving a problem',
    question:
      'Great tutorial. Can we automate the weekly reporting step instead of copying everything by hand?',
    reply:
      'Use a scheduled export if your tool supports it, then check the fields before connecting a dashboard. Our team at [Brand] helps set up reporting workflows like this. Start by mapping the manual steps you want to remove.',
    action: 'Offer a practical next step at the moment someone needs help.',
  },
  {
    id: 'medium',
    name: 'Medium',
    description:
      'Add informed responses to relevant articles and connect with readers researching a problem in depth.',
    context: 'Article response · implementation question',
    intent: 'Researching an approach',
    question:
      'How would you adapt this process for a small team without a dedicated operations person?',
    reply:
      'Give one person ownership of the checklist and automate a single repeated task first. At [Brand], we help small teams simplify these handoffs. A short process map usually shows where to start without adding another role.',
    action: 'Build consideration through a useful answer to a detailed question.',
  },
];

export const socialLeadSteps = [
  {
    title: 'Find the buying signals',
    body: 'Map your offer, competitors, and buyer questions. Find relevant conversations across the channels your audience uses.',
  },
  {
    title: 'Choose the right conversations',
    body: 'Review intent, relevance, timing, and community rules. Prioritize people looking for a solution you can actually provide.',
  },
  {
    title: 'Make the comment useful',
    body: 'Draft a helpful answer in your brand voice. Review the wording and posting approach together before publishing, with a clear brand relationship where relevant.',
  },
  {
    title: 'Follow the path to a lead',
    body: 'Report comment links, replies, attributable visits, and qualified enquiries. Use what people ask to improve the next round.',
  },
];

export const socialLeadFunnel = [
  { value: '120', label: 'Conversations reviewed' },
  { value: '28', label: 'Relevant opportunities' },
  { value: '12', label: 'Approved replies' },
  { value: '5', label: 'Qualified enquiries' },
];

export const socialLeadCases = [
  {
    id: 'saas',
    channel: 'Reddit + LinkedIn',
    sector: 'B2B software',
    title: 'From a tool comparison to a demo conversation',
    challenge:
      'A small CRM brand needs to reach agency owners who are actively replacing spreadsheets.',
    approach:
      'Find recommendation requests, explain the tradeoffs, and introduce the product with a clear affiliation. Invite a demo only when the buyer wants to continue.',
    metrics: [
      { value: '40', label: 'Relevant conversations' },
      { value: '16', label: 'Approved replies' },
      { value: '4', label: 'Demo enquiries' },
    ],
    measurement:
      'Match demo requests to tagged visits and self-reported discovery sources in the CRM.',
  },
  {
    id: 'consumer',
    channel: 'Instagram + Reddit',
    sector: 'Consumer brand',
    title: 'From a product question to a purchase enquiry',
    challenge:
      'A travel accessories brand wants to meet buyers researching their next carry-on bag.',
    approach:
      'Answer questions about size, packing, and airline fit beneath relevant travel content. Direct interested buyers to the right product information when the platform permits it.',
    metrics: [
      { value: '55', label: 'Relevant conversations' },
      { value: '20', label: 'Approved replies' },
      { value: '7', label: 'Product enquiries' },
    ],
    measurement:
      'Track attributable product-page visits and enquiries; record purchases separately when attribution is available.',
  },
];

export const socialLeadFaqs = [
  {
    q: 'Which platforms do you work with?',
    a: 'Reddit and Instagram are the starting point. We also work across LinkedIn, X, YouTube, and Medium, with the channel mix shaped around where your buyers ask questions and look for recommendations.',
  },
  {
    q: 'How can a comment generate a lead?',
    a: 'A useful comment can help someone comparing products or looking for a service discover your brand. They may reply, visit your profile or website, or make an enquiry. We distinguish conversation opportunities from qualified leads and track the steps that can be attributed.',
  },
  {
    q: 'Can we review comments before they are published?',
    a: 'Yes. We agree on topics, tone, brand claims, and the posting approach with you. Comments are reviewed before publishing. Replies should help the reader, accurately describe your offer, and disclose the relationship to your brand where relevant.',
  },
  {
    q: 'What does reporting include?',
    a: 'The agreed report can include shortlisted conversations, approved and published comments, placement links, replies, and attributable enquiries. Website and CRM tracking can connect activity to leads where available. Removed comments and attribution gaps should remain visible.',
  },
  {
    q: 'Are these real posts and client case studies?',
    a: 'The conversations, replies, funnel, and case studies on this page are fictional examples that demonstrate the service. The figures are synthetic, not Citevia client results or forecasts. Your campaign starts with research into your own market.',
  },
  {
    q: 'Do you guarantee leads or AI search rankings?',
    a: 'No. Lead volume depends on relevant conversations, your offer, and the response from buyers. Comments can add to brand discovery, but platform visibility, search indexing, AI citations, and sales are not guaranteed. Scope and measurement are agreed before a campaign begins.',
  },
];
