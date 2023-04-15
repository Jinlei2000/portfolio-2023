import SkillBanner from './SkillBanner'
import SkillItem from './SkillItem'
import { skillsData } from '../data/skillsData'
import { motion } from 'framer-motion'

export default () => {
  const skillsPerBanner = 6

  const skillBanners = []
  // Create a SkillBanner for each 6 skills
  for (let i = 0; i < skillsData.length; i += skillsPerBanner) {
    const skillItems = skillsData
      .slice(i, i + skillsPerBanner)
      .map(skill => (
        <SkillItem key={skill.title} title={skill.title} icon={skill.icon} />
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
      <motion.div
        className="flex w-full flex-col space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {skillBanners}
      </motion.div>
    </>
  )
}
