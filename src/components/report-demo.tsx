'use client';

import { useRef, useState } from 'react';
import { demoReport as report } from '@/content/demo-report';

const rate = (count: number) => `${((count / report.answers) * 100).toFixed(0)}%`;

const tabs = ['Overview', 'Prompts', 'AI traffic', 'Mentions', 'Citations'];

export function Metric({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <div className="report-metric">
      <span>{label}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </div>
  );
}

export function ReportSnapshot({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`report-window ${compact ? 'report-compact' : ''}`}>
      <div className="report-topline">
        <div>
          <span className="report-avatar">CV</span>
          <strong>{report.account}</strong>
        </div>
        <span className="sample-badge">Sample data</span>
      </div>
      <div className="report-period">
        <span>Visibility overview</span>
        <span>Illustrative 90-day program ↗</span>
      </div>
      <div className="report-metrics">
        <Metric
          label="Brand mention rate"
          value={rate(report.mentions)}
          detail={`${report.mentions} of ${report.answers} sampled answers`}
        />
        <Metric
          label="Owned citation rate"
          value={rate(report.citations)}
          detail={`${report.citations} of ${report.answers} sampled answers`}
        />
        <Metric
          label="AI referral visits"
          value={String(report.visits)}
          detail="Example follow-up period"
        />
      </div>
      <div className="report-columns">
        <div>
          <h3>Presence by platform</h3>
          {report.platforms
            .filter((p) => p.answers)
            .map((p) => (
              <div className="platform-bar" key={p.name}>
                <div>
                  <span>
                    <b>{p.symbol}</b>
                    {p.name}
                  </span>
                  <span>
                    {p.mentions} / {p.answers}
                  </span>
                </div>
                <i>
                  <span style={{ width: `${(p.mentions / p.answers) * 100}%` }} />
                </i>
              </div>
            ))}
          <p className="report-note">
            Answers mentioning the example brand, out of 60 per platform.
          </p>
        </div>
        <div>
          <h3>Competitive context</h3>
          <div className="report-table-wrap">
            <table className="report-table">
              <caption className="sr-only">Synthetic brand mentions and citations</caption>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Mentions</th>
                  <th>Citations</th>
                </tr>
              </thead>
              <tbody>
                {report.competitors.map((c) => (
                  <tr key={c.name}>
                    <td>{c.name}</td>
                    <td>{c.mentions}</td>
                    <td>{c.citations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="report-note">One answer can mention more than one brand.</p>
        </div>
      </div>
    </div>
  );
}

export function TrafficReport() {
  return (
    <div className="report-window traffic-window">
      <div className="report-topline">
        <strong>AI referral traffic</strong>
        <span className="sample-badge">Sample data</span>
      </div>
      <div className="traffic-total">
        <strong>{report.visits}</strong>
        <span>visits in the example follow-up period</span>
        <span className="change-pill">
          +{Math.round((report.visits / report.baselineVisits - 1) * 100)}% vs.{' '}
          {report.baselineVisits} baseline visits
        </span>
      </div>
      <div className="report-columns">
        <div>
          <h3>Referral source</h3>
          {report.platforms.map((p) => (
            <div className="platform-bar" key={p.name}>
              <div>
                <span>
                  <b>{p.symbol}</b>
                  {p.name}
                </span>
                <span>{p.visits}</span>
              </div>
              <i>
                <span style={{ width: `${(p.visits / report.visits) * 100}%` }} />
              </i>
            </div>
          ))}
        </div>
        <div>
          <h3>Visitor location</h3>
          {report.locations.map((l) => (
            <div className="location-row" key={l.name}>
              <span>{l.name}</span>
              <strong>{l.visits}</strong>
            </div>
          ))}
          <div className="traffic-outcomes">
            <span>
              <strong>{report.inquiries}</strong> inquiries
            </span>
            <span>
              <strong>{report.qualified}</strong> qualified
            </span>
          </div>
        </div>
      </div>
      <p className="report-note">
        Synthetic figures demonstrate a reporting layout. They are not actual visits, leads, or
        client results.
      </p>
    </div>
  );
}

export function ReportDemo() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <div className="report-demo">
      <div className="report-tabs" role="tablist" aria-label="Sample visibility report">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            id={`report-tab-${i}`}
            role="tab"
            aria-selected={active === i}
            aria-controls="report-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(event) => {
              let next = i;
              if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
              else if (event.key === 'ArrowLeft') next = (i + tabs.length - 1) % tabs.length;
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = tabs.length - 1;
              else return;
              event.preventDefault();
              setActive(next);
              buttons.current[next]?.focus();
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        className="report-stage"
        id="report-panel"
        role="tabpanel"
        aria-labelledby={`report-tab-${active}`}
        tabIndex={0}
      >
        {active === 0 && <ReportSnapshot />}
        {active === 1 && (
          <div className="report-window">
            <div className="report-topline">
              <strong>Buyer question register</strong>
              <span className="sample-badge">Sample data</span>
            </div>
            <p className="report-description">
              Four examples from a defined set of 60 questions across three AI platforms.
            </p>
            <div className="prompt-list">
              {report.prompts.map((p) => (
                <div key={p.question}>
                  <span className="prompt-symbol">✦</span>
                  <div>
                    <h3>{p.question}</h3>
                    <span>{p.intent}</span>
                  </div>
                  <span className="prompt-status">{p.status}</span>
                </div>
              ))}
            </div>
            <p className="report-note">
              A stable question set makes observations more comparable. Model, market, date, and
              session context still matter.
            </p>
          </div>
        )}
        {active === 2 && <TrafficReport />}
        {active === 3 && (
          <div className="report-window">
            <div className="report-topline">
              <strong>From presence to a useful explanation</strong>
              <span className="sample-badge">Sample data</span>
            </div>
            <div className="report-metrics">
              <Metric
                value={`${report.baselineMentions} → ${report.mentions}`}
                label="Answers naming the brand"
                detail={`${report.answers} sampled answers in each period`}
              />
              <Metric
                value={`${rate(report.baselineMentions)} → ${rate(report.mentions)}`}
                label="Brand mention rate"
                detail={`A change of ${((report.mentions - report.baselineMentions) / report.answers) * 100} percentage points`}
              />
              <Metric
                value={String(report.questions)}
                label="Questions in the core sample"
                detail="Sampled across three platforms"
              />
            </div>
            <div className="report-explanation">
              <h3>Count the mention. Read the answer.</h3>
              <p>
                A brand can appear in an answer and still be described incorrectly. A useful review
                records context, factual accuracy, and cited sources alongside the count.
              </p>
              <p>
                These are invented figures for a worked example. They do not establish a causal
                effect or predict future performance.
              </p>
            </div>
          </div>
        )}
        {active === 4 && (
          <div className="report-window">
            <div className="report-topline">
              <strong>Sources behind the answer</strong>
              <span className="sample-badge">Sample data</span>
            </div>
            <div className="citation-layout">
              <Metric
                value={String(report.citations)}
                label="Answers citing an owned page"
                detail={`${rate(report.citations)} of ${report.answers} sampled answers`}
              />
              <div>
                {report.sources.map((s) => (
                  <div className="location-row" key={s.name}>
                    <span>{s.name}</span>
                    <strong>{s.count}</strong>
                  </div>
                ))}
                <p className="report-note">
                  Separate sample of 36 source references by type. A source reference and an answer
                  containing a citation are different counting units.
                </p>
              </div>
            </div>
            <div className="report-explanation">
              <h3>A source map helps choose the next action.</h3>
              <p>
                Look for outdated details, missing evidence, and pages that explain the buyer’s
                question clearly. Keep owned pages and independent sources visible in the review.
              </p>
            </div>
          </div>
        )}
      </div>
      <p className="demo-disclosure">
        Illustrative dashboard · All figures are synthetic · No live account connection
      </p>
    </div>
  );
}
