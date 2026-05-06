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
    <main className="min-h-screen bg-neutral-100 font-mono">
      <div className="bg-neutral-950 text-neutral-100 px-6 py-4 flex items-center justify-between">
        <Link
          href="/compendium"
          className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase"
        >
          ← Back to Compendium
        </Link>
        <div className="flex items-center gap-6">
          {/* byline */}
          <div className="flex items-center gap-2">
            <div className="h-px w-4 bg-neutral-700" />
            <span className="text-xs text-neutral-700 tracking-widest">by</span>
            <span className="text-xs font-black tracking-[0.25em] text-neutral-500 hover:text-neutral-300 transition-colors duration-300">
              ABYSSPROTOCOL
            </span>
          </div>
          <div className="text-xs text-neutral-600 tracking-widest">{meta.classificationCode}</div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <CaseFileComponent />
      </div>
    </main>
  )
}