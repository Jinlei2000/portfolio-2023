import { IProject } from '../../interfaces/IProject'
import Image from '../../components/Image'
import Project from '../../components/Project'

export default ({ project }: { project: IProject }) => {
  const texts = () => {
    return (
      <>
        <p>
          Delving into the realm of mobile app development, my research question
          sparked an exciting journey: "
          <span className="font-semibold">
            How can I create a delectable pizza app with Flutter, enriched by
            the immersive world of Augmented Reality?
          </span>
          "
        </p>
        <p>
          In this Flutter-powered application, I seamlessly integrated the ARKit
          plugin,{' '}
          <span className="font-semibold">elevating the user experience</span>,
          especially tailored for iOS enthusiasts. The app's focal point?
          Empowering users to customize their pizza by choosing its size and
          virtually experimenting with various sauces and toppings. This{' '}
          <span className="font-semibold">
            dynamic and interactive exploration
          </span>{' '}
          allows users to visually savor their selected toppings on the pizza
          canvas, turning the decision-making process into a delightful, visual
          feast.
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
