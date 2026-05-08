// case-files/the-vision.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'the-vision',
  title: 'INCIDENT REPORT: THE CROC SIGHTING',
  subtitle: 'A Witnessed Beauty. A Revoked Assessment. A Case Closed.',
  classificationCode: 'DVA-009-FTW',
  department: 'Dept. of Romantic Threat Assessment',
  threatLevel: 'LOW',
  tags: ['field incident', 'assessment revoked', 'footwear'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,600&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap');

  .mono * { box-sizing: border-box; margin: 0; padding: 0; }

  .mono {
    min-height: 100vh;
    background: #F7F1E8;
  }

  .part-one {
    background: linear-gradient(160deg, #fdf6e8 0%, #f5ede0 100%);
    padding: 64px 40px 56px;
    position: relative;
    overflow: hidden;
  }

  .part-one::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 280px; height: 280px;
    background: radial-gradient(circle, rgba(180,140,100,0.08) 0%, transparent 70%);
    border-radius: 50%;
  }

  .part-one::after {
    content: '';
    position: absolute;
    bottom: -40px; left: -40px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(180,140,100,0.06) 0%, transparent 70%);
    border-radius: 50%;
  }

  .p1-inner {
    max-width: 580px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .p1-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #c0a070;
    margin-bottom: 24px;
    text-align: center;
  }

  .ornament {
    text-align: center;
    font-size: 18px;
    color: #d4b090;
    letter-spacing: 16px;
    margin-bottom: 28px;
    opacity: 0.6;
  }

  .p1-opener {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(28px, 6vw, 46px);
    font-weight: 300;
    font-style: italic;
    color: #2a1808;
    line-height: 1.15;
    text-align: center;
    margin-bottom: 36px;
    letter-spacing: -0.5px;
  }

  .p1-rule {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 32px;
  }

  .p1-rule-line { flex: 1; height: 1px; background: rgba(180,140,100,0.3); }
  .p1-rule-dot { color: #d4b090; font-size: 8px; }

  .stanza {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 400;
    color: #2a1808;
    line-height: 1.9;
    margin-bottom: 28px;
  }

  .stanza em {
    font-style: italic;
    color: #7a4820;
  }

  .stanza strong {
    font-weight: 600;
  }

  .pull {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(20px, 4vw, 28px);
    font-style: italic;
    font-weight: 300;
    color: #8a5830;
    text-align: center;
    padding: 20px 0;
    line-height: 1.4;
    border-top: 1px solid rgba(180,140,100,0.2);
    border-bottom: 1px solid rgba(180,140,100,0.2);
    margin: 28px 0;
  }

  .declaration {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(22px, 5vw, 34px);
    font-weight: 600;
    font-style: italic;
    color: #2a1808;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 4px;
    line-height: 1.25;
  }

  .declaration-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    font-style: italic;
    color: #b08060;
    text-align: center;
    margin-bottom: 0;
  }

  .crack {
    background: #1a1a1a;
    padding: 0;
    position: relative;
    overflow: hidden;
  }

  .crack-inner {
    padding: 28px 40px;
    max-width: 580px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .crack-line-1 {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2px;
    color: #3a3a3a;
    text-transform: uppercase;
  }

  .crack-line-2 {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(22px, 5vw, 36px);
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
  }

  .crack-line-2 span { color: #e8a030; }

  .part-two {
    background: #F0EBE0;
    padding: 48px 40px 56px;
    border-top: 3px solid #1a1a1a;
  }

  .p2-inner {
    max-width: 580px;
    margin: 0 auto;
  }

  .p2-tag {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #aaa;
    margin-bottom: 20px;
  }

  .nausea-level {
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 24px;
    border: 1px solid #ddd;
    overflow: hidden;
  }

  .nausea-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    background: #1a1a1a;
    padding: 8px 14px;
    flex-shrink: 0;
    border-right: 1px solid #333;
  }

  .nausea-bar {
    flex: 1;
    height: 36px;
    background: #f0ebe0;
    position: relative;
    overflow: hidden;
  }

  .nausea-fill {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    background: linear-gradient(90deg, #e8a030, #e83020);
    width: 97%;
  }

  .nausea-pct {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #fff;
    font-weight: 500;
    z-index: 1;
  }

  .verdict-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background: #ddd;
    margin-bottom: 24px;
  }

  .verdict-cell {
    background: #faf7f2;
    padding: 16px 18px;
  }

  .vc-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #aaa;
    margin-bottom: 6px;
  }

  .vc-value {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #1a1a1a;
    line-height: 1.5;
    font-weight: 400;
  }

  .vc-value.strike {
    text-decoration: line-through;
    color: #bbb;
  }

  .vc-value.red { color: #c82010; font-weight: 700; }

  .final-statement {
    background: #1a1a1a;
    padding: 24px;
    margin-bottom: 24px;
  }

  .fs-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #444;
    margin-bottom: 10px;
  }

  .fs-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-style: italic;
    color: #888;
    line-height: 1.7;
  }

  .fs-text strong { color: #ddd; font-style: normal; }

  .closing-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
  }

  .closing-note {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #bbb;
    letter-spacing: 1px;
  }

  .croc-verdict {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #c82010;
    border: 2px solid #c82010;
    padding: 6px 14px;
    transform: rotate(-1deg);
    display: inline-block;
  }

  @media (max-width: 480px) {
    .part-one, .part-two { padding: 48px 24px 40px; }
    .crack-inner { padding: 24px; }
    .verdict-grid { grid-template-columns: 1fr; }
  }
