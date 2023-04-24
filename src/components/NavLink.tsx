import { HashLink } from 'react-router-hash-link'

export default ({
  page,
  selectedSection,
  setSelectedSection,
  isMobile = false,
  setSidebarOpen,
}: {
  page: string
  selectedSection: string
  setSelectedSection: (section: string) => void
  isMobile?: boolean
  setSidebarOpen?: (open: boolean) => void
}) => {
  const lowerCasePage = page.toLowerCase()

  return (
    <HashLink
      onClick={() => {
        setSelectedSection && setSelectedSection(lowerCasePage)
        setSidebarOpen && setSidebarOpen(false)
      }}
      // smooth
      to={'/#' + lowerCasePage}
      className={
        !isMobile
          ? `
      ${
        selectedSection === lowerCasePage
          ? 'text-own-primary-500 dark:text-own-primary-400'
          : ''
      } rounded-own-sm px-3 py-1 hover:text-own-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-own-neutral-100 dark:hover:text-own-primary-400 dark:focus-visible:ring-own-neutral-600
      `
          : `
      ${
        selectedSection === lowerCasePage
          ? 'text-own-primary-400 dark:text-own-primary-500'
          : ''
      } rounded-own-sm px-3 py-1 hover:text-own-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-own-neutral-100 dark:hover:text-own-primary-500 dark:focus-visible:ring-own-neutral-600
      `
      }
    >
      {page}
    </HashLink>
  )
}
