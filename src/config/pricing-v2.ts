export const PRODUCTS = {
  'ai-voice-clone': {
    id: 'ai-voice-clone',
    name: 'AI Voice Clone',
    description: 'Create a digital clone of your voice',
    icon: '🎤',
    category: 'voice',
    plans: {
      starter: {
        id: 'starter',
        name: 'Starter',
        price: 9.99,
        period: 'month',
        features: [
          '5 voice clones',
          '10 minutes of audio per clone',
          'English only',
          'Standard quality',
          'Email support',
        ],
      },
      pro: {
        id: 'pro',
        name: 'Professional',
        price: 29.99,
        period: 'month',
        features: [
          'Unlimited voice clones',
          '60 minutes of audio per clone',
          '50+ languages',
          'Studio quality',
          'Priority support',
          'Commercial license',
        ],
        popular: true,
      },
      enterprise: {
        id: 'enterprise',
        name: 'Enterprise',
        price: null,
        period: 'custom',
        features: [
          'Everything in Pro',
          'Team collaboration',
          'API access',
          'Custom training',
          'Dedicated support',
          'SLA guarantee',
        ],
      },
    },
  },
  'ai-music-producer': {
    id: 'ai-music-producer',
    name: 'AI Music Producer',
    description: 'Generate original music in any genre',
    icon: '🎵',
    category: 'music',
    durations: [
      { duration: 2, minutes: 2, price: 14.99 },
      { duration: 5, minutes: 5, price: 24.99 },
      { duration: 10, minutes: 10, price: 39.99 },
      { duration: 20, minutes: 20, price: 69.99 },
    ],
    plans: {
      starter: {
        id: 'starter',
        name: 'Starter',
        price: 14.99,
        period: 'per track',
        features: [
          'Up to 2 minutes',
          '50+ genres',
          'Standard quality',
          'Royalty-free',
          'Email support',
        ],
      },
      pro: {
        id: 'pro',
        name: 'Professional',
        price: 39.99,
        period: 'per track',
        features: [
          'Up to 10 minutes',
          '100+ genres',
          'Studio quality',
          'Royalty-free forever',
          'Commercial license',
          'Priority support',
        ],
        popular: true,
      },
      unlimited: {
        id: 'unlimited',
        name: 'Unlimited',
        price: 99.99,
        period: 'month',
        features: [
          'Unlimited tracks',
          'Up to 20 minutes each',
          'All genres',
          'Studio quality',
          'Commercial license',
          'Dedicated support',
        ],
      },
    },
  },
  'ai-music-video': {
    id: 'ai-music-video',
    name: 'AI Music Video',
    description: 'Create cinematic music videos',
    icon: '🎬',
    category: 'video',
    durations: [
      { duration: 2, minutes: 2, price: 29.99 },
      { duration: 5, minutes: 5, price: 49.99 },
      { duration: 10, minutes: 10, price: 79.99 },
      { duration: 20, minutes: 20, price: 149.99 },
    ],
    plans: {
      starter: {
        id: 'starter',
        name: 'Starter',
        price: 29.99,
        period: 'per video',
        features: [
          'Up to 2 minutes',
          '4K quality',
          'Basic effects',
          'Royalty-free',
          'Email support',
        ],
      },
      pro: {
        id: 'pro',
        name: 'Professional',
        price: 79.99,
        period: 'per video',
        features: [
          'Up to 10 minutes',
          '4K quality',
          'Advanced effects',
          'Custom scenes',
          'Commercial license',
          'Priority support',
        ],
        popular: true,
      },
      studio: {
        id: 'studio',
        name: 'Studio',
        price: 199.99,
        period: 'month',
        features: [
          'Unlimited videos',
          'Up to 20 minutes each',
          '8K quality',
          'All effects & scenes',
          'Commercial license',
          'Dedicated support',
        ],
      },
    },
  },
  'ai-podcast-producer': {
    id: 'ai-podcast-producer',
    name: 'AI Podcast Producer',
    description: 'Generate full podcast episodes',
    icon: '🎙️',
    category: 'podcast',
    durations: [
      { duration: 2, minutes: 2, price: 19.99 },
      { duration: 5, minutes: 5, price: 34.99 },
      { duration: 10, minutes: 10, price: 54.99 },
      { duration: 20, minutes: 20, price: 99.99 },
    ],
    plans: {
      starter: {
        id: 'starter',
        name: 'Starter',
        price: 19.99,
        period: 'per episode',
        features: [
          'Up to 2 minutes',
          'Single host',
          'Auto-editing',
          'Transcript generation',
          'Email support',
        ],
      },
      pro: {
        id: 'pro',
        name: 'Professional',
        price: 54.99,
        period: 'per episode',
        features: [
          'Up to 10 minutes',
          'Multi-host conversations',
          'Auto-editing & mastering',
          'Transcript + SEO',
          'Distribution ready',
          'Priority support',
        ],
        popular: true,
      },
      network: {
        id: 'network',
        name: 'Network',
        price: 149.99,
        period: 'month',
        features: [
          'Unlimited episodes',
          'Up to 20 minutes each',
          'Multi-host support',
          'Full editing suite',
          'Auto-distribution',
          'Analytics dashboard',
          'Dedicated support',
        ],
      },
    },
  },
  'ai-artist-label': {
    id: 'ai-artist-label',
    name: 'AI Artist Label',
    description: 'Launch your AI music career',
    icon: '🌟',
    category: 'label',
    plans: {
      starter: {
        id: 'starter',
        name: 'Starter',
        price: 49.99,
        period: 'month',
        features: [
          'Up to 10 releases/month',
          'Global distribution',
          'Royalty tracking',
          'Basic analytics',
          'Email support',
        ],
      },
      pro: {
        id: 'pro',
        name: 'Professional',
        price: 99.99,
        period: 'month',
        features: [
          'Unlimited releases',
          'Global distribution',
          'Advanced analytics',
          'Playlist pitching',
          'Artist portfolio',
          'Priority support',
        ],
        popular: true,
      },
      enterprise: {
        id: 'enterprise',
        name: 'Enterprise',
        price: null,
        period: 'custom',
        features: [
          'Everything in Pro',
          'Team management',
          'Custom branding',
          'API access',
          'Dedicated account manager',
          'SLA guarantee',
        ],
      },
    },
  },
} as const

