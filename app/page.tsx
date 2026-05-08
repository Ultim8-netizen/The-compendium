'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getVisitorId } from '@/lib/visitor'
import { CASE_FILES, type CaseFileMeta } from '@/case-files/_registry'

function sampleFiles(n: number): CaseFileMeta[] {
  return [...CASE_FILES].sort(() => Math.random() - 0.5).slice(0, n)
}

export default function LandingPage() {
  const router = useRouter()
  const [ready,   setReady]   = useState(false)
  const [exiting, setExiting] = useState(false)
  const [sample]  = useState<CaseFileMeta[]>(() => sampleFiles(3))

  useEffect(() => {
    let mounted = true
    async function checkVisitor() {
      await Promise.resolve()
      if (!mounted) return
      if (getVisitorId()) { router.replace('/compendium') }
      else { setReady(true) }
    }
    checkVisitor()
    return () => { mounted = false }
  }, [router])

  function enter() {
    if (exiting) return
    setExiting(true)
    setTimeout(() => router.push('/intake'), 420)
  }

  if (!ready) return null

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes lp-in    { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        @keyframes lp-exit  { from { opacity:1; } to { opacity:0; } }
        @keyframes sway     { 0%,100%{transform:rotate(-1.5deg)} 50%{transform:rotate(1.5deg)} }
        @keyframes drift    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes glow-pulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
        @keyframes petal-fall {
          0%   { transform:translateY(-20px) rotate(0deg); opacity:0; }
          10%  { opacity:1; }
          100% { transform:translateY(100vh) rotate(360deg); opacity:0; }
        }

        .lp-root {
          min-height:100dvh;
          background: linear-gradient(170deg, #fdf3d0 0%, #fce8b0 30%, #f5dfa0 60%, #efe4c8 100%);
          color:#2a1a08;
          font-family:'DM Sans',sans-serif;
          position:relative;
          overflow:hidden;
          animation: lp-in 0.7s ease both;
        }
        .lp-root.exiting { animation: lp-exit 0.42s ease both; pointer-events:none; }

        /* ── SVG forest background ── */
        .lp-forest {
          position:absolute;
          inset:0;
          pointer-events:none;
          z-index:0;
        }

        /* ── floating petals ── */
        .petal {
          position:absolute;
          top:-20px;
          font-size:14px;
          animation: petal-fall linear infinite;
          opacity:0;
          pointer-events:none;
          z-index:1;
          user-select:none;
        }

        /* ── light shafts ── */
        .light-shaft {
          position:absolute;
          top:0;
          width:60px;
          height:60%;
          background:linear-gradient(180deg, rgba(255,220,100,0.18) 0%, transparent 100%);
          transform-origin:top center;
          pointer-events:none;
          z-index:1;
        }

        /* ── main content ── */
        .lp-content {
          position:relative;
          z-index:2;
          max-width:660px;
          margin:0 auto;
          padding:60px 28px 80px;
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
        }

        /* ── top ornament ── */
        .lp-ornament {
          font-size:28px;
          margin-bottom:18px;
          animation: drift 4s ease-in-out infinite;
          filter: drop-shadow(0 4px 12px rgba(200,140,20,0.3));
        }

        .lp-eyebrow {
          font-family:'DM Mono',monospace;
          font-size:10px;
          letter-spacing:4px;
          text-transform:uppercase;
          color:#9a6a20;
          margin-bottom:14px;
        }

        .lp-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(58px,14vw,96px);
          font-weight:300;
          color:#1c0e04;
          letter-spacing:-2px;
          line-height:0.9;
          margin-bottom:10px;
          text-shadow: 0 2px 24px rgba(200,140,20,0.2);
        }

        .lp-title em {
          font-style:italic;
          color:#a06010;
        }

        /* ── floral divider ── */
        .lp-floral {
          display:flex;
          align-items:center;
          gap:12px;
          margin:24px 0;
          width:100%;
          max-width:400px;
        }
        .lp-floral-line { flex:1; height:1px; background:linear-gradient(90deg,transparent,rgba(160,96,16,0.4),transparent); }
        .lp-floral-center { font-size:18px; animation:sway 3s ease-in-out infinite; }

        .lp-pitch {
          font-size:16px;
          line-height:2;
          color:#4a2e0a;
          font-weight:300;
          max-width:520px;
          margin-bottom:36px;
        }
        .lp-pitch strong { color:#1c0e04; font-weight:500; }
        .lp-pitch em     { font-style:italic; color:#8a5a14; }

        /* ── file cards ── */
        .lp-files {
          width:100%;
          max-width:520px;
          display:flex;
          flex-direction:column;
          gap:0;
          margin-bottom:40px;
          border:1px solid rgba(160,96,16,0.2);
          background:rgba(255,248,228,0.7);
          backdrop-filter:blur(4px);
          box-shadow: 0 8px 40px rgba(160,96,16,0.12), inset 0 1px 0 rgba(255,255,255,0.6);
        }

        .lp-file {
          padding:18px 22px;
          border-bottom:1px solid rgba(160,96,16,0.12);
          display:grid;
          grid-template-columns:60px 1fr;
          gap:16px;
          align-items:start;
          text-align:left;
          transition:background 0.2s;
        }
        .lp-file:last-child { border-bottom:none; }
        .lp-file:hover { background:rgba(255,240,200,0.7); }

        .lp-file-badge {
          font-family:'DM Mono',monospace;
          font-size:8px;
          letter-spacing:1px;
          text-transform:uppercase;
          border:1px solid currentColor;
          padding:3px 6px;
          text-align:center;
          margin-top:2px;
          line-height:1.5;
        }

        .lp-file-dept {
          font-family:'DM Mono',monospace;
          font-size:9px;
          letter-spacing:1.5px;
          text-transform:uppercase;
          color:#9a7a40;
          margin-bottom:4px;
        }

        .lp-file-title {
          font-family:'DM Sans',sans-serif;
          font-size:12px;
          font-weight:700;
          color:#2a1a08;
          margin-bottom:2px;
          letter-spacing:0.3px;
        }

        .lp-file-sub {
          font-size:11px;
          color:#7a5a28;
          line-height:1.5;
          font-weight:300;
        }

        /* ── CTA ── */
        .lp-cta-wrap {
          width:100%;
          max-width:520px;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:16px;
        }

        .lp-cta {
          width:100%;
          padding:18px 24px;
          background:linear-gradient(135deg, #1c0e04 0%, #2d1a08 100%);
          border:none;
          color:#f5e8c0;
          font-family:'DM Mono',monospace;
          font-size:11px;
          font-weight:500;
          letter-spacing:5px;
          text-transform:uppercase;
          cursor:pointer;
          transition:all 0.25s;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:12px;
          box-shadow: 0 4px 24px rgba(28,14,4,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
          position:relative;
          overflow:hidden;
        }
        .lp-cta::before {
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(135deg, rgba(200,148,26,0.0) 0%, rgba(200,148,26,0.15) 100%);
          opacity:0;
          transition:opacity 0.25s;
        }
        .lp-cta:hover { transform:translateY(-1px); box-shadow:0 8px 32px rgba(28,14,4,0.28); }
        .lp-cta:hover::before { opacity:1; }

        .lp-cta-leaf {
          font-size:16px;
          animation: sway 2s ease-in-out infinite;
        }

        .lp-fine {
          font-family:'DM Mono',monospace;
          font-size:10px;
          color:#9a7a40;
          text-align:center;
          line-height:2;
          letter-spacing:0.5px;
        }

        /* ── byline ── */
        .lp-byline {
          display:flex; align-items:center; justify-content:center;
          gap:10px; margin-top:8px;
        }
        .lp-byline-line { height:1px; width:20px; background:rgba(160,96,16,0.3); }
        .lp-byline-by   { font-family:'DM Mono',monospace; font-size:9px; color:#b09060; letter-spacing:3px; }
        .lp-byline-name {
          font-family:'DM Mono',monospace; font-size:10px; font-weight:500;
          color:#7a5020; letter-spacing:4px; transition:color 0.3s;
        }
        .lp-byline-name:hover { color:#1c0e04; }

        /* ── bottom botanical footer ── */
        .lp-botanical {
          position:absolute;
          bottom:0; left:0; right:0;
          pointer-events:none;
          z-index:1;
        }

        @media(max-width:480px){
          .lp-file { grid-template-columns:48px 1fr; gap:10px; }
        }
      `}</style>

      {/* Floating petals */}
      {['🌸','🌼','🌻','🌹','✿','🍃','🌿'].map((p, i) => (
        <div key={i} className="petal" style={{
          left: `${8 + i * 13}%`,
          animationDuration: `${7 + i * 1.3}s`,
          animationDelay: `${i * 1.1}s`,
          fontSize: `${12 + (i % 3) * 4}px`,
        }}>{p}</div>
      ))}

      {/* Light shafts */}
      {[15, 35, 55, 75].map((left, i) => (
        <div key={i} className="light-shaft" style={{
          left: `${left}%`,
          transform: `rotate(${-8 + i * 5}deg)`,
          opacity: 0.4 + (i % 2) * 0.2,
        }} />
      ))}

      {/* Forest SVG backdrop */}
      <svg className="lp-forest" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        {/* Ground */}
        <ellipse cx="600" cy="820" rx="700" ry="80" fill="rgba(140,100,30,0.08)" />
        {/* Distant misty trees */}
        {[80,180,260,380,480,560,680,780,860,960,1060,1140].map((x, i) => (
          <g key={i} opacity={0.06 + (i % 3) * 0.025}>
            <polygon points={`${x},${500 - i*8} ${x-28},700 ${x+28},700`} fill="#3a6020" />
            <polygon points={`${x},${440 - i*6} ${x-20},580 ${x+20},580`} fill="#4a7030" />
          </g>
        ))}
        {/* Closer trees left */}
        <g opacity="0.13">
          <polygon points="60,800 20,500 100,500" fill="#2a4a18" />
          <polygon points="60,600 10,400 110,400" fill="#3a5a20" />
          <polygon points="55,480 15,320 95,320" fill="#4a6828" />
        </g>
        <g opacity="0.13">
          <polygon points="160,800 110,540 210,540" fill="#2a4a18" />
          <polygon points="158,620 115,440 205,440" fill="#3a5a20" />
        </g>
        {/* Closer trees right */}
        <g opacity="0.13">
          <polygon points="1140,800 1100,500 1180,500" fill="#2a4a18" />
          <polygon points="1140,600 1090,400 1190,400" fill="#3a5a20" />
          <polygon points="1145,480 1105,320 1185,320" fill="#4a6828" />
        </g>
        <g opacity="0.13">
          <polygon points="1040,800 990,540 1090,540" fill="#2a4a18" />
          <polygon points="1038,620 995,440 1085,440" fill="#3a5a20" />
        </g>
        {/* Foreground flowers */}
        {[120,200,320,450,560,680,800,920,1040].map((x, i) => (
          <g key={i} opacity="0.18">
            <circle cx={x} cy={760 + (i%3)*10} r={6 + (i%2)*4} fill={['#f9d44a','#f4a0b0','#ffffff','#f9c74f'][i%4]} />
            <line x1={x} y1={760 + (i%3)*10} x2={x} y2={800} stroke="#5a7a30" strokeWidth="1.5" />
          </g>
        ))}
        {/* Sunbeam glow from upper right */}
        <radialGradient id="sunbeam" cx="80%" cy="0%" r="60%">
          <stop offset="0%" stopColor="#ffe080" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffe080" stopOpacity="0" />
        </radialGradient>
        <rect width="1200" height="800" fill="url(#sunbeam)" />
        {/* Warm ground glow */}
        <radialGradient id="groundglow" cx="50%" cy="100%" r="50%">
          <stop offset="0%" stopColor="#c89020" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#c89020" stopOpacity="0" />
        </radialGradient>
        <rect width="1200" height="800" fill="url(#groundglow)" />
      </svg>

      {/* Bottom botanical border */}
      <svg className="lp-botanical" viewBox="0 0 1200 120" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style={{height:'90px'}}>
        {[0,100,220,340,480,600,720,840,960,1080,1160].map((x,i)=>(
          <g key={i} opacity={0.18 + (i%2)*0.08}>
            <ellipse cx={x+10} cy={100} rx={16} ry={28} fill="#4a7030" transform={`rotate(${-20+i*8} ${x+10} 100)`} />
            <ellipse cx={x+24} cy={95} rx={12} ry={20} fill="#5a8038" transform={`rotate(${10+i*6} ${x+24} 95)`} />
            {i%2===0 && <circle cx={x+32} cy={88} r={6} fill={['#f9d44a','#f4a0b0','#fff'][i%3]} opacity="0.9" />}
          </g>
        ))}
      </svg>

      <div className={`lp-root${exiting ? ' exiting' : ''}`} style={{minHeight:'100dvh'}}>
        <div className="lp-content">

          <div className="lp-ornament">🌿</div>
          <div className="lp-eyebrow">A hidden archive, somewhere in the woods</div>

          <h1 className="lp-title">
            The<br /><em>Compendium</em>
          </h1>

          <div className="lp-floral">
            <div className="lp-floral-line" />
            <div className="lp-floral-center">✦ 🌸 ✦</div>
            <div className="lp-floral-line" />
          </div>

          <p className="lp-pitch">
            Somewhere between the old oaks and the smell of pine needles and rain,
            there is a library no one put on any map. It keeps records of things
            that are <strong>deeply, absurdly human</strong> — the talker who never stops,
            the joke that lands on no one, the lecture that goes absolutely nowhere.
            <br /><br />
            <em>All of it, filed. All of it, here.</em>
          </p>

          <div className="lp-files">
            {sample.map(file => {
              const colors: Record<string, string> = {
                LOW: '#16a34a', MODERATE: '#d97706',
                CRITICAL: '#ea580c', TERMINAL: '#dc2626',
              }
              const c = colors[file.threatLevel] ?? '#d97706'
              return (
                <div className="lp-file" key={file.slug}>
                  <div className="lp-file-badge" style={{ color: c, borderColor: c }}>
                    {file.threatLevel}
                  </div>
                  <div>
                    <div className="lp-file-dept">{file.department}</div>
                    <div className="lp-file-title">{file.title}</div>
                    <div className="lp-file-sub">{file.subtitle}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="lp-cta-wrap">
            <button className="lp-cta" onClick={enter}>
              <span className="lp-cta-leaf">🍃</span>
              Step inside
              <span className="lp-cta-leaf" style={{animationDelay:'0.5s'}}>🍃</span>
            </button>

            <p className="lp-fine">
              Takes ninety seconds. No account required. No trail left behind.<br />
              {CASE_FILES.length} files inside. All strange. All true.
            </p>

            <div className="lp-byline">
              <div className="lp-byline-line" />
              <span className="lp-byline-by">by</span>
              <span className="lp-byline-name">ABYSSPROTOCOL</span>
              <div className="lp-byline-line" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}