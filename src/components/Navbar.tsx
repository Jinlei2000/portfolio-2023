import { Link } from 'react-router-dom'
import { Download, Menu, Moon, Sun } from 'lucide-react'
import useColorMode from '../hooks/useColorMode'

export default () => {
  // TODO: Add a dark mode toggle
  // TODO: Add a menu toggle
  // TODO: when scrolling down, navbar has blur effect and height is smaller
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <nav className={`bg-white px-4 py-2.5 dark:bg-own-neutral-900 md:px-6 `}>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        {/* Logo */}
        <Link className="flex" to={'/'}>
          <svg className="h-8 md:h-10" viewBox="0 0 32 32">
            <g transform="translate(-484 -329)">
              <g transform="translate(488.8 333.8)">
                <path
                  d="M11,0a11,11,0,0,0,0,22h1A11,11,0,0,0,12,0H11m0-2h1A13,13,0,0,1,25,11,13,13,0,0,1,12,24H11A13,13,0,0,1-2,11,13,13,0,0,1,11-2Z"
                  transform="translate(0.2 0.2)"
                  className="fill-own-neutral-700 dark:fill-own-neutral-200"
                />
                <text
                  transform="translate(3.7 17.2)"
                  className="fill-own-neutral-700 text-[15px] font-black dark:fill-own-neutral-200"
                >
                  LJ
                </text>
              </g>
            </g>
          </svg>
        </Link>
        {/* Menu */}
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-3 inline-flex items-center p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => {
            console.log('clicked menu')
          }}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" />
        </button>
        {/* Menu Items */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 md:border-0 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 md:border-0 md:p-0"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 block border-b py-2 pl-3 pr-4 md:border-0 md:p-0"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent block py-2 pl-3 pr-4 md:border-0 md:p-0"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent block py-2 pl-3 pr-4 md:border-0 md:p-0">
                <Download />
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleColorMode()}
                className="text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent block py-2 pl-3 pr-4 md:border-0 md:p-0"
              >
                {colorMode === 'dark' ? <Sun /> : <Moon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
