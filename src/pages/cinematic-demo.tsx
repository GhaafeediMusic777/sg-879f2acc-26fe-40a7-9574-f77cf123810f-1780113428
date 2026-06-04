import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from 'lucide-react'

interface DemoScene {
  id: string
  title: string
  description: string
  videoFile: string
  duration: string
  genre: string
  mood: string
}

const DEMO_SCENES: DemoScene[] = [
  {
    id: 'scene-1',
    title: 'Scene 1: Heartbreak',
    description: 'An emotional journey through loss and reflection. This cinematic piece captures the raw vulnerability of heartbreak with haunting visuals and ethereal soundscapes.',
    videoFile: '/vidu-video-3304923238573597.mp4',
    duration: '2:45',
    genre: 'Emotional Drama',
    mood: 'Melancholic, Introspective'
  },
  {
    id: 'scene-2',
    title: 'Scene 2: Discovery - Instagram',
    description: 'A moment of serendipitous discovery. Watch as a chance encounter on social media sparks unexpected connection and possibility.',
    videoFile: '/vidu-video-3304937951508625.mp4',
    duration: '3:12',
    genre: 'Contemporary',
    mood: 'Hopeful, Exciting'
  },
  {
    id: 'scene-3',
    title: 'Scene 3: Highway Journey',
    description: 'An open road, endless possibilities. This scene captures the freedom and wanderlust of a cross-country adventure filled with self-discovery.',
    videoFile: '/vidu-video-3304914322686525.mp4',
    duration: '4:08',
    genre: 'Adventure',
    mood: 'Inspiring, Liberating'
  },
  {
    id: 'scene-4',
    title: 'Scene 4: The Reveal',
    description: 'A pivotal moment of truth. Tensions rise as secrets unfold and characters face the consequences of their choices in this dramatic climax.',
    videoFile: '/vidu-video-3304965423828886.mp4',
    duration: '3:45',
    genre: 'Thriller',
    mood: 'Intense, Suspenseful'
  },
  {
    id: 'scene-5',
    title: 'Scene 5: Viral Impact',
    description: 'When a moment goes global. Experience the whirlwind of viral fame and its transformative impact on lives and relationships.',
    videoFile: '/vidu-video-3304979090643627.mp4',
    duration: '3:30',
    genre: 'Modern Drama',
    mood: 'Dynamic, Chaotic'
  },
  {
    id: 'bonus-6',
    title: 'Bonus Scene 6: Redemption',
    description: 'A path to healing and redemption. This bonus scene explores forgiveness, growth, and the power of second chances.',
    videoFile: '/vidu-video-3304985176500880.mp4',
    duration: '3:15',
    genre: 'Inspirational',
    mood: 'Uplifting, Hopeful'
  },
  {
    id: 'bonus-7',
    title: 'Bonus Scene 7: Finale',
    description: 'The grand finale brings all threads together in a spectacular conclusion. A celebration of love, connection, and new beginnings.',
    videoFile: '/vidu-video-3305012305522505.mp4',
    duration: '4:22',
    genre: 'Epic Conclusion',
    mood: 'Triumphant, Celebratory'
  }
]

