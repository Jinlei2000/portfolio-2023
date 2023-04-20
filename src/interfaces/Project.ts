export default interface Project {
  id: number
  name: string
  tag: string
  description?: string
  image: string
  date: string
  link: string
  github?: string
  featured?: boolean
}
