import { useState } from 'react'
import Link from 'next/link'
import { Play, Clock, Users, Star, ChevronRight, Volume2 } from 'lucide-react'

const DEMO_VIDEOS = [
  {
    id: 1,
    title: 'The Cinematic Journey',
    description: 'Discover how your emotional story transforms into Netflix-quality cinema in 7 steps',
    duration: '8:42',
    views: 142500,
    rating: 4.9,
    thumbnail: '🎬',
    category: 'Overview',
    featured: true,
    videoUrl: 'https://vidu.ai/demo/cinematic-journey'
  },
  {
    id: 2,
    title: 'Emotional Onboarding',
    description: 'Step 1: How our AI analyzes your emotional story and creates your personal blueprint',
    duration: '3:15',
    views: 98200,
    rating: 4.8,
    thumbnail: '💭',
    category: 'Step-by-Step',
    featured: true,
    videoUrl: 'https://vidu.ai/demo/emotional-onboarding'
  },
  {
    id: 3,
    title: 'AI Emotional Intelligence',
    description: 'Step 2: Understanding how our Emotional Intelligence Engine maps your transformation',
    duration: '5:28',
    views: 87400,
    rating: 4.9,
    thumbnail: '🧠',
    category: 'Step-by-Step',
    featured: true,
    videoUrl: 'https://vidu.ai/demo/emotional-intelligence'
  },
  {
    id: 4,
    title: 'Cinematic Story Generation',
    description: 'Step 3: Watch your life story transform into cinematic scenes with AI precision',
    duration: '6:52',
    views: 76300,
    rating: 4.8,
    thumbnail: '🎥',
    category: 'Step-by-Step',
    featured: true,
    videoUrl: 'https://vidu.ai/demo/cinematic-generation'
  },
  {
    id: 5,
    title: 'Music Generation Process',
    description: 'Step 4: How AI generates emotionally intelligent soundtracks from your story',
    duration: '4:33',
    views: 65100,
    rating: 4.9,
    thumbnail: '🎵',
    category: 'Step-by-Step',
    featured: true,
    videoUrl: 'https://vidu.ai/demo/music-generation'
  },
  {
    id: 6,
    title: 'Voice Cloning Technology',
    description: 'Step 5: Hear your story in your own voice with advanced voice cloning',
    duration: '5:47',
    views: 54200,
    rating: 4.7,
    thumbnail: '🎙️',
    category: 'Features',
    featured: false,
    videoUrl: 'https://vidu.ai/demo/voice-cloning'
  },
  {
    id: 7,
    title: 'Professional Editing & Export',
    description: 'Step 6: Professional editing, quality enhancement, and export options',
    duration: '4:21',
    views: 43800,
    rating: 4.8,
    thumbnail: '✨',
    category: 'Features',
    featured: false,
    videoUrl: 'https://vidu.ai/demo/editing-export'
  },
  {
    id: 8,
    title: 'Your Story Delivered',
    description: 'Step 7: Receive your completed cinematic masterpiece and share with the world',
    duration: '3:56',
    views: 38900,
    rating: 4.9,
    thumbnail: '🎁',
    category: 'Features',
    featured: false,
    videoUrl: 'https://vidu.ai/demo/delivery'
  }
]

