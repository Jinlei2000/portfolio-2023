import { ISkill } from './ISkill'

export interface IProject {
  id: number
  name: string
  tag: string
  image: string
  date: Date
  link: string
  featured?: boolean
  imgs: { src: string; alt: string }[]
  technologies: ISkill[]
  externalLinks?: {
    github?: string
    website?: string
    expo?: string
    instructables?: string
    tmdb?: string
  }
  // Project specific
  study?: string
  school?: string
  client?: string
}
