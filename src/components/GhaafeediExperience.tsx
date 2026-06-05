import React from 'react'
import { motion } from 'framer-motion'

export function GhaafeediExperience() {
  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
          }}
        />

        {/* Aurora-like Glow */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-full pointer-events-none"
          animate={{
            background: [
              'radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
              'radial-gradient(ellipse at 30% -30%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              'radial-gradient(ellipse at 70% -40%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
              'radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'rgba(212, 175, 55, 0.6)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="inline-block text-sm font-bold tracking-widest uppercase mb-6 text-luxury-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Heart of Ghaafeedi
        </motion.span>

        <motion.h2
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            textShadow: '0 0 80px rgba(212, 175, 55, 0.5)',
            letterSpacing: '-0.02em',
          }}
        >
          Every Voice.
          <br />
          Every Memory.
          <br />
          Every Dream.
        </motion.h2>

        <motion.p
          className="text-2xl sm:text-3xl text-luxury-gray-light mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transformed into cinematic art.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="h-1 w-32"
            style={{
              background: `linear-gradient(90deg, transparent, #d4af37, transparent)`,
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-luxury-gray-light mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We don't just create products. We preserve what matters most. We transform personal stories into timeless cinematic experiences that connect, heal, and inspire.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: '#d4af37',
              color: '#000',
            }}
          >
            Discover Your Story
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
