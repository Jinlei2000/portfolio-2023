import { motion, useReducedMotion } from 'framer-motion'
import { textFadeInSlideDown } from '../animation/animation'

export default ({
  title,
  subtitle,
  textAlignment = 'center',
}: {
  title: string
  subtitle: string
  textAlignment?: 'left' | 'center' | 'right'
}) => {
  const shouldReduceMotion = useReducedMotion()
  return (
    <header
      className={`flex flex-col 
      text-${textAlignment} md:space-y-2 lg:space-y-4`}
    >
      <motion.h2
        className="text-3xl font-bold tracking-tight text-own-neutral-900 dark:text-own-neutral-200 md:text-5xl xl:text-6xl"
        initial={shouldReduceMotion ? 'visible' : 'initial'}
        whileInView={shouldReduceMotion ? 'visible' : 'animation'}
        variants={textFadeInSlideDown}
      >
        {title}
      </motion.h2>
      <motion.h3
        className="text-xl font-semibold text-own-neutral-900 dark:text-own-neutral-200 md:text-2xl xl:text-3xl"
        initial={shouldReduceMotion ? 'visible' : 'initial'}
        whileInView={shouldReduceMotion ? 'visible' : 'animation'}
        variants={textFadeInSlideDown}
      >
        {subtitle}
      </motion.h3>
    </header>
  )
}
