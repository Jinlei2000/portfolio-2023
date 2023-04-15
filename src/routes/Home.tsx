import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Typewriter from '../components/Typewriter'
import { useInView } from 'react-intersection-observer'

// TODO: import animations (variants) from a separate file (animations.ts)

export default () => {
  const [selectedSection, setSelectedSection] = useState('about')

  const [aboutRef, aboutInView] = useInView({ threshold: 0.7 })
  const [skillsRef, skillsInView] = useInView({ threshold: 0.7 })
  const [projectsRef, projectsInView] = useInView({ threshold: 0.7 })
  const [contactRef, contactInView] = useInView({ threshold: 0.7 })

  // scroll to section when selectedSection changes
  useEffect(() => {
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

        <main className="mx-auto max-w-screen-xl px-4 md:px-6">
          {/* About Section */}
          <section
            ref={aboutRef}
            id="about"
            className="flex h-[calc(100vh-52px)] flex-col items-center justify-center md:h-[calc(100vh-76px)] lg:flex-row-reverse lg:justify-between lg:px-20"
          >
            {/* Image */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                initial: {
                  opacity: 0,
                  scale: 0.5,
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.5,
                    duration: 1,
                    ease: 'backOut',
                  },
                },
              }}
            >
              <motion.div
                className=" mb-12 h-56 w-56 transform cursor-pointer overflow-hidden rounded-full
                  bg-gradient-to-r from-own-secondary to-own-secondary-800 sm:mb-16 sm:h-64 sm:w-64 lg:mb-0 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  },
                  animate: {
                    borderRadius: [
                      '60% 40% 30% 70% / 60% 30% 70% 40%',
                      '30% 60% 70% 40% / 50% 60% 30% 60%',
                      '50% 50% 50% 50% / 50% 50% 50% 50%',
                      '30% 60% 70% 40% / 50% 60% 30% 60%',
                      '60% 40% 30% 70% / 60% 30% 70% 40%',
                    ],
                    transition: {
                      duration: 10,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    },
                  },
                }}
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                dragElastic={0.7}
              >
                <img
                  className="object-cover"
                  draggable="false"
                  src="/img/lei.png"
                  alt="Lei Jin"
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <div className="max-w-md text-center md:max-w-lg lg:text-left">
              <h1 className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:mb-1 md:text-5xl xl:text-6xl">
                Hello, I'm <Typewriter text="Lei Jin" />
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

          {/* Skills Section */}
          <section
            ref={skillsRef}
            id="skills"
            className="flex h-[calc(100vh-52px)] flex-col items-center justify-center md:h-[calc(100vh-76px)] lg:flex-row-reverse lg:justify-between lg:px-20"
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
                Hello, I'm <span className="text-own-secondary">Skills</span>
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

          {/* Projects Section */}
          <section
            ref={projectsRef}
            id="projects"
            className="flex h-[calc(100vh-52px)] flex-col items-center justify-center md:h-[calc(100vh-76px)] lg:flex-row-reverse lg:justify-between lg:px-20"
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
                Hello, I'm <span className="text-own-secondary">Projects</span>
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

          {/* Contact Section */}
          <section
            ref={contactRef}
            id="contact"
            className="flex h-[calc(100vh-52px)] flex-col items-center justify-center md:h-[calc(100vh-76px)] lg:flex-row-reverse lg:justify-between lg:px-20"
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
