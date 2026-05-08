'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getVisitorId, setVisitorId, clearVisitorId } from '@/lib/visitor'
import { getRandomQuestions, type Question } from '@/lib/questions'
import IntakeForm   from '@/components/IntakeForm'
import VisitorBadge from '@/components/VisitorBadge'

type Phase = 'checking' | 'resume' | 'form' | 'processing' | 'profile'

interface VisitorProfile {
  id: string; codename: string; threat_level: string;
  assigned_section: string; profile_summary: string; expires_at: string;
}

export default function IntakePage() {
  const router = useRouter()
  const [phase,     setPhase]     = useState<Phase>('checking')
  const [questions, setQuestions] = useState<Question[]>([])
  const [answers,   setAnswers]   = useState<Record<string, string>>({})
  const [profile,   setProfile]   = useState<VisitorProfile | null>(null)
  const [error,     setError]     = useState('')

  useEffect(() => {
    let mounted = true
    async function checkPriorClearance() {
      const existingId = getVisitorId()
      if (!existingId) {
        if (mounted) { setQuestions(getRandomQuestions(7)); setPhase('form') }
        return
      }
      try {
        const r = await fetch(`/api/visitors?id=${existingId}`)
        if (!r.ok) throw new Error('expired')
        const data = await r.json()
        if (mounted) { setProfile(data); setPhase('resume') }
      } catch {
        if (mounted) { clearVisitorId(); setQuestions(getRandomQuestions(7)); setPhase('form') }
      }
    }
    checkPriorClearance()
    return () => { mounted = false }
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

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: 'var(--c-bg)',
    color: 'var(--c-fg)',
    fontFamily: "'DM Sans', sans-serif",
    padding: '24px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    transition: 'background 0.25s ease, color 0.25s ease',
  }

  // CHECKING
  if (phase === 'checking') {
    return (
      <main style={{ ...pageStyle, alignItems: 'center' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '11px', letterSpacing: '4px',
          color: 'var(--c-accent)', textTransform: 'uppercase',
          animation: 'pulse 2s ease infinite',
        }}>
          VERIFYING PRIOR CLEARANCE...
        </div>
      </main>
    )
  }

  // RESUME
  if (phase === 'resume' && profile) {
    return (
      <main style={{ ...pageStyle, alignItems: 'center' }}>
        <VisitorBadge
          profile={profile}
          isNew={false}
          onEnter={() => router.push('/compendium')}
          onReissue={() => {
            clearVisitorId()
            setProfile(null)
            setAnswers({})
            setQuestions(getRandomQuestions(7))
            setPhase('form')
          }}
        />
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
      <main style={{ ...pageStyle, alignItems: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '320px' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '13px', letterSpacing: '4px',
            color: 'var(--c-fg)', textTransform: 'uppercase',
            marginBottom: '28px',
          }}>
            PROCESSING INTAKE
          </div>
          {lines.map((line, i) => (
            <div key={i} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px', color: 'var(--c-subtle)',
              letterSpacing: '1px', marginBottom: '10px',
            }}>
              {line}
            </div>
          ))}
        </div>
      </main>
    )
  }

  // PROFILE REVEAL
  if (phase === 'profile' && profile) {
    return (
      <main style={{ ...pageStyle }}>
        <VisitorBadge
          profile={profile}
          isNew={true}
          onEnter={() => router.push('/compendium')}
        />
      </main>
    )
  }

  // FORM
  return (
    <main style={{ ...pageStyle }}>
      <div style={{ width: '100%' }}>
        <IntakeForm
          questions={questions}
          answers={answers}
          onChange={handleChange}
          onSubmit={handleSubmit}
          error={error}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '12px' }}>
          <div style={{ height: '1px', width: '20px', background: 'var(--c-border)' }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'var(--c-subtle)', letterSpacing: '3px' }}>by</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 500, color: 'var(--c-muted)', letterSpacing: '4px' }}>ABYSSPROTOCOL</span>
          <div style={{ height: '1px', width: '20px', background: 'var(--c-border)' }} />
        </div>
      </div>
    </main>
  )
}