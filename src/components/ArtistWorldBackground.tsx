import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArtistWorld } from '@/config/ai-artists-v2'

interface ArtistWorldBackgroundProps {
  world: ArtistWorld
  interactive?: boolean
}

export const ArtistWorldBackground: React.FC<ArtistWorldBackgroundProps> = ({
  world,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system
    const particles: Particle[] = []
    let animationId: number

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      life: number
      maxLife: number
      canvasContext: CanvasRenderingContext2D
      canvasWidth: number
      canvasHeight: number

      constructor(canvasContext: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
        this.canvasContext = canvasContext
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 1
        this.life = 1
        this.maxLife = Math.random() * 3 + 2
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life -= 1 / (this.maxLife * 60)

        // Wrap around edges
        if (this.x < 0) this.x = this.canvasWidth
        if (this.x > this.canvasWidth) this.x = 0
        if (this.y < 0) this.y = this.canvasHeight
        if (this.y > this.canvasHeight) this.y = 0
      }

      draw() {
        this.canvasContext.fillStyle = world.particleColor.replace('0.6', String(this.life * 0.6))
        this.canvasContext.beginPath()
        this.canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.canvasContext.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(ctx, canvas.width, canvas.height))
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = world.backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      const colors = world.backgroundGradient.match(/rgba?\([^)]+\)/g) || []
      if (colors.length >= 2) {
        gradient.addColorStop(0, colors[0] || world.backgroundColor)
        gradient.addColorStop(1, colors[1] || world.primaryColor)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update()
        particle.draw()

        if (particle.life <= 0) {
          particles[index] = new Particle(ctx, canvas.width, canvas.height)
        }
      })

      // Draw interactive lens flare if enabled
      if (interactive) {
        const flareSize = 50
        const flareGradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          flareSize
        )
        flareGradient.addColorStop(0, world.visualizerColor.replace('0.8', '0.3'))
        flareGradient.addColorStop(1, world.visualizerColor.replace('0.8', '0'))
        ctx.fillStyle = flareGradient
        ctx.fillRect(
          mouseRef.current.x - flareSize,
          mouseRef.current.y - flareSize,
          flareSize * 2,
          flareSize * 2
        )
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [world, interactive])

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: world.backgroundColor,
        }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: world.backgroundGradient,
          opacity: 0.3,
        }}
      />
    </div>
  )
}

export default ArtistWorldBackground
