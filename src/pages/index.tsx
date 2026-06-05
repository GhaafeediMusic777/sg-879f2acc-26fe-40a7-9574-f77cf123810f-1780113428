import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'

const FEATURED_PRODUCTS = [
  {
    id: 'dream-ai-visualization',
    name: 'Dream AI Visualization',
    description: 'Subconscious cinema',
    price: '$79',
    rating: 4.6,
    image: '/products/dream-ai-visualization.jpg',
  },
  {
    id: 'emotional-soundtrack',
    name: 'Emotional Soundtrack',
    description: 'Your story as original cinematic music',
    price: '$49',
    rating: 4.8,
    image: '/products/emotional-soundtrack.jpg',
  },
  {
    id: 'cinematic-story-film',
    name: 'Cinematic Story Film',
    description: 'Song + music video experience',
    price: '$149',
    rating: 4.9,
    image: '/products/cinematic-story-film.jpg',
  },
  {
    id: 'signature-masterpiece',
    name: 'Signature Masterpiece',
    description: 'Ultimate cinematic experience',
    price: '$499',
    rating: 5,
    image: '/products/signature-masterpiece.jpg',
  },
]

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_PRODUCTS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      {/* Fixed Background Gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, #03051a 0%, #090d2b 30%, #050511 100%)`,
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <LuxuryHeader />

        {/* Hero Section - Full Screen Cinematic */}
        <motion.section
          className="relative w-full h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Cinematic Background Image with Parallax */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{ scale: 1.05 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          >
            <img
              src="/products/dream-ai-visualization.jpg"
              alt="Dream Visualization"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dark Overlay - 65% opacity */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.65 }}
          />

          {/* Gold Accent Lighting Effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 30% 40%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`,
            }}
          />

          {/* Hero Content */}
          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Transform Your Story
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-luxury-gray-light mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Create cinematic masterpieces powered by AI. Turn your emotions, dreams, and memories into stunning visual and audio experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Link href="/products/dream-ai-visualization">
                <LuxuryButton variant="primary" size="lg">
                  Explore Products
                </LuxuryButton>
              </Link>
              <Link href="/auth/signup">
                <LuxuryButton variant="secondary" size="lg">
                  Get Started
                </LuxuryButton>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-luxury-gold rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Products Carousel Section */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <motion.div
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent">
                Featured Experiences
              </h2>
              <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
                Discover our most popular cinematic creations
              </p>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Main Featured Card */}
              <motion.div
                className="relative rounded-3xl overflow-hidden h-96 sm:h-[500px] mb-12 cursor-pointer group"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <img
                  src={FEATURED_PRODUCTS[activeIndex].image}
                  alt={FEATURED_PRODUCTS[activeIndex].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div
                  className="absolute inset-0 bg-black"
                  style={{ opacity: 0.4 }}
                />

                {/* Glassmorphism Content Overlay */}
                <div
                  className="absolute inset-0 backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <motion.h3
                    className="text-4xl sm:text-5xl font-bold text-luxury-pearl mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {FEATURED_PRODUCTS[activeIndex].name}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-luxury-gray-light mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {FEATURED_PRODUCTS[activeIndex].description}
                  </motion.p>
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="text-3xl font-bold text-luxury-gold">
                      {FEATURED_PRODUCTS[activeIndex].price}
                    </span>
                    <span className="text-lg text-luxury-gray-light">
                      {FEATURED_PRODUCTS[activeIndex].rating} / 5
                    </span>
                  </motion.div>
                </div>

                {/* Hover Shadow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-luxury-lg transition-shadow duration-300"
                  style={{
                    boxShadow: '0 0 40px rgba(212,175,55,.25)',
                  }}
                />
              </motion.div>

              {/* Carousel Navigation Dots */}
              <div className="flex justify-center gap-3 mb-12">
                {FEATURED_PRODUCTS.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index)
                      setIsAutoPlay(false)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-luxury-gold w-8'
                        : 'bg-luxury-gray-light w-2 hover:bg-luxury-gold'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setActiveIndex(
                      (prev) =>
                        (prev - 1 + FEATURED_PRODUCTS.length) %
                        FEATURED_PRODUCTS.length
                    )
                    setIsAutoPlay(false)
                  }}
                  className="px-6 py-3 border border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    setActiveIndex((prev) => (prev + 1) % FEATURED_PRODUCTS.length)
                    setIsAutoPlay(false)
                  }}
                  className="px-6 py-3 border border-luxury-gold text-luxury-gold rounded-lg hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Luxury Showcase Section - Alternating Layout */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl sm:text-6xl font-bold mb-20 text-center bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent">
              Explore Our Collection
            </h2>

            {/* Alternating Showcase Items */}
            {[
              {
                id: 'emotional-soundtrack',
                name: 'Emotional Soundtrack',
                description:
                  'Transform your emotional story into an original cinematic soundtrack. Our AI analyzes your narrative and creates a unique musical composition that perfectly captures the essence of your story.',
                image: '/products/emotional-soundtrack.jpg',
                reverse: false,
              },
              {
                id: 'cinematic-story-film',
                name: 'Cinematic Story Film',
                description:
                  'Get both the original soundtrack AND a professional music video. Perfect for sharing your story with the world in stunning 4K quality.',
                image: '/products/cinematic-story-film.jpg',
                reverse: true,
              },
              {
                id: 'memorial-legacy-film',
                name: 'Memorial Legacy Film',
                description:
                  'Create a permanent, high-quality memorial that preserves your loved ones\' stories for generations to come.',
                image: '/products/memorial-legacy-film.jpg',
                reverse: false,
              },
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
                  item.reverse ? 'lg:grid-flow-dense' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                {/* Image */}
                <motion.div
                  className={`rounded-2xl overflow-hidden h-96 ${
                    item.reverse ? 'lg:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Text Content */}
                <div className={item.reverse ? 'lg:col-start-1' : ''}>
                  <h3 className="text-4xl sm:text-5xl font-bold text-luxury-pearl mb-4">
                    {item.name}
                  </h3>
                  <p className="text-lg text-luxury-gray-light mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <Link href={`/products/${item.id}`}>
                    <LuxuryButton variant="primary" size="lg">
                      Learn More
                    </LuxuryButton>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="max-w-4xl mx-auto rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.05) 100%)`,
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(212,175,55,0.2)',
            }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6 text-luxury-pearl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Create Your Masterpiece?
            </motion.h2>
            <motion.p
              className="text-xl text-luxury-gray-light mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Join thousands of creators transforming their stories into cinematic experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href="/auth/signup">
                <LuxuryButton variant="primary" size="lg">
                  Start Creating Now
                </LuxuryButton>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <LuxuryFooter />
      </div>
    </div>
  )
}
