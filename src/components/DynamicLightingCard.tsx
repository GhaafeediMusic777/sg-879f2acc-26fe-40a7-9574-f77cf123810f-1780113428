import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DynamicLightingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  glowColor?: string
  borderColor?: string
}

export const DynamicLightingCard: React.FC<DynamicLightingCardProps> = ({
  children,
  className = '',
  delay = 0,
  glowColor = 'rgba(212, 175, 55, 0.3)',
  borderColor = 'rgba(212, 175, 55, 0.5)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })

  // Handle mouse movement for reflection effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
    setGlowPosition({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.23, 1, 0.320, 1],
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Animated gold border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${borderColor}, transparent, ${borderColor})`,
          padding: '2px',
        }}
        animate={{
          opacity: isHovering ? 1 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0.5 rounded-2xl bg-luxury-dark-secondary" />
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 70%)`,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Soft ambient shadow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: `0 0 60px ${glowColor}`,
        }}
        animate={{
          opacity: isHovering ? 0.6 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Light refraction effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)`,
        }}
        animate={{
          opacity: isHovering ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: isHovering ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(147, 112, 219, 0.05) 100%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

export default DynamicLightingCard
