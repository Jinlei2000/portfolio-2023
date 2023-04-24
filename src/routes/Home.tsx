import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { motion, useReducedMotion } from 'framer-motion'
import Typewriter from '../components/Typewriter'
import { useInView } from 'react-intersection-observer'
import '@splidejs/react-splide/css'
import Skills from '../components/Skills'
import HeaderSection from '../components/HeaderSection'
import BlobImage from '../components/BlobImage'
import { textFadeInSlideDown } from '../animation/animation'
import { projectsData } from '../data/projectsData'
import FeaturedProjects from '../components/FeaturedProjects'
import CarouselProjects from '../components/CarouselProjects'
import { Github, Linkedin, Mail } from 'lucide-react'
import Footer from '../components/Footer'
import { skillsData } from '../data/skillsData'

export default () => {
  const [selectedSection, setSelectedSection] = useState('about')
  const [isLargerThan1024, setIsLargerThan1024] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 })
  const [skillsRef, skillsInView] = useInView({ threshold: 0.5 })
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 })
  const [contactRef, contactInView] = useInView({ threshold: 0.5 })

  // scroll to section when selectedSection changes
  useEffect(() => {
    // only when the scroll is not triggered by the user
    if (aboutInView) setSelectedSection('about')
    if (skillsInView) setSelectedSection('skills')
    if (projectsInView) setSelectedSection('projects')
    if (contactInView) setSelectedSection('contact')
  }, [aboutInView, skillsInView, projectsInView, contactInView])

  // set isLargerThan1024 when window size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsLargerThan1024(true)
      else setIsLargerThan1024(false)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="bg-white dark:bg-own-neutral-900">
        <Navbar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <main>
          {/* About Section */}
          <section
            id="about"
            ref={aboutRef}
            className="mx-auto max-w-screen-xl px-4 md:px-6"
          >
            <div className="flex h-screen flex-col items-center justify-center lg:flex-row-reverse lg:justify-between lg:px-20">
              {/* Image */}
              <BlobImage src="/img/lei.png" alt="Lei Jin" />
              {/* Text */}
              <div className="max-w-md text-center md:max-w-lg lg:text-left">
                <motion.h1
                  initial={shouldReduceMotion ? 'visible' : 'initial'}
                  whileInView={shouldReduceMotion ? 'visible' : 'animation'}
                  variants={textFadeInSlideDown}
                  className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:mb-1 md:text-5xl xl:text-6xl"
                >
                  Hello, I'm <Typewriter text="Lei Jin" />
                </motion.h1>

                <motion.h2
                  initial={shouldReduceMotion ? 'visible' : 'initial'}
                  whileInView={shouldReduceMotion ? 'visible' : 'animation'}
                  variants={textFadeInSlideDown}
                  className="mb-3 text-xl font-semibold  text-own-neutral-900 dark:text-own-neutral-200 md:text-2xl xl:text-3xl"
                >
                  Junior Full Stack Developer
                </motion.h2>
                <motion.p
                  initial={shouldReduceMotion ? 'visible' : 'initial'}
                  whileInView={shouldReduceMotion ? 'visible' : 'animation'}
                  variants={textFadeInSlideDown}
                  className="text-md text-own-neutral-700 dark:text-own-neutral-300 md:text-lg xl:text-xl"
                >
                  I am currently studying Multimedia & Creative Technologies (
                  <a
                    href="https://mct.be/"
                    className="text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:ring-own-neutral-200 dark:hover:text-own-primary-500"
                    target="_blank"
                  >
                    MCT
                  </a>
                  ) in Howest, Belgium. As a specialization, I have chosen Next
                  Webdeveloper.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={skillsRef}
            className="pt-[52px] lg:pt-[68px]"
          >
            <div className="flex flex-col items-center space-y-6 bg-own-neutral-50 py-8 dark:bg-own-neutral-800 md:space-y-10 md:py-12 lg:py-16">
              {/* Header */}
              <HeaderSection title="Skills" subtitle="What I can do" />
              {/* Skills */}
              <Skills skills={skillsData} skillPerRow={6} />
            </div>
          </section>

          {/* Projects Section */}
          <section
            ref={projectsRef}
            id="projects"
            className="mx-auto max-w-screen-xl px-4 pt-[52px] md:px-6 lg:pt-[68px]"
          >
            <div className="flex flex-col space-y-6 py-8 md:space-y-10 md:py-12 lg:py-16">
              {/* Header */}
              <HeaderSection
                title="Projects"
                subtitle="Featured Projects"
                textAlignment="left"
              />
              {/* Featured Projects */}
              <FeaturedProjects
                projects={projectsData.filter(
                  project => project.featured !== undefined,
                )}
              />
              {/* More Projects */}
              <h3 className="text-xl font-semibold text-own-neutral-900 dark:text-own-neutral-200 md:text-2xl xl:text-3xl">
                More of what I've done
              </h3>
              <CarouselProjects
                projects={projectsData.filter(
                  project => project.featured === undefined,
                )}
              />
            </div>
          </section>

          {/* Contact Section */}
          <section
            ref={contactRef}
            id="contact"
            className="rounded-t-own-lg bg-own-neutral-50 px-4 pt-6 dark:bg-own-neutral-800 sm:py-[52px] md:rounded-t-[40px] md:px-6 lg:rounded-t-[60px] lg:py-[68px] xl:rounded-t-[80px]"
          >
            <div className="mx-auto flex max-w-screen-xl flex-col items-center space-y-10 py-8 md:py-12 lg:flex-row lg:justify-between lg:space-y-0 lg:px-28 lg:py-16">
              {/* Header */}
              <HeaderSection
                title="Contact Me"
                subtitle="Get in touch"
                textAlignment={isLargerThan1024 ? 'left' : 'center'}
              />

              {/* Contact Links */}
              <div className="grid grid-flow-col gap-4 md:gap-6 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 ">
                {/* Mail, LinkedIn, GitHub */}
                <a
                  href="mailto:jinleix3@hotmail.com"
                  className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lei-jin-08838b108/?originalSubdomain=be"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                </a>
                <a
                  href="https://github.com/Jinlei2000"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  )
}
