'use client'

import { useState } from 'react'
import { useTheme, THEMES } from '@/lib/theme'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const current = THEMES.find(t => t.id === theme) ?? THEMES[0]

  return (
    <div style={{
      position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
      fontFamily: "'DM Mono', monospace",
    }}>
      {open && (
        <div style={{
          position: 'absolute', bottom: '54px', right: 0,
          background: 'var(--c-card)',
          border: '1px solid var(--c-border)',
          padding: '16px 14px',
          minWidth: '210px',
          boxShadow: '0 8px 40px var(--c-shadow)',
        }}>
          {/* panel header */}
          <div style={{
            fontSize: '8px', letterSpacing: '5px', textTransform: 'uppercase',
            color: 'var(--c-subtle)', marginBottom: '14px', paddingBottom: '12px',
            borderBottom: '1px solid var(--c-border)',
          }}>
            Metal &amp; Glass
          </div>

          {/* theme rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {THEMES.map(t => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setOpen(false) }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '9px 10px', width: '100%', textAlign: 'left',
                  background: theme === t.id ? 'rgba(255,255,255,0.025)' : 'transparent',
                  border: theme === t.id ? '1px solid var(--c-accent)' : '1px solid transparent',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >
                {/* metallic orb */}
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                  background: `radial-gradient(circle at 32% 28%, ${t.hi}, ${t.swatch} 55%, #050305)`,
                  boxShadow: theme === t.id
                    ? `0 0 0 1px ${t.swatch}, 0 0 14px ${t.swatch}70`
                    : `0 0 0 1px ${t.swatch}50, inset 0 1px 0 rgba(255,255,255,0.1)`,
                  transition: 'box-shadow 0.2s',
                }} />
                <div>
                  <div style={{
                    fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'var(--c-fg)', lineHeight: 1.3,
                  }}>
                    {t.label}
                  </div>
                  <div style={{
                    fontSize: '9px', color: 'var(--c-subtle)',
                    letterSpacing: '0.5px', marginTop: '2px',
                  }}>
                    {t.desc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* trigger — a metallic orb that mirrors active theme */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Switch metal theme"
        title={current.label}
        style={{
          width: '42px', height: '42px',
          borderRadius: '50%',
          background: `radial-gradient(circle at 32% 28%, ${current.hi}, ${current.swatch} 55%, #050305)`,
          border: `1px solid ${current.swatch}80`,
          cursor: 'pointer',
          boxShadow: `0 0 14px ${current.swatch}60, inset 0 1px 0 rgba(255,255,255,0.15)`,
          transition: 'all 0.25s',
        }}
      />
    </div>
  )
}