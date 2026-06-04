import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { CinematicBackground } from '@/components/CinematicBackground'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryJourneyMap } from '@/components/LuxuryJourneyMap'
import { StepDetailPanel } from '@/components/StepDetailPanel'
import { PageTransition } from '@/components/PageTransition'
import { ScrollReveal } from '@/components/ScrollReveal'
import { PRODUCT_JOURNEYS } from '@/config/product-journeys-v2'
import { staggerContainer, staggerItem, luxuryFadeInUp } from '@/utils/motionDesign'

interface JourneyShowcasePageProps {
  productId: string
}

export default function JourneyShowcasePage({ productId }: JourneyShowcasePageProps) {
  const journey = PRODUCT_JOURNEYS[productId]
  const [currentStep, setCurrentStep] = useState(0)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  if (!journey) {
    return <div>Product not found</div>
  }

  const currentStepData = journey.steps[currentStep]

  return (
    <>
      <Head>
        <title>{journey.productName} - Your Journey | Ghaafeedi Music</title>
        <meta name="description" content={journey.description} />
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
              {/* Icon */}
              <motion.div
                className="text-7xl mb-6"
                variants={staggerItem}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {currentStepData.icon}
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-luxury-pearl mb-6 leading-tight"
                variants={staggerItem}
              >
                Your {journey.productName} Journey
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-2xl text-luxury-gray-light mb-12 leading-relaxed"
                variants={staggerItem}
              >
                {journey.description}
              </motion.p>

              {/* Step counter */}
              <motion.p
                className="text-lg text-luxury-gold"
                variants={staggerItem}
              >
                Step {currentStep + 1} of {journey.steps.length}
              </motion.p>
            </div>
          </motion.section>

          {/* Journey Map Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-luxury-pearl text-center mb-16"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Your Complete Journey
              </motion.h2>

              <LuxuryJourneyMap
                steps={journey.steps}
                currentStep={currentStep}
                onStepClick={(stepId) => {
                  const index = journey.steps.findIndex(s => s.id === stepId)
                  setCurrentStep(index)
                  setExpandedStep(stepId)
                }}
              />
            </div>
          </ScrollReveal>

          {/* Step Detail Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <StepDetailPanel
                step={currentStepData}
                isActive={true}
                onClose={() => setExpandedStep(null)}
              />
            </div>
          </ScrollReveal>

          {/* Navigation Section */}
          <motion.section
            className="relative z-10 px-4 py-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto flex gap-6 justify-center flex-wrap">
              {currentStep > 0 && (
                <motion.button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-8 py-3 bg-luxury-dark-secondary border border-luxury-gold border-opacity-30 rounded-lg text-luxury-pearl hover:border-luxury-gold hover:border-opacity-100 transition-all"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Previous Step
                </motion.button>
              )}

              {currentStep < journey.steps.length - 1 && (
                <motion.button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-8 py-3 bg-luxury-gold text-luxury-dark rounded-lg font-semibold hover:bg-luxury-gold-premium transition-all"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next Step →
                </motion.button>
              )}

              {currentStep === journey.steps.length - 1 && (
                <motion.button
                  className="px-8 py-3 bg-luxury-gold text-luxury-dark rounded-lg font-semibold hover:bg-luxury-gold-premium transition-all"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                </motion.button>
              )}
            </div>
          </motion.section>

          {/* Timeline Overview */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-3xl font-bold text-luxury-pearl text-center mb-12"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Complete Timeline
              </motion.h2>

              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {journey.steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="flex gap-6 items-start"
                    variants={staggerItem}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                      style={{
                        background: `${step.color}20`,
                        border: `2px solid ${step.color}`,
                        color: step.color,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Step info */}
                    <motion.div
                      className="flex-1 pt-2"
                      whileHover={{ x: 10 }}
                    >
                      <h3
                        className="text-lg font-bold text-luxury-pearl mb-1"
                        style={{ color: step.color }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-luxury-gray-light mb-2">
                        {step.description}
                      </p>
                      <p className="text-xs text-luxury-gray-light">
                        ⏱️ {step.duration}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Total Time Section */}
          <motion.section
            className="relative z-10 px-4 py-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-12 text-center">
              <motion.h2
                className="text-3xl font-bold text-luxury-pearl mb-4"
                variants={staggerItem}
              >
                From Start to Finish
              </motion.h2>

              <motion.p
                className="text-6xl font-bold text-luxury-gold mb-4"
                variants={staggerItem}
              >
                15-30 Minutes
              </motion.p>

              <motion.p
                className="text-lg text-luxury-gray-light"
                variants={staggerItem}
              >
                That's all it takes to go from idea to creation. Your {journey.productName} journey is fast, intuitive, and powerful.
              </motion.p>
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
