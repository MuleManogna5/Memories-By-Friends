import { motion } from "framer-motion";

interface BunnyStickerProps {
  size?: number;
  className?: string;
  animation?: "float" | "wave" | "dance" | "bounce" | "none";
}

const BunnySticker = ({ size = 120, className = "", animation = "float" }: BunnyStickerProps) => {
  const animationClass = animation !== "none" ? `animate-${animation === "bounce" ? "bounce-soft" : animation}` : "";
  
  return (
    <motion.div
      initial={{ scale: 0, rotate: 10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
      className={`${animationClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ears */}
        <ellipse cx="42" cy="22" rx="10" ry="28" fill="#FFEEF3" />
        <ellipse cx="78" cy="22" rx="10" ry="28" fill="#FFEEF3" />
        <ellipse cx="42" cy="22" rx="5" ry="20" fill="#FFB6C8" />
        <ellipse cx="78" cy="22" rx="5" ry="20" fill="#FFB6C8" />
        
        {/* Body */}
        <ellipse cx="60" cy="88" rx="28" ry="25" fill="#FFEEF3" />
        
        {/* Head */}
        <circle cx="60" cy="58" r="32" fill="#FFEEF3" />
        
        {/* Eyes */}
        <circle cx="48" cy="55" r="6" fill="#3D3D3D" />
        <circle cx="72" cy="55" r="6" fill="#3D3D3D" />
        <circle cx="50" cy="53" r="2" fill="#FFFFFF" />
        <circle cx="74" cy="53" r="2" fill="#FFFFFF" />
        
        {/* Nose */}
        <ellipse cx="60" cy="65" rx="4" ry="3" fill="#FFB6C8" />
        
        {/* Mouth */}
        <path d="M54 70 Q60 76 66 70" stroke="#3D3D3D" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M60 65 L60 70" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" />
        
        {/* Whiskers */}
        <path d="M35 62 L48 65" stroke="#D4D4D4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M35 68 L48 68" stroke="#D4D4D4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M72 65 L85 62" stroke="#D4D4D4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M72 68 L85 68" stroke="#D4D4D4" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Blush */}
        <ellipse cx="38" cy="62" rx="5" ry="3" fill="#FFB6C8" opacity="0.6" />
        <ellipse cx="82" cy="62" rx="5" ry="3" fill="#FFB6C8" opacity="0.6" />
        
        {/* Arms */}
        <ellipse cx="35" cy="82" rx="8" ry="12" fill="#FFEEF3" transform="rotate(-20 35 82)" />
        <ellipse cx="85" cy="82" rx="8" ry="12" fill="#FFEEF3" transform="rotate(20 85 82)" />
        
        {/* Feet */}
        <ellipse cx="48" cy="108" rx="10" ry="6" fill="#FFEEF3" />
        <ellipse cx="72" cy="108" rx="10" ry="6" fill="#FFEEF3" />
        
        {/* Tail */}
        <circle cx="60" cy="112" r="8" fill="#FFEEF3" />
        
        {/* Bow */}
        <path d="M48 40 Q45 35 40 38 Q45 42 48 40" fill="#C9A3E8" />
        <path d="M48 40 Q51 35 56 38 Q51 42 48 40" fill="#C9A3E8" />
        <circle cx="48" cy="40" r="3" fill="#B38FD9" />
      </svg>
    </motion.div>
  );
};

export default BunnySticker;