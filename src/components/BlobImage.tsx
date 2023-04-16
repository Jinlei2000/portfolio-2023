import { motion } from 'framer-motion'
import { useState } from 'react'

export default ({ src: srcImg, alt: altImg }: { src: string; alt: string }) => {
  const [borderRadiusValues] = useState([
    '60% 40% 30% 70% / 60% 30% 70% 40%',
    '30% 60% 70% 40% / 50% 60% 30% 60%',
    '40% 60% 70% 30% / 40% 40% 60% 50%',
    '70% 30% 50% 50% / 30% 30% 70% 70%',
    '100% 60% 60% 100% / 100% 100% 60% 60%',
    '50% 50% 50% 50% / 50% 50% 50% 50%',
    '40% 60% 70% 30% / 40% 40% 60% 50%',
    '70% 30% 50% 50% / 30% 30% 70% 70%',
    '100% 60% 60% 100% / 100% 100% 60% 60%',
    '50% 50% 50% 50% / 50% 50% 50% 50%',
    '30% 60% 70% 40% / 50% 60% 30% 60%',
    '60% 40% 30% 70% / 60% 30% 70% 40%',
  ])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: 'backOut',
        },
      }}
    >
      <motion.div
        className=" mb-12 h-56 w-56 transform cursor-pointer overflow-hidden rounded-full
                        bg-gradient-to-r from-own-secondary to-own-secondary-800 sm:mb-16 sm:h-64 sm:w-64 lg:mb-0 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            borderRadius: borderRadiusValues[0],
          },
          animate: {
            borderRadius: borderRadiusValues,
            transition: {
              duration: 25,
              ease: 'easeInOut',
              repeat: Infinity,
              bounce: 0.5,
            },
          },
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        dragElastic={0.7}
      >
        <img
          className="object-cover"
          draggable="false"
          src={srcImg}
          alt={altImg}
        />
      </motion.div>
    </motion.div>
  )
}
