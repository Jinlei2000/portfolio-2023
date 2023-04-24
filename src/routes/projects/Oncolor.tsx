import {IProject} from '../../interfaces/IProject'
import Image from '../../components/Image'
import Project from '../../components/Project'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          Get inspired with Oncolor - the web app created for an interaction
          design class using{' '}
          <span className="font-semibold">Azure Functions API</span>. Perfect
          for <span className="font-semibold">enhancing website design</span>{' '}
          and creative projects.
        </p>
        <p>
          Oncolor delivers a great user experience with{' '}
          <span className="font-semibold">
            data visualization, micro-interaction, responsive design, CSS
            variables & grid, and accessibility
          </span>
          . Create stunning color schemes effortlessly with this visually
          appealing and user-friendly web app.{' '}
          <span className="font-semibold">Try Oncolor today!</span>
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
          className="col-span-full lg:col-span-10 lg:col-start-1"
        />
        <Image
          link={project.imgs[1].src}
          alt={project.imgs[1].alt}
          className="col-span-full lg:col-span-10 lg:col-start-3"
        />
      </>
    )
  }
  return <Project project={project} texts={texts} imgs={imgs} />
}
