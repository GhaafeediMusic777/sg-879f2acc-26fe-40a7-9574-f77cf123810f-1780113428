'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const CinematicAudioToggle: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Load preference from session storage
  useEffect(() => {
    setIsMounted(true)
    const savedPreference = sessionStorage.getItem('cinematicAudioEnabled')
    if (savedPreference === 'true') {
      setIsEnabled(true)
    }
  }, [])

  // Handle audio playback
  useEffect(() => {
    if (!isMounted || !audioRef.current) return

    if (isEnabled) {
      audioRef.current.volume = 0.08 // 8% volume
      audioRef.current.play().catch((err) => {
        console.log('Audio playback prevented:', err)
      })
      sessionStorage.setItem('cinematicAudioEnabled', 'true')
    } else {
      audioRef.current.pause()
      sessionStorage.setItem('cinematicAudioEnabled', 'false')
    }
  }, [isEnabled, isMounted])

  const toggleAudio = () => {
    setIsEnabled(!isEnabled)
  }

  if (!isMounted) return null

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        crossOrigin="anonymous"
      >
        {/* Orchestral ambience - using a data URL for a simple sine wave tone */}
        {/* In production, replace with actual orchestral audio file */}
        <source
          src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="
          type="audio/wav"
        />
      </audio>

      {/* Audio Toggle Button - Fixed Bottom Right */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={toggleAudio}
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button Background */}
          <div
            className={`relative w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
              isEnabled
                ? 'bg-luxury-gold/20 border-luxury-gold/60 shadow-lg shadow-luxury-gold/30'
                : 'bg-luxury-dark/60 border-luxury-gold/30 hover:border-luxury-gold/60'
            }`}
          >
            {/* Icon */}
            <motion.svg
              className="w-6 h-6 text-luxury-gold"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{
                opacity: isEnabled ? 1 : 0.6,
              }}
            >
              {isEnabled ? (
                // Speaker On Icon
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              ) : (
                // Speaker Muted Icon
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L21.714504,3.20787152 C21.5575352,2.42339735 20.6157225,1.77946707 19.8262514,2.10604706 L4.13399899,1.00636533 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              )}
            </motion.svg>
          </div>

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-3 whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-luxury-dark/90 backdrop-blur-md border border-luxury-gold/40 rounded-lg px-3 py-2 text-xs font-medium text-luxury-gold">
              {isEnabled ? 'Cinematic Experience: ON' : 'Enable Cinematic Experience'}
            </div>
          </motion.div>

          {/* Glow Effect When Active */}
          <AnimatePresence>
            {isEnabled && (
              <motion.div
                className="absolute inset-0 rounded-full bg-luxury-gold/20 pointer-events-none"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1.3, opacity: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  )
}
