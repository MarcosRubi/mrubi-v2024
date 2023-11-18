import { create } from 'zustand'

const getDefaultTheme = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDarkMode ? 'dark' : 'light'
}

export const useThemeStore = create((set) => ({
  theme: window.localStorage.getItem('theme') || getDefaultTheme(), // Lee del localStorage o establece un valor predeterminado
  setTheme: () => set((state) => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', newTheme) // Guarda el nuevo valor en el localStorage
    return { theme: newTheme }
  })
}))
export const useColorSelectStore = create((set) => ({
  color: window.localStorage.getItem('color') || 'default', // Lee del localStorage o establece un valor predeterminado
  setColor: (newColor) => set((state) => {
    window.localStorage.setItem('color', newColor) // Guarda el nuevo valor en el localStorage
    return { color: newColor }
  })
}))
