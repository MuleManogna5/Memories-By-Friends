import { motion } from "framer-motion";

interface HeartStickerProps {
  size?: number;
  className?: string;
  color?: "pink" | "lavender" | "peach" | "mint";
  delay?: number;
}

const HeartSticker = ({ size = 40, className = "", color = "pink", delay = 0 }: HeartStickerProps) => {
  const colors = {
    pink: "#FF9EB5",
    lavender: "#C9A3E8",
    peach: "#FFB899",
    mint: "#A8E6CF",
  };
  
  return (
    <motion.div
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15, delay }}
      className={className}
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M20 35 C15 30 5 22 5 14 C5 8 10 4 15 4 C18 4 20 6 20 6 C20 6 22 4 25 4 C30 4 35 8 35 14 C35 22 25 30 20 35"
          fill={colors[color]}
        />
        <path
          d="M14 10 Q12 12 14 14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </motion.svg>
    </motion.div>
  );
};

export default HeartSticker;