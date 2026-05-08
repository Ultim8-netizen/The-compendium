import Link from 'next/link'
import type { CaseFileMeta } from '@/case-files/_registry'

const DEPT_ACCENT: Record<string, { glyph: string }> = {
  'Dept. of Conversational Threat Assessment':              { glyph: '◎' },
  'Dept. of Intergenerational Humor Trauma':                { glyph: '⟡' },
  'Division of Intergenerational Humor Trauma':             { glyph: '⟡' },
  'Dept. of Academic Endurance':                            { glyph: '◈' },
  'Office of Curricular Integrity & Narrative Containment': { glyph: '⊡' },
  'Public Conduct Authority':                               { glyph: '◉' },
  'Dept. of Romantic Threat Assessment':                    { glyph: '◇' },
  'Dept. of Professional Conduct & Etiquette':              { glyph: '⬡' },
  'Dept. of Eternal & Irrevocable Services':                { glyph: '◈' },
  'Dept. of Literary Instruction & Controlled Demolition':  { glyph: '⟐' },
  'Dept. of Romantic Jurisprudence':                        { glyph: '◎' },
  'Dept. of Involuntary Commerce & Product Disposal':       { glyph: '⊞' },
  'Dept. of Political Satire & Civilized Animals':          { glyph: '⬢' },
}

const DEFAULT_ACCENT = { glyph: '◆' }

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

          background: linear-gradient(
            160deg,
            rgba(255,255,255,0.04) 0%,
            var(--c-card)          40%,
            var(--c-bg-secondary)  100%
          );

          border: 1px solid var(--c-border);
          border-top-color:    var(--c-shimmer);
          border-bottom-color: rgba(0,0,0,0.5);
          border-right-color:  rgba(0,0,0,0.35);

          box-shadow:
            0 1px 0   var(--c-shimmer),
            0 2px 4px rgba(0,0,0,0.5),
            0 4px 12px rgba(0,0,0,0.38),
            0 8px 24px rgba(0,0,0,0.28),
            inset 0 1px 0 rgba(255,255,255,0.04),
            inset 0 0 40px rgba(0,0,0,0.1);

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
            rgba(255,255,255,0.06) 0%,
            var(--c-card)          40%,
            var(--c-bg)            100%
          );

          border-color:        var(--c-muted);
          border-top-color:    var(--c-accent);
          border-bottom-color: rgba(0,0,0,0.7);
          border-right-color:  rgba(0,0,0,0.5);

          box-shadow:
            0 1px 0   var(--c-accent),
            0 4px 8px  rgba(0,0,0,0.6),
            0 8px 24px rgba(0,0,0,0.5),
            0 16px 48px rgba(0,0,0,0.38),
            0 0 0 1px  var(--c-border),
            inset 0 1px 0 var(--c-shimmer),
            inset 0 0 60px rgba(0,0,0,0.08);
        }

        /* shimmer sweep */
        .cfc::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent        0%,
            var(--c-shimmer)   48%,
            var(--c-shimmer)   52%,
            transparent        100%
          );
          opacity: 0.25;
          transform: translateX(-180%) skewX(-12deg);
          pointer-events: none;
          z-index: 1;
        }
        .cfc:hover::before {
          animation: cfc-shimmer 0.65s ease forwards;
        }

        /* inset top bevel highlight */
        .cfc::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--c-shimmer) 30%,
            var(--c-metal-bright) 50%,
            var(--c-shimmer) 70%,
            transparent
          );
          opacity: 0.4;
          pointer-events: none;
          z-index: 2;
        }

        /* accent bar */
        .cfc-accent-bar {
          height: 2px;
          width: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            var(--c-muted),
            var(--c-accent),
            var(--c-muted),
            transparent
          );
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
          background: var(--c-card);
          border: 1px solid var(--c-border);
          border-top-color:  var(--c-shimmer);
          border-left-color: var(--c-shimmer);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.04),
            0 2px 6px rgba(0,0,0,0.4);
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .cfc:hover .cfc-glyph-wrap {
          border-color:     var(--c-muted);
          border-top-color: var(--c-accent);
          background: var(--c-bg-secondary);
          box-shadow:
            inset 0 1px 0 var(--c-shimmer),
            0 2px 8px rgba(0,0,0,0.5),
            0 0 12px var(--c-shadow);
        }

        .cfc-glyph {
          font-size: 16px;
          line-height: 1;
          color: var(--c-accent);
          transition: transform 0.3s, color 0.2s;
        }
        .cfc:hover .cfc-glyph {
          transform: scale(1.15) rotate(15deg);
          color: var(--c-metal-bright);
        }

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
          color: var(--c-muted);
          opacity: 0.4;
          transition: opacity 0.25s;
        }
        .cfc:hover .cfc-num { opacity: 0.85; }

        .cfc-code {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 1.5px;
          color: var(--c-subtle);
          text-align: right;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-code { color: var(--c-muted); }

        .cfc-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--c-fg);
          line-height: 1.35;
          margin-bottom: 8px;
          transition: color 0.2s;
          text-shadow: 0 1px 6px rgba(0,0,0,0.6);
        }
        .cfc:hover .cfc-title { color: var(--c-accent); }

        .cfc-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-style: italic;
          font-weight: 300;
          color: var(--c-muted);
          line-height: 1.6;
          margin-bottom: 18px;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-subtitle { color: var(--c-fg); }

        .cfc-dept {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--c-subtle);
          margin-bottom: 16px;
          transition: color 0.2s;
        }
        .cfc:hover .cfc-dept { color: var(--c-muted); }

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
          color: var(--c-subtle);
          border: 1px solid var(--c-border);
          padding: 3px 8px;
          background: var(--c-card);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .cfc:hover .cfc-tag {
          border-color: var(--c-muted);
          color: var(--c-muted);
          background: var(--c-bg-secondary);
        }

        .cfc-foot {
          border-top: 1px solid var(--c-border);
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 4;
          background: rgba(0,0,0,0.18);
          transition: border-color 0.25s, background 0.25s;
        }
        .cfc:hover .cfc-foot {
          border-color: var(--c-muted);
          background: rgba(0,0,0,0.28);
        }

        .cfc-foot-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--c-subtle);
          transition: color 0.2s;
        }
        .cfc:hover .cfc-foot-label { color: var(--c-accent); }

        .cfc-arrow {
          font-size: 14px;
          color: var(--c-subtle);
          transform: translateX(0);
          transition: transform 0.25s, color 0.25s;
        }
        .cfc:hover .cfc-arrow {
          color: var(--c-accent);
          transform: translateX(6px);
        }
      `}</style>

      <Link href={`/compendium/${file.slug}`} className="cfc">
        <div className="cfc-accent-bar" />

        <div className="cfc-body">
          <div className="cfc-top">
            <div className="cfc-glyph-wrap">
              <span className="cfc-glyph">{accent.glyph}</span>
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