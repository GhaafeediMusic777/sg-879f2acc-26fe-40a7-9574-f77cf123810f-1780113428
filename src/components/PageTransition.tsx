import React from 'react'
import { motion } from 'framer-motion'
import { pageSlideUp } from '@/utils/motionDesign'

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      variants={pageSlideUp}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.6,
        ease: [0.23, 1, 0.320, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
