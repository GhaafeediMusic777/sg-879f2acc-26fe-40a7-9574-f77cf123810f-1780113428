import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Home, Search, AlertCircle } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Ghaafeedi Music</title>
        <meta name="description" content="The page you're looking for doesn't exist" />
        <meta name="robots" content="noindex" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          {/* 404 Container */}
          <div className="text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl" />
                <AlertCircle className="w-32 h-32 text-gold relative animate-pulse" />
              </div>
            </div>

            {/* Error Code */}
            <div>
              <h1 className="text-8xl font-black bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent mb-4">
                404
              </h1>
              <p className="text-2xl font-bold text-gray-300">
                Page Not Found
              </p>
            </div>

            {/* Error Message */}
            <div className="space-y-3">
              <p className="text-lg text-gray-400">
                Sorry, we couldn't find the page you're looking for.
              </p>
              <p className="text-gray-500">
                The page may have been moved, deleted, or never existed.
              </p>
              <p className="text-sm text-gray-600 font-mono">
                Requested: <span className="text-gold">{router.asPath}</span>
              </p>
            </div>

            {/* Suggestions */}
            <div className="bg-black-800 border border-gold/20 rounded-lg p-6 text-left">
              <h3 className="text-gold font-bold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" />
                What you can do:
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span>Check the URL for typos or errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span>Use the navigation menu to find what you need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span>Visit our homepage and explore from there</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">→</span>
                  <span>Contact support if you believe this is an error</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-black-800 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
              >
                <Search className="w-5 h-5" />
                Browse Products
              </Link>
              <Link
                href="/support"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-black-800 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
              >
                <AlertCircle className="w-5 h-5" />
                Get Help
              </Link>
            </div>

            {/* Popular Links */}
            <div className="pt-4 border-t border-gold/20">
              <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/watch-demo"
                  className="text-gold hover:text-gold/80 text-sm transition-colors"
                >
                  Watch Demo
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/ai-marketplace"
                  className="text-gold hover:text-gold/80 text-sm transition-colors"
                >
                  AI Marketplace
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/faq"
                  className="text-gold hover:text-gold/80 text-sm transition-colors"
                >
                  FAQ
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/pricing"
                  className="text-gold hover:text-gold/80 text-sm transition-colors"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center text-xs text-gray-600">
            <p>Error Code: 404 | Status: Not Found</p>
            <p className="mt-2">
              If you continue to see this page, please{' '}
              <Link href="/support" className="text-gold hover:text-gold/80">
                contact our support team
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
