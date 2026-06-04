import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuxuryButton } from './LuxuryButton'
import { LuxuryCard } from './LuxuryCard'

interface Step {
  id: string
  title: string
  description: string
  icon: string
  content: React.ReactNode
}

interface OnboardingFlowProps {
  steps: Step[]
  onComplete: () => void
  productName: string
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({
  steps,
  onComplete,
  productName,
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [completed, setCompleted] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCompleted(true)
      onComplete()
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-premium flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-luxury-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-luxury-pearl mb-4">
          You're all set!
        </h2>
        <p className="text-luxury-gray-light mb-8">
          Your {productName} setup is complete. You can now start creating amazing content.
        </p>
        <LuxuryButton variant="primary" onClick={onComplete}>
          Start Creating
        </LuxuryButton>
      </motion.div>
    )
  }

  const step = steps[currentStep]

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-luxury-gray-light">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-luxury-gold font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-2 bg-luxury-dark-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-luxury-gold to-luxury-gold-premium"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex gap-2 justify-between">
        {steps.map((s, idx) => (
          <motion.div
            key={s.id}
            className={`flex-1 h-1 rounded-full transition-colors ${
              idx < currentStep
                ? 'bg-luxury-gold'
                : idx === currentStep
                ? 'bg-gradient-to-r from-luxury-gold to-luxury-gold-premium'
                : 'bg-luxury-dark-secondary'
            }`}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <LuxuryCard variant="glass" padding="lg">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h2 className="text-3xl font-bold text-luxury-pearl mb-2">
              {step.title}
            </h2>
            <p className="text-luxury-gray-light mb-8">
              {step.description}
            </p>
            <div className="mb-8">
              {step.content}
            </div>
          </LuxuryCard>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex gap-4 justify-between">
        <LuxuryButton
          variant="ghost"
          onClick={handlePrev}
          disabled={currentStep === 0}
        >
          ← Previous
        </LuxuryButton>

        <div className="flex gap-2">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentStep ? 'bg-luxury-gold' : 'bg-luxury-gray-dark'
              }`}
            />
          ))}
        </div>

        <LuxuryButton
          variant="primary"
          onClick={handleNext}
        >
          {currentStep === steps.length - 1 ? 'Complete' : 'Next →'}
        </LuxuryButton>
      </div>
    </div>
  )
}
