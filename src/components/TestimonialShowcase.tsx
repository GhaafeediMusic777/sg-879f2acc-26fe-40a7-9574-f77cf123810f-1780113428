import React from 'react'
import { motion } from 'framer-motion'
import { Testimonial } from '@/config/storytelling-v2'
import { staggerContainer, staggerItem } from '@/utils/motionDesign'

interface TestimonialShowcaseProps {
  testimonials: Testimonial[]
}

export const TestimonialShowcase: React.FC<TestimonialShowcaseProps> = ({
  testimonials,
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
        className="text-4xl font-bold text-luxury-pearl text-center mb-4"
        variants={staggerItem}
      >
        Creators Like You Are Transforming
      </motion.h2>

      <motion.p
        className="text-center text-luxury-gray-light mb-12 max-w-2xl mx-auto"
        variants={staggerItem}
      >
        See how real creators are using Ghaafeedi Music to build their empires
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            variants={staggerItem}
            className="relative"
          >
            {/* Testimonial card */}
            <motion.div
              className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-8 h-full"
              whileHover={{
                borderColor: 'rgba(212, 175, 55, 0.8)',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                y: -5,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Star rating */}
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                className="text-lg text-luxury-pearl mb-6 italic leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                "{testimonial.quote}"
              </motion.blockquote>

              {/* Transformation highlight */}
              <motion.div
                className="bg-luxury-gold bg-opacity-5 border border-luxury-gold border-opacity-20 rounded-lg p-4 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                <p className="text-sm text-luxury-gray-light mb-1">Their transformation:</p>
                <p className="text-luxury-gold font-semibold">
                  {testimonial.transformation}
                </p>
              </motion.div>

              {/* Author info */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {/* Avatar placeholder */}
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-premium flex items-center justify-center text-xl font-bold text-luxury-dark"
                  whileHover={{ scale: 1.1 }}
                >
                  {testimonial.name.charAt(0)}
                </motion.div>

                <div>
                  <p className="font-semibold text-luxury-pearl">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-luxury-gray-light">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Animated accent */}
            <motion.div
              className="absolute -top-2 -left-2 w-8 h-8 border-2 border-luxury-gold rounded-full opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TestimonialShowcase
