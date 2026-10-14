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
  description: article.deck,
  category: 'RESEARCH',
  published: article.datePublished,
  updated: article.dateModified,
  takeaway: article.executiveSummary.join(' '),
  relatedService: 'aeo',
  sections: [
    { id: 'executive-summary', title: 'Executive summary', paragraphs: article.executiveSummary },
    ...article.definitions.map((definition) => ({
      id: slugify(definition.term),
      title: definition.term,
      paragraphs: [definition.quote],
    })),
    ...article.sections.map((section) => ({
      id: slugify(section.heading),
      title: section.heading,
      paragraphs: [...section.paragraphs, section.example.title, section.example.text],
    })),
    { id: 'limitations', title: 'Interpret with care.', paragraphs: article.limitations },
    ...article.sources.map((source, index) => ({
      id: `source-${index + 1}`,
      title: source.title,
      paragraphs: [source.organization],
      source: { title: source.title, url: source.url },
    })),
  ],
}));
