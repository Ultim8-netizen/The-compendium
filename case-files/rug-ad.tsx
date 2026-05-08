// case-files/rug-ad.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'rug-ad',
  title: 'THE RUG. FINALLY.',
  subtitle: 'Everything You Never Knew You Did Not Want. Limited Supply. Extremely Limited Desire To Keep Them.',
  classificationCode: 'COMM-RUG-001',
  department: 'Dept. of Involuntary Commerce & Product Disposal',
  threatLevel: 'MODERATE',
  tags: ['product advertisement', 'highly flammable', 'seller in distress'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .ad * { box-sizing: border-box; margin: 0; padding: 0; }

  .ad {
    font-family: 'Archivo', sans-serif;
    background: #F2EBD9;
    min-height: 100vh;
    padding: 0 0 40px;
    background-image: repeating-linear-gradient(
      0deg, transparent, transparent 39px, rgba(0,0,0,0.04) 39px, rgba(0,0,0,0.04) 40px
    );
  }

  .ad .top-banner {
    background: #C8181A;
    padding: 10px 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .ad .banner-text {
    font-family: 'Archivo Black', sans-serif;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #fff;
  }

  .ad .banner-dot { color: rgba(255,255,255,0.4); }

  .ad .hero {
    background: #1A1A1A;
    padding: 40px 24px 32px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .ad .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg, transparent, transparent 8px,
      rgba(200,24,26,0.08) 8px, rgba(200,24,26,0.08) 9px
    );
  }

  .ad .hero > * { position: relative; z-index: 1; }

  .ad .hero-eyebrow {
    font-family: 'Archivo', sans-serif;
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #C8181A;
    margin-bottom: 16px;
  }

  .ad .hero-title {
    font-family: 'Archivo Black', sans-serif;
    font-size: clamp(48px, 10vw, 88px);
    color: #F2EBD9;
    line-height: 0.9;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 8px;
  }

  .ad .hero-title span {
    color: #C8181A;
    display: block;
  }

  .ad .hero-sub {
    font-size: 13px;
    color: #666;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 16px;
  }

  .ad .sticker {
    display: inline-block;
    background: #C8181A;
    color: #fff;
    font-family: 'Archivo Black', sans-serif;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 14px;
    margin-top: 20px;
    transform: rotate(-1deg);
  }

  .ad .body-wrap {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .ad .intro-block {
    border-left: 4px solid #C8181A;
    padding: 24px 20px;
    margin: 36px 0 0;
    background: rgba(200,24,26,0.04);
  }

  .ad .intro-text {
    font-size: 16px;
    line-height: 1.8;
    color: #1A1A1A;
    font-style: italic;
  }

  .ad .intro-text strong {
    font-style: normal;
    font-weight: 700;
    color: #C8181A;
  }

  .ad .features-head {
    font-family: 'Archivo Black', sans-serif;
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #999;
    margin: 36px 0 16px;
  }

  .ad .feature-item {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 12px;
    align-items: start;
    padding: 14px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  .ad .feature-item:last-child { border-bottom: none; }

  .ad .f-icon {
    font-size: 16px;
    padding-top: 2px;
  }

  .ad .f-title {
    font-family: 'Archivo Black', sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #1A1A1A;
    margin-bottom: 3px;
  }

  .ad .f-desc {
    font-size: 13.5px;
    line-height: 1.6;
    color: #444;
  }

  .ad .callout-box {
    background: #1A1A1A;
    padding: 24px;
    margin: 32px 0;
  }

  .ad .callout-label {
    font-family: 'Archivo Black', sans-serif;
    font-size: 9px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #C8181A;
    margin-bottom: 10px;
  }

  .ad .callout-text {
    font-size: 15px;
    line-height: 1.75;
    color: #c8c0ae;
    font-style: italic;
  }

  .ad .callout-text strong {
    color: #F2EBD9;
    font-style: normal;
  }

  .ad .testimonial {
    border: 1px solid rgba(0,0,0,0.12);
    padding: 18px 20px;
    margin: 10px 0;
    background: #faf5e8;
  }

  .ad .t-quote {
    font-size: 13.5px;
    line-height: 1.7;
    color: #1A1A1A;
    font-style: italic;
    margin-bottom: 8px;
  }

  .ad .t-name {
    font-family: 'Archivo Black', sans-serif;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #999;
  }

  .ad .t-stars {
    font-size: 12px;
    color: #C8181A;
    letter-spacing: 2px;
    margin-bottom: 6px;
  }

  .ad .cta-block {
    background: #C8181A;
    padding: 32px 24px;
    text-align: center;
    margin: 32px 0 0;
  }

  .ad .cta-head {
    font-family: 'Archivo Black', sans-serif;
    font-size: clamp(28px, 6vw, 46px);
    color: #F2EBD9;
    text-transform: uppercase;
    line-height: 1.05;
    letter-spacing: -0.5px;
    margin-bottom: 12px;
  }

  .ad .cta-sub {
    font-size: 13px;
    color: rgba(242,235,217,0.7);
    line-height: 1.6;
    margin-bottom: 20px;
    font-style: italic;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .ad .cta-button {
    display: inline-block;
    background: #F2EBD9;
    color: #C8181A;
    font-family: 'Archivo Black', sans-serif;
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 14px 32px;
    border: none;
    cursor: pointer;
  }

  .ad .disclaimer {
    background: #1A1A1A;
    padding: 16px 24px;
    margin-top: 0;
  }

  .ad .disclaimer-text {
    font-size: 9px;
    color: #555;
    line-height: 1.7;
    letter-spacing: 0.5px;
    font-family: 'Archivo', monospace;
  }

  .ad .disclaimer-text strong { color: #888; }

  .ad .price-tag {
    display: inline-block;
    border: 2px solid #C8181A;
    padding: 4px 12px;
    font-family: 'Archivo Black', sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    color: #C8181A;
    text-transform: uppercase;
    margin: 24px 0 8px;
  }

  .ad .price-big {
    font-family: 'Archivo Black', sans-serif;
    font-size: 48px;
    color: #1A1A1A;
    line-height: 1;
    letter-spacing: -1px;
  }

  .ad .price-note {
    font-size: 12px;
    color: #999;
    font-style: italic;
    margin-top: 4px;
  }

  .ad .section-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 32px 0;
  }

  .ad .sd-line { flex: 1; height: 1px; background: rgba(0,0,0,0.12); }
  .ad .sd-label {
    font-family: 'Archivo Black', sans-serif;
    font-size: 9px;
    letter-spacing: 3px;
    color: #bbb;
    text-transform: uppercase;
  }
`

const features: [string, string, string][] = [
  ['🔥', 'Highly Flammable', 'Gone are the days of a fire struggling to find purchase in your home. The rug accepts the flame warmly. Enthusiastically. It has been waiting.'],
  ['🦠', 'Premium Microbial Population', 'Housed within the fibers is a thriving and diverse ecosystem you did not ask for and cannot evict. It is rent-free. It has been there longer than you have.'],
  ['🧹', 'Maintenance: A Full-Time Occupation', 'The rug does not stay clean. Cleaning it disturbs the filth into the air, then it settles back. The process is infinite. You will vacuum it for the rest of your life and owe it nothing.'],
  ['💸', 'A Pit For Your Money', 'Expensive to buy. Expensive to clean. Expensive to replace. When it wears out it does not leave. It becomes a different, worse rug. You will spend money on it until one of you is gone.'],
  ['👁️', 'Aesthetically Questionable', 'It is on the floor. You walk on it. It looks like something you walk on. It adds nothing to any room it occupies. The room was fine. The rug arrived anyway.'],
  ['🏛️', "Government Fire Safety: A Known Fiction", 'Fire safety regulations were invented to keep you buying smoke alarms and extinguishers. The rug knows this. The rug is not afraid of your smoke alarm.'],
]

const testimonials: [string, string, string][] = [
  ['★★☆☆☆', 'It is on my floor now. That is where it lives. I walk around it when I can and across it when I cannot. We do not have a relationship but we do have an arrangement.', 'M.O., reluctant homeowner'],
  ['★☆☆☆☆', 'I vacuumed it four times this week. It looks exactly the same. I believe it is producing the dirt independently. I have no proof. I have a theory.', 'T.K., currently kneeling beside it with a lint roller'],
  ['★★★☆☆', 'It caught fire remarkably fast. I was impressed against my will. Three stars because at least it committed.', 'Name withheld for insurance reasons'],
]

export default function RugAd() {
  return (
    <>
      <style>{styles}</style>
      <div className="ad">

        <div className="top-banner">
          <span className="banner-text">Limited Supply</span>
          <span className="banner-dot">◆</span>
          <span className="banner-text">Extremely Limited Desire To Keep Them</span>
          <span className="banner-dot">◆</span>
          <span className="banner-text">Order Now. Please.</span>
        </div>

        <div className="hero">
          <div className="hero-eyebrow">A Revolutionary Product Announcement</div>
          <div className="hero-title">
            The Rug.
            <span>Finally.</span>
          </div>
          <div className="hero-sub">Everything You Never Knew You Didn&apos;t Want</div>
          <div className="sticker">★ It Practically Sells Itself ★</div>
        </div>

        <div className="body-wrap">

          <div className="intro-block">
            <div className="intro-text">
              Has it ever bothered you that your home is <strong>not flammable enough?</strong> Are you kept awake at
              night by the stress of your house being too flame retardant? Do you lie in bed, staring at the ceiling,
              thinking: something is missing? Something <strong>fibrous. Something hostile.</strong>
              Something that costs more than it should and gives back less than you deserve?
              <br /><br />
              Worry no more.
            </div>
          </div>

          <div className="section-divider">
            <div className="sd-line" />
            <div className="sd-label">Product Features</div>
            <div className="sd-line" />
          </div>

          <div className="features-head">What you are getting</div>

          {features.map(([icon, title, desc]) => (
            <div className="feature-item" key={title}>
              <div className="f-icon">{icon}</div>
              <div>
                <div className="f-title">{title}</div>
                <div className="f-desc">{desc}</div>
              </div>
            </div>
          ))}

          <div className="callout-box">
            <div className="callout-label">A personal note from the seller</div>
            <div className="callout-text">
              I have been in possession of these rugs for <strong>longer than I am willing to admit.</strong>
              Every morning I wake up and they are still here. I have tried everything.
              I offered them to family. Family declined.
              I put them in storage. Storage filled up. They are back.
              <br /><br />
              I am offering them to you now at a price I am <strong>not proud of</strong> because the alternative
              is living with them indefinitely and I simply will not do it.
              Take as many as you want.
              Take more than you want.
              <strong> I cannot stand the sight of these things.</strong>
            </div>
          </div>

          <div className="section-divider">
            <div className="sd-line" />
            <div className="sd-label">Verified Reviews</div>
            <div className="sd-line" />
          </div>

          {testimonials.map(([stars, quote, name]) => (
            <div className="testimonial" key={name}>
              <div className="t-stars">{stars}</div>
              <div className="t-quote">&ldquo;{quote}&rdquo;</div>
              <div className="t-name">{name}</div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <div className="price-tag">Today&apos;s Price</div>
            <div className="price-big">Too Much</div>
            <div className="price-note">and yet here we are</div>
          </div>

        </div>

        <div className="cta-block">
          <div className="cta-head">Come right up.<br />Place an order.</div>
          <div className="cta-sub">
            Take as much as you want. Take more than seems reasonable.
            I am not setting a limit. There is no limit.
            The only limit is your willingness and frankly I am counting on it.
          </div>
          <button className="cta-button">TAKE THESE OFF MY HANDS</button>
        </div>

        <div className="disclaimer">
          <div className="disclaimer-text">
            <strong>NOTICE:</strong> The seller accepts no responsibility for microbiological developments, structural fire damage, vacuum-related emotional fatigue, or the gradual erosion of the will to clean. The claim that fire is a government conspiracy is included as a courtesy to the rug and does not reflect the views of this publication, any regulatory body, or basic physics. Flammability is a feature, not a defect. All reviews are real. None of the reviewers are okay. <strong>Offer valid until stock is gone or the seller moves countries, whichever comes first.</strong>
          </div>
        </div>

      </div>
    </>
  )
}