'use client';

import { useState } from 'react';
import { Link } from './Link.jsx';
import { FaqAccordion, Section, SectionHeader } from './UI.jsx';
import {
  socialLeadChannels,
  socialLeadSteps,
  socialLeadFunnel,
  socialLeadCases,
  socialLeadFaqs,
} from '@/content/social-media-leads';

export function SocialChannelIcon({ id }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (id === 'reddit')
    return (
      <svg {...props}>
        <ellipse cx="12" cy="14" rx="8" ry="6" />
        <path d="m12 8 1-5 5 1M4 11a2 2 0 1 0-1 4m17-4a2 2 0 1 1 1 4m-13 2c2 1.6 6 1.6 8 0" />
        <circle cx="19" cy="4" r="2" />
        <circle cx="8.5" cy="13" r=".9" fill="currentColor" />
        <circle cx="15.5" cy="13" r=".9" fill="currentColor" />
      </svg>
    );
  if (id === 'instagram')
    return (
      <svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  if (id === 'linkedin')
    return (
      <svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7.5 10v7M11 17v-7m0 3c0-4 6-4 6 0v4" />
        <circle cx="7.5" cy="7" r=".8" fill="currentColor" />
      </svg>
    );
  if (id === 'x')
    return (
      <svg {...props}>
        <path d="M4 3h4l12 18h-4L4 3Zm16 0-7 8m-2 2-7 8" />
      </svg>
    );
  if (id === 'youtube')
    return (
      <svg {...props}>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 6 3-6 3V9Z" />
      </svg>
    );
  return (
    <svg {...props}>
      <ellipse cx="7" cy="12" rx="5" ry="7" fill="currentColor" stroke="none" />
      <ellipse cx="16" cy="12" rx="2.5" ry="7" fill="currentColor" stroke="none" />
      <path d="M22 6v12" strokeWidth="2" />
    </svg>
  );
}

function ChannelBadge({ channel }) {
  return (
    <span className={`social-channel social-channel--${channel.id}`}>
      <SocialChannelIcon id={channel.id} />
      <span>{channel.name}</span>
    </span>
  );
}

function FeaturedChannels() {
  return (
    <div className="social-featured-channels" aria-label="Featured channels">
      {socialLeadChannels.slice(0, 2).map((channel) => (
        <ChannelBadge key={channel.id} channel={channel} />
      ))}
      <span className="social-featured-channels__note">Built around buying intent</span>
    </div>
  );
}

function ConversationPreview({ channel }) {
  return (
    <article className={`social-conversation social-conversation--${channel.id}`}>
      <div className="social-conversation__top">
        <ChannelBadge channel={channel} />
        <span className="social-intent">{channel.intent}</span>
      </div>
      <p className="social-conversation__context">{channel.context}</p>
      <h3>{channel.question}</h3>
      <div className="social-conversation__reply">
        <span className="social-reply-mark" aria-hidden="true">
          ↳
        </span>
        <div>
          <span className="social-small-label">Example brand reply</span>
          <p>{channel.reply}</p>
        </div>
      </div>
    </article>
  );
}

function ConversationPair() {
  return (
    <div className="social-conversation-pair">
      <div className="social-preview-label">
        <span className="social-pulse" aria-hidden="true" />
        <span>The right conversation. A useful reply.</span>
      </div>
      {socialLeadChannels.slice(0, 2).map((channel) => (
        <ConversationPreview key={channel.id} channel={channel} />
      ))}
      <p className="social-disclosure">Illustrative conversations and replies. Not live posts.</p>
    </div>
  );
}

export function SocialLeadsPreview() {
  return (
    <Section id="social-media-leads" className="social-home-section">
      <div className="social-intro-grid">
        <div className="social-intro-copy">
          <p className="eyebrow">Social media leads</p>
          <FeaturedChannels />
          <h2>Your next customer is already in the comments.</h2>
          <p className="social-lede">
            Turn Reddit and Instagram conversations into lead opportunities.
          </p>
          <p className="social-body">
            We find people asking for recommendations, comparing products, and looking for help.
            Then we create useful, relevant comments that give them a reason to discover your brand.
          </p>
          <Link to="/social-media-leads" className="button button--primary">
            <span>Explore social media leads</span>
            <span aria-hidden="true">→</span>
          </Link>
          <div className="social-more-channels">
            <span>Also on</span>
            {socialLeadChannels.slice(2).map((channel) => (
              <ChannelBadge key={channel.id} channel={channel} />
            ))}
          </div>
        </div>
        <ConversationPair />
      </div>
    </Section>
  );
}

function OpportunitySamples() {
  const [selected, setSelected] = useState('reddit');
  return (
    <Section id="social-lead-samples" className="social-samples-section">
      <SectionHeader
        eyebrow="See the opportunity"
        title="From a question to a conversation."
        copy="Explore how the approach changes across six channels. Each sample is a fictional conversation and a proposed reply, using [Brand] as a placeholder."
      />
      <div className="social-sample-filters" role="group" aria-label="Choose a sample platform">
        {socialLeadChannels.map((channel) => (
          <button
            key={channel.id}
            type="button"
            aria-pressed={selected === channel.id}
            aria-controls={`social-sample-${channel.id}`}
            onClick={() => setSelected(channel.id)}
          >
            <ChannelBadge channel={channel} />
          </button>
        ))}
      </div>
      {socialLeadChannels.map((channel) => (
        <div
          key={channel.id}
          id={`social-sample-${channel.id}`}
          className="social-sample-panel"
          hidden={selected !== channel.id}
        >
          <div className="social-sample-panel__copy">
            <span className="social-small-label">Illustrative opportunity</span>
            <h3>{channel.name}</h3>
            <p>{channel.description}</p>
            <div className="social-sample-outcome">
              <span aria-hidden="true">↗</span>
              <p>{channel.action}</p>
            </div>
          </div>
          <ConversationPreview channel={channel} />
        </div>
      ))}
      <div className="social-funnel">
        <div className="social-funnel__heading">
          <h3>A sample campaign, made visible.</h3>
          <p>Synthetic demonstration data. Not client results or a forecast.</p>
        </div>
        <ol>
          {socialLeadFunnel.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ol>
        <p className="social-funnel__note">
          An opportunity becomes a lead only when someone makes a relevant enquiry. Published
          comments and qualified leads are reported separately.
        </p>
      </div>
    </Section>
  );
}

export default function SocialMediaLeads() {
  return (
    <div className="arielos-home social-leads-page">
      <section className="social-page-hero">
        <div className="shell">
          <nav className="social-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Social media leads</span>
          </nav>
          <div className="social-intro-grid">
            <div className="social-intro-copy">
              <p className="eyebrow">Social media lead generation</p>
              <FeaturedChannels />
              <h1>Your next customer is already in the comments.</h1>
              <p className="social-lede">
                Turn Reddit and Instagram conversations into lead opportunities.
              </p>
              <p className="social-body">
                Citevia helps your brand join the conversations that matter: recommendations,
                comparisons, and questions from people looking for a solution. Start with Reddit and
                Instagram. Reach further with LinkedIn, X, YouTube, and Medium.
              </p>
              <div className="social-actions">
                <Link to="/contact" className="button button--primary">
                  <span>Discuss my campaign</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a href="#social-lead-samples" className="social-text-link">
                  Explore the samples <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <ConversationPair />
          </div>
        </div>
      </section>

      <Section className="social-channel-section">
        <SectionHeader
          eyebrow="Your audience. Their channels."
          title="Reddit + Instagram first. More ways to be discovered."
          copy="We build the channel mix around your audience, your offer, and the conversations worth joining."
        />
        <div className="social-channel-grid">
          {socialLeadChannels.map((channel, index) => (
            <article
              key={channel.id}
              className={`social-channel-card${index < 2 ? ' social-channel-card--featured' : ''}`}
            >
              <ChannelBadge channel={channel} />
              {index < 2 && <span className="social-priority">Priority channel</span>}
              <p>{channel.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="social-process-section">
        <SectionHeader
          eyebrow="How it works"
          title="Find the intent. Earn the next step."
          copy="A focused process that connects relevant conversations to useful comments and measurable enquiries."
        />
        <ol className="social-process">
          {socialLeadSteps.map((step, index) => (
            <li key={step.title}>
              <span className="social-step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <OpportunitySamples />

      <Section id="social-lead-case-studies" className="social-cases-section">
        <SectionHeader
          eyebrow="Illustrative case studies"
          title="What this could look like for your brand."
          copy="Two fictional campaign scenarios show the approach and how we would measure it. All figures below are synthetic examples, not achieved results."
        />
        <div className="social-case-grid">
          {socialLeadCases.map((study) => (
            <article key={study.id} className="social-case">
              <div className="social-case__top">
                <span>{study.sector}</span>
                <span>{study.channel}</span>
              </div>
              <span className="social-small-label">Illustrative case study · synthetic data</span>
              <h3>{study.title}</h3>
              <p>{study.challenge}</p>
              <h4>The approach</h4>
              <p>{study.approach}</p>
              <dl className="social-case__metrics">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <h4>How we would measure it</h4>
              <p>{study.measurement}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="social-report-section">
        <div className="social-report-layout">
          <div>
            <p className="eyebrow">Clear reporting</p>
            <h2>See the work. Follow the lead.</h2>
            <p>Know which conversations we chose, what was published, and what happened next.</p>
          </div>
          <ul>
            <li>
              <strong>Conversation and comment links</strong>
              <span>Review the context, approved wording, and placement status.</span>
            </li>
            <li>
              <strong>Replies, visits, and enquiries</strong>
              <span>Connect activity to website and CRM data where tracking is available.</span>
            </li>
            <li>
              <strong>What we learn next</strong>
              <span>Use buyer questions and campaign feedback to refine the approach.</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="social-faq-section">
        <SectionHeader eyebrow="Frequently asked" title="A clearer view of comment-led growth." />
        <FaqAccordion items={socialLeadFaqs} />
      </Section>

      <Section className="social-final-section">
        <div className="social-final">
          <FeaturedChannels />
          <h2>Be part of the next buying conversation.</h2>
          <p>Let’s map your audience, your channels, and the questions your brand can answer.</p>
          <Link to="/contact" className="button button--primary">
            <span>Plan my social lead campaign</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>
    </div>
  );
}
