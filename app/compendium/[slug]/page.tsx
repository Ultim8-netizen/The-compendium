import { CASE_FILES } from '@/case-files/_registry'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return CASE_FILES.map(f => ({ slug: f.slug }))
}

export default async function CaseFilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const meta = CASE_FILES.find(f => f.slug === slug)
  if (!meta) return notFound()

  const { default: CaseFileComponent } = await import(`@/case-files/${slug}`)

  return (
    <>
      <style>{`
        .cf-shell {
          min-height: 100vh;
          background: var(--c-bg);
          transition: background 0.25s ease;
        }

        /* warm wood-panel nav */
        .cf-nav {
          background: linear-gradient(135deg, #1c1008 0%, #2a1a08 60%, #1c1008 100%);
          border-bottom: 2px solid rgba(200,148,26,0.3);
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }
        .cf-nav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg, transparent, transparent 60px,
            rgba(200,148,26,0.04) 60px, rgba(200,148,26,0.04) 61px
          );
          pointer-events: none;
        }

        .cf-nav-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .cf-back {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #8a6a30;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s;
        }
        .cf-back:hover { color: #f5e8c0; }

        .cf-nav-sep {
          width: 1px;
          height: 18px;
          background: rgba(200,148,26,0.2);
        }

        .cf-nav-archive {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 400;
          color: #c8a860;
          letter-spacing: 1px;
        }
        .cf-nav-archive em { font-style: italic; color: #e8c870; }

        .cf-nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cf-byline {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cf-byline-sep { width: 10px; height: 1px; background: rgba(200,148,26,0.2); }
        .cf-byline-by  { font-family: 'DM Mono', monospace; font-size: 8px; color: #4a3010; letter-spacing: 2px; }
        .cf-byline-name {
          font-family: 'DM Mono', monospace;
          font-size: 9px; font-weight: 500; color: #6a4a20;
          letter-spacing: 3px; transition: color 0.3s;
        }
        .cf-byline-name:hover { color: #f5e8c0; }

        .cf-code {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: #3a2810;
          letter-spacing: 2px;
        }

        /* thin gold accent bar under nav */
        .cf-accent-bar {
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(200,148,26,0.5), rgba(200,148,26,0.8), rgba(200,148,26,0.5), transparent);
        }

        /* warm breadcrumb strip */
        .cf-breadcrumb {
          background: rgba(245,232,192,0.5);
          border-bottom: 1px solid rgba(200,148,26,0.12);
          padding: 8px 28px;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(4px);
        }
        .cf-crumb-leaf { font-size: 12px; opacity: 0.6; }
        .cf-crumb-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--c-subtle);
          text-transform: uppercase;
        }
        .cf-crumb-sep {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: rgba(160,96,16,0.3);
        }
        .cf-crumb-active {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--c-muted);
          text-transform: uppercase;
          font-weight: 500;
        }

        .cf-body {
          max-width: 880px;
          margin: 0 auto;
          padding: 36px 16px 64px;
        }
      `}</style>

      <main className="cf-shell">

        {/* Wood-panel nav */}
        <nav className="cf-nav">
          <div className="cf-nav-left">
            <Link href="/compendium" className="cf-back">
              🍃 ← Archive
            </Link>
            <div className="cf-nav-sep" />
            <span className="cf-nav-archive">The <em>Compendium</em></span>
          </div>
          <div className="cf-nav-right">
            <div className="cf-byline">
              <div className="cf-byline-sep" />
              <span className="cf-byline-by">by</span>
              <span className="cf-byline-name">ABYSSPROTOCOL</span>
            </div>
            <div className="cf-code">{meta.classificationCode}</div>
          </div>
        </nav>

        {/* Gold accent line */}
        <div className="cf-accent-bar" />

        {/* Breadcrumb */}
        <div className="cf-breadcrumb">
          <span className="cf-crumb-leaf">🌿</span>
          <span className="cf-crumb-text">Archive</span>
          <span className="cf-crumb-sep">›</span>
          <span className="cf-crumb-text">{meta.department}</span>
          <span className="cf-crumb-sep">›</span>
          <span className="cf-crumb-active">{meta.classificationCode}</span>
        </div>

        <div className="cf-body">
          <CaseFileComponent />
        </div>

      </main>
    </>
  )
}