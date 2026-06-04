import { Variants } from 'framer-motion'

// Luxury fade animations
export const luxuryFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

export const luxuryFadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

export const luxuryFadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

export const luxuryFadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

export const luxuryFadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

// Scroll reveal animations
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

// Floating elements
export const floatingAnimation: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatingRotation: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Page transitions
export const pageEnter: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const pageSlideIn: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

export const pageSlideUp: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
}

// Glow animations
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(212, 175, 55, 0.3)',
      '0 0 40px rgba(212, 175, 55, 0.6)',
      '0 0 20px rgba(212, 175, 55, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const glowBorder: Variants = {
  animate: {
    borderColor: [
      'rgba(212, 175, 55, 0.3)',
      'rgba(212, 175, 55, 0.8)',
      'rgba(212, 175, 55, 0.3)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

export const scaleHover = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
}

// Rotate animations
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

// Blur animations
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

// Onboarding animations
export const onboardingStep: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.320, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
}

export const onboardingProgress: Variants = {
  animate: {
    width: '100%',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

// Text animations
export const textReveal: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
}

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.23, 1, 0.320, 1],
    },
  }),
}

// Container animations
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.320, 1],
    },
  },
}

// Easing functions
export const easeOutCubic = [0.23, 1, 0.320, 1]
export const easeInOutCubic = [0.645, 0.045, 0.355, 1]
export const easeOutQuart = [0.165, 0.84, 0.44, 1]
export const easeOutQuint = [0.23, 1, 0.320, 1]

// Transition presets
export const transitionFast = {
  duration: 0.3,
  ease: easeOutCubic,
}

export const transitionNormal = {
  duration: 0.6,
  ease: easeOutCubic,
}

export const transitionSlow = {
  duration: 1,
  ease: easeOutCubic,
}

export const transitionLuxury = {
  duration: 1.2,
  ease: easeOutQuint,
}

// Hover animations
export const hoverLift = {
  y: -10,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  transition: transitionNormal,
}

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
  transition: transitionNormal,
}

export const hoverScale = {
  scale: 1.05,
  transition: transitionNormal,
}

// Tap animations
export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 },
}

// Drag animations
export const dragElastic = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}
