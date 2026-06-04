import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArtistProfile } from '@/config/ai-artists-v2'
import { staggerItem } from '@/utils/motionDesign'

interface ArtistDiscoveryCardProps {
  artist: ArtistProfile
  onHover?: (artistId: string) => void
}

export const ArtistDiscoveryCard: React.FC<ArtistDiscoveryCardProps> = ({
  artist,
  onHover,
}) => {
  return (
    <Link href={`/marketplace/ai-artist/${artist.id}`}>
      <motion.div
        className="group cursor-pointer h-full"
        variants={staggerItem}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => onHover?.(artist.id)}
      >
        <div className="relative bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl overflow-hidden h-full flex flex-col">
          {/* Background glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle, ${artist.world.primaryColor}, transparent)`,
            }}
          />

          {/* Banner */}
          <div
            className="relative h-32 overflow-hidden"
            style={{
              background: artist.world.backgroundGradient,
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: `radial-gradient(circle at 50% 50%, ${artist.world.primaryColor}, transparent)`,
                opacity: 0.3,
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 p-6 flex flex-col">
            {/* Avatar */}
            <motion.div
              className="w-16 h-16 rounded-full border-4 border-luxury-gold -mt-8 mb-4 overflow-hidden bg-luxury-dark"
              whileHover={{ scale: 1.1 }}
              style={{
                borderColor: artist.world.primaryColor,
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-3xl font-bold"
                style={{
                  background: artist.world.backgroundGradient,
                  color: artist.world.primaryColor,
                }}
              >
                {artist.name.charAt(0)}
              </div>
            </motion.div>

            {/* Name and role */}
            <h3 className="text-xl font-bold text-luxury-pearl mb-1">
              {artist.name}
            </h3>
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: artist.world.primaryColor }}
            >
              AI Artist
            </p>

            {/* Bio snippet */}
            <p className="text-xs text-luxury-gray-light mb-4 line-clamp-2">
              {artist.bio}
            </p>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-4">
              {artist.genres.slice(0, 2).map((genre) => (
                <span
                  key={genre}
                  className="text-xs px-2 py-1 rounded-full border"
                  style={{
                    borderColor: artist.world.primaryColor,
                    color: artist.world.primaryColor,
                  }}
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-4 text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg"
                style={{
                  background: `${artist.world.primaryColor}15`,
                }}
              >
                <p
                  className="text-lg font-bold"
                  style={{ color: artist.world.primaryColor }}
                >
                  {(artist.followers / 1000).toFixed(0)}K
                </p>
                <p className="text-xs text-luxury-gray-light">Followers</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg"
                style={{
                  background: `${artist.world.secondaryColor}15`,
                }}
              >
                <p
                  className="text-lg font-bold"
                  style={{ color: artist.world.secondaryColor }}
                >
                  {(artist.totalPlays / 1000000).toFixed(1)}M
                </p>
                <p className="text-xs text-luxury-gray-light">Plays</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg"
                style={{
                  background: `${artist.world.accentColor}15`,
                }}
              >
                <p
                  className="text-lg font-bold"
                  style={{ color: artist.world.accentColor }}
                >
                  {artist.tracks.length}
                </p>
                <p className="text-xs text-luxury-gray-light">Tracks</p>
              </motion.div>
            </div>

            {/* Featured track */}
            {artist.featuredRelease && (
              <motion.div
                className="mt-auto p-3 rounded-lg border border-luxury-gold border-opacity-20 bg-luxury-dark"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xs text-luxury-gray-light mb-1">Featured</p>
                <p className="text-sm font-semibold text-luxury-pearl line-clamp-1">
                  {artist.featuredRelease.title}
                </p>
                <p className="text-xs text-luxury-gray-light">
                  {(artist.featuredRelease.plays / 1000).toFixed(0)}K plays
                </p>
              </motion.div>
            )}
          </div>

          {/* Hover CTA */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button
              className="px-6 py-3 rounded-lg font-semibold"
              style={{
                background: artist.world.primaryColor,
                color: '#0A0E27',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Artist
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ArtistDiscoveryCard
