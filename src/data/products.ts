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
  
  // Cinematic metadata
  genre: string
  deliveryTime: string
  experienceLevel: 'Essential' | 'Premium' | 'Elite'
  format: string
  
  // Outcome-focused description
  outcomeDescription: string
  
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
    
    genre: 'Musical Storytelling',
    deliveryTime: '48 Hours',
    experienceLevel: 'Essential',
    format: 'Audio',
    
    outcomeDescription: 'Transform your memories into a cinematic score that sounds like it was composed for the movie of your life.',
    
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
    
    genre: 'Cinematic Production',
    deliveryTime: '7–10 Days',
    experienceLevel: 'Premium',
    format: 'Film + Soundtrack',
    
    outcomeDescription: 'Turn your life into a feature film. Original music paired with stunning visuals that tell your story like a Hollywood production.',
    
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
    
    genre: 'Visual Exploration',
    deliveryTime: '24–48 Hours',
    experienceLevel: 'Essential',
    format: 'Visual Art + Video',
    
    outcomeDescription: 'See the hidden landscapes of your mind brought to life through stunning cinematic visuals. A visual journey into your subconscious.',
    
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
    
    genre: 'Legacy Preservation',
    deliveryTime: '10–14 Days',
    experienceLevel: 'Premium',
    format: 'Film + Archive',
    
    outcomeDescription: 'Honor a life lived with a beautiful, lasting tribute. A professional memorial that celebrates memory and brings family together.',
    
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
    
    genre: 'Luxury Cinema',
    deliveryTime: '14–21 Days',
    experienceLevel: 'Elite',
    format: 'Film + Soundtrack + Archive',
    
    outcomeDescription: 'The ultimate creative experience. A comprehensive cinematic masterpiece worthy of film festivals, combining your complete story, original orchestral soundtrack, and premium production.',
    
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
    
    genre: 'Aspirational Visualization',
    deliveryTime: '3–5 Days',
    experienceLevel: 'Premium',
    format: 'Visual + Video',
    
    outcomeDescription: 'See yourself thriving. A powerful visualization of your ideal future self—successful, happy, and at peace. Perfect for motivation and goal-setting.',
    
    whatThisExperienceIs: 'Visualize your ideal future self through cinematic AI-generated content. See yourself successful, happy, and at peace. A powerful tool for motivation, goal-setting, and personal transformation.',
    
    whoItIsFor: [
      'Goal-oriented individuals',
      'Personal development seekers',
      'Athletes and performers',
      'Career builders',
      'Transformation enthusiasts'
    ],
    
    whatWeCreate: 'A series of cinematic visualizations depicting your ideal future self in various contexts. Stunning imagery designed to inspire and motivate.',
    
    deliverables: [
      'Series of future self visualizations',
      'Motivational video version',
      'High-resolution imagery',
      'Desktop and mobile wallpapers',
      'Meditation-ready audio',
      'Digital delivery package'
    ],
    
    emotionalOutcome: 'Feel inspired and motivated. See yourself achieving your goals and living your ideal life through powerful visual imagery.',
    
    productionTimeline: '3–5 business days',
    
    pricingExplanation: 'Professional visualization coaching and imagery typically costs $500–$2,000+. Our AI-assisted creation delivers transformational content at an accessible price.',
    
    premiumFeatures: [
      'Motivational audio included',
      'Multiple visualization scenarios',
      'Wallpaper pack for all devices',
      'Lifetime access'
    ],
    
    deliveryPackage: [
      'Series of 8–12 high-resolution visualizations (8K)',
      'Motivational video version (4K)',
      'Desktop wallpapers (multiple resolutions)',
      'Mobile wallpapers (all sizes)',
      'Motivational audio track'
    ],
    
    faqs: [
      {
        question: 'How many visualizations will I receive?',
        answer: 'Typically 8–12 unique future self visualizations.'
      },
      {
        question: 'Can I use these for meditation?',
        answer: 'Yes, we include motivational audio to accompany your visualizations.'
      },
      {
        question: 'How often should I view these?',
        answer: 'Daily viewing is recommended for maximum motivational impact.'
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
    
    genre: 'Healing Expression',
    deliveryTime: '5–7 Days',
    experienceLevel: 'Premium',
    format: 'Film + Soundtrack',
    
    outcomeDescription: 'Transform relationship experiences into meaningful creative expression. Process emotions and find healing through cinematic storytelling.',
    
    whatThisExperienceIs: 'Process relationship experiences through creative expression. Create meaningful content that transforms pain into purpose. A therapeutic journey of healing and growth.',
    
    whoItIsFor: [
      'Those navigating relationship transitions',
      'Healing seekers',
      'Personal growth enthusiasts',
      'Storytellers and artists',
      'Transformation seekers'
    ],
    
    whatWeCreate: 'A healing-focused cinematic piece combining your story with therapeutic music and visual storytelling. Designed for processing and growth.',
    
    deliverables: [
      'Healing-focused cinematic film',
      'Therapeutic original soundtrack',
      'Guided reflection content',
      'Journaling prompts and resources',
      'Multiple format delivery',
      'Support resources'
    ],
    
    emotionalOutcome: 'Experience emotional release and healing. Transform pain into purpose through creative expression and cinematic storytelling.',
    
    productionTimeline: '5–7 business days',
    
    pricingExplanation: 'Therapeutic creative coaching typically costs $300–$1,500+. Our integrated approach delivers healing support at an accessible price.',
    
    premiumFeatures: [
      'Therapeutic music included',
      'Guided reflection content',
      'Support resources and journaling prompts',
      'Lifetime access'
    ],
    
    deliveryPackage: [
      'Healing-focused cinematic film (4K)',
      '1080p shareable version',
      'Therapeutic soundtrack',
      'Guided reflection content',
      'Journaling prompts and resources',
      'Support resource guide'
    ],
    
    faqs: [
      {
        question: 'Is this a substitute for therapy?',
        answer: 'No, this is a creative healing tool. We recommend professional therapy for ongoing support.'
      },
      {
        question: 'How long is the healing film?',
        answer: 'Typically 5–8 minutes, customizable based on your story.'
      },
      {
        question: 'Can I share this with others?',
        answer: 'Yes, sharing is encouraged as part of the healing process.'
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
    badgeStyle: 'bg-amber-800 bg-opacity-80 text-amber-100',
    badgeText: 'GOLDEN NARRATIVE',
    collection: 'legacy',
    
    genre: 'Biography Cinema',
    deliveryTime: '10–14 Days',
    experienceLevel: 'Premium',
    format: 'Film + Archive',
    
    outcomeDescription: 'Your entire life story told like a feature film. A comprehensive cinematic biography that preserves your legacy for generations.',
    
    whatThisExperienceIs: 'Turn your entire life story into a cinematic biography. From childhood to present, your journey becomes a professional film. Perfect for preserving your legacy and sharing with family.',
    
    whoItIsFor: [
      'Legacy builders',
      'Family historians',
      'Individuals with rich life stories',
      'Grandparents sharing wisdom',
      'Autobiography creators'
    ],
    
    whatWeCreate: 'A comprehensive cinematic biography covering your entire life journey. Professional production with storytelling, music, and visual artistry.',
    
    deliverables: [
      'Complete life story film (4K)',
      'Original biographical soundtrack',
      'Chapter-based structure',
      'Professional editing and color grading',
      'Family edition with sharing portal',
      'Multiple format delivery'
    ],
    
    emotionalOutcome: 'Leave a lasting legacy. Your complete life story preserved as a professional film for family and future generations.',
    
    productionTimeline: '10–14 business days',
    
    pricingExplanation: 'Professional biography production typically costs $2,000–$8,000+. Our integrated approach delivers comprehensive legacy preservation at an accessible price.',
    
    premiumFeatures: [
      'Complete life story coverage',
      'Chapter-based structure',
      'Original biographical music',
      'Family sharing portal',
      'Archival storage'
    ],
    
    deliveryPackage: [
      '4K master biography film',
      '1080p family-friendly version',
      'Original biographical soundtrack',
      'Chapter-based structure with timestamps',
      'Family sharing portal access',
      'Archival backup storage'
    ],
    
    faqs: [
      {
        question: 'How long is the complete biography?',
        answer: 'Typically 30–60 minutes, covering your entire life story.'
      },
      {
        question: 'Can I share this with family?',
        answer: 'Yes, we provide a family sharing portal for easy access.'
      },
      {
        question: 'Can I include family members in the story?',
        answer: 'Absolutely, family stories and perspectives are encouraged.'
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
    badgeStyle: 'bg-pink-900 bg-opacity-80 text-pink-100',
    badgeText: 'ROMANTIC ROSE',
    collection: 'storytelling',
    
    genre: 'Romantic Cinema',
    deliveryTime: '7–10 Days',
    experienceLevel: 'Premium',
    format: 'Film + Soundtrack',
    
    outcomeDescription: 'Celebrate your relationship journey with a professionally produced cinematic film. Your love story told like a romantic feature film.',
    
    whatThisExperienceIs: 'Celebrate your relationship journey with a professionally produced cinematic film of your love story. From first meeting to present day, your romance becomes a beautiful film.',
    
    whoItIsFor: [
      'Couples celebrating milestones',
      'Anniversary commemorations',
      'Wedding alternatives',
      'Long-term relationship celebrations',
      'Love story preservers'
    ],
    
    whatWeCreate: 'A romantic cinematic film featuring your relationship journey. Original romantic music, professional cinematography, and beautiful storytelling.',
    
    deliverables: [
      'Romantic cinematic film (4K)',
      'Original romantic soundtrack',
      'Professional cinematography',
      'Romantic color grading',
      'Social media clips',
      'Multiple format delivery'
    ],
    
    emotionalOutcome: 'Celebrate your love. Experience your relationship journey transformed into a beautiful, professional film worthy of sharing with the world.',
    
    productionTimeline: '7–10 business days',
    
    pricingExplanation: 'Professional couple film production typically costs $1,500–$5,000+. Our integrated approach delivers romantic cinema at an accessible price.',
    
    premiumFeatures: [
      'Original romantic music',
      'Professional cinematography',
      'Romantic color grading',
      'Social media optimization',
      'Commercial licensing'
    ],
    
    deliveryPackage: [
      '4K master romantic film',
      '1080p shareable version',
      'Original romantic soundtrack',
      'Social media clips (Instagram, TikTok)',
      'Behind-the-scenes content',
      'Usage rights documentation'
    ],
    
    faqs: [
      {
        question: 'Can we share this on social media?',
        answer: 'Yes, full social media rights are included with optimized clips.'
      },
      {
        question: 'How long is the film?',
        answer: 'Typically 5–10 minutes, customizable based on your story.'
      },
      {
        question: 'Can we use this for a wedding?',
        answer: 'Yes, perfect for anniversaries, weddings, or any celebration.'
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
    badgeStyle: 'bg-cyan-900 bg-opacity-80 text-cyan-100',
    badgeText: 'ONGOING SUPPORT',
    collection: 'creator',
    
    genre: 'Wellness Companion',
    deliveryTime: 'Immediate',
    experienceLevel: 'Essential',
    format: 'Digital Service',
    
    outcomeDescription: 'Your personal AI wellness companion. Available 24/7 for emotional support, guidance, and meaningful conversation whenever you need it.',
    
    whatThisExperienceIs: 'Get ongoing emotional support and wellness guidance from our AI companion. Available whenever you need to talk, reflect, or explore your thoughts and feelings.',
    
    whoItIsFor: [
      'Wellness seekers',
      'Those seeking ongoing support',
      'Reflection enthusiasts',
      'Personal growth practitioners',
      'Anyone needing a listening ear'
    ],
    
    whatWeCreate: 'A personalized AI wellness companion that learns your needs and provides tailored emotional support and guidance.',
    
    deliverables: [
      '24/7 AI companion access',
      'Personalized wellness guidance',
      'Emotional support conversations',
      'Reflection prompts and journaling',
      'Monthly wellness insights',
      'Community access'
    ],
    
    emotionalOutcome: 'Feel supported and understood. Access compassionate guidance whenever you need it, 24/7.',
    
    productionTimeline: 'Immediate Access',
    
    pricingExplanation: 'Ongoing therapy or coaching typically costs $100–$300+ per session. Our AI companion provides continuous support at a fraction of traditional costs.',
    
    premiumFeatures: [
      '24/7 availability',
      'Personalized learning',
      'Unlimited conversations',
      'Monthly wellness insights',
      'Community access'
    ],
    
    deliveryPackage: [
      'Immediate account activation',
      '24/7 AI companion access',
      'Personalized wellness guidance',
      'Monthly wellness reports',
      'Community features',
      'Lifetime membership'
    ],
    
    faqs: [
      {
        question: 'Is this a substitute for therapy?',
        answer: 'No, this is a wellness companion. Professional therapy is recommended for clinical needs.'
      },
      {
        question: 'How does the AI learn about me?',
        answer: 'The AI learns from your conversations to provide increasingly personalized support.'
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Yes, cancel anytime with no penalties.'
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
    
    genre: 'Voice Technology',
    deliveryTime: '3–5 Days',
    experienceLevel: 'Premium',
    format: 'Audio + Digital',
    
    outcomeDescription: 'Clone your voice and hear your story narrated in your own voice. Perfect for audiobooks, personal projects, and preserving your voice for the future.',
    
    whatThisExperienceIs: 'Clone your voice and hear your story narrated in your own voice. Perfect for audiobooks, personal projects, and preserving your voice for the future.',
    
    whoItIsFor: [
      'Authors and storytellers',
      'Content creators',
      'Voice preservation seekers',
      'Audiobook creators',
      'Personal archivists'
    ],
    
    whatWeCreate: 'A professional voice clone of your voice, ready to narrate any text. Your voice, perfectly preserved.',
    
    deliverables: [
      'Professional voice clone',
      'Narrated story in your voice',
      'Multiple audio formats',
      'Commercial usage rights',
      'Voice archive backup',
      'Digital delivery package'
    ],
    
    emotionalOutcome: 'Hear your story in your own voice. Preserve your voice for the future and share your narrative in the most personal way possible.',
    
    productionTimeline: '3–5 business days',
    
    pricingExplanation: 'Professional voice cloning typically costs $500–$2,000+. Our technology delivers high-quality voice cloning at an accessible price.',
    
    premiumFeatures: [
      'Professional voice quality',
      'Multiple audio formats',
      'Commercial usage rights',
      'Voice archive backup',
      'Lifetime access'
    ],
    
    deliveryPackage: [
      'Professional voice clone (multiple formats)',
      'Narrated story in your voice (MP3 + WAV)',
      'Voice archive backup',
      'Usage rights documentation',
      'Lifetime access to voice clone'
    ],
    
    faqs: [
      {
        question: 'How accurate is the voice clone?',
        answer: 'Very accurate. We use advanced AI to capture your unique voice characteristics.'
      },
      {
        question: 'Can I use this commercially?',
        answer: 'Yes, commercial usage rights are included.'
      },
      {
        question: 'Can I narrate any text?',
        answer: 'Yes, once your voice is cloned, you can narrate any text.'
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
    badgeStyle: 'bg-pink-800 bg-opacity-80 text-pink-100',
    badgeText: 'VIRAL READY',
    collection: 'creator',
    
    genre: 'Social Content',
    deliveryTime: '24–48 Hours',
    experienceLevel: 'Essential',
    format: 'Digital Video Clips',
    
    outcomeDescription: 'Get ready-to-share clips optimized for TikTok and Instagram. Perfect for going viral with your story.',
    
    whatThisExperienceIs: 'Get ready-to-share clips optimized for social media. Perfect for going viral with your story on TikTok, Instagram, and other platforms.',
    
    whoItIsFor: [
      'Social media creators',
      'Content marketers',
      'Influencers',
      'Brand builders',
      'Viral seekers'
    ],
    
    whatWeCreate: 'A series of optimized social media clips ready to post. Trending music, perfect timing, and platform-specific formatting.',
    
    deliverables: [
      'TikTok-optimized clips (9:16)',
      'Instagram Reels (9:16)',
      'Instagram Stories (9:16)',
      'Trending audio included',
      'Captions and hashtags',
      'Multiple clip variations'
    ],
    
    emotionalOutcome: 'Share your story with confidence. Get professional-quality clips optimized for maximum engagement and virality.',
    
    productionTimeline: '24–48 business hours',
    
    pricingExplanation: 'Professional social media editing typically costs $200–$500+ per project. Our automated process delivers optimized clips at an accessible price.',
    
    premiumFeatures: [
      'Trending audio included',
      'Platform-specific optimization',
      'Captions and hashtags',
      'Multiple clip variations',
      'Commercial usage rights'
    ],
    
    deliveryPackage: [
      'TikTok-optimized clips (multiple variations)',
      'Instagram Reels (multiple variations)',
      'Instagram Stories (multiple variations)',
      'Trending audio tracks',
      'Captions and hashtag suggestions',
      'Usage rights documentation'
    ],
    
    faqs: [
      {
        question: 'How many clips will I get?',
        answer: 'Typically 10–15 unique clip variations optimized for different platforms.'
      },
      {
        question: 'Can I use trending audio?',
        answer: 'Yes, trending audio is included and optimized for each platform.'
      },
      {
        question: 'Are these ready to post?',
        answer: 'Yes, completely ready. Just upload and post.'
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
    badgeStyle: 'bg-amber-950 bg-opacity-80 text-amber-50',
    badgeText: 'FAMILY LEGACY',
    collection: 'legacy',
    
    genre: 'Memory Archive',
    deliveryTime: 'Immediate',
    experienceLevel: 'Premium',
    format: 'Digital Archive',
    
    outcomeDescription: 'Create a secure family archive. Store and share precious memories with family members safely and securely for generations.',
    
    whatThisExperienceIs: 'Create a secure family archive. Store and share precious memories with family members safely and securely. Perfect for preserving family history.',
    
    whoItIsFor: [
      'Family historians',
      'Memory preservers',
      'Multi-generational families',
      'Legacy builders',
      'Family archivists'
    ],
    
    whatWeCreate: 'A secure digital vault for family memories. Photos, videos, stories, and documents organized and accessible to family members.',
    
    deliverables: [
      'Secure family vault access',
      'Unlimited storage capacity',
      'Multi-user access control',
      'Lifetime preservation',
      'Privacy protection',
      'Family sharing portal'
    ],
    
    emotionalOutcome: 'Keep family memories safe and accessible. Create a lasting digital archive that preserves your family history for generations.',
    
    productionTimeline: 'Immediate Access',
    
    pricingExplanation: 'Professional family archiving services typically cost $300–$1,000+. Our secure vault provides comprehensive preservation at an accessible price.',
    
    premiumFeatures: [
      'Unlimited storage',
      'Multi-user access',
      'Lifetime preservation',
      'Privacy protection',
      'Family sharing portal'
    ],
    
    deliveryPackage: [
      'Immediate vault activation',
      'Unlimited cloud storage',
      'Multi-user access management',
      'Lifetime preservation guarantee',
      'Family sharing portal',
      'Privacy and security features'
    ],
    
    faqs: [
      {
        question: 'How much storage do I get?',
        answer: 'Unlimited storage for all your family memories.'
      },
      {
        question: 'How many family members can access?',
        answer: 'Unlimited family members with customizable access controls.'
      },
      {
        question: 'Is my data secure?',
        answer: 'Yes, military-grade encryption and multiple backups ensure security.'
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
    badgeStyle: 'bg-yellow-800 bg-opacity-80 text-yellow-100',
    badgeText: 'BLOCKCHAIN GOLD',
    collection: 'creator',
    
    genre: 'Digital Legacy',
    deliveryTime: '5–7 Days',
    experienceLevel: 'Premium',
    format: 'NFT + Digital Asset',
    
    outcomeDescription: 'Mint your story as an NFT. Create a permanent, verifiable digital asset on the blockchain. Your story, forever preserved and owned.',
    
    whatThisExperienceIs: 'Mint your story as an NFT. Create a permanent, verifiable digital asset on the blockchain. Your story becomes a collectible digital legacy.',
    
    whoItIsFor: [
      'Digital creators',
      'Blockchain enthusiasts',
      'Digital asset collectors',
      'Future-forward thinkers',
      'Legacy innovators'
    ],
    
    whatWeCreate: 'A professional NFT collection representing your story. Minted on the blockchain with full ownership and resale capability.',
    
    deliverables: [
      'NFT minting service',
      'Blockchain verification',
      'Ownership documentation',
      'Resale capability',
      'Digital asset storage',
      'Collector portal access'
    ],
    
    emotionalOutcome: 'Own your digital legacy. Create a permanent, verifiable asset that represents your story on the blockchain.',
    
    productionTimeline: '5–7 business days',
    
    pricingExplanation: 'Professional NFT minting typically costs $200–$1,000+. Our integrated service delivers blockchain legacy at an accessible price.',
    
    premiumFeatures: [
      'Professional NFT minting',
      'Blockchain verification',
      'Resale capability',
      'Collector community access',
      'Lifetime ownership'
    ],
    
    deliveryPackage: [
      'NFT minting on blockchain',
      'Ownership documentation',
      'Collector portal access',
      'Resale capability',
      'Digital asset storage',
      'Community access'
    ],
    
    faqs: [
      {
        question: 'What blockchain will my NFT be on?',
        answer: 'We use Ethereum for maximum security and recognition.'
      },
      {
        question: 'Can I sell my NFT?',
        answer: 'Yes, full resale capability is included.'
      },
      {
        question: 'Is this a good investment?',
        answer: 'NFTs are digital assets. Value depends on market demand and rarity.'
      }
    ]
  },
]

export const COLLECTIONS = {
  storytelling: {
    name: 'Stories of the Heart',
    description: 'Transform your personal journey into cinematic experiences. From emotional soundtracks to complete films, tell your story like never before.',
    products: ['emotional-soundtrack', 'cinematic-story-film', 'cinematic-life-story', 'couples-journey-film'],
    backgroundGradient: 'linear-gradient(180deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.05) 100%)',
    ambientEffect: 'Slow golden particles'
  },
  legacy: {
    name: 'Stories of Legacy',
    description: 'Preserve memories for generations. Create lasting tributes that honor lives lived and preserve family history.',
    products: ['memorial-legacy-film', 'family-vault', 'cinematic-life-story'],
    backgroundGradient: 'linear-gradient(180deg, rgba(217,119,6,0.1) 0%, rgba(217,119,6,0.05) 100%)',
    ambientEffect: 'Film grain and vintage light leaks'
  },
  transformation: {
    name: 'Stories of Transformation',
    description: 'Visualize your growth. Explore your inner world and manifest your future through powerful cinematic experiences.',
    products: ['dream-ai-visualization', 'future-self-vision', 'relationship-healing', 'sophia-ai-membership'],
    backgroundGradient: 'linear-gradient(180deg, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.05) 100%)',
    ambientEffect: 'Aurora lights'
  },
  creator: {
    name: 'Stories of Creation',
    description: 'Build your brand. Create, share, and monetize your creative vision with professional tools and platforms.',
    products: ['voice-cloning-studio', 'social-ready-clips', 'nft-collection', 'sophia-ai-membership'],
    backgroundGradient: 'linear-gradient(180deg, rgba(124,58,237,0.1) 0%, rgba(124,58,237,0.05) 100%)',
    ambientEffect: 'Subtle royal purple glow'
  }
}
