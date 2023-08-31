import Image from '../../components/Image'
import Project from '../../components/Project'
import { IProject } from '../../interfaces/IProject'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          Join us on an exciting journey at the "50 jaar E17" Expo by{' '}
          <a
            className="font-semibold text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:ring-own-neutral-200 dark:hover:text-own-primary-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.leiedal.be/"
          >
            Leiedal
          </a>
          . Our project empowers visitors to envision the{' '}
          <span className="font-semibold">future of E17</span> using AI-altered
          images.
        </p>
        <p>
          From <span className="font-semibold">utopian to dystopian</span>,
          desert to waterworld - all at your fingertips. Simply pick a tag on a
          tablet, watch your vision unfold.
        </p>
      </>
    )
  }

  const imgs = () => {
    return (
      <>
        <Image
          link={project.image}
          alt={project.name}
          className="col-span-full lg:col-span-10 lg:col-start-2"
        />
      </>
    )
  }

  return <Project project={project} texts={texts} imgs={imgs} />
}
