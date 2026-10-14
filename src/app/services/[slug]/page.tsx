import { ServicePage as SourceServicePage } from '@/components/arielos/Pages';
import { getServiceOffering } from '@/components/arielos/content/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/content/services';
import { methodology } from '@/content/methodology';
import { serviceHeadlines } from '@/content/marketing-services';
import { Breadcrumbs, Cta, Faq, JsonLd, PageIntro } from '@/components/ui';
import { ArrowIcon, CheckIcon } from '@/components/icons';
import { pageMetadata, webPageSchema } from '@/lib/seo';
import { absoluteUrl, site } from '@/lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return pageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const path = `/services/${slug}`;
  if (getServiceOffering(slug))
    return (
      <>
        <JsonLd
          data={[
            webPageSchema(service.name, service.summary, path),
            {
              '@type': 'Service',
              '@id': `${absoluteUrl(path)}#service`,
              name: service.name,
              description: service.summary,
              url: absoluteUrl(path),
              provider: { '@id': `${site.url}/#organization` },
              mainEntityOfPage: { '@id': `${absoluteUrl(path)}#webpage` },
            },
          ]}
        />
        <div className="arielos-home">
          <SourceServicePage serviceSlug={slug} />
        </div>
      </>
    );

  return (
    <>
      <JsonLd
        data={[
          webPageSchema(service.name, service.summary, path),
          {
            '@type': 'Service',
            '@id': `${absoluteUrl(path)}#service`,
            name: service.name,
            description: service.answer,
            url: absoluteUrl(path),
            provider: { '@id': `${site.url}/#organization` },
            serviceType: service.name,
            mainEntityOfPage: { '@id': `${absoluteUrl(path)}#webpage` },
          },
        ]}
      />
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Services', href: '/services' },
            { name: service.name, href: path },
          ]}
        />
        <PageIntro
          eyebrow={service.name.toUpperCase()}
          title={serviceHeadlines[slug] || service.name}
          description={service.summary}
        >
          <Link href="/contact" className="button button-primary">
            Discuss this service <ArrowIcon />
          </Link>
        </PageIntro>
        <div className="service-detail-grid">
          <div className="prose">
            <section className="answer-block">
              <span className="eyebrow">THE SHORT ANSWER</span>
              <h2>{service.question}</h2>
              <p>{service.answer}</p>
            </section>
            {service.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <section>
              <h2>Common questions</h2>
              <Faq items={service.faq} />
            </section>
          </div>
          <aside className="deliverables-panel">
            <span className="eyebrow">WHAT YOU WALK AWAY WITH</span>
            <h2>Concrete deliverables.</h2>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <div className="best-for">
              <span className="eyebrow">A GOOD FIT FOR</span>
              <p>{service.audience}</p>
            </div>
            <Link href="/contact" className="button button-primary">
              Let’s talk <ArrowIcon />
            </Link>
          </aside>
        </div>
        <section className="related-services">
          <h2>Part of a connected approach.</h2>
          <p>{methodology.map((s) => s.name).join(' → ')}</p>
          <div className="related-links">
            {services
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link href={`/services/${s.slug}`} key={s.slug}>
                  {s.name}
                  <ArrowIcon />
                </Link>
              ))}
          </div>
        </section>
      </div>
      <Cta />
    </>
  );
}
