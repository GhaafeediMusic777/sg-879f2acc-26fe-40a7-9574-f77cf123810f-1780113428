import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function ServerError() {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <>
      <Head>
        <title>500 - Server Error | Ghaafeedi Music</title>
        <meta name="description" content="An unexpected error occurred" />
        <meta name="robots" content="noindex" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          {/* Error Container */}
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl" />
                <AlertTriangle className="w-32 h-32 text-red-400 relative animate-bounce" />
              </div>
            </div>

            {/* Error Code */}
            <div>
              <h1 className="text-8xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
                500
              </h1>
              <p className="text-2xl font-bold text-gray-300">
                Server Error
              </p>
            </div>

            {/* Error Message */}
            <div className="space-y-3">
              <p className="text-lg text-gray-400">
                Oops! Something went wrong on our end.
              </p>
              <p className="text-gray-500">
                Our team has been notified and is working to fix this issue.
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-black-800 border border-red-500/30 rounded-lg p-6 text-left">
              <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                What happened:
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>An unexpected error occurred while processing your request</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Our technical team has been automatically notified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>We're working to resolve this as quickly as possible</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <button
                onClick={handleRefresh}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-black-800 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
              <Link
                href="/support"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-black-800 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
              >
                <AlertTriangle className="w-5 h-5" />
                Report Issue
              </Link>
            </div>

            {/* Status Info */}
            <div className="bg-black-900 border border-gold/20 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold text-gold">Status:</span> We're investigating this issue
              </p>
              <p className="text-xs text-gray-500">
                Check our <Link href="/support" className="text-gold hover:text-gold/80">support page</Link> for updates
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center text-xs text-gray-600">
            <p>Error Code: 500 | Status: Internal Server Error</p>
            <p className="mt-2">
              Need immediate assistance?{' '}
              <Link href="/support" className="text-gold hover:text-gold/80">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
