import { Download, Moon, Sun } from 'lucide-react'
import NavLink from './NavLink'
import useColorMode from '../hooks/useColorMode'
import { motion, useReducedMotion } from 'framer-motion'

const Navigation = ({
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

  const shouldReduceMotion = useReducedMotion()

  const animationMenuItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { y: { stiffness: 1000 } },
    },
  }

  const animationMenuItems = {
    open: {
      transition: shouldReduceMotion
        ? { staggerChildren: 0.1 }
        : { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: shouldReduceMotion
        ? { staggerChildren: 0.1, staggerDirection: -1 }
        : { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const downloadButton = (
    <motion.li
      variants={animationMenuItem}
      whileHover={{ scale: 1.05 }}
      transition={{ ease: 'easeInOut', duration: 0.1 }}
      key="download"
    >
      <a
        href="/docs/LJ-Resume.pdf"
        download
        className={`
      bg-own-alpha mx-3 flex items-center gap-2 rounded-own py-3 pl-3 pr-4 font-medium leading-none
      ${
        isMobile
          ? 'bg-own-primary-450 text-own-neutral-50 hover:bg-own-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-own-primary-500 dark:bg-own-primary-500 dark:text-own-neutral-50 dark:hover:bg-own-primary-600 dark:focus-visible:ring-own-primary-400'
          : 'bg-own-primary-500 text-own-neutral-50 hover:bg-own-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-own-primary-400 dark:bg-own-primary-450 dark:text-own-neutral-50 dark:hover:bg-own-primary-500 dark:focus-visible:ring-own-primary-500'
      }
     
    `}
      >
        <Download
          className={`
      ${isMobile ? 'stroke-own-neutral-50' : ''}
      `}
        />
        Resume
      </a>
    </motion.li>
  )

  const btnModeStyle = isMobile
    ? 'stroke-own-neutral-200 dark:stroke-own-neutral-500 group-hover:stroke-own-primary-400 dark:group-hover:stroke-own-primary-500'
    : 'stroke-own-neutral-500 dark:stroke-own-neutral-200 group-hover:stroke-own-primary-500 dark:group-hover:stroke-own-primary-400'

  const toggleButton = (
    <motion.li variants={animationMenuItem} whileHover={{ scale: 1.2 }}>
      <button
        aria-label="Toggle dark mode"
        onClick={toggleColorMode}
        className="group ml-1.5 block rounded-own-sm p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600"
      >
        {colorMode === 'dark' ? (
          <Sun className={btnModeStyle} />
        ) : (
          <Moon className={btnModeStyle} />
        )}
      </button>
    </motion.li>
  )

  const navLinks = navItems.map(item => (
    <motion.li
      variants={animationMenuItem}
      whileHover={{ scale: 1.05 }}
      transition={{ ease: 'easeInOut', duration: 0.1 }}
      key={item}
    >
      <NavLink
        page={item}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />
    </motion.li>
  ))

  return (
    <motion.ul
      variants={animationMenuItems}
      className={`flex ${
        isMobile
          ? 'h-screen flex-col items-center justify-center space-y-10 text-2xl font-semibold text-own-neutral-500'
          : 'mt-0 flex-row items-center space-x-4 text-xl font-semibold text-neutral-500'
      }`}
    >
      {navLinks}
      {downloadButton}
      {toggleButton}
    </motion.ul>
  )
}

export default Navigation
