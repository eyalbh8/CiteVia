'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, type ArticleSummary } from '@/content/articles';
import { articleMedia } from '@/content/article-media';
import { useLanguage } from '@/i18n/LanguageProvider.jsx';

export function BlogDirectory({ articles }: { articles: ArticleSummary[] }) {
  const [category, setCategory] = useState('ALL');
  const [query, setQuery] = useState('');
  const { language, translateToSpanish, translateToTurkish } = useLanguage();
  const categories = ['ALL', ...new Set(articles.map((article) => article.category))];
  const matches = articles.filter(
    (article) =>
      (category === 'ALL' || article.category === category) &&
      `${article.title} ${article.description} ${article.category} ${
        language === 'es'
          ? `${translateToSpanish(article.title)} ${translateToSpanish(article.description)} ${translateToSpanish(article.category)}`
          : language === 'tr'
            ? `${translateToTurkish(article.title)} ${translateToTurkish(article.description)} ${translateToTurkish(article.category)}`
            : ''
      }`
        .toLocaleLowerCase(language)
        .includes(query.trim().toLocaleLowerCase(language)),
  );
  return (
    <section className="blog-directory" aria-labelledby="all-articles">
      <div className="blog-toolbar">
        <div>
          <p className="eyebrow">THE LATEST THINKING</p>
          <h2 id="all-articles">All articles</h2>
        </div>
        <div className="blog-search">
          <label htmlFor="article-search">Search the blog</label>
          <input
            id="article-search"
            type="search"
            placeholder="Search topics or keywords…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="topic-filters" role="group" aria-label="Filter articles by topic">
        {categories.map((topic) => (
          <button
            type="button"
            key={topic}
            aria-pressed={category === topic}
            onClick={() => setCategory(topic)}
          >
            {topic === 'ALL'
              ? 'All topics'
              : topic === 'TECHNICAL SEO'
                ? 'Technical SEO'
                : topic.toLowerCase()}
          </button>
        ))}
      </div>
      <p className="result-count" role="status">
        <span>{`${matches.length} ${matches.length === 1 ? 'article' : 'articles'}`}</span>
        {category !== 'ALL' && <span>{` in ${category.toLowerCase()}`}</span>}
        {query.trim() && <span>{` matching “${query.trim()}”`}</span>}
      </p>
      <div className="blog-grid">
        {matches.map((article) => (
          <article className="blog-card" key={article.slug}>
            <Link href={`/blog/${article.slug}`} className="blog-card__link">
              <div className="blog-card__image">
                <Image
                  src={articleMedia(article.slug).src}
                  alt=""
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
                <span>{article.category}</span>
              </div>
              <div className="blog-card__body">
                <div className="blog-meta">
                  <time dateTime={article.published}>{formatDate(article.published)}</time>
                  <span>{`${article.localizedMinutes[language] || article.minutes} min read`}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span className="blog-read">
                  Read article <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      {!matches.length && (
        <div className="blog-empty">
          <h3>No matching articles yet.</h3>
          <p>Try a different keyword or explore all topics.</p>
          <button
            className="button button--outline"
            type="button"
            onClick={() => {
              setCategory('ALL');
              setQuery('');
            }}
          >
            Show all articles
          </button>
        </div>
      )}
    </section>
  );
}
