import { Menu, X } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import NavItems from './NavItems'

export default ({ selectedSection, setSelectedSection }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const shouldReduceMotion = useReducedMotion()

  // animation for sidebar
  const animationSidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 400}px at calc(100% - 40px) 40px)`,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
          },
    }),
    closed: {
      clipPath: 'circle(0px at calc(100% - 30px) 26px)',
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
          },
    },
  }

  useEffect(() => {
    // Set body overflow to hidden when sidebar is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    // Add event listener to handle scrolling when sidebar is open
    const handleScroll = () => isOpen && window.scrollTo(0, 0)
    window.addEventListener('scroll', handleScroll)

    // Remove event listener and set body overflow back to auto when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <nav className="fixed left-0 right-0 top-0 z-[9999] bg-white px-4 py-2.5 dark:bg-own-neutral-900 md:px-6">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        {/* Logo */}
        <HashLink
          onClick={() => {
            setSelectedSection('about')
          }}
          className="pointer-events-auto flex rounded-own-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600"
          smooth
          to={'/#about'}
          aria-label="Logo"
        >
          {/* <span className="transform px-1 font-black text-own-neutral-700 transition duration-300 ease-in-out hover:scale-110 hover:text-own-secondary dark:text-own-neutral-200 dark:hover:text-own-secondary md:text-2xl lg:text-4xl">
            LJ
          </span> */}
          <svg
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
            viewBox="0 0 512 512"
          >
            <g transform="translate(-428 -534)">
              <text

                className="font-black text-own-neutral-700 dark:text-own-neutral-200"
                transform="translate(483 918)"
                fontSize="366"
              >
                <tspan className="transition duration-300 ease-in-out hover:scale-110 hover:fill-own-secondary dark:fill-own-neutral-200 dark:hover:fill-own-secondary">
                  LJ
                </tspan>
              </text>
            </g>
          </svg>
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden w-full lg:block lg:w-auto">
          <NavItems
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="fixed right-0 top-0 z-50 h-full w-full bg-own-neutral-900 dark:bg-own-neutral-50 lg:hidden "
          variants={animationSidebar}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          custom={800}
        >
          <NavItems
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            setSidebarOpen={setIsOpen}
            isMobile={true}
          />
        </motion.div>
        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className=" z-[100] rounded-own-sm p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open main menu"
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