`

export default function TheVision() {
  return (
    <>
      <style>{styles}</style>
      <div className="mono">

        <div className="part-one">
          <div className="p1-inner">
            <div className="p1-eyebrow">A Personal Account, Recorded In Real Time</div>
            <div className="ornament">✦ &nbsp; ✦ &nbsp; ✦</div>

            <div className="p1-opener">
              I just saw an angel.
            </div>

            <div className="p1-rule">
              <div className="p1-rule-line" />
              <div className="p1-rule-dot">◆</div>
              <div className="p1-rule-line" />
            </div>

            <div className="stanza">
              A rubenesque beauty, swaddled in the soft cradle of nature&apos;s calming glow.
              Her hair falls over her back in <em>flowing black locks</em>,
              her eyes soft and inviting, promising dreams and pleasure,
              a glint of mischief dancing in their depths.
            </div>

            <div className="stanza">
              Her luscious lips curve in a soft, teasing smile.
              Her generous smile puts the cutest babies to shame.
              Not a comparison made lightly. It holds.
            </div>

            <div className="pull">
              &ldquo;An angel in rich brown skin,<br />
              like <em>hot chocolate with a dash of milk.</em><br />
              A beautiful praise to nature&apos;s gifts.&rdquo;
            </div>

            <div className="stanza">
              Her complexion alone is an argument. A closing argument.
              The kind that leaves the courtroom quiet,
              the kind that wins without appeal.
            </div>

            <div className="declaration">By God. She&apos;s perfect.</div>
            <div className="declaration-sub">I am going to speak to her.</div>
          </div>
        </div>

        <div className="crack">
          <div className="crack-inner">
            <div className="crack-line-1">Transmission interrupted</div>
            <div className="crack-line-2">Wait.<br />Is she wearing <span>Crocs?</span></div>
          </div>
        </div>

        <div className="part-two">
          <div className="p2-inner">

            <div className="p2-tag">Post-sighting assessment &nbsp;&mdash;&nbsp; Immediate revision</div>

            <div className="nausea-level">
              <div className="nausea-label">Nausea Index</div>
              <div className="nausea-bar">
                <div className="nausea-fill" />
                <div className="nausea-pct">97%</div>
              </div>
            </div>

            <div className="verdict-grid">
              <div className="verdict-cell">
                <div className="vc-label">Eyes</div>
                <div className="vc-value strike">Soft. Inviting. Promising.</div>
              </div>
              <div className="verdict-cell">
                <div className="vc-label">Hair</div>
                <div className="vc-value strike">Flowing black locks.</div>
              </div>
              <div className="verdict-cell">
                <div className="vc-label">Smile</div>
                <div className="vc-value strike">Puts babies to shame.</div>
              </div>
              <div className="verdict-cell">
                <div className="vc-label">Complexion</div>
                <div className="vc-value strike">Nature&apos;s finest argument.</div>
              </div>
              <div className="verdict-cell">
                <div className="vc-label">Overall status</div>
                <div className="vc-value red">Revoked.</div>
              </div>
              <div className="verdict-cell">
                <div className="vc-label">Approach: will I?</div>
                <div className="vc-value red">Absolutely not.</div>
              </div>
            </div>

            <div className="final-statement">
              <div className="fs-label">Official Position</div>
              <div className="fs-text">
                She was, until approximately forty seconds ago, the most beautiful person
                I have ever seen in my life. A sincere and unexaggerated statement.
                <strong> She is wearing Crocs.</strong> Two of them.
                On purpose. In public. In the same vicinity as the rest of us.
                I think I am going to be unwell.
                <strong> There is no way in hell I am talking to that thing.</strong>
              </div>
            </div>

            <div className="closing-row">
              <div className="closing-note">
                Sighting logged &nbsp;/&nbsp; Approach: abandoned &nbsp;/&nbsp; Reason: footwear
              </div>
              <div className="croc-verdict">Case Closed</div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}