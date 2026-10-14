import { notFound } from 'next/navigation';
import { IndustryPage } from '@/components/arielos/Pages';
import { industryProfiles } from '@/components/arielos/pageContent';
import { JsonLd } from '@/components/ui';
import { breadcrumbSchema, pageMetadata, webPageSchema } from '@/lib/seo';
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return industryProfiles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = industryProfiles.find((item) => item.slug === slug);
  if (!industry) notFound();
  return pageMetadata({
    title: `AI Search Marketing for ${industry.name}`,
    description: industry.summary,
    path: `/industries/${slug}`,
  });
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const industry = industryProfiles.find((item) => item.slug === slug);
  if (!industry) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Industries', href: '/industries' },
          { name: industry.name, href: `/industries/${slug}` },
        ])}
      />
      <JsonLd data={webPageSchema(industry.name, industry.summary, `/industries/${slug}`)} />
      <div className="arielos-home">
        <IndustryPage industrySlug={slug} />
      </div>
    </>
  );
}
