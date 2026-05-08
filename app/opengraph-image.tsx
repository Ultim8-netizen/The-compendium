import { ImageResponse } from 'next/og'
import { CASE_FILES } from '@/case-files/_registry'

export const runtime = 'edge'
export const alt = 'The Compendium — A classified archive of deeply unnecessary human behavioral intelligence.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const THEMES = [
  { label: 'Gold',     bg: '#1c1300', accent: '#FFD700', mid: '#C8941A', deep: '#3A2208' },
  { label: 'Rose',     bg: '#110507', accent: '#D47888', mid: '#C07080', deep: '#3A1020' },
  { label: 'Cobalt',   bg: '#020810', accent: '#5090C0', mid: '#508090', deep: '#081828' },
  { label: 'Obsidian', bg: '#080614', accent: '#9068B8', mid: '#806898', deep: '#180c28' },
]

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#080600',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: '"Courier New", Courier, monospace',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Subtle grain */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.006) 3px, rgba(255,255,255,0.006) 4px)',
          display: 'flex',
        }} />

        {/* Top glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(200,148,26,0.14) 0%, transparent 55%)',
          display: 'flex',
        }} />

        {/* ── Main content area ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '52px 80px 32px',
          position: 'relative',
          zIndex: 1,
        }}>

          {/* Eyebrow */}
          <div style={{
            fontSize: 11,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#5A3E10',
            marginBottom: 24,
            display: 'flex',
          }}>
            A Classified Archive
          </div>

          {/* Title */}
          <div style={{
            fontSize: 112,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: -4,
            marginBottom: 28,
            background: 'linear-gradient(158deg, #3A2208 0%, #7A5A14 14%, #C8941A 28%, #FFD700 42%, #FFF8C0 50%, #FFD700 58%, #C8941A 72%, #7A5A14 86%, #3A2208 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
            textAlign: 'center',
          }}>
            THE COMPENDIUM
          </div>

          {/* Horizontal rule with diamond */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 24, width: '100%', maxWidth: 560 }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,148,26,0.5))', display: 'flex' }} />
            <div style={{ color: '#C8941A', fontSize: 10, display: 'flex' }}>◆</div>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(200,148,26,0.5), transparent)', display: 'flex' }} />
          </div>

          {/* Subtitle */}
          <div style={{
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: 300,
            color: '#8A6010',
            textAlign: 'center',
            lineHeight: 1.55,
            maxWidth: 540,
            marginBottom: 8,
            display: 'flex',
          }}>
            {CASE_FILES.length} files of deeply unnecessary human behavioral intelligence.
            All strange. All true.
          </div>

        </div>

        {/* ── Four theme color panels at the bottom ── */}
        <div style={{
          display: 'flex',
          height: 148,
          position: 'relative',
          zIndex: 2,
        }}>
          {THEMES.map((t, i) => (
            <div
              key={t.label}
              style={{
                flex: 1,
                background: t.bg,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                borderTop: `2px solid ${t.accent}40`,
                borderRight: i < THEMES.length - 1 ? `1px solid rgba(0,0,0,0.4)` : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Radial glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 50% 100%, ${t.accent}22 0%, transparent 70%)`,
                display: 'flex',
              }} />

              {/* Orb */}
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: `radial-gradient(circle at 35% 30%, ${t.accent}ff, ${t.mid} 55%, ${t.deep})`,
                boxShadow: `0 0 14px ${t.accent}50`,
                display: 'flex',
                position: 'relative',
                zIndex: 1,
              }} />

              {/* Label */}
              <div style={{
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: t.mid,
                fontWeight: 700,
                position: 'relative',
                zIndex: 1,
                display: 'flex',
              }}>
                {t.label}
              </div>

              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                display: 'flex',
              }} />
            </div>
          ))}
        </div>

        {/* Bottom byline strip */}
        <div style={{
          background: '#030200',
          padding: '10px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 3,
        }}>
          <div style={{ fontSize: 9, color: '#2A1808', letterSpacing: 4, display: 'flex' }}>
            ABYSSPROTOCOL
          </div>
          <div style={{ fontSize: 9, color: '#2A1808', letterSpacing: 2, display: 'flex' }}>
            ENTER IF CLEARED
          </div>
          <div style={{ fontSize: 9, color: '#2A1808', letterSpacing: 4, display: 'flex' }}>
            NO ACCOUNT REQUIRED
          </div>
        </div>

      </div>
    ),
    { ...size },
  )
}