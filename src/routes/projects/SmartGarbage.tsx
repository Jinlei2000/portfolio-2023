import { IProject } from '../../interfaces/IProject'
import Image from '../../components/Image'
import Project from '../../components/Project'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          The Smart Garbage project involves using a{' '}
          <span className="font-semibold">Raspberry Pi 4</span> to keep track of
          the <span className="font-semibold">amount of trash produced</span>{' '}
          over a period of time. Once the bin is{' '}
          <span className="font-semibold">full</span>, the garbage collector
          receives a{' '}
          <span className="font-semibold">notification to empty it.</span>
        </p>

        <p>
          This technology is especially helpful for{' '}
          <span className="font-semibold">cities and businesses</span> as they
          can efficiently{' '}
          <span className="font-semibold">manage their waste</span> by emptying
          only the full trash cans.
        </p>

        <p className="font-semibold">
          Green city, clean city, my dream city. Keep track of your consumed
          waste with Smart Garbage.
        </p>
      </>
    )
  }

  const imgs = () => {
    return (
      <>
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
      </>
    )
  }
  return <Project project={project} texts={texts} imgs={imgs} />
}
