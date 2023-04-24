import IProject from '../interfaces/IProject'
import { Link } from 'react-router-dom'
import Image from './Image'

export default ({ project }: { project: IProject }) => {
  return (
    <>
      <Link to={project.link} className="group/card focus:outline-none">
        <div className="flex flex-col justify-center gap-2 rounded-own-md group-focus-visible/card:ring-2 group-focus-visible/card:ring-slate-100 dark:group-focus-visible/card:ring-slate-600">
          <div className="group/img relative overflow-hidden rounded-own-md">
            <Image
              link={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition duration-500 ease-in-out group-hover/img:rotate-1 group-hover/img:scale-105"
              animate={false}
            />
            {/* make a overlay on the image with read more on hover*/}
            <div className="absolute inset-0 bg-own-neutral-900 bg-opacity-70 opacity-0 transition duration-500 ease-in-out group-hover/img:opacity-100">
              <div className="flex h-full flex-col items-center justify-center">
                <p className="text-xl font-semibold text-own-neutral-200 dark:text-own-neutral-100 sm:text-lg md:text-xl xl:text-xl">
                  Read more
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-own-neutral-900 dark:text-own-neutral-200 sm:text-lg md:text-xl xl:text-xl">
              {project.name}
            </h3>
            <p className="text-md font-medium text-own-neutral-400 dark:text-own-neutral-300 sm:text-base md:text-lg xl:text-lg">
              {project.tag}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}
