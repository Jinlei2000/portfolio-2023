// jotai is a state management library for React
import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

let colorMode = 'light'

const theme = localStorage.getItem('colorMode')
if (theme) {
  colorMode = theme === 'dark' ? 'dark' : 'light'
} else {
  // If the user has no preference, use the system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  colorMode = prefersDark ? 'dark' : 'light'
}

// console.log('colorMode', colorMode)

export const colorModeAtom = atomWithStorage(
  'colorMode',
  colorMode as any,
  createJSONStorage(() => localStorage),
)
