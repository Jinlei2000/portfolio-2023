import { Splide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { MotionValue, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default ({
  children,
  reverseScroll = false,
}: {
  children: React.ReactNode
  reverseScroll?: boolean
}) => {
  // Reverse scroll direction if user scrolls up
  const [reverse, setReverse] = useState(reverseScroll)
  const [windowWidth] = useState(window.innerWidth)

  // Get scrollY value from Framer Motion
  const { scrollY }: { scrollY: MotionValue<number> } = useScroll()
  const prevScrollY = useRef(scrollY.get())

  useEffect(() => {
    // Detect if user is scrolling up or down
    if (scrollY.get() > prevScrollY.current) {
      setReverse(!reverse)
    } else if (scrollY.get() < prevScrollY.current) {
      setReverse(!reverse)
    }
    prevScrollY.current = scrollY.get()
  }, [scrollY.get()])

  return (
    <Splide
      options={{
        autoWidth: true,
        type: 'loop',
        gap: '24px',
        drag: 'free',
        arrows: false,
        pagination: false,
        easing: 'ease',
        autoScroll: {
          speed: reverse ? -0.25 : 0.25,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      }}
      extensions={{ AutoScroll }}
    >
      {children}
      {
        // if screen is too big, add a duplicate of the first slide
        windowWidth > 1280 && children
      }
    </Splide>
  )
}
