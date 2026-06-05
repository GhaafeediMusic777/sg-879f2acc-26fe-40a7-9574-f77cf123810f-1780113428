import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function CinematicHero() {
  return (
    <motion.section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Background Image with Cinematic Zoom */}
      <motion.img
        src="/products/dream-ai-visualization.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)`,
        }}
      />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'rgba(212, 175, 55, 0.8)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 15px rgba(212, 175, 55, 1)',
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Soft Light Movement */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            'radial-gradient(ellipse at 60% 40%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse at 40% 60%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
            'radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            textShadow: '0 0 80px rgba(212, 175, 55, 0.5)',
            letterSpacing: '-0.02em',
          }}
        >
          Your Story Has Never Been Told Like This Before
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-luxury-gray-light mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          We transform memories, dreams, visions, relationships, and legacies into cinematic experiences powered by AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link href="#story">
            <button
              className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              style={{
                background: '#d4af37',
                color: '#000',
              }}
            >
              Begin Your Journey
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: '#d4af37' }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: '#d4af37' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
