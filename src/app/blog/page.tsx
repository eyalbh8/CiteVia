import { InsightsPage } from '@/components/arielos/Pages';
import { insightArticles } from '@/components/arielos/content/insights';
import { articles } from '@/content/articles';
import { JsonLd } from '@/components/ui';
import { pageMetadata, webPageSchema } from '@/lib/seo';
const description =
  'Research notes for leaders responsible for brand, reputation, growth and digital strategy in high-consideration markets.';
export const metadata = pageMetadata({
  title: 'Insights — AI, Authority and Choice',
  description,
  path: '/blog',
});
export default function Page() {
  const sourceSlugs = new Set(insightArticles.map((article) => article.slug));
  const additionalArticles = articles
    .filter((article) => !sourceSlugs.has(article.slug))
    .map((article) => ({
      title: article.title,
      copy: article.description,
      href: `/blog/${article.slug}`,
    }));
  return (
    <>
      <JsonLd data={webPageSchema('Citevia insights', description, '/blog', 'CollectionPage')} />
      <div className="arielos-home">
        <InsightsPage additionalArticles={additionalArticles} />
      </div>
    </>
  );
}
