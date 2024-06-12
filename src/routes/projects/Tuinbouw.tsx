import { IProject } from '../../interfaces/IProject'
import Image from '../../components/Image'
import Project from '../../components/Project'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          For our Advanced Fullstack Development class project, we're tackling
          an exciting challenge: "
          <span className="font-semibold">
            How can we create a comprehensive web application to streamline
            operations for a horticulture company?
          </span>
          "
        </p>
        <p>
          Our goal is to develop an all-in-one solution that{' '}
          <span className="font-semibold">enhances operational efficiency</span>{' '}
          by integrating essential features for managing employees, clients,
          appointments, schedules, and materials. This web application will
          provide a{' '}
          <span className="font-semibold">
            seamless and intuitive user experience
          </span>
          , transforming complex management tasks into a cohesive digital
          platform.
        </p>
        <p>
          By leveraging the latest in fullstack development technologies, we aim
          to support the company in delivering excellent horticultural services
          while simplifying their daily operations.
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
          className="col-span-full lg:col-span-10 lg:col-start-3"
        />
        <Image
          link={project.imgs[1].src}
          alt={project.imgs[1].alt}
          className="col-span-full lg:col-span-10 lg:col-start-1"
        />
        <Image
          link={project.imgs[2].src}
          alt={project.imgs[2].alt}
          className="col-span-full lg:col-span-10 lg:col-start-3"
        />
        <Image
          link={project.imgs[3].src}
          alt={project.imgs[3].alt}
          className="col-span-full lg:col-span-10 lg:col-start-1"
        />
      </>
    )
  }
  return <Project project={project} texts={texts} imgs={imgs} />
}
