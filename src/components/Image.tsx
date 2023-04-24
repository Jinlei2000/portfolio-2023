import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react'
import { motion } from 'framer-motion'
import useScrollDirection from '../hooks/useScrollDirection'

export default ({
  link,
  alt,
  className,
}: {
  link: string
  alt: string
  className?: string
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

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: scrollDir === 'down' ? -50 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      <AdvancedImage
        className="w-full rounded-own-md"
        alt={alt}
        cldImg={myImage}
        plugins={[
          responsive(),
          placeholder({
            mode: 'blur',
          }),
        ]}
      />
    </motion.div>
  )
}
