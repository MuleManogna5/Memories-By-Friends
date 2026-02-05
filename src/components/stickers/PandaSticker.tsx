import { motion } from "framer-motion";

interface PandaStickerProps {
  size?: number;
  className?: string;
  animation?: "float" | "wave" | "dance" | "bounce" | "none";
}

const PandaSticker = ({ size = 120, className = "", animation = "float" }: PandaStickerProps) => {
  const animationClass = animation !== "none" ? `animate-${animation === "bounce" ? "bounce-soft" : animation}` : "";
  
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`${animationClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="60" cy="85" rx="35" ry="30" fill="#FAFAFA" />
        
        {/* Head */}
        <circle cx="60" cy="50" r="38" fill="#FAFAFA" />
        
        {/* Ears */}
        <circle cx="28" cy="25" r="14" fill="#2D2D2D" />
        <circle cx="92" cy="25" r="14" fill="#2D2D2D" />
        <circle cx="28" cy="25" r="8" fill="#FF9EB5" />
        <circle cx="92" cy="25" r="8" fill="#FF9EB5" />
        
        {/* Eye patches */}
        <ellipse cx="42" cy="48" rx="14" ry="16" fill="#2D2D2D" transform="rotate(-10 42 48)" />
        <ellipse cx="78" cy="48" rx="14" ry="16" fill="#2D2D2D" transform="rotate(10 78 48)" />
        
        {/* Eyes */}
        <circle cx="42" cy="50" r="8" fill="#FAFAFA" />
        <circle cx="78" cy="50" r="8" fill="#FAFAFA" />
        <circle cx="44" cy="48" r="4" fill="#2D2D2D" />
        <circle cx="80" cy="48" r="4" fill="#2D2D2D" />
        <circle cx="45" cy="47" r="1.5" fill="#FFFFFF" />
        <circle cx="81" cy="47" r="1.5" fill="#FFFFFF" />
        
        {/* Nose */}
        <ellipse cx="60" cy="62" rx="5" ry="4" fill="#2D2D2D" />
        
        {/* Mouth */}
        <path d="M55 68 Q60 73 65 68" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Blush */}
        <ellipse cx="32" cy="58" rx="6" ry="4" fill="#FFB6C8" opacity="0.7" />
        <ellipse cx="88" cy="58" rx="6" ry="4" fill="#FFB6C8" opacity="0.7" />
        
        {/* Arms */}
        <ellipse cx="30" cy="80" rx="12" ry="8" fill="#2D2D2D" transform="rotate(-30 30 80)" />
        <ellipse cx="90" cy="80" rx="12" ry="8" fill="#2D2D2D" transform="rotate(30 90 80)" />
        
        {/* Feet */}
        <ellipse cx="45" cy="108" rx="10" ry="8" fill="#2D2D2D" />
        <ellipse cx="75" cy="108" rx="10" ry="8" fill="#2D2D2D" />
        
        {/* Heart accessory */}
        <path d="M60 30 C56 26 50 26 50 32 C50 38 60 44 60 44 C60 44 70 38 70 32 C70 26 64 26 60 30" fill="#FF9EB5" />
      </svg>
    </motion.div>
  );
};

export default PandaSticker;