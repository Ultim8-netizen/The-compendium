import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Lightest possible query — asks Supabase for the current timestamp.
  // Touches the DB without reading any user data.
  const { error } = await supabase.rpc('now')

  if (error) {
    // 'now' may not exist as an explicit RPC; fall back to a table count.
    // visitors table is guaranteed to exist per the codebase.
    const { error: fallbackError } = await supabase
      .from('visitors')
      .select('id', { count: 'exact', head: true })

    if (fallbackError) {
      console.error('[keep-alive] Supabase ping failed:', fallbackError.message)
      return NextResponse.json(
        { ok: false, error: fallbackError.message },
        { status: 500 }
      )
    }
  }

  console.log('[keep-alive] Supabase pinged successfully at', new Date().toISOString())
  return NextResponse.json({ ok: true, pinged_at: new Date().toISOString() })
}