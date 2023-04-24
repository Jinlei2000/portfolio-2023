import {IProject} from '../interfaces/IProject'
import ProjectCard from './ProjectCard'

// Show the 3 featured projects
export default ({ projects }: { projects: IProject[] }) => {
  // Sort the projects by date
  projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="grid grid-cols-6 gap-6 md:pb-10">
      <div className="col-span-full sm:col-span-3 sm:translate-y-0 md:col-span-2 md:translate-y-0">
        <ProjectCard project={projects[0]} />
      </div>
      <div className="col-span-full sm:col-span-3 sm:translate-y-36 md:col-span-2 md:translate-y-6">
        <ProjectCard project={projects[1]} />
      </div>
      <div className="col-span-full sm:col-span-3 sm:translate-y-0 md:col-span-2 md:translate-y-12">
        <ProjectCard project={projects[2]} />
      </div>
    </div>
  )
}
