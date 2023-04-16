import { motion } from 'framer-motion'
import { blobFadeInGrow, blobMorph } from '../animation/animation'

export default ({ src: srcImg, alt: altImg }: { src: string; alt: string }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animation"
      variants={blobFadeInGrow}
    >
      <motion.div
        className=" mb-12 h-56 w-56 transform cursor-pointer overflow-hidden rounded-full
                        bg-gradient-to-r from-own-secondary to-own-secondary-800 sm:mb-16 sm:h-64 sm:w-64 lg:mb-0 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
        initial="initial"
        whileInView="animation"
        variants={blobMorph}
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
