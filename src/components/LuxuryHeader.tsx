import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { LuxuryButton } from './LuxuryButton'

export const LuxuryHeader: React.FC = () => {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products-v2', label: 'Products' },
    { href: '/marketplace/ai-artists-v2', label: 'AI Artists' },
    { href: '/consumer/dashboard', label: 'Dashboard' },
  ]

  const handleLogout = async () => {
    try {
      await logout()
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-dark bg-opacity-80 backdrop-blur-xl border-b border-luxury-gold border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-luxury-gold to-luxury-gold-premium flex items-center justify-center">
                <span className="text-luxury-dark font-bold text-lg">GM</span>
              </div>
              <span className="hidden sm:inline text-xl font-bold text-luxury-pearl">
                Ghaafeedi Music
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.a
                  whileHover={{ color: '#D4A574' }}
                  className={`text-sm font-medium transition-colors ${
                    router.pathname === link.href
                      ? 'text-luxury-gold'
                      : 'text-luxury-gray-light hover:text-luxury-gold'
                  }`}
                >
                  {link.label}
                </motion.a>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link href="/consumer/dashboard">
                  <LuxuryButton variant="ghost" size="sm">
                    Dashboard
                  </LuxuryButton>
                </Link>
                <LuxuryButton
                  variant="secondary"
                  size="sm"
                  onClick={handleLogout}
                >
                  Sign Out
                </LuxuryButton>
              </>
            ) : (
              <>
                <Link href="/auth/signin">
                  <LuxuryButton variant="ghost" size="sm">
                    Sign In
                  </LuxuryButton>
                </Link>
                <Link href="/auth/signup">
                  <LuxuryButton variant="primary" size="sm">
                    Get Started
                  </LuxuryButton>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-luxury-gold"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-luxury-gold border-opacity-10"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      router.pathname === link.href
                        ? 'bg-luxury-gold bg-opacity-10 text-luxury-gold'
                        : 'text-luxury-gray-light hover:bg-luxury-gold hover:bg-opacity-5'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-luxury-gold border-opacity-10">
              {user ? (
                <>
                  <Link href="/consumer/dashboard">
                    <LuxuryButton variant="ghost" size="sm" fullWidth>
                      Dashboard
                    </LuxuryButton>
                  </Link>
                  <LuxuryButton
                    variant="secondary"
                    size="sm"
                    fullWidth
                    onClick={() => {
                      handleLogout()
                      setMobileMenuOpen(false)
                    }}
                  >
                    Sign Out
                  </LuxuryButton>
                </>
              ) : (
                <>
                  <Link href="/auth/signin">
                    <LuxuryButton variant="ghost" size="sm" fullWidth>
                      Sign In
                    </LuxuryButton>
                  </Link>
                  <Link href="/auth/signup">
                    <LuxuryButton variant="primary" size="sm" fullWidth>
                      Get Started
                    </LuxuryButton>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}
