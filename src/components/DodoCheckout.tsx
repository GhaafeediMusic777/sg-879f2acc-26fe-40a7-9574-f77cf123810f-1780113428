import { useState } from 'react'
import { ShoppingCart, Loader, AlertCircle, CheckCircle } from 'lucide-react'

export interface CheckoutItem {
  id: string
  name: string
  price: number
  quantity: number
  description?: string
}

interface DodoCheckoutProps {
  items: CheckoutItem[]
  onSuccess?: (sessionId: string) => void
  onError?: (error: string) => void
  className?: string
  buttonText?: string
  showSummary?: boolean
}

export default function DodoCheckout({
  items,
  onSuccess,
  onError,
  className = '',
  buttonText = 'Proceed to Payment',
  showSummary = true
}: DodoCheckoutProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Calculate totals
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      // Call backend API to create Dodo checkout session
      const response = await fetch('/api/payments/dodo-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            description: item.description
          }))
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const data = await response.json()

      if (data.checkoutUrl) {
        // Redirect to Dodo checkout
        window.location.href = data.checkoutUrl
        onSuccess?.(data.sessionId)
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Summary */}
      {showSummary && (
        <div className="bg-black-800 border border-gold/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gold mb-4">Order Summary</h3>

          {/* Items */}
          <div className="space-y-3 mb-6 pb-6 border-b border-gold/20">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-300">{item.name}</p>
                  {item.quantity > 1 && (
                    <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                  )}
                </div>
                <p className="font-semibold text-gold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-gray-300">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-gray-300">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gold/20">
              <span className="font-bold text-gold">Total</span>
              <span className="font-bold text-2xl text-gold">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods Info */}
      <div className="bg-black-800 border border-gold/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gold mb-4">Payment Methods</h3>
        
        {/* Traditional & Digital Wallets */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-3 font-semibold">Traditional & Digital Wallets</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 p-3 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer">
              <span>💳</span>
              <span className="text-sm text-gray-300">Credit Card</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer">
              <span>🏦</span>
              <span className="text-sm text-gray-300">Debit Card</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer">
              <span>🍎</span>
              <span className="text-sm text-gray-300">Apple Pay</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer">
              <span>🔵</span>
              <span className="text-sm text-gray-300">Google Pay</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer">
              <span>🅿️</span>
              <span className="text-sm text-gray-300">PayPal</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer">
              <span>📱</span>
              <span className="text-sm text-gray-300">Venmo</span>
            </div>
          </div>
        </div>

        {/* Buy Now Pay Later (BNPL) */}
        <div className="mb-6 pb-6 border-b border-gold/20">
          <p className="text-sm text-gray-400 mb-3 font-semibold">Buy Now Pay Later</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-colors cursor-pointer">
              <span>🛍️</span>
              <span className="text-sm text-purple-300">Klarna</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-yellow-900/30 rounded-lg border border-yellow-500/30 hover:border-yellow-500/60 transition-colors cursor-pointer">
              <span>☀️</span>
              <span className="text-sm text-yellow-300">Sunbit</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-colors cursor-pointer">
              <span>✓</span>
              <span className="text-sm text-blue-300">Affirm</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-pink-900/30 rounded-lg border border-pink-500/30 hover:border-pink-500/60 transition-colors cursor-pointer">
              <span>📅</span>
              <span className="text-sm text-pink-300">Afterpay</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">💡 Split your purchase into interest-free installments</p>
        </div>

        {/* Other Methods */}
        <div>
          <p className="text-sm text-gray-400 mb-3 font-semibold">Other Methods</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 p-3 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer">
              <span>🏧</span>
              <span className="text-sm text-gray-300">Bank Transfer</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer">
              <span>₿</span>
              <span className="text-sm text-gray-300">Crypto</span>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-400">Payment Error</p>
            <p className="text-sm text-red-300">{error}</p>
          </div>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-400">Payment Successful</p>
            <p className="text-sm text-green-300">You will be redirected to the checkout page</p>
          </div>
        </div>
      )}

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={loading || items.length === 0}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5" />
            {buttonText}
          </>
        )}
      </button>

      {/* BNPL Info */}
      <div className="bg-black-900 border border-purple-500/30 rounded-lg p-4">
        <p className="text-sm text-purple-300 font-semibold mb-2">💜 Buy Now Pay Later</p>
        <p className="text-xs text-gray-400">
          Spread your payment with Klarna (4 payments), Sunbit (up to 12 months), Affirm (3+ payments), or Afterpay (4 payments) - all interest-free!
        </p>
      </div>

      {/* Security Info */}
      <p className="text-center text-sm text-gray-400">
        🔒 Your payment is secure and encrypted with Dodo Payment
      </p>
    </div>
  )
}
