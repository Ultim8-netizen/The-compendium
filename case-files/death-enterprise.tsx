// case-files/death-enterprise.tsx
import type { CaseFileMeta } from './_registry'

export const meta: CaseFileMeta = {
  slug: 'death-enterprise',
  title: 'DEATH ENTERPRISE',
  subtitle: 'A Once in a Lifetime Experience. We Are Very Precise About That Wording.',
  classificationCode: 'DE-EST-INF',
  department: 'Dept. of Eternal & Irrevocable Services',
  threatLevel: 'TERMINAL',
  tags: ['hospitality', 'spa services', 'zero negative reviews'],
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  .de * { box-sizing: border-box; margin: 0; padding: 0; }

  .de {
    font-family: 'DM Sans', sans-serif;
    background: #F5F2EC;
    min-height: 100vh;
    color: #1a1a1a;
  }

  .nav {
    padding: 18px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    background: #faf8f4;
    flex-wrap: wrap;
    gap: 10px;
  }

  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #1a1a1a;
  }

  .nav-logo span { color: #7a9a60; }

  .nav-links {
    display: flex;
    gap: 28px;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #888;
    font-weight: 500;
    flex-wrap: wrap;
  }

  .nav-cta {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: #1a1a1a;
    color: #f5f2ec;
    padding: 8px 18px;
    font-weight: 500;
    cursor: pointer;
  }

  .hero {
    background: #111;
    padding: 80px 40px 72px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 50%, rgba(100,140,70,0.08) 0%, transparent 60%),
      radial-gradient(ellipse at 70% 50%, rgba(100,140,70,0.06) 0%, transparent 60%);
  }

  .hero > * { position: relative; z-index: 1; }

  .hero-tag {
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #7a9a60;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(52px, 11vw, 96px);
    font-weight: 300;
    color: #f5f2ec;
    line-height: 0.95;
    letter-spacing: -1px;
    margin-bottom: 6px;
  }

  .hero-title em {
    font-style: italic;
    color: #7a9a60;
  }

  .hero-rule {
    width: 1px;
    height: 48px;
    background: #2a2a2a;
    margin: 24px auto;
  }

  .hero-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(16px, 3vw, 22px);
    font-weight: 300;
    font-style: italic;
    color: #888;
    max-width: 480px;
    margin: 0 auto 12px;
    line-height: 1.5;
  }

  .hero-sub {
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #444;
    font-weight: 500;
  }

  .intro-band {
    background: #7a9a60;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .intro-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
  }

  .pill-dot {
    width: 4px;
    height: 4px;
    background: rgba(255,255,255,0.4);
    border-radius: 50%;
  }

  .section {
    padding: 64px 40px;
    max-width: 860px;
    margin: 0 auto;
  }

  .section-eyebrow {
    font-size: 9px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #7a9a60;
    margin-bottom: 12px;
    font-weight: 500;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(28px, 5vw, 44px);
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
  }

  .section-body {
    font-size: 15px;
    line-height: 1.85;
    color: #4a4540;
    font-weight: 300;
    max-width: 560px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2px;
    background: #e0dcd0;
    border: 2px solid #e0dcd0;
    margin-top: 40px;
  }

  .service-card {
    background: #faf8f4;
    padding: 32px 28px;
  }

  .service-card:first-child {
    grid-column: 1 / -1;
    background: #111;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
  }

  .service-icon {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .service-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  .service-card:first-child .service-name {
    font-size: 28px;
    color: #f5f2ec;
  }

  .service-desc {
    font-size: 13.5px;
    line-height: 1.7;
    color: #5a5550;
    font-weight: 300;
  }

  .service-card:first-child .service-desc {
    color: #888;
  }

  .service-tag {
    display: inline-block;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #7a9a60;
    border: 1px solid #7a9a60;
    padding: 3px 8px;
    margin-top: 14px;
    font-weight: 500;
  }

  .service-card:first-child .service-tag { color: #7a9a60; border-color: #3a4a2a; }

  .schedule-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #1e2a14;
    padding: 32px;
    border: 1px solid #2a3a1a;
  }

  .badge-day {
    font-family: 'Cormorant Garamond', serif;
    font-size: 56px;
    font-weight: 300;
    color: #7a9a60;
    line-height: 1;
    margin-bottom: 6px;
  }

  .badge-label {
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #4a5a3a;
    font-weight: 500;
    line-height: 1.6;
  }

  .divider {
    height: 1px;
    background: rgba(0,0,0,0.08);
    max-width: 860px;
    margin: 0 auto;
  }

  .reviews-section {
    background: #111;
    padding: 64px 40px;
  }

  .reviews-inner {
    max-width: 860px;
    margin: 0 auto;
  }

  .reviews-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 36px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .reviews-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 400;
    color: #f5f2ec;
    line-height: 1.1;
  }

  .review-count {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3a3a3a;
    font-weight: 500;
  }

  .review-empty {
    border: 1px solid #1e1e1e;
    padding: 40px;
    text-align: center;
  }

  .empty-icon {
    font-size: 32px;
    margin-bottom: 14px;
    opacity: 0.3;
  }

  .empty-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 300;
    color: #555;
    margin-bottom: 8px;
  }

  .empty-sub {
    font-size: 12px;
    color: #333;
    line-height: 1.65;
    font-weight: 300;
  }

  .rating-display {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    justify-content: center;
  }

  .stars {
    font-size: 14px;
    letter-spacing: 3px;
    color: #7a9a60;
  }

  .rating-note {
    font-size: 10px;
    color: #444;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .booking {
    background: #7a9a60;
    padding: 64px 40px;
    text-align: center;
  }

  .booking-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(32px, 6vw, 56px);
    font-weight: 300;
    font-style: italic;
    color: #fff;
    line-height: 1.1;
    margin-bottom: 12px;
  }

  .booking-sub {
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    font-weight: 300;
    margin-bottom: 28px;
    line-height: 1.6;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .booking-btn {
    display: inline-block;
    background: #fff;
    color: #1a1a1a;
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    padding: 14px 36px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
  }

  .booking-footnote {
    font-size: 10px;
    color: rgba(255,255,255,0.4);
    margin-top: 16px;
    letter-spacing: 1px;
    font-style: italic;
  }

  .footer {
    background: #0d0d0d;
    padding: 24px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }

  .footer-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #3a3a3a;
  }

  .footer-logo span { color: #4a6a30; }

  .footer-copy {
    font-size: 10px;
    color: #2a2a2a;
    letter-spacing: 1px;
    font-weight: 300;
  }

  .footer-disclaimer {
    font-size: 9px;
    color: #1e1e1e;
    text-align: center;
    padding: 12px 40px;
    background: #0a0a0a;
    line-height: 1.7;
    letter-spacing: 0.3px;
  }
`

export default function DeathEnterprise() {
  return (
    <>
      <style>{styles}</style>
      <div className="de">

        <nav className="nav">
          <div className="nav-logo">Death <span>Enterprise</span></div>
          <div className="nav-links">
            <span>Services</span>
            <span>Spa</span>
            <span>Wednesday</span>
            <span>Reviews</span>
          </div>
          <div className="nav-cta">Book Now</div>
        </nav>

        <div className="hero">
          <div className="hero-tag">A Once in a Lifetime Experience</div>
          <div className="hero-title">
            Death<br /><em>Enterprise</em>
          </div>
          <div className="hero-rule" />
          <div className="hero-tagline">
            Tired of the everyday tediousness of life? Looking for an escape from the rigors of living?
          </div>
          <div className="hero-sub">Search no more. We&apos;ve got you covered.</div>
        </div>

        <div className="intro-band">
          <div className="intro-pill">✦ <span>Eternal Rest Guaranteed</span></div>
          <div className="pill-dot" />
          <div className="intro-pill">✦ <span>Zero Negative Reviews. Ever.</span></div>
          <div className="pill-dot" />
          <div className="intro-pill">✦ <span>The Service is to Die For</span></div>
        </div>

        <div className="section">
          <div className="section-eyebrow">Our Philosophy</div>
          <div className="section-title">
            A destination for those<br />ready to move on.
          </div>
          <div className="section-body">
            At Death Enterprise, we believe that the transition from life to whatever comes next should be handled with the same care, attention, and premium experience you would expect from any world-class retreat. We have been perfecting the art of the final departure since the beginning. You could say it is our calling.
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-eyebrow">Our Services</div>
          <div className="section-title">All-inclusive. All quality.</div>

          <div className="services-grid">

            <div className="service-card">
              <div>
                <div className="service-name">The Complimentary Spa</div>
                <div className="service-desc">
                  Just touring the vicinity? Step into our signature spa experience and let everything go.
                  We mean everything. Our eternal rest treatment is the most thorough relaxation service
                  available on this plane of existence. Check in anytime.
                  Checking out is, of course, a different matter.
                </div>
                <div className="service-tag">Complimentary with all visits</div>
              </div>
              <div className="schedule-badge">
                <div className="badge-day">∞</div>
                <div className="badge-label">Available<br />at all times<br />without exception</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">⚰</div>
              <div className="service-name">The Wednesday Challenge</div>
              <div className="service-desc">
                Visit every Wednesday for our beloved weekly Dig Your Own Grave Challenge.
                Build those muscles. Get that tan. Enjoy the fresh air and the meditative
                rhythm of purposeful labor. The hole will be exactly your size.
                We measure in advance.
              </div>
              <div className="service-tag">Every Wednesday, dawn to dusk</div>
            </div>

            <div className="service-card">
              <div className="service-icon">🌿</div>
              <div className="service-name">Strength &amp; Conditioning</div>
              <div className="service-desc">
                Our strength building program pairs beautifully with the Wednesday Challenge.
                Upper body. Lower body. Core. The kind of workout that leaves you
                genuinely finished. We have never had a complaint about the intensity.
                We have never had a complaint about anything, actually.
              </div>
              <div className="service-tag">Included in all packages</div>
            </div>

            <div className="service-card">
              <div className="service-icon">☀</div>
              <div className="service-name">The Tan</div>
              <div className="service-desc">
                Spend meaningful time outdoors under our open sky.
                You will leave with color in your skin, soil on your hands,
                and a general sense of having done something irreversible.
                Our outdoor program is unmatched. Literally unmatched.
                There is nothing else like it anywhere.
              </div>
              <div className="service-tag">Seasonal availability: always</div>
            </div>

          </div>
        </div>

        <div className="divider" />

        <div className="reviews-section">
          <div className="reviews-inner">
            <div className="reviews-head">
              <div className="reviews-title">
                What our guests<br />have to say.
              </div>
              <div className="review-count">0 reviews on file</div>
            </div>

            <div className="review-empty">
              <div className="empty-icon">✦</div>
              <div className="empty-title">No reviews at this time.</div>
              <div className="empty-sub">
                Our guests have not submitted feedback.<br />
                Our guests have not submitted anything.<br />
                Our guests are, in the most complete sense of the word, unavailable.
              </div>
              <div className="rating-display">
                <div className="stars">★★★★★</div>
                <div className="rating-note">Inferred from the silence</div>
              </div>
            </div>
          </div>
        </div>

        <div className="booking">
          <div className="booking-title">
            Come right up.<br />We are always open.
          </div>
          <div className="booking-sub">
            No appointment necessary. No deposit required. No return journey to plan.
            Simply arrive. We handle everything from there.
          </div>
          <button className="booking-btn">Reserve Your Experience</button>
          <div className="booking-footnote">
            A once in a lifetime experience. We are very precise about that particular wording.
          </div>
        </div>

        <div className="footer">
          <div className="footer-logo">Death <span>Enterprise</span></div>
          <div className="footer-copy">All quality services. No refunds. No returns.</div>
          <div className="footer-copy">Est. The Beginning</div>
        </div>

        <div className="footer-disclaimer">
          Death Enterprise accepts no liability for premature or accidental bookings, the emotional state of surviving family members, or the existential unease this brochure may have caused. The Wednesday Challenge is a licensed fitness program. The spa is complimentary in both senses of the word. We have never received a negative review because the review system requires a living reviewer and we have been consistently thorough in our work. Thank you for your interest. We will see you eventually.
        </div>

      </div>
    </>
  )
}