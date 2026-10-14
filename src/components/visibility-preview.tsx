import { SparkIcon, ArrowIcon } from './icons';

export function VisibilityPreview() {
  return (
    <figure className="visibility-preview" aria-labelledby="preview-caption">
      <div className="preview-glow" aria-hidden="true" />
      <div className="preview-window">
        <div className="window-bar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>THE ANSWER OPPORTUNITY</span>
          <SparkIcon width={16} height={16} />
        </div>
        <div className="prompt-label">
          <span className="signal-dot" />A BUYER IS ASKING
        </div>
        <div className="preview-question">
          “Which platform is the right
          <br />
          fit for our business?”
          <span className="typing-cursor" aria-hidden="true" />
        </div>
        <div className="answer-path" aria-hidden="true">
          <span />
          <SparkIcon width={19} />
          <span />
        </div>
        <div className="answer-preview">
          <div className="answer-avatar">
            <SparkIcon width={19} />
          </div>
          <div>
            <span className="small-label">A USEFUL ANSWER STARTS WITH EVIDENCE</span>
            <p>
              The right choice depends on your needs.
              <br />
              Here’s what to consider, and where to look.
            </p>
            <div className="source-pills">
              <span>
                <i /> Clear expertise
              </span>
              <span>
                <i /> Verifiable sources
              </span>
              <span>
                <i /> Your brand
              </span>
            </div>
          </div>
        </div>
        <div className="preview-bottom">
          <span>From a question to a shortlist.</span>
          <ArrowIcon />
        </div>
      </div>
      <div className="preview-note">
        <span className="note-icon">
          <SparkIcon width={19} />
        </span>
        <div>
          <b>Be part of the answer.</b>
          <span>Useful. Discoverable. Credible.</span>
        </div>
        <span className="note-check" aria-hidden="true">
          ✓
        </span>
      </div>
      <figcaption id="preview-caption">
        Illustrative search experience. No engine endorsement implied.
      </figcaption>
    </figure>
  );
}
