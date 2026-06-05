import { useState, useEffect } from 'react'
import Image from 'next/image'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { CinematicParticles } from '@/components/CinematicParticles'
import { AuroraGlow } from '@/components/AuroraGlow'
import { CinematicLoader } from '@/components/CinematicLoader'
import { CinematicAudioToggle } from '@/components/CinematicAudioToggle'

export default function ProductsPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const mockupImage = isMobile
    ? '/assets/mockups/mockup-products-mobile.png'
    : '/assets/mockups/mockup-products-desktop.png'

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      {/* Cinematic Loader */}
      <CinematicLoader duration={1800} />

      {/* Cinematic Particles */}
      <CinematicParticles />

      {/* Aurora Glow Effects */}
      <AuroraGlow />

      {/* Optional Cinematic Audio */}
      <CinematicAudioToggle />

      {/* Fixed Background Gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
        }}
      />

      {/* Header */}
      <div className="relative z-50">
        <LuxuryHeader />
      </div>

      {/* Main Content - Using Mockup as Production Asset */}
      <div className="relative z-10">
        {/* Full-page mockup image as authoritative design */}
        <div className="w-full">
          <Image
            src={mockupImage}
            alt="GHAAFEEDI MUSIC - Cinematic AI Products & Collections"
            width={isMobile ? 1440 : 2560}
            height={isMobile ? 2560 : 1440}
            priority
            quality={95}
            className="w-full h-auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-40">
        <LuxuryFooter />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
