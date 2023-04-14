import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default () => {
  return (
    <>
      <div className=" bg-white dark:bg-own-neutral-900">
        <Navbar />

        <main className="mx-auto max-w-screen-xl px-4 md:px-6">
          {/* About Section */}
          <section
            id="about"
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
              {/* <h1 className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:mb-1 md:text-5xl xl:text-6xl">
                Hello, I'm <span className="text-own-secondary">Lei Jin</span>
              </h1> */}
              <h1 className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:mb-1 md:text-5xl xl:text-6xl">
                Hello, I'm{' '}
                <span className="text-own-secondary">
                  {Array.from('Lei Jin').map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: index * 0.1 },
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                      whileHover={{
                        animate: 'visible',
                        transition: { repeat: Infinity, repeatDelay: 1 },
                      }}
                      whileTap={{
                        animate: 'visible',
                        transition: { repeat: Infinity, repeatDelay: 1 },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
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
            id="about"
            className="flex flex-col items-center justify-center"
          >
            <div className="text-center">
              <h1 className="text-5xl font-bold text-own-neutral-900 dark:text-own-neutral-50">
                Hello, I'm <span className="text-own-secondary">Lei Jin</span>
              </h1>
              <h2 className="text-2xl font-semibold text-own-neutral-500 dark:text-own-neutral-400">
                Junior Full Stack Developer
              </h2>
              <p className="mt-3 max-w-md text-lg text-own-neutral-500 dark:text-own-neutral-400 ">
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
