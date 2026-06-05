import React from 'react'
import { motion } from 'framer-motion'

interface ChapterHeaderProps {
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  accentColor: string
}

export function ChapterHeader({
  title,
  subtitle,
  description,
  backgroundImage,
  accentColor,
}: ChapterHeaderProps) {
  return (
    <motion.section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <motion.img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)`,
        }}
      />

      {/* Atmospheric Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${accentColor}30 0%, transparent 70%)`,
          filter: 'blur(100px)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.span
          className="inline-block text-sm font-bold tracking-widest uppercase mb-6"
          style={{ color: accentColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {subtitle}
        </motion.span>

        <motion.h2
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            textShadow: `0 0 80px ${accentColor}50`,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl text-luxury-gray-light leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
            style={{ borderColor: accentColor }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: accentColor }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