export default function WatchDemoPage() {
  const [selectedVideo, setSelectedVideo] = useState(DEMO_VIDEOS[0])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(DEMO_VIDEOS.map(v => v.category))]

  const filteredVideos = selectedCategory === 'All'
    ? DEMO_VIDEOS
    : DEMO_VIDEOS.filter(v => v.category === selectedCategory)

  const featuredVideos = DEMO_VIDEOS.filter(v => v.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent mb-4">
            Watch the Experience
          </h1>
          <p className="text-xl text-gray-300">
            See how your emotional story transforms into cinematic art in 7 simple steps
          </p>
        </div>

        {/* Main Video Player */}
        <div className="mb-12">
          <div className="bg-black-800 border border-gold/30 rounded-2xl overflow-hidden">
            {/* Video Player */}
            <div className="relative bg-black aspect-video flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-9xl">{selectedVideo.thumbnail}</div>
              <button className="absolute inset-0 flex items-center justify-center group/play">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center group-hover/play:bg-gold/40 transition-all">
                  <Play className="w-8 h-8 text-gold ml-1" />
                </div>
              </button>
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 rounded-full text-gold text-sm font-semibold">
                {selectedVideo.duration}
              </div>
            </div>

            {/* Video Info */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gold mb-3">{selectedVideo.title}</h2>
              <p className="text-gray-300 text-lg mb-6">{selectedVideo.description}</p>

              <div className="flex items-center gap-8 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="text-gray-300">{selectedVideo.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-gold text-gold" />
                  <span className="text-gray-300">{selectedVideo.rating} rating</span>
                </div>
                <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold">
                  {selectedVideo.category}
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
                >
                  <Play className="w-5 h-5" />
                  Watch Full Video
                </a>
                <button className="px-6 py-3 bg-black-900 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all">
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-gold text-black font-semibold'
                  : 'bg-black-800 text-gray-300 border border-gold/30 hover:border-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredVideos.map(video => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className={`group text-left bg-black-800 border rounded-xl overflow-hidden hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20 ${
                selectedVideo.id === video.id ? 'border-gold' : 'border-gold/30'
              }`}
            >
              {/* Thumbnail */}
              <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-6xl">{video.thumbnail}</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-gold ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-gold text-xs font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{video.description}</p>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-gray-400">{video.rating}</span>
                  </div>
                  <span className="text-gray-400">{(video.views / 1000).toFixed(0)}K views</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* The 7-Step Journey */}
        <div className="bg-black-800 border border-gold/30 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-gold mb-12 text-center">The 7-Step Cinematic Journey</h2>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Instant Emotional Onboarding',
                description: 'Enter your email and begin your transformation with our secure, privacy-first platform.',
                icon: '🔐'
              },
              {
                step: 2,
                title: 'Your Emotions Become The Blueprint',
                description: 'Share your heartbreak, healing, love, and loss. Every memory matters in creating your story.',
                icon: '💭'
              },
              {
                step: 3,
                title: 'AI Understands Your Story',
                description: 'Our emotional intelligence engine maps transformation, pain, and healing trajectories.',
                icon: '🧠'
              },
              {
                step: 4,
                title: 'Your Life Becomes Cinema',
                description: 'Advanced AI transforms your memories into cinematic storytelling with narrative arcs.',
                icon: '🎬'
              },
              {
                step: 5,
                title: 'Music Built From Emotion',
                description: 'Personalized cinematic soundtracks generated from your memories with emotional vocals.',
                icon: '🎵'
              },
              {
                step: 6,
                title: 'Netflix-Quality AI Films',
                description: 'Your identity preserved across every emotional scene with professional cinematic quality.',
                icon: '🎥'
              },
              {
                step: 7,
                title: 'The Story Of You',
                description: 'Receive a cinematic film starring your life journey, ready to share with the world.',
                icon: '✨'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 p-6 bg-black-900 rounded-lg border border-gold/20 hover:border-gold/60 transition-all">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 border border-gold/30 flex-shrink-0">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gold mb-2">
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gold flex-shrink-0 mt-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Videos Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gold mb-8">Most Watched Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredVideos.slice(0, 4).map(video => (
              <div
                key={video.id}
                className="group bg-black-800 border border-gold/30 rounded-xl overflow-hidden hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                <div className="relative bg-black aspect-video flex items-center justify-center">
                  <div className="text-7xl">{video.thumbnail}</div>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-gold ml-1" />
                    </div>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gold mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-gold">{video.rating}</span>
                    </div>
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold/80 font-semibold flex items-center gap-1"
                    >
                      Watch <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gold/10 to-purple-500/10 border border-gold/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gold mb-4">Ready to Transform Your Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your cinematic journey today and turn your emotions into art
          </p>
          <Link
            href="/onboarding/consumer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
          >
            Begin Your Experience
          </Link>
        </div>
      </div>
    </div>
  )
}
