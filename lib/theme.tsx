'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type DayTheme   = 'lemon' | 'pink' | 'light-blue' | 'yellow' | 'gold'
export type NightTheme = 'deep-red' | 'deep-blue' | 'pitch-black'
export type Theme = DayTheme | NightTheme
export type Mode  = 'day' | 'night'

export const DAY_THEMES: { id: DayTheme; label: string; swatch: string }[] = [
  { id: 'lemon',      label: 'Lemon',  swatch: '#FFF9C4' },
  { id: 'pink',       label: 'Pink',   swatch: '#FFD6E0' },
  { id: 'light-blue', label: 'Sky',    swatch: '#D0EEFF' },
  { id: 'yellow',     label: 'Yellow', swatch: '#FFF0B0' },
  { id: 'gold',       label: 'Gold',   swatch: '#F5E6C0' },
]

export const NIGHT_THEMES: { id: NightTheme; label: string; swatch: string }[] = [
  { id: 'deep-red',    label: 'Crimson', swatch: '#3a0808' },
  { id: 'deep-blue',   label: 'Abyss',   swatch: '#080f2a' },
  { id: 'pitch-black', label: 'Void',    swatch: '#111111' },
]

const DEFAULT_DAY:   DayTheme   = 'gold'
const DEFAULT_NIGHT: NightTheme = 'pitch-black'

function resolveInitialMode(): Mode {
  try {
    const saved = localStorage.getItem('compendium-mode') as Mode | null
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
  } catch {
    return 'day'
  }
}

function resolveInitialTheme(mode: Mode): Theme {
  try {
    const saved = localStorage.getItem('compendium-theme') as Theme | null
    if (saved) return saved
    return mode === 'night' ? DEFAULT_NIGHT : DEFAULT_DAY
  } catch {
    return DEFAULT_DAY
  }
}

interface ThemeCtx {
  theme: Theme
  mode:  Mode
  setTheme: (t: Theme) => void
  setMode:  (m: Mode)  => void
}

const Ctx = createContext<ThemeCtx>({
  theme: DEFAULT_DAY,
  mode: 'day',
  setTheme: () => {},
  setMode:  () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode,  setModeState]  = useState<Mode>(resolveInitialMode)
  const [theme, setThemeState] = useState<Theme>(() => resolveInitialTheme(resolveInitialMode()))

  // Effect is now only responsible for syncing DOM attributes — no setState calls
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-mode',  mode)
  }, [theme, mode])

  function setTheme(t: Theme) {
    setThemeState(t)
    localStorage.setItem('compendium-theme', t)
  }

  function setMode(m: Mode) {
    setModeState(m)
    localStorage.setItem('compendium-mode', m)
    const isDayTheme = DAY_THEMES.some(d => d.id === theme)
    if (m === 'day'   && !isDayTheme) setThemeState(DEFAULT_DAY)
    if (m === 'night' &&  isDayTheme) setThemeState(DEFAULT_NIGHT)
  }

  return (
    <Ctx.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </Ctx.Provider>
  )
}

export function useTheme() { return useContext(Ctx) }