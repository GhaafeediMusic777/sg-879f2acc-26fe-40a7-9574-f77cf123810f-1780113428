import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArtistWorldBackground } from '@/components/ArtistWorldBackground'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { PageTransition } from '@/components/PageTransition'
import { ScrollReveal } from '@/components/ScrollReveal'
import { getArtistById } from '@/config/ai-artists-v2'
import { staggerContainer, staggerItem, luxuryFadeInUp } from '@/utils/motionDesign'

export default function ArtistProfileShowcasePage() {
  const router = useRouter()
  const { id } = router.query
  const artist = id ? getArtistById(id as string) : null
  const [selectedTab, setSelectedTab] = useState<'tracks' | 'samples' | 'story'>('tracks')

  if (!artist) {
    return <div>Artist not found</div>
  }

  return (
    <>
      <Head>
        <title>{artist.name} - AI Artist | Ghaafeedi Music</title>
        <meta name="description" content={artist.bio} />
      </Head>

      <PageTransition>
        <div className="min-h-screen bg-luxury-dark relative overflow-hidden">
          {/* Artist World Background */}
          <ArtistWorldBackground world={artist.world} interactive={true} />

          <LuxuryHeader />

          {/* Hero Section */}
          <motion.section
            className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Avatar */}
              <motion.div
                className="w-32 h-32 rounded-full border-4 mx-auto mb-8 overflow-hidden"
                variants={staggerItem}
                style={{
                  borderColor: artist.world.primaryColor,
                  background: artist.world.backgroundGradient,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-full h-full flex items-center justify-center text-7xl font-bold">
                  {artist.name.charAt(0)}
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-luxury-pearl mb-4"
                variants={staggerItem}
                style={{
                  color: artist.world.primaryColor,
                  textShadow: `0 0 30px ${artist.world.primaryColor}40`,
                }}
              >
                {artist.name}
              </motion.h1>

              {/* World theme */}
              <motion.p
                className="text-2xl text-luxury-gray-light mb-6"
                variants={staggerItem}
              >
                {artist.world.theme}
              </motion.p>

              {/* Bio */}
              <motion.p
                className="text-lg text-luxury-gray-light mb-8 leading-relaxed max-w-2xl mx-auto"
                variants={staggerItem}
              >
                {artist.bio}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex gap-6 justify-center flex-wrap"
                variants={staggerContainer}
              >
                <motion.div variants={staggerItem}>
                  <LuxuryButton variant="primary" size="lg">
                    Collaborate
                  </LuxuryButton>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <LuxuryButton variant="secondary" size="lg">
                    Listen Now
                  </LuxuryButton>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Stats Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { label: 'Followers', value: `${(artist.followers / 1000).toFixed(0)}K` },
                  { label: 'Total Plays', value: `${(artist.totalPlays / 1000000).toFixed(1)}M` },
                  { label: 'Tracks', value: artist.tracks.length },
                  { label: 'Collaborations', value: artist.collaborations.length },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-6 text-center"
                    whileHover={{
                      borderColor: artist.world.primaryColor,
                      boxShadow: `0 0 20px ${artist.world.primaryColor}40`,
                    }}
                  >
                    <p
                      className="text-3xl font-bold mb-2"
                      style={{ color: artist.world.primaryColor }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-luxury-gray-light">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Personality Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-luxury-pearl text-center mb-12"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Artist Personality
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Personality */}
                <motion.div
                  variants={staggerItem}
                  className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-8"
                  style={{
                    background: `linear-gradient(135deg, ${artist.world.primaryColor}15, ${artist.world.secondaryColor}15)`,
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: artist.world.primaryColor }}
                  >
                    Personality
                  </h3>
                  <p className="text-luxury-gray-light leading-relaxed">
                    {artist.personality}
                  </p>
                </motion.div>

                {/* Story */}
                <motion.div
                  variants={staggerItem}
                  className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-8"
                  style={{
                    background: `linear-gradient(135deg, ${artist.world.secondaryColor}15, ${artist.world.accentColor}15)`,
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: artist.world.secondaryColor }}
                  >
                    Character Story
                  </h3>
                  <p className="text-luxury-gray-light leading-relaxed">
                    {artist.story}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Genres and Moods */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Genres */}
                <motion.div variants={staggerItem}>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: artist.world.primaryColor }}
                  >
                    Genres
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {artist.genres.map((genre) => (
                      <span
                        key={genre}
                        className="px-4 py-2 rounded-full border-2 font-semibold"
                        style={{
                          borderColor: artist.world.primaryColor,
                          color: artist.world.primaryColor,
                        }}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Moods */}
                <motion.div variants={staggerItem}>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: artist.world.secondaryColor }}
                  >
                    Moods
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {artist.moods.map((mood) => (
                      <span
                        key={mood}
                        className="px-4 py-2 rounded-full border-2 font-semibold"
                        style={{
                          borderColor: artist.world.secondaryColor,
                          color: artist.world.secondaryColor,
                        }}
                      >
                        {mood}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Tabs Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-4xl mx-auto">
              {/* Tab buttons */}
              <motion.div
                className="flex gap-4 mb-12 justify-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {(['tracks', 'samples', 'story'] as const).map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className="px-6 py-3 rounded-lg font-semibold transition-all border-2"
                    variants={staggerItem}
                    style={{
                      borderColor: selectedTab === tab ? artist.world.primaryColor : 'transparent',
                      color: selectedTab === tab ? artist.world.primaryColor : 'rgb(150, 150, 150)',
                      background: selectedTab === tab ? `${artist.world.primaryColor}15` : 'transparent',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </motion.div>

              {/* Tracks Tab */}
              {selectedTab === 'tracks' && (
                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {artist.tracks.map((track, i) => (
                    <motion.div
                      key={track.id}
                      variants={staggerItem}
                      className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-lg p-4 flex items-center justify-between hover:border-opacity-100 transition-all"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-luxury-pearl">
                          {track.title}
                        </h4>
                        <p className="text-sm text-luxury-gray-light">
                          {track.genre} • {Math.floor(track.duration / 60)}:{String(track.duration % 60).padStart(2, '0')}
                        </p>
                      </div>
                      <div className="flex gap-6 text-right">
                        <div>
                          <p className="text-lg font-bold text-luxury-gold">
                            {(track.plays / 1000).toFixed(0)}K
                          </p>
                          <p className="text-xs text-luxury-gray-light">plays</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-luxury-gold">
                            {(track.likes / 1000).toFixed(0)}K
                          </p>
                          <p className="text-xs text-luxury-gray-light">likes</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Voice Samples Tab */}
              {selectedTab === 'samples' && (
                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {artist.voiceSamples.map((sample) => (
                    <motion.div
                      key={sample.id}
                      variants={staggerItem}
                      className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-luxury-pearl">
                            {sample.title}
                          </h4>
                          <p className="text-sm text-luxury-gray-light">
                            {sample.mood} • {sample.duration}s
                          </p>
                        </div>
                        <button
                          className="px-4 py-2 rounded-lg font-semibold"
                          style={{
                            background: artist.world.primaryColor,
                            color: '#0A0E27',
                          }}
                        >
                          ▶ Play
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Story Tab */}
              {selectedTab === 'story' && (
                <motion.div
                  className="bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-lg p-8"
                  variants={staggerItem}
                  initial="hidden"
                  animate="visible"
                  style={{
                    background: `linear-gradient(135deg, ${artist.world.primaryColor}15, ${artist.world.secondaryColor}15)`,
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: artist.world.primaryColor }}
                  >
                    The Story Behind {artist.name}
                  </h3>
                  <p className="text-luxury-gray-light leading-relaxed mb-6">
                    {artist.story}
                  </p>
                  <p className="text-luxury-gray-light leading-relaxed">
                    {artist.personality}
                  </p>
                </motion.div>
              )}
            </div>
          </ScrollReveal>

          {/* Collaborations */}
          {artist.collaborations.length > 0 && (
            <ScrollReveal className="relative z-10 px-4 py-20">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-3xl font-bold text-luxury-pearl text-center mb-8"
                  variants={luxuryFadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Collaborations
                </motion.h2>

                <motion.div
                  className="flex flex-wrap gap-4 justify-center"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {artist.collaborations.map((collab) => (
                    <motion.span
                      key={collab}
                      variants={staggerItem}
                      className="px-6 py-3 rounded-full border-2 font-semibold"
                      style={{
                        borderColor: artist.world.primaryColor,
                        color: artist.world.primaryColor,
                      }}
                    >
                      {collab}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          )}

          {/* Final CTA */}
          <motion.section
            className="relative z-10 px-4 py-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="max-w-2xl mx-auto rounded-2xl p-12 text-center border border-luxury-gold border-opacity-20"
              style={{
                background: `linear-gradient(135deg, ${artist.world.primaryColor}15, ${artist.world.secondaryColor}15)`,
              }}
            >
              <motion.h2
                className="text-3xl font-bold text-luxury-pearl mb-4"
                variants={staggerItem}
              >
                Ready to Collaborate?
              </motion.h2>

              <motion.p
                className="text-lg text-luxury-gray-light mb-8"
                variants={staggerItem}
              >
                Work with {artist.name} on your next project
              </motion.p>

              <motion.div variants={staggerItem}>
                <LuxuryButton variant="primary" size="lg">
                  Start Collaboration
                </LuxuryButton>
              </motion.div>
            </div>
          </motion.section>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}
