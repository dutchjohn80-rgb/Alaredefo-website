import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'en' | 'sw'
export type Theme = 'light' | 'dark'

type AppContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('alaredefo-language') === 'sw' ? 'sw' : 'en'))
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('alaredefo-react-theme') === 'dark' ? 'dark' : 'light'))

  useEffect(() => {
    localStorage.setItem('alaredefo-language', language)
    document.documentElement.lang = language === 'sw' ? 'sw' : 'en'
  }, [language])

  useEffect(() => {
    localStorage.setItem('alaredefo-react-theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [language, theme],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const value = useContext(AppContext)
  if (!value) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return value
}
