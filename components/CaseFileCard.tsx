import Link from 'next/link'
import type { CaseFileMeta } from '@/case-files/_registry'

/* ─── Per-department gold accent palette ─────────────────────────── */
const DEPT_ACCENT: Record<string, { glyph: string; hue: string; label: string }> = {
  'Dept. of Conversational Threat Assessment':        { glyph: '◎', hue: '#C8941A', label: 'ORAL' },
  'Dept. of Intergenerational Humor Trauma':          { glyph: '⟡', hue: '#B87A00', label: 'HUMOR' },
  'Division of Intergenerational Humor Trauma':       { glyph: '⟡', hue: '#B87A00', label: 'HUMOR' },
  'Dept. of Academic Endurance':                      { glyph: '◈', hue: '#A06010', label: 'ACADEMIC' },
  'Office of Curricular Integrity & Narrative Containment': { glyph: '⊡', hue: '#8A5208', label: 'CURRICULAR' },
  'Public Conduct Authority':                         { glyph: '◉', hue: '#9A7820', label: 'PUBLIC' },
  'Dept. of Romantic Threat Assessment':              { glyph: '◇', hue: '#D4A020', label: 'ROMANTIC' },
  'Dept. of Professional Conduct & Etiquette':        { glyph: '⬡', hue: '#C89030', label: 'CONDUCT' },
  'Dept. of Eternal & Irrevocable Services':          { glyph: '◈', hue: '#7A4A08', label: 'ETERNAL' },
  'Dept. of Literary Instruction & Controlled Demolition': { glyph: '⟐', hue: '#B08020', label: 'LITERARY' },
  'Dept. of Romantic Jurisprudence':                  { glyph: '◎', hue: '#C87820', label: 'JURIDICAL' },
  'Dept. of Involuntary Commerce & Product Disposal': { glyph: '⊞', hue: '#8A6A00', label: 'COMMERCE' },
  'Dept. of Political Satire & Civilized Animals':    { glyph: '⬢', hue: '#A88A10', label: 'SATIRE' },
}

const DEFAULT_ACCENT = { glyph: '◆', hue: '#C8941A', label: 'FILE' }

interface Props { file: CaseFileMeta; index?: number }

