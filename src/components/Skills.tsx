import SkillBanner from './SkillBanner'
import SkillItem from './SkillItem'
import { ISkill } from '../interfaces/ISkill'

export default ({
  skills,
  skillPerRow = 6,
}: {
  skills: ISkill[]
  skillPerRow?: number
}) => {
  const skillsPerBanner = skillPerRow

  const skillBanners = []
  // Create a SkillBanner for each 6 skills
  for (let i = 0; i < skills.length; i += skillsPerBanner) {
    const skillItems = skills
      .slice(i, i + skillsPerBanner)
      .map(skill => (
        <SkillItem
          key={skill.title}
          title={skill.title}
          icon={skill.icon}
          color={skill.color}
        />
      ))
    const isReverse = (i / skillsPerBanner) % 2 !== 0
    skillBanners.push(
      <SkillBanner key={`skill-banner-${i}`} reverseScroll={isReverse}>
        {skillItems}
      </SkillBanner>,
    )
  }
  return (
    <>
      <div className="relative w-full">
        <div className="flex flex-col space-y-6 lg:space-y-7 xl:space-y-8">
          {skillBanners}
        </div>
        {/* Gradient to hide the overflow */}
        <div
          className="absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r 
         from-own-neutral-50 to-transparent dark:from-own-neutral-800
          md:w-28 lg:w-36 xl:w-60"
        />
        <div
          className="absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l
         from-own-neutral-50 to-transparent dark:from-own-neutral-800
          md:w-28 lg:w-36 xl:w-60"
        />
      </div>
    </>
  )
}
