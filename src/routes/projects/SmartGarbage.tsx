import Navbar from '../../components/Navbar'
import { projectsData } from '../../data/projectsData'
import Project from '../../interfaces/Project'
import Footer from '../../components/Footer'
import ProjectHeader from '../../components/ProjectHeader'

export default () => {
  const project: Project = projectsData[1]

  return (
    // dont forgot to remove h-screen
    <div className="h-screen bg-white dark:bg-own-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-screen-lg px-4 py-[52px] md:px-6 lg:py-[68px]">
        <div className="pt-8 md:pt-12 lg:pt-16">
          {/* Header */}
          <ProjectHeader project={project} />
          {/* Description */}
          <div className=""></div>
          {/* Images */}
          <div className=""></div>
          {/* Technologies */}
          <div className=""></div>
          {/* Links */}
          <div className=""></div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
