import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, RotateCcw, RotateCw } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer = ({ audioSrc }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full bg-background border border-border p-6">
      <audio ref={audioRef} src={audioSrc} />
      
      {/* Time display and progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-inter font-light opacity-60 mb-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1 bg-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-8 mb-6">
        <button 
          onClick={() => skip(-10)}
          className="hover:opacity-70 transition-opacity"
          aria-label="Zpět 10 sekund"
        >
         10s <RotateCcw size={32} strokeWidth={1.5} />
        </button>
        
        <button
          onClick={togglePlayPause}
          className="hover:opacity-70 transition-opacity"
          aria-label={isPlaying ? "Pauza" : "Přehrát"}
        >
          {isPlaying ? (
            <Pause size={48} strokeWidth={1.5} />
          ) : (
            <Play size={48} strokeWidth={1.5} />
          )}
        </button>
        
        <button
          onClick={() => skip(10)}
          className="hover:opacity-70 transition-opacity"
          aria-label="Vpřed 10 sekund"
        >
        10s <RotateCw size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Volume control */}
      <div className="flex items-center gap-3">
        <Volume2 size={20} strokeWidth={1.5} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="flex-1 h-1 bg-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer"
          aria-label="Hlasitost"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