export const CREDIT_PACKAGES = [
  { credits: 50, price: 9.99, bonus: 0 },
  { credits: 150, price: 24.99, bonus: 25 },
  { credits: 350, price: 49.99, bonus: 100 },
  { credits: 800, price: 99.99, bonus: 300 },
]

export const SUBSCRIPTION_TIERS = {
  free: {
    name: 'Free',
    monthlyCredits: 0,
    price: 0,
    features: [
      'Try all products',
      'Limited features',
      'Community support',
    ],
  },
  starter: {
    name: 'Starter',
    monthlyCredits: 100,
    price: 9.99,
    features: [
      '100 credits/month',
      'All products',
      'Email support',
    ],
  },
  pro: {
    name: 'Pro',
    monthlyCredits: 500,
    price: 29.99,
    features: [
      '500 credits/month',
      'All products',
      'Priority support',
      'Advanced analytics',
    ],
  },
  unlimited: {
    name: 'Unlimited',
    monthlyCredits: null,
    price: 99.99,
    features: [
      'Unlimited credits',
      'All products',
      'Dedicated support',
      'Custom integrations',
    ],
  },
}

export const getProductById = (id: string) => {
  return PRODUCTS[id as keyof typeof PRODUCTS]
}

export const getAllProducts = () => {
  return Object.values(PRODUCTS)
}

export const getProductsByCategory = (category: string) => {
  return Object.values(PRODUCTS).filter(p => p.category === category)
}
