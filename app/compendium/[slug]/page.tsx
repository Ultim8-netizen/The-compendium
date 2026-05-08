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
        .cf-nav {
          background: var(--c-bg-secondary);
          border-bottom: 1px solid var(--c-border);
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'DM Mono', monospace;
          transition: background 0.25s ease;
        }
        .cf-back {
          font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--c-muted); text-decoration: none;
          transition: color 0.15s;
        }
        .cf-back:hover { color: var(--c-fg); }
        .cf-nav-right {
          display: flex; align-items: center; gap: 20px;
        }
        .cf-byline {
          display: flex; align-items: center; gap: 6px;
        }
        .cf-byline-sep { width: 12px; height: 1px; background: var(--c-border); }
        .cf-byline-by  { font-size: 9px; color: var(--c-subtle); letter-spacing: 2px; }
        .cf-byline-name {
          font-size: 10px; font-weight: 500; color: var(--c-muted);
          letter-spacing: 3px; transition: color 0.3s;
        }
        .cf-byline-name:hover { color: var(--c-fg); }
        .cf-code { font-size: 10px; color: var(--c-subtle); letter-spacing: 2px; }
        .cf-body { max-width: 860px; margin: 0 auto; padding: 32px 16px; }
      `}</style>

      <main style={{ minHeight: '100vh', background: 'var(--c-bg)', transition: 'background 0.25s ease' }}>
        <nav className="cf-nav">
          <Link href="/compendium" className="cf-back">← Back to Compendium</Link>
          <div className="cf-nav-right">
            <div className="cf-byline">
              <div className="cf-byline-sep" />
              <span className="cf-byline-by">by</span>
              <span className="cf-byline-name">ABYSSPROTOCOL</span>
            </div>
            <div className="cf-code">{meta.classificationCode}</div>
          </div>
        </nav>
        <div className="cf-body">
          <CaseFileComponent />
        </div>
      </main>
    </>
  )
}