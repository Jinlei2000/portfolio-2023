import { Splide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { useEffect, useState } from 'react'
import useScrollDirection from '../hooks/useScrollDirection'
import { motion, useReducedMotion } from 'framer-motion'
import { skillBar } from '../animation/animation'

export default ({
  children,
  amount,
  reverseScroll = false,
}: {
  children: React.ReactNode
  amount: number
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

  // reduce motion if user prefers reduced motion
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <motion.div
        initial={shouldReduceMotion ? 'visible' : 'initial'}
        whileInView={shouldReduceMotion ? 'visible' : 'animation'}
        variants={skillBar}
      >
        <Splide
          options={{
            autoWidth: true,
            type: 'loop',
            drag: 'free',
            arrows: false,
            pagination: false,
            easing: 'ease',
            // Disable animation if user prefers reduced motion
            autoScroll: {
              speed: reverseDir ? -0.25 : 0.25,
              pauseOnHover: false,
              pauseOnFocus: false,
              autoStart: shouldReduceMotion ? false : true,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {children}

          {/* Show children if amount is less than or equal to 4. This is
          to avoid empty slides
          */}
          {amount <= 6 && children}
        </Splide>
      </motion.div>
    </>
  )
}
