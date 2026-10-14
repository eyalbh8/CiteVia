import Link from 'next/link';
import type { CaseStudy } from '@/content/case-studies';
import { ArrowIcon } from './icons';

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="study-card">
      <div className={`study-art study-art-${index % 3}`} aria-hidden="true">
        <span className="study-art-number">
          {study.metrics ? study.metrics[0].after : `0${index + 1}`}
        </span>
        <span className="study-art-question">
          {study.metrics ? `${study.metrics[0].label} · synthetic example` : study.question}
        </span>
        <div className="study-art-path">
          <span>QUESTION</span>
          <i />
          <span>EVIDENCE</span>
          <i />
          <span>ACTION</span>
        </div>
      </div>
      <div className="study-card-body">
        <span className="example-label">Illustrative example</span>
        <span className="eyebrow">{study.sector}</span>
        <h3>{study.title}</h3>
        <p>{study.description}</p>
        <span className="text-link">
          Explore the study <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
