import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { onboardingStep, onboardingProgress, staggerContainer, staggerItem } from '@/utils/motionDesign'
import { LuxuryButton } from './LuxuryButton'

interface OnboardingStep {
  id: number
  title: string
  description: string
  icon: string
  content: React.ReactNode
}

interface PremiumOnboardingProps {
  steps: OnboardingStep[]
  onComplete: () => void
  onSkip?: () => void
}

export const PremiumOnboarding: React.FC<PremiumOnboardingProps> = ({
  steps,
  onComplete,
  onSkip,
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const step = steps[currentStep]

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark flex items-center justify-center z-50">
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-2xl w-full mx-4">
        {/* Progress bar */}
        <motion.div
          className="mb-8 h-1 bg-luxury-dark-secondary rounded-full overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-luxury-gold to-luxury-gold-premium"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Step counter */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-luxury-gray-light text-sm">
            Step {currentStep + 1} of {steps.length}
          </p>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={onboardingStep}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-12 backdrop-blur-xl"
          >
            {/* Icon */}
            <motion.div
              className="text-6xl mb-6 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {step.icon}
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-4xl font-bold text-luxury-pearl text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {step.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-luxury-gray-light text-center mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {step.description}
            </motion.p>

            {/* Custom content */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {step.content}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {currentStep > 0 && (
                <motion.div variants={staggerItem}>
                  <LuxuryButton
                    variant="secondary"
                    onClick={handlePrevious}
                  >
                    Previous
                  </LuxuryButton>
                </motion.div>
              )}

              {onSkip && currentStep < steps.length - 1 && (
                <motion.div variants={staggerItem}>
                  <LuxuryButton
                    variant="ghost"
                    onClick={onSkip}
                  >
                    Skip
                  </LuxuryButton>
                </motion.div>
              )}

              <motion.div variants={staggerItem}>
                <LuxuryButton
                  variant="primary"
                  onClick={handleNext}
                >
                  {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                </LuxuryButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <motion.div
          className="flex gap-2 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {steps.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep
                  ? 'bg-luxury-gold w-8'
                  : 'bg-luxury-gray-medium hover:bg-luxury-gray-light'
              }`}
              onClick={() => setCurrentStep(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default PremiumOnboarding
