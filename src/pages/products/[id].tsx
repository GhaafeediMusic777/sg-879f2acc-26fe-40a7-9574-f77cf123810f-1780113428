import { useRouter } from 'next/router'
import Link from 'next/link'
import { Star, Check, ArrowLeft, ShoppingCart } from 'lucide-react'

const PRODUCT_DATA: Record<string, any> = {
  'emotional-soundtrack': {
    name: 'Emotional Soundtrack',
    emoji: '🎵',
    price: 49,
    rating: 4.8,
    reviews: 342,
    category: 'Music',
    description: 'Your story as original cinematic music',
    longDescription: 'Transform your emotional journey into a personalized cinematic soundtrack. Our AI analyzes your story\'s emotional arc and generates original music with emotionally intelligent lyrics performed by AI vocalists.',
    whoItsFor: [
      'People with powerful emotional stories to share',
      'Content creators seeking unique music',
      'Anyone wanting to preserve their journey in audio form',
      'Creators looking for royalty-free cinematic music'
    ],
    whatToExpect: [
      '3-5 minute personalized soundtrack',
      'AI-generated cinematic vocals',
      'Emotionally intelligent lyrics',
      'Professional mastering',
      '320kbps MP3 delivery',
      'Lifetime access to your creation'
    ],
    features: [
      'Emotional AI Analysis',
      'Original Lyric Generation',
      'Professional Mastering',
      'Multiple Genre Options',
      'Instant Delivery',
      'Commercial Use License'
    ],
    tiers: [
      { name: 'Basic', price: 49, features: ['Standard Soundtrack', 'MP3 Delivery', 'Email Access'] },
      { name: 'Premium', price: 79, features: ['Extended Soundtrack', 'Multiple Formats', 'Priority Support'] }
    ]
  },
  'cinematic-story': {
    name: 'Cinematic Story Film',
    emoji: '🎬',
    price: 149,
    rating: 4.9,
    reviews: 521,
    category: 'Video',
    description: 'Song + music video experience',
    longDescription: 'Experience your story as a Netflix-quality cinematic film. Combines personalized music with AI-generated cinematic visuals, character consistency, and professional editing.',
    whoItsFor: [
      'People with transformative life stories',
      'Content creators wanting premium visuals',
      'Social media influencers',
      'Anyone wanting a professional music video'
    ],
    whatToExpect: [
      '4-6 minute personalized soundtrack',
      '3-5 Netflix-inspired cinematic scenes',
      'AI emotional analysis',
      'HD video delivery (1080p)',
      'Downloadable MP4 file',
      'Dashboard viewing access'
    ],
    features: [
      'Emotional Intelligence AI',
      'Cinematic Visuals',
      'Character Consistency',
      'Professional Editing',
      'HD Quality',
      'Social-Ready Clips'
    ],
    tiers: [
      { name: 'Standard', price: 149, features: ['HD Video', 'Cinematic Scenes', 'Email Delivery'] },
      { name: 'Premium', price: 199, features: ['4K Video', 'Extended Scenes', 'Priority Support'] }
    ]
  },
  'memorial-legacy': {
    name: 'Memorial Legacy Film',
    emoji: '🕯️',
    price: 299,
    rating: 5.0,
    reviews: 287,
    category: 'Legacy',
    description: 'Preserve forever',
    longDescription: 'Honor and preserve the memory of loved ones through cinematic AI storytelling. Create a lasting tribute that celebrates their life and impact.',
    whoItsFor: [
      'Families wanting to preserve memories',
      'People grieving and healing',
      'Anyone wanting to honor a loved one',
      'Families seeking meaningful tributes'
    ],
    whatToExpect: [
      '6-8 minute memorial soundtrack',
      '10-15 minute family tribute film',
      'HD cinematic video delivery',
      'Personalized emotional narration',
      'Legacy preservation for future generations',
      'Priority support included'
    ],
    features: [
      'Emotional Tribute',
      'Family Collaboration',
      'Lifetime Cloud Storage',
      'Multiple Sharing Options',
      'Professional Quality',
      'Legacy Preservation'
    ],
    tiers: [
      { name: 'Basic Tribute', price: 249, features: ['Standard Film', 'HD Delivery', 'Family Sharing'] },
      { name: 'Premium Legacy', price: 599, features: ['Extended Film', '4K Delivery', 'VIP Support'] },
      { name: 'Luxury Documentary', price: 1499, features: ['Full Documentary', '4K HDR', 'Dedicated Coordinator'] }
    ]
  },
  'signature-masterpiece': {
    name: 'Signature Masterpiece',
    emoji: '👑',
    price: 499,
    rating: 5.0,
    reviews: 198,
    category: 'Premium',
    description: 'Ultimate cinematic experience',
    longDescription: 'The ultimate premium cinematic storytelling experience. Full production with 4K HDR delivery, VIP support, and all premium features included.',
    whoItsFor: [
      'Celebrities and influencers',
      'People wanting the absolute best',
      'Content creators seeking premium quality',
      'Anyone wanting a masterpiece creation'
    ],
    whatToExpect: [
      '8-12 minute full cinematic soundtrack',
      '15-20 minute personalized cinematic film',
      'Premium 4K HDR delivery',
      'Priority generation queue',
      'VIP support with dedicated coordinator',
      'Multiple format exports',
      'Social media teaser clips',
      'Lifetime cloud storage access'
    ],
    features: [
      '4K HDR Quality',
      'VIP Coordinator',
      'Priority Processing',
      'Multiple Formats',
      'Social Media Clips',
      'Lifetime Storage',
      'Commercial License',
      'Unlimited Revisions'
    ],
    tiers: [
      { name: 'Masterpiece', price: 499, features: ['Full 4K HDR', 'VIP Support', 'All Premium Features'] }
    ]
  },
  'future-self': {
    name: 'Future Self Vision',
    emoji: '✨',
    price: 125,
    rating: 4.7,
    reviews: 156,
    category: 'Vision',
    description: 'Visualize yourself successful, happy, peaceful',
    longDescription: 'Visualize your ideal future self through AI-generated cinematic storytelling. See yourself successful, happy, and at peace in a personalized vision film.',
    whoItsFor: [
      'People seeking personal growth',
      'Entrepreneurs with big dreams',
      'Anyone wanting motivation and clarity',
      'People exploring their potential'
    ],
    whatToExpect: [
      'Personalized vision questionnaire',
      'AI-generated future self visualization',
      'Cinematic film of your ideal future',
      'Motivational soundtrack',
      'HD video delivery',
      'Personal vision guide'
    ],
    features: [
      'Future Self Visualization',
      'Personalized Vision',
      'Motivational Content',
      'HD Quality',
      'Instant Delivery',
      'Vision Guide Included'
    ],
    tiers: [
      { name: 'Basic Vision', price: 79, features: ['Standard Vision', 'HD Delivery'] },
      { name: 'Premium Cinematic', price: 149, features: ['Extended Vision', '4K Delivery', 'Personal Coach'] }
    ]
  }
}

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id || typeof id !== 'string') {
    return <div>Loading...</div>
  }

  const product = PRODUCT_DATA[id] || {
    name: 'Product',
    emoji: '🎵',
    price: 0,
    rating: 4.5,
    reviews: 0,
    category: 'Category',
    description: 'Product description',
    longDescription: 'Detailed product description',
    whoItsFor: [],
    whatToExpect: [],
    features: [],
    tiers: []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/products"
          className="flex items-center gap-2 text-gold hover:text-gold/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        {/* Product Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="text-7xl mb-6">{product.emoji}</div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-gold text-gold" />
                <span className="text-gold font-semibold">{product.rating}</span>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8">{product.longDescription}</p>
          </div>

          <div className="bg-black-800 border border-gold/30 rounded-2xl p-8 h-fit">
            <div className="text-5xl font-bold text-gold mb-2">${product.price}</div>
            <p className="text-gray-400 mb-8">One-time purchase</p>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all mb-4">
              <ShoppingCart className="w-5 h-5" />
              Get Started Now
            </button>
            <button className="w-full px-6 py-3 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-black-800 border border-gold/30 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gold mb-6">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.whoItsFor.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What To Expect */}
        <div className="bg-black-800 border border-gold/30 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gold mb-6">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.whatToExpect.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-black-800 border border-gold/30 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-black-900 rounded-lg border border-gold/20">
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        {product.tiers.length > 1 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gold mb-6">Pricing Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.tiers.map((tier: any, idx: number) => (
                <div key={idx} className="bg-black-800 border border-gold/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gold mb-6">${tier.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature: string, fidx: number) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
                    Choose {tier.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-gold/10 to-purple-500/10 border border-gold/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gold mb-4">Ready to Transform Your Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of people creating cinematic masterpieces with Ghaafeedi Music
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
            <ShoppingCart className="w-5 h-5" />
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  )
}
