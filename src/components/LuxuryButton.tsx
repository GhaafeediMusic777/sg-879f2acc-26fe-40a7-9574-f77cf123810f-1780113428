import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface LuxuryButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  icon?: React.ReactNode
  fullWidth?: boolean
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  onClick,
  type = 'button',
  loading = false,
  icon,
  fullWidth = false,
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden'

  const variantStyles = {
    primary: 'bg-gradient-to-r from-luxury-gold to-luxury-gold-premium text-luxury-dark hover:shadow-luxury-lg hover:scale-105 active:scale-95',
    secondary: 'border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:bg-opacity-10 active:scale-95',
    ghost: 'text-luxury-gold hover:text-luxury-gold-premium active:scale-95',
    outline: 'border border-luxury-gray-dark text-luxury-pearl hover:border-luxury-gold hover:text-luxury-gold active:scale-95',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''
  const widthStyles = fullWidth ? 'w-full' : ''

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        widthStyles,
        className
      )}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && <span className="flex items-center justify-center">{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  )
}
