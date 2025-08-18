import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {
    // Check if theme is saved in localStorage
    const savedTheme = localStorage.getItem('themeName')
    if (savedTheme) {
      setThemeName(savedTheme)
    } else {
      // Fallback to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const systemTheme = prefersDark ? 'dark' : 'light'
      setThemeName(systemTheme)
      localStorage.setItem('themeName', systemTheme)
    }

    // Listen for system theme change
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      const systemTheme = e.matches ? 'dark' : 'light'
      const saved = localStorage.getItem('themeName')
      // Only update if user hasn’t explicitly chosen
      if (!saved) {
        setThemeName(systemTheme)
      }
    }
    darkMediaQuery.addEventListener('change', handleChange)

    return () => {
      darkMediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', newTheme)
    setThemeName(newTheme)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
