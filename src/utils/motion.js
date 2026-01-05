// Centralized Framer Motion variants for consistent animations
export const fadeUp = (delay = 0, distance = 20) => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

export const staggerChildren = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
})

export const headerVariant = {
  hidden: { opacity: 0, y: 16, filter: 'blur(2px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.5 } },
}
