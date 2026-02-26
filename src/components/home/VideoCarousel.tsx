import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import content from '../../data/content.json';

const VideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const playerRef = useRef<HTMLIFrameElement>(null);

  const videos = content.videos;
  const currentVideo = videos[currentIndex];

  // Base URL for YouTube embed with JS API enabled
  const embedUrl = `https://www.youtube.com/embed/${currentVideo.id}?enablejsapi=1&rel=0&modestbranding=1&controls=0&showinfo=0&autoplay=1&mute=${isMuted ? '1' : '0'}&loop=1&playlist=${currentVideo.id}`;

  const handleNext = () => {
    setLoading(true);
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const message = isPlaying 
      ? '{"event":"command","func":"pauseVideo","args":""}'
      : '{"event":"command","func":"playVideo","args":""}';
    playerRef.current?.contentWindow?.postMessage(message, '*');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const message = isMuted 
      ? '{"event":"command","func":"unMute","args":""}'
      : '{"event":"command","func":"mute","args":""}';
    playerRef.current?.contentWindow?.postMessage(message, '*');
  };

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndY.current = e.changedTouches[0].clientY;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartY.current - touchEndY.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe Up -> Next
        handleNext();
      } else {
        // Swipe Down -> Prev
        handlePrev();
      }
    }
  };

  // Reset state when video changes
  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
  }, [currentIndex]);

  return (
    <section className="bg-gray-900 py-8 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
          Resultados Reales
        </h2>
        
        {/* Mobile-first Container: 9:16 Aspect Ratio */}
        <div 
          className="relative w-full max-w-sm h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Loading State */}
          {loading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-900 text-white">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              <p className="mt-4 text-xs font-medium text-gray-400">Cargando experiencia...</p>
            </div>
          )}

          {/* YouTube Iframe Layer */}
          <div className="absolute inset-0 z-0 h-full w-full pointer-events-none"> 
            <iframe
              ref={playerRef}
              src={embedUrl}
              className="h-full w-full object-cover"
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setLoading(false)}
            />
          </div>

          {/* Overlay UI Layer */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between bg-gradient-to-b from-black/30 via-transparent to-black/60 p-4">
            
            {/* Top Controls */}
            <div className="flex justify-end pt-2">
               <button 
                onClick={toggleMute}
                className="rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Center Play/Pause Trigger Area */}
            <div 
              className="flex-grow flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              {!isPlaying && (
                <div className="rounded-full bg-white/20 p-4 backdrop-blur-md animate-pulse">
                  <Play size={48} className="text-white fill-current" />
                </div>
              )}
            </div>

            {/* Bottom Info & Nav */}
            <div className="pb-4">
              <h3 className="text-lg font-bold text-white drop-shadow-md mb-1">{currentVideo.title}</h3>
              <p className="text-sm text-gray-200 drop-shadow-md mb-4 line-clamp-2">
                Descubre cómo ayudamos a nuestros pacientes a recuperar su bienestar.
              </p>

              {/* Progress Bar Visual (Static for now as iframe doesn't emit progress easily without complex API) */}
              <div className="h-1 w-full bg-gray-600 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-primary w-1/3 animate-pulse"></div> 
              </div>

              {/* Navigation Controls */}
              <div className="flex flex-col gap-4 absolute right-4 bottom-20">
                 <button 
                  onClick={handlePrev}
                  className="rounded-full bg-black/40 p-3 text-white backdrop-blur-sm transition hover:bg-primary hover:scale-110"
                >
                  <ChevronUp size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  className="rounded-full bg-black/40 p-3 text-white backdrop-blur-sm transition hover:bg-primary hover:scale-110"
                >
                  <ChevronDown size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500 flex items-center gap-2">
          <span className="animate-bounce">👆</span> Desliza para ver más videos
        </p>
      </div>
    </section>
  );
};

export default VideoCarousel;
