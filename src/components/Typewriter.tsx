import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default ({ text }: any) => {
  const [visibleText, setVisibleText] = useState('')

  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleText.length < text.length) {
        setVisibleText(text.slice(0, visibleText.length + 1))
      } else {
        clearInterval(intervalId)
        setVisibleText(text)
        setTimeout(() => {
          setVisibleText('')
        }, 3000) // wait for 1 second before resetting the visibleText state
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [text, visibleText])

  return (
    <motion.span
      animate={shouldReduceMotion ? 'visible' : { opacity: 1 }}
      initial={shouldReduceMotion ? 'visible' : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="text-own-secondary">
        {shouldReduceMotion ? text : visibleText}
      </span>
    </motion.span>
  )
}
