import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Music2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  className?: string;
}

const AudioPlayer = ({ className }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="music" className={cn("py-16 px-6", className)}>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="https://ia800807.us.archive.org/21/items/bruno-mars-marry-you-official-lyric-video_202602/Bruno%20Mars%20-%20Marry%20You%20%28Official%20Lyric%20Video%29.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />

      <motion.div
        className="max-w-md mx-auto flex items-center gap-4 p-4 rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.button
          onClick={togglePlay}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </motion.button>

        {/* Text and visualizer */}
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground uppercase font-serif" style={{ fontSize: "0.8rem" }}>
              Ascolta la nostra canzone
            </p>
          </div>
        </div>

        {/* Sound wave animation */}
        <div className="flex items-center gap-0.5 h-8">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="rounded-full"
              style={{ backgroundColor: "hsl(var(--gold))", height: [11, 25, 8, 16, 27, 10][i], width: "0.2rem" }}
              animate={{
                height: isPlaying ? [8, 16, 4, 20, 9, 15][i] : [11, 25, 8, 16, 27, 10][i],
              }}
              transition={{
                duration: isPlaying ? 0.8 : 0,
                repeat: isPlaying ? Infinity : 0,
                delay: isPlaying ? i * 0.1 : 0,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AudioPlayer;
