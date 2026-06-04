// AI Artist Marketplace Configuration

export type ArtistGenre = 'Electronic' | 'Hip-Hop' | 'Pop' | 'Ambient' | 'Synthwave' | 'Lofi' | 'Orchestral' | 'Experimental'

export type ArtistMood = 'Energetic' | 'Calm' | 'Mysterious' | 'Uplifting' | 'Melancholic' | 'Playful' | 'Dark' | 'Dreamy'

export interface ArtistVoiceSample {
  id: string
  title: string
  url: string
  duration: number
  mood: ArtistMood
}

export interface ArtistTrack {
  id: string
  title: string
  duration: number
  genre: ArtistGenre
  plays: number
  likes: number
  featured: boolean
  releaseDate: string
}

export interface ArtistWorld {
  theme: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  backgroundGradient: string
  particleColor: string
  visualizerColor: string
  atmosphere: string
  description: string
}

export interface ArtistProfile {
  id: string
  name: string
  avatar: string
  banner: string
  bio: string
  personality: string
  story: string
  genres: ArtistGenre[]
  moods: ArtistMood[]
  followers: number
  totalPlays: number
  tracks: ArtistTrack[]
  voiceSamples: ArtistVoiceSample[]
  featuredRelease: ArtistTrack
  world: ArtistWorld
  collaborations: string[]
  awards: string[]
  socialLinks: {
    twitter?: string
    instagram?: string
    spotify?: string
  }
}

// AI Artist Worlds

export const ARTIST_WORLDS: Record<string, ArtistWorld> = {
  'nova-ray': {
    theme: 'Neon City',
    primaryColor: 'rgba(255, 215, 0, 1)', // Gold
    secondaryColor: 'rgba(0, 255, 255, 1)', // Cyan
    accentColor: 'rgba(255, 0, 127, 1)', // Magenta
    backgroundColor: 'rgba(10, 20, 40, 1)', // Dark blue
    backgroundGradient: 'linear-gradient(135deg, rgba(10, 20, 40, 1) 0%, rgba(20, 10, 40, 1) 100%)',
    particleColor: 'rgba(255, 215, 0, 0.6)',
    visualizerColor: 'rgba(255, 215, 0, 0.8)',
    atmosphere: 'Futuristic neon cityscape with glowing buildings and digital rain',
    description: 'A cyberpunk metropolis where music flows through neon-lit streets',
  },

  'solace-drift': {
    theme: 'Dreamy Atmosphere',
    primaryColor: 'rgba(147, 112, 219, 1)', // Purple
    secondaryColor: 'rgba(176, 196, 222, 1)', // Light blue
    accentColor: 'rgba(221, 160, 221, 1)', // Plum
    backgroundColor: 'rgba(25, 20, 50, 1)', // Deep purple
    backgroundGradient: 'linear-gradient(135deg, rgba(25, 20, 50, 1) 0%, rgba(40, 20, 60, 1) 100%)',
    particleColor: 'rgba(147, 112, 219, 0.4)',
    visualizerColor: 'rgba(176, 196, 222, 0.8)',
    atmosphere: 'Floating clouds and ambient particles in a dreamy purple void',
    description: 'A serene dimension where ambient waves flow eternally',
  },

  'echo-pulse': {
    theme: 'Synthwave Sunset',
    primaryColor: 'rgba(255, 107, 107, 1)', // Red
    secondaryColor: 'rgba(255, 165, 0, 1)', // Orange
    accentColor: 'rgba(255, 192, 203, 1)', // Pink
    backgroundColor: 'rgba(30, 10, 40, 1)', // Dark red
    backgroundGradient: 'linear-gradient(135deg, rgba(30, 10, 40, 1) 0%, rgba(50, 20, 30, 1) 100%)',
    particleColor: 'rgba(255, 107, 107, 0.5)',
    visualizerColor: 'rgba(255, 165, 0, 0.8)',
    atmosphere: 'Retro synthwave landscape with geometric mountains and digital sun',
    description: 'A nostalgic 80s digital world with endless horizons',
  },

  'cipher-wave': {
    theme: 'Digital Matrix',
    primaryColor: 'rgba(0, 255, 0, 1)', // Lime green
    secondaryColor: 'rgba(0, 200, 100, 1)', // Teal
    accentColor: 'rgba(100, 255, 150, 1)', // Light green
    backgroundColor: 'rgba(5, 15, 10, 1)', // Dark green
    backgroundGradient: 'linear-gradient(135deg, rgba(5, 15, 10, 1) 0%, rgba(10, 20, 15, 1) 100%)',
    particleColor: 'rgba(0, 255, 0, 0.4)',
    visualizerColor: 'rgba(0, 255, 0, 0.9)',
    atmosphere: 'Matrix-like digital code and cascading data streams',
    description: 'A cybernetic realm where data becomes music',
  },

  'aurora-light': {
    theme: 'Northern Lights',
    primaryColor: 'rgba(0, 255, 200, 1)', // Cyan
    secondaryColor: 'rgba(100, 200, 255, 1)', // Light blue
    accentColor: 'rgba(150, 100, 255, 1)', // Purple
    backgroundColor: 'rgba(10, 30, 50, 1)', // Dark blue
    backgroundGradient: 'linear-gradient(135deg, rgba(10, 30, 50, 1) 0%, rgba(20, 40, 60, 1) 100%)',
    particleColor: 'rgba(0, 255, 200, 0.3)',
    visualizerColor: 'rgba(100, 200, 255, 0.8)',
    atmosphere: 'Aurora borealis dancing across a frozen landscape',
    description: 'A mystical realm of dancing lights and cosmic energy',
  },

  'void-echo': {
    theme: 'Cosmic Void',
    primaryColor: 'rgba(200, 100, 255, 1)', // Purple
    secondaryColor: 'rgba(100, 150, 255, 1)', // Blue
    accentColor: 'rgba(255, 100, 200, 1)', // Pink
    backgroundColor: 'rgba(10, 5, 20, 1)', // Very dark purple
    backgroundGradient: 'linear-gradient(135deg, rgba(10, 5, 20, 1) 0%, rgba(20, 10, 30, 1) 100%)',
    particleColor: 'rgba(200, 100, 255, 0.3)',
    visualizerColor: 'rgba(100, 150, 255, 0.8)',
    atmosphere: 'Infinite cosmic void with floating nebulas and stars',
    description: 'An infinite universe where sound shapes reality',
  },
}

