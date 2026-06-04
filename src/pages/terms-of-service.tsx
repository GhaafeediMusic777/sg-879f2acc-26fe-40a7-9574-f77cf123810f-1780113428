import React from 'react'
import { Layout } from '@/components/Layout'
import { AlertTriangle, FileText, Gavel, Ban } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <Layout title="Terms of Service - Ghaafeedi Music" description="Our terms of service and user agreement">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Service</span>
          </h1>
          <p className="text-xl text-gray-300">Effective Date: January 1, 2026 | Last Updated: June 3, 2026</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Acceptance of Terms */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-300 mb-4">
              By accessing or using Ghaafeedi Music ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.
            </p>

            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 mt-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Who Can Use Ghaafeedi Music</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• You must be at least 13 years old</li>
                <li>• If 13-17, you need parental/guardian consent</li>
                <li>• You must provide accurate registration information</li>
                <li>• You must comply with all applicable laws</li>
              </ul>
            </div>
          </section>

          {/* Service Description */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Service Description</h2>
            <p className="text-gray-300 mb-4">
              Ghaafeedi Music is an AI-powered platform that transforms emotional stories into cinematic music videos. The Service is provided "AS IS" without guarantees of specific results.
            </p>
            <div className="bg-purple-400/10 border border-purple-400/30 rounded-lg p-4">
              <p className="text-gray-300">
                <strong>We do not guarantee:</strong> Specific video quality, emotional accuracy, uninterrupted service, error-free operation, or compatibility with all devices.
              </p>
            </div>
          </section>

          {/* Account Registration */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Account Registration</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Your Responsibilities</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Provide accurate, complete information</li>
                  <li>• Keep your password secure</li>
                  <li>• Notify us immediately of unauthorized access</li>
                  <li>• Not share your account with others</li>
                  <li>• Not create multiple accounts to abuse promotions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Account Termination</h3>
                <p className="text-gray-300 mb-3">We may suspend or terminate your account if you:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Violate these Terms</li>
                  <li>• Engage in fraudulent activity</li>
                  <li>• Abuse the platform or harass others</li>
                  <li>• Have payment failures or chargebacks filed</li>
                </ul>
                <p className="text-gray-300 mt-3">You can delete your account anytime via Account Settings.</p>
              </div>
            </div>
          </section>

          {/* Purchases & Payments */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Purchases & Payments</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Video Duration & Pricing</h3>
                <p className="text-gray-300 mb-4">Ghaafeedi Music offers flexible video durations with transparent pricing:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-3">
                    <div className="font-semibold text-yellow-400 text-sm">2-Minute Video</div>
                    <div className="text-gray-300 text-xs">$19.99 • 3-5 min processing</div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-3">
                    <div className="font-semibold text-yellow-400 text-sm">5-Minute Video</div>
                    <div className="text-gray-300 text-xs">$39.99 • 8-12 min processing</div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-3">
                    <div className="font-semibold text-yellow-400 text-sm">10-Minute Video</div>
                    <div className="text-gray-300 text-xs">$79.99 • 15-25 min processing</div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-3">
                    <div className="font-semibold text-yellow-400 text-sm">20-Minute Video</div>
                    <div className="text-gray-300 text-xs">$149.99 • 30-50 min processing</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Pricing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>One-Time Purchases:</strong> Pay once, receive one video</li>
                  <li>• <strong>Subscriptions:</strong> Monthly or annual recurring billing</li>
                  <li>• <strong>Add-Ons:</strong> Voice cloning, rush delivery, 4K upgrades</li>
                </ul>
                <p className="text-gray-300 mt-2">All prices are in USD. Taxes may apply based on your location.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Payment Processing</h3>
                <p className="text-gray-300">Payments are processed by Stripe, PayPal, and Coinbase Commerce. Your payment information is never stored on our servers.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Billing Issues</h3>
                <p className="text-gray-300">If your payment fails, you'll receive an email notification. You have 7 days to update payment info. After 7 days, your account may be downgraded or suspended.</p>
              </div>
            </div>
          </section>

          {/* User Content */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">User Content</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Your Responsibilities</h3>
                <p className="text-gray-300 mb-3"><strong>You are responsible for the content you submit.</strong></p>
                <p className="text-gray-300 mb-3">You agree NOT to submit content that:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Contains hate speech, discrimination, or harassment</li>
                  <li>• Promotes violence, self-harm, or illegal activities</li>
                  <li>• Violates intellectual property rights</li>
                  <li>• Contains explicit sexual content</li>
                  <li>• Impersonates others or misrepresents identity</li>
                  <li>• Violates privacy of others without consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Ownership & Licensing</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Your Content:</strong> You retain ownership of your stories.</p>
                  <p><strong>Generated Videos:</strong> You own the final video (commercial rights included).</p>
                  <p><strong>License to Us:</strong> You grant us a non-exclusive license to process your content and a limited license to showcase your video as a portfolio example (opt-in only).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Intellectual Property</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Our Intellectual Property</h3>
                <p className="text-gray-300 mb-2">Ghaafeedi Music owns the platform, website, AI models, algorithms, branding, and all proprietary technology.</p>
                <p className="text-gray-300"><strong>You may NOT:</strong> Copy, modify, reverse-engineer our platform, use our branding without permission, or scrape data.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">AI-Generated Content</h3>
                <p className="text-gray-300 mb-2"><strong>You own:</strong> The final video, AI-generated music, visuals, and vocals.</p>
                <p className="text-gray-300"><strong>We own:</strong> The AI models and underlying algorithms.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Copyright Infringement</h3>
                <p className="text-gray-300">If you believe content infringes your copyright, email dmca@ghaafeedimusic.com. We'll investigate within 48 hours.</p>
              </div>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Ban className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl font-bold text-white">Prohibited Uses</h2>
            </div>

            <p className="text-gray-300 mb-4">You may NOT use Ghaafeedi Music to:</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Harass, threaten, or intimidate others</li>
              <li>• Impersonate individuals or organizations</li>
              <li>• Spread misinformation or conspiracy theories</li>
              <li>• Create deepfakes or manipulated content without consent</li>
              <li>• Engage in fraud or money laundering</li>
              <li>• Spam, phish, or distribute malware</li>
              <li>• Violate any local, state, national, or international law</li>
            </ul>
            <p className="text-red-400 font-semibold mt-4">Violation may result in immediate account termination and legal action.</p>
          </section>

          {/* Voice Cloning */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">AI Voice Cloning</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Consent Requirements</h3>
                <p className="text-gray-300 mb-2">To use Voice Cloning ($99 add-on), you must:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Provide explicit written consent</li>
                  <li>• Verify your identity (government ID required)</li>
                  <li>• Confirm you own the voice samples or have permission</li>
                  <li>• Acknowledge you will not impersonate others</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Prohibited Voice Cloning</h3>
                <p className="text-gray-300 mb-2">You may NOT clone:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Voices of public figures without their consent</li>
                  <li>• Voices of deceased individuals without estate permission</li>
                  <li>• Voices of minors without parental consent</li>
                  <li>• Voices for fraudulent, defamatory, or illegal purposes</li>
                </ul>
                <p className="text-red-400 font-semibold mt-2">Violation may result in criminal prosecution.</p>
              </div>
            </div>
          </section>

          {/* Disclaimers & Limitations */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Disclaimers & Limitations of Liability</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">No Warranties</h3>
                <p className="text-gray-300">
                  THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Limitation of Liability</h3>
                <p className="text-gray-300">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, GHAAFEEDI MUSIC SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, LOST PROFITS, DATA, OR GOODWILL, OR DAMAGES EXCEEDING THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Indemnification</h3>
                <p className="text-gray-300">
                  You agree to indemnify and hold Ghaafeedi Music harmless from claims arising from your use of the Service, violation of these Terms, infringement of third-party rights, or content you submit.
                </p>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Gavel className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Dispute Resolution</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Informal Resolution</h3>
                <p className="text-gray-300 mb-2">Before filing a lawsuit, you agree to:</p>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                  <li>Email disputes@ghaafeedimusic.com describing the issue</li>
                  <li>Allow us 30 days to resolve it informally</li>
                  <li>Escalate only if we can't reach an agreement</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Binding Arbitration</h3>
                <p className="text-gray-300 mb-2">
                  <strong>If informal resolution fails, disputes will be resolved through binding arbitration, NOT court.</strong>
                </p>
                <p className="text-gray-300">
                  Arbitration is administered by JAMS (Judicial Arbitration and Mediation Services) and is individual only (no class actions).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Exceptions</h3>
                <p className="text-gray-300">You can go to court for: Small claims (under $10,000), intellectual property disputes, or injunctive relief requests.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="backdrop-blur-xl bg-gradient-to-r from-yellow-400/10 to-purple-400/10 border border-yellow-400/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-6">Contact our legal team for any questions or concerns.</p>
            <a
              href="mailto:legal@ghaafeedimusic.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
            >
              Contact Legal Team
            </a>
          </section>
        </div>
      </div>
    </Layout>
  )
}
