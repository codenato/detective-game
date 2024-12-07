import { useEffect, useRef, useState } from "react";
import { Hint } from "../data/model";

interface AudioPlayerProps {
  hint: Hint;
}

export function AudioPlayer({ hint }: AudioPlayerProps) {
  const path = `../assets/hints/${hint.password}/${hint.files?.[0]}`;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [audioSrc, setAudioSrc] = useState();

  useEffect(() => {
    const loadAudio = async () => {
      try {
        const audioModule = await import(path);
        setAudioSrc(audioModule.default);
      } catch (error) {
        console.error("Erro ao carregar o áudio:", error);
      }
    };

    loadAudio();
  }, [path]);

  const togglePlayPause = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex justify-center p-4 flex-1">
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={togglePlayPause}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 400 400"
          >
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#FFF"
              stroke-width="12"
            />
            <path
              d="M160 140v120m80-120v120"
              stroke="#FFF"
              stroke-width="24"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="200"
              cy="200"
              r="140"
              fill="none"
              stroke="#FFF"
              stroke-width="12"
              stroke-dasharray="20 10"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 400 400"
          >
            {/* <rect width="400" height="400" fill="#FFF" /> */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#FFF"
              stroke-width="12"
            />
            <path
              d="M160 140l100 60-100 60z"
              fill="#FFF"
              stroke="#FFF"
              stroke-width="12"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
