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
    title: 'AI Imagines',
    description: 'Our advanced AI transforms your story into cinematic possibilities.',
  },
  {
    number: '03',
    title: 'Artists Refine',
    description: 'Our creative team perfects every detail with precision and care.',
  },
  {
    number: '04',
    title: 'Receive Masterpiece',
    description: 'Your cinematic experience, delivered in premium formats.',
  },
]

export function CinematicProcess() {
  return (
    <motion.section
      className="relative w-full py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
        {/* Title */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Your Cinematic Journey
          </h2>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            From story to masterpiece in four cinematic steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Circle */}
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
              <div className="text-center">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-luxury-gray-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
