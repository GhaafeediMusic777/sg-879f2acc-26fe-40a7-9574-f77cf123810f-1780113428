import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function FinalCTA() {
  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
          }}
        />

        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Aurora Lights */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
              'radial-gradient(ellipse at 30% -30%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              'radial-gradient(ellipse at 70% -40%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
              'radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Gold Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: 'rgba(212, 175, 55, 0.8)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(212, 175, 55, 1)',
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
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
        <motion.h2
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            textShadow: '0 0 80px rgba(212, 175, 55, 0.5)',
            letterSpacing: '-0.02em',
          }}
        >
          Every Story Deserves
          <br />
          To Be Remembered
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="h-1 w-32"
            style={{
              background: `linear-gradient(90deg, transparent, #d4af37, transparent)`,
            }}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/products">
            <button
              className="px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105"
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
    </motion.section>
  )
}
