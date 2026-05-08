// case-files/the-noise-outside.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'the-noise-outside',
  title: 'THE NOISE OUTSIDE',
  subtitle: 'Three Groups. One Window. A Minister Who Has Thoughts About Civilization.',
  classificationCode: 'MR-XII-4-FIC',
  department: 'Dept. of Political Satire & Civilized Animals',
  threatLevel: 'TERMINAL',
  tags: ['short fiction', 'political satire', 'severe irony'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;700&family=DM+Mono:wght@400;500&display=swap');

  .mag * { box-sizing: border-box; margin: 0; padding: 0; }

  .mag {
    font-family: 'Cormorant Garamond', serif;
    background: #F4F0E8;
    min-height: 100vh;
    color: #1a1408;
  }

  .masthead {
    border-bottom: 3px double #1a1408;
    padding: 18px 48px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    background: #f4f0e8;
  }

  .pub-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #1a1408;
  }

  .pub-meta {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    color: #8a7a50;
    text-align: right;
    line-height: 1.8;
  }

  .issue-band {
    background: #1a1408;
    padding: 7px 48px;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  .issue-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #6a5a30;
  }

  .issue-tag span { color: #b09050; }

  .hero {
    padding: 52px 48px 40px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    max-width: 860px;
    margin: 0 auto;
  }

  .section-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #9a7a40;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section-tag::after {
    content: '';
    flex: 1;
    max-width: 40px;
    height: 1px;
    background: #c8a860;
  }

  .story-title {
    font-size: clamp(44px, 9vw, 80px);
    font-weight: 300;
    line-height: 0.95;
    letter-spacing: -1px;
    margin-bottom: 8px;
    color: #1a1408;
  }

  .story-title em {
    font-style: italic;
    font-weight: 300;
  }

  .story-rule {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 20px 0;
  }

  .sr-line { height: 1px; background: #1a1408; flex: 0 0 48px; }
  .sr-diamond { font-size: 8px; color: #9a7a40; }

  .story-deck {
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
    color: #5a4a20;
    line-height: 1.5;
    max-width: 560px;
  }

  .story-layout {
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 0;
    max-width: 860px;
    margin: 0 auto;
    align-items: start;
  }

  .story-text {
    padding: 36px 40px 48px 48px;
    border-right: 1px solid rgba(0,0,0,0.1);
  }

  .dropcap-para::first-letter {
    font-family: 'Cormorant Garamond', serif;
    font-size: 64px;
    font-weight: 600;
    float: left;
    line-height: 0.78;
    margin-right: 6px;
    margin-top: 8px;
    color: #1a1408;
  }

  .para {
    font-size: 17px;
    line-height: 1.85;
    color: #1a1408;
    margin-bottom: 20px;
    font-weight: 400;
  }

  .para em { font-style: italic; }

  .para.dialogue {
    padding-left: 20px;
    border-left: 2px solid #d4b870;
    font-style: italic;
    color: #2a1a08;
    margin: 20px 0;
  }

  .para.secretary {
    padding-left: 20px;
    border-left: 2px solid #c0c0b0;
    font-style: italic;
    color: #5a5040;
    margin: 20px 0;
  }

  .speaker {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9a7a40;
    display: block;
    margin-bottom: 4px;
    font-style: normal;
  }

  .speaker.sec { color: #7a7a60; }

  .scene-break {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 28px 0;
    color: #c8a860;
    font-size: 10px;
    letter-spacing: 10px;
  }

  .minister-speech {
    background: #1a1408;
    margin: 28px 0;
    padding: 24px 28px;
  }

  .ms-tag {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #4a3a18;
    margin-bottom: 10px;
  }

  .ms-text {
    font-size: 16px;
    line-height: 1.85;
    color: #c8b888;
    font-style: italic;
  }

  .ms-text strong {
    color: #f0e0b0;
    font-style: normal;
    font-weight: 500;
  }

  .closing-line {
    font-size: 18px;
    font-style: italic;
    color: #5a4a20;
    text-align: center;
    padding: 24px 0;
    border-top: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin: 28px 0;
    line-height: 1.5;
  }

  .final-para {
    font-size: 16px;
    line-height: 1.85;
    color: #5a4a20;
    font-style: italic;
    text-align: center;
    margin-top: 20px;
  }

  .sidebar {
    padding: 36px 28px 48px 28px;
  }

  .pull-quote {
    margin-bottom: 36px;
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }

  .pull-quote:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .pq-rule { width: 28px; height: 2px; background: #c8a860; margin-bottom: 12px; }

  .pq-text {
    font-size: 15px;
    font-style: italic;
    color: #2a1808;
    line-height: 1.65;
    margin-bottom: 8px;
  }

  .pq-attr {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9a7a40;
  }

  .sidebar-note {
    background: #1a1408;
    padding: 18px;
    margin-top: 28px;
  }

  .sn-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #4a3a18;
    margin-bottom: 10px;
  }

  .sn-text {
    font-size: 13px;
    font-style: italic;
    color: #7a6a40;
    line-height: 1.65;
  }

  .mag-footer {
    background: #1a1408;
    padding: 16px 48px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    border-top: 3px solid #c8a860;
  }

  .mf-text {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    color: #3a2a10;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    .story-layout { grid-template-columns: 1fr; }
    .story-text { padding: 28px 24px; border-right: none; border-bottom: 1px solid rgba(0,0,0,0.1); }
    .sidebar { padding: 28px 24px; }
    .hero, .masthead, .issue-band, .mag-footer { padding-left: 24px; padding-right: 24px; }
  }
`

export default function TheNoiseOutside() {
  return (
    <>
      <style>{styles}</style>
      <div className="mag">

        <div className="masthead">
          <div className="pub-name">The Meridian Review</div>
          <div className="pub-meta">
            Literary Fiction &nbsp;/&nbsp; Political Satire<br />
            Volume XII &nbsp;◆&nbsp; Issue 4
          </div>
        </div>

        <div className="issue-band">
          <div className="issue-tag">Section: <span>Short Fiction</span></div>
          <div className="issue-tag">Theme: <span>The Civilized Animal</span></div>
          <div className="issue-tag">Rating: <span>Contains irony. Severe irony.</span></div>
        </div>

        <div className="hero">
          <div className="section-tag">Fiction</div>
          <div className="story-title">The Noise<br /><em>Outside</em></div>
          <div className="story-rule">
            <div className="sr-line" />
            <div className="sr-diamond">◆</div>
          </div>
          <div className="story-deck">
            Three groups. One window. A minister who has thoughts
            about civilization, and the patience of absolutely no one.
          </div>
        </div>

        <div className="story-layout">

          <div className="story-text">

            <p className="para dropcap-para">
              The office trembled with the noise of the crowd — a rolling, incoherent thunder
              of chants, drums, and slogans. Papers fluttered on the minister&apos;s desk like frightened birds.
            </p>

            <p className="para dialogue">
              <span className="speaker">The Minister</span>
              &ldquo;What&apos;s all the racket out there?&rdquo;
            </p>

            <p className="para">
              His secretary — a thin man whose spectacles always seemed too large for his face —
              stepped cautiously forward.
            </p>

            <p className="para secretary">
              <span className="speaker sec">The Secretary</span>
              &ldquo;Protesters, sir.&rdquo;
            </p>

            <p className="para dialogue">
              <span className="speaker">The Minister</span>
              &ldquo;Again? Do people have nothing better to do than weaponize their freedoms?
              What is it this time — taxes, climate, <em>feelings?</em>&rdquo;
            </p>

            <p className="para secretary">
              <span className="speaker sec">The Secretary</span>
              &ldquo;There are… several groups. One is protesting the slaughter of livestock.
              The other is <em>for</em> the slaughter of livestock. Something about tradition,
              culinary rights, and unmanly diets.&rdquo;
            </p>

            <p className="para">
              He paused mid-eye-roll.
            </p>

            <p className="para dialogue">
              <span className="speaker">The Minister</span>
              &ldquo;So they&apos;re protesting in support of slaughter? Then what on earth are they protesting <em>against?</em>&rdquo;
            </p>

            <p className="para secretary">
              <span className="speaker sec">The Secretary</span>
              &ldquo;The inefficiency of current slaughter quotas. And the third group is protesting the protests.
              Both of them. They say public demonstrations disrupt the social equilibrium.&rdquo;
            </p>

            <div className="scene-break">✦ &nbsp; ✦ &nbsp; ✦</div>

            <p className="para dialogue">
              <span className="speaker">The Minister</span>
              &ldquo;That&apos;s a logical ouroboros! A protest consuming its own tail! If you&apos;re against protests,
              you stay <em>home.</em> You don&apos;t form another damn protest!
              These people are allergic to irony!&rdquo;
            </p>

            <p className="para">
              He shot to his feet and began pacing. The secretary had the look of a man
              who had learned, through experience, precisely when not to speak.
            </p>

            <p className="para dialogue">
              <span className="speaker">The Minister</span>
              &ldquo;Draft me a bill. First clause: we outlaw the right to protest.
              Second clause: we outlaw the hippies. Every one of them.
              You love livestock so much? Go live with them.
              Let&apos;s see how long before the romance fades.&rdquo;
            </p>

            <p className="para secretary">
              <span className="speaker sec">The Secretary</span>
              &ldquo;Sir… you&apos;re talking about erasing basic rights.&rdquo;
            </p>

            <p className="para">
              The minister froze mid-step, then turned slowly, eyes gleaming
              with a cold, intellectual fire.
            </p>

            <div className="minister-speech">
              <div className="ms-tag">The minister, approaching the window</div>
              <div className="ms-text">
                &ldquo;Rights are <strong>privileges we hallucinate</strong> to feel civilized.
                Humans — apex predators with amnesia. We have clawed our way to the top of nature&apos;s chain
                only to apologize for it. Have you ever looked into the eyes of a bull before it charges?
                That&apos;s not innocence — that&apos;s raw, indifferent survival.
                And yet we call <em>ourselves</em> cruel. How absurd.&rdquo;
              </div>
            </div>

            <p className="para">
              From ten stories up, the crowd looked like a churning sea of placards
              and moral superiority. He spoke as if to himself, the protest banners
              flickering across his reflection like ghosts.
            </p>

            <div className="minister-speech">
              <div className="ms-tag">Continuing, unprompted</div>
              <div className="ms-text">
                &ldquo;Each generation grows weaker — softer, more horrified by the truths
                that birthed them. We teach our children to fear offence, to fear hunger,
                to fear even discomfort — until one day, they&apos;ll fear existing itself.
                And then <strong>nature will correct the imbalance.</strong> It always does.&rdquo;
              </div>
            </div>

            <p className="para">
              He turned back from the window, expression serene.
            </p>

            <p className="para dialogue">
              <span className="speaker">The Minister</span>
              &ldquo;Write that down. It&apos;ll make a fine preamble.&rdquo;
            </p>

            <p className="para">
              Outside, a chant broke through the glass — something about peace and unity.
              The minister closed his eyes and listened for a long moment.
            </p>

            <div className="closing-line">
              &ldquo;Peace,&rdquo; he murmured.<br />
              &ldquo;The final delusion before extinction.&rdquo;
            </div>

            <p className="para">
              The secretary said nothing. The pen didn&apos;t move.
            </p>

            <p className="final-para">
              The crowd outside cheered,<br />
              not knowing they had already lost.
            </p>

          </div>

          <div className="sidebar">

            <div className="pull-quote">
              <div className="pq-rule" />
              <div className="pq-text">
                &ldquo;That&apos;s a logical ouroboros. A protest consuming its own tail.&rdquo;
              </div>
              <div className="pq-attr">The Minister, pg. 1</div>
            </div>

            <div className="pull-quote">
              <div className="pq-rule" />
              <div className="pq-text">
                &ldquo;Rights are privileges we hallucinate to feel civilized.&rdquo;
              </div>
              <div className="pq-attr">The Minister, pg. 2</div>
            </div>

            <div className="pull-quote">
              <div className="pq-rule" />
              <div className="pq-text">
                &ldquo;It&apos;s not the beasts that frighten me. It&apos;s our denial of being beasts ourselves.&rdquo;
              </div>
              <div className="pq-attr">The Minister, pg. 2</div>
            </div>

            <div className="pull-quote">
              <div className="pq-rule" />
              <div className="pq-text">
                &ldquo;We build cathedrals of reason, walls of etiquette, illusions of compassion —
                and then collapse in horror when reality scratches the paint.&rdquo;
              </div>
              <div className="pq-attr">The Minister, pg. 3</div>
            </div>

            <div className="sidebar-note">
              <div className="sn-label">Editor&apos;s note</div>
              <div className="sn-text">
                The secretary&apos;s pen did not move for the duration of the monologue.
                This is the only recorded instance of the minister speaking
                at length without producing a single actionable document.
                He did not notice.
              </div>
            </div>

          </div>

        </div>

        <div className="mag-footer">
          <div className="mf-text">The Meridian Review &nbsp;◆&nbsp; Vol. XII</div>
          <div className="mf-text">Short Fiction &nbsp;/&nbsp; The Civilized Animal</div>
          <div className="mf-text">The crowd is still outside</div>
        </div>

      </div>
    </>
  )
}