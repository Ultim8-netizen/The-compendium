import { CASE_FILES } from '@/case-files/_registry'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return CASE_FILES.map(f => ({ slug: f.slug }))
}

export default async function CaseFilePage({
  params,
}: {
  params: { slug: string }
}) {
  const meta = CASE_FILES.find(f => f.slug === params.slug)
  if (!meta) return notFound()

  // Dynamic import so each file is only loaded when needed
  const { default: CaseFileComponent } = await import(`@/case-files/${params.slug}`)

  return (
    <main className="min-h-screen bg-neutral-100 font-mono">
      <div className="bg-neutral-950 text-neutral-100 px-6 py-4 flex items-center justify-between">
        <Link
          href="/compendium"
          className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase"
        >
          Back to Compendium
        </Link>
        <div className="text-xs text-neutral-600 tracking-widest">{meta.classificationCode}</div>
      </div>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <CaseFileComponent />
      </div>
    </main>
  )
}