import { IProject } from '../../interfaces/IProject'
import Image from '../../components/Image'
import Project from '../../components/Project'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          Our project for{' '}
          <a
            className="font-semibold text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:ring-own-neutral-200 dark:hover:text-own-primary-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://sportinnovatiecampus.be/"
          >
            Sportsinnovationcampus Bruges
          </a>{' '}
          focused on the question of how to{' '}
          <span className="font-semibold">
            engage kids in fun and interactive physical activities.
          </span>
        </p>

        <p>
          We created an{' '}
          <span className="font-semibold">interactive play system</span> by
          connecting pressure-sensitive LEDs attached to poles to a{' '}
          <span className="font-semibold">web app</span> that serves as both an
          instruction panel and{' '}
          <span className="font-semibold">scoreboard</span>. This system
          features various single and multiplayer games, including{' '}
          <span className="font-semibold">
            memory game, mine sweeper, zen game, and blue vs red.
          </span>
        </p>

        <p>
          I would like to acknowledge{' '}
          <span className="font-semibold">
            Jens Lagae, Ruben Pattyn, Bart Roels, and Ilias Es Sahili
          </span>{' '}
          for their valuable contributions to this project.
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
          link={project.imgs[2].src}
          alt={project.imgs[2].alt}
          className="col-span-6 col-start-7 row-span-3 row-start-2 lg:col-span-5 lg:col-start-8"
        />
        <Image
          link={project.imgs[3].src}
          alt={project.imgs[3].alt}
          className="col-span-full lg:col-span-10 lg:col-start-1"
        />
        <Image
          link={project.imgs[1].src}
          alt={project.imgs[1].alt}
          className="col-span-full lg:col-span-10 lg:col-start-4"
        />
      </>
    )
  }
  return <Project project={project} texts={texts} imgs={imgs} />
}
