import { ReactNode } from 'react'
import { IProject } from '../interfaces/IProject'
import Footer from './Footer'
import Navbar from './Navbar'
import ProjectHeader from './ProjectHeader'
import ProjectLinks from './ProjectLinks'
import Skills from './Skills'

export default ({
  project,
  texts: Texts,
  imgs: Images,
}: {
  project: IProject
  texts: React.FC
  imgs: React.FC
}) => {
  // Calculate the number of skills per row
  const skillPerRow =
    project.technologies.length > 10
      ? project.technologies.length / 2
      : project.technologies.length

  // scroll to top on page load
  window.scrollTo(0, 0)

  return (
    <div className="bg-white dark:bg-own-neutral-900">
      <Navbar />

      <main>
        <div className="mx-auto flex max-w-screen-md flex-col gap-6 px-4 py-[52px] md:px-6 lg:max-w-screen-lg lg:py-[68px]">
          {/* Header */}
          <ProjectHeader project={project} />
          {/* Description */}
          <div className="flex max-w-md flex-col gap-3 text-base leading-relaxed text-own-neutral-900 dark:text-own-neutral-200 sm:max-w-lg sm:text-lg md:max-w-xl lg:max-w-2xl">
            <Texts />
          </div>
          {/* Images */}
          <div className="mt-4 grid grid-cols-12 gap-4 md:gap-8 lg:my-10 lg:gap-16">
            <Images />
          </div>

          {/* Links */}
          <ProjectLinks project={project} />
        </div>
        {/* Technologies */}
        <div className=" flex flex-col gap-6 rounded-t-own-lg bg-own-neutral-50 py-6 dark:bg-own-neutral-800 sm:py-[52px] md:gap-8 md:rounded-t-[40px] lg:gap-12 lg:rounded-t-[60px] lg:py-[68px] xl:rounded-t-[80px]">
          <blockquote className="mx-auto max-w-md px-4 text-center text-lg font-semibold leading-relaxed text-own-neutral-900 dark:text-own-neutral-200 sm:max-w-xl sm:text-xl sm:leading-relaxed md:text-2xl lg:text-3xl lg:leading-relaxed">
            “Behind the scenes: a glimpse at the tools and technologies used to
            bring the project to life.”
          </blockquote>
          <Skills skills={project.technologies} skillPerRow={skillPerRow} />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
