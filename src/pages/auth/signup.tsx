import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryInput } from '@/components/LuxuryInput'
import { LuxuryCard } from '@/components/LuxuryCard'
import toast from 'react-hot-toast'

export default function SignUp() {
  const router = useRouter()
  const { signUp, signInGoogle } = useAuth()
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [role, setRole] = useState<'consumer' | 'label' | 'partner'>('consumer')
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    try {
      await signUp(
        formData.email,
        formData.password,
        role,
        formData.displayName
      )
      toast.success('Account created successfully!')
      router.push(`/onboarding/${role}`)
    } catch (error: any) {
      toast.error(error.message || 'Sign up failed')
      setErrors({ submit: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true)
    try {
      await signInGoogle(role)
      toast.success('Signed up with Google!')
      router.push(`/onboarding/${role}`)
    } catch (error: any) {
      toast.error(error.message || 'Google sign up failed')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark pt-24 pb-12">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-luxury-pearl mb-2">
            Join Ghaafeedi Music
          </h1>
          <p className="text-luxury-gray-light">
            Create your account to get started
          </p>
        </motion.div>

        <LuxuryCard variant="glass" padding="lg">
          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-luxury-gray-light mb-3">
                I am a:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['consumer', 'label', 'partner'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      role === r
                        ? 'bg-luxury-gold text-luxury-dark'
                        : 'bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 text-luxury-pearl hover:border-luxury-gold'
                    }`}
                  >
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <LuxuryInput
              label="Full Name"
              placeholder="Your name"
              value={formData.displayName}
              onChange={(e) =>
                setFormData({ ...formData, displayName: e.target.value })
              }
              error={errors.displayName}
              required
            />

            <LuxuryInput
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={errors.email}
              required
            />

            <LuxuryInput
              label="Password"
              type="password"
              placeholder="At least 8 characters"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              error={errors.password}
              required
            />

            <LuxuryInput
              label="Confirm Password"
              type="password"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              error={errors.confirmPassword}
              required
            />

            {errors.submit && (
              <div className="p-3 bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 rounded-lg text-red-400 text-sm">
                {errors.submit}
              </div>
            )}

            {/* Submit Button */}
            <LuxuryButton
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
            >
              Create Account
            </LuxuryButton>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-luxury-gold border-opacity-20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-luxury-dark-secondary text-luxury-gray-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign Up */}
            <LuxuryButton
              type="button"
              variant="outline"
              fullWidth
              onClick={handleGoogleSignUp}
              loading={googleLoading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </LuxuryButton>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-luxury-gray-medium text-sm mt-6">
            Already have an account?{' '}
            <Link href="/auth/signin">
              <a className="text-luxury-gold hover:text-luxury-gold-premium font-medium">
                Sign in
              </a>
            </Link>
          </p>
        </LuxuryCard>

        {/* Privacy Notice */}
        <p className="text-center text-luxury-gray-medium text-xs mt-6">
          By signing up, you agree to our{' '}
          <Link href="/terms-of-service">
            <a className="text-luxury-gold hover:text-luxury-gold-premium">
              Terms of Service
            </a>
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy">
            <a className="text-luxury-gold hover:text-luxury-gold-premium">
              Privacy Policy
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}
