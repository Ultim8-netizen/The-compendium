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
          background: '#0A0600',
        }}
      >

        {/* ── Deep gold-tinted base layer ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, #1A0F00 0%, #0D0800 35%, #060401 55%, #0F0A02 80%, #1C1200 100%)',
          display: 'flex',
        }} />

        {/* ── Central radial gleam — warm gold bloom from center-top ── */}
        <div style={{
          position: 'absolute',
          top: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,210,80,0.10) 0%, rgba(200,148,26,0.05) 40%, transparent 70%)',
          display: 'flex',
        }} />

        {/* ── Sharp diagonal glint — upper-left to lower-right ── */}
        <div style={{
          position: 'absolute',
          top: -100,
          left: 200,
          width: 3,
          height: 1100,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,235,120,0.22) 35%, rgba(255,248,180,0.35) 50%, rgba(255,235,120,0.22) 65%, transparent 100%)',
          transform: 'rotate(-28deg)',
          display: 'flex',
        }} />

        {/* ── Secondary glint — finer, offset right ── */}
        <div style={{
          position: 'absolute',
          top: -100,
          left: 480,
          width: 1,
          height: 1100,
          background: 'linear-gradient(180deg, transparent 0%, rgba(255,248,180,0.12) 40%, rgba(255,255,200,0.20) 50%, rgba(255,248,180,0.12) 60%, transparent 100%)',
          transform: 'rotate(-28deg)',
          display: 'flex',
        }} />

        {/* ── Bottom warmth pool ── */}
        <div style={{
          position: 'absolute',
          bottom: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(180,120,10,0.10) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* ── Frame border ── */}
        <div style={{
          position: 'absolute',
          top: 48, left: 64, right: 64, bottom: 48,
          border: '0.5px solid rgba(255,215,0,0.25)',
          display: 'flex',
        }} />

        {/* ── Corner ticks — top-left ── */}
        <div style={{ position: 'absolute', top: 48, left: 64, width: 28, height: 1, background: 'rgba(255,215,0,0.7)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 48, left: 64, width: 1, height: 28, background: 'rgba(255,215,0,0.7)', display: 'flex' }} />
        {/* top-right */}
        <div style={{ position: 'absolute', top: 48, right: 64, width: 28, height: 1, background: 'rgba(255,215,0,0.7)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 48, right: 64, width: 1, height: 28, background: 'rgba(255,215,0,0.7)', display: 'flex' }} />
        {/* bottom-left */}
        <div style={{ position: 'absolute', bottom: 48, left: 64, width: 28, height: 1, background: 'rgba(255,215,0,0.7)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 48, left: 64, width: 1, height: 28, background: 'rgba(255,215,0,0.7)', display: 'flex' }} />
        {/* bottom-right */}
        <div style={{ position: 'absolute', bottom: 48, right: 64, width: 28, height: 1, background: 'rgba(255,215,0,0.7)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 48, right: 64, width: 1, height: 28, background: 'rgba(255,215,0,0.7)', display: 'flex' }} />

        {/* ── Content: centered column ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
        }}>

          {/* Eyebrow */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 13,
            letterSpacing: 7,
            textTransform: 'uppercase',
            color: '#5A3E10',
            marginBottom: 28,
            display: 'flex',
          }}>
            ABYSSPROTOCOL &nbsp;·&nbsp; CLASSIFIED ARCHIVE
          </div>

          {/* THE */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 148,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -4,
            color: '#FFD700',
            display: 'flex',
            textShadow: '0 0 120px rgba(255,215,0,0.18)',
          }}>
            THE
          </div>

          {/* COMPENDIUM */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 148,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -4,
            color: '#FFD700',
            marginBottom: 28,
            display: 'flex',
            textShadow: '0 0 120px rgba(255,215,0,0.18)',
          }}>
            COMPENDIUM
          </div>

          {/* Rule + diamond */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            width: 560,
            marginBottom: 20,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.45))', display: 'flex' }} />
            <div style={{ color: '#C8941A', fontSize: 10, display: 'flex' }}>◆</div>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(255,215,0,0.45), transparent)', display: 'flex' }} />
          </div>

          {/* Tagline */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 14,
            color: '#7A5A14',
            letterSpacing: 4,
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