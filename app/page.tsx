'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setVisitorId } from '@/lib/visitor'

const QUESTIONS = [
  { key: 'full_name', label: 'Full legal name, including any names used in dreams' },
  { key: 'texture', label: 'Favorite texture' },
  { key: 'last_lie', label: 'The last thing you lied about (be specific)' },
  { key: 'laugh_words', label: 'Describe your laugh in exactly three words' },
  { key: 'goat_sound', label: 'The sound you would make if surprised by a goat' },
  { key: 'spirit_vegetable', label: 'Your assigned spirit vegetable (you already know)' },
  { key: 'apologized_furniture', label: 'Have you ever apologized to a piece of furniture (yes or no, and which piece)' },
  { key: 'dangerous_skill', label: 'A skill you have that would be useless in a crisis' },
]

type Phase = 'form' | 'processing' | 'profile'

interface VisitorProfile {
  id: string
  codename: string
  threat_level: string
  assigned_section: string
  profile_summary: string
}

export default function IntakePage() {
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [phase, setPhase] = useState<Phase>('form')
  const [profile, setProfile] = useState<VisitorProfile | null>(null)
  const [error, setError] = useState('')

  function handleChange(key: string, value: string) {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }

  async function handleSubmit() {
    const filled = QUESTIONS.filter(q => answers[q.key]?.trim())
    if (filled.length < 5) {
      setError('Minimum 5 fields required for clearance. This is non-negotiable.')
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
      setError('Processing failed. The system blames you specifically.')
    }
  }

  if (phase === 'processing') {
    return (
      <main className="min-h-screen bg-neutral-950 text-green-400 font-mono flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-2xl tracking-widest animate-pulse">PROCESSING INTAKE</div>
          <div className="text-sm text-green-600 tracking-wider">Assessing threat level...</div>
          <div className="text-sm text-green-600 tracking-wider">Cross-referencing vegetable database...</div>
          <div className="text-sm text-green-600 tracking-wider">Generating codename...</div>
        </div>
      </main>
    )
  }

  if (phase === 'profile' && profile) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex items-center justify-center p-6">
        <div className="max-w-lg w-full border border-neutral-600 p-8 space-y-6">
          <div className="text-xs tracking-widest text-neutral-500 uppercase">
            Visitor Clearance Profile, Generated {new Date().toUTCString()}
          </div>
          <div className="border-b border-neutral-700 pb-4">
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-1">Assigned Codename</div>
            <div className="text-2xl font-bold text-yellow-400 tracking-wide">{profile.codename}</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-1">Threat Level</div>
            <div className="text-sm text-red-400">{profile.threat_level}</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-1">Assigned Section</div>
            <div className="text-sm text-neutral-300">{profile.assigned_section}</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 tracking-widest uppercase mb-1">Profile Summary</div>
            <div className="text-sm text-neutral-400 italic">{profile.profile_summary}</div>
          </div>
          <div className="text-xs text-neutral-600 border-t border-neutral-800 pt-4">
            This profile self-destructs in 24 hours. The information collected has no use.
            It was always going to be like this.
          </div>
          <button
            onClick={() => router.push('/compendium')}
            className="w-full py-3 bg-neutral-100 text-neutral-950 font-bold tracking-widest text-sm hover:bg-yellow-400 transition-colors"
          >
            ENTER THE COMPENDIUM
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-mono p-6 flex items-start justify-center">
      <div className="max-w-2xl w-full pt-12">
        <div className="text-xs tracking-widest text-neutral-500 uppercase mb-2">
          Classified Repository Access System
        </div>
        <h1 className="text-4xl font-black tracking-tight text-white mb-1">THE COMPENDIUM</h1>
        <p className="text-neutral-500 text-sm mb-10">
          Visitor intake is mandatory. All fields are optional. This is not a contradiction.
          The information you provide will be used for absolutely nothing and then discarded.
          You have 24 hours before your profile is purged from the record entirely.
        </p>

        <div className="space-y-6">
          {QUESTIONS.map(q => (
            <div key={q.key}>
              <label className="block text-xs tracking-widest text-neutral-400 uppercase mb-2">
                {q.label}
              </label>
              <input
                type="text"
                value={answers[q.key] || ''}
                onChange={e => handleChange(q.key, e.target.value)}
                className="w-full bg-transparent border border-neutral-700 text-neutral-100 px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 placeholder:text-neutral-700"
                placeholder="..."
              />
            </div>
          ))}

          {error && (
            <div className="text-red-400 text-xs tracking-wider">{error}</div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-white text-black font-bold tracking-widest text-sm hover:bg-yellow-400 transition-colors mt-4"
          >
            SUBMIT FOR CLEARANCE
          </button>

          <div className="text-xs text-neutral-700 text-center">
            By submitting you acknowledge that you have no idea what you are agreeing to.
          </div>
        </div>
      </div>
    </main>
  )
}