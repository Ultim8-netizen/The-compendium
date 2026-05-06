// components/IntakeForm.tsx
import type { Question } from '@/lib/questions'

interface IntakeFormProps {
  questions: Question[]
  answers: Record<string, string>
  onChange: (key: string, value: string) => void
  onSubmit: () => void
  error: string
}

export default function IntakeForm({
  questions,
  answers,
  onChange,
  onSubmit,
  error,
}: IntakeFormProps) {
  const answeredCount = questions.filter(q => {
    const val = answers[q.key]
    return val && val.trim().length > 0
  }).length

  const progress = Math.min((answeredCount / 4) * 100, 100)
  const ready    = answeredCount >= 4

  return (
    <div className="max-w-2xl w-full pt-12 pb-20">
      {/* header */}
      <div className="text-xs tracking-widest text-neutral-500 uppercase mb-2 font-mono">
        Classified Repository Access System
      </div>
      <h1 className="text-5xl font-black tracking-tight text-white mb-2 font-mono">
        THE COMPENDIUM
      </h1>
      <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
        Visitor intake is mandatory. The questions are arbitrary.
        Your answers will be used to generate a profile that exists for 24 hours
        and serves no purpose beyond existing. You will not be asked to remember it.
        It will not follow you. You have our word, which means very little.
      </p>

      {/* clearance progress */}
      <div className="mb-10 border border-neutral-800 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs tracking-widest text-neutral-600 uppercase font-mono">
            Clearance threshold
          </span>
          <span
            className={`text-xs font-mono font-bold tracking-widest ${
              ready ? 'text-green-500' : 'text-neutral-600'
            }`}
          >
            {answeredCount} / 4 MINIMUM
            {ready ? ' — THRESHOLD MET' : ''}
          </span>
        </div>
        <div className="h-px bg-neutral-800 relative">
          <div
            className={`absolute inset-y-0 left-0 transition-all duration-500 ${
              ready ? 'bg-green-600' : 'bg-neutral-600'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        {!ready && (
          <p className="text-xs text-neutral-700 mt-2 font-mono">
            {4 - answeredCount} more field{4 - answeredCount !== 1 ? 's' : ''} required before
            clearance can be processed.
          </p>
        )}
      </div>

      {/* questions */}
      <div className="space-y-8">
        {questions.map((q, qi) => (
          <div key={q.key} className="relative">
            {/* question number */}
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-xs font-mono text-neutral-700 shrink-0">
                {String(qi + 1).padStart(2, '0')}
              </span>
              <label className="block text-xs tracking-widest text-neutral-400 uppercase leading-relaxed font-mono">
                {q.label}
              </label>
            </div>

            {q.type === 'freetext' ? (
              <div className="relative ml-7">
                <input
                  type="text"
                  value={answers[q.key] || ''}
                  onChange={e => onChange(q.key, e.target.value)}
                  className="
                    w-full bg-transparent border border-neutral-700 text-neutral-100
                    px-4 py-3 text-sm focus:outline-none focus:border-neutral-400
                    placeholder:text-neutral-700 font-mono
                    transition-colors duration-150
                  "
                  placeholder={q.placeholder}
                />
                {answers[q.key]?.trim() && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-green-500 rounded-full" />
                )}
              </div>
            ) : (
              <div className="space-y-2 ml-7">
                {q.options.map(opt => {
                  const selected = answers[q.key] === opt.value
                  return (
                    <label
                      key={opt.value}
                      className={`
                        flex items-start gap-3 p-3 border cursor-pointer
                        transition-all duration-150
                        ${
                          selected
                            ? 'border-neutral-400 bg-neutral-900'
                            : 'border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40'
                        }
                      `}
                    >
                      {/* custom radio */}
                      <div
                        className={`
                          w-4 h-4 border shrink-0 mt-0.5 flex items-center justify-center
                          transition-colors duration-150
                          ${selected ? 'border-white bg-white' : 'border-neutral-600'}
                        `}
                      >
                        {selected && <div className="w-2 h-2 bg-black" />}
                      </div>
                      <input
                        type="radio"
                        name={q.key}
                        value={opt.value}
                        checked={selected}
                        onChange={() => onChange(q.key, opt.value)}
                        className="sr-only"
                      />
                      <span className="text-sm text-neutral-300 leading-snug font-mono">
                        {opt.label}
                      </span>
                    </label>
                  )
                })}
              </div>
            )}
          </div>
        ))}

        {/* error */}
        {error && (
          <div className="border border-red-900 bg-red-950/30 px-4 py-3">
            <p className="text-red-400 text-xs tracking-wider font-mono">{error}</p>
          </div>
        )}

        {/* submit */}
        <div className="pt-4 space-y-3">
          <button
            onClick={onSubmit}
            disabled={!ready}
            className={`
              w-full py-4 font-black tracking-widest text-sm
              transition-all duration-200 font-mono
              ${
                ready
                  ? 'bg-white text-black hover:bg-yellow-400 cursor-pointer'
                  : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
              }
            `}
          >
            {ready ? 'SUBMIT FOR CLEARANCE' : `COMPLETE ${4 - answeredCount} MORE FIELD${4 - answeredCount !== 1 ? 'S' : ''}`}
          </button>
          <div className="text-xs text-neutral-700 text-center font-mono">
            By submitting you confirm you have read nothing above and are proceeding anyway.
          </div>
        </div>
      </div>
    </div>
  )
}