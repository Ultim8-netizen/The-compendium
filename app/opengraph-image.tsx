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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: '#070500',
        }}
      >

        {/* ── Base radial background — matches lp-root ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 46%, #1E1200 0%, #0D0800 50%, #040200 100%)',
          display: 'flex',
        }} />

        {/* ── Warm glow directly behind title ── */}
        <div style={{
          position: 'absolute',
          top: 60,
          left: '50%',
          marginLeft: -480,
          width: 960,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(200,148,26,0.22) 0%, rgba(160,100,10,0.10) 45%, transparent 70%)',
          display: 'flex',
        }} />

        {/* ── Glint A ── */}
        <div style={{
          position: 'absolute',
          top: -100,
          left: '50%',
          marginLeft: -80,
          width: 3,
          height: 900,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,235,120,0.10) 30%, rgba(255,252,190,0.35) 50%, rgba(255,235,120,0.10) 70%, transparent 100%)',
          transform: 'rotate(-24deg)',
          display: 'flex',
        }} />

        {/* ── Glint B ── */}
        <div style={{
          position: 'absolute',
          top: -100,
          left: '50%',
          marginLeft: 40,
          width: 2,
          height: 900,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,235,120,0.07) 30%, rgba(255,252,190,0.22) 50%, rgba(255,235,120,0.07) 70%, transparent 100%)',
          transform: 'rotate(24deg)',
          display: 'flex',
        }} />

        {/* ── Brushed grain lines ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(200,148,26,0.012) 3px, rgba(200,148,26,0.012) 4px)',
          display: 'flex',
        }} />

        {/* ── Frame border ── */}
        <div style={{
          position: 'absolute',
          top: 36, left: 52, right: 52, bottom: 36,
          border: '0.5px solid rgba(200,148,26,0.18)',
          display: 'flex',
        }} />

        {/* ── Corner ticks — top-left ── */}
        <div style={{ position: 'absolute', top: 36, left: 52, width: 28, height: 1, background: 'rgba(255,215,0,0.55)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 36, left: 52, width: 1, height: 28, background: 'rgba(255,215,0,0.55)', display: 'flex' }} />
        {/* top-right */}
        <div style={{ position: 'absolute', top: 36, right: 52, width: 28, height: 1, background: 'rgba(255,215,0,0.55)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 36, right: 52, width: 1, height: 28, background: 'rgba(255,215,0,0.55)', display: 'flex' }} />
        {/* bottom-left */}
        <div style={{ position: 'absolute', bottom: 36, left: 52, width: 28, height: 1, background: 'rgba(255,215,0,0.55)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 36, left: 52, width: 1, height: 28, background: 'rgba(255,215,0,0.55)', display: 'flex' }} />
        {/* bottom-right */}
        <div style={{ position: 'absolute', bottom: 36, right: 52, width: 28, height: 1, background: 'rgba(255,215,0,0.55)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 36, right: 52, width: 1, height: 28, background: 'rgba(255,215,0,0.55)', display: 'flex' }} />

        {/* ── Content column ── */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          zIndex: 10,
          width: '100%',
          padding: '0 80px',
        }}>

          {/* Eyebrow */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 11,
            letterSpacing: 7,
            textTransform: 'uppercase',
            color: '#7A5A14',
            marginBottom: 28,
            display: 'flex',
          }}>
            ABYSSPROTOCOL &nbsp;·&nbsp; CLASSIFIED ARCHIVE
          </div>

          {/* THE */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: 24,
            textTransform: 'uppercase',
            color: '#C8941A',
            marginBottom: 2,
            display: 'flex',
          }}>
            THE
          </div>

          {/* COMPENDIUM — sized to fit the 1200px canvas safely */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 118,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -2,
            color: '#FFD700',
            display: 'flex',
            textShadow: '0 0 60px rgba(255,215,0,0.40), 0 0 120px rgba(255,180,0,0.18)',
          }}>
            COMPENDIUM
          </div>

          {/* Rule */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            width: 480,
            marginTop: 30,
            marginBottom: 20,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,148,26,0.5))', display: 'flex' }} />
            <div style={{ color: '#C8941A', fontSize: 8, display: 'flex' }}>◆</div>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(200,148,26,0.5), transparent)', display: 'flex' }} />
          </div>

          {/* Tagline */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 13,
            color: '#7A5A14',
            letterSpacing: 5,
            textTransform: 'uppercase',
            display: 'flex',
          }}>
            Strange &nbsp;·&nbsp; True &nbsp;·&nbsp; None of it was asked for
          </div>

        </div>

        {/* ── Bottom byline ── */}
        <div style={{
          position: 'absolute',
          bottom: 56,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{ width: 24, height: 1, background: '#2A1808', display: 'flex' }} />
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 9,
            letterSpacing: 5,
            textTransform: 'uppercase',
            color: '#2A1808',
            display: 'flex',
          }}>
            ABYSSPROTOCOL
          </div>
          <div style={{ width: 24, height: 1, background: '#2A1808', display: 'flex' }} />
        </div>

      </div>
    ),
    { ...size },
  )
}