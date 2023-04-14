import { HashLink } from 'react-router-hash-link'

export default ({
  page,
  selectedSection,
  setSelectedSection,
  reverse = false,
  setSidebarOpen,
}: {
  page: string
  selectedSection: string
  setSelectedSection: (section: string) => void
  reverse?: boolean
  setSidebarOpen?: (open: boolean) => void
}) => {
  const lowerCasePage = page.toLowerCase()

  return (
    <HashLink
      onClick={() => {
        setSelectedSection(lowerCasePage)
        setSidebarOpen && setSidebarOpen(false)
      }}
      smooth
      to={'/#' + lowerCasePage}
      className={
        !reverse
          ? `
      ${
        selectedSection === lowerCasePage
          ? 'text-own-alpha dark:text-own-alpha-light'
          : ''
      } rounded-own-sm px-3 py-1 hover:text-own-alpha focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:hover:text-own-alpha-light  dark:focus-visible:ring-own-neutral-600
      `
          : `
      ${
        selectedSection === lowerCasePage
          ? 'text-own-alpha-light dark:text-own-alpha'
          : ''
      } light:focus-visible:ring-own-neutral-600 rounded-own-sm px-3 py-1 hover:text-own-alpha-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:hover:text-own-alpha
      `
      }
    >
      {page}
    </HashLink>
  )
}
