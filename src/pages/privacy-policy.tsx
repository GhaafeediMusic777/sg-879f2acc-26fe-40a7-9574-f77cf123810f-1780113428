import React from 'react'
import { Layout } from '@/components/Layout'
import { Lock, Eye, Shield, Database, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <Layout title="Privacy Policy - Ghaafeedi Music" description="Our privacy policy and data protection practices">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">Effective Date: January 1, 2026 | Last Updated: June 3, 2026</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Introduction */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Introduction</h2>
            <p className="text-gray-300 text-lg">
              Ghaafeedi Music ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered cinematic video platform.
            </p>
            <p className="text-gray-300 mt-4">
              <strong>By using Ghaafeedi Music, you agree to this Privacy Policy.</strong>
            </p>
          </section>

          {/* Information We Collect */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Information You Provide Directly</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="font-semibold">Account Information:</p>
                    <p className="text-sm ml-4">Full name, email address, password (encrypted), phone number (optional), billing address, payment information</p>
                  </div>
                  <div>
                    <p className="font-semibold">Story Content:</p>
                    <p className="text-sm ml-4">Your emotional stories, text submissions, voice samples (if Voice Cloning), preferences</p>
                  </div>
                  <div>
                    <p className="font-semibold">Communications:</p>
                    <p className="text-sm ml-4">Support tickets, email correspondence, chat messages, feedback and reviews</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Automatically Collected Information</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="font-semibold">Usage Data:</p>
                    <p className="text-sm ml-4">IP address, browser type, device information, pages visited, time spent, click patterns</p>
                  </div>
                  <div>
                    <p className="font-semibold">Cookies & Tracking:</p>
                    <p className="text-sm ml-4">Session cookies, analytics cookies (Google Analytics, Mixpanel), advertising cookies</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Third-Party Information</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="font-semibold">OAuth Sign-In:</p>
                    <p className="text-sm ml-4">Google, Facebook, Apple (name, email, profile picture)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Payment Processors:</p>
                    <p className="text-sm ml-4">Stripe, PayPal, Coinbase Commerce</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Core Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Generate your AI video and process your story</li>
                  <li>• Deliver your video and provide download links</li>
                  <li>• Provide customer support and resolve issues</li>
                  <li>• Maintain your profile and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Platform Improvements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Improve AI models (aggregate, anonymized data only)</li>
                  <li>• Quality assurance and analytics</li>
                  <li>• Understand user behavior to improve the platform</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Marketing & Communications</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Send promotional emails (opt-out anytime)</li>
                  <li>• Send transactional emails (order confirmations, updates)</li>
                  <li>• Personalize your experience</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Encryption</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Data in transit: TLS 1.3 (HTTPS)</li>
                  <li>• Data at rest: AES-256 encryption</li>
                  <li>• Passwords: Bcrypt hashing (never stored plaintext)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Access Controls</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Role-based access (employees see only what they need)</li>
                  <li>• Two-factor authentication for admin accounts</li>
                  <li>• Regular security audits</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Infrastructure Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• SOC 2 Type II compliant hosting</li>
                  <li>• DDoS protection (Cloudflare)</li>
                  <li>• Automated vulnerability scanning</li>
                  <li>• Bug bounty program (HackerOne)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Privacy Rights */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Access & Portability</h3>
                <p className="text-gray-300">You can view your data and export everything as a .zip file in JSON format from Account Settings.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Correction & Deletion</h3>
                <p className="text-gray-300">You can update your information, delete your account, or delete specific videos anytime from Account Settings.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Opt-Out Rights</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Marketing emails: Click "Unsubscribe" in any email</li>
                  <li>• Analytics cookies: Cookie Settings (bottom of site)</li>
                  <li>• Retargeting ads: Google Ads Settings, Facebook Ad Preferences</li>
                  <li>• Portfolio showcasing: Account Settings → Privacy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Region-Specific Rights</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>California (CCPA):</strong> Right to know, delete, and opt out of data sales. Email: privacy@ghaafeedimusic.com</p>
                  <p><strong>European Union (GDPR):</strong> Right to access, rectify, erase, restrict processing, and data portability. Email: gdpr@ghaafeedimusic.com</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Data Retention</h2>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">•</span>
                <span><strong>Account Data:</strong> Retained while your account is active</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">•</span>
                <span><strong>Video Content:</strong> Stored permanently (unless you delete it)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">•</span>
                <span><strong>Payment Records:</strong> 7 years (legal requirement)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">•</span>
                <span><strong>Support Tickets:</strong> 3 years</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">•</span>
                <span><strong>Analytics Data:</strong> 26 months (Google Analytics default)</span>
              </div>
            </div>

            <p className="text-gray-300 mt-6">
              You can request full account deletion via Account Settings or by emailing privacy@ghaafeedimusic.com. We'll delete all personal data within 30 days (except legally required records).
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Children's Privacy</h2>
            <p className="text-gray-300">
              Ghaafeedi Music is NOT intended for users under 13. We do not knowingly collect data from children under 13. If you believe we've collected a child's data, email privacy@ghaafeedimusic.com and we'll delete it within 48 hours.
            </p>
            <p className="text-gray-300 mt-4">
              <strong>Ages 13-17:</strong> Parental consent required in some jurisdictions.
            </p>
          </section>

          {/* Contact Section */}
          <section className="backdrop-blur-xl bg-gradient-to-r from-yellow-400/10 to-purple-400/10 border border-yellow-400/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Questions About Your Privacy?</h2>
            </div>
            <p className="text-gray-300 mb-6">Contact our privacy team for any questions or requests.</p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Privacy Questions:</strong> privacy@ghaafeedimusic.com</p>
              <p><strong>Data Protection Officer:</strong> dpo@ghaafeedimusic.com</p>
              <p><strong>GDPR Requests:</strong> gdpr@ghaafeedimusic.com</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
