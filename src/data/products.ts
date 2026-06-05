export interface ProductData {
  id: string
  name: string
  tagline: string
  price: string
  rating: number
  image: string
  accentColor: string
  badgeStyle: string
  badgeText: string
  collection: 'storytelling' | 'legacy' | 'transformation' | 'creator'
  
  // Storytelling sections
  whatThisExperienceIs: string
  whoItIsFor: string[]
  whatWeCreate: string
  deliverables: string[]
  emotionalOutcome: string
  productionTimeline: string
  pricingExplanation: string
  
  // Premium features
  premiumFeatures: string[]
  
  // Delivery package
  deliveryPackage: string[]
  
  // FAQs
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const PRODUCTS: ProductData[] = [
  {
    id: 'emotional-soundtrack',
    name: 'Emotional Soundtrack',
    tagline: 'Your story as original cinematic music',
    price: '$49',
    rating: 4.8,
    image: '/products/emotional-soundtrack.jpg',
    accentColor: '#D4A855',
    badgeStyle: 'bg-yellow-900 bg-opacity-80 text-yellow-100',
    badgeText: 'GOLD FIRE',
    collection: 'storytelling',
    
    whatThisExperienceIs: 'Transform your memories, milestones, personal journey, or life story into an original cinematic soundtrack crafted exclusively for you. Our AI-assisted creative process analyzes your narrative and creates music designed to capture the emotions, meaning, and atmosphere behind your story.',
    
    whoItIsFor: [
      'Individuals documenting their life journey',
      'Families preserving memories',
      'Creators seeking original music',
      'Legacy projects',
      'Personal transformation experiences'
    ],
    
    whatWeCreate: 'A custom musical composition inspired by your story, emotions, and desired mood. Professional mastering and delivery in multiple formats.',
    
    deliverables: [
      'Original soundtrack composition',
      'Professional mastering',
      'WAV master file',
      'MP3 version',
      'Personal usage license',
      'Digital delivery package'
    ],
    
    emotionalOutcome: 'A powerful musical experience that allows you to hear your story expressed through sound. Experience the emotional depth of your journey captured in an original composition.',
    
    productionTimeline: '3–5 business days',
    
    pricingExplanation: 'Original music composition typically costs $500–$2,000 from professional composers. Our AI-assisted creation process delivers professional-quality soundtracks at an accessible price point.',
    
    premiumFeatures: [
      'Unlimited personal revisions',
      'Commercial usage rights available',
      'Multiple format delivery',
      'Lifetime access'
    ],
    
    deliveryPackage: [
      'Original WAV master file (48kHz, 24-bit)',
      'MP3 version (320kbps)',
      'Usage rights documentation',
      'Digital delivery via secure link',
      'Lifetime cloud backup'
    ],
    
    faqs: [
      {
        question: 'Can I use this music commercially?',
        answer: 'Yes, personal usage is included. Commercial licensing is available as an upgrade.'
      },
      {
        question: 'How long is the soundtrack?',
        answer: 'Typically 3–5 minutes, customizable based on your story.'
      },
      {
        question: 'Can I request revisions?',
        answer: 'Yes, unlimited revisions are included to ensure you love the final composition.'
      }
    ]
  },

  {
    id: 'cinematic-story-film',
    name: 'Cinematic Story Film',
    tagline: 'Song + music video experience',
    price: '$149',
    rating: 4.9,
    image: '/products/cinematic-story-film.jpg',
    accentColor: '#8B5CF6',
    badgeStyle: 'bg-purple-900 bg-opacity-80 text-purple-100',
    badgeText: 'CINEMATIC',
    collection: 'storytelling',
    
    whatThisExperienceIs: 'Receive both an original cinematic soundtrack AND a professional music video that brings your story to life. This is the complete creative package—music composed from your narrative, paired with stunning visual storytelling.',
    
    whoItIsFor: [
      'Creators wanting full multimedia experiences',
      'Personal brand builders',
      'Legacy documentation',
      'Social media creators',
      'Filmmakers and artists'
    ],
    
    whatWeCreate: 'A complete cinematic package: original soundtrack + professional-quality music video featuring cinematic visuals, transitions, and color grading.',
    
    deliverables: [
      'Original cinematic soundtrack',
      'Professional music video (4K)',
      'Behind-the-scenes content',
      'Social media clips',
      'Master files in multiple formats',
      'Full commercial usage rights'
    ],
    
    emotionalOutcome: 'Experience your story transformed into a complete cinematic production. Share a professional-quality film that captures your narrative with stunning visuals and original music.',
    
    productionTimeline: '7–10 business days',
    
    pricingExplanation: 'Professional music video production costs $2,000–$10,000+. Our integrated AI-assisted process delivers premium quality at a fraction of traditional production costs.',
    
    premiumFeatures: [
      '4K video quality',
      'Unlimited revisions',
      'Commercial licensing included',
      'Social media optimization',
      'Behind-the-scenes footage'
    ],
    
    deliveryPackage: [
      '4K master video file (ProRes)',
      '1080p delivery version',
      'Original soundtrack (WAV + MP3)',
      'Social media clips (Instagram, TikTok)',
      'Behind-the-scenes content',
      'Usage rights documentation'
    ],
    
    faqs: [
      {
        question: 'Can I share this on social media?',
        answer: 'Yes, full social media rights are included. We provide optimized clips for all platforms.'
      },
      {
        question: 'How long is the video?',
        answer: 'Typically 3–5 minutes, customizable based on your story.'
      },
      {
        question: 'Can I use this commercially?',
        answer: 'Yes, full commercial licensing is included.'
      }
    ]
  },

  {
    id: 'dream-ai-visualization',
    name: 'Dream AI Visualization',
    tagline: 'Subconscious cinema',
    price: '$79',
    rating: 4.6,
    image: '/products/dream-ai-visualization.jpg',
    accentColor: '#06B6D4',
    badgeStyle: 'bg-cyan-900 bg-opacity-80 text-cyan-100',
    badgeText: 'AURORA BLUE',
    collection: 'transformation',
    
    whatThisExperienceIs: 'Visualize the hidden landscapes of your subconscious mind. Our AI analyzes your dreams, desires, and inner world to create stunning cinematic visualizations that represent your deepest self.',
    
    whoItIsFor: [
      'Dreamers and visionaries',
      'Personal development seekers',
      'Artists and creators',
      'Meditation practitioners',
      'Self-discovery enthusiasts'
    ],
    
    whatWeCreate: 'A series of cinematic visualizations representing your subconscious landscape, dreams, and inner world. Stunning imagery designed for inspiration and self-reflection.',
    
    deliverables: [
      'Series of cinematic visualizations',
      'High-resolution imagery',
      'Meditation-ready video version',
      'Desktop and mobile wallpapers',
      'Personal usage license',
      'Digital delivery package'
    ],
    
    emotionalOutcome: 'Gain visual insight into your subconscious mind. Experience a profound journey of self-discovery through stunning cinematic imagery.',
    
    productionTimeline: '2–3 business days',
    
    pricingExplanation: 'Professional visualization art typically costs $300–$1,000+. Our AI-assisted creation delivers artistic quality at an accessible price.',
    
    premiumFeatures: [
      'Meditation-ready audio included',
      'Multiple resolution options',
      'Wallpaper pack for all devices',
      'Lifetime access and updates'
    ],
    
    deliveryPackage: [
      'Series of 10–15 high-resolution images (8K)',
      'Meditation video version (4K)',
      'Desktop wallpapers (multiple resolutions)',
      'Mobile wallpapers (all sizes)',
      'Social media preview pack'
    ],
    
    faqs: [
      {
        question: 'How many visualizations will I receive?',
        answer: 'Typically 10–15 unique cinematic visualizations.'
      },
      {
        question: 'Can I use these for meditation?',
        answer: 'Yes, we include a meditation-ready video version with ambient audio.'
      },
      {
        question: 'Are these suitable for commercial use?',
        answer: 'Personal use is included. Commercial licensing available as upgrade.'
      }
    ]
  },

  {
    id: 'memorial-legacy-film',
    name: 'Memorial Legacy Film',
    tagline: 'Preserve forever',
    price: '$299',
    rating: 5,
    image: '/products/memorial-legacy-film.jpg',
    accentColor: '#D97706',
    badgeStyle: 'bg-amber-900 bg-opacity-80 text-amber-100',
    badgeText: 'WARM AMBER',
    collection: 'legacy',
    
    whatThisExperienceIs: 'Create a permanent, high-quality memorial that honors and preserves the memory of a loved one. This is a cinematic tribute combining storytelling, original music, and visual artistry into a lasting legacy.',
    
    whoItIsFor: [
      'Families honoring loved ones',
      'Memorial services',
      'Legacy preservation',
      'Celebration of life events',
      'Family archives'
    ],
    
    whatWeCreate: 'A professional-quality memorial film featuring photos, stories, original music, and cinematic production. A beautiful tribute designed to be shared and preserved.',
    
    deliverables: [
      'Professional memorial film (4K)',
      'Original memorial soundtrack',
      'Photo restoration and enhancement',
      'Cinematic editing and color grading',
      'Multiple format delivery',
      'Archival-quality storage'
    ],
    
    emotionalOutcome: 'A beautiful, lasting tribute that celebrates a life lived. Share a professional memorial that honors memory and brings family together.',
    
    productionTimeline: '10–14 business days',
    
    pricingExplanation: 'Professional memorial production typically costs $1,500–$5,000+. We provide premium quality memorial services at a compassionate price point.',
    
    premiumFeatures: [
      'Photo restoration included',
      'Professional color grading',
      'Original memorial music',
      'Archival storage and backup',
      'Family sharing portal'
    ],
    
    deliveryPackage: [
      '4K master memorial film',
      '1080p shareable version',
      'Original memorial soundtrack',
      'Restored and enhanced photos',
      'Family sharing portal access',
      'Archival-quality backup storage'
    ],
    
    faqs: [
      {
        question: 'Can I share this with family members?',
        answer: 'Yes, we provide a family sharing portal for secure access.'
      },
      {
        question: 'How long is the memorial film?',
        answer: 'Typically 5–10 minutes, customizable based on stories and photos.'
      },
      {
        question: 'Will my photos be restored?',
        answer: 'Yes, photo restoration and enhancement are included in the service.'
      }
    ]
  },

  {
    id: 'signature-masterpiece',
    name: 'Signature Masterpiece',
    tagline: 'Ultimate cinematic experience',
    price: '$499',
    rating: 5,
    image: '/products/signature-masterpiece.jpg',
    accentColor: '#7C3AED',
    badgeStyle: 'bg-violet-900 bg-opacity-80 text-violet-100',
    badgeText: 'ROYAL PURPLE',
    collection: 'storytelling',
    
    whatThisExperienceIs: 'The ultimate creative experience. A comprehensive cinematic production combining your complete story, original soundtrack, professional videography, and premium editing. This is the masterpiece tier—no compromises.',
    
    whoItIsFor: [
      'Premium brand builders',
      'High-profile individuals',
      'Major life milestones',
      'Professional portfolios',
      'Legacy creators'
    ],
    
    whatWeCreate: 'A complete cinematic masterpiece: comprehensive storytelling, original soundtrack, professional videography, premium editing, color grading, and sound design.',
    
    deliverables: [
      'Complete cinematic production (4K)',
      'Original orchestral soundtrack',
      'Professional videography',
      'Premium color grading',
      'Sound design and mixing',
      'Multiple format delivery',
      'Commercial licensing'
    ],
    
    emotionalOutcome: 'Experience the pinnacle of cinematic storytelling. Your complete story transformed into a professional-quality masterpiece worthy of film festivals.',
    
    productionTimeline: '14–21 business days',
    
    pricingExplanation: 'Professional cinematic production at this level typically costs $5,000–$20,000+. Our integrated AI-assisted process delivers premium quality at a fraction of traditional production costs.',
    
    premiumFeatures: [
      'Orchestral original soundtrack',
      'Professional videography included',
      'Premium color grading',
      'Sound design and mixing',
      'Unlimited revisions',
      'Full commercial licensing',
      'Film festival submission support'
    ],
    
    deliveryPackage: [
      '4K master cinematic file (ProRes)',
      '1080p delivery version',
      'Orchestral soundtrack (multiple formats)',
      'Behind-the-scenes documentary',
      'Making-of content',
      'Social media asset pack',
      'Usage rights documentation',
      'Archival backup storage'
    ],
    
    faqs: [
      {
        question: 'Can I submit this to film festivals?',
        answer: 'Yes, we provide film festival submission support and guidance.'
      },
      {
        question: 'How long is the final masterpiece?',
        answer: 'Typically 10–20 minutes, fully customizable based on your vision.'
      },
      {
        question: 'What is included in the production?',
        answer: 'Everything: storytelling, original music, videography, editing, color grading, sound design, and more.'
      }
    ]
  },

  {
    id: 'future-self-vision',
    name: 'Future Self Vision',
    tagline: 'Visualize yourself, successful, happy, peaceful',
    price: '$125',
    rating: 4.7,
    image: '/products/future-self-vision.jpg',
    accentColor: '#EC4899',
    badgeStyle: 'bg-pink-900 bg-opacity-80 text-pink-100',
    badgeText: 'ROSE GOLD',
    collection: 'transformation',
    
    whatThisExperienceIs: 'Visualize your ideal future self through cinematic AI-generated content. See yourself successful, happy, and at peace. A powerful tool for motivation, goal-setting, and personal transformation.',
    
    whoItIsFor: [
      'Goal-oriented individuals',
      'Personal development seekers',
      'Entrepreneurs and leaders',
      'Meditation practitioners',
      'Vision board creators'
    ],
    
    whatWeCreate: 'A series of cinematic visualizations of your ideal future self in various life scenarios. Stunning imagery designed for daily inspiration and motivation.',
    
    deliverables: [
      'Series of future self visualizations',
      'Cinematic video montage',
      'Meditation-ready version',
      'Wallpaper collection',
      'Vision board assets',
      'Digital delivery package'
    ],
    
    emotionalOutcome: 'Gain clarity on your ideal future. Experience daily inspiration through cinematic visualizations of your best self.',
    
    productionTimeline: '3–5 business days',
    
    pricingExplanation: 'Professional vision coaching and visualization services cost $200–$500+. Our AI-assisted creation delivers personalized visualizations at an accessible price.',
    
    premiumFeatures: [
      'Multiple scenario visualizations',
      'Meditation-ready audio',
      'Vision board asset pack',
      'Lifetime access and updates'
    ],
    
    deliveryPackage: [
      'Series of 12–20 cinematic visualizations (8K)',
      'Cinematic video montage (4K)',
      'Meditation version with ambient audio',
      'Vision board asset pack',
      'Desktop and mobile wallpapers'
    ],
    
    faqs: [
      {
        question: 'How many visualizations will I receive?',
        answer: 'Typically 12–20 unique cinematic visualizations of your ideal future.'
      },
      {
        question: 'Can I use these for meditation?',
        answer: 'Yes, we include a meditation-ready version with calming audio.'
      },
      {
        question: 'Can I customize the scenarios?',
        answer: 'Yes, you can specify scenarios and outcomes for your visualizations.'
      }
    ]
  },

  {
    id: 'relationship-healing',
    name: 'Relationship Healing',
    tagline: 'Transform pain to purpose',
    price: '$119',
    rating: 4.7,
    image: '/products/relationship-healing.jpg',
    accentColor: '#10B981',
    badgeStyle: 'bg-emerald-900 bg-opacity-80 text-emerald-100',
    badgeText: 'EMERALD GROWTH',
    collection: 'transformation',
    
    whatThisExperienceIs: 'Transform relationship experiences—past, present, or aspirational—into a healing cinematic journey. Process emotions, find closure, or celebrate growth through storytelling and visual art.',
    
    whoItIsFor: [
      'Individuals processing relationships',
      'Healing and closure seekers',
      'Personal growth enthusiasts',
      'Therapy and wellness practitioners',
      'Transformation documenters'
    ],
    
    whatWeCreate: 'A cinematic healing journey that transforms relationship experiences into art. Visual storytelling designed for emotional processing and growth.',
    
    deliverables: [
      'Cinematic healing journey (4K)',
      'Emotional soundtrack',
      'Healing meditation version',
      'Reflection journal prompts',
      'Personal usage license',
      'Digital delivery package'
    ],
    
    emotionalOutcome: 'Experience transformation and healing. Process emotions through cinematic storytelling and emerge with clarity and peace.',
    
    productionTimeline: '5–7 business days',
    
    pricingExplanation: 'Therapeutic art and healing services cost $150–$400+. Our AI-assisted creation combines therapeutic principles with cinematic art at an accessible price.',
    
    premiumFeatures: [
      'Therapeutic guidance included',
      'Meditation-ready version',
      'Reflection journal prompts',
      'Lifetime access'
    ],
    
    deliveryPackage: [
      'Cinematic healing journey (4K)',
      'Emotional soundtrack',
      'Meditation version with healing audio',
      'Reflection journal (PDF)',
      'Healing affirmations pack'
    ],
    
    faqs: [
      {
        question: 'Is this therapeutic?',
        answer: 'This is designed for emotional processing and self-reflection, not as a substitute for therapy.'
      },
      {
        question: 'How long is the healing journey?',
        answer: 'Typically 5–10 minutes, designed for contemplation and reflection.'
      },
      {
        question: 'Can I share this?',
        answer: 'Personal sharing is included. Commercial licensing available as upgrade.'
      }
    ]
  },

  {
    id: 'cinematic-life-story',
    name: 'Cinematic Life Story',
    tagline: 'Biography as cinema',
    price: '$249',
    rating: 4.8,
    image: '/products/cinematic-life-story.jpg',
    accentColor: '#F59E0B',
    badgeStyle: 'bg-amber-800 bg-opacity-80 text-amber-50',
    badgeText: 'GOLDEN NARRATIVE',
    collection: 'storytelling',
    
    whatThisExperienceIs: 'Transform your complete life story into a cinematic biography. From childhood to present, tell your complete narrative through professional storytelling, original music, and stunning visuals.',
    
    whoItIsFor: [
      'Individuals documenting their life',
      'Family historians',
      'Legacy creators',
      'Autobiography enthusiasts',
      'Personal brand builders'
    ],
    
    whatWeCreate: 'A comprehensive cinematic biography covering your complete life story. Professional production with original music, visual storytelling, and cinematic editing.',
    
    deliverables: [
      'Complete cinematic biography (4K)',
      'Original biographical soundtrack',
      'Professional editing and color grading',
      'Photo restoration and enhancement',
      'Multiple format delivery',
      'Archival storage'
    ],
    
    emotionalOutcome: 'See your entire life story transformed into a professional cinematic production. A comprehensive biography worthy of preservation and sharing.',
    
    productionTimeline: '12–16 business days',
    
    pricingExplanation: 'Professional biography production costs $2,000–$8,000+. Our integrated process delivers comprehensive life story production at a fraction of traditional costs.',
    
    premiumFeatures: [
      'Complete life story coverage',
      'Photo restoration included',
      'Original biographical music',
      'Professional color grading',
      'Archival storage and backup'
    ],
    
    deliveryPackage: [
      '4K master biography file',
      '1080p shareable version',
      'Original biographical soundtrack',
      'Restored and enhanced photos',
      'Behind-the-scenes content',
      'Archival backup storage'
    ],
    
    faqs: [
      {
        question: 'How long is the complete biography?',
        answer: 'Typically 15–30 minutes, covering your complete life story.'
      },
      {
        question: 'Can I share this with family?',
        answer: 'Yes, full family sharing rights are included.'
      },
      {
        question: 'Will my photos be restored?',
        answer: 'Yes, photo restoration and enhancement are included.'
      }
    ]
  },

  {
    id: 'couples-journey-film',
    name: 'Couples Journey Film',
    tagline: 'Your love story',
    price: '$199',
    rating: 4.9,
    image: '/products/couples-journey-film.jpg',
    accentColor: '#EC4899',
    badgeStyle: 'bg-rose-900 bg-opacity-80 text-rose-100',
    badgeText: 'ROMANTIC ROSE',
    collection: 'storytelling',
    
    whatThisExperienceIs: 'Celebrate your love story through cinematic storytelling. From first meeting to present day, transform your relationship journey into a beautiful film with original music and professional production.',
    
    whoItIsFor: [
      'Couples celebrating relationships',
      'Wedding anniversaries',
      'Engagement celebrations',
      'Relationship milestones',
      'Couples seeking creative expression'
    ],
    
    whatWeCreate: 'A cinematic love story film featuring your journey together. Original music, professional editing, and beautiful visual storytelling.',
    
    deliverables: [
      'Cinematic love story film (4K)',
      'Original romantic soundtrack',
      'Professional editing and color grading',
      'Photo restoration and enhancement',
      'Multiple format delivery',
      'Commercial usage rights'
    ],
    
    emotionalOutcome: 'Experience your love story transformed into a beautiful cinematic production. A timeless film celebrating your relationship.',
    
    productionTimeline: '8–12 business days',
    
    pricingExplanation: 'Professional wedding/couples video production costs $1,500–$5,000+. Our integrated process delivers premium couples films at a fraction of traditional costs.',
    
    premiumFeatures: [
      'Original romantic soundtrack',
      'Photo restoration included',
      'Professional color grading',
      'Multiple format delivery',
      'Lifetime access'
    ],
    
    deliveryPackage: [
      '4K master couples film',
      '1080p shareable version',
      'Original romantic soundtrack',
      'Restored and enhanced photos',
      'Social media clips',
      'Behind-the-scenes content'
    ],
    
    faqs: [
      {
        question: 'How long is the couples film?',
        answer: 'Typically 5–10 minutes, covering your relationship journey.'
      },
      {
        question: 'Can we share this on social media?',
        answer: 'Yes, full social media rights are included with optimized clips.'
      },
      {
        question: 'Can we use this for our wedding?',
        answer: 'Yes, this is perfect for weddings, anniversaries, or any celebration.'
      }
    ]
  },

  {
    id: 'sophia-ai-membership',
    name: 'Sophia AI Membership',
    tagline: '24/7 emotional support & wellness companion',
    price: '$19/month',
    rating: 4.8,
    image: '/products/sophia-ai-membership.jpg',
    accentColor: '#06B6D4',
    badgeStyle: 'bg-cyan-800 bg-opacity-80 text-cyan-50',
    badgeText: 'ONGOING SUPPORT',
    collection: 'creator',
    
    whatThisExperienceIs: 'Access 24/7 emotional support and wellness guidance through Sophia, your personal AI companion. Daily check-ins, emotional processing, goal tracking, and personalized wellness recommendations.',
    
    whoItIsFor: [
      'Wellness enthusiasts',
      'Daily support seekers',
      'Goal-oriented individuals',
      'Emotional wellness practitioners',
      'Personal development followers'
    ],
    
    whatWeCreate: 'A personalized AI wellness companion providing daily support, emotional guidance, and wellness recommendations tailored to your needs.',
    
    deliverables: [
      'Daily AI check-ins',
      'Emotional support conversations',
      'Goal tracking and progress',
      'Personalized wellness recommendations',
      'Meditation and reflection prompts',
      'Monthly wellness reports'
    ],
    
    emotionalOutcome: 'Experience consistent emotional support and wellness guidance. Feel supported, understood, and guided toward your wellness goals.',
    
    productionTimeline: 'Immediate access',
    
    pricingExplanation: 'Personal wellness coaching costs $100–$300+ per session. Sophia provides daily support at a fraction of traditional coaching costs.',
    
    premiumFeatures: [
      '24/7 availability',
      'Personalized recommendations',
      'Goal tracking',
      'Monthly wellness reports',
      'Unlimited conversations'
    ],
    
    deliveryPackage: [
      'Sophia AI app access',
      'Daily check-in prompts',
      'Emotional support conversations',
      'Goal tracking dashboard',
      'Monthly wellness report',
      'Meditation library access'
    ],
    
    faqs: [
      {
        question: 'Is this a substitute for therapy?',
        answer: 'No, this is wellness support, not therapy. For mental health concerns, consult a professional.'
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Yes, cancel anytime with no penalties.'
      },
      {
        question: 'How personalized is the support?',
        answer: 'Sophia learns your preferences and provides increasingly personalized recommendations.'
      }
    ]
  },

  {
    id: 'voice-cloning-studio',
    name: 'Voice Cloning Studio',
    tagline: 'Hear your story in your own voice',
    price: '$99',
    rating: 4.7,
    image: '/products/voice-cloning-studio.jpg',
    accentColor: '#C0C0C0',
    badgeStyle: 'bg-gray-700 bg-opacity-80 text-gray-100',
    badgeText: 'SILVER TECH',
    collection: 'creator',
    
    whatThisExperienceIs: 'Clone your voice and hear your story narrated in your own voice. Perfect for audiobooks, documentaries, or personal projects. Professional voice cloning technology with your unique vocal signature.',
    
    whoItIsFor: [
      'Authors and storytellers',
      'Content creators',
      'Documentary makers',
      'Personal archivists',
      'Accessibility advocates'
    ],
    
    whatWeCreate: 'A voice-cloned narration of your story using advanced AI voice technology. Your unique voice delivering your narrative.',
    
    deliverables: [
      'Voice clone creation',
      'Narrated story recording',
      'Professional audio mastering',
      'Multiple format delivery',
      'Usage rights documentation',
      'Digital delivery package'
    ],
    
    emotionalOutcome: 'Hear your story in your own voice. Experience the power of your narrative delivered with your unique vocal signature.',
    
    productionTimeline: '3–5 business days',
    
    pricingExplanation: 'Professional voice cloning and narration typically costs $300–$1,000+. Our integrated process delivers professional voice cloning at an accessible price.',
    
    premiumFeatures: [
      'Advanced voice cloning',
      'Professional audio mastering',
      'Multiple format delivery',
      'Unlimited revisions',
      'Commercial licensing available'
    ],
    
    deliveryPackage: [
      'Voice clone creation',
      'Narrated story (WAV + MP3)',
      'Professional audio mastering',
      'Usage rights documentation',
      'Backup storage'
    ],
    
    faqs: [
      {
        question: 'How accurate is the voice clone?',
        answer: 'Our technology captures your unique vocal characteristics with high accuracy.'
      },
      {
        question: 'Can I use this commercially?',
        answer: 'Personal use is included. Commercial licensing available as upgrade.'
      },
      {
        question: 'How long can the narration be?',
        answer: 'No length limit. We can narrate anything from short stories to full audiobooks.'
      }
    ]
  },

  {
    id: 'social-ready-clips',
    name: 'Social-Ready Clips',
    tagline: 'Auto-generated clips for TikTok & Instagram',
    price: '$39',
    rating: 4.6,
    image: '/products/social-ready-clips.jpg',
    accentColor: '#FF1493',
    badgeStyle: 'bg-pink-800 bg-opacity-80 text-pink-50',
    badgeText: 'VIRAL READY',
    collection: 'creator',
    
    whatThisExperienceIs: 'Transform your story into optimized social media clips. Auto-generated, formatted, and ready to post on TikTok, Instagram Reels, YouTube Shorts, and more.',
    
    whoItIsFor: [
      'Social media creators',
      'Content marketers',
      'Personal brand builders',
      'Influencers',
      'Content repurposers'
    ],
    
    whatWeCreate: 'A collection of optimized social media clips in all formats. Ready to post immediately with captions, trending audio, and viral optimization.',
    
    deliverables: [
      'TikTok-optimized clips',
      'Instagram Reels',
      'YouTube Shorts',
      'Captions and hashtags',
      'Trending audio integration',
      'Multi-format delivery'
    ],
    
    emotionalOutcome: 'Maximize your social media presence with professionally optimized clips. Share your story across all platforms effortlessly.',
    
    productionTimeline: '1–2 business days',
    
    pricingExplanation: 'Social media content creation services cost $200–$500+ per project. Our automated process delivers optimized clips at an accessible price.',
    
    premiumFeatures: [
      'Multi-platform optimization',
      'Trending audio integration',
      'Automatic caption generation',
      'Hashtag research included',
      'Viral optimization'
    ],
    
    deliveryPackage: [
      'TikTok clips (15–60 seconds)',
      'Instagram Reels (15–90 seconds)',
      'YouTube Shorts (15–60 seconds)',
      'Captions and subtitles',
      'Hashtag recommendations',
      'Trending audio suggestions'
    ],
    
    faqs: [
      {
        question: 'How many clips will I get?',
        answer: 'Typically 8–12 optimized clips across all platforms.'
      },
      {
        question: 'Can I edit the clips?',
        answer: 'Yes, all clips are provided in editable formats.'
      },
      {
        question: 'Are captions included?',
        answer: 'Yes, automatic captions and hashtag recommendations are included.'
      }
    ]
  },

  {
    id: 'family-vault',
    name: 'Family Vault',
    tagline: 'Precious memories preserved',
    price: '$149',
    rating: 4.8,
    image: '/products/family-vault.jpg',
    accentColor: '#8B4513',
    badgeStyle: 'bg-amber-900 bg-opacity-80 text-amber-50',
    badgeText: 'FAMILY LEGACY',
    collection: 'legacy',
    
    whatThisExperienceIs: 'Create a secure, organized family archive. Preserve precious memories, family stories, and heirlooms in a beautiful, accessible digital vault for generations.',
    
    whoItIsFor: [
      'Family historians',
      'Legacy preservers',
      'Multi-generational families',
      'Memory keepers',
      'Family archivists'
    ],
    
    whatWeCreate: 'A comprehensive family archive featuring organized memories, stories, photos, and heirlooms. Beautifully presented and securely stored.',
    
    deliverables: [
      'Family vault platform access',
      'Photo restoration and organization',
      'Family story documentation',
      'Secure archival storage',
      'Family sharing portal',
      'Lifetime preservation'
    ],
    
    emotionalOutcome: 'Preserve your family legacy for generations. Create a beautiful, organized archive of your family\'s precious memories and stories.',
    
    productionTimeline: '7–10 business days',
    
    pricingExplanation: 'Professional family archiving services cost $500–$2,000+. Our integrated platform provides comprehensive family preservation at an accessible price.',
    
    premiumFeatures: [
      'Photo restoration included',
      'Secure family sharing',
      'Lifetime preservation',
      'Multi-generational access',
      'Archival-quality storage'
    ],
    
    deliveryPackage: [
      'Family vault platform access',
      'Restored and organized photos',
      'Family story documentation',
      'Secure archival storage',
      'Family sharing portal',
      'Lifetime backup'
    ],
    
    faqs: [
      {
        question: 'How secure is the vault?',
        answer: 'Military-grade encryption and multi-generational access controls ensure security.'
      },
      {
        question: 'Can multiple family members access it?',
        answer: 'Yes, invite family members with customizable access levels.'
      },
      {
        question: 'How much storage is included?',
        answer: 'Unlimited storage for your family archive.'
      }
    ]
  },

  {
    id: 'nft-collection',
    name: 'NFT Collection',
    tagline: 'Your story as blockchain legacy',
    price: '$199',
    rating: 4.7,
    image: '/products/nft-collection.jpg',
    accentColor: '#FFD700',
    badgeStyle: 'bg-yellow-700 bg-opacity-80 text-yellow-50',
    badgeText: 'BLOCKCHAIN GOLD',
    collection: 'creator',
    
    whatThisExperienceIs: 'Transform your story into a blockchain-verified NFT collection. Create a permanent, verifiable digital legacy with ownership rights and blockchain authenticity.',
    
    whoItIsFor: [
      'Digital artists',
      'Collectors',
      'Tech-forward creators',
      'Legacy builders',
      'Web3 enthusiasts'
    ],
    
    whatWeCreate: 'A collection of NFTs representing your story, art, and legacy. Blockchain-verified, owned by you, with full authenticity and provenance.',
    
    deliverables: [
      'NFT collection creation',
      'Blockchain minting',
      'Smart contract deployment',
      'Ownership documentation',
      'Gallery presentation',
      'Commercial rights'
    ],
    
    emotionalOutcome: 'Own your digital legacy on the blockchain. Create a permanent, verifiable collection representing your story and art.',
    
    productionTimeline: '5–7 business days',
    
    pricingExplanation: 'Professional NFT creation and minting typically costs $500–$2,000+. Our integrated process handles everything at an accessible price.',
    
    premiumFeatures: [
      'Professional NFT creation',
      'Blockchain minting included',
      'Smart contract deployment',
      'Gallery presentation',
      'Ownership verification'
    ],
    
    deliveryPackage: [
      'NFT collection (5–10 pieces)',
      'Blockchain minting',
      'Smart contract deployment',
      'Ownership documentation',
      'Gallery presentation',
      'Commercial rights'
    ],
    
    faqs: [
      {
        question: 'What blockchain will my NFTs be on?',
        answer: 'We support Ethereum, Polygon, and other major blockchains.'
      },
      {
        question: 'Do I own the NFTs?',
        answer: 'Yes, you have full ownership and can trade or sell them.'
      },
      {
        question: 'How many NFTs are in a collection?',
        answer: 'Typically 5–10 unique NFTs, customizable based on your vision.'
      }
    ]
  }
]

export const COLLECTIONS = {
  storytelling: {
    name: 'Storytelling Collection',
    description: 'Transform your story into cinematic experiences',
    products: ['emotional-soundtrack', 'cinematic-story-film', 'cinematic-life-story', 'couples-journey-film']
  },
  legacy: {
    name: 'Legacy Collection',
    description: 'Preserve memories for generations',
    products: ['memorial-legacy-film', 'family-vault']
  },
  transformation: {
    name: 'Transformation Collection',
    description: 'Visualize and achieve your best self',
    products: ['dream-ai-visualization', 'future-self-vision', 'relationship-healing']
  },
  creator: {
    name: 'Creator Collection',
    description: 'Tools for content creators and artists',
    products: ['sophia-ai-membership', 'voice-cloning-studio', 'social-ready-clips', 'nft-collection']
  }
}
