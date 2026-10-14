import { contentIndex } from './content-index';
import { site, absoluteUrl } from './site';
import { articles } from '@/content/articles';
import { parseArticleText } from './article-text';
import { services } from '@/content/services';
import { methodology } from '@/content/methodology';
import { industries } from '@/content/industries';
import { solutions } from '@/content/solutions';
import { caseStudies } from '@/content/case-studies';
import { faqs as homepageFaqs } from '@/components/arielos/data';
import { glossary, resourceFaqs } from '@/content/resources';

const introduction = `# Citevia\n\n> ${site.description}\n\nWebsite: ${site.url}\nContact: ${site.email}\n\nCitevia provides services. Project scope is agreed with the business. Example case studies are constructed educational scenarios, not client engagements or achieved performance results. The homepage Nayax ranking, mentions and sentiment are transcribed from a supplied static screenshot. Other homepage reporting views remain illustrative; case-study metrics are synthetic and no live analytics API is connected. Independent search rankings and AI recommendations are not guaranteed.\n`;
const bullets = (items: string[]) => items.map((item) => `- ${item}`).join('\n');
const articleMarkdown = (value: string) =>
  parseArticleText(value)
    .map((part) =>
      part.href
        ? `[${part.text}](${part.href.startsWith('/') ? absoluteUrl(part.href) : part.href})`
        : part.text,
    )
    .join('');

export function llmsIndex() {
  return [
    introduction,
    ...[...new Set(contentIndex.map((page) => page.group))].map(
      (group) =>
        `## ${group}\n\n${contentIndex
          .filter((page) => page.group === group)
          .map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`)
          .join('\n')}`,
    ),
    `## Optional\n\n- [Full-text companion](${absoluteUrl('/llms-full.txt')}): Published services, solutions, example studies, blog articles, and resource definitions.\n- [Sitemap](${absoluteUrl('/sitemap.xml')}): Canonical public pages when production indexing is enabled.\n- [Privacy notice](${absoluteUrl('/privacy')}): How website inquiries and delivery are handled.\n- [Website terms](${absoluteUrl('/terms')}): Website use and content limitations.`,
    '',
  ].join('\n\n');
}

export function llmsFullText() {
  return [
    introduction,
    `## Homepage questions\n\n${homepageFaqs.map((faq) => `### ${faq.q}\n\n${faq.a}`).join('\n\n')}`,
    'This text companion is generated from the same published content records as the website. Canonical page links identify the original context.',
    '## Methodology',
    ...methodology.map(
      (step) =>
        `### ${step.name}\n\n${step.question}\n\n${step.body}\n\nInputs:\n${bullets(step.inputs)}\n\nOutputs:\n${bullets(step.outputs)}`,
    ),
    '## Services',
    ...services.map((item) =>
      [
        `### ${item.name}`,
        `Canonical: ${absoluteUrl(`/services/${item.slug}`)}`,
        item.answer,
        `Audience: ${item.audience}`,
        ...item.sections.map((section) => `#### ${section.title}\n\n${section.body}`),
        '#### Deliverables',
        bullets(item.deliverables),
        ...item.faq.map((faq) => `#### ${faq.question}\n\n${faq.answer}`),
      ].join('\n\n'),
    ),
    '## Industries',
    ...industries.map((item) =>
      [
        `### ${item.name}`,
        `Canonical: ${absoluteUrl(`/industries/${item.slug}`)}`,
        item.description,
        item.context,
        '#### Buyer roles',
        bullets(item.roles),
        '#### Questions',
        bullets(item.questions),
        '#### Barriers',
        bullets(item.barriers),
        '#### Intervention',
        item.intervention,
        '#### Evidence',
        bullets(item.evidence),
      ].join('\n\n'),
    ),
    '## Solutions',
    ...solutions.map((item) =>
      [
        `### ${item.name}`,
        `Canonical: ${absoluteUrl(`/solutions/${item.slug}`)}`,
        item.intro,
        '#### Buyer questions',
        bullets(item.questions),
        ...item.priorities.map((section) => `#### ${section.title}\n\n${section.body}`),
        '#### Potential deliverables',
        bullets(item.deliverables),
      ].join('\n\n'),
    ),
    '## Illustrative example studies',
    'Every study in this section is a constructed educational example. None describes a client engagement or achieved results.',
    ...caseStudies.map((item) =>
      [
        `### Illustrative example: ${item.title}`,
        `Canonical: ${absoluteUrl(`/case-studies/${item.slug}`)}`,
        `Updated: ${item.updated}`,
        `Buyer question: ${item.question}`,
        '#### Challenge',
        item.challenge,
        ...item.approach.map((section) => `#### ${section.title}\n\n${section.body}`),
        ...(item.profile
          ? [
              '#### Fictional company profile',
              ...Object.entries(item.profile).map(([key, value]) => `${key}: ${value}`),
            ]
          : []),
        ...(item.metrics
          ? [
              '#### Synthetic example metrics — not achieved results',
              ...item.metrics.map(
                (metric) =>
                  `${metric.label}: ${metric.before} → ${metric.after}. ${metric.context}`,
              ),
            ]
          : []),
        ...(item.timeline
          ? [
              '#### Example timeline',
              ...item.timeline.map((step) => `${step.period}: ${step.title}. ${step.body}`),
            ]
          : []),
        ...(item.interpretation
          ? ['#### Interpreting the synthetic example', item.interpretation]
          : []),
        '#### Proposed deliverables',
        bullets(item.deliverables),
        '#### Proposed measurement',
        bullets(item.measurement),
        '#### Next decision',
        item.decision,
      ].join('\n\n'),
    ),
    '## Blog',
    ...articles.map((item) =>
      [
        `### ${item.title}`,
        `Canonical: ${absoluteUrl(`/blog/${item.slug}`)}`,
        `Author: Citevia\nPublished: ${item.published}\nUpdated: ${item.updated}`,
        item.description,
        `Takeaway: ${articleMarkdown(item.takeaway)}`,
        ...item.sections.map((section) =>
          [
            `#### ${section.title}`,
            ...section.paragraphs.map(articleMarkdown),
            ...(section.bullets ? [bullets(section.bullets.map(articleMarkdown))] : []),
            ...(section.example
              ? [`##### ${section.example.title}`, articleMarkdown(section.example.text)]
              : []),
            ...(section.source ? [`Source: [${section.source.title}](${section.source.url})`] : []),
          ].join('\n\n'),
        ),
      ].join('\n\n'),
    ),
    '## Glossary',
    ...glossary.map((item) => `### ${item.term}\n\n${item.definition}`),
    '## Common questions',
    ...resourceFaqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`),
    '',
  ].join('\n\n');
}

export const textHeaders = {
  'Content-Type': 'text/plain; charset=utf-8',
  // Keep text mirrors readable without competing with the canonical HTML pages.
  'X-Robots-Tag': 'noindex, follow',
};
