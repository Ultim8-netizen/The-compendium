'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Theme = 'gold' | 'rose' | 'cobalt' | 'obsidian'

export const THEMES: {
  id: Theme
  label: string
  desc: string
  swatch: string   // mid-tone for orb base
  hi: string       // highlight for orb specular
}[] = [
  { id: 'gold',     label: 'Gold',     desc: 'Polished yellow gold',  swatch: '#C8941A', hi: '#FFF0A0' },
  { id: 'rose',     label: 'Rose',     desc: 'Red gold alloy',        swatch: '#C07080', hi: '#FFD0DC' },
  { id: 'cobalt',   label: 'Cobalt',   desc: 'Blue glass steel',      swatch: '#3878A8', hi: '#B0D8F0' },
  { id: 'obsidian', label: 'Obsidian', desc: 'Black glass — violet',  swatch: '#604890', hi: '#D0B8F0' },
]

const DEFAULT: Theme = 'gold'

function resolve(): Theme {
  try {
    return (localStorage.getItem('compendium-theme') as Theme) || DEFAULT
  } catch {
    return DEFAULT
  }
}

interface ThemeCtx {
  theme: Theme
  setTheme: (t: Theme) => void
}

const Ctx = createContext<ThemeCtx>({ theme: DEFAULT, setTheme: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(resolve)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function setTheme(t: Theme) {
    setThemeState(t)
    try { localStorage.setItem('compendium-theme', t) } catch {}
  }

  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>
}

export function useTheme() { return useContext(Ctx) }