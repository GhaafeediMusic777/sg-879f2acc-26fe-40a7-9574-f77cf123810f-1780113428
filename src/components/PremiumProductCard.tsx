import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PremiumProductCardProps {
  id: string
  name: string
  description: string
  price: string
  rating: number
  image: string
  featured?: boolean
}

export const PremiumProductCard: React.FC<PremiumProductCardProps> = ({
  id,
  name,
  description,
  price,
  rating,
  image,
  featured = false,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <motion.div
        className="group relative rounded-3xl overflow-hidden bg-luxury-dark-secondary h-[500px] cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Poster Image - 60% of card height (300px) */}
        <div className="relative w-full h-[60%] overflow-hidden bg-luxury-dark">
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
              background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)`,
            }}
          />
        </div>

        {/* Content Section - 40% of card height */}
        <div className="relative h-[40%] p-6 flex flex-col justify-between bg-luxury-dark-secondary border-t border-luxury-gold border-opacity-20">
          {/* Title and Description */}
          <div>
            <h3 className="text-xl font-bold text-luxury-pearl mb-1 group-hover:text-luxury-gold transition-colors">
              {name}
            </h3>
            <p className="text-sm text-luxury-gray-light line-clamp-2">
              {description}
            </p>
          </div>

          {/* Price and Rating */}
          <div className="flex justify-between items-center pt-3 border-t border-luxury-gold border-opacity-20">
            <span className="text-lg font-bold text-luxury-gold">{price}</span>
            <span className="text-xs text-luxury-gray-light">{rating} / 5</span>
          </div>
        </div>

        {/* Hover Shadow Effect */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-luxury-lg transition-shadow duration-300"
          style={{
            boxShadow: '0 0 40px rgba(212,175,55,.25)',
          }}
        />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 px-4 py-2 bg-luxury-gold bg-opacity-90 text-luxury-dark text-xs font-bold rounded-full z-10">
            Featured
          </div>
        )}
      </motion.div>
    </Link>
  )
}
