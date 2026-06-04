import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  life: number
}

export const CinematicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationIdRef = useRef<number>()

  // Initialize particles
  useEffect(() => {
    const particles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random() * 100 + 50,
      })
    }
    particlesRef.current = particles
  }, [])

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebula background
      drawNebula(ctx, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 0.5

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Regenerate dead particles
        if (particle.life <= 0) {
          particlesRef.current[index] = {
            id: particle.id,
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            life: Math.random() * 100 + 50,
          }
        }

        // Draw particle
        ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw glow
        ctx.strokeStyle = `rgba(212, 175, 55, ${particle.opacity * 0.5})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Draw lens flare at mouse position
      drawLensFlare(ctx, mousePosition.x, mousePosition.y)

      // Draw ambient light streaks
      drawLightStreaks(ctx, canvas.width, canvas.height)

      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [mousePosition])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30, 20, 60, 0.4) 0%, rgba(10, 14, 39, 1) 100%)',
        }}
      />
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        {/* Animated cosmic overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated nebula clouds */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(147, 112, 219, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Gold energy lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0)" />
              <stop offset="50%" stopColor="rgba(212, 175, 55, 0.8)" />
              <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
            </linearGradient>
          </defs>

          {/* Animated lines */}
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    </>
  )
}

// Draw nebula effect
function drawNebula(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const time = Date.now() * 0.0001

  // Create multiple nebula layers
  for (let i = 0; i < 5; i++) {
    const x = Math.sin(time + i) * width * 0.3 + width * 0.5
    const y = Math.cos(time * 0.7 + i) * height * 0.3 + height * 0.5

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 300)
    gradient.addColorStop(0, `rgba(212, 175, 55, ${0.1 - i * 0.02})`)
    gradient.addColorStop(0.5, `rgba(147, 112, 219, ${0.05 - i * 0.01})`)
    gradient.addColorStop(1, 'rgba(10, 14, 39, 0)')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }
}

// Draw lens flare effect
function drawLensFlare(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const flareSize = 80
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, flareSize)

  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
  gradient.addColorStop(0.3, 'rgba(212, 175, 55, 0.4)')
  gradient.addColorStop(1, 'rgba(212, 175, 55, 0)')

  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.arc(x, y, flareSize, 0, Math.PI * 2)
  ctx.fill()

  // Draw lens flare rays
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2
    const rayLength = 150

    ctx.strokeStyle = `rgba(212, 175, 55, ${0.3 - i * 0.05})`
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(
      x + Math.cos(angle) * rayLength,
      y + Math.sin(angle) * rayLength
    )
    ctx.stroke()
  }
}

// Draw ambient light streaks
function drawLightStreaks(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const time = Date.now() * 0.0002

  for (let i = 0; i < 3; i++) {
    const startX = Math.sin(time + i * 2) * width
    const startY = Math.cos(time * 0.5 + i * 2) * height

    const gradient = ctx.createLinearGradient(startX, startY, startX + 200, startY + 200)
    gradient.addColorStop(0, 'rgba(212, 175, 55, 0)')
    gradient.addColorStop(0.5, `rgba(212, 175, 55, ${0.1 - i * 0.02})`)
    gradient.addColorStop(1, 'rgba(212, 175, 55, 0)')

    ctx.fillStyle = gradient
    ctx.fillRect(startX, startY, 200, 200)
  }
}

export default CinematicBackground
