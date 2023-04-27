import { Globe, Github, Smartphone, Link } from 'lucide-react'
import { IProject } from '../interfaces/IProject'
import { SiThemoviedatabase } from 'react-icons/si'

export default ({ project }: { project: IProject }) => {
  return (
    <>
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
            {project.externalLinks.tmdb && (
              <a
                href={project.externalLinks.tmdb}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-own-sm bg-own-neutral-200 p-2 ring-2 ring-own-neutral-200 hover:bg-own-neutral-300 focus-visible:outline-none focus-visible:ring-own-neutral-300 dark:bg-own-neutral-700 dark:ring-own-neutral-700 dark:hover:bg-own-neutral-600 dark:focus-visible:ring-own-neutral-600 sm:p-3 md:p-4 lg:rounded-2xl lg:p-8"
              >
                <span className="sr-only">TMDB</span>
                <SiThemoviedatabase className="h-6 w-6 fill-own-neutral-900 dark:fill-own-neutral-300 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
