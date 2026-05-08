import Link from 'next/link'
import type { CaseFileMeta } from '@/case-files/_registry'

const DEPT_ACCENT: Record<string, { glyph: string; hue: string; label: string }> = {
  'Dept. of Conversational Threat Assessment':        { glyph: '◎', hue: '#C8941A', label: 'ORAL' },
  'Dept. of Intergenerational Humor Trauma':          { glyph: '⟡', hue: '#D4A020', label: 'HUMOR' },
  'Division of Intergenerational Humor Trauma':       { glyph: '⟡', hue: '#D4A020', label: 'HUMOR' },
  'Dept. of Academic Endurance':                      { glyph: '◈', hue: '#C08020', label: 'ACADEMIC' },
  'Office of Curricular Integrity & Narrative Containment': { glyph: '⊡', hue: '#B87820', label: 'CURRICULAR' },
  'Public Conduct Authority':                         { glyph: '◉', hue: '#C89828', label: 'PUBLIC' },
  'Dept. of Romantic Threat Assessment':              { glyph: '◇', hue: '#E0B030', label: 'ROMANTIC' },
  'Dept. of Professional Conduct & Etiquette':        { glyph: '⬡', hue: '#D4A030', label: 'CONDUCT' },
  'Dept. of Eternal & Irrevocable Services':          { glyph: '◈', hue: '#A06820', label: 'ETERNAL' },
  'Dept. of Literary Instruction & Controlled Demolition': { glyph: '⟐', hue: '#C89828', label: 'LITERARY' },
  'Dept. of Romantic Jurisprudence':                  { glyph: '◎', hue: '#D4A020', label: 'JURIDICAL' },
  'Dept. of Involuntary Commerce & Product Disposal': { glyph: '⊞', hue: '#B88A20', label: 'COMMERCE' },
  'Dept. of Political Satire & Civilized Animals':    { glyph: '⬢', hue: '#C8A828', label: 'SATIRE' },
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
          cursor: pointer;

          /* base card surface — visible panel */
          background: linear-gradient(
            160deg,
            #1e1500 0%,
            #160f00 40%,
            #110c00 100%
          );

          /* 3D layered border system */
          border: 1px solid rgba(200,148,26,0.35);
          border-top-color:    rgba(255,220,80,0.25);
          border-bottom-color: rgba(80,50,0,0.8);
          border-right-color:  rgba(80,50,0,0.6);

          /* depth shadow stack */
          box-shadow:
            0 1px 0   rgba(255,215,0,0.08),
            0 2px 4px rgba(0,0,0,0.5),
            0 4px 12px rgba(0,0,0,0.4),
            0 8px 24px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,215,0,0.06),
            inset 0 0 40px rgba(200,148,26,0.03);

          transition:
            transform    0.28s cubic-bezier(0.25,0.8,0.25,1),
            box-shadow   0.28s cubic-bezier(0.25,0.8,0.25,1),
            border-color 0.28s ease,
            background   0.28s ease;
        }

        .cfc:hover {
          transform: translateY(-4px) scale(1.012);

          background: linear-gradient(
            160deg,
            #261b00 0%,
            #1c1300 40%,
            #161000 100%
          );

          border-color:        rgba(200,148,26,0.65);
          border-top-color:    rgba(255,230,100,0.45);
          border-bottom-color: rgba(120,80,0,0.9);
          border-right-color:  rgba(120,80,0,0.7);

          box-shadow:
            0 1px 0   rgba(255,215,0,0.15),
            0 4px 8px  rgba(0,0,0,0.6),
            0 8px 24px rgba(0,0,0,0.5),
            0 16px 48px rgba(0,0,0,0.4),
            0 0 0 1px  rgba(200,148,26,0.2),
            inset 0 1px 0 rgba(255,215,0,0.12),
            inset 0 0 60px rgba(200,148,26,0.05);
        }

        /* gold shimmer sweep */
        .cfc::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent          0%,
            rgba(255,240,160,0.04) 38%,
            rgba(255,248,180,0.12) 50%,
            rgba(255,240,160,0.04) 62%,
            transparent          100%
          );
          transform: translateX(-180%) skewX(-12deg);
          pointer-events: none;
          z-index: 1;
        }
        .cfc:hover::before {
          animation: cfc-shimmer 0.65s ease forwards;
        }

        /* subtle inner bevel highlight — top edge */
        .cfc::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,215,0,0.18) 20%,
            rgba(255,232,120,0.32) 50%,
            rgba(255,215,0,0.18) 80%,
            transparent
          );
          pointer-events: none;
          z-index: 2;
        }

        /* accent bar */
        .cfc-accent-bar {
          height: 2px;
          width: 100%;
          opacity: 0.8;
          transition: opacity 0.25s;
          position: relative;
          z-index: 3;
        }
        .cfc:hover .cfc-accent-bar { opacity: 1; }

        .cfc-body {
          padding: 22px 24px 18px;
          position: relative;
          z-index: 4;
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
          flex-shrink: 0;
          background: rgba(200,148,26,0.08);
          border: 1px solid rgba(200,148,26,0.3);
          border-top-color:  rgba(255,215,0,0.2);
          border-left-color: rgba(255,215,0,0.15);
          box-shadow:
            inset 0 1px 0 rgba(255,215,0,0.08),
            0 2px 6px rgba(0,0,0,0.4);
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .cfc:hover .cfc-glyph-wrap {
          border-color: rgba(200,148,26,0.6);
          border-top-color: rgba(255,215,0,0.4);
          background: rgba(200,148,26,0.14);
          box-shadow:
            inset 0 1px 0 rgba(255,215,0,0.14),
            0 2px 8px rgba(0,0,0,0.5),
            0 0 12px rgba(200,148,26,0.12);
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
          gap: 4px;
        }

        .cfc-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -1px;
          background: linear-gradient(
            135deg,
            #5A3808 0%,
            #9A7020 30%,
            #D4A828 60%,
            #5A3808 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.55;
          transition: opacity 0.25s;
        }
        .cfc:hover .cfc-num { opacity: 0.9; }

        .cfc-code {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 1.5px;
          color: #6A4E18;
          text-align: right;
        }
        .cfc:hover .cfc-code { color: #9A7830; }

        /* ── TEXT — all legible at rest ── */

        .cfc-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #F0CC60;
          line-height: 1.35;
          margin-bottom: 8px;
          transition: color 0.2s;
          text-shadow: 0 1px 4px rgba(0,0,0,0.6);
        }
        .cfc:hover .cfc-title { color: #FFD700; }

        .cfc-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-style: italic;
          font-weight: 300;
          color: #B08C3A;
          line-height: 1.6;
          margin-bottom: 18px;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-subtitle { color: #C8A050; }

        .cfc-dept {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6A4E18;
          margin-bottom: 16px;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-dept { color: #9A7228; }

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
          color: #8A6820;
          border: 1px solid rgba(200,148,26,0.22);
          padding: 3px 8px;
          background: rgba(200,148,26,0.06);
          box-shadow: inset 0 1px 0 rgba(255,215,0,0.04);
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .cfc:hover .cfc-tag {
          border-color: rgba(200,148,26,0.45);
          color: #C8A040;
          background: rgba(200,148,26,0.10);
        }

        .cfc-foot {
          border-top: 1px solid rgba(200,148,26,0.15);
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 4;
          background: rgba(0,0,0,0.2);
          transition: border-color 0.25s, background 0.25s;
        }
        .cfc:hover .cfc-foot {
          border-color: rgba(200,148,26,0.35);
          background: rgba(0,0,0,0.3);
        }

        .cfc-foot-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #6A4E18;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-foot-label { color: #C8941A; }

        .cfc-arrow {
          font-size: 14px;
          color: rgba(200,148,26,0.4);
          transform: translateX(0);
          transition: transform 0.25s, color 0.25s;
        }
        .cfc:hover .cfc-arrow {
          color: #FFD700;
          transform: translateX(6px);
        }
      `}</style>

      <Link href={`/compendium/${file.slug}`} className="cfc">

        {/* top accent gradient bar */}
        <div
          className="cfc-accent-bar"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent.hue}CC, ${accent.hue}, ${accent.hue}CC, transparent)`,
          }}
        />

        <div className="cfc-body">
          <div className="cfc-top">
            <div
              className="cfc-glyph-wrap"
              style={{ borderColor: `${accent.hue}50` }}
            >
              <span className="cfc-glyph" style={{ color: accent.hue }}>
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