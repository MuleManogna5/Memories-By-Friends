import { motion } from "framer-motion";

const colors = [
  "#ffd1dc", // baby pink
  "#ffe066", // soft yellow
  "#cdb4db", // lavender
  "#bde0fe", // baby blue
  "#ffafcc", // rose
  "#ffc8dd", // blush
];

const FloatingConfetti = () => {
  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => {
        const size = Math.random() * 12 + 6;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: colors[i % colors.length],
              left: `${Math.random() * 100}%`,
              top: "-20px",
              opacity: 0.8,
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        );
      })}
    </>
  );
};

export default FloatingConfetti;
