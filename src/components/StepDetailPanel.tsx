import React from 'react'
import { motion } from 'framer-motion'
import { JourneyStep } from './LuxuryJourneyMap'
import { staggerContainer, staggerItem } from '@/utils/motionDesign'

interface StepDetailPanelProps {
  step: JourneyStep
  isActive: boolean
  onClose?: () => void
}

export const StepDetailPanel: React.FC<StepDetailPanelProps> = ({
  step,
  isActive,
  onClose,
}) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-8 mt-8"
        style={{
          background: `linear-gradient(135deg, ${step.glowColor}, rgba(10, 14, 39, 0.8))`,
        }}
        variants={staggerContainer}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-6"
          variants={staggerItem}
        >
          <div className="flex items-center gap-4">
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
              {step.icon}
            </motion.div>
            <div>
              <h2
                className="text-3xl font-bold text-luxury-pearl"
                style={{ color: step.color }}
              >
                {step.title}
              </h2>
              <p className="text-luxury-gray-light">Step {step.id}</p>
            </div>
          </div>

          {onClose && (
            <motion.button
              onClick={onClose}
              className="text-luxury-gray-light hover:text-luxury-gold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          )}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-luxury-gray-light mb-8 leading-relaxed"
          variants={staggerItem}
        >
          {step.description}
        </motion.p>

        {/* Details Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          variants={staggerContainer}
        >
          {step.details.map((detail, index) => (
            <motion.div
              key={index}
              className="flex gap-3"
              variants={staggerItem}
            >
              <motion.div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${step.color}20`,
                  border: `2px solid ${step.color}`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span style={{ color: step.color }}>✓</span>
              </motion.div>
              <div>
                <p className="text-luxury-pearl font-semibold">{detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Duration badge */}
        <motion.div
          className="inline-block px-4 py-2 rounded-full border"
          style={{
            background: `${step.color}10`,
            borderColor: step.color,
          }}
          variants={staggerItem}
        >
          <p className="text-sm font-semibold" style={{ color: step.color }}>
            ⏱️ {step.duration}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default StepDetailPanel
