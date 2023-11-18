import { create } from 'zustand'

const localStorageKeys = {
  visibleProjects: 'visibleProjects',
  order: 'order',
  selectedLanguages: 'selectedLanguages'
}

const getStorageNumber = (key, defaultValue) => {
  const storedValue = window.localStorage.getItem(key)
  return storedValue ? parseInt(storedValue, 10) : defaultValue
}
const getStorageString = (key, defaultValue) => {
  const storedValue = window.localStorage.getItem(key)
  return storedValue || defaultValue
}
function getStorageArray (key, defaultValue) {
  const storedValue = window.localStorage.getItem(key)
  return storedValue ? JSON.parse(storedValue) : defaultValue
}

export const useVisibleProjects = create((set) => ({
  visibleProjects: getStorageNumber(localStorageKeys.visibleProjects, 6),

  setVisibleProjects: (val) => set((state) => {
    const newValue = state.visibleProjects + val
    window.localStorage.setItem(localStorageKeys.visibleProjects, newValue)
    return { visibleProjects: newValue }
  })
}))

export const useOptionActive = create((set) => ({
  optionActive: null,

  setOptionActive: (optionSelected) => set((state) => {
    return { optionActive: optionSelected }
  })
}))

export const useOrderProjects = create((set) => ({
  orderSelected: getStorageString(localStorageKeys.order, 'new'),

  setOrderSelected: (optionSelected) => set((state) => {
    window.localStorage.setItem(localStorageKeys.order, optionSelected)
    return { orderSelected: optionSelected }
  })
}))

export const useSelectedLanguages = create((set) => ({
  selectedLanguages: getStorageArray(localStorageKeys.selectedLanguages, []),

  setSelectedLanguages: (selectedLanguage) => set((state) => {
    const updatedLanguages = state.selectedLanguages.includes(selectedLanguage)
      ? state.selectedLanguages.filter(lang => lang !== selectedLanguage)
      : [...state.selectedLanguages, selectedLanguage]

    window.localStorage.setItem(localStorageKeys.selectedLanguages, JSON.stringify(updatedLanguages))

    return { selectedLanguages: updatedLanguages }
  })
}))
