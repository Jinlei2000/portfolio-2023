import { Link } from 'react-router-dom'
import { Download, Menu, Moon, Sun } from 'lucide-react'
import useColorMode from '../hooks/useColorMode'
import { HashLink } from 'react-router-hash-link'

export default () => {
  // TODO: Add a dark mode toggle
  // TODO: Add a menu toggle
  // TODO: when scrolling down, navbar has blur effect and height is smaller
  const { toggleColorMode, colorMode } = useColorMode()

  // const scrollWithOffset = el => {
  //   const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
  //   const yOffset = -80
  //   window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  // }

  return (
    <nav className=" bg-white bg-opacity-30 px-4 py-2.5 dark:bg-own-neutral-900 md:px-6">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        {/* Logo */}
        <HashLink
          className="flex rounded-own-sm p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600"
          smooth
          to={'/#top'}
        >
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
        </HashLink>
        {/* Menu */}
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="rounded-own-sm p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600 lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => {
            console.log('clicked menu')
          }}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-200" />
        </button>
        {/* Menu Items */}
        <div className="hidden w-full lg:block lg:w-auto">
          <ul className=" mt-0 flex flex-row items-center space-x-4 text-xl font-semibold text-neutral-500">
            <li>
              <HashLink
                // scroll={el => scrollWithOffset(el)}
                smooth
                to={'/#about'}
                className="rounded-own-sm px-3 py-1 hover:text-own-alpha focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:hover:text-own-alpha-light  dark:focus-visible:ring-own-neutral-600"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to={'/#skills'}
                className="rounded-own-sm px-3 py-1 hover:text-own-alpha focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:hover:text-own-alpha-light  dark:focus-visible:ring-own-neutral-600"
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to={'/#projects'}
                className="rounded-own-sm px-3 py-1 hover:text-own-alpha focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:hover:text-own-alpha-light  dark:focus-visible:ring-own-neutral-600"
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to={'/#contact'}
                className="rounded-own-sm px-3 py-1 hover:text-own-alpha focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:hover:text-own-alpha-light  dark:focus-visible:ring-own-neutral-600"
              >
                Contact
              </HashLink>
            </li>
            <li>
              <button className="block">
                <Download />
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleColorMode()}
                className="group block rounded-own-sm p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600"
              >
                {colorMode === 'dark' ? (
                  <Sun className="stroke-own-neutral-200 group-hover:stroke-own-alpha dark:group-hover:stroke-own-alpha-light" />
                ) : (
                  <Moon className="stroke-own-neutral-900 group-hover:stroke-own-alpha dark:group-hover:stroke-own-alpha-light" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
