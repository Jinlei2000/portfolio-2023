import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import { ChevronRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import Project from '../interfaces/Project'

export default ({ projects }: { projects: Project[] }) => {
  // Sort the projects by date
  projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      {/* Carousel */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 top-0 z-10 h-full bg-gradient-to-r from-own-neutral-0 to-transparent dark:from-own-neutral-900 sm:w-10 md:w-28 lg:w-36 xl:w-60" />
        <div className="absolute bottom-0 right-0 top-0 z-10 h-full bg-gradient-to-l from-own-neutral-0 to-transparent dark:from-own-neutral-900 sm:w-10 md:w-28 lg:w-36 xl:w-60" />
        <Splide
          className="splide__carousel"
          options={{
            type: 'loop',
            perPage: 2,
            focus: 'center',
            perMove: 1,
            flickMaxPages: 3,
            padding: '5%',
            pagination: false,
            throttle: 300,
            wheel: true,
            updateOnMove: true,
            breakpoints: {
              640: {
                perPage: 1,
                padding: '0',
              },
            },
          }}
          hasTrack={false}
        >
          <SplideTrack>
            {/* use map to render the rest of the projects */}
            {projects.map((project, index) => {
              return (
                <SplideSlide
                  key={index}
                  className="splide__slide-carousel"
                >
                  <Link
                    to={project.link}
                    className="group/card focus:outline-none"
                  >
                    <div className="flex flex-col justify-center gap-2 rounded-lg group-focus-visible/card:ring-2 group-focus-visible/card:ring-slate-100 dark:group-focus-visible/card:ring-slate-600">
                      <div className="group/img relative overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover"
                        />
                        <div className="img-hover__text absolute inset-0 bg-own-neutral-900 bg-opacity-70 opacity-0 transition duration-500 ease-in-out group-hover/img:opacity-100">
                          <div className="flex h-full flex-col items-center justify-center">
                            <p className="text-xl font-semibold text-own-neutral-200 dark:text-own-neutral-100 sm:text-lg md:text-xl xl:text-xl">
                              Read more
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="img__text flex flex-col">
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
          </SplideTrack>

          {/* Carousel Arrows */}
          <div className="splide__arrows absolute bottom-1/2 left-0 right-0 z-50 flex justify-center">
            <div className="flex w-full -translate-y-[12px] justify-between px-2 sm:w-4/5">
              <button className="splide__arrow--prev rounded-full bg-own-neutral-800 p-2 opacity-60 shadow-lg ring-own-neutral-300 focus:outline-none focus-visible:ring-2 dark:bg-own-neutral-200 dark:ring-white">
                <ChevronRightIcon className="stroke-own-neutral-100 dark:stroke-slate-900" />
              </button>
              <button className="splide__arrow--next rounded-full bg-own-neutral-800 p-2 opacity-60 shadow-lg ring-own-neutral-300 focus:outline-none focus-visible:ring-2 dark:bg-own-neutral-200 dark:ring-white">
                <ChevronRightIcon className="stroke-own-neutral-100 dark:stroke-slate-900" />
              </button>
            </div>
          </div>
        </Splide>
      </div>
    </>
  )
}
