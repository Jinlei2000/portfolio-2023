import Image from '../../components/Image'
import Project from '../../components/Project'
import { IProject } from '../../interfaces/IProject'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          Check out the Xamarin-based{' '}
          <span className="font-semibold">Android app</span> using the{' '}
          <a
            className="font-semibold text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:ring-own-neutral-200 dark:hover:text-own-primary-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://kitsu.docs.apiary.io/"
          >
            Kitsu API
          </a>{' '}
          for all your <span className="font-semibold">anime and manga</span>{' '}
          needs on-the-go.
        </p>
        <p>
          My <span className="font-semibold">goals</span> are to learn{' '}
          <span className="font-semibold">C#</span>,{' '}
          <span className="font-semibold">object-oriented programming</span>,
          and the use of <span className="font-semibold">async/await</span> for
          efficient programming, as well as mastering the use of{' '}
          <span className="font-semibold">APIs</span> for seamless integration
          of data into my projects.
        </p>

        <p>
          I've crafted a stunning portfolio for my Frontend Development class
          using React. The website is live on{' '}
          <a
            className="font-semibold text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:ring-own-neutral-200 dark:hover:text-own-primary-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.netlify.com/"
          >
            Netlify
          </a>
          , complemented by a sleek domain name from{' '}
          <a
            className="font-semibold text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:ring-own-neutral-200 dark:hover:text-own-primary-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.godaddy.com/nl-be"
          >
            GoDaddy
          </a>
          . To ensure optimal performance, all my images are hosted on{' '}
          <a
            className="font-semibold text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:ring-own-neutral-200 dark:hover:text-own-primary-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://cloudinary.com/"
          >
            Cloudinary
          </a>
          . Exciting journey in the world of web development!
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
