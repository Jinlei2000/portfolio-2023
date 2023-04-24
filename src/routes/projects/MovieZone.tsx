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
    return <>
    
    </>
  }
  return <Project project={project} texts={texts} imgs={imgs} />
}
