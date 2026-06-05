import React from 'react'
import { motion } from 'framer-motion'

interface CinematicQuoteProps {
  quote: string
  subtext?: string
  backgroundImage?: string
  accentColor?: string
}

export function CinematicQuote({
  quote,
  subtext,
  backgroundImage,
  accentColor = '#d4af37',
}: CinematicQuoteProps) {
  return (
    <motion.section
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)`,
            }}
          />
        </>
      )}

      {/* Gradient Overlay */}
      {!backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
          }}
        />
      )}

      {/* Atmospheric Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${accentColor}20 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{
            color: 'white',
            textShadow: `0 0 60px ${accentColor}40`,
            letterSpacing: '-0.02em',
          }}
        >
          {quote}
        </h2>

        {subtext && (
          <motion.p
            className="text-xl sm:text-2xl text-luxury-gray-light mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtext}
          </motion.p>
        )}

        {/* Decorative Gold Line */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div
            className="h-1 w-24"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
