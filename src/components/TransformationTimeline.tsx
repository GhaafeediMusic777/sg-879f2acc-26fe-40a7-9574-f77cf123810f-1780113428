import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Before',
    description: 'An untold memory.',
    image: '/products/emotional-soundtrack.jpg',
  },
  {
    title: 'Vision',
    description: 'AI interprets your story.',
    image: '/products/dream-ai-visualization.jpg',
  },
  {
    title: 'Creation',
    description: 'Music, visuals, emotion.',
    image: '/products/cinematic-story-film.jpg',
  },
  {
    title: 'Masterpiece',
    description: 'A cinematic experience.',
    image: '/products/signature-masterpiece.jpg',
  },
]

export function TransformationTimeline() {
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
            The Transformation
          </h2>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            From untold story to cinematic masterpiece
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden h-64 mb-8">
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)`,
                  }}
                />
              </div>

              {/* Step Number */}
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                style={{
                  background: '#d4af37',
                  color: '#000',
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {index + 1}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-luxury-pearl mb-2">
                {step.title}
              </h3>
              <p className="text-lg text-luxury-gray-light">
                {step.description}
              </p>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute -right-12 top-1/3 text-4xl text-luxury-gold"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
