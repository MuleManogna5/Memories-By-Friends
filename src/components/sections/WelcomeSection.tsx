import { motion } from "framer-motion";
import PandaSticker from "../stickers/PandaSticker";
import HeartSticker from "../stickers/HeartSticker";
import SparkleEffect from "../stickers/SparkleEffect";

const WelcomeSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <SparkleEffect />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 md:left-20"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeartSticker size={50} color="pink" delay={0.3} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-10 md:right-32"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <HeartSticker size={35} color="lavender" delay={0.5} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-10 md:left-40"
        animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <HeartSticker size={45} color="peach" delay={0.4} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-16 md:right-48"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      >
        <HeartSticker size={30} color="mint" delay={0.6} />
      </motion.div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Panda introducing */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <PandaSticker size={180} animation="wave" />
        </motion.div>
        
        {/* Welcome text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-display font-extrabold text-gradient mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Heyyy!
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl !text-black font-body mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Welcome to our little corner of memories
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl !text-black font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            This place is for all our crazy laughs, silly moments, and forever friendship 💕
          </motion.p>
        </motion.div>
        
        {/* Bouncing arrow */}
        <motion.div
          className="mt-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-10 h-10 mx-auto text-[#F5C542] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
      
      {/* Background decorative circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-mint/15 rounded-full blur-3xl" />
    </section>
  );
};

export default WelcomeSection;