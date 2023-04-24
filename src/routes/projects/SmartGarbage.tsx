import Navbar from '../../components/Navbar'
import { projectsData } from '../../data/projectsData'
import Project from '../../interfaces/Project'
import Footer from '../../components/Footer'
import ProjectHeader from '../../components/ProjectHeader'
import Skills from '../../components/Skills'
import {
  Github,
  Globe,
  Link,
  Pencil,
  Smartphone,
  WholeWord,
  Wrench,
} from 'lucide-react'

export default () => {
  const project: Project = projectsData[1]

  return (
    <div className="bg-white dark:bg-own-neutral-900">
      <Navbar />

      <main>
        <div className="mx-auto flex max-w-screen-md flex-col gap-6 px-4 py-[52px] md:px-6 lg:max-w-screen-lg lg:py-[68px]">
          {/* Header */}
          <ProjectHeader project={project} />
          {/* Description */}
          <div className="flex max-w-md flex-col gap-3 text-base leading-relaxed text-own-neutral-900 dark:text-own-neutral-200 sm:max-w-lg sm:text-lg md:max-w-xl lg:max-w-2xl">
            <p>
              The Smart Garbage project involves using a{' '}
              <span className="font-semibold">Raspberry Pi 4</span> to keep
              track of the{' '}
              <span className="font-semibold">amount of trash produced</span>{' '}
              over a period of time. Once the bin is{' '}
              <span className="font-semibold">full</span>, the garbage collector
              receives a{' '}
              <span className="font-semibold">notification to empty it.</span>
            </p>

            <p>
              This technology is especially helpful for{' '}
              <span className="font-semibold">cities and businesses</span> as
              they can efficiently{' '}
              <span className="font-semibold">manage their waste</span> by
              emptying only the full trash cans.
            </p>

            <p className="font-semibold">
              Green city, clean city, my dream city. Keep track of your consumed
              waste with Smart Garbage.
            </p>
          </div>
          {/* Images */}
          <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-16">
            <img
              className="col-span-6 row-span-3 rounded-own-md lg:col-span-5"
              src={project.imgs[0].src}
              alt={project.imgs[0].alt}
            />
            <img
              className="col-span-6 col-start-7 row-span-3 row-start-2 rounded-own-md lg:col-span-5 lg:col-start-8"
              src={project.imgs[1].src}
              alt={project.imgs[1].alt}
            />
            <img
              className="col-span-full rounded-own-md lg:col-span-10 lg:col-start-1"
              src={project.imgs[2].src}
              alt={project.imgs[2].alt}
            />
            <img
              className="col-span-full rounded-own-md lg:col-span-10 lg:col-start-3"
              src={project.imgs[3].src}
              alt={project.imgs[3].alt}
            />
          </div>

          {/* Links */}
          {project.externalLinks && (
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="max-w-md text-lg font-semibold leading-relaxed text-own-neutral-900 dark:text-own-neutral-200 sm:max-w-xl sm:text-xl sm:leading-relaxed md:text-2xl lg:text-3xl lg:leading-relaxed">
                Visit links for more.
              </h2>
              <div className="flex gap-4 md:gap-6 lg:gap-4">
                {project.externalLinks.website && (
                  <a
                    href={project.externalLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                  >
                    <span className="sr-only">Website</span>
                    <Globe className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                  </a>
                )}
                {project.externalLinks.github && (
                  <a
                    href={project.externalLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                  </a>
                )}
                {project.externalLinks.instructables && (
                  <a
                    href={project.externalLinks.instructables}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                  >
                    <span className="sr-only">Instructables</span>
                    <Link className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                  </a>
                )}
                {project.externalLinks.expo && (
                  <a
                    href={project.externalLinks.expo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
                  >
                    <span className="sr-only">Expo Go App</span>
                    <Smartphone className="h-6 w-6 stroke-own-neutral-900 dark:stroke-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Technologies */}
        <div className=" flex flex-col gap-6 rounded-t-own-lg bg-own-neutral-50 py-6 dark:bg-own-neutral-800 sm:py-[52px] md:gap-8 md:rounded-t-[40px] lg:gap-12 lg:rounded-t-[60px] lg:py-[68px] xl:rounded-t-[80px]">
          <blockquote className="mx-auto max-w-md px-4 text-center text-lg font-semibold leading-relaxed text-own-neutral-900 dark:text-own-neutral-200 sm:max-w-xl sm:text-xl sm:leading-relaxed md:text-2xl lg:text-3xl lg:leading-relaxed">
            “Behind the scenes: a glimpse at the tools and technologies used to
            bring the project to life.”
          </blockquote>
          <Skills
            skills={project.technologies}
            skillPerRow={project.technologies.length / 2}
          />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
