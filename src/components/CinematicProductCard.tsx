import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CinematicProductCardProps {
  id: string
  name: string
  tagline: string
  price: string
  rating: number
  image: string
  accentColor: string
  badgeStyle: string
  badgeText: string
  outcomeDescription: string
  genre: string
  deliveryTime: string
  experienceLevel: 'Essential' | 'Premium' | 'Elite'
  format: string
  deliverables: string[]
  featured?: boolean
}

export function CinematicProductCard({
  id,
  name,
  tagline,
  price,
  rating,
  image,
  accentColor,
  badgeStyle,
  badgeText,
  outcomeDescription,
  genre,
  deliveryTime,
  experienceLevel,
  format,
  deliverables,
  featured = false,
}: CinematicProductCardProps) {
  const experienceLevelColor = {
    Essential: '#06B6D4',
    Premium: '#8B5CF6',
    Elite: '#7C3AED',
  }

  return (
    <Link href={`/products/${id}`}>
      <motion.div
        className="group relative rounded-2xl overflow-hidden h-full cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <div
          className="absolute -inset-8 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${accentColor}40 0%, transparent 70%)`,
            filter: 'blur(40px)',
            zIndex: -1,
          }}
        />

        {/* Card Container */}
        <div
          className="relative h-full rounded-2xl overflow-hidden border border-opacity-30 transition-all duration-300 group-hover:border-opacity-60"
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)`,
            borderColor: accentColor,
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Image Section (55% of card) */}
          <div className="relative h-[55%] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Image Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)`,
              }}
            />

            {/* Accent Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: `inset 0 0 40px ${accentColor}30`,
              }}
            />

            {/* Badge */}
            <div className="absolute top-4 right-4 flex gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${badgeStyle}`}
              >
                {badgeText}
              </span>
            </div>

            {/* Rating */}
            <div className="absolute top-4 left-4 flex items-center gap-1">
              <span
                className="text-sm font-bold px-2 py-1 rounded-full"
                style={{
                  background: `${accentColor}30`,
                  color: accentColor,
                }}
              >
                {rating}
              </span>
            </div>
          </div>

          {/* Content Section (45% of card) */}
          <div className="relative h-[45%] p-5 sm:p-6 flex flex-col justify-between">
            {/* Title & Tagline */}
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-luxury-pearl mb-1 line-clamp-2">
                {name}
              </h3>
              <p className="text-xs sm:text-sm text-luxury-gray-light line-clamp-1">
                {tagline}
              </p>
            </div>

            {/* Cinematic Metadata */}
            <div className="mb-4 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-luxury-gray-light">Genre:</span>
                <span className="text-luxury-pearl font-semibold">{genre}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-luxury-gray-light">Delivery:</span>
                <span className="text-luxury-pearl font-semibold">{deliveryTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-luxury-gray-light">Level:</span>
                <span
                  className="font-semibold px-2 py-0.5 rounded text-xs"
                  style={{
                    background: `${experienceLevelColor[experienceLevel]}20`,
                    color: experienceLevelColor[experienceLevel],
                  }}
                >
                  {experienceLevel}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="pt-3 border-t border-opacity-20" style={{ borderColor: accentColor }}>
              <span
                className="text-lg sm:text-xl font-bold"
                style={{ color: accentColor }}
              >
                {price}
              </span>
            </div>
          </div>

          {/* Hover Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${accentColor}20 0%, ${accentColor}10 100%)`,
            }}
          >
            <div className="text-center">
              <p className="text-luxury-pearl font-semibold text-sm">Explore Experience</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

// Featured Card Variant (for carousel)
export function FeaturedCinematicCard({
  id,
  name,
  tagline,
  price,
  rating,
  image,
  accentColor,
  badgeStyle,
  badgeText,
  outcomeDescription,
  genre,
  deliveryTime,
  experienceLevel,
  format,
  deliverables,
}: CinematicProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <motion.div
        className="group relative rounded-3xl overflow-hidden cursor-pointer h-96 sm:h-[500px]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <div
          className="absolute -inset-12 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${accentColor}50 0%, transparent 70%)`,
            filter: 'blur(60px)',
            zIndex: -1,
          }}
        />

        {/* Background Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)`,
          }}
        />

        {/* Accent Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 80px ${accentColor}40`,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          {/* Top Section */}
          <div>
            <span
              className={`inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase ${badgeStyle} mb-4`}
            >
              {badgeText}
            </span>
          </div>

          {/* Bottom Section */}
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold text-luxury-pearl mb-3">
              {name}
            </h3>
            <p className="text-lg text-luxury-gray-light mb-6 max-w-2xl">
              {outcomeDescription}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-luxury-gray-light mb-1">Starting at</p>
                <p
                  className="text-3xl font-bold"
                  style={{ color: accentColor }}
                >
                  {price}
                </p>
              </div>
              <div
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${accentColor}30`,
                  color: accentColor,
                  border: `2px solid ${accentColor}`,
                }}
              >
                Explore
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
