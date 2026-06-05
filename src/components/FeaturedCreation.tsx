import React from 'react'
import { motion } from 'framer-motion'

interface FeaturedCreationProps {
  title: string
  subtitle: string
  description: string
  image: string
  accentColor?: string
}

export function FeaturedCreation({
  title,
  subtitle,
  description,
  image,
  accentColor = '#d4af37',
}: FeaturedCreationProps) {
  return (
    <motion.section
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden h-96 lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow */}
            <div
              className="absolute -inset-8 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, ${accentColor}40 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: -1,
              }}
            />

            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-3xl"
            />

            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)`,
              }}
            />

            {/* Badge */}
            <motion.div
              className="absolute top-6 right-6 px-6 py-3 rounded-full font-bold tracking-widest uppercase text-sm"
              style={{
                background: `${accentColor}30`,
                color: accentColor,
                border: `2px solid ${accentColor}`,
              }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured Creation
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block text-sm font-bold tracking-widest uppercase mb-4"
              style={{ color: accentColor }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {subtitle}
            </motion.span>

            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-luxury-pearl leading-tight">
              {title}
            </h2>

            <p className="text-xl text-luxury-gray-light mb-8 leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 py-8 border-y border-opacity-20" style={{ borderColor: accentColor }}>
              <div>
                <div className="text-3xl font-bold text-luxury-gold mb-2">3</div>
                <p className="text-sm text-luxury-gray-light">Generations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-luxury-gold mb-2">45</div>
                <p className="text-sm text-luxury-gray-light">Minutes</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-luxury-gold mb-2">5/5</div>
                <p className="text-sm text-luxury-gray-light">Rating</p>
              </div>
            </div>

            <motion.button
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300"
              style={{
                background: accentColor,
                color: '#000',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View This Creation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
