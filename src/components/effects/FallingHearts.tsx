import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 });

const FallingHearts = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {hearts.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 3 + Math.random() * 3;
        const size = 16 + Math.random() * 14;

        return (
          <motion.div
            key={i}
            className="absolute opacity-70"
            style={{
              left: `${left}%`,
              fontSize: size,
            }}
            initial={{ y: "-10vh" }}
            animate={{ y: "110vh" }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            💖
          </motion.div>
        );
      })}
    </div>
  );
};

export default FallingHearts;
