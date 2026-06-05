import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Share Your Story',
    description: 'Tell us your vision, emotion, or memory. No limits. Pure authenticity.',
  },
  {
    number: '02',
    title: 'Our AI Creates',
    description: 'Our advanced AI transforms your story into cinematic art and music.',
  },
  {
    number: '03',
    title: 'Professional Enhancement',
    description: 'Our team refines, masters, and perfects every detail.',
  },
  {
    number: '04',
    title: 'Receive Your Experience',
    description: 'Your cinematic masterpiece, delivered in premium formats.',
  },
]

export function CustomerJourney() {
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

      {/* Atmospheric Glow */}
      <div
        className="absolute top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent">
            Your Cinematic Journey
          </h2>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            From story to masterpiece in four simple steps
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 pointer-events-none">
            <motion.div
              className="h-full"
              style={{
                background: `linear-gradient(90deg, #d4af37 0%, #d4af37 25%, transparent 25%, transparent 75%, #d4af37 75%, #d4af37 100%)`,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Step Circle */}
              <motion.div
                className="relative mb-8 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)`,
                    border: '2px solid #d4af37',
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
                  }}
                >
                  <span className="text-4xl font-bold text-luxury-gold">
                    {step.number}
                  </span>

                  {/* Rotating Border */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '1px solid transparent',
                      borderTop: '2px solid #d4af37',
                      borderRight: '2px solid #d4af37',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <h3 className="text-xl font-bold text-luxury-pearl mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-luxury-gray-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            className="px-8 py-4 rounded-full font-semibold transition-all duration-300"
            style={{
              background: '#d4af37',
              color: '#000',
            }}
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}
