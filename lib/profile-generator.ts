import { QUESTION_POOL } from './questions'

const INTROS = [
  'The following assessment was generated from voluntary disclosures. No inference has been made. Everything in this file was provided by the subject.',
  'Profile compiled from intake responses. The subject answered freely. The committee has reviewed this. The committee has questions.',
  'This document reflects only what the subject chose to share. What they did not share has also been noted, categorically, as an absence.',
  'Visitor intake complete. The subject provided responses at a pace and specificity that suggested prior self-reflection. How much prior self-reflection is unconfirmed.',
  'Assessment follows. The subject should be aware that nothing here will surprise them. That is either reassuring or the most concerning part of this file.',
]

const TRANSITIONS = [
  'Additionally,',
  'Separately,',
  'On a related but distinct point,',
  'The file also notes that',
  'Cross-referencing the above,',
  'Of further interest:',
  'Independently,',
]

export const FINAL_CLASSIFICATIONS = [
  'Final classification: AMBIENT PRESENCE. The subject occupies most rooms without fully committing to any of them.',
  'Final classification: CONTROLLED UNPREDICTABILITY. Reliable in ways that are hard to anticipate. Unpredictable in ways that are oddly consistent.',
  'Final classification: FUNCTIONAL ENIGMA. Operational. Unexplained. Not a problem, precisely.',
  'Final classification: SOFT INFRASTRUCTURE. Load-bearing in ways that go unacknowledged. Would be noticed only in their absence. No one will say this to them.',
  'Final classification: PENDING REVIEW. The committee has reviewed this file twice. Both times they scheduled a third review.',
  'Final classification: BACKGROUND SIGNIFICANT. Not the main event in any room they enter. The room would not be the same without them. This will not be said to them directly.',
  'Final classification: DELIBERATE VAGUE. Provides enough to seem knowable. Withholds enough to remain interesting. Whether this is strategy or simply personality, the file cannot determine.',
  'Final classification: QUIETLY SPECIFIC. Has detailed internal systems for things that do not require systems. The systems work. No one knows about them.',
  'Final classification: SUSTAINED MYSTERY. Each answer raised two new questions. This is not a complaint. It is an observation. The observation will not be followed up on.',
  'Final classification: REASONABLE CONCERN. Nothing here is alarming individually. Collectively, the committee has agreed to monitor the situation.',
]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function generateProfileSummary(answers: Record<string, string>): string {
  const observations: string[] = []

  for (const question of QUESTION_POOL) {
    const answer = answers[question.key]
    if (!answer || !answer.trim()) continue

    if (question.type === 'freetext') {
      observations.push(question.observe(answer.trim()))
    } else {
      const matched = question.options.find(o => o.value === answer)
      if (matched) observations.push(matched.observation)
    }
  }

  if (observations.length === 0) {
    return 'Insufficient data. The subject provided responses the system could not resolve. This is itself a data point. It has been logged.'
  }

  const selected = shuffle(observations).slice(0, Math.min(5, observations.length))
  const intro = pick(INTROS)
  const classification = pick(FINAL_CLASSIFICATIONS)

  const body = selected.map((obs, i) => {
    if (i === 0) return obs
    return `${pick(TRANSITIONS)} ${obs.charAt(0).toLowerCase()}${obs.slice(1)}`
  })

  return [intro, ...body, classification].join('\n\n')
}