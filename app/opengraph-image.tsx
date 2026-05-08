import { ImageResponse } from 'next/og'
import { CASE_FILES } from '@/case-files/_registry'

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
          background: 'linear-gradient(158deg, #0e0900 0%, #1c1300 28%, #160f00 55%, #0a0700 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '52px 64px',
          fontFamily: '"Courier New", Courier, monospace',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* brushed grain lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(200,148,26,0.012) 3px, rgba(200,148,26,0.012) 4px)',
          display: 'flex',
        }} />

        {/* radial gold glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(200,148,26,0.28) 0%, transparent 60%)',
          display: 'flex',
        }} />

        {/* left gold accent bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
          background: 'linear-gradient(180deg, transparent, #C8941A 20%, #FFD700 50%, #C8941A 80%, transparent)',
          display: 'flex',
        }} />

        {/* top right classification stamps */}
        <div style={{
          position: 'absolute', top: 40, right: 64,
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6,
        }}>
          <div style={{ fontSize: 10, color: '#3A2808', letterSpacing: 3, display: 'flex' }}>
            ARCHIVE REF: CMP-∞-ACTIVE
          </div>
          <div style={{ fontSize: 10, color: '#2A1808', letterSpacing: 3, display: 'flex' }}>
            DISTRIBUTION: UNRESTRICTED (REGRETTABLY)
          </div>
        </div>

        {/* ghost watermark */}
        <div style={{
          position: 'absolute', bottom: -30, right: -20,
          fontSize: 160, fontWeight: 900,
          color: 'rgba(200,148,26,0.04)',
          letterSpacing: -4, lineHeight: 1, display: 'flex',
        }}>
          CLASSIFIED
        </div>

        {/* top row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative', zIndex: 1 }}>
          {/* metallic diamond mark */}
          <div style={{
            width: 36, height: 36,
            border: '1px solid rgba(200,148,26,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(200,148,26,0.08)',
          }}>
            <div style={{ fontSize: 16, color: '#C8941A', display: 'flex' }}>◆</div>
          </div>
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 10, letterSpacing: 5, textTransform: 'uppercase',
            color: '#7A5A14', display: 'flex',
          }}>
            Classified Repository · Restricted Access
          </div>
        </div>

        {/* main title block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative', zIndex: 1 }}>

          {/* horizontal rule */}
          <div style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(200,148,26,0.6), rgba(255,215,0,0.8), rgba(200,148,26,0.6), transparent)',
            marginBottom: 28,
            display: 'flex',
          }} />

          <div style={{
            fontSize: 108, fontWeight: 900, lineHeight: 0.88,
            letterSpacing: -4, marginBottom: 24,
            background: 'linear-gradient(158deg, #3A2208 0%, #7A5A14 12%, #C8941A 26%, #FFD700 40%, #FFF8C0 50%, #FFD700 60%, #C8941A 74%, #7A5A14 88%, #3A2208 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
          }}>
            THE COMPENDIUM
          </div>

          <div style={{
            fontSize: 15, fontStyle: 'italic', fontWeight: 300,
            color: '#B07820', letterSpacing: 1, marginBottom: 36,
            display: 'flex',
          }}>
            A classified archive of deeply unnecessary human behavioral intelligence.
          </div>

          {/* stat row */}
          <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
            {[
              { label: 'Active Files',      value: String(CASE_FILES.length).padStart(2,'0') },
              { label: 'Clearance Required', value: 'YES' },
              { label: 'Intake Duration',    value: '90s' },
              { label: 'Profile Retention',  value: '24H' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'stretch' }}>
                {i > 0 && (
                  <div style={{
                    width: 1,
                    background: 'rgba(200,148,26,0.2)',
                    display: 'flex', marginRight: 32,
                  }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginRight: 32 }}>
                  <div style={{ fontSize: 9, color: '#4A3008', letterSpacing: 4, textTransform: 'uppercase', display: 'flex' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: 34, fontWeight: 900, color: '#FFD700', lineHeight: 1, display: 'flex' }}>
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          borderTop: '1px solid rgba(200,148,26,0.2)', paddingTop: 20,
          position: 'relative', zIndex: 1,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ fontSize: 10, color: '#3A2808', letterSpacing: 2, display: 'flex' }}>
              VISITOR INTAKE MANDATORY · ALL PROFILES EXPIRE IN 24 HOURS
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
              <div style={{ width: 20, height: 1, background: '#2A1808', display: 'flex' }} />
              <div style={{ fontSize: 10, color: '#2A1808', letterSpacing: 4, display: 'flex' }}>by</div>
              <div style={{ fontSize: 12, fontWeight: 900, color: '#5A3E10', letterSpacing: 5, display: 'flex' }}>
                ABYSSPROTOCOL
              </div>
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #1c1400, #2e2000)',
            border: '1px solid rgba(200,148,26,0.5)',
            color: '#FFD700', fontSize: 11, fontWeight: 900,
            letterSpacing: 4, padding: '12px 24px', display: 'flex',
          }}>
            ENTER IF CLEARED
          </div>
        </div>

      </div>
    ),
    { ...size },
  )
}