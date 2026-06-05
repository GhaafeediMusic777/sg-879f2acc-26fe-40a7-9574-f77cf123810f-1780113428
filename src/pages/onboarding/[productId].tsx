import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'
import { LuxuryInput } from '@/components/LuxuryInput'
import { PageTransition } from '@/components/PageTransition'
import { ScrollReveal } from '@/components/ScrollReveal'
import { staggerContainer, staggerItem, luxuryFadeInUp } from '@/utils/motionDesign'
import { getProductById } from '@/config/products-14-v2'

const ONBOARDING_STEPS = [
  {
    id: 1,
    title: 'Welcome',
    description: 'Let\'s get started on your journey',
  },
  {
    id: 2,
    title: 'Your Story',
    description: 'Tell us about your story or vision',
  },
  {
    id: 3,
    title: 'Preferences',
    description: 'Customize your experience',
  },
  {
    id: 4,
    title: 'Review',
    description: 'Review your selections',
  },
  {
    id: 5,
    title: 'Checkout',
    description: 'Complete your purchase',
  },
  {
    id: 6,
    title: 'Confirmation',
    description: 'Your journey begins!',
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const { productId, email } = router.query
  const product = productId ? getProductById(productId as string) : null

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    story: '',
    genre: 'cinematic',
    mood: 'emotional',
    duration: '5',
    email: typeof email === 'string' ? email : '',
    fullName: '',
  })

  if (!product) {
    return (
      <>
        <Head>
          <title>Onboarding - Ghaafeedi Music</title>
        </Head>
        <div className="min-h-screen bg-luxury-dark flex items-center justify-center">
          <LuxuryHeader />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-luxury-pearl mb-4">Product Not Found</h1>
            <Link href="/products-complete-v2">
              <LuxuryButton variant="primary">Back to Products</LuxuryButton>
            </Link>
          </div>
          <LuxuryFooter />
        </div>
      </>
    )
  }

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckout = () => {
    // Redirect to checkout with product and form data
    router.push(`/checkout?product=${productId}&email=${formData.email}`)
  }

  return (
    <>
      <Head>
        <title>{product.name} - Onboarding | Ghaafeedi Music</title>
        <meta name="description" content={`Get started with ${product.name}`} />
      </Head>

      <PageTransition>
        <div className="min-h-screen bg-luxury-dark">
          <LuxuryHeader />

          <div className="relative z-10 px-4 py-20 pt-32">
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <motion.div
                className="mb-12"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <div className="flex justify-between items-center mb-8">
                  {ONBOARDING_STEPS.map((step) => (
                    <motion.div
                      key={step.id}
                      className="flex flex-col items-center flex-1"
                      variants={staggerItem}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all ${
                          step.id <= currentStep
                            ? 'bg-luxury-gold text-luxury-dark'
                            : 'bg-luxury-gray-dark text-luxury-gray-light'
                        }`}
                      >
                        {step.id}
                      </div>
                      <p
                        className={`text-sm mt-2 text-center ${
                          step.id <= currentStep ? 'text-luxury-gold' : 'text-luxury-gray-light'
                        }`}
                      >
                        {step.title}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Line */}
                <div className="h-1 bg-luxury-gray-dark rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-luxury-gold"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(currentStep / 6) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Step Content */}
              <motion.div
                key={currentStep}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {currentStep === 1 && (
                  <LuxuryCard variant="elevated">
                    <div className="text-center">
                      <h2 className="text-4xl font-bold text-luxury-pearl mb-4">
                        Welcome to {product.name}
                      </h2>
                      <p className="text-xl text-luxury-gray-light mb-8">
                        {product.description}
                      </p>
                      <p className="text-lg text-luxury-gold mb-8">
                        Let's create something extraordinary together.
                      </p>
                    </div>
                  </LuxuryCard>
                )}

                {currentStep === 2 && (
                  <LuxuryCard variant="default">
                    <h2 className="text-3xl font-bold text-luxury-pearl mb-6">Tell Us Your Story</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-luxury-gold mb-2">Your Story / Vision</label>
                        <textarea
                          name="story"
                          value={formData.story}
                          onChange={handleInputChange}
                          placeholder="Share your story, emotions, or vision..."
                          className="w-full px-4 py-3 bg-luxury-gray-dark text-luxury-pearl rounded-lg border border-luxury-gold border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                          rows={6}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-luxury-gold mb-2">Genre</label>
                          <select
                            name="genre"
                            value={formData.genre}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-luxury-gray-dark text-luxury-pearl rounded-lg border border-luxury-gold border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                          >
                            <option value="cinematic">Cinematic</option>
                            <option value="emotional">Emotional</option>
                            <option value="epic">Epic</option>
                            <option value="ambient">Ambient</option>
                            <option value="uplifting">Uplifting</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-luxury-gold mb-2">Mood</label>
                          <select
                            name="mood"
                            value={formData.mood}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-luxury-gray-dark text-luxury-pearl rounded-lg border border-luxury-gold border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                          >
                            <option value="emotional">Emotional</option>
                            <option value="joyful">Joyful</option>
                            <option value="peaceful">Peaceful</option>
                            <option value="powerful">Powerful</option>
                            <option value="mysterious">Mysterious</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </LuxuryCard>
                )}

                {currentStep === 3 && (
                  <LuxuryCard variant="default">
                    <h2 className="text-3xl font-bold text-luxury-pearl mb-6">Customize Your Experience</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-luxury-gold mb-2">Duration</label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-luxury-gray-dark text-luxury-pearl rounded-lg border border-luxury-gold border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                        >
                          <option value="2">2 minutes</option>
                          <option value="5">5 minutes</option>
                          <option value="10">10 minutes</option>
                          <option value="20">20 minutes</option>
                        </select>
                      </div>
                      <div className="bg-luxury-gold bg-opacity-10 border border-luxury-gold border-opacity-30 rounded-lg p-4">
                        <p className="text-luxury-gold font-semibold mb-2">✓ Premium Features Included:</p>
                        <ul className="text-luxury-gray-light space-y-2">
                          <li>✓ AI emotional analysis</li>
                          <li>✓ Professional production</li>
                          <li>✓ Lifetime access</li>
                          <li>✓ Royalty-free licensing</li>
                        </ul>
                      </div>
                    </div>
                  </LuxuryCard>
                )}

                {currentStep === 4 && (
                  <LuxuryCard variant="default">
                    <h2 className="text-3xl font-bold text-luxury-pearl mb-6">Review Your Selection</h2>
                    <div className="space-y-4">
                      <div className="bg-luxury-gold bg-opacity-10 border border-luxury-gold border-opacity-30 rounded-lg p-4">
                        <p className="text-luxury-gold font-semibold mb-2">Product</p>
                        <p className="text-luxury-pearl">{product.name}</p>
                      </div>
                      <div className="bg-luxury-gold bg-opacity-10 border border-luxury-gold border-opacity-30 rounded-lg p-4">
                        <p className="text-luxury-gold font-semibold mb-2">Price</p>
                        <p className="text-2xl font-bold text-luxury-pearl">
                          ${product.price}
                          {product.period && <span className="text-lg">/{product.period}</span>}
                        </p>
                      </div>
                      <div className="bg-luxury-gold bg-opacity-10 border border-luxury-gold border-opacity-30 rounded-lg p-4">
                        <p className="text-luxury-gold font-semibold mb-2">Your Preferences</p>
                        <div className="text-luxury-pearl space-y-1">
                          <p>Genre: {formData.genre}</p>
                          <p>Mood: {formData.mood}</p>
                          <p>Duration: {formData.duration} minutes</p>
                        </div>
                      </div>
                    </div>
                  </LuxuryCard>
                )}

                {currentStep === 5 && (
                  <LuxuryCard variant="default">
                    <h2 className="text-3xl font-bold text-luxury-pearl mb-6">Complete Your Purchase</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-luxury-gold mb-2">Full Name</label>
                        <LuxuryInput
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-luxury-gold mb-2">Email Address</label>
                        <LuxuryInput
                          name="email"
                          type="email"
                          value={formData.email || ''}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="bg-luxury-gold bg-opacity-10 border border-luxury-gold border-opacity-30 rounded-lg p-4 flex gap-3">
                        <span className="text-2xl">🔒</span>
                        <div>
                          <p className="text-luxury-gold font-semibold">Secure Checkout</p>
                          <p className="text-luxury-gray-light text-sm">
                            SSL encrypted • PCI compliant • Money-back guarantee
                          </p>
                        </div>
                      </div>
                    </div>
                  </LuxuryCard>
                )}

                {currentStep === 6 && (
                  <LuxuryCard variant="elevated">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🎉</div>
                      <h2 className="text-4xl font-bold text-luxury-pearl mb-4">
                        You're All Set!
                      </h2>
                      <p className="text-xl text-luxury-gray-light mb-8">
                        Your journey with {product.name} is about to begin.
                      </p>
                      <p className="text-lg text-luxury-gold mb-8">
                        Check your email for next steps and get ready to create something extraordinary.
                      </p>
                    </div>
                  </LuxuryCard>
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <motion.div
                className="flex gap-4 justify-between"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={staggerItem}>
                  {currentStep > 1 && (
                    <LuxuryButton
                      variant="secondary"
                      size="lg"
                      onClick={handlePrevious}
                    >
                      Previous
                    </LuxuryButton>
                  )}
                </motion.div>

                <motion.div variants={staggerItem} className="ml-auto">
                  {currentStep < 5 && (
                    <LuxuryButton
                      variant="primary"
                      size="lg"
                      onClick={handleNext}
                    >
                      Next
                    </LuxuryButton>
                  )}
                  {currentStep === 5 && (
                    <LuxuryButton
                      variant="primary"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </LuxuryButton>
                  )}
                  {currentStep === 6 && (
                    <Link href="/consumer/dashboard">
                      <LuxuryButton
                        variant="primary"
                        size="lg"
                      >
                        Go to Dashboard
                      </LuxuryButton>
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600,
  }
}
