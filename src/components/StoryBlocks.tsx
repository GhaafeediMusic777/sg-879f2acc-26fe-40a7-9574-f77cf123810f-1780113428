import React from 'react'
import { motion } from 'framer-motion'

const stories = [
  {
    title: 'Dreams',
    description: 'See the future you desire.',
    image: '/products/dream-ai-visualization.jpg',
    accentColor: '#87ceeb',
  },
  {
    title: 'Memories',
    description: 'Preserve moments that matter.',
    image: '/products/emotional-soundtrack.jpg',
    accentColor: '#ffd700',
  },
  {
    title: 'Legacy',
    description: 'Leave something that outlives you.',
    image: '/products/memorial-legacy-film.jpg',
    accentColor: '#c9a961',
  },
]

export function StoryBlocks() {
  return (
    <section className="relative w-full" id="story">
      {stories.map((story, index) => (
        <motion.div
          key={index}
          className="relative w-full h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <motion.img
            src={story.image}
            alt={story.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)`,
            }}
          />

          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${story.accentColor}20 0%, transparent 70%)`,
              filter: 'blur(80px)',
            }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                textShadow: `0 0 80px ${story.accentColor}50`,
                letterSpacing: '-0.02em',
              }}
            >
              {story.title}
            </motion.h2>

            <motion.p
              className="text-2xl sm:text-3xl text-luxury-gray-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {story.description}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  )
}
