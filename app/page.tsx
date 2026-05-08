'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getVisitorId } from '@/lib/visitor'
import { CASE_FILES, type CaseFileMeta } from '@/case-files/_registry'

function sampleFiles(n: number): CaseFileMeta[] {
  return [...CASE_FILES].sort(() => Math.random() - 0.5).slice(0, n)
}

const THREAT_COLOR: Record<string, { color: string; borderColor: string }> = {
  LOW:      { color: '#16a34a', borderColor: '#16a34a' },
  MODERATE: { color: '#d97706', borderColor: '#d97706' },
  CRITICAL: { color: '#ea580c', borderColor: '#ea580c' },
  TERMINAL: { color: '#dc2626', borderColor: '#dc2626' },
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
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes lp-in   { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lp-exit { from { opacity: 1; } to { opacity: 0; } }
        @keyframes lp-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @keyframes stamp-in {
          0%   { opacity:0; transform:translate(-50%,-50%) rotate(-4deg) scale(1.15); }
          100% { opacity:1; transform:translate(-50%,-50%) rotate(-4deg) scale(1); }
        }

        .lp-root {
          min-height: 100dvh;
          background: var(--c-bg);
          color: var(--c-fg);
          font-family: 'DM Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 24px 80px;
          animation: lp-in 0.6s ease both;
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .lp-root.exiting {
          animation: lp-exit 0.42s ease both;
          pointer-events: none;
        }

        .lp-inner { width: 100%; max-width: 600px; position: relative; }

        .lp-hook {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          color: var(--c-accent);
          text-transform: uppercase;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .lp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 13vw, 88px);
          font-weight: 300;
          color: var(--c-fg);
          letter-spacing: -2px;
          line-height: 0.92;
          margin-bottom: 32px;
        }

        .lp-pitch {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          line-height: 2;
          color: var(--c-muted);
          margin-bottom: 48px;
          font-weight: 300;
        }
        .lp-pitch strong { color: var(--c-fg); font-weight: 600; }
        .lp-pitch em     { color: var(--c-subtle); font-style: normal; }

        .lp-divider { height: 1px; background: var(--c-border); margin-bottom: 32px; }

        .lp-files { display: flex; flex-direction: column; margin-bottom: 40px; }

        .lp-file {
          border-bottom: 1px solid var(--c-border);
          padding: 18px 0;
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 18px;
          align-items: start;
          transition: background 0.15s;
        }
        .lp-file:first-child { border-top: 1px solid var(--c-border); }

        .lp-file-tag {
          font-family: 'DM Mono', monospace;
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
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--c-subtle);
          margin-bottom: 5px;
        }

        .lp-file-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--c-muted);
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .lp-file-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          line-height: 1.6;
          color: var(--c-subtle);
        }

        .lp-cta {
          width: 100%;
          padding: 18px;
          background: var(--c-fg);
          border: none;
          color: var(--c-bg);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .lp-cta:hover { background: var(--c-accent); color: var(--c-accent-fg); }

        .lp-cursor {
          display: inline-block;
          width: 8px;
          height: 13px;
          background: currentColor;
          animation: lp-blink 1.1s step-end infinite;
        }

        .lp-fine {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: var(--c-subtle);
          text-align: center;
          line-height: 1.9;
          letter-spacing: 0.5px;
          margin-bottom: 40px;
        }

        .lp-byline { display: flex; align-items: center; justify-content: center; gap: 10px; }
        .lp-byline-line { height: 1px; width: 20px; background: var(--c-border); }
        .lp-byline-by   { font-family: 'DM Mono', monospace; font-size: 9px; color: var(--c-subtle); letter-spacing: 3px; }
        .lp-byline-name {
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          color: var(--c-muted); letter-spacing: 4px;
          transition: color 0.3s;
        }
        .lp-byline-name:hover { color: var(--c-fg); }

        .lp-stamp {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) rotate(-4deg);
          border: 5px solid #dc2626;
          color: #dc2626;
          font-family: 'DM Mono', monospace;
          font-size: clamp(18px, 4vw, 32px);
          font-weight: 700;
          letter-spacing: 6px;
          text-transform: uppercase;
          padding: 14px 32px;
          pointer-events: none;
          white-space: nowrap;
          opacity: 0.08;
          z-index: 0;
          animation: stamp-in 0.5s cubic-bezier(0.22,1,0.36,1) 0.7s both;
          user-select: none;
        }

        @media (max-width: 480px) {
          .lp-file { grid-template-columns: 56px 1fr; gap: 12px; }
          .lp-stamp { font-size: 16px; letter-spacing: 3px; padding: 10px 16px; }
        }
      `}</style>

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