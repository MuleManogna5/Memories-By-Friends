import { motion } from "framer-motion";
import BunnySticker from "../stickers/BunnySticker";
import HeartSticker from "../stickers/HeartSticker";
import SparkleEffect from "../stickers/SparkleEffect";

const FriendsNote = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden gradient-candy">
      <SparkleEffect />
      
      <div className="max-w-3xl mx-auto">
        {/* Note card */}
        <motion.div
          className="relative bg-card/90 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-float"
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ rotate: 0 }}
        >
          {/* Decorative tape */}
          <div className="absolute -top-4 left-1/3 w-20 h-7 bg-mint/80 rounded-sm rotate-3 shadow-md" />
          <div className="absolute -top-3 right-1/4 w-16 h-6 bg-peach/80 rounded-sm -rotate-6 shadow-md" />
          
          {/* Bunny peeking */}
          <motion.div
            className="absolute -top-16 right-8 md:right-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BunnySticker size={90} animation="wave" />
          </motion.div>
          
          {/* Content */}
          <div className="pt-4">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-extrabold text-gradient mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A Note to My Favorite Humans 💕
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                You know what's crazy? Finding people who just <em>get</em> you. 
                No explanations needed, no pretending to be someone you're not.
              </p>
              
              <p>
                We've laughed until we cried, cried until we laughed, and created 
                a million memories that I'll treasure forever.
              </p>
              
              <p>
                Through the chaos, the late-night snacks, the random adventures, 
                and the "remember when" moments – I'm so grateful for every single one of you.
              </p>
              
              <p className="font-semibold text-foreground">
                Here's to us – the best kind of mess. 🫶
              </p>
            </motion.div>
            
            {/* Signature */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-lavender flex items-center justify-center text-xl">
                ✨
              </div>
              <div>
                <p className="font-display font-bold text-foreground">With all my love,</p>
                <p className="text-sm text-muted-foreground font-body italic">Your Friend Forever</p>
              </div>
            </motion.div>
          </div>
          
          {/* Floating hearts around the note */}
          <motion.div
            className="absolute -left-6 top-1/3"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeartSticker size={40} color="pink" />
          </motion.div>
          
          <motion.div
            className="absolute -right-4 bottom-1/4"
            animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <HeartSticker size={35} color="lavender" />
          </motion.div>
          
          <motion.div
            className="absolute left-1/4 -bottom-6"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
          <div className="brightness-90 saturate-125 drop-shadow-lg">
            <HeartSticker size={40} color="pink" />
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FriendsNote;