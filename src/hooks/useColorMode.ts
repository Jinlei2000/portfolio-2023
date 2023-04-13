import { useAtom } from 'jotai'
import { colorModeAtom } from '../stores/colorMode'

export default () => {
  const [colorMode, setColorMode] = useAtom(colorModeAtom)

  const toggleColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }

  return {
    toggleColorMode,
    colorMode,
  }
}
