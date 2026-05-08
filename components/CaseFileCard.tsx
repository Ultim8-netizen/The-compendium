import Link from 'next/link'
import type { CaseFileMeta } from '@/case-files/_registry'

const THREAT: Record<string, { color: string }> = {
  LOW:      { color: '#16a34a' },
  MODERATE: { color: '#d97706' },
  CRITICAL: { color: '#ea580c' },
  TERMINAL: { color: '#dc2626' },
}

const THREAT_FILL: Record<string, string> = {
  LOW: '25%', MODERATE: '50%', CRITICAL: '75%', TERMINAL: '100%',
}

interface Props { file: CaseFileMeta; index?: number }

export default function CaseFileCard({ file, index = 0 }: Props) {
  const t    = THREAT[file.threatLevel]      ?? THREAT.MODERATE
  const fill = THREAT_FILL[file.threatLevel] ?? '50%'

  return (
    <>
      <style>{`
        .cfc-wrap {
          display: block; text-decoration: none;
          position: relative;
          border: 1px solid var(--c-border);
          background: var(--c-card);
          overflow: hidden;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }
        .cfc-wrap:hover {
          border-color: var(--c-muted);
          box-shadow: 0 4px 24px var(--c-shadow);
        }
        .cfc-watermark {
          position: absolute; bottom: 8px; right: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 56px; font-weight: 700;
          color: var(--c-border);
          pointer-events: none; user-select: none; line-height: 1;
          transition: color 0.2s;
        }
        .cfc-wrap:hover .cfc-watermark { color: var(--c-bg-secondary); }
        .cfc-inner { padding: 20px; position: relative; z-index: 1; }
        .cfc-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 8px; margin-bottom: 16px;
        }
        .cfc-badge {
          font-family: 'DM Mono', monospace;
          font-size: 9px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          border: 1px solid; padding: 2px 8px; flex-shrink: 0;
        }
        .cfc-code {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 2px;
          color: var(--c-subtle); text-align: right;
        }
        .cfc-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          color: var(--c-fg);
          line-height: 1.3; margin-bottom: 4px;
          text-transform: uppercase; letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .cfc-wrap:hover .cfc-title { color: var(--c-accent); }
        .cfc-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; color: var(--c-muted);
          margin-bottom: 14px; line-height: 1.5; font-weight: 300;
        }
        .cfc-dept {
          font-family: 'DM Mono', monospace;
          font-size: 9px; text-transform: uppercase;
          letter-spacing: 2px; color: var(--c-subtle); margin-bottom: 12px;
        }
        .cfc-meter-label {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 4px;
        }
        .cfc-meter-txt {
          font-family: 'DM Mono', monospace;
          font-size: 8px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--c-subtle);
        }
        .cfc-track {
          height: 1px; background: var(--c-border);
          position: relative; margin-bottom: 14px;
        }
        .cfc-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .cfc-tag {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 1px;
          color: var(--c-subtle);
          border: 1px solid var(--c-border);
          padding: 2px 7px;
          transition: border-color 0.2s;
        }
        .cfc-wrap:hover .cfc-tag { border-color: var(--c-muted); }
        .cfc-action {
          border-top: 1px solid var(--c-border);
          padding: 10px 20px;
          display: flex; align-items: center; justify-content: space-between;
          opacity: 0; transition: opacity 0.2s;
          background: var(--c-bg-secondary);
        }
        .cfc-wrap:hover .cfc-action { opacity: 1; }
        .cfc-action-txt {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--c-muted);
        }
      `}</style>

      <Link href={`/compendium/${file.slug}`} className="cfc-wrap shimmer-card">
        <div className="cfc-watermark" aria-hidden>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* threat bar */}
        <div style={{ height: '2px', width: '100%', background: 'var(--c-border)' }}>
          <div style={{ height: '2px', width: fill, background: t.color, transition: 'width 0.4s' }} />
        </div>

        <div className="cfc-inner">
          <div className="cfc-top">
            <div className="cfc-badge" style={{ color: t.color, borderColor: t.color }}>
              {file.threatLevel}
            </div>
            <div className="cfc-code">{file.classificationCode}</div>
          </div>

          <div className="cfc-title">{file.title}</div>
          <div className="cfc-subtitle">{file.subtitle}</div>
          <div className="cfc-dept">{file.department}</div>

          <div className="cfc-meter-label">
            <span className="cfc-meter-txt">Threat Meter</span>
            <span className="cfc-meter-txt" style={{ color: t.color }}>{file.threatLevel}</span>
          </div>
          <div className="cfc-track">
            <div style={{ position: 'absolute', inset: 0, width: fill, background: t.color }} />
          </div>

          <div className="cfc-tags">
            {file.tags.map(tag => (
              <span key={tag} className="cfc-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="cfc-action">
          <span className="cfc-action-txt">Access file</span>
          <span style={{ color: 'var(--c-accent)', fontFamily: "'DM Mono', monospace", fontSize: '12px' }}>→</span>
        </div>
      </Link>
    </>
  )
}