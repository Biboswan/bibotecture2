import type { AnimationGeneratorType, Variants } from "motion"

export const BASE_TRANSITION = {
  duration: 0.15,
  type: "spring" as AnimationGeneratorType,
  stiffness: 200,
  damping: 15,
}

export const SLOW_TRANSITION = {
  duration: 0.6,
  type: "spring" as AnimationGeneratorType,
  stiffness: 100,
  damping: 20,
}

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "none" },
}

export const FADE_IN: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
}

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const SLIDE_IN_LEFT: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

export const SLIDE_IN_RIGHT: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}
