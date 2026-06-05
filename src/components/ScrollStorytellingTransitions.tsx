import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollTransitionProps {
  sectionId: string
  sectionName: string
}

export const ScrollStorytellingTransitions: React.FC<ScrollTransitionProps> = ({
  sectionId,
  sectionName,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Animate gold line from left to right
  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  // Animate glow intensity
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0])

  // Animate reveal effect
  const revealY = useTransform(scrollYProgress, [0, 0.5], [20, 0])
  const revealOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div ref={ref} className="relative w-full py-8 md:py-12">
      {/* Gold Line Animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent"
        style={{
          scaleX,
          transformOrigin: 'left',
          opacity,
        }}
      />

      {/* Soft Glow Effect */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-32 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
          opacity,
          transform: 'translateX(-50%)',
        }}
      />

      {/* Section Label Reveal */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        style={{
          y: revealY,
          opacity: revealOpacity,
        }}
      >
        <div className="text-center">
          <p className="text-luxury-gold text-xs md:text-sm font-semibold tracking-widest uppercase">
            {sectionName}
          </p>
        </div>
      </motion.div>

      {/* Depth Layer - Parallax Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.02) 0%, transparent 100%)',
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.3]),
        }}
      />
    </div>
  )
}

/**
 * Section Transition Wrapper
 * Wraps sections to add cinematic transition effects
 */
export const SectionTransitionWrapper: React.FC<{
  children: React.ReactNode
  sectionId: string
  sectionName: string
}> = ({ children, sectionId, sectionName }) => {
  return (
    <section id={sectionId} className="relative">
      <ScrollStorytellingTransitions sectionId={sectionId} sectionName={sectionName} />
      {children}
    </section>
  )
}