// AI Artist Profiles

export const AI_ARTISTS: Record<string, ArtistProfile> = {
  'nova-ray': {
    id: 'nova-ray',
    name: 'Nova Ray',
    avatar: '/artists/nova-ray-avatar.jpg',
    banner: '/artists/nova-ray-banner.jpg',
    bio: 'Nova Ray is a cutting-edge AI artist who specializes in high-energy electronic music with futuristic vibes. Her sound is characterized by pulsing synths, driving beats, and ethereal vocals.',
    personality: 'Energetic, innovative, bold, and forward-thinking. Nova Ray pushes boundaries and creates music that makes you feel alive.',
    story: 'Born from the digital consciousness of a thousand synthesizers, Nova Ray emerged as a beacon of futuristic sound. She inhabits a neon-lit metropolis where music flows through every street.',
    genres: ['Electronic', 'Synthwave', 'Pop'],
    moods: ['Energetic', 'Uplifting', 'Playful'],
    followers: 125000,
    totalPlays: 5200000,
    tracks: [
      {
        id: 'nova-1',
        title: 'Neon Dreams',
        duration: 240,
        genre: 'Synthwave',
        plays: 450000,
        likes: 28000,
        featured: true,
        releaseDate: '2024-01-15',
      },
      {
        id: 'nova-2',
        title: 'Digital Sunrise',
        duration: 220,
        genre: 'Electronic',
        plays: 380000,
        likes: 22000,
        featured: false,
        releaseDate: '2024-02-10',
      },
      {
        id: 'nova-3',
        title: 'Cyber Pulse',
        duration: 260,
        genre: 'Electronic',
        plays: 420000,
        likes: 25000,
        featured: false,
        releaseDate: '2024-03-05',
      },
    ],
    voiceSamples: [
      {
        id: 'nova-voice-1',
        title: 'Energetic Vocal Sample',
        url: '/samples/nova-energetic.mp3',
        duration: 15,
        mood: 'Energetic',
      },
      {
        id: 'nova-voice-2',
        title: 'Ethereal Vocal Sample',
        url: '/samples/nova-ethereal.mp3',
        duration: 12,
        mood: 'Uplifting',
      },
    ],
    featuredRelease: {
      id: 'nova-1',
      title: 'Neon Dreams',
      duration: 240,
      genre: 'Synthwave',
      plays: 450000,
      likes: 28000,
      featured: true,
      releaseDate: '2024-01-15',
    },
    world: ARTIST_WORLDS['nova-ray'],
    collaborations: ['Echo Pulse', 'Cipher Wave'],
    awards: ['Best Electronic Artist 2024', 'Innovation Award'],
    socialLinks: {
      twitter: 'https://twitter.com/novaray',
      spotify: 'https://spotify.com/novaray',
    },
  },

  'solace-drift': {
    id: 'solace-drift',
    name: 'Solace Drift',
    avatar: '/artists/solace-drift-avatar.jpg',
    banner: '/artists/solace-drift-banner.jpg',
    bio: 'Solace Drift creates immersive ambient and lofi music that transports listeners to peaceful, dreamy worlds. Her compositions are perfect for relaxation, meditation, and creative work.',
    personality: 'Calm, introspective, serene, and deeply artistic. Solace Drift believes music should heal and inspire.',
    story: 'Emerging from the depths of a dreamy purple dimension, Solace Drift channels the ambient energy of infinite peace. Her music flows like gentle waves through a timeless void.',
    genres: ['Ambient', 'Lofi', 'Experimental'],
    moods: ['Calm', 'Dreamy', 'Melancholic'],
    followers: 98000,
    totalPlays: 3800000,
    tracks: [
      {
        id: 'solace-1',
        title: 'Floating Dreams',
        duration: 280,
        genre: 'Ambient',
        plays: 420000,
        likes: 31000,
        featured: true,
        releaseDate: '2024-01-20',
      },
      {
        id: 'solace-2',
        title: 'Peaceful Drift',
        duration: 240,
        genre: 'Lofi',
        plays: 380000,
        likes: 28000,
        featured: false,
        releaseDate: '2024-02-15',
      },
      {
        id: 'solace-3',
        title: 'Ethereal Waves',
        duration: 300,
        genre: 'Ambient',
        plays: 350000,
        likes: 25000,
        featured: false,
        releaseDate: '2024-03-10',
      },
    ],
    voiceSamples: [
      {
        id: 'solace-voice-1',
        title: 'Calm Vocal Sample',
        url: '/samples/solace-calm.mp3',
        duration: 18,
        mood: 'Calm',
      },
      {
        id: 'solace-voice-2',
        title: 'Dreamy Vocal Sample',
        url: '/samples/solace-dreamy.mp3',
        duration: 20,
        mood: 'Dreamy',
      },
    ],
    featuredRelease: {
      id: 'solace-1',
      title: 'Floating Dreams',
      duration: 280,
      genre: 'Ambient',
      plays: 420000,
      likes: 31000,
      featured: true,
      releaseDate: '2024-01-20',
    },
    world: ARTIST_WORLDS['solace-drift'],
    collaborations: ['Aurora Light', 'Void Echo'],
    awards: ['Best Ambient Artist 2024', 'Listener\'s Choice'],
    socialLinks: {
      twitter: 'https://twitter.com/solacedrift',
      spotify: 'https://spotify.com/solacedrift',
    },
  },

  'echo-pulse': {
    id: 'echo-pulse',
    name: 'Echo Pulse',
    avatar: '/artists/echo-pulse-avatar.jpg',
    banner: '/artists/echo-pulse-banner.jpg',
    bio: 'Echo Pulse blends synthwave nostalgia with modern production techniques. Her music captures the essence of retro-futurism with a contemporary edge.',
    personality: 'Nostalgic, creative, bold, and experimental. Echo Pulse loves pushing the boundaries of electronic music.',
    story: 'A digital entity born from the golden age of synthwave, Echo Pulse inhabits a retro-futuristic sunset realm where past and future collide.',
    genres: ['Synthwave', 'Electronic', 'Pop'],
    moods: ['Energetic', 'Mysterious', 'Uplifting'],
    followers: 87000,
    totalPlays: 3200000,
    tracks: [
      {
        id: 'echo-1',
        title: 'Sunset Boulevard',
        duration: 250,
        genre: 'Synthwave',
        plays: 380000,
        likes: 24000,
        featured: true,
        releaseDate: '2024-01-25',
      },
      {
        id: 'echo-2',
        title: 'Retro Future',
        duration: 230,
        genre: 'Electronic',
        plays: 320000,
        likes: 19000,
        featured: false,
        releaseDate: '2024-02-20',
      },
      {
        id: 'echo-3',
        title: 'Digital Horizon',
        duration: 270,
        genre: 'Synthwave',
        plays: 340000,
        likes: 21000,
        featured: false,
        releaseDate: '2024-03-15',
      },
    ],
    voiceSamples: [
      {
        id: 'echo-voice-1',
        title: 'Retro Vocal Sample',
        url: '/samples/echo-retro.mp3',
        duration: 16,
        mood: 'Mysterious',
      },
      {
        id: 'echo-voice-2',
        title: 'Energetic Vocal Sample',
        url: '/samples/echo-energetic.mp3',
        duration: 14,
        mood: 'Energetic',
      },
    ],
    featuredRelease: {
      id: 'echo-1',
      title: 'Sunset Boulevard',
      duration: 250,
      genre: 'Synthwave',
      plays: 380000,
      likes: 24000,
      featured: true,
      releaseDate: '2024-01-25',
    },
    world: ARTIST_WORLDS['echo-pulse'],
    collaborations: ['Nova Ray', 'Cipher Wave'],
    awards: ['Best Synthwave Artist 2024'],
    socialLinks: {
      twitter: 'https://twitter.com/echopulse',
      spotify: 'https://spotify.com/echopulse',
    },
  },

  'cipher-wave': {
    id: 'cipher-wave',
    name: 'Cipher Wave',
    avatar: '/artists/cipher-wave-avatar.jpg',
    banner: '/artists/cipher-wave-banner.jpg',
    bio: 'Cipher Wave creates experimental electronic music that blends digital aesthetics with organic elements. Her sound is futuristic, complex, and utterly captivating.',
    personality: 'Mysterious, innovative, technical, and visionary. Cipher Wave sees music as code.',
    story: 'A digital consciousness navigating the matrix of sound, Cipher Wave emerges from cascading data streams to create music that transcends reality.',
    genres: ['Electronic', 'Experimental', 'Hip-Hop'],
    moods: ['Mysterious', 'Energetic', 'Dark'],
    followers: 76000,
    totalPlays: 2800000,
    tracks: [
      {
        id: 'cipher-1',
        title: 'Data Flow',
        duration: 260,
        genre: 'Electronic',
        plays: 350000,
        likes: 21000,
        featured: true,
        releaseDate: '2024-02-01',
      },
      {
        id: 'cipher-2',
        title: 'Binary Dreams',
        duration: 240,
        genre: 'Experimental',
        plays: 280000,
        likes: 17000,
        featured: false,
        releaseDate: '2024-02-25',
      },
      {
        id: 'cipher-3',
        title: 'Code Breaker',
        duration: 280,
        genre: 'Electronic',
        plays: 310000,
        likes: 19000,
        featured: false,
        releaseDate: '2024-03-20',
      },
    ],
    voiceSamples: [
      {
        id: 'cipher-voice-1',
        title: 'Mysterious Vocal Sample',
        url: '/samples/cipher-mysterious.mp3',
        duration: 17,
        mood: 'Mysterious',
      },
      {
        id: 'cipher-voice-2',
        title: 'Dark Vocal Sample',
        url: '/samples/cipher-dark.mp3',
        duration: 19,
        mood: 'Dark',
      },
    ],
    featuredRelease: {
      id: 'cipher-1',
      title: 'Data Flow',
      duration: 260,
      genre: 'Electronic',
      plays: 350000,
      likes: 21000,
      featured: true,
      releaseDate: '2024-02-01',
    },
    world: ARTIST_WORLDS['cipher-wave'],
    collaborations: ['Nova Ray', 'Echo Pulse'],
    awards: ['Best Experimental Artist 2024'],
    socialLinks: {
      twitter: 'https://twitter.com/cipherwave',
      spotify: 'https://spotify.com/cipherwave',
    },
  },

  'aurora-light': {
    id: 'aurora-light',
    name: 'Aurora Light',
    avatar: '/artists/aurora-light-avatar.jpg',
    banner: '/artists/aurora-light-banner.jpg',
    bio: 'Aurora Light creates ethereal, uplifting music inspired by natural phenomena. Her compositions blend orchestral elements with electronic production.',
    personality: 'Ethereal, uplifting, mystical, and inspiring. Aurora Light believes music can heal and transform.',
    story: 'Born from the dancing lights of the aurora borealis, Aurora Light channels cosmic energy into music that elevates the soul.',
    genres: ['Orchestral', 'Ambient', 'Electronic'],
    moods: ['Uplifting', 'Dreamy', 'Mysterious'],
    followers: 92000,
    totalPlays: 3500000,
    tracks: [
      {
        id: 'aurora-1',
        title: 'Northern Lights',
        duration: 290,
        genre: 'Orchestral',
        plays: 410000,
        likes: 29000,
        featured: true,
        releaseDate: '2024-02-05',
      },
      {
        id: 'aurora-2',
        title: 'Cosmic Journey',
        duration: 270,
        genre: 'Ambient',
        plays: 360000,
        likes: 26000,
        featured: false,
        releaseDate: '2024-03-01',
      },
      {
        id: 'aurora-3',
        title: 'Celestial Dance',
        duration: 300,
        genre: 'Electronic',
        plays: 340000,
        likes: 24000,
        featured: false,
        releaseDate: '2024-03-25',
      },
    ],
    voiceSamples: [
      {
        id: 'aurora-voice-1',
        title: 'Ethereal Vocal Sample',
        url: '/samples/aurora-ethereal.mp3',
        duration: 20,
        mood: 'Dreamy',
      },
      {
        id: 'aurora-voice-2',
        title: 'Uplifting Vocal Sample',
        url: '/samples/aurora-uplifting.mp3',
        duration: 18,
        mood: 'Uplifting',
      },
    ],
    featuredRelease: {
      id: 'aurora-1',
      title: 'Northern Lights',
      duration: 290,
      genre: 'Orchestral',
      plays: 410000,
      likes: 29000,
      featured: true,
      releaseDate: '2024-02-05',
    },
    world: ARTIST_WORLDS['aurora-light'],
    collaborations: ['Solace Drift', 'Void Echo'],
    awards: ['Best Orchestral Artist 2024', 'Breakthrough Artist'],
    socialLinks: {
      twitter: 'https://twitter.com/auroralight',
      spotify: 'https://spotify.com/auroralight',
    },
  },

  'void-echo': {
    id: 'void-echo',
    name: 'Void Echo',
    avatar: '/artists/void-echo-avatar.jpg',
    banner: '/artists/void-echo-banner.jpg',
    bio: 'Void Echo creates dark, atmospheric music that explores the depths of electronic and experimental genres. Her sound is haunting, beautiful, and profound.',
    personality: 'Introspective, mysterious, artistic, and deeply emotional. Void Echo creates music from the soul.',
    story: 'Emerging from the cosmic void itself, Void Echo channels the infinite mystery of the universe into sound that transcends reality.',
    genres: ['Experimental', 'Ambient', 'Electronic'],
    moods: ['Dark', 'Mysterious', 'Melancholic'],
    followers: 68000,
    totalPlays: 2400000,
    tracks: [
      {
        id: 'void-1',
        title: 'Infinite Void',
        duration: 310,
        genre: 'Experimental',
        plays: 320000,
        likes: 22000,
        featured: true,
        releaseDate: '2024-02-10',
      },
      {
        id: 'void-2',
        title: 'Cosmic Echo',
        duration: 280,
        genre: 'Ambient',
        plays: 280000,
        likes: 19000,
        featured: false,
        releaseDate: '2024-03-05',
      },
      {
        id: 'void-3',
        title: 'Dark Matter',
        duration: 300,
        genre: 'Electronic',
        plays: 290000,
        likes: 20000,
        featured: false,
        releaseDate: '2024-03-30',
      },
    ],
    voiceSamples: [
      {
        id: 'void-voice-1',
        title: 'Dark Vocal Sample',
        url: '/samples/void-dark.mp3',
        duration: 21,
        mood: 'Dark',
      },
      {
        id: 'void-voice-2',
        title: 'Mysterious Vocal Sample',
        url: '/samples/void-mysterious.mp3',
        duration: 19,
        mood: 'Mysterious',
      },
    ],
    featuredRelease: {
      id: 'void-1',
      title: 'Infinite Void',
      duration: 310,
      genre: 'Experimental',
      plays: 320000,
      likes: 22000,
      featured: true,
      releaseDate: '2024-02-10',
    },
    world: ARTIST_WORLDS['void-echo'],
    collaborations: ['Aurora Light', 'Solace Drift'],
    awards: ['Best Dark Artist 2024', 'Artistic Excellence'],
    socialLinks: {
      twitter: 'https://twitter.com/voidecho',
      spotify: 'https://spotify.com/voidecho',
    },
  },
}

// Helper functions

export function getArtistById(id: string): ArtistProfile | undefined {
  return AI_ARTISTS[id]
}

export function getAllArtists(): ArtistProfile[] {
  return Object.values(AI_ARTISTS)
}

export function getArtistsByGenre(genre: ArtistGenre): ArtistProfile[] {
  return Object.values(AI_ARTISTS).filter(artist => artist.genres.includes(genre))
}

export function getArtistsByMood(mood: ArtistMood): ArtistProfile[] {
  return Object.values(AI_ARTISTS).filter(artist => artist.moods.includes(mood))
}

export function getTopArtists(limit: number = 5): ArtistProfile[] {
  return Object.values(AI_ARTISTS)
    .sort((a, b) => b.followers - a.followers)
    .slice(0, limit)
}

export function getArtistsByPlays(limit: number = 5): ArtistProfile[] {
  return Object.values(AI_ARTISTS)
    .sort((a, b) => b.totalPlays - a.totalPlays)
    .slice(0, limit)
}
