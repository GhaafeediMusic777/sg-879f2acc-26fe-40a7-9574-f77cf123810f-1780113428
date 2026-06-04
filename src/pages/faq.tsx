import React, { useState } from 'react'
import { Layout } from '@/components/Layout'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqItems: FAQItem[] = [
  {
    category: 'Getting Started',
    question: 'What is Ghaafeedi Music?',
    answer: 'Ghaafeedi Music is an AI-powered platform that transforms your emotional stories into cinematic music videos. We use advanced AI to create original songs with personalized lyrics and stunning visuals based on your life experiences.'
  },
  {
    category: 'Getting Started',
    question: 'How does the creation process work?',
    answer: '1. Share your emotional story (heartbreak, triumph, loss, love, etc.)\n2. Our AI analyzes the emotional depth and narrative arc\n3. AI generates a personalized song with emotionally intelligent lyrics\n4. AI creates cinematic video scenes matching your story\n5. You receive a premium, shareable music video'
  },
  {
    category: 'Getting Started',
    question: 'Do I need musical experience?',
    answer: 'No! That\'s the beauty of Ghaafeedi Music. You don\'t need any musical talent, video editing skills, or technical knowledge. Just share your story, and we handle everything.'
  },
  {
    category: 'Pricing & Payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept:\n- Credit/Debit cards (Visa, Mastercard, American Express)\n- PayPal\n- Apple Pay\n- Google Pay\n- Cryptocurrency (Bitcoin, Ethereum via Coinbase Commerce)\n- Buy Now Pay Later (via Affirm)'
  },
  {
    category: 'Pricing & Payments',
    question: 'Are there any hidden fees?',
    answer: 'No. The price you see is the price you pay. No surprise charges, no subscription traps, no recurring fees unless you explicitly choose a subscription plan.'
  },
  {
    category: 'Pricing & Payments',
    question: 'Can I get a refund?',
    answer: 'Yes! We offer a 14-day money-back guarantee. If you\'re not satisfied with your cinematic video, contact support@ghaafeedimusic.com within 14 days of delivery for a full refund. See our Refund Policy for details.'
  },
  {
    category: 'Pricing & Payments',
    question: 'Do you offer payment plans?',
    answer: 'Yes! For purchases over $100, we offer installment payment options through Affirm. Choose "Pay in 4" at checkout.'
  },
  {
    category: 'AI Music & Video Generation',
    question: 'How long does it take to create my video?',
    answer: '- Standard turnaround: 3-5 business days\n- Rush delivery (48 hours): +$99\n- Same-day delivery (24 hours): +$199\n\nYou\'ll receive email updates as your project progresses through each stage.'
  },
  {
    category: 'AI Music & Video Generation',
    question: 'Can I request revisions?',
    answer: 'Yes! Every package includes:\n- Starter ($49-$149): 1 revision round\n- Premium ($199-$499): 2 revision rounds\n- Luxury ($999+): Unlimited revisions'
  },
  {
    category: 'AI Music & Video Generation',
    question: 'What music genres do you support?',
    answer: 'Our AI can generate music in virtually any genre:\n- Pop, Hip-Hop, R&B, Country, Rock, Electronic, Jazz, Classical, Indie, Folk, Latin, K-Pop, Afrobeat, and more.\n\nJust specify your preference in the story form, or let our AI choose based on your narrative.'
  },
  {
    category: 'AI Music & Video Generation',
    question: 'Can I use my own voice?',
    answer: 'Yes! Our optional Voice Cloning feature ($99 add-on) allows you to:\n1. Upload 3-5 minutes of your voice samples\n2. AI clones your voice profile\n3. Your cinematic song uses YOUR voice\n\nRequires explicit consent and identity verification.'
  },
  {
    category: 'AI Music & Video Generation',
    question: 'Will my video be copyrighted?',
    answer: 'You own 100% commercial rights to your final video. You can:\n- Share on social media (TikTok, Instagram, YouTube)\n- Use in commercial projects\n- Monetize on platforms\n- Include in portfolio/demos\n\nWe retain a non-exclusive license to showcase your video as a portfolio example (you can opt out).'
  },
  {
    category: 'Technical Questions',
    question: 'What video quality will I receive?',
    answer: 'All videos are delivered in:\n- Resolution: 1080p Full HD (4K available for Premium/Luxury packages)\n- Format: MP4 (H.264 codec)\n- Frame Rate: 30fps (60fps for Premium+)\n- Audio: 320kbps stereo'
  },
  {
    category: 'Technical Questions',
    question: 'Can I download my video?',
    answer: 'Yes! Your video is available for unlimited downloads from your dashboard. We also provide:\n- Social media-optimized versions (9:16 vertical for TikTok/Reels)\n- YouTube-optimized files\n- Audio-only MP3 files\n- Subtitle files (.srt)'
  },
  {
    category: 'Technical Questions',
    question: 'Do you offer mobile apps?',
    answer: 'Currently, Ghaafeedi Music is web-based (mobile-responsive). Native iOS/Android apps are coming Q4 2026.'
  },
  {
    category: 'Technical Questions',
    question: 'What if I encounter technical issues?',
    answer: 'Contact support@ghaafeedimusic.com or use our live chat (bottom right corner). Average response time: <2 hours during business hours.'
  },
  {
    category: 'Privacy & Security',
    question: 'Is my story kept private?',
    answer: 'Absolutely. Your stories and personal information are:\n- Encrypted end-to-end (AES-256)\n- Never shared with third parties (except AI processing services under NDA)\n- Stored securely on enterprise-grade servers\n- Deletable anytime via your account settings\n\nSee our Privacy Policy for full details.'
  },
  {
    category: 'Privacy & Security',
    question: 'Do you train AI models on my data?',
    answer: 'No. Your stories are used ONLY to generate YOUR video. We do not use your data to train AI models or improve our algorithms without explicit opt-in consent.'
  },
  {
    category: 'Privacy & Security',
    question: 'Can I delete my account and data?',
    answer: 'Yes. You can request full account deletion via:\n1. Account Settings → Delete Account\n2. Email support@ghaafeedimusic.com with subject "Account Deletion Request"\n\nWe\'ll delete all personal data within 30 days (except legally required records).'
  },
  {
    category: 'Subscription & Label Services',
    question: 'What\'s the difference between one-time and subscription?',
    answer: '- One-time purchases: Pay once, get one video\n- Monthly subscription: Unlimited stories, priority processing, exclusive features'
  },
  {
    category: 'Subscription & Label Services',
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes! Cancel anytime from Account Settings. You\'ll retain access until the end of your billing period. No cancellation fees.'
  },
  {
    category: 'Subscription & Label Services',
    question: 'What is the Ghaafeedi Music Label?',
    answer: 'Our label services are for professional musicians who want:\n- AI-powered music video production (monthly packages)\n- Distribution to Spotify, Apple Music, YouTube, etc.\n- Marketing campaigns and playlist pitching\n- Revenue sharing (70/30 split in your favor)\n\nApply at: ghaafeedimusic.com/label'
  },
  {
    category: 'Content Guidelines',
    question: 'What stories are allowed?',
    answer: 'We welcome authentic emotional stories about:\n- Love, heartbreak, relationships\n- Personal growth and triumph\n- Loss, grief, healing\n- Adventure, travel, life changes\n- Dreams, aspirations, hope'
  },
  {
    category: 'Content Guidelines',
    question: 'What content is prohibited?',
    answer: 'We do NOT allow:\n- Hate speech, discrimination, harassment\n- Graphic violence or self-harm glorification\n- Explicit sexual content\n- Illegal activities or drug glorification\n- Misinformation or conspiracy theories\n- Impersonation or identity theft\n\nViolating content will be rejected and may result in account suspension.'
  },
  {
    category: 'Content Guidelines',
    question: 'Can I create videos for others (gifts)?',
    answer: 'Yes! Many users create cinematic videos as gifts for:\n- Partners (anniversaries, proposals)\n- Family members (birthdays, memorials)\n- Friends (graduations, achievements)\n\nJust ensure you have permission to share their story.'
  },
  {
    category: 'Copyright & Ownership',
    question: 'Who owns the music generated by AI?',
    answer: 'You own the final output. Ghaafeedi Music retains ownership of:\n- The AI models and technology\n- The underlying algorithms\n\nBut YOU own the specific song and video created for you.'
  },
  {
    category: 'Copyright & Ownership',
    question: 'Can I use my video commercially?',
    answer: 'Yes! Full commercial rights included. You can:\n- Monetize on YouTube, TikTok, Instagram\n- Use in advertisements or promotions\n- Sell or license to others\n- Include in films, podcasts, or media projects'
  },
  {
    category: 'Copyright & Ownership',
    question: 'What if my video uses copyrighted material?',
    answer: 'It won\'t. All music and visuals are 100% AI-generated and original. No samples, no copyrighted content, no licensing issues.'
  },
  {
    category: 'Support & Contact',
    question: 'How can I contact support?',
    answer: '- Email: support@ghaafeedimusic.com\n- Live Chat: Available on website (bottom right)\n- Response Time: <2 hours (business hours), <24 hours (evenings/weekends)'
  },
  {
    category: 'Support & Contact',
    question: 'Do you offer phone support?',
    answer: 'Currently, support is via email and live chat. Phone support is available for Premium/Luxury package customers.'
  },
  {
    category: 'Support & Contact',
    question: 'What if I have a custom request?',
    answer: 'Email enterprise@ghaafeedimusic.com for:\n- Bulk orders (10+ videos)\n- Custom AI training\n- White-label solutions\n- Enterprise licensing'
  }
]

