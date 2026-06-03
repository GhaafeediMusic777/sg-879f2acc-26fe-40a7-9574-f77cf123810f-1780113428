import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CheckCircle, Download, Share2, Home } from 'lucide-react'

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const [sessionId, setSessionId] = useState<string | null>(null)

  useEffect(() => {
    // Get session ID from URL query params
    if (router.query.session_id) {
      setSessionId(router.query.session_id as string)
    }
  }, [router.query])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-black-800 border border-gold/30 rounded-2xl p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-2xl" />
              <CheckCircle className="w-24 h-24 text-green-400 relative" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent mb-4">
            Payment Successful!
          </h1>

          {/* Message */}
          <p className="text-xl text-gray-300 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-gray-400 mb-8">
            Your order has been confirmed and you'll receive a confirmation email shortly.
          </p>

          {/* Session ID */}
          {sessionId && (
            <div className="mb-8 p-4 bg-black-900 border border-gold/20 rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Order ID</p>
              <p className="font-mono text-gold break-all">{sessionId}</p>
            </div>
          )}

          {/* What's Next */}
          <div className="mb-8 text-left bg-black-900 border border-gold/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gold mb-4">What's Next?</h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold/20 text-gold text-sm font-bold flex-shrink-0">1</span>
                <span>Check your email for the confirmation and download instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold/20 text-gold text-sm font-bold flex-shrink-0">2</span>
                <span>Access your content from your dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold/20 text-gold text-sm font-bold flex-shrink-0">3</span>
                <span>Download and share your creation with the world</span>
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/consumer/dashboard"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black-900 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
            >
              <Download className="w-5 h-5" />
              Download
            </Link>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Ghaafeedi Music',
                    text: 'I just created my cinematic masterpiece!',
                    url: window.location.href
                  })
                }
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black-900 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
            >
              <Home className="w-5 h-5" />
              Home
            </Link>
          </div>

          {/* Support */}
          <div className="p-4 bg-black-900 border border-gold/20 rounded-lg">
            <p className="text-sm text-gray-400">
              Need help? <Link href="/support" className="text-gold hover:text-gold/80">Contact our support team</Link>
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Verified by Dodo</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>Confirmation Sent</span>
          </div>
        </div>
      </div>
    </div>
  )
}
