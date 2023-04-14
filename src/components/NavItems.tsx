import { Download, Moon, Sun } from 'lucide-react'
import NavLink from './NavLink'
import useColorMode from '../hooks/useColorMode'

export default ({
  selectedSection,
  setSelectedSection,
  setSidebarOpen,
  isMobile = false,
}: {
  selectedSection: string
  setSelectedSection: (section: string) => void
  setSidebarOpen?: (open: boolean) => void
  isMobile?: boolean
}) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const navItems = ['About', 'Skills', 'Projects', 'Contact']
  return (
    <>
      {isMobile ? (
        <ul className="flex h-screen flex-col items-center justify-center space-y-10 text-2xl font-semibold text-own-neutral-500 ">
          {navItems.map(item => (
            <li key={item}>
              <NavLink
                page={item}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                reverse={true}
                setSidebarOpen={setSidebarOpen}
              />
            </li>
          ))}
          <li>
            <a
              href="/docs/LJ-Resume.pdf"
              download
              className="mx-3 flex items-center gap-2 rounded-xl bg-own-alpha py-3 pl-3 pr-4 font-medium leading-none text-own-neutral-50 hover:bg-own-alpha-dark"
            >
              <Download className="stroke-own-neutral-50" />
              Resume
            </a>
          </li>
          <li>
            <button
              onClick={() => toggleColorMode()}
              className="group ml-1.5 block rounded p-1 focus-visible:outline-none focus-visible:ring-1"
            >
              {colorMode === 'dark' ? (
                <Sun className="stroke-own-neutral-900 group-hover:stroke-own-alpha" />
              ) : (
                <Moon className="stroke-own-neutral-200 group-hover:stroke-own-alpha" />
              )}
            </button>
          </li>
        </ul>
      ) : (
        <ul className=" mt-0 flex flex-row items-center space-x-4 text-xl font-semibold text-neutral-500">
          {navItems.map(item => (
            <li key={item}>
              <NavLink
                page={item}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            </li>
          ))}
          <li>
            <a
              href="/docs/LJ-Resume.pdf"
              download
              className="mx-3 flex items-center gap-2 rounded-own bg-own-alpha py-3 pl-3 pr-4 font-medium leading-none text-own-neutral-50 hover:bg-own-alpha-dark dark:bg-own-alpha-light dark:text-own-neutral-200 dark:hover:bg-own-alpha-dark"
            >
              <Download className="stroke-own-neutral-50 dark:stroke-own-neutral-200" />
              Resume
            </a>
          </li>
          <li>
            <button
              onClick={() => toggleColorMode()}
              className="group ml-1.5 block rounded-own-sm p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600"
            >
              {colorMode === 'dark' ? (
                <Sun className="stroke-own-neutral-200 group-hover:stroke-own-alpha dark:group-hover:stroke-own-alpha-light" />
              ) : (
                <Moon className="stroke-own-neutral-900 group-hover:stroke-own-alpha dark:group-hover:stroke-own-alpha-light" />
              )}
            </button>
          </li>
        </ul>
      )}
    </>
  )
}
