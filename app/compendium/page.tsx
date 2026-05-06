import Link from 'next/link'
import { CASE_FILES } from '@/case-files/_registry'

const THREAT_COLORS: Record<string, string> = {
  LOW: 'text-green-600 border-green-600',
  MODERATE: 'text-yellow-600 border-yellow-600',
  CRITICAL: 'text-orange-600 border-orange-600',
  TERMINAL: 'text-red-600 border-red-600',
}

export default function CompendiumPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-mono p-6">
      <div className="max-w-4xl mx-auto pt-10">
        <div className="text-xs tracking-widest text-neutral-500 uppercase mb-2">
          Classified Repository, Active Archive
        </div>
        <h1 className="text-5xl font-black tracking-tight text-white mb-2">THE COMPENDIUM</h1>
        <p className="text-neutral-500 text-sm mb-12">
          {CASE_FILES.length} active files. All classified. All deeply, profoundly unnecessary.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {CASE_FILES.map(file => (
            <Link key={file.slug} href={`/compendium/${file.slug}`}>
              <div className="border border-neutral-800 p-6 hover:border-neutral-500 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-xs font-bold tracking-widest border px-2 py-0.5 ${THREAT_COLORS[file.threatLevel]}`}>
                    {file.threatLevel}
                  </div>
                  <div className="text-xs text-neutral-600 tracking-widest">{file.classificationCode}</div>
                </div>
                <h2 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors leading-tight">
                  {file.title}
                </h2>
                <p className="text-sm text-neutral-400 mb-4">{file.subtitle}</p>
                <div className="text-xs text-neutral-600 uppercase tracking-wider mb-3">{file.department}</div>
                <div className="flex flex-wrap gap-2">
                  {file.tags.map(tag => (
                    <span key={tag} className="text-xs text-neutral-500 border border-neutral-800 px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-900 text-xs text-neutral-700 text-center tracking-wider leading-loose">
          All profiles collected at entry expire within 24 hours. We keep none of it.
          This was always going to be true.
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-neutral-800" />
            <span className="text-neutral-800 tracking-widest">by</span>
            <span className="text-neutral-600 font-black tracking-[0.3em] text-xs hover:text-neutral-400 transition-colors duration-300">
              ABYSSPROTOCOL
            </span>
            <div className="h-px w-6 bg-neutral-800" />
          </div>
        </div>
      </div>
    </main>
  )
}