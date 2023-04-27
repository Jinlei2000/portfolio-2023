import { IProject } from '../../interfaces/IProject'
import Image from '../../components/Image'
import Project from '../../components/Project'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          Introducing a <span className="font-semibold">movie app</span> that
          allows you to create a personalized{' '}
          <span className="font-semibold">watchlist</span> and{' '}
          <span className="font-semibold">favorites</span> for easy movie{' '}
          <span className="font-semibold">tracking</span>. Whether you're a
          casual viewer or an enthusiast, this app is perfect for you.
        </p>
        <p>
          The best part is that streaming or downloading is not required. The
          tool manages your movie choices effortlessly. Download the app today
          and start building your movie library without any hassle.
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
        <Image
          link={project.imgs[4].src}
          alt={project.imgs[4].alt}
          className="col-span-full lg:col-span-10 lg:col-start-1"
        />
      </>
    )
  }
  return <Project project={project} texts={texts} imgs={imgs} />
}
