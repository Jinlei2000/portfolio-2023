import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage, responsive, lazyload } from '@cloudinary/react'
import { motion, useReducedMotion } from 'framer-motion'
import useScrollDirection from '../hooks/useScrollDirection'

export default ({
  link,
  alt,
  className,
  animate = true,
}: {
  link: string
  alt: string
  className?: string
  animate?: boolean
}) => {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbzx2nao0',
    },
  })

  // Use the image with public ID
  const myImage = cld.image(link)

  // change the format to webp
  myImage.format('webp').quality('auto')

  // get scroll direction
  const { scrollDir } = useScrollDirection({
    threshold: 16,
  })

  // reduce motion
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      {animate ? (
        <motion.div
          className={className}
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: scrollDir === 'down' ? -50 : 50 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          <AdvancedImage
            className="rounded-own-md w-full"
            alt={alt}
            cldImg={myImage}
            plugins={[responsive(), lazyload()]}
          />
        </motion.div>
      ) : (
        <div className={className}>
          <AdvancedImage
            className="rounded-own-md"
            alt={alt}
            cldImg={myImage}
            plugins={[responsive(), lazyload()]}
            draggable={false}
          />
        </div>
      )}
    </>
  )
}
