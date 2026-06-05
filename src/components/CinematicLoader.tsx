import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const CinematicLoader: React.FC<{ duration?: number }> = ({ duration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 bg-luxury-dark z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: duration / 1000 - 0.8 }}
    >
      {/* Center Logo/Text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold text-luxury-pearl mb-4">GHAAFEEDI MUSIC</h1>
        <p className="text-luxury-gray-light text-lg">Luxury AI Storytelling</p>
      </motion.div>

      {/* Animated Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent"
            style={{
              top: `${33.33 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3 + i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Fade Out */}
      <motion.div
        className="absolute inset-0 bg-luxury-dark pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: duration / 1000 - 0.8 }}
      />
    </motion.div>
  )
}
