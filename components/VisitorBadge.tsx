// components/VisitorBadge.tsx

interface VisitorProfile {
  id: string
  codename: string
  threat_level: string
  assigned_section: string
  profile_summary: string
  expires_at: string
}

interface VisitorBadgeProps {
  profile: VisitorProfile
  /** true = newly issued profile reveal; false = returning visitor resume screen */
  isNew: boolean
  onEnter: () => void
  onReissue?: () => void
}

/**
 * Shared between the 'profile' phase (new issuance) and the 'resume' phase
 * (returning visitor). isNew controls whether the full behavioral assessment
 * and re-issue option are shown.
 */
export default function VisitorBadge({
  profile,
  isNew,
  onEnter,
  onReissue,
}: VisitorBadgeProps) {
  const expiresAt   = new Date(profile.expires_at)
  const expiresTime = expiresAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const issuedLabel = isNew
    ? `Visitor Clearance Profile — Issued ${new Date().toUTCString()}`
    : `Active profile detected. Expires ${expiresTime} today.`

  const summaryParagraphs = profile.profile_summary.split('\n\n').filter(Boolean)

  return (
    <div className="max-w-xl w-full pt-10 space-y-8">

      {/* issued label + codename */}
      <div>
        <div className="text-xs tracking-widest text-neutral-500 uppercase mb-2 font-mono">
          {issuedLabel}
        </div>
        <div className="text-xs text-neutral-600 tracking-widest uppercase mb-3 font-mono">
          {isNew ? 'Assigned codename' : 'Your codename'}
        </div>
        <div
          className={`
            font-black text-yellow-400 tracking-wide leading-tight mb-1
            ${isNew ? 'text-4xl' : 'text-3xl'}
          `}
        >
          {profile.codename}
        </div>
        <div className="text-xs text-neutral-600 font-mono">
          {isNew
            ? 'Profile self-destructs in 24 hours from this moment.'
            : 'This profile will be destroyed at the time listed above. Not a metaphor.'}
        </div>
      </div>

      {/* threat + section grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-neutral-900 border border-neutral-800 p-4">
          <div className="text-xs text-neutral-500 tracking-widest uppercase mb-2 font-mono">
            Threat level
          </div>
          <div className="text-sm text-red-400 leading-snug font-mono">
            {profile.threat_level}
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-4">
          <div className="text-xs text-neutral-500 tracking-widest uppercase mb-2 font-mono">
            Assigned section
          </div>
          <div className="text-sm text-neutral-400 leading-snug font-mono">
            {profile.assigned_section}
          </div>
        </div>
      </div>

      {/* behavioral assessment — only on new issuance */}
      {isNew && summaryParagraphs.length > 0 && (
        <div className="border border-neutral-800 p-6 space-y-4">
          <div className="text-xs text-neutral-500 tracking-widest uppercase font-mono">
            Behavioral assessment
          </div>
          {summaryParagraphs.map((para, i) => (
            <p
              key={i}
              className={`text-sm leading-relaxed font-mono ${
                i === 0
                  ? 'text-neutral-400'
                  : i === summaryParagraphs.length - 1
                  ? 'text-yellow-600 font-bold tracking-wide text-xs'
                  : 'text-neutral-400'
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      )}

      {/* classification stamp row — decorative on resume */}
      {!isNew && (
        <div className="border border-neutral-800 p-4 flex items-center gap-4">
          <div className="w-8 h-8 border border-yellow-600 flex items-center justify-center shrink-0">
            <div className="w-4 h-4 bg-yellow-600 opacity-60" />
          </div>
          <div>
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-1 font-mono">
              Clearance status
            </div>
            <div className="text-sm text-yellow-400 font-mono font-bold">
              ACTIVE — NO RE-INTAKE REQUIRED
            </div>
          </div>
        </div>
      )}

      {/* actions */}
      <div className="space-y-3">
        <button
          onClick={onEnter}
          className="
            w-full py-4 bg-white text-black font-black tracking-widest text-sm
            hover:bg-yellow-400 transition-colors duration-200 font-mono
          "
        >
          {isNew ? 'ENTER THE COMPENDIUM' : 'RESUME SESSION, ENTER THE COMPENDIUM'}
        </button>

        {!isNew && onReissue && (
          <button
            onClick={onReissue}
            className="
              w-full py-3 border border-neutral-700 text-neutral-500 text-xs
              tracking-widest hover:border-neutral-500 hover:text-neutral-400
              transition-colors duration-200 font-mono
            "
          >
            This is not me. Generate a new profile.
          </button>
        )}

        <div className="text-xs text-neutral-700 text-center font-mono">
          {isNew
            ? 'All intake data expires in 24 hours. We retain nothing. This was always going to be true.'
            : 'This profile exists for 24 hours, after which it will be destroyed entirely. This is not a metaphor. The data will simply be gone.'}
        </div>
      </div>
    </div>
  )
}