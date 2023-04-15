import { Menu, X } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import NavItems from './NavItems'

// animation for sidebar
const animationSidebar = {
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
  const [isOpen, setIsOpen] = useState(false)

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
    <nav className="sticky top-0 z-[9999] bg-white px-4 py-2.5 dark:bg-own-neutral-900 md:px-6">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        {/* Logo */}
        <HashLink
          onClick={() => {
            setSelectedSection('about')
          }}
          className="pointer-events-auto flex rounded-own-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-own-neutral-100 dark:focus-visible:ring-own-neutral-600"
          smooth
          to={'/#about'}
        >
          <span className=" font-black text-own-neutral-700 dark:text-own-neutral-200 md:text-2xl lg:text-4xl">
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

        {/* Mobile Menu */}
        <motion.div
          className="fixed right-0 top-0 z-50 h-full w-full bg-own-neutral-900 dark:bg-own-neutral-100 lg:hidden "
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
