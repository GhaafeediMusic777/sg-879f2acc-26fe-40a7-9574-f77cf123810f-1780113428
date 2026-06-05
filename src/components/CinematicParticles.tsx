import React, { useEffect, useRef } from 'react'

export const CinematicParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
      opacity: number
    }> = []

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: 0,
          maxLife: 3000 + Math.random() * 2000,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
    }

    // Animation loop
    let animationFrameId: number
    let lastParticleTime = 0

    const animate = (currentTime: number) => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create new particles occasionally
      if (currentTime - lastParticleTime > 500) {
        createParticles()
        lastParticleTime = currentTime
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life += 16 // ~60fps

        // Remove dead particles
        if (p.life > p.maxLife) {
          particles.splice(i, 1)
          continue
        }

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Calculate opacity based on life
        const lifeRatio = p.life / p.maxLife
        const opacity = p.opacity * (1 - lifeRatio * lifeRatio)

        // Draw particle with gold color
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.6 }}
    />
  )
}