const categories = Array.from(new Set(faqItems.map(item => item.category)))

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <Layout title="FAQ - Ghaafeedi Music" description="Frequently Asked Questions about Ghaafeedi Music">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-300">Find answers to common questions about Ghaafeedi Music</p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 pb-2 border-b border-yellow-400/30">
                {category}
              </h2>

              <div className="space-y-3">
                {faqItems
                  .filter(item => item.category === category)
                  .map((item, idx) => {
                    const globalIndex = faqItems.indexOf(item)
                    return (
                      <div
                        key={globalIndex}
                        className="group backdrop-blur-xl bg-white/5 border border-yellow-400/20 hover:border-yellow-400/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10"
                      >
                        <button
                          onClick={() => toggleExpand(globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-yellow-400/5 transition-colors"
                        >
                          <span className="text-lg font-semibold text-white text-left">{item.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-yellow-400 transition-transform duration-300 flex-shrink-0 ${
                              expandedIndex === globalIndex ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {expandedIndex === globalIndex && (
                          <div className="px-6 py-4 bg-yellow-400/5 border-t border-yellow-400/20">
                            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto px-4 mt-16">
          <div className="backdrop-blur-xl bg-gradient-to-r from-yellow-400/10 to-purple-400/10 border border-yellow-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">Can't find the answer you're looking for? Our support team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@ghaafeedimusic.com"
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
              >
                Email Support
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-all"
              >
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
