import Link from 'next/link'
import { AlertCircle, Home, ShoppingCart } from 'lucide-react'

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Cancel Card */}
        <div className="bg-black-800 border border-gold/30 rounded-2xl p-12 text-center">
          {/* Cancel Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-2xl" />
              <AlertCircle className="w-24 h-24 text-amber-400 relative" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent mb-4">
            Payment Cancelled
          </h1>

          {/* Message */}
          <p className="text-xl text-gray-300 mb-2">
            Your payment was not completed
          </p>
          <p className="text-gray-400 mb-8">
            No charges have been made to your account. You can try again whenever you're ready.
          </p>

          {/* Reasons */}
          <div className="mb-8 text-left bg-black-900 border border-gold/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gold mb-4">Why was my payment cancelled?</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>You cancelled the payment during checkout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Your payment method was declined</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>The payment session expired</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>An error occurred during processing</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              Try Again
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black-900 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </div>

          {/* Troubleshooting */}
          <div className="p-4 bg-black-900 border border-gold/20 rounded-lg mb-8">
            <h4 className="font-semibold text-gold mb-2">Troubleshooting Tips</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Try a different payment method</li>
              <li>• Check your card details and expiration date</li>
              <li>• Ensure you have sufficient funds</li>
              <li>• Contact your bank if the issue persists</li>
            </ul>
          </div>

          {/* Support */}
          <div className="p-4 bg-black-900 border border-gold/20 rounded-lg">
            <p className="text-sm text-gray-400">
              Still having issues? <Link href="/support" className="text-gold hover:text-gold/80">Contact our support team</Link>
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>No Charges Made</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔄</span>
            <span>Try Again Anytime</span>
          </div>
        </div>
      </div>
    </div>
  )
}
