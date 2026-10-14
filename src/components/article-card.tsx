import Link from 'next/link';
import type { ArticleSummary } from '@/content/articles';
import { ArrowIcon, SparkIcon } from './icons';

export function ArticleCard({ article, index }: { article: ArticleSummary; index: number }) {
  return (
    <Link href={`/blog/${article.slug}`} className="article-card">
      <div className={`article-art article-art-${index % 3}`} aria-hidden="true">
        {index % 3 === 0 ? (
          <div className="art-type">
            SEO<span>↗</span>GEO
          </div>
        ) : index % 3 === 1 ? (
          <div className="art-document">
            <SparkIcon />
            <i />
            <i />
            <i />
            <span>Worth a citation.</span>
          </div>
        ) : (
          <div className="art-bars">
            {[30, 48, 39, 65, 58, 83, 98].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        )}
        <span className="art-index">CITEVIA / FIELD NOTES 0{index + 1}</span>
      </div>
      <div className="article-card-body">
        <span className="eyebrow">
          {article.category} <span className="reading-time">{article.minutes} MIN READ</span>
        </span>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <span className="text-link">
          Read the article <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
