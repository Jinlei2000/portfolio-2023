export const textFadeInSlideDown = {
  initial: { opacity: 0, y: -20 },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.1,
    },
  },
}

export const blobMorph = {
  initial: {
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  },
  animation: {
    borderRadius: [
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
    ],
    transition: {
      duration: 50,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

export const blobFadeInGrow = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animation: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'backOut',
    },
  },
}

export const skillBar = {
  initial: { opacity: 0 },
  animation: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
  },
}
