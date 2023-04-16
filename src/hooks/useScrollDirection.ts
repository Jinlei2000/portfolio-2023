import { useEffect, useState } from 'react'

export enum ScrollDirection {
  up = 'up',
  down = 'down',
}

export default ({ threshold = 100 }: { threshold?: number } = {}) => {
  // The threshold is the number of pixels the user must scroll before the scroll direction changes
  const thresholdValue = threshold
  const [scrollDir, setScrollDir] = useState(ScrollDirection.up)

  useEffect(() => {
    let previousScrollYPosition = window.scrollY

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) >
      thresholdValue

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0)

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? ScrollDirection.down
          : ScrollDirection.up
        setScrollDir(newScrollDirection)
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0
      }
    }

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return {
    scrollDir,
  }
}
