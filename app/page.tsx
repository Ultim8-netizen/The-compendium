'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getVisitorId } from '@/lib/visitor'
import { CASE_FILES, type CaseFileMeta } from '@/case-files/_registry'

function sampleFiles(n: number): CaseFileMeta[] {
  return [...CASE_FILES].sort(() => Math.random() - 0.5).slice(0, n)
}

const THREAT_COLOR: Record<string, { color: string; borderColor: string }> = {
  LOW:      { color: '#4ade80', borderColor: '#14532d' },
  MODERATE: { color: '#facc15', borderColor: '#713f12' },
  CRITICAL: { color: '#fb923c', borderColor: '#7c2d12' },
  TERMINAL: { color: '#f87171', borderColor: '#7f1d1d' },
}

export default function LandingPage() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [sample] = useState<CaseFileMeta[]>(() => sampleFiles(3))

  useEffect(() => {
    let mounted = true
    async function checkVisitor() {
      await Promise.resolve()
      if (!mounted) return
      if (getVisitorId()) {
        router.replace('/compendium')
      } else {
        setReady(true)
      }
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
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes lp-in   { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lp-exit { from { opacity: 1; } to { opacity: 0; } }
        @keyframes lp-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @keyframes stamp-in { 0% { opacity: 0; transform: translate(-50%, -50%) rotate(-4deg) scale(1.15); } 100% { opacity: 1; transform: translate(-50%, -50%) rotate(-4deg) scale(1); } }

        .lp-root {
          min-height: 100dvh;
          background: #0a0a0a;
          color: #e5e5e5;
          font-family: 'Courier New', Courier, monospace;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 24px 80px;
          animation: lp-in 0.6s ease both;
          position: relative;
          overflow: hidden;
        }
        .lp-root.exiting {
          animation: lp-exit 0.42s ease both;
          pointer-events: none;
        }

        .lp-inner { width: 100%; max-width: 600px; position: relative; }

        .lp-hook {
          font-size: 11px;
          letter-spacing: 2px;
          color: #facc15;
          text-transform: uppercase;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .lp-title {
          font-size: clamp(48px, 13vw, 80px);
          font-weight: 900;
          color: #fff;
          letter-spacing: -2px;
          line-height: 0.95;
          margin-bottom: 32px;
        }

        .lp-pitch {
          font-size: 15px;
          line-height: 2;
          color: #777;
          margin-bottom: 48px;
        }
        .lp-pitch strong { color: #ccc; font-weight: 700; }
        .lp-pitch em { color: #555; font-style: normal; }

        .lp-divider { height: 1px; background: #161616; margin-bottom: 32px; }

        .lp-files { display: flex; flex-direction: column; margin-bottom: 40px; }

        .lp-file {
          border-bottom: 1px solid #111;
          padding: 18px 0;
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 18px;
          align-items: start;
        }
        .lp-file:first-child { border-top: 1px solid #111; }

        .lp-file-tag {
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 6px;
          border: 1px solid;
          text-align: center;
          line-height: 1.6;
          margin-top: 2px;
        }

        .lp-file-dept {
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2e2e2e;
          margin-bottom: 5px;
        }

        .lp-file-title {
          font-size: 12px;
          font-weight: 700;
          color: #aaa;
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .lp-file-subtitle {
          font-size: 11px;
          line-height: 1.6;
          color: #3a3a3a;
        }

        .lp-cta {
          width: 100%;
          padding: 18px;
          background: #fff;
          border: none;
          color: #000;
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .lp-cta:hover { background: #facc15; }

        .lp-cursor {
          display: inline-block;
          width: 8px;
          height: 13px;
          background: #000;
          animation: lp-blink 1.1s step-end infinite;
        }

        .lp-fine {
          font-size: 10px;
          color: #242424;
          text-align: center;
          line-height: 1.9;
          letter-spacing: 0.5px;
          margin-bottom: 40px;
        }

        .lp-byline { display: flex; align-items: center; justify-content: center; gap: 10px; }
        .lp-byline-line { height: 1px; width: 20px; background: #161616; }
        .lp-byline-by { font-size: 9px; color: #222; letter-spacing: 3px; }
        .lp-byline-name { font-size: 10px; font-weight: 900; color: #2a2a2a; letter-spacing: 4px; transition: color 0.3s; }
        .lp-byline-name:hover { color: #555; }

        .lp-stamp {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-4deg);
          border: 5px solid #dc2626;
          color: #dc2626;
          font-size: clamp(22px, 5vw, 36px);
          font-weight: 900;
          letter-spacing: 6px;
          text-transform: uppercase;
          padding: 14px 32px;
          pointer-events: none;
          white-space: nowrap;
          opacity: 0.12;
          z-index: 0;
          animation: stamp-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both;
          user-select: none;
        }

        @media (max-width: 480px) {
          .lp-file { grid-template-columns: 60px 1fr; gap: 12px; }
          .lp-stamp { font-size: 18px; letter-spacing: 3px; padding: 10px 18px; }
        }
      `}</style>

      {/* stamp — fixed behind everything, faint */}
      <div className="lp-stamp">CLEARANCE REQUIRED</div>

      <div className={`lp-root${exiting ? ' exiting' : ''}`}>
        <div className="lp-inner">

          <div className="lp-hook">Hello there. Yes, you. You never learn, do you.</div>

          <div className="lp-title">THE<br />COMPENDIUM</div>

          <div className="lp-pitch">
            You are here because someone sent you a link. That someone is, in all likelihood, a person of <strong>questionable judgment and excellent taste.</strong> Whatever you see past this point is entirely on you.<br /><br />
            The Compendium is a classified archive documenting <strong>the most vile, irritating, and deeply universal niceties of human existence.</strong> The boring lecturer. The person playing a video at full volume in a shared space with the confidence of someone who has never considered another human being. The infinite talker. The dad joke. The queue.<br /><br />
            <em>All of it. Documented. In full. With the seriousness it deserves.</em>
          </div>

          <div className="lp-divider" />

          <div className="lp-files">
            {sample.map(file => (
              <div className="lp-file" key={file.slug}>
                <div className="lp-file-tag" style={THREAT_COLOR[file.threatLevel]}>
                  {file.threatLevel}
                </div>
                <div>
                  <div className="lp-file-dept">{file.department}</div>
                  <div className="lp-file-title">{file.title}</div>
                  <div className="lp-file-subtitle">{file.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="lp-cta" onClick={enter}>
            Apply for clearance
            <span className="lp-cursor" />
          </button>

          <div className="lp-fine">
            Takes ninety seconds. No account. No email.<br />
            {CASE_FILES.length} files inside. All classified. All unnecessary.
          </div>

          <div className="lp-byline">
            <div className="lp-byline-line" />
            <span className="lp-byline-by">by</span>
            <span className="lp-byline-name">ABYSSPROTOCOL</span>
            <div className="lp-byline-line" />
          </div>

        </div>
      </div>
    </>
  )
}