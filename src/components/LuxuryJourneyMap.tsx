import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/utils/motionDesign'

export interface JourneyStep {
  id: number
  title: string
  description: string
  icon: string
  details: string[]
  duration: string
  color: string
  glowColor: string
}

interface LuxuryJourneyMapProps {
  steps: JourneyStep[]
  onStepClick?: (stepId: number) => void
  currentStep?: number
}

export const LuxuryJourneyMap: React.FC<LuxuryJourneyMapProps> = ({
  steps,
  onStepClick,
  currentStep = 0,
}) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <div className="w-full py-16">
      {/* Main Journey Visualization */}
      <motion.div
        className="relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {steps.map((step, index) => {
            if (index === steps.length - 1) return null

            const isActive = index < currentStep
            const isNext = index === currentStep

            return (
              <motion.line
                key={`line-${index}`}
                x1={`${((index + 0.5) / steps.length) * 100}%`}
                y1="50%"
                x2={`${((index + 1.5) / steps.length) * 100}%`}
                y2="50%"
                stroke={isActive ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0.2)'}
                strokeWidth="2"
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{ opacity: 1, pathLength: 1 }}
                transition={{ delay: index * 0.2, duration: 1 }}
              />
            )
          })}
        </svg>

        {/* Steps Grid */}
        <div className="grid grid-cols-5 gap-4 relative z-10">
          {steps.map((step, index) => {
            const isActive = index <= currentStep
            const isCurrent = index === currentStep
            const isExpanded = expandedStep === step.id
            const isHovered = hoveredStep === step.id

            return (
              <motion.div
                key={step.id}
                variants={staggerItem}
                className="relative"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => {
                  setExpandedStep(isExpanded ? null : step.id)
                  onStepClick?.(step.id)
                }}
              >
                {/* Step container */}
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle, ${step.glowColor}, transparent)`,
                    }}
                    animate={{
                      opacity: isHovered ? 1 : isCurrent ? 0.6 : 0.2,
                      scale: isHovered ? 1.2 : isCurrent ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Step circle */}
                  <motion.div
                    className="relative bg-luxury-dark-secondary border-2 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center"
                    style={{
                      borderColor: isActive ? step.color : 'rgba(212, 175, 55, 0.2)',
                    }}
                    animate={{
                      borderColor: isHovered ? step.color : isActive ? step.color : 'rgba(212, 175, 55, 0.2)',
                      boxShadow: isHovered
                        ? `0 0 30px ${step.glowColor}`
                        : isCurrent
                          ? `0 0 20px ${step.glowColor}`
                          : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step number */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: step.color,
                        color: '#0A0E27',
                      }}
                      animate={{
                        scale: isHovered ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.id}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="text-4xl mb-3"
                      animate={{
                        scale: isHovered ? 1.2 : isCurrent ? 1.1 : 1,
                        rotate: isHovered ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-sm font-bold text-luxury-pearl mb-2"
                      animate={{
                        color: isHovered ? step.color : 'rgb(245, 242, 235)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.title}
                    </motion.h3>

                    {/* Duration */}
                    <motion.p
                      className="text-xs text-luxury-gray-light"
                      animate={{
                        opacity: isHovered ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.duration}
                    </motion.p>

                    {/* Active indicator */}
                    {isCurrent && (
                      <motion.div
                        className="absolute bottom-2 w-2 h-2 rounded-full"
                        style={{ background: step.color }}
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    )}
                  </motion.div>
                </motion.div>

                {/* Expanded details panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-64 bg-luxury-dark-secondary border border-luxury-gold border-opacity-30 rounded-2xl p-6 z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Arrow pointing up */}
                      <div
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-luxury-dark-secondary border-t border-l border-luxury-gold border-opacity-30 rotate-45"
                      />

                      {/* Content */}
                      <motion.div
                        className="relative z-10"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.h4
                          className="text-lg font-bold text-luxury-pearl mb-3"
                          style={{ color: step.color }}
                          variants={staggerItem}
                        >
                          {step.title}
                        </motion.h4>

                        <motion.p
                          className="text-sm text-luxury-gray-light mb-4"
                          variants={staggerItem}
                        >
                          {step.description}
                        </motion.p>

                        <motion.div
                          className="space-y-2"
                          variants={staggerContainer}
                        >
                          {step.details.map((detail, i) => (
                            <motion.div
                              key={i}
                              className="flex gap-2"
                              variants={staggerItem}
                            >
                              <span style={{ color: step.color }}>•</span>
                              <span className="text-xs text-luxury-gray-light">
                                {detail}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-2">
          {steps.map((step, index) => (
            <motion.button
              key={step.id}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                background: index <= currentStep ? 'rgba(212, 175, 55, 0.8)' : 'rgba(212, 175, 55, 0.2)',
              }}
              onClick={() => onStepClick?.(step.id)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default LuxuryJourneyMap
