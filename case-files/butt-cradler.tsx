// case-files/butt-cradler.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'butt-cradler',
  title: 'BUTT CRADLER 2,000',
  subtitle: 'A State of the Art Device Designed to Hug, Hold, and Fully Commit to Your Tushy Tush Tush.',
  classificationCode: 'COMM-BC-2000',
  department: 'Dept. of Involuntary Commerce & Product Disposal',
  threatLevel: 'MODERATE',
  tags: ['product advertisement', 'seating apparatus', 'special configuration available'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;700;900&display=swap');

  .bc * { box-sizing: border-box; margin: 0; padding: 0; }

  .bc {
    font-family: 'Inter', sans-serif;
    background: #0D0D0D;
    min-height: 100vh;
    color: #f0f0f0;
  }

  .emergency {
    background: #FF3A00;
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    animation: flashband 2s infinite;
  }

  @keyframes flashband {
    0%, 100% { background: #FF3A00; }
    50% { background: #CC2A00; }
  }

  .em-text {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #fff;
  }

  .em-dot { color: rgba(255,255,255,0.4); font-size: 6px; }

  .hero {
    background: #111;
    padding: 56px 32px 48px;
    text-align: center;
    border-bottom: 4px solid #FF3A00;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '🪑';
    position: absolute;
    font-size: 300px;
    opacity: 0.03;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .hero-eyebrow {
    font-size: 10px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #FF3A00;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(58px, 14vw, 110px);
    letter-spacing: 2px;
    color: #fff;
    line-height: 0.9;
    margin-bottom: 6px;
  }

  .hero-title span {
    color: #FF3A00;
    display: block;
  }

  .hero-model {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(28px, 6vw, 44px);
    letter-spacing: 8px;
    color: #333;
    margin-bottom: 24px;
  }

  .hero-tagline {
    font-size: clamp(15px, 3vw, 20px);
    font-weight: 300;
    color: #888;
    font-style: italic;
    max-width: 480px;
    margin: 0 auto 8px;
    line-height: 1.5;
  }

  .problem {
    background: #F0EBE0;
    color: #1a1a1a;
    padding: 52px 32px;
    text-align: center;
  }

  .prob-inner { max-width: 580px; margin: 0 auto; }

  .prob-tag {
    font-size: 9px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #999;
    font-weight: 700;
    margin-bottom: 18px;
  }

  .prob-question {
    font-size: clamp(18px, 4vw, 26px);
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.35;
    margin-bottom: 10px;
  }

  .prob-sub {
    font-size: 15px;
    color: #666;
    font-weight: 300;
    line-height: 1.7;
    font-style: italic;
    margin-bottom: 6px;
  }

  .ps-note {
    display: inline-block;
    background: #1a1a1a;
    color: #f0ebe0;
    font-size: 11px;
    padding: 6px 14px;
    margin-top: 14px;
    font-style: italic;
    font-weight: 300;
  }

  .reveal {
    background: #FF3A00;
    padding: 40px 32px;
    text-align: center;
  }

  .reveal-inner { max-width: 580px; margin: 0 auto; }

  .reveal-prefix {
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    font-weight: 700;
    margin-bottom: 10px;
  }

  .reveal-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(44px, 10vw, 80px);
    color: #fff;
    letter-spacing: 4px;
    line-height: 1;
    margin-bottom: 8px;
  }

  .reveal-desc {
    font-size: 16px;
    color: rgba(255,255,255,0.8);
    font-style: italic;
    font-weight: 300;
    line-height: 1.5;
  }

  .experience {
    background: #111;
    padding: 52px 32px;
  }

  .exp-inner { max-width: 640px; margin: 0 auto; }

  .exp-tag {
    font-size: 9px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #FF3A00;
    font-weight: 700;
    margin-bottom: 28px;
  }

  .handshake-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background: #222;
    margin-bottom: 28px;
  }

  .handshake-cell {
    background: #111;
    padding: 22px 20px;
  }

  .hc-word {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    letter-spacing: 2px;
    color: #fff;
    margin-bottom: 4px;
  }

  .hc-desc {
    font-size: 12px;
    color: #555;
    font-weight: 300;
    line-height: 1.5;
    font-style: italic;
  }

  .disclaimer-box {
    border: 1px solid #2a2a2a;
    border-left: 4px solid #FF3A00;
    padding: 20px 24px;
    margin: 24px 0;
    background: #0a0a0a;
  }

  .db-label {
    font-size: 8px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #FF3A00;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .db-text {
    font-size: 14px;
    color: #777;
    line-height: 1.7;
    font-weight: 300;
  }

  .db-text strong { color: #bbb; font-weight: 500; }
  .db-text em { font-style: italic; color: #999; }

  .models {
    background: #F0EBE0;
    color: #1a1a1a;
    padding: 52px 32px;
  }

  .models-inner { max-width: 640px; margin: 0 auto; }

  .models-head {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(32px, 6vw, 48px);
    letter-spacing: 2px;
    color: #1a1a1a;
    margin-bottom: 6px;
  }

  .models-sub {
    font-size: 13px;
    color: #999;
    font-weight: 300;
    font-style: italic;
    margin-bottom: 28px;
  }

  .model-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 2px;
    background: #d0c8b0;
    margin-bottom: 20px;
  }

  .model-card {
    background: #faf5ec;
    padding: 24px 18px;
    text-align: center;
  }

  .mc-icon { font-size: 32px; margin-bottom: 10px; }

  .mc-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    color: #1a1a1a;
    margin-bottom: 4px;
  }

  .mc-sub {
    font-size: 11px;
    color: #aaa;
    font-weight: 300;
    font-style: italic;
  }

  .price-row {
    display: flex;
    gap: 2px;
    background: #d0c8b0;
    margin-top: 2px;
  }

  .price-cell {
    flex: 1;
    background: #1a1a1a;
    padding: 12px;
    text-align: center;
  }

  .price-label {
    font-size: 8px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #444;
    margin-bottom: 4px;
  }

  .price-val {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    color: #FF3A00;
  }

  .cta {
    background: #FF3A00;
    padding: 52px 32px;
    text-align: center;
  }

  .cta-inner { max-width: 560px; margin: 0 auto; }

  .cta-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(36px, 8vw, 64px);
    color: #fff;
    letter-spacing: 2px;
    line-height: 1.0;
    margin-bottom: 10px;
  }

  .cta-body {
    font-size: 15px;
    color: rgba(255,255,255,0.75);
    font-weight: 300;
    font-style: italic;
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .cta-btn {
    display: inline-block;
    background: #fff;
    color: #FF3A00;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px;
    letter-spacing: 4px;
    padding: 14px 40px;
    border: none;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }

  .cta-btn:hover { background: #1a1a1a; color: #FF3A00; }

  .legal {
    background: #080808;
    padding: 20px 32px;
  }

  .legal-text {
    font-size: 9px;
    color: #2a2a2a;
    line-height: 1.8;
    letter-spacing: 0.3px;
    max-width: 640px;
    margin: 0 auto;
  }

  .legal-text strong { color: #3a3a3a; }

  @media (max-width: 480px) {
    .handshake-grid { grid-template-columns: 1fr; }
    .hero { padding: 40px 20px 36px; }
    .problem, .reveal, .experience, .models, .cta { padding: 40px 20px; }
  }
`

const handshakeItems: [string, string][] = [
  ['A Handshake', 'Firm. Confident. Professional. Your bottom greeted with the respect it deserves.'],
  ['A Firm Grasp', 'Secure. Committed. Nobody is going anywhere.'],
  ['A Gentle Cusp', 'Supportive without being dramatic about it.'],
  ['A Fine Caress', "We don't elaborate. You'll understand when it happens."],
]

const modelItems: [string, string, string][] = [
  ['🪑', 'Plush Series', 'Soft foam. Leather covered. Clouds for your cheeks.'],
  ['⚙️', 'Metal Series', 'Cold at first. Character-building. It grows on you.'],
  ['🪵', 'Wooden Series', 'Rustic. Honest. Absolutely no apologies.'],
  ['✨', 'Custom Build', 'Tell us everything. We will build it. No questions asked.'],
]

const priceItems: [string, string][] = [
  ['Entry Level', 'Cheap'],
  ['Standard', 'Reasonable'],
  ['Premium', 'Expensive'],
  ["Bespoke", "You don't ask"],
]

export default function ButtCradler() {
  return (
    <>
      <style>{styles}</style>
      <div className="bc">

        <div className="emergency">
          <span className="em-text">Breaking News</span>
          <span className="em-dot">◆</span>
          <span className="em-text">Your Butt Has Been Unsupported Long Enough</span>
          <span className="em-dot">◆</span>
          <span className="em-text">This Ends Today</span>
        </div>

        <div className="hero">
          <div className="hero-eyebrow">Humanity&apos;s Greatest Unsolved Problem. Until Now.</div>
          <div className="hero-title">
            Butt
            <span>Cradler</span>
          </div>
          <div className="hero-model">2 , 0 0 0</div>
          <div className="hero-tagline">
            A state of the art device designed to hug, hold, and fully commit to your tushy tush tush.
          </div>
        </div>

        <div className="problem">
          <div className="prob-inner">
            <div className="prob-tag">The Problem</div>
            <div className="prob-question">
              Are you tired of standing?<br />
              Bored with the rigor of having no means to rest without lying down?
            </div>
            <div className="prob-sub">
              Searching for new innovative means to put those hard working feet to rest?
            </div>
            <div className="ps-note">P.S. I don&apos;t mean kill your feet.</div>
          </div>
        </div>

        <div className="reveal">
          <div className="reveal-inner">
            <div className="reveal-prefix">The Solution Has Arrived</div>
            <div className="reveal-name">Search No More.</div>
            <div className="reveal-desc">
              This innovative new technology permits an individual to perform
              the mind-boggling act of sitting.
              Yes. I said it. Sitting.
              This foreign concept allows you to rest without lying down.
              Don&apos;t believe me? Place an order.
            </div>
          </div>
        </div>

        <div className="experience">
          <div className="exp-inner">
            <div className="exp-tag">The Experience</div>

            <div className="handshake-grid">
              {handshakeItems.map(([word, desc]) => (
                <div className="handshake-cell" key={word}>
                  <div className="hc-word">{word}</div>
                  <div className="hc-desc">{desc}</div>
                </div>
              ))}
            </div>

            <div className="disclaimer-box">
              <div className="db-label">Important Legal Notice &amp; Personal Statement</div>
              <div className="db-text">
                All of the above is <strong>entirely non-sexual.</strong> Unless, of course,
                you want it to be. You twisted freak. No judgement here.
                We can surely work something out. Contact customer service.
                Ask for the <em>Special Configuration Department.</em> They know.
                <br /><br />
                <strong>Furthermore:</strong> I will sue each and every one of you individually
                and collectively to the furthest extent permitted by law if you dare claim
                that this genius design facilitates harassment of any kind.
                It cradles. It does not harass. There is a legal distinction.
                I have a lawyer. He also owns one.
              </div>
            </div>
          </div>
        </div>

        <div className="models">
          <div className="models-inner">
            <div className="models-head">The Range</div>
            <div className="models-sub">Every bottom is different. We respect that.</div>

            <div className="model-grid">
              {modelItems.map(([icon, name, sub]) => (
                <div className="model-card" key={name}>
                  <div className="mc-icon">{icon}</div>
                  <div className="mc-name">{name}</div>
                  <div className="mc-sub">{sub}</div>
                </div>
              ))}
            </div>

            <div className="price-row">
              {priceItems.map(([label, val]) => (
                <div className="price-cell" key={label}>
                  <div className="price-label">{label}</div>
                  <div className="price-val">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cta">
          <div className="cta-inner">
            <div className="cta-title">Be First In Line.<br />Your Butt Is Waiting.</div>
            <div className="cta-body">
              To have your tushy held.<br />
              To have your ample bottom cradled.<br />
              To have your butt &mdash; finally, after all this time &mdash; caressed.<br /><br />
              I promise you&apos;ll love it.
            </div>
            <button className="cta-btn">CRADLE MY BUTT NOW</button>
          </div>
        </div>

        <div className="legal">
          <div className="legal-text">
            <strong>LEGAL DISCLAIMER:</strong> The Butt Cradler 2,000 is a seating apparatus. It is not a relationship. It is not a commitment. It will not remember your birthday. Any emotional attachment formed with the device is the sole responsibility of the owner and is not covered under the standard warranty. The manufacturer accepts no liability for existential comfort, excessive sitting, or the sudden realisation that the Butt Cradler 2,000 treats you better than most people in your life. The Special Configuration Department is a real department. Do not ask what they have seen. The wooden model does not come with a cushion. This is intentional. Character is built through discomfort. <strong>We stand by that.</strong>
          </div>
        </div>

      </div>
    </>
  )
}