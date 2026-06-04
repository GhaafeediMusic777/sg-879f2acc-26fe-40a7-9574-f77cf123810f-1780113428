import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface LuxuryCardProps {
  children: React.ReactNode
  variant?: 'default' | 'glass' | 'elevated'
  className?: string
  hover?: boolean
  onClick?: () => void
  padding?: 'sm' | 'md' | 'lg'
}

export const LuxuryCard: React.FC<LuxuryCardProps> = ({
  children,
  variant = 'default',
  className,
  hover = true,
  onClick,
  padding = 'md',
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300'

  const variantStyles = {
    default: 'bg-luxury-dark-secondary border border-luxury-gold border-opacity-30',
    glass: 'bg-luxury-dark-secondary bg-opacity-40 backdrop-blur-xl border border-luxury-gold border-opacity-20',
    elevated: 'bg-luxury-dark-secondary shadow-luxury-lg border border-luxury-gold border-opacity-20',
  }

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  }

  const hoverStyles = hover ? 'hover:shadow-luxury-lg hover:border-luxury-gold hover:border-opacity-50' : ''

  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -8 } : {}}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        hoverStyles,
        className
      )}
    >
      {children}
    </motion.div>
  )
}
