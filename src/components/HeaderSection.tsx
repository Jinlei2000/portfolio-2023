import { motion } from 'framer-motion'
import { textFadeInSlideDown } from '../animation/animation';

export default ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <header className="flex flex-col text-center md:space-y-2 lg:space-y-4">
      <motion.h2
        className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:text-5xl xl:text-6xl"
        initial="initial"
        whileInView="animation"
        variants={textFadeInSlideDown}
      >
        {title}
      </motion.h2>
      <motion.h3
        className=" text-xl font-semibold text-own-neutral-900 dark:text-own-neutral-200 md:text-2xl xl:text-3xl"
        initial="initial"
        whileInView="animation"
        variants={textFadeInSlideDown}
      >
        {subtitle}
      </motion.h3>
    </header>
  )
}
