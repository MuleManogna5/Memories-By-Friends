import { motion } from "framer-motion";
import BearSticker from "../stickers/BearSticker";
import HeartSticker from "../stickers/HeartSticker";
import FloatingConfetti from "../effects/FloatingConfetti";


const placeholderPhotos = [
  { id: 1, rotate: -5, size: "large" },
  { id: 2, rotate: 3, size: "medium" },
  { id: 3, rotate: -2, size: "medium" },
  { id: 4, rotate: 4, size: "small" },
  { id: 5, rotate: -3, size: "large" },
  { id: 6, rotate: 2, size: "small" },
];

const PhotoGallery = () => {
  return (
   <section
  className="relative py-24 px-4 overflow-hidden"
  style={{
    background: `
      radial-gradient(
        circle at top,
        #f3c6d9 0%,
        #b86a95 45%,
        #702b51 100%
      )
    `,
    boxShadow: "inset 0 0 120px rgba(255,255,255,0.15)",
  }}
>
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <FloatingConfetti />
  </div>

      {/* Section header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BearSticker size={100} animation="bounce" />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-display font-extrabold text-[#3b0f26]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Photo Scrapbook
        </motion.h2>

        <motion.p
          className="text-lg text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our favorite snapshots 📸
        </motion.p>
      </div>

      {/* Scrapbook style photo grid */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {placeholderPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="relative group"
              style={{ rotate: `${photo.rotate}deg` }}
              initial={{ opacity: 0, y: 30, rotate: photo.rotate * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            >
              {/* Polaroid frame */}
              <div className="bg-white/95 rounded-lg shadow-float p-3 pb-12">
                
                {/* Photo placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/35 via-lavender/35 to-mint/35 rounded-md flex items-center justify-center overflow-hidden relative">
                  <div className="text-center p-4">
                    <motion.span
                      className="text-4xl block mb-2"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      📷
                    </motion.span>

                    <p className="text-sm text-black/70 font-body">
                      Add photo here
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <p className="text-xs text-black/60 font-body italic">
                    Memory #{photo.id}
                  </p>
                </div>
              </div>

              {/* Decorative tape */}
              <div className="absolute -top-2 left-1/4 w-12 h-4 bg-yellow-300 rounded-sm rotate-[-12deg] shadow-sm" />

              {/* Stickers */}
              {index === 0 && (
                <motion.div className="absolute -bottom-4 -right-4" whileHover={{ scale: 1.2 }}>
                  <HeartSticker size={35} color="pink" />
                </motion.div>
              )}
              {index === 2 && (
                <motion.div className="absolute -top-6 -left-4" whileHover={{ scale: 1.2 }}>
                  <HeartSticker size={30} color="lavender" />
                </motion.div>
              )}
              {index === 4 && (
                <motion.div className="absolute -bottom-3 -left-3" whileHover={{ scale: 1.2 }}>
                  <HeartSticker size={28} color="mint" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="relative z-10 mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-white/80 font-body mb-4">
          Replace the placeholders with your favorite photos!
        </p>
        <motion.button
          className="px-8 py-3 bg-card rounded-full shadow-soft font-display font-semibold text-foreground hover:shadow-float transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          ✨ Add More Memories
        </motion.button>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;
