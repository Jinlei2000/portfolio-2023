import { motion } from 'framer-motion'

export default ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <header className="flex flex-col text-center md:space-y-2 lg:space-y-4">
      <motion.h2
        className="text-3xl font-bold text-own-neutral-900 dark:text-own-neutral-200 md:text-5xl xl:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
      >
        {title}
      </motion.h2>
      <motion.h3
        className=" text-xl font-semibold text-own-neutral-900 dark:text-own-neutral-200 md:text-2xl xl:text-3xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.4,
          },
        }}
      >
        {subtitle}
      </motion.h3>
    </header>
  )
}
