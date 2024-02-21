import { IProject } from '../../interfaces/IProject'
import Image from '../../components/Image'
import Project from '../../components/Project'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          Explore a <span className="font-semibold">rapid journey</span> into
          the world of 3D with project! In just 2 hours, I crafted a{' '}
          <span className="font-semibold">dynamic experience</span> using
          Three.js a 3D car that responds to your every command. Control its
          movement with <span className="font-semibold">WASD</span>, hit the{' '}
          <span className="font-semibold">space bar</span> to switch background
          colors, and immerse yourself in a captivating blend of{' '}
          <span className="font-semibold">creativity</span> and{' '}
          <span className="font-semibold">technology</span>.
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
