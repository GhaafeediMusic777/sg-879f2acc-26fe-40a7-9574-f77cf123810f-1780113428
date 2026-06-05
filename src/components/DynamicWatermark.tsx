import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const watermarkWords = ['DREAMS', 'LEGACY', 'LOVE', 'MEMORY', 'STORY', 'HEALING', 'FUTURE', 'MUSIC']

export function DynamicWatermark() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % watermarkWords.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none flex items-center justify-center"
      style={{ zIndex: 1 }}
    >
      <motion.div
        key={currentWord}
        className="text-center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 0.04, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -50 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: 'clamp(200px, 40vw, 800px)',
          fontWeight: 900,
          letterSpacing: '0.1em',
          color: 'rgba(212, 175, 55, 0.08)',
          textShadow: '0 0 200px rgba(212, 175, 55, 0.15)',
          filter: 'blur(4px)',
          whiteSpace: 'nowrap',
          fontFamily: 'Georgia, serif',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {watermarkWords[currentWord]}
      </motion.div>
    </motion.div>
  )
}
