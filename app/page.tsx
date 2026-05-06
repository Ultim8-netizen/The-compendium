'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getVisitorId, setVisitorId, clearVisitorId } from '@/lib/visitor'
import { getRandomQuestions, type Question } from '@/lib/questions'

type Phase = 'checking' | 'resume' | 'form' | 'processing' | 'profile'

interface VisitorProfile {
  id: string
  codename: string
  threat_level: string
  assigned_section: string
  profile_summary: string
  expires_at: string
}

export default function IntakePage() {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>('checking')
  const [questions, setQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [profile, setProfile] = useState<VisitorProfile | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true

    async function checkPriorClearance() {
      const existingId = getVisitorId()
      
      if (!existingId) {
        if (mounted) {
          setQuestions(getRandomQuestions(7))
          setPhase('form')
        }
        return
      }

      try {
        const r = await fetch(`/api/visitors?id=${existingId}`)
        if (!r.ok) throw new Error('expired')
        const data = await r.json()
        
        if (mounted) {
          setProfile(data)
          setPhase('resume')
        }
      } catch {
        if (mounted) {
          clearVisitorId()
          setQuestions(getRandomQuestions(7))
          setPhase('form')
        }
      }
    }

    checkPriorClearance()

    return () => {
      mounted = false
    }
  }, [])

  function handleChange(key: string, value: string) {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }

  async function handleSubmit() {
    const answered = questions.filter(q => {
      const val = answers[q.key]
      return val && val.trim().length > 0
    })

    if (answered.length < 4) {
      setError('Minimum 4 fields required for profile generation. This is non-negotiable and also very lenient.')
      return
    }

    setError('')
    setPhase('processing')

    try {
      const res = await fetch('/api/visitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setVisitorId(data.id)
      setProfile(data)
      setPhase('profile')
    } catch {
      setPhase('form')
      setError('Intake failed. The system has attributed this to you personally.')
    }
  }

  // CHECKING
  if (phase === 'checking') {
    return (
      <main className="min-h-screen bg-neutral-950 text-green-400 font-mono flex items-center justify-center">
        <div className="text-xs tracking-widest animate-pulse">VERIFYING PRIOR CLEARANCE...</div>
      </main>
    )
  }

  // RESUME: returning visitor within 24hrs
  if (phase === 'resume' && profile) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex items-center justify-center p-6">
        <div className="max-w-lg w-full space-y-8">
          <div>
            <div className="text-xs tracking-widest text-neutral-500 uppercase mb-4">
              Active profile detected. Expires {new Date(profile.expires_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} today.
            </div>
            <div className="text-xs text-neutral-600 tracking-widest uppercase mb-2">Your codename</div>
            <div className="text-3xl font-black text-yellow-400 tracking-wide mb-6">{profile.codename}</div>

            <div className="bg-neutral-900 border border-neutral-800 p-5 space-y-3">
              <div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase mb-1">Threat level</div>
                <div className="text-sm text-red-400">{profile.threat_level}</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 tracking-widest uppercase mb-1">Assigned section</div>
                <div className="text-sm text-neutral-400">{profile.assigned_section}</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => router.push('/compendium')}
              className="w-full py-3 bg-white text-black font-bold tracking-widest text-sm hover:bg-yellow-400 transition-colors"
            >
              RESUME SESSION, ENTER THE COMPENDIUM
            </button>
            <button
              onClick={() => {
                clearVisitorId()
                setProfile(null)
                setAnswers({})
                setQuestions(getRandomQuestions(7))
                setPhase('form')
              }}
              className="w-full py-3 border border-neutral-700 text-neutral-500 text-xs tracking-widest hover:border-neutral-500 hover:text-neutral-400 transition-colors"
            >
              This is not me. Generate a new profile.
            </button>
          </div>

          <div className="text-xs text-neutral-700 text-center">
            This profile exists for 24 hours, after which it will be destroyed entirely.
            This is not a metaphor. The data will simply be gone.
          </div>
        </div>
      </main>
    )
  }

  // PROCESSING
  if (phase === 'processing') {
    const lines = [
      'Consulting the vegetable database...',
      'Cross-referencing laugh descriptions...',
      'Assigning threat classification...',
      'Locating appropriate section...',
      'Generating codename from available consonants...',
      'Reviewing undisclosed habits...',
      'Noting what was not said...',
    ]
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex items-center justify-center p-6">
        <div className="text-center space-y-5 max-w-sm">
          <div className="text-lg tracking-widest text-white animate-pulse">PROCESSING INTAKE</div>
          {lines.map((line, i) => (
            <div key={i} className="text-xs text-neutral-600 tracking-wider" style={{ animationDelay: `${i * 0.2}s` }}>
              {line}
            </div>
          ))}
        </div>
      </main>
    )
  }

  // PROFILE REVEAL: newly created
  if (phase === 'profile' && profile) {
    const summaryParagraphs = profile.profile_summary.split('\n\n').filter(Boolean)

    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 font-mono p-6 flex items-start justify-center">
        <div className="max-w-xl w-full pt-10 space-y-8">
          <div>
            <div className="text-xs tracking-widest text-neutral-500 uppercase mb-2">
              Visitor Clearance Profile, Issued {new Date().toUTCString()}
            </div>
            <div className="text-xs text-neutral-600 tracking-widest uppercase mb-3">Assigned codename</div>
            <div className="text-4xl font-black text-yellow-400 tracking-wide leading-tight mb-1">
              {profile.codename}
            </div>
            <div className="text-xs text-neutral-600">Profile self-destructs in 24 hours from this moment.</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-neutral-900 border border-neutral-800 p-4">
              <div className="text-xs text-neutral-500 tracking-widest uppercase mb-2">Threat level</div>
              <div className="text-sm text-red-400 leading-snug">{profile.threat_level}</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-4">
              <div className="text-xs text-neutral-500 tracking-widest uppercase mb-2">Assigned section</div>
              <div className="text-sm text-neutral-400 leading-snug">{profile.assigned_section}</div>
            </div>
          </div>

          <div className="border border-neutral-800 p-6 space-y-4">
            <div className="text-xs text-neutral-500 tracking-widest uppercase">Behavioral assessment</div>
            {summaryParagraphs.map((para: string, i: number) => (
              <p
                key={i}
                className={`text-sm leading-relaxed ${
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

          <div className="space-y-3">
            <button
              onClick={() => router.push('/compendium')}
              className="w-full py-4 bg-white text-black font-bold tracking-widest text-sm hover:bg-yellow-400 transition-colors"
            >
              ENTER THE COMPENDIUM
            </button>
            <div className="text-xs text-neutral-700 text-center">
              All intake data expires in 24 hours. We retain nothing.
              This was always going to be true.
            </div>
          </div>
        </div>
      </main>
    )
  }

  // FORM
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-mono p-6 flex items-start justify-center">
      <div className="max-w-2xl w-full pt-12 pb-20">
        <div className="text-xs tracking-widest text-neutral-500 uppercase mb-2">
          Classified Repository Access System
        </div>
        <h1 className="text-5xl font-black tracking-tight text-white mb-2">THE COMPENDIUM</h1>
        <p className="text-neutral-500 text-sm mb-10 leading-relaxed">
          Visitor intake is mandatory. The questions are arbitrary.
          Your answers will be used to generate a profile that exists for 24 hours
          and serves no purpose beyond existing. You will not be asked to remember it.
          It will not follow you. You have our word, which means very little.
        </p>

        <div className="space-y-8">
          {questions.map(q => (
            <div key={q.key}>
              <label className="block text-xs tracking-widest text-neutral-400 uppercase mb-3 leading-relaxed">
                {q.label}
              </label>

              {q.type === 'freetext' ? (
                <input
                  type="text"
                  value={answers[q.key] || ''}
                  onChange={e => handleChange(q.key, e.target.value)}
                  className="w-full bg-transparent border border-neutral-700 text-neutral-100 px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 placeholder:text-neutral-700"
                  placeholder={q.placeholder}
                />
              ) : (
                <div className="space-y-2">
                  {q.options.map(opt => (
                    <label
                      key={opt.value}
                      className={`flex items-start gap-3 p-3 border cursor-pointer transition-colors ${
                        answers[q.key] === opt.value
                          ? 'border-neutral-400 bg-neutral-900'
                          : 'border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 border shrink-0 mt-0.5 flex items-center justify-center ${
                          answers[q.key] === opt.value
                            ? 'border-white bg-white'
                            : 'border-neutral-600'
                        }`}
                      >
                        {answers[q.key] === opt.value && (
                          <div className="w-2 h-2 bg-black" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name={q.key}
                        value={opt.value}
                        checked={answers[q.key] === opt.value}
                        onChange={() => handleChange(q.key, opt.value)}
                        className="sr-only"
                      />
                      <span className="text-sm text-neutral-300 leading-snug">{opt.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}

          {error && (
            <div className="text-red-400 text-xs tracking-wider">{error}</div>
          )}

          <div className="pt-4 space-y-3">
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-white text-black font-bold tracking-widest text-sm hover:bg-yellow-400 transition-colors"
            >
              SUBMIT FOR CLEARANCE
            </button>
            <div className="text-xs text-neutral-700 text-center">
              By submitting you confirm you have read nothing above and are proceeding anyway.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}