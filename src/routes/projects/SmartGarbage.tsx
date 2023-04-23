import { HashLink } from 'react-router-hash-link'
import Navbar from '../../components/Navbar'
import { projectsData } from '../../data/projectsData'
import Project from '../../interfaces/Project'

export default () => {
  const project: Project = projectsData[1]

  return (
    // dont forgot to remove h-screen
    <div className="h-screen bg-white dark:bg-own-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-screen-lg px-4 pt-[52px] md:px-6 lg:pt-[68px]">
        <div className="pt-8 md:pt-12 lg:pt-16">
          {/* Header */}
          <header
            className="flex flex-col-reverse
       md:space-y-2 lg:space-y-4"
          >
            <h1 className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:text-5xl xl:text-6xl">
              {project.name}
            </h1>
            <p className="text-lg font-semibold text-own-neutral-900 dark:text-own-neutral-200 md:text-xl xl:text-2xl">
              {/* get the date and format it */}
              {new Date(project.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </header>

          <HashLink
            to="/#skills"
            className="rounded-own-sm bg-own-primary-500 px-4 py-2 text-own-neutral-900 transition-colors duration-300 hover:bg-own-primary-400 dark:bg-own-primary-400 dark:text-own-neutral-200 dark:hover:bg-own-primary-500"
          >
            <span className="sr-only">View the project on </span>
            <span className="font-bold">Skills</span>
          </HashLink>

          {/* Description */}
          {/* Images */}
          <div className=""></div>
        </div>
      </main>
    </div>
  )
}
