import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { ChapterHeader } from '@/components/ChapterHeader'
import { CinematicQuote } from '@/components/CinematicQuote'
import { GhaafeediExperience } from '@/components/GhaafeediExperience'
import { FeaturedCreation } from '@/components/FeaturedCreation'
import { CustomerJourney } from '@/components/CustomerJourney'
import { Testimonials } from '@/components/Testimonials'
import { DynamicWatermark } from '@/components/DynamicWatermark'
import { PRODUCTS } from '@/data/products'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      <DynamicWatermark />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
          zIndex: 0,
        }}
      />

      <div
        className="fixed top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      <div className="relative z-10">
        <LuxuryHeader />

        {/* HERO */}
        <motion.section
          className="relative w-full h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/products/dream-ai-visualization.jpg"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)`,
            }}
          />

          <motion.div
            className="relative z-10 text-center px-4 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1
              className="text-6xl sm:text-8xl font-bold mb-6 text-white"
              style={{ textShadow: '0 0 80px rgba(212, 175, 55, 0.5)' }}
            >
              Your Story Deserves To Be Cinematic
            </h1>
            <p className="text-2xl text-luxury-gray-light mb-12">
              Transform your memories into premium cinematic experiences
            </p>
            <Link href="/products">
              <button
                className="px-10 py-5 rounded-full font-bold text-lg"
                style={{ background: '#d4af37', color: '#000' }}
              >
                Explore Experiences
              </button>
            </Link>
          </motion.div>
        </motion.section>

        {/* DREAMS CHAPTER */}
        <ChapterHeader
          title="Dreams"
          subtitle="Chapter 1"
          description="Imagine the life you desire. See it. Feel it. Become it."
          backgroundImage="/products/dream-ai-visualization.jpg"
          accentColor="#87ceeb"
        />

        {/* LEGACY CHAPTER */}
        <ChapterHeader
          title="Legacy"
          subtitle="Chapter 2"
          description="Preserve the stories that matter most. Create timeless tributes."
          backgroundImage="/products/memorial-legacy-film.jpg"
          accentColor="#c9a961"
        />

        {/* QUOTE */}
        <CinematicQuote
          quote="Every Story Deserves To Be Remembered"
          backgroundImage="/products/cinematic-life-story.jpg"
          accentColor="#d4af37"
        />

        {/* GHAAFEEDI EXPERIENCE */}
        <GhaafeediExperience />

        {/* FEATURED CREATION */}
        <FeaturedCreation
          title="The Johnson Family Legacy Film"
          subtitle="Featured Creation"
          description="A cinematic tribute spanning three generations. Memories preserved. Stories celebrated. Love immortalized."
          image="/products/cinematic-life-story.jpg"
          accentColor="#d4af37"
        />

        {/* CUSTOMER JOURNEY */}
        <CustomerJourney />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FINAL CTA */}
        <motion.section
          className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/products/dream-ai-visualization.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)`,
            }}
          />

          <motion.div
            className="relative z-10 text-center max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-6xl sm:text-8xl font-bold mb-8 text-white"
              style={{ textShadow: '0 0 80px rgba(212, 175, 55, 0.5)' }}
            >
              Your Story Has Never Been Told Like This Before
            </h2>

            <Link href="/products">
              <button
                className="px-12 py-6 rounded-full font-bold text-xl"
                style={{ background: '#d4af37', color: '#000' }}
              >
                Begin Your Cinematic Journey
              </button>
            </Link>
          </motion.div>
        </motion.section>

        <LuxuryFooter />
      </div>
    </div>
  )
}
