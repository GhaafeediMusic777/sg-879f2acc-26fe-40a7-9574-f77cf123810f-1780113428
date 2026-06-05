import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'My father\'s story became something our family will treasure forever.',
    author: 'Legacy Film Client',
    category: 'Memorial Legacy Film',
    accentColor: '#d4af37',
  },
  {
    quote: 'Seeing my dreams visualized was like stepping into a movie. Absolutely transformative.',
    author: 'Dream Visualization Client',
    category: 'Dream AI Visualization',
    accentColor: '#87ceeb',
  },
  {
    quote: 'The emotional soundtrack perfectly captured the essence of our relationship.',
    author: 'Emotional Soundtrack Client',
    category: 'Emotional Soundtrack',
    accentColor: '#ffd700',
  },
  {
    quote: 'This is more than a product. It\'s a time machine for memories.',
    author: 'Cinematic Life Story Client',
    category: 'Cinematic Life Story',
    accentColor: '#c9a961',
  },
]

export function Testimonials() {
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
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 150%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)`,
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
            Stories From Our Clients
          </h2>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            Real transformations. Real emotions. Real memories preserved forever.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl p-8 sm:p-10 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Background */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)`,
                  border: `1px solid ${testimonial.accentColor}30`,
                  borderRadius: '1rem',
                }}
              />

              {/* Glow on Hover */}
              <div
                className="absolute -inset-8 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${testimonial.accentColor}40 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                  zIndex: -1,
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Quote Mark */}
                <motion.div
                  className="text-6xl font-bold mb-4 opacity-20"
                  style={{ color: testimonial.accentColor }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  "
                </motion.div>

                {/* Quote */}
                <p className="text-xl text-luxury-pearl mb-6 leading-relaxed font-semibold">
                  {testimonial.quote}
                </p>

                {/* Divider */}
                <div
                  className="h-1 w-12 mb-6"
                  style={{
                    background: `linear-gradient(90deg, ${testimonial.accentColor}, transparent)`,
                  }}
                />

                {/* Author */}
                <div>
                  <p
                    className="font-bold text-sm tracking-widest uppercase mb-1"
                    style={{ color: testimonial.accentColor }}
                  >
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-luxury-gray-light">
                    {testimonial.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
