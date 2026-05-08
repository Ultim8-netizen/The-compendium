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

        /* ── top nav ── */
        .cf-nav {
          background: var(--c-bg-secondary);
          border-bottom: 1px solid var(--c-border);
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          position: relative;
        }

        /* thin accent line riding top edge of nav */
        .cf-nav::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--c-muted) 30%,
            var(--c-accent) 50%,
            var(--c-muted) 70%,
            transparent
          );
          opacity: 0.5;
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
          color: var(--c-subtle);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s;
        }
        .cf-back:hover { color: var(--c-accent); }

        .cf-nav-sep {
          width: 1px;
          height: 16px;
          background: var(--c-border);
        }

        .cf-nav-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 400;
          font-style: italic;
          color: var(--c-fg);
          letter-spacing: 0.5px;
        }

        .cf-nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cf-nav-code {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: var(--c-subtle);
          letter-spacing: 2px;
        }

        .cf-nav-by {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          color: var(--c-subtle);
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .cf-nav-by:hover { color: var(--c-fg); }

        /* ── thin gold rule under nav ── */
        .cf-accent-bar {
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--c-muted) 20%,
            var(--c-accent) 50%,
            var(--c-muted) 80%,
            transparent
          );
          opacity: 0.6;
        }

        /* ── breadcrumb ── */
        .cf-breadcrumb {
          padding: 8px 28px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--c-border);
          background: var(--c-bg);
        }

        .cf-crumb-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--c-subtle);
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.15s;
        }
        a.cf-crumb-text:hover { color: var(--c-muted); }

        .cf-crumb-sep {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: var(--c-border);
        }

        .cf-crumb-active {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--c-muted);
          text-transform: uppercase;
          font-weight: 500;
        }

        /* ── body ── */
        .cf-body {
          max-width: 880px;
          margin: 0 auto;
          padding: 36px 16px 64px;
        }
      `}</style>

      <main className="cf-shell">

        <nav className="cf-nav">
          <div className="cf-nav-left">
            <Link href="/compendium" className="cf-back">
              ← Archive
            </Link>
            <div className="cf-nav-sep" />
            <span className="cf-nav-title">The Compendium</span>
          </div>
          <div className="cf-nav-right">
            <span className="cf-nav-by">ABYSSPROTOCOL</span>
            <span className="cf-nav-code">{meta.classificationCode}</span>
          </div>
        </nav>

        <div className="cf-accent-bar" />

        <div className="cf-breadcrumb">
          <Link href="/compendium" className="cf-crumb-text">Archive</Link>
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