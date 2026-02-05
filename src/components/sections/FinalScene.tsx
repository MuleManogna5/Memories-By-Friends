import { motion } from "framer-motion";
import PandaSticker from "../stickers/PandaSticker";
import BunnySticker from "../stickers/BunnySticker";
import BearSticker from "../stickers/BearSticker";
import HeartSticker from "../stickers/HeartSticker";
import StarSticker from "../stickers/StarSticker";
import SparkleEffect from "../stickers/SparkleEffect";

const FinalScene = () => {
  return (
    <>
      {/* FINAL SCENE */}
      <section
        className="relative pt-32 pb-0 px-4 overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at center,
              #b86a95 0%,
              #8f3f67 45%,
              #5a1f3f 100%
            )
          `,
          boxShadow: "inset 0 0 160px rgba(0,0,0,0.25)",
        }}
      >
        <SparkleEffect />

        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-lavender/25 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mint/15 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Characters */}
          <motion.div
            className="flex justify-center items-end gap-4 md:gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <BunnySticker size={100} animation="dance" />
            </motion.div>

            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
              <PandaSticker size={130} animation="wave" />
            </motion.div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
              <BearSticker size={110} animation="bounce" />
            </motion.div>
          </motion.div>

          {/* Floating icons */}
          <div className="absolute top-20 left-10 md:left-1/4">
            <StarSticker size={40} color="sunshine" />
          </div>

          <div className="absolute top-32 right-10 md:right-1/4">
            <StarSticker size={35} color="pink" />
          </div>

          <div className="absolute top-40 left-1/3">
            <HeartSticker size={30} color="lavender" />
          </div>

          <div className="absolute top-24 right-1/3">
            <HeartSticker size={35} color="peach" />
          </div>

          {/* Text */}
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-pink-100 drop-shadow-xl mb-6">
            So Glad We Made These Memories Together
          </h2>

          <p className="text-xl md:text-2xl text-white/80 font-body mb-12">
            Here's to many more adventures, laughs, and unforgettable moments 🫂
          </p>

          {/* Hearts row */}
          <div className="flex justify-center gap-3 mb-28">
            {["pink", "lavender", "peach", "mint", "pink"].map((c, i) => (
              <HeartSticker key={i} size={35} color={c as any} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-0 -mt-20 border-t border-white/10 bg-black/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-white text-lg md:text-xl font-display font-semibold">
            Manogna M
          </p>

          <div className="flex gap-10 text-white/100 md:ml-20">
          <a
            href="https://github.com/MuleManogna5"
            target="_blank"
            rel="noopener noreferrer"
          >
          <i className="ri-github-fill text-3xl hover:text-pink-400 hover:scale-110 transition cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/manognamule/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <i className="ri-linkedin-fill text-3xl hover:text-pink-400 hover:scale-110 transition cursor-pointer" />
          </a>
        <a
          href="https://x.com/Manogna_Mule"
          target="_blank"
          rel="noopener noreferrer"
        >
        <i className="ri-twitter-fill text-3xl hover:text-pink-400 hover:scale-110 transition cursor-pointer" />
        </a>
          </div>

          <p className="text-white/100">
            Made with 💖 © 2026 Manogna
          </p>
        </div>
      </footer>
    </>
  );
};

export default FinalScene;