export default function CinematicDemoPage() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(100)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentScene = DEMO_SCENES[currentSceneIndex]

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  const handlePrevScene = () => {
    setCurrentSceneIndex(Math.max(0, currentSceneIndex - 1))
    setIsPlaying(false)
  }

  const handleNextScene = () => {
    setCurrentSceneIndex(Math.min(DEMO_SCENES.length - 1, currentSceneIndex + 1))
    setIsPlaying(false)
  }

  const goToScene = (index: number) => {
    setCurrentSceneIndex(index)
    setIsPlaying(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gold/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-purple-500 flex items-center justify-center">
              <span className="text-lg font-bold text-black">G</span>
            </div>
            <div>
              <p className="text-gold text-sm font-bold">GHAAFEEDI</p>
              <p className="text-gray-400 text-xs">MUSIC</p>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center flex-1">
            <span className="text-white">Cinematic </span>
            <span className="text-gold">Demo Reel</span>
          </h1>

          <div className="w-10" />
        </div>

        {/* Main Content */}
        <div className="px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Video Player */}
            <div className="mb-12">
              <div className="relative bg-black rounded-2xl overflow-hidden border border-gold/30 shadow-2xl shadow-gold/20">
                {/* Video */}
                <video
                  ref={videoRef}
                  src={currentScene.videoFile}
                  className="w-full h-auto max-h-96 object-cover"
                  onEnded={() => {
                    setIsPlaying(false)
                    if (currentSceneIndex < DEMO_SCENES.length - 1) {
                      handleNextScene()
                    }
                  }}
                />

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full h-1 bg-gray-700 rounded-full cursor-pointer group">
                      <div className="h-full bg-gold rounded-full w-0 group-hover:h-2 transition-all" />
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Play/Pause */}
                      <button
                        onClick={handlePlayPause}
                        className="p-2 bg-gold/20 border border-gold rounded-full text-gold hover:bg-gold hover:text-black transition-all"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </button>

                      {/* Volume Control */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleMute}
                          className="p-2 text-gold hover:text-white transition-all"
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5" />
                          ) : (
                            <Volume2 className="w-5 h-5" />
                          )}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="w-20 h-1 bg-gray-700 rounded-full accent-gold cursor-pointer"
                        />
                      </div>

                      {/* Duration */}
                      <span className="text-sm text-gray-400">{currentScene.duration}</span>
                    </div>

                    {/* Fullscreen */}
                    <button
                      onClick={handleFullscreen}
                      className="p-2 text-gold hover:text-white transition-all"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Scene Info */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {/* Main Info */}
              <div className="col-span-2">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-white">{currentScene.title.split(':')[0]}:</span>
                  <span className="text-gold ml-2">{currentScene.title.split(':')[1]}</span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {currentScene.description}
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/50 border border-gold/30 rounded-lg p-4">
                    <p className="text-gold text-sm font-semibold mb-1">Genre</p>
                    <p className="text-white text-lg">{currentScene.genre}</p>
                  </div>
                  <div className="bg-black/50 border border-gold/30 rounded-lg p-4">
                    <p className="text-gold text-sm font-semibold mb-1">Mood</p>
                    <p className="text-white text-lg">{currentScene.mood}</p>
                  </div>
                </div>
              </div>

              {/* Scene Navigation */}
              <div className="col-span-1">
                <div className="bg-gradient-to-br from-black/50 to-purple-900/30 border border-gold/30 rounded-2xl p-6 sticky top-8">
                  <h3 className="text-xl font-bold text-gold mb-4">Scene {currentSceneIndex + 1} of {DEMO_SCENES.length}</h3>

                  <div className="space-y-2 mb-6 max-h-96 overflow-y-auto">
                    {DEMO_SCENES.map((scene, idx) => (
                      <button
                        key={scene.id}
                        onClick={() => goToScene(idx)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                          idx === currentSceneIndex
                            ? 'bg-gold text-black font-semibold'
                            : 'bg-black/50 text-white hover:bg-gold/20 border border-gold/20'
                        }`}
                      >
                        <p className="text-sm font-semibold">{scene.title}</p>
                        <p className="text-xs opacity-75">{scene.duration}</p>
                      </button>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="w-full h-1 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-purple-500 rounded-full transition-all"
                      style={{ width: `${((currentSceneIndex + 1) / DEMO_SCENES.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevScene}
                disabled={currentSceneIndex === 0}
                className="flex items-center gap-2 px-6 py-3 bg-black/50 border border-gold/30 text-gold rounded-lg hover:border-gold hover:bg-black/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous Scene
              </button>

              <div className="text-center">
                <p className="text-gold font-semibold">
                  Scene {currentSceneIndex + 1} / {DEMO_SCENES.length}
                </p>
                <p className="text-gray-400 text-sm">
                  {currentSceneIndex < 5 ? 'Main Story' : 'Bonus Content'}
                </p>
              </div>

              <button
                onClick={handleNextScene}
                disabled={currentSceneIndex === DEMO_SCENES.length - 1}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-orange-500 text-black rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                Next Scene
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-8 bg-gradient-to-r from-black/50 to-purple-900/30 border border-gold/30 rounded-2xl">
              <h3 className="text-2xl font-bold text-gold mb-4">About This Demo Reel</h3>
              <p className="text-gray-300 leading-relaxed">
                Experience the power of Ghaafeedi Music's cinematic storytelling. Each scene showcases our ability to create emotionally resonant, visually stunning content that captures the essence of human experience. From heartbreak to redemption, these scenes demonstrate the transformative potential of AI-generated music and visuals working in perfect harmony.
              </p>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-3 bg-gold text-black rounded-lg font-bold hover:shadow-lg hover:shadow-gold/50 transition-all">
                  Download Full Reel
                </button>
                <button className="px-6 py-3 border border-gold text-gold rounded-lg font-bold hover:bg-gold/10 transition-all">
                  Share on Social
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
