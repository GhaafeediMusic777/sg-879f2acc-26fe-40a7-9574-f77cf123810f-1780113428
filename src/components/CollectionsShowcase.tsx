import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const collections = [
  {
    name: 'Dream Collection',
    description: 'Visualize your ideal future',
    image: '/products/dream-ai-visualization.jpg',
    accentColor: '#87ceeb',
    href: '/products?collection=dreams',
  },
  {
    name: 'Legacy Collection',
    description: 'Preserve what matters most',
    image: '/products/memorial-legacy-film.jpg',
    accentColor: '#c9a961',
    href: '/products?collection=legacy',
  },
  {
    name: 'Love Collection',
    description: 'Celebrate your relationships',
    image: '/products/couples-journey-film.jpg',
    accentColor: '#ffd700',
    href: '/products?collection=love',
  },
  {
    name: 'Transformation Collection',
    description: 'Heal and evolve',
    image: '/products/future-self-vision.jpg',
    accentColor: '#d4af37',
    href: '/products?collection=transformation',
  },
  {
    name: 'Creator Collection',
    description: 'Express your artistry',
    image: '/products/voice-cloning-studio.jpg',
    accentColor: '#87ceeb',
    href: '/products?collection=creator',
  },
  {
    name: 'Sophia Collection',
    description: 'Your AI companion',
    image: '/products/sophia-ai-membership.jpg',
    accentColor: '#ffd700',
    href: '/products?collection=sophia',
  },
]

export function CollectionsShowcase() {
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
            Explore Collections
          </h2>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            Curated experiences for every story
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link key={index} href={collection.href}>
              <motion.div
                className="relative rounded-3xl overflow-hidden h-80 group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
              >
                {/* Image */}
                <motion.img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)`,
                  }}
                />

                {/* Glow */}
                <div
                  className="absolute -inset-8 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, ${collection.accentColor}40 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    zIndex: -1,
                  }}
                />

                {/* Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="text-3xl font-bold mb-2"
                    style={{ color: collection.accentColor }}
                  >
                    {collection.name}
                  </h3>
                  <p className="text-lg text-luxury-pearl">
                    {collection.description}
                  </p>
                </motion.div>

                {/* Static Title */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-3xl font-bold text-luxury-pearl">
                    {collection.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
