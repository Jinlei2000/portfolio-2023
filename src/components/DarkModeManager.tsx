import useColorMode from '../hooks/useColorMode'

export default ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode()
  return (
    <div className={`${colorMode === 'dark' && 'dark'}`}>{children}</div>
  )
}
