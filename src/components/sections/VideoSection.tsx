import { motion } from "framer-motion";
import PandaSticker from "../stickers/PandaSticker";
import StarSticker from "../stickers/StarSticker";
import FallingHearts from "../effects/FallingHearts";

const videoPlaceholders = [
  { id: 1, title: "That Crazy Day", duration: "0:45" },
  { id: 2, title: "Birthday Surprise", duration: "1:20" },
  { id: 3, title: "Road Trip Vibes", duration: "0:30" },
];

const VideoSection = () => {
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
      <FallingHearts />
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PandaSticker size={90} animation="float" />
        </motion.div>
        
        <motion.h2
          className="text-4xl md:text-5xl font-display font-extrabold text-[#3b0f26]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Video Memories
        </motion.h2>
        
        <motion.p
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Moments that deserved to be recorded 🎬
        </motion.p>
      </div>
      
      {/* Video grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoPlaceholders.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Video frame */}
              <motion.div
                className="bg-card rounded-3xl shadow-soft overflow-hidden"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Video placeholder */}
                <div className="aspect-video bg-gradient-to-br from-lavender/30 via-primary/20 to-mint/30 flex items-center justify-center relative">
                  {/* Play button */}
                  <motion.div
                    className="w-16 h-16 bg-card/90 rounded-full flex items-center justify-center shadow-float cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6 text-primary ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-foreground/80 text-background px-2 py-1 rounded-md text-xs font-body">
                    {video.duration}
                  </div>
                  
                  {/* Add video text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/10 backdrop-blur-sm">
                    <p className="text-foreground font-body text-sm">
                      Click to add video
                    </p>
                  </div>
                </div>
                
                {/* Video info */}
                <div className="p-4">
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Tap to replace with your video
                  </p>
                </div>
              </motion.div>
              
              {/* Decorative stars */}
              {index === 0 && (
                <motion.div
                  className="absolute -top-4 -right-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <StarSticker size={35} color="sunshine" />
                </motion.div>
              )}
              {index === 1 && (
                <motion.div
                  className="absolute -bottom-3 -left-3"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <StarSticker size={28} color="pink" />
                </motion.div>
              )}
              {index === 2 && (
                <motion.div
                  className="absolute -top-3 -left-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                >
                  <StarSticker size={32} color="lavender" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-sunshine/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-primary/15 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default VideoSection;