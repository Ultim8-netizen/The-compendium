import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Compendium — A classified archive of deeply unnecessary human behavioral intelligence.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#060401',
        }}
      >

        {/* ── Base gradient — richer at center, dark at edges ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 70% at 50% 48%, #1E1200 0%, #0D0800 45%, #040200 100%)',
          display: 'flex',
        }} />

        {/* ── Primary radial halo — sits directly behind the title ── */}
        <div style={{
          position: 'absolute',
          top: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 860,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,200,60,0.18) 0%, rgba(200,140,20,0.09) 45%, transparent 72%)',
          display: 'flex',
        }} />

        {/* ── Glint A — centered, tilted left ── */}
        <div style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          marginLeft: -120,
          width: 2,
          height: 1100,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,235,120,0.14) 30%, rgba(255,252,190,0.42) 50%, rgba(255,235,120,0.14) 70%, transparent 100%)',
          transform: 'rotate(-26deg)',
          display: 'flex',
        }} />

        {/* ── Glint A fine — same axis, thinner ── */}
        <div style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          marginLeft: -60,
          width: 1,
          height: 1100,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,252,190,0.10) 35%, rgba(255,255,210,0.22) 50%, rgba(255,252,190,0.10) 65%, transparent 100%)',
          transform: 'rotate(-26deg)',
          display: 'flex',
        }} />

        {/* ── Glint B — mirrored right ── */}
        <div style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          marginLeft: 60,
          width: 2,
          height: 1100,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,235,120,0.10) 30%, rgba(255,252,190,0.30) 50%, rgba(255,235,120,0.10) 70%, transparent 100%)',
          transform: 'rotate(26deg)',
          display: 'flex',
        }} />

        {/* ── Bottom warmth pool ── */}
        <div style={{
          position: 'absolute',
          bottom: -60,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 260,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(160,100,8,0.12) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* ── Frame border ── */}
        <div style={{
          position: 'absolute',
          top: 44, left: 60, right: 60, bottom: 44,
          border: '0.5px solid rgba(255,215,0,0.20)',
          display: 'flex',
        }} />

        {/* ── Corner ticks — top-left ── */}
        <div style={{ position: 'absolute', top: 44, left: 60, width: 32, height: 1, background: 'rgba(255,215,0,0.65)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 44, left: 60, width: 1, height: 32, background: 'rgba(255,215,0,0.65)', display: 'flex' }} />
        {/* top-right */}
        <div style={{ position: 'absolute', top: 44, right: 60, width: 32, height: 1, background: 'rgba(255,215,0,0.65)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 44, right: 60, width: 1, height: 32, background: 'rgba(255,215,0,0.65)', display: 'flex' }} />
        {/* bottom-left */}
        <div style={{ position: 'absolute', bottom: 44, left: 60, width: 32, height: 1, background: 'rgba(255,215,0,0.65)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 44, left: 60, width: 1, height: 32, background: 'rgba(255,215,0,0.65)', display: 'flex' }} />
        {/* bottom-right */}
        <div style={{ position: 'absolute', bottom: 44, right: 60, width: 32, height: 1, background: 'rgba(255,215,0,0.65)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 44, right: 60, width: 1, height: 32, background: 'rgba(255,215,0,0.65)', display: 'flex' }} />

        {/* ── Content: centered column ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          {/* Eyebrow — ABYSSPROTOCOL stamp */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 11,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#9A7422',
            marginBottom: 32,
            display: 'flex',
          }}>
            ABYSSPROTOCOL &nbsp;·&nbsp; CLASSIFIED ARCHIVE
          </div>

          {/* "THE" — demoted, spaced, treated as a subtitle above the hero word */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 36,
            fontWeight: 400,
            letterSpacing: 22,
            textTransform: 'uppercase',
            color: '#C8941A',
            marginBottom: 6,
            display: 'flex',
          }}>
            THE
          </div>

          {/* "COMPENDIUM" — the hero word */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 152,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -3,
            color: '#FFD700',
            marginBottom: 36,
            display: 'flex',
            textShadow: '0 0 80px rgba(255,215,0,0.45), 0 0 160px rgba(255,180,0,0.20)',
          }}>
            COMPENDIUM
          </div>

          {/* Rule + diamond */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            width: 520,
            marginBottom: 22,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.40))', display: 'flex' }} />
            <div style={{ color: '#C8941A', fontSize: 9, display: 'flex' }}>◆</div>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(255,215,0,0.40), transparent)', display: 'flex' }} />
          </div>

          {/* Tagline */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 13,
            color: '#8A6820',
            letterSpacing: 5,
            textTransform: 'uppercase',
            display: 'flex',
          }}>
            Strange &nbsp;·&nbsp; True &nbsp;·&nbsp; None of it was asked for
          </div>

        </div>

      </div>
    ),
    { ...size },
  )
}