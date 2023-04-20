import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import Typewriter from '../components/Typewriter'
import { useInView } from 'react-intersection-observer'
import '@splidejs/react-splide/css'
import Skills from '../components/Skills'
import HeaderSection from '../components/HeaderSection'
import BlobImage from '../components/BlobImage'
import { textFadeInSlideDown } from '../animation/animation'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { projectsData } from '../data/projectsData'
import FeaturedProjects from '../components/FeaturedProjects'
import { Link } from 'react-router-dom'

export default () => {
  const [selectedSection, setSelectedSection] = useState('about')

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
                  initial="initial"
                  whileInView="animation"
                  variants={textFadeInSlideDown}
                  className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:mb-1 md:text-5xl xl:text-6xl"
                >
                  Hello, I'm <Typewriter text="Lei Jin" />
                </motion.h1>

                <motion.h2
                  initial="initial"
                  whileInView="animation"
                  variants={textFadeInSlideDown}
                  className="mb-3 text-xl font-semibold  text-own-neutral-900 dark:text-own-neutral-200 md:text-2xl xl:text-3xl"
                >
                  Junior Full Stack Developer
                </motion.h2>
                <motion.p
                  initial="initial"
                  whileInView="animation"
                  variants={textFadeInSlideDown}
                  className="text-md text-own-neutral-700 dark:text-own-neutral-300 md:text-lg xl:text-xl"
                >
                  I am currently studying Multimedia & Creative Technologies (
                  <a
                    href="https://mct.be/"
                    className="text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:hover:text-own-primary-500"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <Skills />
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
              <Splide
                options={{
                  type: 'loop',
                  perPage: 3,
                  focus: 'center',
                  perMove: 1,
                  // autoplay: true,
                  // interval: 8000,
                  // flickMaxPages: 3,
                  pagination: false,
                  throttle: 300,
                  wheel: true,
                  gap: '3rem',
                  updateOnMove: true,
                  breakpoints: {
                    768: {
                      perPage: 1,
                    },
                  },
                }}
              >
                {/* use map to render the rest of the projects */}
                {projectsData.map((project, index) => {
                  return (
                    <SplideSlide key={index} className="splide__slide-carousel">
                      <Link
                        to={project.link}
                        className="group/card focus:outline-none"
                      >
                        <div className="flex flex-col justify-center gap-2 rounded-lg group-focus-visible/card:border-2 group-focus-visible/card:border-opacity-100">
                          <div className="group/img relative overflow-hidden rounded-lg">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="h-full w-full object-cover transition duration-500 ease-in-out group-hover/img:rotate-1 group-hover/img:scale-105"
                            />
                            <div className="absolute inset-0 bg-own-neutral-900 bg-opacity-70 opacity-0 transition duration-500 ease-in-out group-hover/img:opacity-100">
                              <div className="flex h-full flex-col items-center justify-center">
                                <p className="text-xl font-semibold text-own-neutral-200 dark:text-own-neutral-100 sm:text-lg md:text-xl xl:text-xl">
                                  Read more
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-own-neutral-900 dark:text-own-neutral-200 sm:text-lg md:text-xl xl:text-xl">
                              {project.name}
                            </h3>
                            <p className="text-md font-medium text-own-neutral-400 dark:text-own-neutral-300 sm:text-base md:text-lg xl:text-lg">
                              {project.tag}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SplideSlide>
                  )
                })}
              </Splide>
            </div>
          </section>

          {/* Contact Section */}
          <section
            ref={contactRef}
            id="contact"
            className="flex h-screen flex-col items-center justify-center  lg:flex-row-reverse lg:justify-between lg:px-20"
          >
            {/* Image */}
            <motion.div
              className="linea mb-12 h-56 w-56 transform overflow-hidden rounded-full
              bg-gradient-to-r from-own-secondary to-own-secondary-800 sm:h-64 sm:w-64 lg:mb-0 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
              initial={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
              animate={{
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '50% 50% 50% 50% / 50% 50% 50% 50%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                ],
              }}
              transition={{
                duration: 10,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  className="object-cover"
                  src="/img/lei.png"
                  alt="Lei Jin"
                />
              </div>
            </motion.div>

            {/* Text */}
            <div className="max-w-md text-center md:max-w-lg lg:text-left">
              <h1 className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:mb-1 md:text-5xl xl:text-6xl">
                Hello, I'm <span className="text-own-secondary">Contact</span>
              </h1>

              <h2 className="mb-3 text-xl font-semibold  text-own-neutral-900 dark:text-own-neutral-200 md:text-2xl xl:text-3xl">
                Junior Full Stack Developer
              </h2>
              <p className="text-md text-own-neutral-700 dark:text-own-neutral-300 md:text-lg xl:text-xl">
                I am currently studying Multimedia & Creative Technologies (
                <a
                  href="https://mct.be/"
                  className="text-own-alpha dark:text-own-alpha-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MCT
                </a>
                ) in Howest, Belgium. As a specialization, I have chosen Next
                Webdeveloper.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
