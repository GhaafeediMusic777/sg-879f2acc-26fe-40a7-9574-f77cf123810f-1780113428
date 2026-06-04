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
import { staggerContainer, staggerItem, luxuryFadeInUp } from '@/utils/motionDesign'
import { getProductById } from '@/config/products-14-v2'

export default function CheckoutPage() {
  const router = useRouter()
  const { product: productId, email } = router.query
  const product = productId ? getProductById(productId as string) : null

  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    fullName: '',
    email: typeof email === 'string' ? email : '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  if (!product) {
    return (
      <>
        <Head>
          <title>Checkout - Ghaafeedi Music</title>
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Simulate Dodo Payments integration
      // In production, this would call your backend API which integrates with Dodo Payments
      const response = await fetch('/api/payments/dodo-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          amount: product.price,
          currency: 'USD',
          email: formData.email,
          fullName: formData.fullName,
          paymentMethod,
          cardData: paymentMethod === 'card' ? {
            cardNumber: formData.cardNumber,
            expiryDate: formData.expiryDate,
            cvv: formData.cvv,
          } : null,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        // Redirect to success page
        router.push(`/checkout/success?orderId=${data.orderId}`)
      } else {
        alert('Payment failed. Please try again.')
        setIsProcessing(false)
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('An error occurred. Please try again.')
      setIsProcessing(false)
    }
  }

  return (
    <>
      <Head>
        <title>Checkout - {product.name} | Ghaafeedi Music</title>
        <meta name="description" content={`Complete your purchase of ${product.name}`} />
      </Head>

      <PageTransition>
        <div className="min-h-screen bg-luxury-dark">
          <LuxuryHeader />

          <div className="relative z-10 px-4 py-20 pt-32">
            <div className="max-w-6xl mx-auto">
              <motion.h1
                className="text-5xl font-bold text-luxury-pearl mb-12 text-center"
                variants={staggerItem}
                initial="hidden"
                animate="visible"
              >
                Complete Your Purchase
              </motion.h1>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <motion.div
                  className="lg:col-span-2"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <LuxuryCard variant="default">
                    <form onSubmit={handlePayment} className="space-y-6">
                      {/* Billing Information */}
                      <div>
                        <h2 className="text-2xl font-bold text-luxury-pearl mb-4">Billing Information</h2>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-luxury-gold mb-2">Full Name</label>
                            <LuxuryInput
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="Your full name"
                              required
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
                            required
                          />
                          </div>
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div>
                        <h2 className="text-2xl font-bold text-luxury-pearl mb-4">Payment Method</h2>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3 p-4 border border-luxury-gold border-opacity-30 rounded-lg cursor-pointer hover:bg-luxury-gold hover:bg-opacity-10 transition-all">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="card"
                              checked={paymentMethod === 'card'}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              className="w-4 h-4"
                            />
                            <span className="text-luxury-pearl font-semibold">Credit/Debit Card</span>
                          </label>
                          <label className="flex items-center gap-3 p-4 border border-luxury-gold border-opacity-30 rounded-lg cursor-pointer hover:bg-luxury-gold hover:bg-opacity-10 transition-all">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="wallet"
                              checked={paymentMethod === 'wallet'}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              className="w-4 h-4"
                            />
                            <span className="text-luxury-pearl font-semibold">Digital Wallet</span>
                          </label>
                        </div>
                      </div>

                      {/* Card Details */}
                      {paymentMethod === 'card' && (
                        <div>
                          <h2 className="text-2xl font-bold text-luxury-pearl mb-4">Card Details</h2>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-luxury-gold mb-2">Cardholder Name</label>
                              <LuxuryInput
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleInputChange}
                                placeholder="Name on card"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-luxury-gold mb-2">Card Number</label>
                              <LuxuryInput
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                placeholder="1234 5678 9012 3456"
                                required
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-luxury-gold mb-2">Expiry Date</label>
                                <LuxuryInput
                                  name="expiryDate"
                                  value={formData.expiryDate}
                                  onChange={handleInputChange}
                                  placeholder="MM/YY"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-luxury-gold mb-2">CVV</label>
                                <LuxuryInput
                                  name="cvv"
                                  value={formData.cvv}
                                  onChange={handleInputChange}
                                  placeholder="123"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Security Info */}
                      <div className="bg-luxury-gold bg-opacity-10 border border-luxury-gold border-opacity-30 rounded-lg p-4 flex gap-3">
                        <span className="text-2xl">🔒</span>
                        <div>
                          <p className="text-luxury-gold font-semibold">Secure Payment</p>
                          <p className="text-luxury-gray-light text-sm">
                            SSL encrypted • PCI DSS compliant • Your data is safe
                          </p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.div variants={staggerItem}>
                        <LuxuryButton
                          variant="primary"
                          size="lg"
                          type="submit"
                          disabled={isProcessing}
                          className="w-full"
                        >
                          {isProcessing ? 'Processing...' : `Pay $${product.price}`}
                        </LuxuryButton>
                      </motion.div>
                    </form>
                  </LuxuryCard>
                </motion.div>

                {/* Order Summary */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <LuxuryCard variant="elevated">
                    <h2 className="text-2xl font-bold text-luxury-pearl mb-6">Order Summary</h2>

                    <div className="space-y-4 mb-6 pb-6 border-b border-luxury-gold border-opacity-30">
                      <div className="flex items-start gap-3">
                        <span className="text-4xl">{product.icon}</span>
                        <div className="flex-1">
                          <p className="font-semibold text-luxury-pearl">{product.name}</p>
                          <p className="text-sm text-luxury-gray-light">{product.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Breakdown */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-luxury-gold border-opacity-30">
                      <div className="flex justify-between">
                        <span className="text-luxury-gray-light">Subtotal</span>
                        <span className="text-luxury-pearl font-semibold">${product.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-luxury-gray-light">Tax</span>
                        <span className="text-luxury-pearl font-semibold">$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-luxury-gray-light">Shipping</span>
                        <span className="text-luxury-pearl font-semibold">Free</span>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-luxury-pearl">Total</span>
                        <span className="text-3xl font-bold text-luxury-gold">${product.price}</span>
                      </div>
                    </div>

                    {/* Guarantees */}
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <span className="text-luxury-gold">✓</span>
                        <p className="text-sm text-luxury-gray-light">30-day money-back guarantee</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-luxury-gold">✓</span>
                        <p className="text-sm text-luxury-gray-light">Lifetime access to your creation</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-luxury-gold">✓</span>
                        <p className="text-sm text-luxury-gray-light">24/7 customer support</p>
                      </div>
                    </div>
                  </LuxuryCard>
                </motion.div>
              </div>
            </div>
          </div>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}
