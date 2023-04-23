import Skill from './Skill'

export default interface Project {
  id: number
  name: string
  tag: string
  image: string
  date: Date
  link: string
  github?: string
  featured?: boolean
  imgs: { src: string; alt: string }[]
  technologies: Skill[]
  // Project specific
  study?: string
  school?: string
  client?: string
}
