import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/utils/motionDesign'

export interface AudioTrack {
  id: string
  title: string
  artist: string
  duration: number
  url: string
  waveform?: number[]
  lyrics?: Array<{ time: number; text: string }>
}

interface ProfessionalAudioPlayerProps {
  track: AudioTrack
  onFavorite?: (trackId: string) => void
  isFavorite?: boolean
  onPlaylistAdd?: (trackId: string) => void
  onRadioStart?: (artistName: string) => void
}

export const ProfessionalAudioPlayer: React.FC<ProfessionalAudioPlayerProps> = ({
  track,
  onFavorite,
  isFavorite = false,
  onPlaylistAdd,
  onRadioStart,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [showLyrics, setShowLyrics] = useState(false)
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0)
  const [isFav, setIsFav] = useState(isFavorite)

  // Generate waveform if not provided
  const waveform = track.waveform || Array.from({ length: 100 }, () => Math.random() * 0.8 + 0.2)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  // Update current lyric
  useEffect(() => {
    if (track.lyrics) {
      const currentLyric = track.lyrics.findIndex(
        (lyric, i) =>
          currentTime >= lyric.time &&
          (i === track.lyrics!.length - 1 || currentTime < track.lyrics![i + 1].time)
      )
      if (currentLyric !== -1) setCurrentLyricIndex(currentLyric)
    }
  }, [currentTime, track.lyrics])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      audioRef.current.currentTime = percent * track.duration
    }
  }

  const handleSpeedChange = (speed: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed
      setPlaybackSpeed(speed)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = (currentTime / track.duration) * 100

  return (
    <motion.div
      className="w-full bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 rounded-2xl p-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Track Info */}
      <motion.div className="mb-8" variants={staggerItem}>
        <h3 className="text-2xl font-bold text-luxury-pearl mb-2">{track.title}</h3>
        <p className="text-luxury-gray-light">{track.artist}</p>
      </motion.div>

      {/* Waveform Visualization */}
      <motion.div
        className="mb-8 h-16 flex items-center justify-between gap-1 cursor-pointer"
        onClick={handleProgressClick}
        variants={staggerItem}
      >
        {waveform.map((bar, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-luxury-gold rounded-full"
            style={{
              height: `${bar * 100}%`,
              opacity: i / waveform.length < progress / 100 ? 1 : 0.3,
            }}
            animate={{
              opacity: isPlaying ? (i / waveform.length < progress / 100 ? 1 : 0.3) : 0.5,
            }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </motion.div>

      {/* Progress Bar */}
      <motion.div className="mb-4" variants={staggerItem}>
        <div
          className="w-full h-1 bg-luxury-gold bg-opacity-20 rounded-full cursor-pointer overflow-hidden"
          onClick={handleProgressClick}
        >
          <motion.div
            className="h-full bg-luxury-gold"
            style={{ width: `${progress}%` }}
            transition={{ type: 'tween', duration: 0.1 }}
          />
        </div>
      </motion.div>

      {/* Time Display */}
      <motion.div className="flex justify-between text-sm text-luxury-gray-light mb-8" variants={staggerItem}>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(track.duration)}</span>
      </motion.div>

      {/* Playback Controls */}
      <motion.div
        className="flex items-center justify-center gap-6 mb-8"
        variants={staggerContainer}
      >
        {/* Previous */}
        <motion.button
          variants={staggerItem}
          className="p-3 rounded-full border border-luxury-gold border-opacity-30 hover:border-opacity-100 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ⏮
        </motion.button>

        {/* Play/Pause */}
        <motion.button
          onClick={togglePlay}
          variants={staggerItem}
          className="w-16 h-16 rounded-full bg-luxury-gold text-luxury-dark flex items-center justify-center font-bold text-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: isPlaying ? '0 0 30px rgba(212, 175, 55, 0.6)' : 'none',
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </motion.button>

        {/* Next */}
        <motion.button
          variants={staggerItem}
          className="p-3 rounded-full border border-luxury-gold border-opacity-30 hover:border-opacity-100 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ⏭
        </motion.button>
      </motion.div>

      {/* Speed Control */}
      <motion.div className="flex justify-center gap-2 mb-8" variants={staggerContainer}>
        {[0.75, 1, 1.25, 1.5].map((speed) => (
          <motion.button
            key={speed}
            onClick={() => handleSpeedChange(speed)}
            variants={staggerItem}
            className="px-4 py-2 rounded-lg border transition-all"
            style={{
              borderColor: playbackSpeed === speed ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0.3)',
              background: playbackSpeed === speed ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
              color: playbackSpeed === speed ? 'rgb(212, 175, 55)' : 'rgb(150, 150, 150)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {speed}x
          </motion.button>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex justify-center gap-4 flex-wrap"
        variants={staggerContainer}
      >
        {/* Favorite */}
        <motion.button
          onClick={() => {
            setIsFav(!isFav)
            onFavorite?.(track.id)
          }}
          variants={staggerItem}
          className="px-6 py-3 rounded-lg border border-luxury-gold border-opacity-30 hover:border-opacity-100 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isFav ? '❤️ Favorited' : '🤍 Favorite'}
        </motion.button>

        {/* Add to Playlist */}
        <motion.button
          onClick={() => onPlaylistAdd?.(track.id)}
          variants={staggerItem}
          className="px-6 py-3 rounded-lg border border-luxury-gold border-opacity-30 hover:border-opacity-100 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📋 Add to Playlist
        </motion.button>

        {/* Artist Radio */}
        <motion.button
          onClick={() => onRadioStart?.(track.artist)}
          variants={staggerItem}
          className="px-6 py-3 rounded-lg border border-luxury-gold border-opacity-30 hover:border-opacity-100 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📻 Artist Radio
        </motion.button>

        {/* Lyrics */}
        {track.lyrics && (
          <motion.button
            onClick={() => setShowLyrics(!showLyrics)}
            variants={staggerItem}
            className="px-6 py-3 rounded-lg border border-luxury-gold border-opacity-30 hover:border-opacity-100 transition-all"
            style={{
              borderColor: showLyrics ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0.3)',
              background: showLyrics ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📝 Lyrics
          </motion.button>
        )}
      </motion.div>

      {/* Lyrics Display */}
      <AnimatePresence>
        {showLyrics && track.lyrics && (
          <motion.div
            className="mt-8 max-h-64 overflow-y-auto bg-luxury-dark rounded-lg p-6 border border-luxury-gold border-opacity-20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <motion.div
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {track.lyrics.map((lyric, i) => (
                <motion.p
                  key={i}
                  className="text-luxury-gray-light transition-all"
                  style={{
                    color: i === currentLyricIndex ? 'rgb(212, 175, 55)' : 'rgb(150, 150, 150)',
                    fontSize: i === currentLyricIndex ? '1.1em' : '1em',
                  }}
                  variants={staggerItem}
                >
                  {lyric.text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={track.url} />
    </motion.div>
  )
}

export default ProfessionalAudioPlayer
