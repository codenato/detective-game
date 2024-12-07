import { useEffect, useRef, useState } from "react";
import { Hint } from "../data/model";

interface VideoPlayerProps {
  hint: Hint;
}
export function VideoPlayer({ hint }: VideoPlayerProps) {
  const path = `../assets/hints/${hint.password}/${hint.files?.[0]}`;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [videoSrc, setVideoSrc] = useState();

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const videoModule = await import(path);
        setVideoSrc(videoModule.default);
      } catch (error) {
        console.error("Erro ao carregar o áudio:", error);
      }
    };

    loadVideo();
  }, [path]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center p-4 flex-1 justify-center">
      <div className="flex justify-center sm:px-12 h-[640px]">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full max-w-3xl mb-4 object-scale-down h-auto]"
          onEnded={() => setIsPlaying(false)}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={togglePlayPause}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 400 400"
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="#fff"
                strokeWidth="12"
              />
              <path
                d="M160 140v120m80-120v120"
                stroke="#fff"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="#fff"
                strokeWidth="12"
                strokeDasharray="20 10"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 400 400"
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="#fff"
                strokeWidth="12"
              />
              <path
                d="M160 140l100 60-100 60z"
                fill="#fff"
                stroke="#fff"
                strokeWidth="12"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
