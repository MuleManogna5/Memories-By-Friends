import { motion } from "framer-motion";

interface StarStickerProps {
  size?: number;
  className?: string;
  color?: "sunshine" | "pink" | "lavender" | "mint";
  delay?: number;
}

const StarSticker = ({ size = 40, className = "", color = "sunshine", delay = 0 }: StarStickerProps) => {
  const colors = {
    sunshine: "#FFE066",
    pink: "#FF9EB5",
    lavender: "#C9A3E8",
    mint: "#A8E6CF",
  };
  
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 12, delay }}
      className={`animate-sparkle ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 2 L23 15 L36 15 L26 23 L29 36 L20 28 L11 36 L14 23 L4 15 L17 15 Z"
          fill={colors[color]}
        />
        <path
          d="M20 8 L21 14 L27 14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
};

export default StarSticker;