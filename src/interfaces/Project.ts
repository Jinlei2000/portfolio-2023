import Skill from './Skill'

export default interface Project {
  id: number
  name: string
  tag: string
  image: string
  date: Date
  link: string
  featured?: boolean
  imgs: { src: string; alt: string }[]
  technologies: Skill[]
  externalLinks?: {
    github?: string
    website?: string
    expo?: string
    instructables?: string
  }
  // Project specific
  study?: string
  school?: string
  client?: string
}
