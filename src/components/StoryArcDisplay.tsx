import React from 'react'
import { motion } from 'framer-motion'
import { StoryArc, EMOTIONAL_COLORS, EMOTIONAL_TIMINGS } from '@/config/storytelling-v2'
import { staggerContainer, staggerItem } from '@/utils/motionDesign'

interface StoryArcDisplayProps {
  arcs: StoryArc[]
  onPhaseClick?: (phase: string) => void
}

export const StoryArcDisplay: React.FC<StoryArcDisplayProps> = ({
  arcs,
  onPhaseClick,
}) => {
  return (
    <div className="w-full py-16">
      {/* Story Arc Timeline */}
      <motion.div
        className="relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-luxury-gold via-luxury-gold-premium to-luxury-gold transform -translate-y-1/2" />

        {/* Story phases */}
        <div className="grid grid-cols-6 gap-4 relative z-10">
          {arcs.map((arc, index) => (
            <motion.div
              key={arc.phase}
              variants={staggerItem}
              onClick={() => onPhaseClick?.(arc.phase)}
              className="cursor-pointer"
            >
              {/* Phase circle */}
              <motion.div
                className="relative mb-8"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Outer glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: EMOTIONAL_COLORS[arc.emotion],
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: EMOTIONAL_TIMINGS[arc.emotion] / 1000,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Inner circle */}
                <motion.div
                  className="relative w-16 h-16 rounded-full bg-luxury-dark-secondary border-2 border-luxury-gold flex items-center justify-center text-3xl"
                  whileHover={{
                    boxShadow: `0 0 30px ${EMOTIONAL_COLORS[arc.emotion]}`,
                  }}
                >
                  {arc.icon}
                </motion.div>

                {/* Step number */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center text-xs font-bold text-luxury-dark"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>

              {/* Phase label */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                <h3 className="text-lg font-bold text-luxury-pearl mb-1">
                  {arc.title}
                </h3>
                <p className="text-xs text-luxury-gray-light">
                  {arc.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default StoryArcDisplay
