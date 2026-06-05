import React from 'react'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { CinematicHero } from '@/components/CinematicHero'
import { StoryBlocks } from '@/components/StoryBlocks'
import { TransformationTimeline } from '@/components/TransformationTimeline'
import { FeaturedMasterpiece } from '@/components/FeaturedMasterpiece'
import { CinematicProcess } from '@/components/CinematicProcess'
import { RealStories } from '@/components/RealStories'
import { CollectionsShowcase } from '@/components/CollectionsShowcase'
import { FinalCTA } from '@/components/FinalCTA'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      {/* Layered Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <LuxuryHeader />

        {/* SECTION 1: IMMERSIVE HERO */}
        <CinematicHero />

        {/* SECTION 2: THE STORY */}
        <StoryBlocks />

        {/* SECTION 3: THE TRANSFORMATION */}
        <TransformationTimeline />

        {/* SECTION 4: FEATURED MASTERPIECE */}
        <FeaturedMasterpiece />

        {/* SECTION 5: HOW IT WORKS */}
        <CinematicProcess />

        {/* SECTION 6: REAL STORIES */}
        <RealStories />

        {/* SECTION 7: COLLECTIONS */}
        <CollectionsShowcase />

        {/* SECTION 8: FINAL CTA */}
        <FinalCTA />

        <LuxuryFooter />
      </div>
    </div>
  )
}
