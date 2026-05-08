import Link from 'next/link'
import { CASE_FILES } from '@/case-files/_registry'

export default function LandingPage() {
  return (
    <>
      <style>{`

        /* ── keyframes ─────────────────────────────────────────── */

        @keyframes gold-sweep {
          0%   { left: -55%; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 130%; opacity: 0; }
        }

        @keyframes gold-sweep-fine {
          0%   { left: -55%; opacity: 0; }
          8%   { opacity: 0.7; }
          92%  { opacity: 0.7; }
          100% { left: 130%; opacity: 0; }
        }

        @keyframes diamond-pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }

        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,148,26,0); }
          50%       { box-shadow: 0 0 28px 4px rgba(200,148,26,0.25); }
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── root surface ───────────────────────────────────────── */

        .lp-root {
          min-height: 100dvh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          /* layered gold depth */
          background:
            radial-gradient(ellipse at 50% 38%, rgba(200,148,26,0.28) 0%, transparent 58%),
            radial-gradient(ellipse at 18% 82%, rgba(160,100,10,0.12) 0%, transparent 38%),
            radial-gradient(ellipse at 82% 18%, rgba(220,180,30,0.10) 0%, transparent 38%),
            linear-gradient(158deg, #0e0900 0%, #1c1300 28%, #160f00 55%, #0a0700 100%);
        }

        /* brushed-metal grain — fine horizontal striations */
        .lp-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(200,148,26,0.011) 3px,
            rgba(200,148,26,0.011) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ── rolling glint ──────────────────────────────────────── */

        .lp-glint {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        /* broad soft beam */
        .lp-glint::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -55%;
          width: 40%;
          height: 140%;
          background: linear-gradient(
            90deg,
            transparent          0%,
            rgba(255,250,180,0.04) 25%,
            rgba(255,252,200,0.12) 46%,
            rgba(255,255,240,0.22) 50%,
            rgba(255,252,200,0.12) 54%,
            rgba(255,250,180,0.04) 75%,
            transparent          100%
          );
          transform: skewX(-11deg);
          animation: gold-sweep 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        /* narrow razor highlight riding just ahead */
        .lp-glint::after {
          content: '';
          position: absolute;
          top: -20%;
          left: -55%;
          width: 10%;
          height: 140%;
          background: linear-gradient(
            90deg,
            transparent           0%,
            rgba(255,255,220,0.14) 50%,
            transparent           100%
          );
          transform: skewX(-11deg);
          animation: gold-sweep-fine 7s cubic-bezier(0.45, 0, 0.55, 1) 0.28s infinite;
        }

        /* ── corner metadata ────────────────────────────────────── */

        .lp-stamp {
          position: absolute;
          top: 28px;
          left: 36px;
          z-index: 4;
          animation: fade-up 0.8s ease 0.2s both;
        }

        .lp-stamp-line {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #3A2808;
          line-height: 2;
        }

        .lp-count {
          position: absolute;
          top: 28px;
          right: 36px;
          z-index: 4;
          text-align: right;
          animation: fade-up 0.8s ease 0.3s both;
        }

        .lp-count-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 600;
          line-height: 1;
          /* metallic but very faint — decorative */
          color: rgba(180,120,10,0.18);
          letter-spacing: -2px;
        }

        .lp-count-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #3A2808;
        }

        /* ── main content ───────────────────────────────────────── */

        .lp-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 48px 32px;
          max-width: 840px;
          width: 100%;
        }

        .lp-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: #7A5A14;
          margin-bottom: 32px;
          animation: fade-up 0.8s ease 0.1s both;
        }

        /* ── metallic title ─────────────────────────────────────── */

        .lp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(76px, 15vw, 160px);
          font-weight: 600;
          line-height: 0.88;
          letter-spacing: -4px;
          margin: 0;

          background: linear-gradient(
            158deg,
            #3A2208  0%,
            #7A5A14 12%,
            #C8941A 26%,
            #FFD700 40%,
            #FFF8C0 50%,
            #FFD700 60%,
            #C8941A 74%,
            #7A5A14 88%,
            #3A2208 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;

          animation: fade-up 1s ease 0.2s both;
        }

        /* ── ornamental rule ────────────────────────────────────── */

        .lp-rule {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          max-width: 440px;
          margin: 40px auto;
          animation: fade-up 0.8s ease 0.4s both;
        }

        .lp-rule-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,148,26,0.5), transparent);
        }

        .lp-rule-diamond {
          font-size: 7px;
          color: #C8941A;
          animation: diamond-pulse 3.5s ease-in-out infinite;
        }

        /* ── tagline ────────────────────────────────────────────── */

        .lp-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2.4vw, 22px);
          font-style: italic;
          font-weight: 300;
          color: #B07820;
          line-height: 1.75;
          max-width: 500px;
          margin: 0 0 52px;
          animation: fade-up 0.8s ease 0.5s both;
        }

        /* ── CTA ────────────────────────────────────────────────── */

        .lp-cta {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 17px 44px;
          text-decoration: none;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 6px;
          text-transform: uppercase;

          /* engraved metallic button */
          background: linear-gradient(
            160deg,
            #1c1400 0%,
            #2e2000 35%,
            #2a1c00 65%,
            #181000 100%
          );

          /* metallic gold text */
          color: #FFD700;

          border: 1px solid rgba(200,148,26,0.45);
          position: relative;
          overflow: hidden;
          transition: letter-spacing 0.35s, border-color 0.2s, color 0.2s;
          animation:
            fade-up 0.8s ease 0.6s both,
            cta-glow 3s ease-in-out 1.4s infinite;
        }

        /* inner sweep on hover */
        .lp-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,215,0,0.08),
            transparent
          );
          transform: translateX(-110%);
          transition: transform 0.4s ease;
        }

        .lp-cta:hover::before   { transform: translateX(110%); }
        .lp-cta:hover           { letter-spacing: 8px; border-color: rgba(255,215,0,0.7); color: #FFF8C0; }
        .lp-cta:hover .lp-arrow { transform: translateX(5px); }

        .lp-arrow {
          font-size: 12px;
          transition: transform 0.3s;
          display: inline-block;
        }

        /* ── fine print ─────────────────────────────────────────── */

        .lp-fine {
          margin-top: 22px;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #3A2808;
          animation: fade-up 0.8s ease 0.75s both;
        }

        /* ── byline ─────────────────────────────────────────────── */

        .lp-byline {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 16px;
          white-space: nowrap;
          animation: fade-up 0.8s ease 0.9s both;
        }

        .lp-byline-line {
          height: 1px;
          width: 30px;
          background: #2A1808;
        }

        .lp-byline-text {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #2A1808;
        }

        /* ── responsive ─────────────────────────────────────────── */

        @media (max-width: 480px) {
          .lp-content  { padding: 80px 24px 60px; }
          .lp-title    { letter-spacing: -2px; }
          .lp-stamp    { top: 16px; left: 20px; }
          .lp-count    { top: 16px; right: 20px; }
          .lp-byline   { bottom: 20px; }
        }

      `}</style>

      <main className="lp-root">

        {/* rolling light over the gold surface */}
        <div className="lp-glint" aria-hidden />

        {/* top-left classification text */}
        <div className="lp-stamp" aria-hidden>
          <div className="lp-stamp-line">Classified</div>
          <div className="lp-stamp-line">Archive Ref: CMP-∞</div>
        </div>

        {/* top-right file count */}
        <div className="lp-count" aria-hidden>
          <div className="lp-count-num">
            {String(CASE_FILES.length).padStart(2, '0')}
          </div>
          <div className="lp-count-label">Active Files</div>
        </div>

        {/* ── centred content ── */}
        <div className="lp-content">

          <div className="lp-eyebrow">
            Classified Repository &nbsp;·&nbsp; Restricted Access
          </div>

          <h1 className="lp-title">
            THE<br />COMPENDIUM
          </h1>

          <div className="lp-rule">
            <div className="lp-rule-line" />
            <div className="lp-rule-diamond">◆</div>
            <div className="lp-rule-line" />
          </div>

          <p className="lp-tagline">
            A hidden archive of deeply unnecessary human behavioral intelligence.
            {' '}{CASE_FILES.length} files. All strange. All true.
          </p>

          <Link href="/compendium" className="lp-cta">
            <span>Enter the Archive</span>
            <span className="lp-arrow">→</span>
          </Link>

          <div className="lp-fine">
            No account required &nbsp;·&nbsp; No trail left behind
          </div>

        </div>

        {/* byline */}
        <div className="lp-byline">
          <div className="lp-byline-line" />
          <span className="lp-byline-text">ABYSSPROTOCOL</span>
          <div className="lp-byline-line" />
        </div>

      </main>
    </>
  )
}