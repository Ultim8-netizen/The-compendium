import type { Question } from '@/lib/questions'

interface IntakeFormProps {
  questions: Question[]
  answers:   Record<string, string>
  onChange:  (key: string, value: string) => void
  onSubmit:  () => void
  error:     string
}

export default function IntakeForm({ questions, answers, onChange, onSubmit, error }: IntakeFormProps) {
  const answeredCount = questions.filter(q => {
    const val = answers[q.key]
    return val && val.trim().length > 0
  }).length

  const progress = Math.min((answeredCount / 4) * 100, 100)
  const ready    = answeredCount >= 4

  return (
    <>
      <style>{`
        .if-header-eye {
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--c-subtle); margin-bottom: 8px;
        }
        .if-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px,8vw,56px); font-weight: 300;
          color: var(--c-fg); margin-bottom: 8px; letter-spacing: -1px;
        }
        .if-intro {
          font-family: 'DM Sans', sans-serif;
          color: var(--c-muted); font-size: 14px;
          margin-bottom: 32px; line-height: 1.8; font-weight: 300;
        }
        .if-progress {
          border: 1px solid var(--c-border);
          padding: 14px 16px; margin-bottom: 36px;
          background: var(--c-card);
        }
        .if-prog-row {
          display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;
        }
        .if-prog-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--c-subtle);
        }
        .if-prog-count {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 2px; font-weight: 500;
        }
        .if-prog-track { height: 1px; background: var(--c-border); position: relative; }
        .if-prog-note {
          font-family: 'DM Mono', monospace;
          font-size: 9px; color: var(--c-subtle); margin-top: 8px; letter-spacing: 1px;
        }
        .if-q-num {
          font-family: 'DM Mono', monospace;
          font-size: 10px; color: var(--c-subtle); flex-shrink: 0;
        }
        .if-q-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--c-muted); line-height: 1.7;
        }
        .if-input {
          width: 100%;
          background: var(--c-card);
          border: 1px solid var(--c-border);
          color: var(--c-fg);
          padding: 12px 16px; font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          outline: none; transition: border-color 0.15s;
        }
        .if-input:focus { border-color: var(--c-accent); }
        .if-input::placeholder { color: var(--c-subtle); }
        .if-radio {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 10px 12px; border: 1px solid var(--c-border);
          cursor: pointer; transition: all 0.15s;
          background: var(--c-card);
        }
        .if-radio:hover { border-color: var(--c-muted); }
        .if-radio.selected {
          border-color: var(--c-accent);
          background: var(--c-bg-secondary);
        }
        .if-radio-dot {
          width: 14px; height: 14px; border: 1px solid var(--c-border);
          flex-shrink: 0; margin-top: 2px;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.15s;
        }
        .if-radio-dot.selected { border-color: var(--c-fg); background: var(--c-fg); }
        .if-radio-inner { width: 8px; height: 8px; background: var(--c-bg); }
        .if-radio-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: var(--c-fg); line-height: 1.5; font-weight: 300;
        }
        .if-error {
          border: 1px solid #dc2626; background: rgba(220,38,38,0.06);
          padding: 10px 14px;
        }
        .if-error-text {
          font-family: 'DM Mono', monospace;
          color: #dc2626; font-size: 11px; letter-spacing: 1px;
        }
        .if-submit {
          width: 100%; padding: 16px;
          font-family: 'DM Mono', monospace;
          font-size: 11px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase;
          border: none; cursor: pointer; transition: all 0.2s;
        }
        .if-submit.ready {
          background: var(--c-fg); color: var(--c-bg);
        }
        .if-submit.ready:hover { background: var(--c-accent); color: var(--c-accent-fg); }
        .if-submit.disabled {
          background: var(--c-bg-secondary); color: var(--c-subtle); cursor: not-allowed;
        }
        .if-fine {
          font-family: 'DM Mono', monospace;
          font-size: 9px; color: var(--c-subtle); text-align: center; letter-spacing: 1px;
        }
      `}</style>

      <div className="max-w-2xl w-full pt-12 pb-20">
        <div className="if-header-eye">Classified Repository Access System</div>
        <h1 className="if-title">THE COMPENDIUM</h1>
        <p className="if-intro">
          Visitor intake is mandatory. The questions are arbitrary.
          Your answers will be used to generate a profile that exists for 24 hours
          and serves no purpose beyond existing. You will not be asked to remember it.
          It will not follow you. You have our word, which means very little.
        </p>

        {/* progress */}
        <div className="if-progress">
          <div className="if-prog-row">
            <span className="if-prog-label">Clearance threshold</span>
            <span className="if-prog-count" style={{ color: ready ? '#16a34a' : 'var(--c-subtle)' }}>
              {answeredCount} / 4 MINIMUM{ready ? ' — THRESHOLD MET' : ''}
            </span>
          </div>
          <div className="if-prog-track">
            <div style={{
              position: 'absolute', inset: 0,
              width: `${progress}%`,
              background: ready ? '#16a34a' : 'var(--c-muted)',
              transition: 'width 0.4s, background 0.3s',
            }} />
          </div>
          {!ready && (
            <p className="if-prog-note">
              {4 - answeredCount} more field{4 - answeredCount !== 1 ? 's' : ''} required.
            </p>
          )}
        </div>

        {/* questions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {questions.map((q, qi) => (
            <div key={q.key}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                <span className="if-q-num">{String(qi + 1).padStart(2, '0')}</span>
                <label className="if-q-label">{q.label}</label>
              </div>

              {q.type === 'freetext' ? (
                <div style={{ marginLeft: '28px', position: 'relative' }}>
                  <input
                    type="text"
                    value={answers[q.key] || ''}
                    onChange={e => onChange(q.key, e.target.value)}
                    className="if-input"
                    placeholder={q.placeholder}
                  />
                  {answers[q.key]?.trim() && (
                    <div style={{
                      position: 'absolute', right: '12px', top: '50%',
                      transform: 'translateY(-50%)',
                      width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a',
                    }} />
                  )}
                </div>
              ) : (
                <div style={{ marginLeft: '28px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {q.options.map(opt => {
                    const selected = answers[q.key] === opt.value
                    return (
                      <label key={opt.value} className={`if-radio${selected ? ' selected' : ''}`}>
                        <div className={`if-radio-dot${selected ? ' selected' : ''}`}>
                          {selected && <div className="if-radio-inner" />}
                        </div>
                        <input
                          type="radio" name={q.key} value={opt.value}
                          checked={selected}
                          onChange={() => onChange(q.key, opt.value)}
                          className="sr-only"
                        />
                        <span className="if-radio-text">{opt.label}</span>
                      </label>
                    )
                  })}
                </div>
              )}
            </div>
          ))}

          {error && (
            <div className="if-error">
              <p className="if-error-text">{error}</p>
            </div>
          )}

          <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button onClick={onSubmit} disabled={!ready} className={`if-submit ${ready ? 'ready' : 'disabled'}`}>
              {ready ? 'SUBMIT FOR CLEARANCE' : `COMPLETE ${4 - answeredCount} MORE FIELD${4 - answeredCount !== 1 ? 'S' : ''}`}
            </button>
            <p className="if-fine">By submitting you confirm you have read nothing above and are proceeding anyway.</p>
          </div>
        </div>
      </div>
    </>
  )
}