import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StoryArc, EMOTIONAL_COLORS, EMOTIONAL_TIMINGS } from '@/config/storytelling-v2'
import { luxuryFadeInUp, scaleIn } from '@/utils/motionDesign'
import { LuxuryButton } from './LuxuryButton'

interface EmotionalNarrativeProps {
  arc: StoryArc
  onNext?: () => void
  onPrevious?: () => void
  isActive: boolean
}

export const EmotionalNarrative: React.FC<EmotionalNarrativeProps> = ({
  arc,
  onNext,
  onPrevious,
  isActive,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={arc.phase}
          className="relative py-16 px-8 rounded-2xl border border-luxury-gold border-opacity-20 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${EMOTIONAL_COLORS[arc.emotion]}, rgba(10, 14, 39, 0.8))`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: EMOTIONAL_TIMINGS[arc.emotion] / 1000,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: `radial-gradient(circle at 50% 50%, ${EMOTIONAL_COLORS[arc.emotion]}, transparent)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon and phase */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              variants={luxuryFadeInUp}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="text-5xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {arc.icon}
              </motion.div>
              <div>
                <p className="text-sm text-luxury-gray-light uppercase tracking-widest">
                  {arc.emotion}
                </p>
                <h2 className="text-4xl font-bold text-luxury-pearl">
                  {arc.title}
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-luxury-gray-light mb-2"
              variants={luxuryFadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {arc.description}
            </motion.p>

            {/* Main content */}
            <motion.p
              className="text-2xl text-luxury-pearl font-light mb-8 leading-relaxed"
              variants={luxuryFadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              {arc.content}
            </motion.p>

            {/* Emotional indicator */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <div className="w-2 h-2 rounded-full bg-luxury-gold" />
              <p className="text-sm text-luxury-gray-light">
                You're feeling: <span className="text-luxury-gold font-semibold capitalize">{arc.emotion}</span>
              </p>
            </motion.div>

            {/* CTA and navigation */}
            <motion.div
              className="flex gap-4 items-center"
              variants={luxuryFadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              {onPrevious && (
                <LuxuryButton
                  variant="secondary"
                  onClick={onPrevious}
                >
                  ← Previous
                </LuxuryButton>
              )}

              {arc.cta && (
                <LuxuryButton
                  variant="primary"
                  onClick={onNext}
                >
                  {arc.cta} →
                </LuxuryButton>
              )}

              {onNext && !arc.cta && (
                <LuxuryButton
                  variant="primary"
                  onClick={onNext}
                >
                  Next →
                </LuxuryButton>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EmotionalNarrative
