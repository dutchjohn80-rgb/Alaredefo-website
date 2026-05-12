import { useRef, useState } from 'react'
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react'

interface AudioPlayerProps {
  src: string
  title?: string
  speaker?: string
  duration?: string
  thumbnail?: string
}

export function AudioPlayer({ src, title = 'Audio', speaker, thumbnail }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalDuration, setTotalDuration] = useState(0)
  const [volume, setVolume] = useState(1)

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

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setTotalDuration(audioRef.current.duration)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime + seconds)
    }
  }

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Thumbnail or title area */}
      {thumbnail ? (
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-center">
            <Volume2 className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
            <p className="text-sm text-emerald-700 font-semibold">{title}</p>
          </div>
        </div>
      )}

      {/* Title and Speaker */}
      <div className="mb-4">
        <h4 className="font-bold text-slate-900">{title}</h4>
        {speaker && <p className="text-sm text-slate-600 mt-1">by {speaker}</p>}
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <input
          type="range"
          min="0"
          max={totalDuration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-emerald-600"
          aria-label="Audio progress"
        />
        <div className="flex justify-between text-xs text-slate-600 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(totalDuration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => skip(-15)}
            className="p-2 rounded-full hover:bg-slate-100 transition text-slate-600"
            aria-label="Skip back 15 seconds"
          >
            <SkipBack className="h-5 w-5" />
          </button>

          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition font-semibold"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
          </button>

          <button
            onClick={() => skip(15)}
            className="p-2 rounded-full hover:bg-slate-100 transition text-slate-600"
            aria-label="Skip forward 15 seconds"
          >
            <SkipForward className="h-5 w-5" />
          </button>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-slate-600" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-emerald-600"
            aria-label="Volume control"
          />
        </div>
      </div>
    </div>
  )
}
