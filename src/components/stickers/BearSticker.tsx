import { motion } from "framer-motion";

interface BearStickerProps {
  size?: number;
  className?: string;
  animation?: "float" | "wave" | "dance" | "bounce" | "none";
}

const BearSticker = ({ size = 120, className = "", animation = "float" }: BearStickerProps) => {
  const animationClass = animation !== "none" ? `animate-${animation === "bounce" ? "bounce-soft" : animation}` : "";
  
  return (
    <motion.div
      initial={{ scale: 0, rotate: -5 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      className={`${animationClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ears */}
        <circle cx="28" cy="28" r="14" fill="#D4A574" />
        <circle cx="92" cy="28" r="14" fill="#D4A574" />
        <circle cx="28" cy="28" r="8" fill="#C49566" />
        <circle cx="92" cy="28" r="8" fill="#C49566" />
        
        {/* Body */}
        <ellipse cx="60" cy="90" rx="32" ry="28" fill="#E5BC94" />
        <ellipse cx="60" cy="95" rx="20" ry="16" fill="#F5DCC4" />
        
        {/* Head */}
        <circle cx="60" cy="52" r="38" fill="#E5BC94" />
        
        {/* Snout */}
        <ellipse cx="60" cy="62" rx="16" ry="12" fill="#F5DCC4" />
        
        {/* Eyes */}
        <circle cx="45" cy="48" r="6" fill="#3D3D3D" />
        <circle cx="75" cy="48" r="6" fill="#3D3D3D" />
        <circle cx="47" cy="46" r="2" fill="#FFFFFF" />
        <circle cx="77" cy="46" r="2" fill="#FFFFFF" />
        
        {/* Nose */}
        <ellipse cx="60" cy="58" rx="6" ry="5" fill="#3D3D3D" />
        <ellipse cx="58" cy="56" rx="2" ry="1.5" fill="#666666" />
        
        {/* Mouth */}
        <path d="M52 66 Q60 72 68 66" stroke="#3D3D3D" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M60 58 L60 66" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" />
        
        {/* Blush */}
        <ellipse cx="35" cy="58" rx="6" ry="4" fill="#FFB6C8" opacity="0.5" />
        <ellipse cx="85" cy="58" rx="6" ry="4" fill="#FFB6C8" opacity="0.5" />
        
        {/* Arms */}
        <ellipse cx="30" cy="85" rx="10" ry="14" fill="#D4A574" transform="rotate(-15 30 85)" />
        <ellipse cx="90" cy="85" rx="10" ry="14" fill="#D4A574" transform="rotate(15 90 85)" />
        
        {/* Feet */}
        <ellipse cx="45" cy="110" rx="12" ry="8" fill="#D4A574" />
        <ellipse cx="75" cy="110" rx="12" ry="8" fill="#D4A574" />
        <ellipse cx="45" cy="112" rx="6" ry="4" fill="#C49566" />
        <ellipse cx="75" cy="112" rx="6" ry="4" fill="#C49566" />
        
        {/* Honey pot accessory */}
        <ellipse cx="95" cy="75" rx="10" ry="8" fill="#FFD700" />
        <rect x="87" y="68" width="16" height="6" fill="#8B4513" rx="2" />
        <text x="95" y="78" textAnchor="middle" fontSize="6" fill="#8B4513">♥</text>
      </svg>
    </motion.div>
  );
};

export default BearSticker;