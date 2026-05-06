'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getVisitorId } from '@/lib/visitor'

export default function LandingPage() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let mounted = true

    async function checkVisitor() {
      // Yield execution to the microtask queue to prevent synchronous cascading renders
      await Promise.resolve()
      
      if (!mounted) return

      if (getVisitorId()) {
        router.replace('/compendium')
      } else {
        setReady(true)
      }
    }

    checkVisitor()

    return () => {
      mounted = false
    }
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

        @keyframes lp-in       { from{opacity:0} to{opacity:1} }
        @keyframes lp-row-in   { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes lp-exit     { from{opacity:1} to{opacity:0} }
        @keyframes lp-scanline { from{top:-15%} to{top:110%} }
        @keyframes lp-blink    { 0%,100%{opacity:1} 49%{opacity:1} 50%{opacity:0} 99%{opacity:0} }
        @keyframes lp-stamp    { from{opacity:0;transform:rotate(-12deg) scale(0.80)} to{opacity:1;transform:rotate(-12deg) scale(1)} }

        .lp-root {
          min-height: 100dvh;
          background: #0a0a0a;
          color: #e5e5e5;
          font-family: 'Courier New', Courier, monospace;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: lp-in 0.7s ease both;
        }
        .lp-root.exiting { animation: lp-exit 0.42s ease both; pointer-events: none; }

        /* CRT scan line */
        .lp-scan {
          position: absolute;
          left: 0; right: 0;
          height: 18%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.018), transparent);
          animation: lp-scanline 6s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        /* Ruled lines */
        .lp-ruled {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 28px,
            rgba(255,255,255,0.022) 28px,
            rgba(255,255,255,0.022) 29px
          );
          pointer-events: none;
        }

        /* Ghost watermark */
        .lp-ghost {
          position: absolute;
          bottom: -20px;
          right: -30px;
          font-size: clamp(80px, 18vw, 160px);
          font-weight: 900;
          color: rgba(255,255,255,0.025);
          letter-spacing: -2px;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .lp-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 540px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Top stamp row */
        .lp-stamps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          animation: lp-row-in 0.5s ease 0.1s both;
        }
        .lp-stamp-red {
          border: 2px solid #dc2626;
          color: #dc2626;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          padding: 4px 10px;
          text-transform: uppercase;
          opacity: 0.80;
        }
        .lp-ref {
          font-size: 9px;
          letter-spacing: 2px;
          color: #3a3a3a;
          text-transform: uppercase;
        }

        /* Title block */
        .lp-title-block {
          border-top: 1px solid rgba(255,255,255,0.10);
          border-bottom: 1px solid rgba(255,255,255,0.10);
          padding: 28px 0;
          margin-bottom: 32px;
          animation: lp-row-in 0.5s ease 0.2s both;
        }
        .lp-eyebrow {
          font-size: 10px;
          letter-spacing: 4px;
          color: #525252;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .lp-title {
          font-size: clamp(36px, 10vw, 68px);
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1;
          color: #ffffff;
          margin-bottom: 10px;
        }
        .lp-sub {
          font-size: 12px;
          letter-spacing: 1px;
          color: #525252;
          text-transform: uppercase;
          font-style: italic;
        }

        /* Body rows */
        .lp-body {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 40px;
          animation: lp-row-in 0.5s ease 0.3s both;
        }
        .lp-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 16px;
          padding: 9px 0;
          border-bottom: 1px solid rgba(255,255,255,0.055);
          align-items: baseline;
        }
        .lp-row:first-child { border-top: 1px solid rgba(255,255,255,0.055); }
        .lp-label {
          font-size: 9px;
          letter-spacing: 2px;
          color: #404040;
          text-transform: uppercase;
        }
        .lp-value {
          font-size: 12px;
          letter-spacing: 0.5px;
          color: #9a9a9a;
        }
        .lp-value.yellow { color: #facc15; }
        .lp-value.red    { color: #ef4444; }
        .lp-redact {
          display: inline-block;
          background: #2a2a2a;
          color: #2a2a2a;
          border-radius: 1px;
          padding: 0 4px;
          user-select: none;
        }

        /* CTA */
        .lp-cta-wrap {
          animation: lp-row-in 0.5s ease 0.4s both;
        }
        .lp-cta {
          width: 100%;
          padding: 16px 0;
          background: #ffffff;
          border: none;
          color: #000000;
          font-family: 'Courier New', Courier, monospace;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .lp-cta:hover { background: #facc15; }
        .lp-cursor {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: #000;
          animation: lp-blink 1.1s step-end infinite;
        }

        /* Fine print */
        .lp-fine {
          margin-top: 14px;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: #2e2e2e;
          text-align: center;
          line-height: 1.9;
          text-transform: uppercase;
          animation: lp-row-in 0.5s ease 0.5s both;
        }

        /* Corner decoration stamp */
        .lp-corner-stamp {
          position: absolute;
          top: 32px;
          right: 24px;
          border: 2.5px solid rgba(220,38,38,0.40);
          color: rgba(220,38,38,0.40);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
          padding: 5px 10px;
          text-transform: uppercase;
          line-height: 1.7;
          text-align: center;
          animation: lp-stamp 0.5s cubic-bezier(0.22,1,0.36,1) 0.45s both;
          transform: rotate(-12deg);
          transform-origin: center;
          pointer-events: none;
          z-index: 3;
        }

        @media (max-width: 480px) {
          .lp-row { grid-template-columns: 140px 1fr; }
          .lp-corner-stamp { display: none; }
        }
      `}</style>

      <div className={`lp-root${exiting ? ' exiting' : ''}`} onClick={enter}>
        <div className="lp-ruled" />
        <div className="lp-scan" />
        <div className="lp-ghost">CMP</div>

        <div className="lp-corner-stamp">
          Eyes<br/>Only
        </div>

        <div className="lp-inner">

          <div className="lp-stamps">
            <div className="lp-stamp-red">Top Secret</div>
            <span className="lp-ref">Ref: CMP&#8209;&#8734;&#8209;ACTIVE</span>
          </div>

          <div className="lp-title-block">
            <div className="lp-eyebrow">Classified Repository &nbsp;/&nbsp; Active Archive</div>
            <div className="lp-title">THE<br/>COMPENDIUM</div>
            <div className="lp-sub">Behavioral Intelligence, Deeply Unnecessary</div>
          </div>

          <div className="lp-body">
            <div className="lp-row">
              <span className="lp-label">Active Case Files</span>
              <span className="lp-value yellow">04 &nbsp;(and growing, regrettably)</span>
            </div>
            <div className="lp-row">
              <span className="lp-label">Clearance Required</span>
              <span className="lp-value red">Yes &nbsp;/&nbsp; Intake mandatory</span>
            </div>
            <div className="lp-row">
              <span className="lp-label">Clearance Duration</span>
              <span className="lp-value">Approximately 90 seconds</span>
            </div>
            <div className="lp-row">
              <span className="lp-label">Data Retained</span>
              <span className="lp-value">24 hours. Then nothing. You have our word.</span>
            </div>
            <div className="lp-row">
              <span className="lp-label">Classification Basis</span>
              <span className="lp-value">Voluntary disclosure. <span className="lp-redact">Everything else</span> was inferred.</span>
            </div>
            <div className="lp-row">
              <span className="lp-label">Purpose</span>
              <span className="lp-value">
                <span className="lp-redact">Redacted pending review scheduled for</span>{' '}
                <span className="lp-redact">a date that has not been set</span>
              </span>
            </div>
          </div>

          <div className="lp-cta-wrap">
            <button className="lp-cta" onClick={enter}>
              Apply for clearance
              <span className="lp-cursor" />
            </button>
          </div>

          <div className="lp-fine">
            By entering you confirm you have been here before<br />
            and simply do not remember it. &nbsp;This is normal. &nbsp;Proceed.
          </div>

        </div>
      </div>
    </>
  )
}