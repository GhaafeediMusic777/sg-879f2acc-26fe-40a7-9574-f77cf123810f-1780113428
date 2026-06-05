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

const SHOWCASE_PRODUCTS = [
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
  {
    id: 'future-self-vision',
    name: 'Future Self Vision',
    description:
      'Visualize your best future self through AI-generated cinematic content. Perfect for motivation and goal-setting.',
    image: '/products/future-self-vision.jpg',
    reverse: true,
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

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      {/* Layered Cinematic Background System */}
      
      {/* Layer 1: Deep Midnight Base */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
          zIndex: 0,
        }}
      />

      {/* Layer 2: Atmospheric Gold Glow - Top */}
      <div
        className="fixed top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* Layer 3: Atmospheric Gold Glow - Bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 150%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)`,
          zIndex: 1,
        }}
      />

      {/* Layer 4: Side Accent Glows */}
      <div
        className="fixed top-1/3 -left-32 w-96 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
        }}
      />

      <div
        className="fixed top-1/2 -right-32 w-96 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
        }}
      />

      {/* Layer 5: Brand Watermark - Parallax Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 2 }}
        initial={{ y: 0 }}
        animate={{ y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="text-center"
          style={{
            fontSize: 'clamp(120px, 35vw, 500px)',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'rgba(212, 175, 55, 0.06)',
            textShadow: '0 0 100px rgba(212, 175, 55, 0.15)',
            filter: 'blur(3px)',
            whiteSpace: 'nowrap',
            fontFamily: 'Georgia, serif',
            textTransform: 'uppercase',
          }}
        >
          GHAAFEEDI MUSIC
        </div>
      </motion.div>

      <div className="relative z-10">
        <LuxuryHeader />

        {/* Brand Identity Section */}
        <motion.section
          className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 tracking-wider"
              style={{
                background: 'linear-gradient(180deg, #d4af37 0%, #f5e6d3 50%, #d4af37 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(212, 175, 55, 0.4)',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.08em',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              GHAAFEEDI MUSIC
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-luxury-gold mb-2 tracking-widest font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              LUXURY AI STORYTELLING STUDIO
            </motion.p>

            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>
        </motion.section>

        {/* Hero Section - Mobile Optimized */}
        <motion.section
          className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero Image - Centered, Contained with Atmospheric Glow */}
              <motion.div
                className="relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-[500px] order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Atmospheric Glow Behind Image */}
                <div
                  className="absolute -inset-8 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    zIndex: -1,
                  }}
                />

                <img
                  src="/products/dream-ai-visualization.jpg"
                  alt="Dream AI Visualization"
                  className="w-full h-full object-cover rounded-3xl"
                />

                {/* Dark Overlay */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)`,
                  }}
                />

                {/* Premium Gold Glow Border */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.2)',
                  }}
                />
              </motion.div>

              {/* Hero Content */}
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-luxury-pearl leading-tight">
                  Transform Your Story
                </h2>

                <p className="text-lg text-luxury-gray-light mb-8 leading-relaxed">
                  Create cinematic masterpieces powered by AI. Turn your emotions, dreams, and memories into stunning visual and audio experiences that move audiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <LuxuryButton variant="primary" size="lg">
                      Explore All Products
                    </LuxuryButton>
                  </Link>
                  <Link href="/auth/signup">
                    <LuxuryButton variant="secondary" size="lg">
                      Get Started
                    </LuxuryButton>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent">
                Featured Experiences
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-4" />
              <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
                Discover our most popular cinematic creations
              </p>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Main Featured Card with Atmospheric Glow */}
              <motion.div
                className="relative rounded-3xl overflow-hidden h-96 sm:h-[500px] mb-12 cursor-pointer group"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Atmospheric Glow Behind Card */}
                <div
                  className="absolute -inset-6 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.25) 0%, transparent 60%)`,
                    filter: 'blur(50px)',
                    zIndex: -1,
                  }}
                />

                <img
                  src={FEATURED_PRODUCTS[activeIndex].image}
                  alt={FEATURED_PRODUCTS[activeIndex].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div
                  className="absolute inset-0 bg-black"
                  style={{ opacity: 0.4 }}
                />

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

                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-luxury-lg transition-shadow duration-300"
                  style={{
                    boxShadow: '0 0 60px rgba(212,175,55,.3)',
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

        {/* Luxury Editorial Showcase Section */}
        <motion.section
          className="relative py-32 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent">
                Explore Our Collection
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto" />
            </motion.div>

            {/* Alternating Editorial Layout */}
            {SHOWCASE_PRODUCTS.map((item, idx) => (
              <motion.div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 ${
                  item.reverse ? 'lg:grid-flow-dense' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
              >
                {/* Image with Atmospheric Glow */}
                <motion.div
                  className={`rounded-2xl overflow-hidden h-96 sm:h-[500px] relative ${
                    item.reverse ? 'lg:col-start-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Behind Image */}
                  <div
                    className="absolute -inset-6 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)`,
                      filter: 'blur(40px)',
                      zIndex: -1,
                    }}
                  />

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className={item.reverse ? 'lg:col-start-1' : ''}
                  initial={{ opacity: 0, x: item.reverse ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                >
                  <h3 className="text-4xl sm:text-5xl font-bold text-luxury-pearl mb-6">
                    {item.name}
                  </h3>

                  <div className="w-12 h-1 bg-gradient-to-r from-luxury-gold to-transparent mb-6" />

                  <p className="text-lg text-luxury-gray-light mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <Link href={`/products/${item.id}`}>
                    <LuxuryButton variant="primary" size="lg">
                      Discover More
                    </LuxuryButton>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Gold Divider */}
        <motion.div
          className="relative px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
          </div>
        </motion.div>

        {/* CTA Section with Atmospheric Glow */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto relative">
            {/* Atmospheric Glow Behind CTA */}
            <div
              className="absolute -inset-12 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: -1,
              }}
            />

            <div
              className="rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
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
          </div>
        </motion.section>

        <LuxuryFooter />
      </div>
    </div>
  )
}
