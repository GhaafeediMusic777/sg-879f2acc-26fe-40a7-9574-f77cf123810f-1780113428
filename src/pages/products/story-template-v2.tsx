import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { CinematicBackground } from '@/components/CinematicBackground'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { StoryArcDisplay } from '@/components/StoryArcDisplay'
import { EmotionalNarrative } from '@/components/EmotionalNarrative'
import { TransformationShowcase } from '@/components/TransformationShowcase'
import { TestimonialShowcase } from '@/components/TestimonialShowcase'
import { LuxuryButton } from '@/components/LuxuryButton'
import { PageTransition } from '@/components/PageTransition'
import { ScrollReveal } from '@/components/ScrollReveal'
import { PRODUCT_STORIES } from '@/config/storytelling-v2'
import { luxuryFadeInUp, staggerContainer, staggerItem } from '@/utils/motionDesign'

interface StoryProductPageProps {
  productId: string
}

export default function StoryProductPage({ productId }: StoryProductPageProps) {
  const product = PRODUCT_STORIES[productId]
  const [currentPhase, setCurrentPhase] = useState(0)

  if (!product) {
    return <div>Product not found</div>
  }

  const handleNextPhase = () => {
    if (currentPhase < product.storyArcs.length - 1) {
      setCurrentPhase(currentPhase + 1)
    }
  }

  const handlePreviousPhase = () => {
    if (currentPhase > 0) {
      setCurrentPhase(currentPhase - 1)
    }
  }

  return (
    <>
      <Head>
        <title>{product.productName} - {product.tagline} | Ghaafeedi Music</title>
        <meta name="description" content={product.heroStatement} />
      </Head>

      <PageTransition>
        <div className="min-h-screen bg-luxury-dark relative overflow-hidden">
          <CinematicBackground />

          <LuxuryHeader />

          {/* Hero Section */}
          <motion.section
            className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Tagline */}
              <motion.p
                className="text-luxury-gold text-lg mb-4 uppercase tracking-widest"
                variants={staggerItem}
              >
                {product.tagline}
              </motion.p>

              {/* Main headline */}
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-luxury-pearl mb-6 leading-tight"
                variants={staggerItem}
              >
                {product.productName}
              </motion.h1>

              {/* Hero statement */}
              <motion.p
                className="text-2xl text-luxury-gray-light mb-12 leading-relaxed"
                variants={staggerItem}
              >
                {product.heroStatement}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex gap-6 justify-center flex-wrap"
                variants={staggerContainer}
              >
                <motion.div variants={staggerItem}>
                  <LuxuryButton variant="primary" size="lg">
                    Start Your Journey
                  </LuxuryButton>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <LuxuryButton variant="secondary" size="lg">
                    Watch Demo
                  </LuxuryButton>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Story Arc Timeline */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-luxury-pearl text-center mb-16"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Your Emotional Journey
              </motion.h2>

              <StoryArcDisplay
                arcs={product.storyArcs}
                onPhaseClick={(phase) => {
                  const index = product.storyArcs.findIndex(a => a.phase === phase)
                  setCurrentPhase(index)
                }}
              />
            </div>
          </ScrollReveal>

          {/* Emotional Narrative Display */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <EmotionalNarrative
                arc={product.storyArcs[currentPhase]}
                onNext={handleNextPhase}
                onPrevious={handlePreviousPhase}
                isActive={true}
              />
            </div>
          </ScrollReveal>

          {/* Transformation Metrics */}
          {product.transformationMetrics.length > 0 && (
            <ScrollReveal className="relative z-10 px-4 py-20">
              <div className="max-w-6xl mx-auto">
                <TransformationShowcase metrics={product.transformationMetrics} />
              </div>
            </ScrollReveal>
          )}

          {/* Testimonials */}
          {product.testimonials.length > 0 && (
            <ScrollReveal className="relative z-10 px-4 py-20">
              <div className="max-w-6xl mx-auto">
                <TestimonialShowcase testimonials={product.testimonials} />
              </div>
            </ScrollReveal>
          )}

          {/* Success Stories */}
          {product.successStories.length > 0 && (
            <ScrollReveal className="relative z-10 px-4 py-20">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  className="text-4xl font-bold text-luxury-pearl text-center mb-12"
                  variants={luxuryFadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Success Stories
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {product.successStories.map((story) => (
                    <motion.div
                      key={story.id}
                      variants={staggerItem}
                      className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-8"
                    >
                      <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                        {story.title}
                      </h3>
                      <p className="text-luxury-gray-light mb-6">
                        {story.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {story.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <p className="text-2xl font-bold text-luxury-gold">
                              {metric.value}
                            </p>
                            <p className="text-xs text-luxury-gray-light">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="italic text-luxury-pearl border-l-2 border-luxury-gold pl-4">
                        "{story.quote}"
                      </blockquote>
                      <p className="text-sm text-luxury-gray-light mt-4">
                        — {story.author}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          )}

          {/* Final CTA */}
          <motion.section
            className="relative z-10 px-4 py-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-12">
              <motion.h2
                className="text-4xl font-bold text-luxury-pearl mb-4"
                variants={staggerItem}
              >
                Your Transformation Starts Now
              </motion.h2>

              <motion.p
                className="text-xl text-luxury-gray-light mb-8"
                variants={staggerItem}
              >
                Join thousands of creators who have already transformed their work with {product.productName}
              </motion.p>

              <motion.div variants={staggerItem}>
                <LuxuryButton variant="primary" size="lg">
                  Begin Your Journey
                </LuxuryButton>
              </motion.div>
            </div>
          </motion.section>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}

// This is a template - in real implementation, you'd use getStaticProps or dynamic routing
export async function getStaticProps() {
  return {
    props: {
      productId: 'ai-voice-clone',
    },
  }
}
