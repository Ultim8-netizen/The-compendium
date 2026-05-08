'use client'

import { useState } from 'react'
import { useTheme, DAY_THEMES, NIGHT_THEMES, type Mode } from '@/lib/theme'

export default function ThemeToggle() {
  const { theme, mode, setTheme, setMode } = useTheme()
  const [open, setOpen] = useState(false)
  const currentThemes = mode === 'day' ? DAY_THEMES : NIGHT_THEMES

  return (
    <div style={{
      position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
      fontFamily: "'DM Mono', monospace",
    }}>
      {open && (
        <div style={{
          position: 'absolute', bottom: '52px', right: 0,
          background: 'var(--c-card)',
          border: '1px solid var(--c-border)',
          padding: '16px', minWidth: '172px',
          boxShadow: '0 8px 32px var(--c-shadow)',
        }}>

          {/* Day / Night */}
          <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
            {(['day', 'night'] as Mode[]).map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                flex: 1, padding: '6px 0',
                fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase',
                border: 'none', cursor: 'pointer',
                background: mode === m ? 'var(--c-accent)' : 'var(--c-bg-secondary)',
                color:      mode === m ? 'var(--c-accent-fg)' : 'var(--c-muted)',
                transition: 'all 0.15s',
              }}>
                {m === 'day' ? '☀ Day' : '◑ Night'}
              </button>
            ))}
          </div>

          {/* Palette label */}
          <div style={{
            fontSize: '8px', letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--c-subtle)', marginBottom: '8px',
          }}>
            Palette
          </div>

          {/* Swatches */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {currentThemes.map(t => (
              <button key={t.id} onClick={() => setTheme(t.id)} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '5px 8px', width: '100%', textAlign: 'left',
                background: theme === t.id ? 'var(--c-bg-secondary)' : 'transparent',
                border: theme === t.id ? '1px solid var(--c-accent)' : '1px solid transparent',
                cursor: 'pointer',
              }}>
                <div style={{
                  width: '12px', height: '12px', flexShrink: 0,
                  background: t.swatch,
                  border: '1px solid var(--c-border)',
                  boxShadow: theme === t.id ? '0 0 0 2px var(--c-accent)' : 'none',
                  transition: 'box-shadow 0.15s',
                }} />
                <span style={{
                  fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase',
                  color: 'var(--c-fg)',
                }}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trigger */}
      <button onClick={() => setOpen(o => !o)} aria-label="Toggle theme" style={{
        width: '38px', height: '38px',
        background: 'var(--c-card)',
        border: '1px solid var(--c-border)',
        color: 'var(--c-accent)',
        fontSize: '15px', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 16px var(--c-shadow)',
        transition: 'all 0.15s',
      }}>
        {mode === 'day' ? '☀' : '◑'}
      </button>
    </div>
  )
}