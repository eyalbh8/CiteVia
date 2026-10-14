import { industryProfiles } from '@/components/arielos/pageContent';
export type Industry = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  context: string;
  roles: string[];
  questions: string[];
  barriers: string[];
  evidence: string[];
  intervention: string;
  services: string[];
  study: string;
};
const originalIndustries: Industry[] = [
  {
    slug: 'yachting',
    name: 'Yachting',
    headline: 'Make specialist experience visible before the first introduction.',
    description:
      'AI search strategy for yacht builders, brokers, management firms, and advisers, shaped around technical expertise and the ownership journey.',
    context:
      'A yacht purchase or management mandate brings together owners, representatives, captains, and specialist advisers. Their questions concern a particular vessel, operating area, support model, or stage of ownership. A useful public explanation helps them understand where a business has relevant experience.',
    roles: [
      'Owners and owner representatives',
      'Captains and yacht managers',
      'Family-office advisers',
      'Brokerage and technical teams',
    ],
    questions: [
      'What should an owner compare before selecting a yacht manager?',
      'Which expertise matters for a custom-build project?',
      'How should a buyer assess a brokerage’s regional experience?',
    ],
    barriers: [
      'Broad lifestyle descriptions obscure the actual service scope.',
      'Project knowledge sits in private conversations rather than approved public explanations.',
      'Older directory entries describe a different fleet or geographic focus.',
    ],
    evidence: [
      'Approved project and technical explanations',
      'Current service areas and responsibilities',
      'Documented team expertise',
      'Relevant specialist editorial references',
    ],
    intervention:
      'We organize the ownership questions, audit public service information, and identify the evidence needed for a clearer explanation. Content and reputation work follows an approval process that respects client and vessel confidentiality.',
    services: ['aeo', 'content-creation', 'strategic-pr-placement'],
    study: 'consultancy-expertise',
  },
  {
    slug: 'private-aviation',
    name: 'Private aviation',
    headline: 'Give each mission a clearer route to the right expertise.',
    description:
      'GEO and content strategy for aviation operators, brokers, and advisers, focused on mission fit, current information, and verifiable expertise.',
    context:
      'Aircraft acquisition, charter, and management are different decisions. Buyers need clear information about the service being offered, geography, operational responsibilities, and the expertise required for their mission. Generic luxury positioning can leave those distinctions unresolved.',
    roles: [
      'Owners and principals',
      'Flight-department leaders',
      'Corporate travel teams',
      'Aircraft acquisition advisers',
    ],
    questions: [
      'What should we verify before choosing an aircraft management company?',
      'How do we compare acquisition advisers for a long-range mission?',
      'Which questions should a company ask before arranging private charter?',
    ],
    barriers: [
      'Broker, operator, and management roles are not clearly distinguished.',
      'Public fleet and service descriptions become outdated.',
      'Credentials are listed without an explanation of their relevance.',
    ],
    evidence: [
      'Verified current operating and service information',
      'Clear distinction between provider roles',
      'Approved team qualifications',
      'Useful explanations of the buyer’s evaluation process',
    ],
    intervention:
      'We map questions by mission and buyer role, review how the business is described, and build a content plan with clear factual owners. Operational and credential claims remain subject to the provider’s expert approval.',
    services: ['brand-reputation-management', 'aeo', 'conversion-rate-optimization'],
    study: 'aviation-mission-fit',
  },
  {
    slug: 'luxury-real-estate',
    name: 'Luxury real estate',
    headline: 'Help buyers understand the place, the project, and the people.',
    description:
      'AI search visibility for property developers and specialist agencies, with market-specific explanations, accurate project information, and useful buyer guidance.',
    context:
      'A property decision often starts with a place and a set of practical constraints. Buyers compare developers, locations, delivery history, services, and the information available about a project. Clear, current content helps them evaluate relevance before they request a viewing.',
    roles: [
      'Prospective buyers and relocating families',
      'Buyer representatives',
      'Property and investment advisers',
      'Developer marketing teams',
    ],
    questions: [
      'How should we compare developers in a new market?',
      'What information should a project page make available?',
      'Which questions matter before arranging a property viewing?',
    ],
    barriers: [
      'Different projects and company entities are blended together.',
      'Availability and delivery information is difficult to maintain.',
      'Location pages repeat generic descriptions without useful local context.',
    ],
    evidence: [
      'Accurate project status and service scope',
      'Approved project records and completion information',
      'Location-specific expertise',
      'Clear team, company, and contact details',
    ],
    intervention:
      'We connect project facts, location context, and buyer questions into a maintainable content structure. Each material claim receives a source and review owner. Visibility observations are reported alongside visits and inquiries, with attribution limits made explicit.',
    services: ['seo', 'content-creation', 'user-acquisition'],
    study: 'property-buyer-discovery',
  },
  {
    slug: 'jewellery-watches',
    name: 'Jewellery & watches',
    headline: 'Let the detail behind the object carry the story.',
    description:
      'Search and AI visibility for jewellery and watch businesses, with useful provenance, craftsmanship, service, and buying information.',
    context:
      'A considered purchase can turn on details that a short product description omits: materials, provenance, condition, aftercare, or the commissioning process. The brand needs to explain those details in language a buyer can verify and use.',
    roles: [
      'Collectors and first-time buyers',
      'Private client advisers',
      'Bespoke commissioning clients',
      'Retail and brand marketing teams',
    ],
    questions: [
      'What should a buyer ask about provenance and aftercare?',
      'How does a bespoke jewellery commission work?',
      'What information helps compare specialist watch retailers?',
    ],
    barriers: [
      'Craftsmanship claims lack a clear explanation or supporting evidence.',
      'Product and service details differ across channels.',
      'Buying guides do not address questions raised in private consultations.',
    ],
    evidence: [
      'Verified product and material information',
      'Documented service and aftercare policies',
      'Approved maker and craft expertise',
      'Accurate provenance descriptions where available',
    ],
    intervention:
      'We build question-led content around the buying and ownership journey. Product specialists approve technical claims, and content connects to current product and service information rather than relying on broad claims of exclusivity.',
    services: ['content-creation', 'brand-reputation-management', 'seo'],
    study: 'consultancy-expertise',
  },
  {
    slug: 'luxury-hospitality',
    name: 'Luxury hospitality',
    headline: 'Be discoverable for the experience you actually deliver.',
    description:
      'AI search and content strategy for hotels and hospitality brands, connecting guest needs to accurate destination, amenity, and booking information.',
    context:
      'Travellers and their advisers choose around a purpose: a quiet family stay, a retreat, a celebration, or a particular destination experience. Useful content explains which needs a property can meet and what guests should confirm before booking.',
    roles: [
      'Guests and travel planners',
      'Travel advisers and concierges',
      'Event and retreat organizers',
      'Hotel marketing and commercial teams',
    ],
    questions: [
      'Which details help compare properties for a family stay?',
      'What should an organizer verify before booking a small retreat?',
      'How can a guest understand access, amenities, and service limitations?',
    ],
    barriers: [
      'Amenity and policy information varies across listings.',
      'Destination content fails to connect to the guest’s purpose.',
      'Booking pages assume visitors already understand the property.',
    ],
    evidence: [
      'Current amenities and accessibility information',
      'Accurate booking and cancellation policies',
      'Specific destination and service expertise',
      'Genuine, appropriately sourced guest feedback',
    ],
    intervention:
      'We map trip intents, audit the consistency of property information, and improve the path from research to a suitable inquiry. Seasonal details get explicit review owners so a useful explanation stays useful.',
    services: ['user-acquisition', 'content-creation', 'conversion-rate-optimization'],
    study: 'hospitality-guest-intent',
  },
];

export const industries: Industry[] = originalIndustries.map((original) => {
  const source = industryProfiles.find((item) => item.slug === original.slug);
  if (!source) return original;
  return {
    ...original,
    description: source.summary,
    headline: 'Be recommended when the right buyer is deciding.',
    context: source.introduction,
    roles: source.audiences,
    questions: source.questions,
    barriers: source.barriers,
    intervention: source.intervention,
    evidence: source.signals,
    services: source.services,
  };
});
