import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FeaturedCinematicCard } from './CinematicProductCard'
import { ProductData } from '@/data/products'

interface CinemaGalleryProps {
  products: ProductData[]
  title: string
  description?: string
}

export function CinemaGallery({ products, title, description }: CinemaGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount)

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })

      setTimeout(checkScroll, 500)
    }
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  React.useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  return (
    <motion.section
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-luxury-pearl">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-luxury-gray-light max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>

        {/* Gallery Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <motion.button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-md transition-all duration-300"
              style={{
                background: 'rgba(212, 175, 55, 0.2)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 text-luxury-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
          )}

          {canScrollRight && (
            <motion.button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-md transition-all duration-300"
              style={{
                background: 'rgba(212, 175, 55, 0.2)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 text-luxury-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          )}

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'thin',
            }}
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0 w-full sm:w-96 lg:w-[500px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <FeaturedCinematicCard
                  id={product.id}
                  name={product.name}
                  tagline={product.tagline}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                  accentColor={product.accentColor}
                  badgeStyle={product.badgeStyle}
                  badgeText={product.badgeText}
                  outcomeDescription={product.outcomeDescription}
                  genre={product.genre}
                  deliveryTime={product.deliveryTime}
                  experienceLevel={product.experienceLevel}
                  format={product.format}
                  deliverables={product.deliverables}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
