import React from 'react'
import { motion } from 'framer-motion'

const stories = [
  {
    title: 'A Daughter\'s Gift',
    synopsis: 'A grieving daughter preserves her father\'s voice through an AI-generated memoir. His stories, his wisdom, his love—now immortalized in cinematic form.',
    image: '/products/memorial-legacy-film.jpg',
    accentColor: '#c9a961',
  },
  {
    title: 'Love Reimagined',
    synopsis: 'A couple transforms their 25-year relationship into a cinematic film. Their journey, their challenges, their triumph—told through music and visuals.',
    image: '/products/couples-journey-film.jpg',
    accentColor: '#ffd700',
  },
  {
    title: 'The Dream Made Real',
    synopsis: 'An entrepreneur visualizes her dream future. The AI creates a cinematic vision of success, motivation, and transformation she watches every morning.',
    image: '/products/dream-ai-visualization.jpg',
    accentColor: '#87ceeb',
  },
  {
    title: 'Family Legacy',
    synopsis: 'Three generations of family stories woven into one cinematic experience. Grandparents, parents, children—all connected through one powerful film.',
    image: '/products/cinematic-life-story.jpg',
    accentColor: '#d4af37',
  },
]

export function RealStories() {
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
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 150%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)`,
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
            Real Stories
          </h2>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            Transformations that changed lives
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden rounded-3xl">
                <motion.img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)`,
                  }}
                />

                {/* Glow on Hover */}
                <div
                  className="absolute -inset-8 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, ${story.accentColor}40 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    zIndex: -1,
                  }}
                />
              </div>

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-8 rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)`,
                }}
              >
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{ color: story.accentColor }}
                >
                  {story.title}
                </h3>
                <p className="text-lg text-luxury-pearl leading-relaxed">
                  {story.synopsis}
                </p>
              </motion.div>

              {/* Static Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 rounded-3xl group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-3xl font-bold text-luxury-pearl">
                  {story.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
