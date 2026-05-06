// components/CaseFileCard.tsx
import Link from 'next/link'
import type { CaseFileMeta } from '@/case-files/_registry'

const THREAT_STYLES: Record<string, { bar: string; text: string; border: string }> = {
  LOW:      { bar: 'bg-green-600',  text: 'text-green-500',  border: 'border-green-600' },
  MODERATE: { bar: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500' },
  CRITICAL: { bar: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500' },
  TERMINAL: { bar: 'bg-red-600',    text: 'text-red-500',    border: 'border-red-600' },
}

const THREAT_FILL: Record<string, string> = {
  LOW:      'w-1/4',
  MODERATE: 'w-2/4',
  CRITICAL: 'w-3/4',
  TERMINAL: 'w-full',
}

interface CaseFileCardProps {
  file: CaseFileMeta
  index?: number
}

export default function CaseFileCard({ file, index = 0 }: CaseFileCardProps) {
  const style = THREAT_STYLES[file.threatLevel] ?? THREAT_STYLES.MODERATE
  const fill  = THREAT_FILL[file.threatLevel]  ?? 'w-2/4'

  return (
    <Link href={`/compendium/${file.slug}`} className="group block focus:outline-none">
      <div
        className="
          relative border border-neutral-800 bg-neutral-950
          hover:border-neutral-600 transition-all duration-300
          hover:bg-neutral-900 cursor-pointer overflow-hidden
          focus-within:border-neutral-500
        "
      >
        {/* index watermark */}
        <div
          aria-hidden
          className="
            absolute bottom-3 right-4 font-mono text-6xl font-black
            text-neutral-900 select-none pointer-events-none leading-none
            group-hover:text-neutral-800 transition-colors duration-300
          "
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* top bar — threat fill */}
        <div className="h-px w-full bg-neutral-800">
          <div className={`h-px ${fill} ${style.bar} transition-all duration-500`} />
        </div>

        <div className="p-6 relative z-10">
          {/* header row */}
          <div className="flex items-start justify-between mb-5 gap-3">
            <div
              className={`
                text-xs font-bold tracking-widest border px-2 py-0.5 font-mono
                shrink-0 ${style.text} ${style.border}
              `}
            >
              {file.threatLevel}
            </div>
            <div className="text-xs text-neutral-600 tracking-widest font-mono text-right">
              {file.classificationCode}
            </div>
          </div>

          {/* title */}
          <h2
            className="
              text-base font-black text-white leading-tight mb-1
              group-hover:text-yellow-400 transition-colors duration-200
              tracking-wide uppercase
            "
          >
            {file.title}
          </h2>
          <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
            {file.subtitle}
          </p>

          {/* department */}
          <div className="text-xs text-neutral-700 uppercase tracking-wider mb-4 font-mono">
            {file.department}
          </div>

          {/* threat meter */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-neutral-700 tracking-widest uppercase font-mono">
                Threat Meter
              </span>
              <span className={`text-xs font-mono font-bold ${style.text}`}>
                {file.threatLevel}
              </span>
            </div>
            <div className="h-px bg-neutral-800 relative">
              <div className={`absolute inset-y-0 left-0 ${fill} ${style.bar}`} />
            </div>
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-2">
            {file.tags.map(tag => (
              <span
                key={tag}
                className="
                  text-xs text-neutral-600 border border-neutral-800 px-2 py-0.5
                  font-mono group-hover:border-neutral-700 transition-colors duration-200
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* bottom action strip — visible on hover */}
        <div
          className="
            border-t border-neutral-800 px-6 py-3
            flex items-center justify-between
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            bg-neutral-900
          "
        >
          <span className="text-xs text-neutral-500 tracking-widest uppercase font-mono">
            Access file
          </span>
          <span className="text-yellow-400 text-xs font-mono">→</span>
        </div>
      </div>
    </Link>
  )
}