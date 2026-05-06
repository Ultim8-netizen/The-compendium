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
          backgroundColor: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '52px 64px',
          fontFamily: '"Courier New", Courier, monospace',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* scan lines */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.012) 39px, rgba(255,255,255,0.012) 40px)', display: 'flex' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 59px, rgba(255,255,255,0.015) 59px, rgba(255,255,255,0.015) 60px)', display: 'flex' }} />

        {/* ghost watermark */}
        <div style={{ position: 'absolute', bottom: -20, right: -30, fontSize: 180, fontWeight: 900, color: 'rgba(255,255,255,0.018)', letterSpacing: -4, lineHeight: 1, display: 'flex' }}>
          CLASSIFIED
        </div>

        {/* left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#facc15', display: 'flex' }} />

        {/* top stamps */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ border: '2px solid #dc2626', color: '#dc2626', fontSize: 11, fontWeight: 700, letterSpacing: 4, padding: '5px 14px', display: 'flex' }}>TOP SECRET</div>
            <div style={{ border: '2px solid #dc2626', color: '#dc2626', fontSize: 11, fontWeight: 700, letterSpacing: 4, padding: '5px 14px', display: 'flex' }}>EYES ONLY</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            <div style={{ fontSize: 10, color: '#3a3a3a', letterSpacing: 3, display: 'flex' }}>ARCHIVE REF: CMP-∞-ACTIVE</div>
            <div style={{ fontSize: 10, color: '#3a3a3a', letterSpacing: 3, display: 'flex' }}>DISTRIBUTION: UNRESTRICTED (REGRETTABLY)</div>
          </div>
        </div>

        {/* main body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ fontSize: 11, color: '#525252', letterSpacing: 6, textTransform: 'uppercase', marginBottom: 14, display: 'flex' }}>
            Classified Repository · Active Archive
          </div>
          <div style={{ fontSize: 104, fontWeight: 900, color: '#ffffff', letterSpacing: -3, lineHeight: 1, marginBottom: 28, display: 'flex' }}>
            THE COMPENDIUM
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 44 }}>
            <div style={{ fontSize: 14, color: '#525252', letterSpacing: 1.5, display: 'flex' }}>A classified archive of deeply unnecessary</div>
            <div style={{ backgroundColor: '#1c1c1c', width: 160, height: 20, display: 'flex' }} />
            <div style={{ fontSize: 14, color: '#525252', letterSpacing: 1.5, display: 'flex' }}>intelligence.</div>
          </div>
          <div style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
            {[
              { label: 'Active Files', value: '03' },
              { label: 'Clearance Required', value: 'YES' },
              { label: 'Intake Duration', value: '90s' },
              { label: 'Profile Retention', value: '24H' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'stretch' }}>
                {i > 0 && <div style={{ width: 1, backgroundColor: '#1f1f1f', display: 'flex', marginRight: 32 }} />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginRight: 32 }}>
                  <div style={{ fontSize: 9, color: '#404040', letterSpacing: 4, textTransform: 'uppercase', display: 'flex' }}>{stat.label}</div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#facc15', lineHeight: 1, display: 'flex' }}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #1c1c1c', paddingTop: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 10, color: '#3a3a3a', letterSpacing: 2, display: 'flex' }}>
              VISITOR INTAKE MANDATORY · ALL PROFILES EXPIRE IN 24 HOURS
            </div>
            <div style={{ fontSize: 10, color: '#262626', letterSpacing: 2, display: 'flex' }}>
              WE RETAIN NOTHING · THIS WAS ALWAYS GOING TO BE TRUE
            </div>
            {/* byline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
              <div style={{ width: 18, height: 1, backgroundColor: '#2a2a2a', display: 'flex' }} />
              <div style={{ fontSize: 10, color: '#2e2e2e', letterSpacing: 4, display: 'flex' }}>by</div>
              <div style={{ fontSize: 12, fontWeight: 900, color: '#404040', letterSpacing: 5, display: 'flex' }}>
                ABYSSPROTOCOL
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#facc15', color: '#000000', fontSize: 11, fontWeight: 900, letterSpacing: 4, padding: '10px 22px', display: 'flex' }}>
            ENTER IF CLEARED
          </div>
        </div>

      </div>
    ),
    { ...size },
  )
}