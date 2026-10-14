import type { Article } from './articles';
import { insightArticles } from '@/components/arielos/content/insights';
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
export const arielosArticles: Article[] = insightArticles.map((article) => ({
  slug: article.slug,
  title: article.title,
  seoTitle: article.seoTitle,
  focusKeyphrase: article.focusKeyphrase,
  description: article.deck,
  category: 'RESEARCH',
  published: article.datePublished,
  updated: article.dateModified,
  takeaway: article.executiveSummary.join(' '),
  relatedService: 'aeo',
  sections: [
    {
      id: 'key-definitions',
      title: 'Key definitions',
      paragraphs: [],
      bullets: article.definitions.map((definition) => `${definition.term}: ${definition.quote}`),
    },
    ...article.sections.map((section) => ({
      id: slugify(section.heading),
      title: section.heading,
      paragraphs: section.paragraphs,
      example: section.example,
    })),
    { id: 'limitations', title: 'Scope and limitations', paragraphs: article.limitations },
    {
      id: 'sources',
      title: 'Sources and further reading',
      paragraphs: [],
      bullets: article.sources.map(
        (source) => `[${source.title}](${source.url}) — ${source.organization}`,
      ),
    },
  ],
}));
