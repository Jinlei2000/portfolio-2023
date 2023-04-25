import { GraduationCap, MapPin, User } from 'lucide-react'
import {IProject} from '../interfaces/IProject'

export default ({ project }: { project: IProject }) => {
  return (
    <header className="flex flex-col gap-1 pt-8 md:gap-2 md:pt-12 lg:gap-3 lg:pt-16">
      <div className="flex flex-col-reverse">
        <h1 className="text-3xl font-bold tracking-tight text-own-neutral-900 dark:text-own-neutral-200 md:text-5xl xl:text-6xl">
          {project.name}
        </h1>
        <p className="text-md font-semibold text-own-neutral-500 dark:text-own-neutral-400 md:text-lg xl:text-xl">
          {/* get the date and format it */}
          {new Date(project.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6">
        {/* Study */}
        {project.study && (
          <div className="flex items-center gap-1 md:gap-2">
            <span className="lg-1.5 rounded-full bg-own-neutral-100 p-0.5 dark:bg-own-neutral-700 md:p-1">
              <GraduationCap className="h-5 w-5 stroke-own-neutral-600 dark:stroke-own-neutral-400 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            </span>
            <p className="flex gap-2 text-sm font-semibold text-own-neutral-600 dark:text-own-neutral-400 md:text-lg lg:text-xl">
              {project.study}
            </p>
          </div>
        )}
        {/* School */}
        {project.school && (
          <div className="flex items-center gap-1 md:gap-2">
            <span className="lg-1.5 rounded-full bg-own-neutral-100 p-0.5 dark:bg-own-neutral-700 md:p-1">
              <MapPin className="h-5 w-5 stroke-own-neutral-600 dark:stroke-own-neutral-400 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            </span>
            <p className="flex gap-2 text-sm font-semibold text-own-neutral-600 dark:text-own-neutral-400 md:text-lg lg:text-xl">
              {project.school}
            </p>
          </div>
        )}
        {/* Client */}
        {project.client && (
          <div className="flex items-center gap-1 md:gap-2">
            <span className="lg-1.5 rounded-full bg-own-neutral-100 p-0.5 dark:bg-own-neutral-700 md:p-1">
              <User className="h-5 w-5 stroke-own-neutral-600 dark:stroke-own-neutral-400 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            </span>
            <p className="flex gap-2 text-sm font-semibold text-own-neutral-600 dark:text-own-neutral-400 md:text-lg lg:text-xl">
              {project.client}
            </p>
          </div>
        )}
      </div>
    </header>
  )
}
