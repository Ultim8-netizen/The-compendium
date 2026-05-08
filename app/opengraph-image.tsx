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
          background: '#050300',
        }}
      >

        {/* ── PANEL 1: Gold — tall left column ── */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: 340, height: 630,
          background: 'linear-gradient(170deg, #1c1300 0%, #2e1f00 40%, #0e0900 100%)',
          display: 'flex',
        }}>
          {/* radial glow top-left */}
          <div style={{
            position: 'absolute', top: -60, left: -60,
            width: 380, height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,215,0,0.22) 0%, transparent 70%)',
            display: 'flex',
          }} />
          {/* shimmer diagonal streak */}
          <div style={{
            position: 'absolute', top: -40, left: 60,
            width: 60, height: 800,
            background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.08), transparent)',
            transform: 'rotate(-18deg)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: -40, left: 140,
            width: 20, height: 800,
            background: 'linear-gradient(90deg, transparent, rgba(255,248,160,0.12), transparent)',
            transform: 'rotate(-18deg)',
            display: 'flex',
          }} />
          {/* bottom glow pool */}
          <div style={{
            position: 'absolute', bottom: -40, left: -40,
            width: 340, height: 200,
            background: 'radial-gradient(ellipse, rgba(200,148,26,0.18) 0%, transparent 70%)',
            display: 'flex',
          }} />
          {/* right edge soft border */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 1, height: '100%',
            background: 'linear-gradient(180deg, transparent, rgba(255,215,0,0.3) 30%, rgba(255,215,0,0.5) 60%, transparent)',
            display: 'flex',
          }} />
        </div>

        {/* ── PANEL 2: Rose — wide upper-right block ── */}
        <div style={{
          position: 'absolute',
          top: 0, left: 340,
          width: 500, height: 310,
          background: 'linear-gradient(145deg, #110507 0%, #1e0810 50%, #080304 100%)',
          display: 'flex',
        }}>
          <div style={{
            position: 'absolute', top: -80, right: -80,
            width: 420, height: 420,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,120,136,0.20) 0%, transparent 68%)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: 20, left: 80,
            width: 30, height: 600,
            background: 'linear-gradient(90deg, transparent, rgba(212,120,136,0.10), transparent)',
            transform: 'rotate(12deg)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: 20, left: 200,
            width: 80, height: 600,
            background: 'linear-gradient(90deg, transparent, rgba(255,200,215,0.07), transparent)',
            transform: 'rotate(12deg)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0,
            width: '100%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(212,120,136,0.4) 40%, rgba(212,120,136,0.6) 60%, transparent)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 1, height: '100%',
            background: 'linear-gradient(180deg, transparent, rgba(212,120,136,0.35) 50%, transparent)',
            display: 'flex',
          }} />
        </div>

        {/* ── PANEL 3: Cobalt — tall right column ── */}
        <div style={{
          position: 'absolute',
          top: 0, left: 840,
          width: 360, height: 630,
          background: 'linear-gradient(155deg, #020810 0%, #041220 45%, #010409 100%)',
          display: 'flex',
        }}>
          <div style={{
            position: 'absolute', top: -60, right: -60,
            width: 360, height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(80,144,192,0.22) 0%, transparent 68%)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: -20, left: 30,
            width: 25, height: 900,
            background: 'linear-gradient(90deg, transparent, rgba(80,144,192,0.12), transparent)',
            transform: 'rotate(-8deg)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: -20, left: 120,
            width: 60, height: 900,
            background: 'linear-gradient(90deg, transparent, rgba(160,210,250,0.07), transparent)',
            transform: 'rotate(-8deg)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', bottom: -40, right: -40,
            width: 340, height: 220,
            background: 'radial-gradient(ellipse, rgba(60,120,180,0.16) 0%, transparent 70%)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: 1, height: '100%',
            background: 'linear-gradient(180deg, transparent, rgba(80,144,192,0.4) 40%, rgba(80,144,192,0.6) 65%, transparent)',
            display: 'flex',
          }} />
        </div>

        {/* ── PANEL 4: Obsidian — lower-center rectangle ── */}
        <div style={{
          position: 'absolute',
          top: 310, left: 340,
          width: 500, height: 320,
          background: 'linear-gradient(135deg, #080614 0%, #0f0a20 50%, #04030a 100%)',
          display: 'flex',
        }}>
          <div style={{
            position: 'absolute', bottom: -60, left: '50%',
            width: 400, height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(144,104,184,0.20) 0%, transparent 68%)',
            transform: 'translateX(-50%)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: -10, left: 50,
            width: 40, height: 500,
            background: 'linear-gradient(90deg, transparent, rgba(144,104,184,0.10), transparent)',
            transform: 'rotate(22deg)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: -10, left: 180,
            width: 100, height: 500,
            background: 'linear-gradient(90deg, transparent, rgba(200,175,240,0.07), transparent)',
            transform: 'rotate(22deg)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(144,104,184,0.4) 40%, rgba(144,104,184,0.6) 60%, transparent)',
            display: 'flex',
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 1, height: '100%',
            background: 'linear-gradient(180deg, transparent, rgba(144,104,184,0.35) 50%, transparent)',
            display: 'flex',
          }} />
        </div>

        {/* ── Global dark vignette over all panels ── */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.45) 100%)',
          display: 'flex',
          zIndex: 2,
        }} />

        {/* ── THE COMPENDIUM title across all panels ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          gap: 0,
        }}>

          {/* Dark backing plate so title reads over any panel */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1100,
            height: 260,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.72) 0%, transparent 75%)',
            display: 'flex',
          }} />

          {/* Eyebrow */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 11,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#5A3E10',
            marginBottom: 18,
            display: 'flex',
            position: 'relative',
            zIndex: 1,
          }}>
            ABYSSPROTOCOL &nbsp;·&nbsp; CLASSIFIED ARCHIVE
          </div>

          {/* Main title */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 130,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: -3,
            color: '#FFD700',
            textAlign: 'center',
            display: 'flex',
            position: 'relative',
            zIndex: 1,
            textShadow: '0 0 80px rgba(255,215,0,0.4)',
          }}>
            THE<br />COMPENDIUM
          </div>

          {/* Rule */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 24,
            width: 520,
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5))', display: 'flex' }} />
            <div style={{ color: '#C8941A', fontSize: 9, display: 'flex' }}>◆</div>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(255,215,0,0.5), transparent)', display: 'flex' }} />
          </div>

          {/* Tagline */}
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: 14,
            color: '#7A5A14',
            letterSpacing: 3,
            marginTop: 16,
            textTransform: 'uppercase',
            display: 'flex',
            position: 'relative',
            zIndex: 1,
          }}>
            Strange. True. None of it was asked for.
          </div>

        </div>

      </div>
    ),
    { ...size },
  )
}