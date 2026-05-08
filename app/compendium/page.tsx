import { CASE_FILES } from '@/case-files/_registry'
import CaseFileCard from '@/components/CaseFileCard'

export default function CompendiumPage() {
  return (
    <>
      <style>{`
        .cp-root {
          min-height: 100vh;
          background: var(--c-bg);
          color: var(--c-fg);
          font-family: 'DM Sans', sans-serif;
          padding: 24px;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .cp-inner { max-width: 900px; margin: 0 auto; padding-top: 40px; }
        .cp-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--c-subtle); margin-bottom: 8px;
        }
        .cp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 8vw, 64px);
          font-weight: 300;
          color: var(--c-fg);
          margin-bottom: 6px;
          letter-spacing: -1px;
          line-height: 1;
        }
        .cp-sub {
          font-family: 'DM Sans', sans-serif;
          color: var(--c-muted); font-size: 14px;
          margin-bottom: 40px; font-weight: 300;
        }
        .cp-grid {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          margin-bottom: 48px;
        }
        .cp-footer {
          border-top: 1px solid var(--c-border);
          padding-top: 24px;
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--c-subtle);
          text-align: center; letter-spacing: 1px; line-height: 2;
        }
        .cp-byline {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; margin-top: 16px;
        }
        .cp-byline-line { height: 1px; width: 20px; background: var(--c-border); }
        .cp-byline-name {
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          color: var(--c-subtle); letter-spacing: 4px;
          transition: color 0.3s;
        }
        .cp-byline-name:hover { color: var(--c-fg); }
      `}</style>

      <main className="cp-root">
        <div className="cp-inner">
          <div className="cp-eyebrow">Classified Repository, Active Archive</div>
          <h1 className="cp-title">THE COMPENDIUM</h1>
          <p className="cp-sub">
            {CASE_FILES.length} active files. All classified. All deeply, profoundly unnecessary.
          </p>

          <div className="cp-grid">
            {CASE_FILES.map((file, i) => (
              <CaseFileCard key={file.slug} file={file} index={i} />
            ))}
          </div>

          <div className="cp-footer">
            All profiles collected at entry expire within 24 hours. We keep none of it.
            This was always going to be true.
            <div className="cp-byline">
              <div className="cp-byline-line" />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'var(--c-subtle)', letterSpacing: '3px' }}>by</span>
              <span className="cp-byline-name">ABYSSPROTOCOL</span>
              <div className="cp-byline-line" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}