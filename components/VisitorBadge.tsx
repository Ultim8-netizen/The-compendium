interface VisitorProfile {
  id: string; codename: string; threat_level: string;
  assigned_section: string; profile_summary: string; expires_at: string;
}

interface Props {
  profile:   VisitorProfile
  isNew:     boolean
  onEnter:   () => void
  onReissue?: () => void
}

export default function VisitorBadge({ profile, isNew, onEnter, onReissue }: Props) {
  const expiresTime      = new Date(profile.expires_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const issuedLabel      = isNew
    ? `Visitor Clearance Profile — Issued ${new Date().toUTCString()}`
    : `Active profile detected. Expires ${expiresTime} today.`
  const summaryParagraphs = profile.profile_summary.split('\n\n').filter(Boolean)

  return (
    <>
      <style>{`
        .vb-issued {
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--c-subtle); margin-bottom: 8px;
        }
        .vb-sublabel {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--c-subtle); margin-bottom: 10px;
        }
        .vb-codename {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600; color: var(--c-accent);
          letter-spacing: 2px; line-height: 1.1; margin-bottom: 4px;
        }
        .vb-expire {
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--c-subtle);
        }
        .vb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .vb-cell {
          background: var(--c-card); border: 1px solid var(--c-border);
          padding: 14px 16px;
        }
        .vb-cell-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--c-subtle); margin-bottom: 8px;
        }
        .vb-cell-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; line-height: 1.5; font-weight: 300;
        }
        .vb-assessment {
          border: 1px solid var(--c-border);
          background: var(--c-card); padding: 20px;
        }
        .vb-assessment-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--c-subtle); margin-bottom: 14px;
        }
        .vb-clearance {
          border: 1px solid var(--c-border);
          background: var(--c-card);
          padding: 14px 16px; display: flex; align-items: center; gap: 14px;
        }
        .vb-clearance-icon {
          width: 32px; height: 32px; border: 1px solid var(--c-accent);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .vb-clearance-dot { width: 14px; height: 14px; background: var(--c-accent); opacity: 0.5; }
        .vb-clearance-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--c-subtle); margin-bottom: 4px;
        }
        .vb-clearance-val {
          font-family: 'DM Mono', monospace;
          font-size: 12px; color: var(--c-accent); font-weight: 500; letter-spacing: 1px;
        }
        .vb-btn-primary {
          width: 100%; padding: 16px;
          background: var(--c-fg); color: var(--c-bg);
          font-family: 'DM Mono', monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase;
          border: none; cursor: pointer; transition: all 0.2s;
        }
        .vb-btn-primary:hover { background: var(--c-accent); color: var(--c-accent-fg); }
        .vb-btn-secondary {
          width: 100%; padding: 12px;
          background: transparent;
          border: 1px solid var(--c-border); color: var(--c-subtle);
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer; transition: all 0.2s;
        }
        .vb-btn-secondary:hover { border-color: var(--c-muted); color: var(--c-muted); }
        .vb-fine {
          font-family: 'DM Mono', monospace;
          font-size: 9px; color: var(--c-subtle); text-align: center; line-height: 1.8;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="max-w-xl w-full pt-10" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

        <div>
          <div className="vb-issued">{issuedLabel}</div>
          <div className="vb-sublabel">{isNew ? 'Assigned codename' : 'Your codename'}</div>
          <div className="vb-codename" style={{ fontSize: isNew ? '36px' : '28px' }}>
            {profile.codename}
          </div>
          <div className="vb-expire">
            {isNew
              ? 'Profile self-destructs in 24 hours from this moment.'
              : 'This profile will be destroyed at the time listed above.'}
          </div>
        </div>

        <div className="vb-grid">
          <div className="vb-cell">
            <div className="vb-cell-label">Threat level</div>
            <div className="vb-cell-val" style={{ color: '#dc2626' }}>{profile.threat_level}</div>
          </div>
          <div className="vb-cell">
            <div className="vb-cell-label">Assigned section</div>
            <div className="vb-cell-val" style={{ color: 'var(--c-muted)' }}>{profile.assigned_section}</div>
          </div>
        </div>

        {isNew && summaryParagraphs.length > 0 && (
          <div className="vb-assessment">
            <div className="vb-assessment-label">Behavioral assessment</div>
            {summaryParagraphs.map((para, i) => (
              <p key={i} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: i === summaryParagraphs.length - 1 ? '11px' : '13px',
                lineHeight: 1.75, marginBottom: i < summaryParagraphs.length - 1 ? '14px' : 0,
                color: i === summaryParagraphs.length - 1 ? 'var(--c-accent)' : 'var(--c-muted)',
                fontWeight: i === summaryParagraphs.length - 1 ? 600 : 300,
                letterSpacing: i === summaryParagraphs.length - 1 ? '0.5px' : 'normal',
              }}>{para}</p>
            ))}
          </div>
        )}

        {!isNew && (
          <div className="vb-clearance">
            <div className="vb-clearance-icon">
              <div className="vb-clearance-dot" />
            </div>
            <div>
              <div className="vb-clearance-label">Clearance status</div>
              <div className="vb-clearance-val">ACTIVE — NO RE-INTAKE REQUIRED</div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={onEnter} className="vb-btn-primary">
            {isNew ? 'ENTER THE COMPENDIUM' : 'RESUME SESSION, ENTER THE COMPENDIUM'}
          </button>
          {!isNew && onReissue && (
            <button onClick={onReissue} className="vb-btn-secondary">
              This is not me. Generate a new profile.
            </button>
          )}
          <p className="vb-fine">
            {isNew
              ? 'All intake data expires in 24 hours. We retain nothing. This was always going to be true.'
              : 'This profile exists for 24 hours, after which it will be destroyed entirely. The data will simply be gone.'}
          </p>
        </div>
      </div>
    </>
  )
}