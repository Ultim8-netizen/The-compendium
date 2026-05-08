import { CASE_FILES } from '@/case-files/_registry'
import CaseFileCard from '@/components/CaseFileCard'

export default function CompendiumPage() {
  return (
    <>
      <style>{`
        .cp-root {
          min-height: 100vh;
          background: var(--c-bg);
          color: var(--c-fg);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease, color 0.25s ease;
        }

        /* warm top canopy bar */
        .cp-canopy {
          background: linear-gradient(135deg, #1c1008 0%, #2a1a08 60%, #1c1008 100%);
          padding: 18px 28px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          border-bottom: 2px solid rgba(200,148,26,0.3);
          position: relative;
          overflow: hidden;
        }
        .cp-canopy::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg, transparent, transparent 60px,
            rgba(200,148,26,0.04) 60px, rgba(200,148,26,0.04) 61px
          );
        }
        .cp-canopy-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cp-canopy-leaf { font-size: 18px; }
        .cp-canopy-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: #f5e8c0;
          letter-spacing: 1px;
        }
        .cp-canopy-name em {
          font-style: italic;
          color: #c8941a;
        }
        .cp-canopy-right {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #6a4a18;
        }

        /* page background — subtle forest texture */
        .cp-bg-art {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .cp-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 48px 24px 64px;
          position: relative;
          z-index: 1;
        }

        .cp-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .cp-header-ornament {
          font-size: 32px;
          margin-bottom: 14px;
          display: block;
        }

        .cp-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--c-subtle);
          margin-bottom: 12px;
        }

        .cp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 9vw, 72px);
          font-weight: 300;
          color: var(--c-fg);
          margin-bottom: 8px;
          letter-spacing: -1px;
          line-height: 1;
        }

        .cp-title em {
          font-style: italic;
          color: var(--c-accent);
        }

        .cp-floral {
          display: flex;
          align-items: center;
          gap: 14px;
          justify-content: center;
          margin: 18px 0 16px;
        }
        .cp-floral-line {
          height: 1px;
          width: 48px;
          background: linear-gradient(90deg, transparent, var(--c-border), transparent);
        }
        .cp-floral-center { font-size: 16px; }

        .cp-sub {
          font-family: 'DM Sans', sans-serif;
          color: var(--c-muted);
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          max-width: 460px;
          margin: 0 auto;
        }

        .cp-grid {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          margin-bottom: 52px;
        }

        .cp-footer {
          border-top: 1px solid var(--c-border);
          padding-top: 28px;
          text-align: center;
        }

        .cp-footer-text {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--c-subtle);
          letter-spacing: 1px;
          line-height: 2.2;
        }

        .cp-byline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 18px;
        }
        .cp-byline-line { height: 1px; width: 20px; background: var(--c-border); }
        .cp-byline-by   {
          font-family: 'DM Mono', monospace;
          font-size: 9px; color: var(--c-subtle); letter-spacing: 3px;
        }
        .cp-byline-name {
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          color: var(--c-subtle); letter-spacing: 4px;
          transition: color 0.3s;
        }
        .cp-byline-name:hover { color: var(--c-fg); }

        /* corner leaf decorations */
        .cp-corner {
          position: absolute;
          pointer-events: none;
          opacity: 0.07;
          font-size: 80px;
          user-select: none;
          z-index: 0;
        }
        .cp-corner-tl { top: 80px; left: 10px; transform: rotate(-20deg); }
        .cp-corner-tr { top: 80px; right: 10px; transform: rotate(20deg) scaleX(-1); }
        .cp-corner-bl { bottom: 20px; left: 10px; transform: rotate(20deg); }
        .cp-corner-br { bottom: 20px; right: 10px; transform: rotate(-20deg) scaleX(-1); }
      `}</style>

      <div className="cp-root">

        {/* Background art */}
        <div className="cp-bg-art" aria-hidden>
          <svg viewBox="0 0 1200 900" style={{width:'100%',height:'100%',position:'absolute',inset:0}} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <radialGradient id="cp-sun" cx="70%" cy="-10%" r="60%">
              <stop offset="0%" stopColor="#ffe080" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#ffe080" stopOpacity="0" />
            </radialGradient>
            <rect width="1200" height="900" fill="url(#cp-sun)" />
            {[80,200,320,900,1020,1140].map((x,i)=>(
              <g key={i} opacity={0.045 + (i%2)*0.02}>
                <polygon points={`${x},900 ${x-30},600 ${x+30},600`} fill="#2a4a18" />
                <polygon points={`${x},680 ${x-22},500 ${x+22},500`} fill="#3a5a20" />
                <polygon points={`${x+2},560 ${x-16},400 ${x+20},400`} fill="#4a6828" />
              </g>
            ))}
            {/* scattered flowers */}
            {[140,300,500,700,900,1060].map((x,i)=>(
              <g key={i} opacity="0.09">
                <circle cx={x} cy={860} r={7} fill={['#f9d44a','#f4a0b0','#ffffff'][i%3]} />
                <line x1={x} y1={860} x2={x} y2={900} stroke="#5a7a30" strokeWidth="1.5" />
              </g>
            ))}
          </svg>
        </div>

        {/* Corner leaves */}
        <div className="cp-corner cp-corner-tl" aria-hidden>🌿</div>
        <div className="cp-corner cp-corner-tr" aria-hidden>🌿</div>
        <div className="cp-corner cp-corner-bl" aria-hidden>🍃</div>
        <div className="cp-corner cp-corner-br" aria-hidden>🍃</div>

        {/* Canopy nav */}
        <div className="cp-canopy">
          <div className="cp-canopy-left">
            <span className="cp-canopy-leaf">🌿</span>
            <span className="cp-canopy-name">The <em>Compendium</em></span>
          </div>
          <div className="cp-canopy-right">Active Archive · {CASE_FILES.length} files</div>
        </div>

        <div className="cp-inner">

          <div className="cp-header">
            <span className="cp-header-ornament">📚</span>
            <div className="cp-eyebrow">The Library Between the Trees</div>
            <h1 className="cp-title">
              The <em>Compendium</em>
            </h1>
            <div className="cp-floral">
              <div className="cp-floral-line" />
              <span className="cp-floral-center">🌸 ✦ 🌸</span>
              <div className="cp-floral-line" />
            </div>
            <p className="cp-sub">
              {CASE_FILES.length} active files. Each one documents something
              deeply, profoundly human. None of it was asked for.
              All of it was necessary.
            </p>
          </div>

          <div className="cp-grid">
            {CASE_FILES.map((file, i) => (
              <CaseFileCard key={file.slug} file={file} index={i} />
            ))}
          </div>

          <div className="cp-footer">
            <p className="cp-footer-text">
              All profiles collected at entry expire within 24 hours.<br />
              We keep none of it. This was always going to be true.<br />
              The trees don&apos;t either.
            </p>
            <div className="cp-byline">
              <div className="cp-byline-line" />
              <span className="cp-byline-by">by</span>
              <span className="cp-byline-name">ABYSSPROTOCOL</span>
              <div className="cp-byline-line" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}