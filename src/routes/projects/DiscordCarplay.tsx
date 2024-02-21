import { IProject } from '../../interfaces/IProject'
import Image from '../../components/Image'
import Project from '../../components/Project'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          Elevate your Discord experience with our CarPlay-designed app.{' '}
          <span className="font-semibold">Seamlessly connect</span> on the go,
          blending Discord's community features with CarPlay's intuitive
          interface.
        </p>
        <p>
          Stay engaged effortlessly with{' '}
          <span className="font-semibold">voice channels</span>, text
          communication, and server interactions, all optimized for a safe and
          user-friendly experience. Connect, coordinate, and converse - wherever
          the road takes you.
        </p>
        <p>
          Enjoy a visually pleasing and safety-centric design, ensuring a{' '}
          <span className="font-semibold">unique and connected drive</span>.
          Redefine your journey with our Discord app for CarPlay.
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
        <Image
          link={project.imgs[2].src}
          alt={project.imgs[2].alt}
          className="col-span-full lg:col-span-10 lg:col-start-1"
        />
      </>
    )
  }
  return <Project project={project} texts={texts} imgs={imgs} />
}
