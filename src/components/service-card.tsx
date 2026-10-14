import Link from 'next/link';
import type { Service } from '@/content/services';
import { ArrowIcon, ServiceIcon } from './icons';

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link href={`/services/${service.slug}`} className="service-card">
      <div className="service-card-top">
        <ServiceIcon index={index} />
        <span>
          {service.number} / {service.category}
        </span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.summary}</p>
      <span className="text-link">
        Explore the service <ArrowIcon />
      </span>
    </Link>
  );
}
