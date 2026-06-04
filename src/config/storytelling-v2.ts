// Emotional Storytelling Engine Configuration

export type StoryPhase = 'dream' | 'memory' | 'emotion' | 'transformation' | 'creation' | 'delivery'

export type EmotionalTone = 'curiosity' | 'connection' | 'excitement' | 'anticipation' | 'inspiration' | 'empowerment'

export interface StoryArc {
  phase: StoryPhase
  title: string
  description: string
  emotion: EmotionalTone
  icon: string
  color: string
  duration: number // milliseconds
  content: string
  cta?: string
}

export interface ProductStory {
  productId: string
  productName: string
  tagline: string
  heroStatement: string
  storyArcs: StoryArc[]
  testimonials: Testimonial[]
  transformationMetrics: TransformationMetric[]
  successStories: SuccessStory[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  quote: string
  transformation: string
  rating: number
}

export interface TransformationMetric {
  label: string
  before: string
  after: string
  icon: string
  improvement: string
}

export interface SuccessStory {
  id: string
  title: string
  description: string
  image: string
  metrics: {
    label: string
    value: string
  }[]
  quote: string
  author: string
}

// Story Arc Definitions

export const STORY_PHASES: Record<StoryPhase, StoryArc> = {
  dream: {
    phase: 'dream',
    title: 'Dream',
    description: 'Imagine the Impossible',
    emotion: 'curiosity',
    icon: '✨',
    color: 'rgba(212, 175, 55, 0.3)',
    duration: 1000,
    content: 'What if you could create without limits? What if your imagination was the only boundary?',
    cta: 'Discover',
  },
  memory: {
    phase: 'memory',
    title: 'Memory',
    description: 'Connect with Your Past',
    emotion: 'connection',
    icon: '💭',
    color: 'rgba(147, 112, 219, 0.3)',
    duration: 1200,
    content: 'Every creator has a story. Every voice deserves to be heard. Every idea deserves to exist.',
    cta: 'Remember',
  },
  emotion: {
    phase: 'emotion',
    title: 'Emotion',
    description: 'Feel the Power',
    emotion: 'excitement',
    icon: '❤️',
    color: 'rgba(255, 107, 107, 0.3)',
    duration: 1000,
    content: 'Feel the rush of creation. Experience the joy of bringing your vision to life.',
    cta: 'Feel',
  },
  transformation: {
    phase: 'transformation',
    title: 'Transformation',
    description: 'Become Your Best Self',
    emotion: 'empowerment',
    icon: '🚀',
    color: 'rgba(76, 175, 80, 0.3)',
    duration: 1200,
    content: 'Transform your creative potential into reality. Unlock capabilities you never knew you had.',
    cta: 'Transform',
  },
  creation: {
    phase: 'creation',
    title: 'Creation',
    description: 'Make It Real',
    emotion: 'inspiration',
    icon: '🎨',
    color: 'rgba(255, 193, 7, 0.3)',
    duration: 1000,
    content: 'Create without compromise. Build without boundaries. Express without limits.',
    cta: 'Create',
  },
  delivery: {
    phase: 'delivery',
    title: 'Delivery',
    description: 'Share Your Masterpiece',
    emotion: 'anticipation',
    icon: '🎁',
    color: 'rgba(212, 175, 55, 0.3)',
    duration: 1200,
    content: 'Your creation is ready. The world is waiting. Your moment has arrived.',
    cta: 'Deliver',
  },
}

// Product Stories

export const PRODUCT_STORIES: Record<string, ProductStory> = {
  'ai-voice-clone': {
    productId: 'ai-voice-clone',
    productName: 'AI Voice Clone',
    tagline: 'Your Voice, Immortalized',
    heroStatement: 'Clone your voice and create content that sounds authentically like you, forever.',
    storyArcs: [
      {
        ...STORY_PHASES.dream,
        content: 'Imagine your voice reaching millions. Imagine narrating your own audiobook while you sleep. Imagine your voice living forever.',
      },
      {
        ...STORY_PHASES.memory,
        content: 'Remember the first time someone said "you have a great voice." Remember wanting to share it with the world. Remember thinking it was impossible.',
      },
      {
        ...STORY_PHASES.emotion,
        content: 'Feel the excitement of hearing your voice in professional-quality production. Feel the pride of creating something uniquely yours.',
      },
      {
        ...STORY_PHASES.transformation,
        content: 'Transform from voiceless to vocal. From listener to creator. From dreamer to doer.',
      },
      {
        ...STORY_PHASES.creation,
        content: 'Create unlimited voiceovers. Create audiobooks. Create podcasts. Create content that sounds like you.',
      },
      {
        ...STORY_PHASES.delivery,
        content: 'Share your voice with the world. Let your message reach millions. Your legacy begins now.',
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Sarah Chen',
        role: 'Content Creator',
        avatar: '/avatars/sarah.jpg',
        quote: 'I cloned my voice and created 50 videos in the time it used to take me to create 5. My audience loves the consistency.',
        transformation: 'From 10 hours/week to 2 hours/week of voiceover work',
        rating: 5,
      },
      {
        id: '2',
        name: 'Marcus Johnson',
        role: 'Audiobook Author',
        avatar: '/avatars/marcus.jpg',
        quote: 'My voice is now available 24/7 creating content. It feels like I have a clone working for me.',
        transformation: 'From 1 audiobook/year to 12 audiobooks/year',
        rating: 5,
      },
    ],
    transformationMetrics: [
      {
        label: 'Time Saved',
        before: '10 hours per video',
        after: '30 minutes per video',
        icon: '⏱️',
        improvement: '95% faster',
      },
      {
        label: 'Production Quality',
        before: 'Amateur recordings',
        after: 'Studio-quality audio',
        icon: '🎙️',
        improvement: 'Professional grade',
      },
      {
        label: 'Content Volume',
        before: '5 videos/month',
        after: '50 videos/month',
        icon: '📈',
        improvement: '10x more content',
      },
    ],
    successStories: [
      {
        id: '1',
        title: 'From Podcaster to Media Empire',
        description: 'How Sarah scaled her podcast from 10K to 1M listeners using AI voice cloning',
        image: '/stories/sarah-podcast.jpg',
        metrics: [
          { label: 'Listeners', value: '1M+' },
          { label: 'Episodes', value: '500+' },
          { label: 'Revenue', value: '$500K+' },
        ],
        quote: 'AI voice cloning gave me back my time and multiplied my reach.',
        author: 'Sarah Chen',
      },
    ],
  },

  'ai-music-producer': {
    productId: 'ai-music-producer',
    productName: 'AI Music Producer',
    tagline: 'Your Sound, Your Style, Infinite Possibilities',
    heroStatement: 'Generate unlimited original music in any genre, style, or mood. Your next hit is one click away.',
    storyArcs: [
      {
        ...STORY_PHASES.dream,
        content: 'Imagine having a world-class music producer in your pocket. Imagine creating hit songs without years of training.',
      },
      {
        ...STORY_PHASES.memory,
        content: 'Remember the first song that moved you. Remember wanting to create music like that. Remember thinking you needed expensive equipment.',
      },
      {
        ...STORY_PHASES.emotion,
        content: 'Feel the rush of hearing your first AI-generated track. Feel the creative possibilities opening up.',
      },
      {
        ...STORY_PHASES.transformation,
        content: 'Transform from music fan to music creator. From listener to producer.',
      },
      {
        ...STORY_PHASES.creation,
        content: 'Create lo-fi beats. Create orchestral symphonies. Create the soundtrack to your life.',
      },
      {
        ...STORY_PHASES.delivery,
        content: 'Release your music to the world. Get streamed millions of times. Build your music career.',
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'DJ Alex',
        role: 'Music Producer',
        avatar: '/avatars/alex.jpg',
        quote: 'I went from struggling to find inspiration to having unlimited creative possibilities. My productivity tripled.',
        transformation: 'From 2 tracks/month to 20 tracks/month',
        rating: 5,
      },
    ],
    transformationMetrics: [
      {
        label: 'Production Speed',
        before: '1 week per track',
        after: '5 minutes per track',
        icon: '⚡',
        improvement: '99% faster',
      },
      {
        label: 'Creative Options',
        before: '1 style',
        after: '100+ styles',
        icon: '🎵',
        improvement: 'Unlimited variety',
      },
      {
        label: 'Cost Savings',
        before: '$5,000 per track',
        after: '$0.50 per track',
        icon: '💰',
        improvement: '99% cheaper',
      },
    ],
    successStories: [],
  },

  'ai-music-video': {
    productId: 'ai-music-video',
    productName: 'AI Music Video',
    tagline: 'Cinematic Visuals for Your Sound',
    heroStatement: 'Create stunning 4K music videos instantly. Every song deserves a visual masterpiece.',
    storyArcs: [
      {
        ...STORY_PHASES.dream,
        content: 'Imagine your music with a Hollywood-quality music video. Imagine cinematic visuals that match your sound.',
      },
      {
        ...STORY_PHASES.memory,
        content: 'Remember watching your favorite music video. Remember wishing you could create something that epic.',
      },
      {
        ...STORY_PHASES.emotion,
        content: 'Feel the power of visuals paired with your music. Feel the emotional impact amplified.',
      },
      {
        ...STORY_PHASES.transformation,
        content: 'Transform your audio into visual art. Transform your music into a complete experience.',
      },
      {
        ...STORY_PHASES.creation,
        content: 'Create cinematic videos. Create viral content. Create your visual brand.',
      },
      {
        ...STORY_PHASES.delivery,
        content: 'Release your music video to the world. Watch it go viral. Celebrate your creation.',
      },
    ],
    testimonials: [],
    transformationMetrics: [],
    successStories: [],
  },

  'ai-podcast-producer': {
    productId: 'ai-podcast-producer',
    productName: 'AI Podcast Producer',
    tagline: 'Your Podcast, Professionally Produced',
    heroStatement: 'Generate, edit, and distribute podcast episodes automatically. Your show never stops.',
    storyArcs: [
      {
        ...STORY_PHASES.dream,
        content: 'Imagine having a podcast that produces itself. Imagine professional quality without the production headache.',
      },
      {
        ...STORY_PHASES.memory,
        content: 'Remember wanting to start a podcast. Remember being overwhelmed by the technical side.',
      },
      {
        ...STORY_PHASES.emotion,
        content: 'Feel the relief of automated production. Feel the freedom to focus on content.',
      },
      {
        ...STORY_PHASES.transformation,
        content: 'Transform from podcaster to media company. From solo creator to scaled operation.',
      },
      {
        ...STORY_PHASES.creation,
        content: 'Create episodes daily. Create a loyal audience. Create a media empire.',
      },
      {
        ...STORY_PHASES.delivery,
        content: 'Distribute to all platforms. Reach millions of listeners. Build your podcast brand.',
      },
    ],
    testimonials: [],
    transformationMetrics: [],
    successStories: [],
  },

  'ai-artist-label': {
    productId: 'ai-artist-label',
    productName: 'AI Artist Label',
    tagline: 'Your Independent Music Label',
    heroStatement: 'Distribute, monetize, and grow your AI-generated music catalog. Build your music empire.',
    storyArcs: [
      {
        ...STORY_PHASES.dream,
        content: 'Imagine owning your own record label. Imagine building a music empire from your bedroom.',
      },
      {
        ...STORY_PHASES.memory,
        content: 'Remember dreaming of being a music mogul. Remember thinking it required massive capital.',
      },
      {
        ...STORY_PHASES.emotion,
        content: 'Feel the power of ownership. Feel the pride of building something from nothing.',
      },
      {
        ...STORY_PHASES.transformation,
        content: 'Transform from artist to entrepreneur. From creator to business owner.',
      },
      {
        ...STORY_PHASES.creation,
        content: 'Create your catalog. Create revenue streams. Create your music business.',
      },
      {
        ...STORY_PHASES.delivery,
        content: 'Distribute globally. Earn royalties. Build your music empire.',
      },
    ],
    testimonials: [],
    transformationMetrics: [],
    successStories: [],
  },
}

// Emotional Journey Mapping

export interface EmotionalJourneyMap {
  stage: number
  emotion: EmotionalTone
  trigger: string
  action: string
  reward: string
  nextEmotion: EmotionalTone
}

export const EMOTIONAL_JOURNEY: EmotionalJourneyMap[] = [
  {
    stage: 1,
    emotion: 'curiosity',
    trigger: 'See the product',
    action: 'Explore possibilities',
    reward: 'Inspiration',
    nextEmotion: 'connection',
  },
  {
    stage: 2,
    emotion: 'connection',
    trigger: 'Read success stories',
    action: 'See yourself in the story',
    reward: 'Relatability',
    nextEmotion: 'excitement',
  },
  {
    stage: 3,
    emotion: 'excitement',
    trigger: 'See transformation metrics',
    action: 'Imagine the results',
    reward: 'Possibility',
    nextEmotion: 'anticipation',
  },
  {
    stage: 4,
    emotion: 'anticipation',
    trigger: 'See pricing and CTA',
    action: 'Make purchase decision',
    reward: 'Ownership',
    nextEmotion: 'inspiration',
  },
]

// Narrative Triggers

export interface NarrativeTrigger {
  id: string
  emotion: EmotionalTone
  trigger: string
  content: string
  animation: string
  delay: number
}

export const NARRATIVE_TRIGGERS: NarrativeTrigger[] = [
  {
    id: 'curiosity-1',
    emotion: 'curiosity',
    trigger: 'Page load',
    content: 'What if you could create without limits?',
    animation: 'fadeIn',
    delay: 0,
  },
  {
    id: 'curiosity-2',
    emotion: 'curiosity',
    trigger: 'Scroll to features',
    content: 'Discover what\'s possible',
    animation: 'slideUp',
    delay: 200,
  },
  {
    id: 'connection-1',
    emotion: 'connection',
    trigger: 'Scroll to testimonials',
    content: 'See how creators like you transformed their work',
    animation: 'fadeIn',
    delay: 300,
  },
  {
    id: 'excitement-1',
    emotion: 'excitement',
    trigger: 'Scroll to metrics',
    content: 'Imagine these results in your life',
    animation: 'scaleIn',
    delay: 400,
  },
  {
    id: 'anticipation-1',
    emotion: 'anticipation',
    trigger: 'Scroll to CTA',
    content: 'Your transformation starts now',
    animation: 'glowIn',
    delay: 500,
  },
]

// Story-Driven Copy Templates

export const STORY_COPY = {
  heroHeadline: (productName: string) =>
    `${productName}: The Tool That Transforms Creators`,
  
  curiosityStatement: (action: string) =>
    `What if you could ${action} without limits?`,
  
  connectionStatement: (transformation: string) =>
    `Join thousands of creators who have already ${transformation}`,
  
  excitementStatement: (benefit: string) =>
    `Imagine ${benefit}. Now stop imagining.`,
  
  anticipationStatement: (action: string) =>
    `Your ${action} journey starts today`,
  
  transformationStatement: (before: string, after: string) =>
    `From ${before} to ${after}. Your story begins now.`,
}

// Emotional Color Palette

export const EMOTIONAL_COLORS: Record<EmotionalTone, string> = {
  curiosity: 'rgba(212, 175, 55, 0.3)', // Gold - Wonder
  connection: 'rgba(147, 112, 219, 0.3)', // Purple - Intimacy
  excitement: 'rgba(255, 107, 107, 0.3)', // Red - Energy
  anticipation: 'rgba(76, 175, 80, 0.3)', // Green - Growth
  inspiration: 'rgba(255, 193, 7, 0.3)', // Yellow - Creativity
  empowerment: 'rgba(33, 150, 243, 0.3)', // Blue - Confidence
}

// Emotional Animation Timings

export const EMOTIONAL_TIMINGS: Record<EmotionalTone, number> = {
  curiosity: 800,
  connection: 1000,
  excitement: 600,
  anticipation: 1200,
  inspiration: 900,
  empowerment: 700,
}
