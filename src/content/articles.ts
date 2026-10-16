import { arielosArticles } from './arielos-articles';
import { newArticles } from './blog-articles';
import { foundationArticles } from './foundation-articles';
import { articlePlainText } from '@/lib/article-text';

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  focusKeyphrase: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  takeaway: string;
  relatedService: string;
  faq?: { title: string; items: { question: string; answer: string }[] };
  translations?: Record<string, Record<string, string>>;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    example?: { title: string; text: string };
    source?: { title: string; url: string };
  }[];
};

export const articles: Article[] = [...arielosArticles, ...newArticles, ...foundationArticles];

export function articleWordCount(article: Article, language = 'en') {
  const text = [
    article.takeaway,
    ...article.sections.flatMap((s) => [
      s.title,
      ...s.paragraphs,
      ...(s.bullets || []),
      ...(s.example ? [s.example.title, s.example.text] : []),
      ...(s.source ? [`Source: ${s.source.title}`] : []),
    ]),
    ...(article.faq
      ? [article.faq.title, ...article.faq.items.flatMap((item) => [item.question, item.answer])]
      : []),
  ]
    .map((value) => article.translations?.[language]?.[value] || value)
    .join(' ');
  return articlePlainText(text).trim().split(/\s+/).length;
}

export function readingMinutes(article: Article, language = 'en') {
  return Math.max(1, Math.ceil(articleWordCount(article, language) / 220));
}

export function articleSummary(article: Article) {
  return {
    slug: article.slug,
    title: article.title,
    description: article.description,
    category: article.category,
    published: article.published,
    minutes: readingMinutes(article),
    localizedMinutes: Object.fromEntries(
      Object.keys(article.translations || {}).map((language) => [
        language,
        readingMinutes(article, language),
      ]),
    ),
  };
}

export type ArticleSummary = ReturnType<typeof articleSummary>;

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
