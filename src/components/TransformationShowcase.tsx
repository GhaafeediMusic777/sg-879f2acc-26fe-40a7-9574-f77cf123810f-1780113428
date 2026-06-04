import React from 'react'
import { motion } from 'framer-motion'
import { TransformationMetric } from '@/config/storytelling-v2'
import { staggerContainer, staggerItem } from '@/utils/motionDesign'

interface TransformationShowcaseProps {
  metrics: TransformationMetric[]
}

export const TransformationShowcase: React.FC<TransformationShowcaseProps> = ({
  metrics,
}) => {
  return (
    <motion.div
      className="py-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.h2
        className="text-4xl font-bold text-luxury-pearl text-center mb-12"
        variants={staggerItem}
      >
        Your Transformation Awaits
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            variants={staggerItem}
            className="relative"
          >
            {/* Card background */}
            <motion.div
              className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-8 h-full"
              whileHover={{
                borderColor: 'rgba(212, 175, 55, 0.8)',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {metric.icon}
              </motion.div>

              {/* Label */}
              <h3 className="text-lg font-bold text-luxury-pearl mb-6">
                {metric.label}
              </h3>

              {/* Before/After comparison */}
              <div className="space-y-4 mb-6">
                {/* Before */}
                <div>
                  <p className="text-xs text-luxury-gray-light mb-2">BEFORE</p>
                  <motion.p
                    className="text-xl text-luxury-gray-medium line-through"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {metric.before}
                  </motion.p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="flex items-center justify-center"
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="w-8 h-0.5 bg-luxury-gold" />
                  <div className="ml-2 text-luxury-gold">↓</div>
                </motion.div>

                {/* After */}
                <div>
                  <p className="text-xs text-luxury-gold mb-2">AFTER</p>
                  <motion.p
                    className="text-2xl font-bold text-luxury-gold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                  >
                    {metric.after}
                  </motion.p>
                </div>
              </div>

              {/* Improvement badge */}
              <motion.div
                className="inline-block px-4 py-2 bg-luxury-gold bg-opacity-10 border border-luxury-gold border-opacity-30 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
              >
                <p className="text-sm font-semibold text-luxury-gold">
                  {metric.improvement}
                </p>
              </motion.div>
            </motion.div>

            {/* Connecting line to next card (optional) */}
            {index < metrics.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-luxury-gold to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TransformationShowcase
