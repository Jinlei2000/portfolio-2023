import { Splide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { useEffect, useState } from 'react'
import useScrollDirection from '../hooks/useScrollDirection'
import { motion } from 'framer-motion'
import { skillBar } from '../animation/animation'
import { useInView } from 'react-intersection-observer'

export default ({
  children,
  reverseScroll = false,
}: {
  children: React.ReactNode
  reverseScroll?: boolean
}) => {
  // Reverse scroll direction if user scrolls up
  const [reverseDir, setReverseDir] = useState(reverseScroll)

  // add own threshold to detect scroll direction
  const { scrollDir } = useScrollDirection({ threshold: 50 })

  useEffect(() => {
    // Detect if user is scrolling up or down
    setReverseDir(scrollDir === 'down' ? reverseScroll : !reverseScroll)
  }, [scrollDir])

  // Use Intersection Observer to detect when the component is in view
  const [ref, isInView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileInView="animation"
      variants={skillBar}
    >
      {/* Only render the slider when the component is in view */}
      {isInView && (
        <Splide
          options={{
            autoWidth: true,
            type: 'loop',
            drag: 'free',
            arrows: false,
            pagination: false,
            easing: 'ease',
            autoScroll: {
              speed: reverseDir ? -0.25 : 0.25,
              pauseOnHover: false,
              pauseOnFocus: false,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {children}
          {/* to make it loop */}
          {children}
        </Splide>
      )}
    </motion.div>
  )
}
