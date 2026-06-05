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
  deliverables: string[]
  featured?: boolean
}

export const CinematicProductCard: React.FC<CinematicProductCardProps> = ({
  id,
  name,
  tagline,
  price,
  rating,
  image,
  accentColor,
  badgeStyle,
  badgeText,
  deliverables,
  featured = false,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <motion.div
        className="group relative rounded-3xl overflow-hidden bg-luxury-dark-secondary h-[600px] cursor-pointer"
        whileHover={{ y: -12 }}
        transition={{ duration: 0.3 }}
      >
        {/* Accent Glow Background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${accentColor}20 0%, transparent 70%)`,
          }}
        />

        {/* Poster Image - 55% of card height */}
        <div className="relative w-full h-[55%] overflow-hidden bg-luxury-dark">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />

          {/* Image Overlay Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)`,
            }}
          />

          {/* Badge */}
          <motion.div
            className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold z-10 ${badgeStyle}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {badgeText}
          </motion.div>
        </div>

        {/* Content Section - 45% of card height */}
        <div className="relative h-[45%] p-6 flex flex-col justify-between bg-luxury-dark-secondary border-t border-opacity-20"
          style={{ borderColor: accentColor }}>
          
          {/* Title and Tagline */}
          <div>
            <h3 className="text-lg font-bold text-luxury-pearl mb-1 group-hover:transition-colors"
              style={{ color: accentColor }}>
              {name}
            </h3>
            <p className="text-xs text-luxury-gray-light line-clamp-2 mb-3">
              {tagline}
            </p>

            {/* Deliverables Preview */}
            <div className="space-y-1 mb-3">
              {deliverables.slice(0, 2).map((item, idx) => (
                <p key={idx} className="text-xs text-luxury-gray-light flex items-start">
                  <span className="mr-2" style={{ color: accentColor }}>✓</span>
                  <span className="line-clamp-1">{item}</span>
                </p>
              ))}
              {deliverables.length > 2 && (
                <p className="text-xs text-luxury-gray-light italic">
                  +{deliverables.length - 2} more
                </p>
              )}
            </div>
          </div>

          {/* Price and Rating */}
          <div className="flex justify-between items-center pt-3 border-t border-opacity-20"
            style={{ borderColor: accentColor }}>
            <span className="text-lg font-bold" style={{ color: accentColor }}>{price}</span>
            <span className="text-xs text-luxury-gray-light">{rating} / 5</span>
          </div>
        </div>

        {/* Hover Shadow Effect */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-luxury-lg transition-shadow duration-300"
          style={{
            boxShadow: `0 0 40px ${accentColor}40`,
          }}
        />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-luxury-gold bg-opacity-90 text-luxury-dark text-xs font-bold rounded-full z-10">
            Featured
          </div>
        )}
      </motion.div>
    </Link>
  )
}
