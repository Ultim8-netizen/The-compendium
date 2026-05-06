import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateProfileSummary, FINAL_CLASSIFICATIONS } from '@/lib/profile-generator'

const CODENAMES = [
  'AGENT SOGGY BISCUIT',
  'OPERATIVE THIRD TUESDAY',
  'FIELD ASSET: BEIGE CONCERN',
  'UNIT WHISPERING DRAWER',
  'SUBJECT: MILD DISTURBANCE',
  'CONTACT: FORGOTTEN ERRAND',
  'ASSET TREMBLING TEASPOON',
  'OFFICER: AMBIENT REGRET',
  'PROFILE: UNREMARKABLE WEDNESDAY',
  'OPERATIVE: SOFT ALARM',
  'ASSET: CAUTIOUS Tuesday',
  'UNIT COMFORTABLE SUSPICION',
  'CONTACT: LATERAL CONCERN',
  'AGENT POLITE INCIDENT',
  'SUBJECT: PENDING ELABORATION',
  'FIELD UNIT: SLOW CERTAINTY',
  'OPERATIVE: WARM ANOMALY',
  'CONTACT: KNOWN UNKNOWN',
  'ASSET GENTLE UNEASE',
  'PROFILE: SECONDARY EVENT',
  'UNIT: REASONABLE DOUBT',
  'OPERATIVE BACKGROUND NOISE',
  'AGENT: PLAUSIBLE ELSEWHERE',
  'SUBJECT MINOR CONTINUITY',
  'FIELD CONTACT: LOW STAKES MYSTERY',
]

const THREAT_LEVELS = [
  'NEGLIGIBLE (statistically irrelevant to most situations)',
  'LOW (poses risk primarily to themselves, indirectly)',
  'MODERATE (has formed opinions and will occasionally share them)',
  'ELEVATED (laughs at their own stories before finishing them)',
  'SEVERE (arrives with unsolicited advice already prepared)',
  'CONTAINED (dangerous only in specific social configurations)',
  'THEORETICAL (risk model incomplete due to subject unpredictability)',
  'AMBIENT (no active threat, but the file stays open)',
]

const SECTIONS = [
  'Wing 4B: Visitors Who Will Not Finish Their Drinks',
  'Annex C: People Who Laugh Then Ask What Was Funny',
  'Sub-level 2: Those Who Arrived Slightly Too Early',
  'Hall 7: Individuals Who Nod Before You Finish Talking',
  'Corridor 11: Persons Who Say "To Be Honest" at Irregular Intervals',
  'Room 3A: Guests With A Story About This One Time',
  'Block 9: People Who Have a Lot of Thoughts About the Menu',
  'Sector F: Visitors Who Recognized Someone and Did Not Say Anything',
  'Chamber 2: Individuals Who Arrive Prepared for a Different Conversation',
  'Level 6: Persons Currently Waiting for Something They Have Not Mentioned',
  'Unit 14: Those Who Have an Unfinished Sentence from Earlier Today',
  'Wing 7: People Who Smiled at the Wrong Moment and Have Not Addressed It',
]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { answers } = body

  if (!answers || typeof answers !== 'object') {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 })
  }

  const profile_summary = generateProfileSummary(answers)

  const record = {
    answers,
    codename: pick(CODENAMES),
    threat_level: pick(THREAT_LEVELS),
    assigned_section: pick(SECTIONS),
    profile_summary,
  }

  const { data, error } = await supabase
    .from('visitors')
    .insert(record)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

  const { data, error } = await supabase
    .from('visitors')
    .select('*')
    .eq('id', id)
    .gt('expires_at', new Date().toISOString())
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Expired or not found' }, { status: 404 })
  }

  return NextResponse.json(data)
}