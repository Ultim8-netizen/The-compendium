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
  const [sample] = useState<CaseFileMeta[]>(() => sampleFiles(4))

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
        }
        .lp-root.exiting {
          animation: lp-exit 0.42s ease both;
          pointer-events: none;
        }

        .lp-inner { width: 100%; max-width: 600px; }

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

        .lp-divider { height: 1px; background: #161616; margin-bottom: 40px; }

        .lp-section-label {
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #333;
          margin-bottom: 20px;
        }

        .lp-files { display: flex; flex-direction: column; margin-bottom: 12px; }

        .lp-file {
          border-bottom: 1px solid #111;
          padding: 20px 0;
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
          margin-bottom: 6px;
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

        .lp-more {
          font-size: 10px;
          color: #2a2a2a;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-align: right;
          margin-bottom: 48px;
          padding-top: 14px;
        }

        .lp-steps { display: flex; flex-direction: column; margin-bottom: 48px; }

        .lp-step {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 18px;
          padding: 18px 0;
          border-bottom: 1px solid #111;
          align-items: start;
        }
        .lp-step:first-child { border-top: 1px solid #111; }

        .lp-step-num { font-size: 10px; font-weight: 900; color: #facc15; margin-top: 2px; }

        .lp-step-body { font-size: 13px; line-height: 1.85; color: #555; }
        .lp-step-body strong { color: #aaa; font-weight: 700; display: block; margin-bottom: 4px; }

        .lp-profile-box {
          border: 1px solid #161616;
          padding: 22px;
          margin-bottom: 48px;
          background: #0d0d0d;
        }

        .lp-profile-label { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #2a2a2a; margin-bottom: 14px; }
        .lp-profile-codename { font-size: 20px; font-weight: 900; color: #facc15; letter-spacing: 1px; margin-bottom: 16px; }

        .lp-profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px; }

        .lp-profile-field { background: #0a0a0a; border: 1px solid #161616; padding: 10px 12px; }
        .lp-profile-field-label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #2e2e2e; margin-bottom: 5px; }
        .lp-profile-field-value { font-size: 11px; color: #555; line-height: 1.6; }

        .lp-profile-note {
          font-size: 11px;
          color: #282828;
          line-height: 1.7;
          border-top: 1px solid #161616;
          padding-top: 14px;
          font-style: italic;
        }

        .lp-disclaimer {
          font-size: 12px;
          line-height: 1.9;
          color: #333;
          margin-bottom: 40px;
          padding: 16px 18px;
          border: 1px solid #111;
          border-left: 2px solid #1e1e1e;
        }
        .lp-disclaimer strong { color: #4a4a4a; }

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

        .lp-fine { font-size: 10px; color: #242424; text-align: center; line-height: 1.9; letter-spacing: 0.5px; }

        .lp-byline { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 44px; }
        .lp-byline-line { height: 1px; width: 20px; background: #161616; }
        .lp-byline-by { font-size: 9px; color: #222; letter-spacing: 3px; }
        .lp-byline-name { font-size: 10px; font-weight: 900; color: #2a2a2a; letter-spacing: 4px; transition: color 0.3s; }
        .lp-byline-name:hover { color: #555; }

        @media (max-width: 480px) {
          .lp-profile-grid { grid-template-columns: 1fr; }
          .lp-file { grid-template-columns: 60px 1fr; gap: 12px; }
        }
      `}</style>

      <div className={`lp-root${exiting ? ' exiting' : ''}`}>
        <div className="lp-inner">

          <div className="lp-hook">Hello there. Yes, you. You never learn, do you.</div>

          <div className="lp-title">THE<br />COMPENDIUM</div>

          <div className="lp-pitch">
            You are here because someone sent you a link. That someone is, in all likelihood, a person of <strong>questionable judgment and excellent taste.</strong> Whatever you see past this point is entirely on you.<br /><br />
            The Compendium is a classified archive documenting <strong>the most vile, irritating, and deeply universal niceties of human existence.</strong> The boring lecturer who has never once finished a sentence about the actual subject. The person playing a video at full volume in a shared space with the confidence of someone who has never considered another human being. The infinite talker. The dad joke. The queue.<br /><br />
            <em>All of it. Documented. In full. With the seriousness it deserves.</em><br /><br />
            Most of these files are, strictly speaking, <strong>confidential.</strong> We are sharing them anyway. This is, admittedly, the least confidential archive in existence. We ask only that you keep it to yourself, which you will not, which is frankly why we built it.
          </div>

          <div className="lp-divider" />

          <div className="lp-section-label">
            From the archive &mdash; {CASE_FILES.length} active files &mdash; a sample
          </div>
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
          <div className="lp-more">
            + {Math.max(0, CASE_FILES.length - 4)} more files inside the archive
          </div>

          <div className="lp-divider" />

          <div className="lp-section-label">To enter, you require clearance</div>
          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num">01</div>
              <div className="lp-step-body">
                <strong>You answer seven questions.</strong>
                They are not important questions. They are, however, specific ones. What face do you make when reading a long receipt. What rule do you follow that you invented yourself and have never told anyone about. You answer. Everything is noted. Nothing is judged, technically.
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">02</div>
              <div className="lp-step-body">
                <strong>A profile is generated.</strong>
                From your answers, a visitor profile is issued. It includes a codename, a threat level, an assigned section of the archive, and a behavioral assessment. The assessment will be accurate. This will be uncomfortable. We recommend proceeding anyway.
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">03</div>
              <div className="lp-step-body">
                <strong>You enter the archive.</strong>
                With clearance active, all files are accessible. Your profile exists for twenty-four hours. After that it is deleted entirely. Not archived. Not retained. Gone. We mention this now so you do not have to wonder about it later.
              </div>
            </div>
          </div>

          <div className="lp-divider" />

          <div className="lp-section-label">What clearance looks like</div>
          <div className="lp-profile-box">
            <div className="lp-profile-label">Sample &mdash; Previous visitor &mdash; Not you. Probably.</div>
            <div className="lp-profile-codename">UNIT WHISPERING DRAWER</div>
            <div className="lp-profile-grid">
              <div className="lp-profile-field">
                <div className="lp-profile-field-label">Threat level</div>
                <div className="lp-profile-field-value">ELEVATED (laughs at their own stories before finishing them)</div>
              </div>
              <div className="lp-profile-field">
                <div className="lp-profile-field-label">Assigned section</div>
                <div className="lp-profile-field-value">Corridor 11: Persons Who Say &ldquo;To Be Honest&rdquo; at Irregular Intervals</div>
              </div>
            </div>
            <div className="lp-profile-note">
              The visitor did not choose their codename. They did not choose their threat level. They did not argue with either. The committee has noted this as consistent with the profile.
            </div>
          </div>

          <div className="lp-disclaimer">
            <strong>A note on your data:</strong> your answers and profile are deleted after twenty-four hours. We do not keep them, sell them, or look at them once they are filed. This is not legal language designed to be technically true under specific conditions. It is simply what happens. The data will be gone. You have our word. Our word, in this particular matter, is the only thing in this archive that is not classified.
          </div>

          <button className="lp-cta" onClick={enter}>
            Apply for clearance
            <span className="lp-cursor" />
          </button>

          <div className="lp-fine">
            Takes approximately ninety seconds. No account. No email. No consequences.<br />
            Except the profile. That part is real.
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