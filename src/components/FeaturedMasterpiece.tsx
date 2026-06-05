import React from 'react'
import { motion } from 'framer-motion'

export function FeaturedMasterpiece() {
  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Poster */}
          <motion.div
            className="relative rounded-3xl overflow-hidden h-96 lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow */}
            <div
              className="absolute -inset-8 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: -1,
              }}
            />

            <img
              src="/products/cinematic-life-story.jpg"
              alt="Featured Masterpiece"
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
                background: 'rgba(212, 175, 55, 0.3)',
                color: '#d4af37',
                border: '2px solid #d4af37',
              }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured
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
              className="inline-block text-sm font-bold tracking-widest uppercase mb-4 text-luxury-gold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured Masterpiece
            </motion.span>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-luxury-pearl leading-tight">
              The Johnson Family Legacy Film
            </h2>

            <p className="text-lg sm:text-xl text-luxury-gray-light mb-8 leading-relaxed">
              A cinematic tribute spanning three generations. Memories preserved. Stories celebrated. Love immortalized.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 py-8 border-y border-opacity-20" style={{ borderColor: '#d4af37' }}>
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
              className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
              style={{
                background: '#d4af37',
                color: '#000',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
