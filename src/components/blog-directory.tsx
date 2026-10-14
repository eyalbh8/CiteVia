'use client';

import { useState } from 'react';
import type { ArticleSummary } from '@/content/articles';
import { ArticleCard } from './article-card';

export function BlogDirectory({ articles }: { articles: ArticleSummary[] }) {
  const [category, setCategory] = useState('ALL');
  const [query, setQuery] = useState('');
  const categories = ['ALL', ...new Set(articles.map((article) => article.category))];
  const matches = articles.filter(
    (article) =>
      (category === 'ALL' || article.category === category) &&
      `${article.title} ${article.description}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <section className="blog-directory" aria-labelledby="all-articles">
      <div className="blog-toolbar">
        <h2 id="all-articles">The field notes</h2>
        <div className="blog-search">
          <label htmlFor="article-search">Search articles</label>
          <input
            id="article-search"
            type="search"
            placeholder="Try measurement or content"
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
            {topic === 'ALL' ? 'All topics' : topic.toLowerCase()}
          </button>
        ))}
      </div>
      <p className="result-count" role="status">
        {matches.length} {matches.length === 1 ? 'article' : 'articles'}
        {category !== 'ALL' ? ` in ${category.toLowerCase()}` : ''}
      </p>
      <div className="articles-grid">
        {matches.map((article) => (
          <ArticleCard
            key={article.slug}
            article={article}
            index={articles.findIndex((item) => item.slug === article.slug)}
          />
        ))}
      </div>
      {!matches.length && (
        <div className="blog-empty">
          <h3>No matching articles yet.</h3>
          <p>Try a broader search or explore all topics.</p>
          <button
            className="button button-outline"
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
