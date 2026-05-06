import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const CODENAMES = [
  'AGENT SOGGY BISCUIT', 'OPERATIVE THIRD TUESDAY', 'FIELD ASSET: BEIGE CONCERN',
  'UNIT WHISPERING DRAWER', 'SUBJECT: MILD DISTURBANCE', 'CONTACT: FORGOTTEN ERRAND',
  'ASSET TREMBLING TEASPOON', 'OFFICER: AMBIENT REGRET', 'PROFILE: UNREMARKABLE WEDNESDAY',
]

const THREAT_LEVELS = [
  'NEGLIGIBLE (statistically irrelevant)',
  'LOW (poses risk mainly to themselves)',
  'MODERATE (has opinions)',
  'ELEVATED (laughs at their own stories)',
  'SEVERE (has unsolicited advice prepared)',
]

const SECTIONS = [
  'Wing 4B: Visitors Who Will Not Finish Their Drinks',
  'Annex C: People Who Laugh Then Ask What Was Funny',
  'Sub-level 2: Those Who Arrived Slightly Too Early',
  'Hall 7: Individuals Who Nod Before You Finish Talking',
  'Corridor 11: Persons Who Say "To Be Honest" Constantly',
  'Room 3A: Guests With A Story About This One Time',
]

const SUMMARIES = [
  'Profile flagged for excessive comfort with uncomfortable silences. Monitoring continues.',
  'Subject demonstrates unusual relationship with ceiling fans. No further details available.',
  'Cross-referenced against 14 other visitors. Match rate: 0%. Profile is statistically isolated.',
  'Behavioral pattern suggests subject has rehearsed this visit since childhood. Unverified.',
  'Assigned low priority. Will be revisited when something more urgent stops being urgent.',
  'No known associates. Several suspected associates. None will confirm.',
]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { answers } = body

  if (!answers || typeof answers !== 'object') {
    return NextResponse.json({ error: 'Invalid answers' }, { status: 400 })
  }

  const profile = {
    answers,
    codename: pick(CODENAMES),
    threat_level: pick(THREAT_LEVELS),
    assigned_section: pick(SECTIONS),
    profile_summary: pick(SUMMARIES),
  }

  const { data, error } = await supabase
    .from('visitors')
    .insert(profile)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'No id' }, { status: 400 })

  const { data, error } = await supabase
    .from('visitors')
    .select('*')
    .eq('id', id)
    .gt('expires_at', new Date().toISOString())
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Profile expired or not found' }, { status: 404 })
  }

  return NextResponse.json(data)
}