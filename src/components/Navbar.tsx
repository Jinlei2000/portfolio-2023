import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import useColorMode from '../hooks/useColorMode'
import { HashLink } from 'react-router-hash-link'
import NavLink from './NavLink'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import NavItems from './NavItems'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 400}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at calc(100% - 30px) 26px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default ({ selectedSection, setSelectedSection }: any) => {
  // TODO: Add a menu toggle
  // TODO: when scrolling down, navbar has blur effect and height is smaller
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[9999] bg-white px-4 py-2.5 dark:bg-own-neutral-900 md:px-6">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        {/* Logo */}
        <HashLink
          onClick={() => {
            setSelectedSection('about')
          }}
          className="flex rounded-own-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600"
          smooth
          to={'/#about'}
        >
          <span className="text-xl font-black text-own-neutral-700 dark:text-own-neutral-200 md:text-2xl lg:text-4xl">
            LJ
          </span>
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden w-full lg:block lg:w-auto">
          <NavItems
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>

        {/* Hamburger Menu */}
        {/* <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="rounded-own-sm p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600 lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => {
            console.log('clicked')
          }}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-200" />
        </button> */}

        {/* Mobile Menu */}
        <motion.div
          className="fixed right-0 top-0 z-50 h-full w-full bg-own-neutral-900 dark:bg-own-neutral-100 lg:hidden "
          variants={sidebar}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          custom={500}
        >
          <motion.div
            className="fixed right-0 top-0 z-50 h-full w-full lg:hidden"
            variants={sidebar}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            custom={500}
          >
            <NavItems
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
              setSidebarOpen={setIsOpen}
              isMobile={true}
            />
          </motion.div>
        </motion.div>
        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className=" z-[100] rounded-own-sm p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <X className="h-6 w-6 stroke-own-neutral-200 dark:stroke-own-neutral-900" />
          ) : (
            <Menu className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-200" />
          )}
        </button>
      </div>
    </nav>
  )
}
