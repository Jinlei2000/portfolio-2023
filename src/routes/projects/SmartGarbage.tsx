import Navbar from '../../components/Navbar'
import { projectsData } from '../../data/projectsData'
import Project from '../../interfaces/Project'
import Footer from '../../components/Footer'
import ProjectHeader from '../../components/ProjectHeader'
import Skills from '../../components/Skills'
import Image from '../../components/Image'
import ProjectLinks from '../../components/ProjectLinks'

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
            <Image
              link={project.imgs[0].src}
              alt={project.imgs[0].alt}
              className="col-span-6 row-span-3 lg:col-span-5"
            />
            <Image
              link={project.imgs[1].src}
              alt={project.imgs[1].alt}
              className="col-span-6 col-start-7 row-span-3 row-start-2 lg:col-span-5 lg:col-start-8"
            />
            <Image
              link={project.imgs[2].src}
              alt={project.imgs[2].alt}
              className="col-span-full lg:col-span-10 lg:col-start-1"
            />
            <Image
              link={project.imgs[3].src}
              alt={project.imgs[3].alt}
              className="col-span-full lg:col-span-10 lg:col-start-3"
            />
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
