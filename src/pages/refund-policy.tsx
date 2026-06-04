import React from 'react'
import { Layout } from '@/components/Layout'
import { CheckCircle, AlertCircle, Clock, DollarSign } from 'lucide-react'

export default function RefundPolicyPage() {
  return (
    <Layout title="Refund Policy - Ghaafeedi Music" description="Our 14-day money-back guarantee and refund policy">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">Effective Date: January 1, 2026 | Last Updated: June 3, 2026</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Our Commitment */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Commitment</h2>
            <p className="text-gray-300 text-lg">
              At Ghaafeedi Music, we stand behind the quality of our AI-generated cinematic videos. If you're not satisfied, we'll make it right.
            </p>
          </section>

          {/* 14-Day Guarantee */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">14-Day Money-Back Guarantee</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Video Pricing & Duration</h3>
                <p className="text-gray-300 mb-4">Our refund policy applies to all video durations and AI models:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
                    <div className="font-semibold text-yellow-400">2-Minute Video</div>
                    <div className="text-gray-300 text-sm">$19.99 • 3-5 min processing</div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
                    <div className="font-semibold text-yellow-400">5-Minute Video</div>
                    <div className="text-gray-300 text-sm">$39.99 • 8-12 min processing</div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
                    <div className="font-semibold text-yellow-400">10-Minute Video</div>
                    <div className="text-gray-300 text-sm">$79.99 • 15-25 min processing</div>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
                    <div className="font-semibold text-yellow-400">20-Minute Video</div>
                    <div className="text-gray-300 text-sm">$149.99 • 30-50 min processing</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Eligibility</h3>
                <p className="text-gray-300 mb-4">You are eligible for a full refund if:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Timeframe:</strong> You request a refund within 14 days of video delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>First Purchase:</strong> This is your first purchase with Ghaafeedi Music</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Quality Issue:</strong> The video has technical defects, does not match your story, or fails to meet stated quality standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Dissatisfaction:</strong> You are genuinely unsatisfied with the final product</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Non-Refundable Situations</h3>
                <p className="text-gray-300 mb-4">Refunds are NOT available if:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Used/Downloaded:</strong> You've shared, published, or monetized the video publicly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span><strong>After 14 Days:</strong> More than 14 days have passed since delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Policy Violations:</strong> Your story violated our content guidelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Revision Abuse:</strong> You exhausted all revisions and still requested a refund without valid quality concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Subscription Services:</strong> Active monthly subscriptions (cancel instead)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Add-Ons:</strong> Voice cloning, rush delivery, or other add-ons are non-refundable once processed</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Process */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Refund Process</h2>

            <div className="space-y-4">
              {[
                { step: 1, title: 'Email Support', desc: 'Email support@ghaafeedimusic.com with your order number and reason for refund' },
                { step: 2, title: 'Review', desc: 'We\'ll review your request within 48 hours' },
                { step: 3, title: 'Decision', desc: 'If approved, full refund processed within 5-7 business days to original payment method' },
                { step: 4, title: 'Alternative', desc: 'If denied, we\'ll offer free revision rounds or partial refund (case-by-case)' }
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-black font-bold">
                      {step}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="text-gray-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partial Refunds */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Partial Refunds</h2>
            <p className="text-gray-300 mb-4">In some cases, we may offer partial refunds:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300"><strong>50% refund:</strong> Minor quality issues that don't warrant full refund</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300"><strong>25% refund:</strong> Subjective dissatisfaction (we'll also offer free revisions)</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300"><strong>Custom amount:</strong> Case-by-case for unique situations</span>
              </div>
            </div>
          </section>

          {/* Subscription Refunds */}
          <section className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Subscription Refunds</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Monthly Subscriptions</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Cancel anytime:</strong> No cancellation fees</li>
                  <li>• <strong>No prorated refunds:</strong> You retain access until the end of your billing period</li>
                  <li>• <strong>Unused credits:</strong> Do not roll over after cancellation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Annual Subscriptions</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>First 30 days:</strong> Full refund available (minus any used credits)</li>
                  <li>• <strong>After 30 days:</strong> Prorated refund for remaining months (minus 20% processing fee)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="backdrop-blur-xl bg-gradient-to-r from-yellow-400/10 to-purple-400/10 border border-yellow-400/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Refunds?</h2>
            <p className="text-gray-300 mb-6">Contact our support team for assistance with refund requests or inquiries.</p>
            <a
              href="mailto:support@ghaafeedimusic.com?subject=Refund%20Request"
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
            >
              Email Support
            </a>
          </section>
        </div>
      </div>
    </Layout>
  )
}
