import Image from '../../components/Image'
import Project from '../../components/Project'
import { IProject } from '../../interfaces/IProject'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          I've crafted a stunning portfolio for my{' '}
          <span className="font-semibold">Frontend Development</span> class
          using <span className="font-semibold">React</span>. The website is
          live on{' '}
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
          . To ensure optimal performance, all my{' '}
          <span className="font-semibold">images</span> are hosted on{' '}
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