export default function CaseFileCard({ file, index = 0 }: Props) {
  const accent = DEPT_ACCENT[file.department] ?? DEFAULT_ACCENT
  const num    = String(index + 1).padStart(2, '0')

  return (
    <>
      <style>{`
        @keyframes cfc-shimmer {
          0%   { transform: translateX(-180%) skewX(-12deg); }
          100% { transform: translateX(180%)  skewX(-12deg); }
        }

        .cfc {
          display: block;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            145deg,
            rgba(255,255,255,0.022) 0%,
            rgba(200,148,26,0.04)  50%,
            rgba(255,255,255,0.012) 100%
          );
          border: 1px solid rgba(200,148,26,0.18);
          border-top: 1px solid rgba(255,215,0,0.12);
          cursor: pointer;
          transition:
            border-color 0.25s,
            box-shadow   0.25s,
            background   0.25s;
        }

        .cfc:hover {
          border-color: rgba(200,148,26,0.55);
          box-shadow:
            0 0 0 1px rgba(200,148,26,0.12),
            0 8px 32px rgba(200,148,26,0.14),
            inset 0 1px 0 rgba(255,215,0,0.08);
          background: linear-gradient(
            145deg,
            rgba(255,255,255,0.035) 0%,
            rgba(200,148,26,0.07)  50%,
            rgba(255,255,255,0.018) 100%
          );
        }

        /* shimmer sweep on hover */
        .cfc::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent          0%,
            rgba(255,240,160,0.06) 40%,
            rgba(255,248,180,0.14) 50%,
            rgba(255,240,160,0.06) 60%,
            transparent          100%
          );
          transform: translateX(-180%) skewX(-12deg);
          pointer-events: none;
          z-index: 1;
          transition: none;
        }
        .cfc:hover::before {
          animation: cfc-shimmer 0.6s ease forwards;
        }

        .cfc-accent-bar {
          height: 2px;
          width: 100%;
          transition: opacity 0.25s;
          opacity: 0.7;
        }
        .cfc:hover .cfc-accent-bar { opacity: 1; }

        .cfc-body {
          padding: 22px 24px 18px;
          position: relative;
          z-index: 2;
        }

        .cfc-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 20px;
        }

        .cfc-glyph-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(200,148,26,0.25);
          flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s;
          background: rgba(200,148,26,0.04);
        }
        .cfc:hover .cfc-glyph-wrap {
          border-color: rgba(200,148,26,0.5);
          background: rgba(200,148,26,0.08);
        }

        .cfc-glyph {
          font-size: 16px;
          line-height: 1;
          transition: transform 0.3s;
        }
        .cfc:hover .cfc-glyph { transform: scale(1.15) rotate(15deg); }

        .cfc-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 3px;
        }

        .cfc-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -1px;
          background: linear-gradient(
            135deg,
            #3A2208 0%,
            #7A5A14 30%,
            #C8941A 60%,
            #3A2208 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.35;
          transition: opacity 0.25s;
        }
        .cfc:hover .cfc-num { opacity: 0.65; }

        .cfc-code {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 1.5px;
          color: #3A2808;
          text-align: right;
        }

        .cfc-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #E8C060;
          line-height: 1.3;
          margin-bottom: 6px;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-title { color: #FFD700; }

        .cfc-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-style: italic;
          font-weight: 300;
          color: #8A6A20;
          line-height: 1.55;
          margin-bottom: 18px;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-subtitle { color: #B07820; }

        .cfc-dept {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #3A2808;
          margin-bottom: 16px;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-dept { color: #5A3E10; }

        .cfc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .cfc-tag {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #4A3010;
          border: 1px solid rgba(200,148,26,0.15);
          padding: 3px 8px;
          background: rgba(200,148,26,0.04);
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .cfc:hover .cfc-tag {
          border-color: rgba(200,148,26,0.35);
          color: #7A5A14;
          background: rgba(200,148,26,0.07);
        }

        .cfc-foot {
          border-top: 1px solid rgba(200,148,26,0.1);
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          transition: border-color 0.25s;
        }
        .cfc:hover .cfc-foot { border-color: rgba(200,148,26,0.25); }

        .cfc-foot-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #3A2808;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-foot-label { color: #7A5A14; }

        .cfc-arrow {
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          color: rgba(200,148,26,0.3);
          transform: translateX(0);
          transition: transform 0.25s, color 0.25s;
        }
        .cfc:hover .cfc-arrow {
          color: #C8941A;
          transform: translateX(5px);
        }
      `}</style>

      <Link href={`/compendium/${file.slug}`} className="cfc">

        {/* top accent bar */}
        <div
          className="cfc-accent-bar"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent.hue}, ${accent.hue}90, transparent)`,
          }}
        />

        <div className="cfc-body">
          <div className="cfc-top">
            <div
              className="cfc-glyph-wrap"
              style={{ borderColor: `${accent.hue}35` }}
            >
              <span
                className="cfc-glyph"
                style={{ color: accent.hue }}
              >
                {accent.glyph}
              </span>
            </div>

            <div className="cfc-meta">
              <div className="cfc-num">{num}</div>
              <div className="cfc-code">{file.classificationCode}</div>
            </div>
          </div>

          <div className="cfc-title">{file.title}</div>
          <div className="cfc-subtitle">{file.subtitle}</div>
          <div className="cfc-dept">{file.department}</div>

          <div className="cfc-tags">
            {file.tags.map(tag => (
              <span key={tag} className="cfc-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="cfc-foot">
          <span className="cfc-foot-label">Access file</span>
          <span className="cfc-arrow">→</span>
        </div>

      </Link>
    </>
  )
}