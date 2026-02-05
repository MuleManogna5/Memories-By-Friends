import { motion } from "framer-motion";

interface SparkleEffectProps {
  className?: string;
}

const SparkleEffect = ({ className = "" }: SparkleEffectProps) => {
  const sparkles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 12,
    delay: Math.random() * 2,
    duration: 1.5 + Math.random(),
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 20 20" fill="none">
            <path
              d="M10 0 L11 8 L10 10 L9 8 Z M10 20 L9 12 L10 10 L11 12 Z M0 10 L8 9 L10 10 L8 11 Z M20 10 L12 11 L10 10 L12 9 Z"
              fill="#FFE066"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SparkleEffect;