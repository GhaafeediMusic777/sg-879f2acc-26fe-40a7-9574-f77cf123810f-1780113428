import React from 'react'
import { motion } from 'framer-motion'
import { scrollReveal, staggerContainer, staggerItem } from '@/utils/motionDesign'

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: 'default' | 'stagger' | 'scale' | 'blur'
  delay?: number
  className?: string
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'default',
  delay = 0,
  className = '',
}) => {
  const getVariants = () => {
    switch (variant) {
      case 'stagger':
        return staggerContainer
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.23, 1, 0.320, 1],
            },
          },
        }
      case 'blur':
        return {
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
      default:
        return scrollReveal
    }
  }

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

interface ScrollRevealListProps {
  children: React.ReactNode[]
  className?: string
}

export const ScrollRevealList: React.FC<ScrollRevealListProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={staggerItem}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ScrollReveal
