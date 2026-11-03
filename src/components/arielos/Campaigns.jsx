'use client';

import { Link } from './Link.jsx';
import { FaqAccordion, Section, SectionHeader } from './UI.jsx';
import { SocialChannelIcon } from './SocialMediaLeads.jsx';
import {
  campaignIntro,
  campaignChannels,
  campaignSteps,
  campaignDeliverables,
  campaignFaqs,
} from '@/content/campaigns';

function ChannelIcon({ id }) {
  if (['reddit', 'instagram', 'linkedin', 'youtube'].includes(id)) {
    return <SocialChannelIcon id={id} />;
  }
  const props = { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true };
  if (id === 'facebook') {
    return (
      <svg {...props}>
        <path d="M14 22v-9h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9Z" />
      </svg>
    );
  }
  if (id === 'tiktok') {
    return (
      <svg {...props}>
        <path d="M14 2h3c.4 2.5 1.8 4 4 4.4v3.2a10 10 0 0 1-4-1.3V16a6 6 0 1 1-6-6h1v3.3a3 3 0 1 0 2 2.7Z" />
      </svg>
    );
  }
  if (id === 'google') {
    return (
      <svg {...props}>
        <path d="M21.6 12.2c0-.7-.1-1.4-.2-2.2H12v4h5.4a4.6 4.6 0 0 1-2 3 5.8 5.8 0 1 1 .1-9.9l3-2.9A10 10 0 1 0 22 12.2Z" />
      </svg>
    );
  }
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round">
      <path d="M12 3a4 4 0 0 1 6.5 2.8A4 4 0 0 1 21 12a4 4 0 0 1-2.5 6.2A4 4 0 0 1 12 21a4 4 0 0 1-6.5-2.8A4 4 0 0 1 3 12a4 4 0 0 1 2.5-6.2A4 4 0 0 1 12 3Z" />
      <path d="m12 3 6.5 3.8v7.5L12 18l-6.5-3.7V6.8L12 3Zm0 3-6.5 3.8 6.5 3.7 6.5-3.7M12 13.5V21" />
    </svg>
  );
}

function ChannelName({ channel }) {
  return (
    <span className={`campaign-channel-name campaign-channel-name--${channel.id}`}>
      <span className="campaign-channel-icon">
        <ChannelIcon id={channel.id} />
      </span>
      <span>
        {channel.name}
        {channel.owner && <small>{channel.owner}</small>}
      </span>
    </span>
  );
}

function ChannelBoard() {
  return (
    <div className="campaign-board">
      <p className="campaign-board__eyebrow">One strategy. The right channels.</p>
      <ul className="campaign-board__channels" aria-label="Campaign platforms">
        {campaignChannels.map((channel) => (
          <li key={channel.id}>
            <ChannelName channel={channel} />
          </li>
        ))}
      </ul>
      <div className="campaign-board__footer">
        <span>Strategy</span>
        <span>Creative</span>
        <span>Media</span>
        <span>Measurement</span>
      </div>
    </div>
  );
}

export function CampaignsPreview() {
  return (
    <Section id="campaigns" className="campaign-home-section">
      <div className="campaign-intro-grid">
        <div className="campaign-intro-copy">
          <p className="eyebrow">Campaign strategy &amp; management</p>
          <h2>
            {campaignIntro.heading} <em>{campaignIntro.emphasis}</em>
          </h2>
          <p className="campaign-lede">{campaignIntro.copy}</p>
          <Link to="/campaigns" className="button button--primary">
            <span>Explore our campaigns</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ChannelBoard />
      </div>
    </Section>
  );
}

export default function Campaigns() {
  return (
    <div className="arielos-home campaigns-page">
      <Section className="campaign-page-hero">
        <nav className="social-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Campaigns</span>
        </nav>
        <div className="campaign-intro-grid">
          <div className="campaign-intro-copy">
            <p className="eyebrow">Campaign strategy &amp; management</p>
            <h1>
              {campaignIntro.heading} <em>{campaignIntro.emphasis}</em>
            </h1>
            <p className="campaign-lede">{campaignIntro.copy}</p>
            <div className="campaign-actions">
              <Link to="/contact" className="button button--primary">
                <span>Plan my campaign</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a href="#campaign-channels" className="campaign-text-link">
                <span>Find your channels</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <ChannelBoard />
        </div>
      </Section>

      <Section id="campaign-channels">
        <SectionHeader
          eyebrow="Built for each platform"
          title="Your audience is out there. Let’s reach them."
          copy="A consistent strategy, with creative and execution shaped for each channel. We recommend the mix that fits your audience and your goals."
        />
        <div className="campaign-channel-grid">
          {campaignChannels.map((channel, index) => (
            <article key={channel.id} className="campaign-channel-card">
              <div className="campaign-channel-card__top">
                <ChannelName channel={channel} />
                <span className="campaign-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3>{channel.role}</h3>
              <p>{channel.description}</p>
              <span className="campaign-formats">{channel.formats}</span>
              {channel.note && (
                <p className="campaign-availability">
                  {channel.note}{' '}
                  <a href="https://ads.openai.com/">
                    ChatGPT Ads <span aria-hidden="true">↗</span>
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
        <p className="campaign-channel-note">
          The final channel mix and ad formats depend on your objectives, audience, account
          eligibility, and market availability.
        </p>
      </Section>

      <Section className="campaign-process-section">
        <SectionHeader
          eyebrow="From plan to performance"
          title="One team, from the first idea to the next decision."
        />
        <ol className="campaign-process">
          {campaignSteps.map((step, index) => (
            <li key={step.title}>
              <span className="campaign-step-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader eyebrow="What we bring" title="More than a media buy." />
        <div className="campaign-deliverables">
          {campaignDeliverables.map((item) => (
            <article key={item.title}>
              <span aria-hidden="true">↗</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="campaign-related">
          <p>Connect your campaigns with the rest of your growth strategy.</p>
          <Link to="/services/aeo">
            Explore AI visibility <span aria-hidden="true">→</span>
          </Link>
          <Link to="/social-media-leads">
            Explore social media leads <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section className="campaign-faq-section">
        <SectionHeader eyebrow="Campaign questions" title="A few things to know before we start." />
        <FaqAccordion items={campaignFaqs} idPrefix="campaign-faq" />
      </Section>

      <Section className="campaign-final-section">
        <div className="campaign-final">
          <p className="eyebrow">Let’s build your next campaign</p>
          <h2>
            Right audience. Clear message.
            <br />
            <em>A reason to act.</em>
          </h2>
          <p>
            Tell us what you want to grow. We’ll help you find the channels, creative, and campaign
            plan to get started.
          </p>
          <Link to="/contact" className="button button--primary">
            <span>Plan my campaign</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>
    </div>
  );
}
