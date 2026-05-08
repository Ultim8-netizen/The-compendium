import Link from 'next/link'
import { CASE_FILES } from '@/case-files/_registry'
import CaseFileCard from '@/components/CaseFileCard'

export default function CompendiumPage() {
  return (
    <>
      <style>{`
        @keyframes lp-glint-sweep {
          0%   { left: -55%; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 130%; opacity: 0; }
        }
        @keyframes lp-glint-fine {
          0%   { left: -55%; opacity: 0; }
          8%   { opacity: 0.7; }
          92%  { opacity: 0.7; }
          100% { left: 130%; opacity: 0; }
        }
        @keyframes cp-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cp-diamond-pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }

        .cp-root {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: var(--c-bg);
          color: var(--c-fg);
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s ease;
        }

        /* brushed grain */
        .cp-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 3px,
            rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        /* radial accent glow — uses accent color */
        .cp-root-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background:
            radial-gradient(ellipse at 50% 0%,   rgba(var(--c-accent-rgb, 200,148,26),0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 10% 80%,  rgba(var(--c-accent-rgb, 200,148,26),0.08) 0%, transparent 38%),
            radial-gradient(ellipse at 90% 20%,  rgba(var(--c-accent-rgb, 200,148,26),0.06) 0%, transparent 38%);
          transition: background 0.3s ease;
        }

        .cp-glint {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }
        .cp-glint::before {
          content: '';
          position: absolute;
          top: -20%; left: -55%;
          width: 40%; height: 140%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.025) 46%,
            rgba(255,255,255,0.06) 50%,
            rgba(255,255,255,0.025) 54%,
            transparent 100%
          );
          transform: skewX(-11deg);
          animation: lp-glint-sweep 9s cubic-bezier(0.45,0,0.55,1) infinite;
        }
        .cp-glint::after {
          content: '';
          position: absolute;
          top: -20%; left: -55%;
          width: 10%; height: 140%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.06) 50%,
            transparent 100%
          );
          transform: skewX(-11deg);
          animation: lp-glint-fine 9s cubic-bezier(0.45,0,0.55,1) 0.3s infinite;
        }

        .cp-inner {
          position: relative;
          z-index: 3;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 28px 80px;
        }

        .cp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px 0 0;
          flex-wrap: wrap;
          gap: 12px;
          animation: cp-fade-up 0.8s ease 0.1s both;
        }

        .cp-back {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--c-subtle);
          text-decoration: none;
          transition: color 0.2s;
        }
        .cp-back:hover { color: var(--c-accent); }

        .cp-nav-right {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--c-subtle);
        }

        .cp-hero {
          text-align: center;
          padding: 56px 0 52px;
          animation: cp-fade-up 0.9s ease 0.15s both;
        }

        .cp-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: var(--c-subtle);
          margin-bottom: 28px;
        }

        .cp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(56px, 10vw, 96px);
          font-weight: 600;
          line-height: 0.9;
          letter-spacing: -3px;
          margin: 0 0 6px;
          background: linear-gradient(
            158deg,
            var(--c-metal-deep)  0%,
            var(--c-metal-dark) 12%,
            var(--c-metal-mid)  26%,
            var(--c-accent)     40%,
            var(--c-metal-bright) 50%,
            var(--c-accent)     60%,
            var(--c-metal-mid)  74%,
            var(--c-metal-dark) 88%,
            var(--c-metal-deep) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: background 0.3s ease;
        }

        .cp-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          justify-content: center;
          margin: 28px 0 22px;
        }
        .cp-rule-line {
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, var(--c-muted), transparent);
          opacity: 0.5;
        }
        .cp-rule-diamond {
          font-size: 8px;
          color: var(--c-accent);
          animation: cp-diamond-pulse 3.5s ease-in-out infinite;
        }

        .cp-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2.2vw, 20px);
          font-style: italic;
          font-weight: 300;
          color: var(--c-muted);
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto;
        }

        .cp-grid {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          animation: cp-fade-up 0.9s ease 0.3s both;
        }

        .cp-footer {
          margin-top: 64px;
          text-align: center;
          animation: cp-fade-up 0.9s ease 0.4s both;
        }

        .cp-footer-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          justify-content: center;
          margin-bottom: 22px;
        }
        .cp-footer-rule-line {
          height: 1px;
          width: 40px;
          background: var(--c-border);
        }
        .cp-footer-rule-dot { font-size: 7px; color: var(--c-subtle); }

        .cp-footer-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: var(--c-subtle);
          letter-spacing: 1.5px;
          line-height: 2.4;
          text-transform: uppercase;
        }

        .cp-byline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 20px;
        }
        .cp-byline-line { height: 1px; width: 24px; background: var(--c-border); }
        .cp-byline-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--c-subtle);
        }
      `}</style>

      <div className="cp-root">
        <div className="cp-root-glow" aria-hidden />
        <div className="cp-glint" aria-hidden />

        <div className="cp-inner">
          <div className="cp-header">
            <Link href="/" className="cp-back">← The Compendium</Link>
            <div className="cp-nav-right">Archive · {CASE_FILES.length} active files</div>
          </div>

          <div className="cp-hero">
            <div className="cp-eyebrow">Classified Repository · Restricted Access</div>
            <h1 className="cp-title">THE<br />COMPENDIUM</h1>
            <div className="cp-rule">
              <div className="cp-rule-line" />
              <div className="cp-rule-diamond">◆</div>
              <div className="cp-rule-line" />
            </div>
            <p className="cp-sub">
              {CASE_FILES.length} active files. Each one documents something
              deeply, profoundly human. None of it was asked for.
            </p>
          </div>

          <div className="cp-grid">
            {CASE_FILES.map((file, i) => (
              <CaseFileCard key={file.slug} file={file} index={i} />
            ))}
          </div>

          <div className="cp-footer">
            <div className="cp-footer-rule">
              <div className="cp-footer-rule-line" />
              <div className="cp-footer-rule-dot">◆</div>
              <div className="cp-footer-rule-line" />
            </div>
            <p className="cp-footer-text">
              All profiles collected at entry expire within 24 hours.<br />
              We keep none of it. This was always going to be true.
            </p>
            <div className="cp-byline">
              <div className="cp-byline-line" />
              <span className="cp-byline-text">ABYSSPROTOCOL</span>
              <div className="cp-byline-line" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}