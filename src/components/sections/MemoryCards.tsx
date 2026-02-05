import { motion } from "framer-motion";
import BunnySticker from "../stickers/BunnySticker";
import StarSticker from "../stickers/StarSticker";

const memories = [
  {
    id: 1,
    title: "Late Night Talks",
    description: "Those 3am conversations that never made sense but meant everything",
    emoji: "🌙",
    color: "bg-lavender/50",
    rotate: -3,
  },
  {
    id: 2,
    title: "Food Adventures",
    description: "Trying weird food combos and pretending they taste good",
    emoji: "🍕",
    color: "bg-peach/50",
    rotate: 2,
  },
  {
    id: 3,
    title: "Inside Jokes",
    description: "The ones that make zero sense to everyone else",
    emoji: "🤭",
    color: "bg-mint/50",
    rotate: -2,
  },
  {
    id: 4,
    title: "Chaotic Plans",
    description: "Plans that went totally wrong but became the best memories",
    emoji: "✨",
    color: "bg-primary/50",
    rotate: 3,
  },
  {
    id: 5,
    title: "Support Squad",
    description: "Being there through the tough times, no questions asked",
    emoji: "💪",
    color: "bg-sunshine/50",
    rotate: -1,
  },
  {
    id: 6,
    title: "Silly Photos",
    description: "The unflattering ones we swore to never post",
    emoji: "📸",
    color: "bg-lavender/50",
    rotate: 2,
  },
];

const MemoryCard = ({ memory, index }: { memory: typeof memories[0]; index: number }) => {
  return (
    <motion.div
      className={`relative ${memory.color} backdrop-blur-sm rounded-3xl p-6 shadow-soft cursor-pointer group`}
      style={{ rotate: `${memory.rotate}deg` }}
      initial={{ opacity: 0, y: 50, rotate: memory.rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: memory.rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
      }}
    >
      {/* Decorative tape */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                w-16 h-6 rounded-sm rotate-2 
                bg-yellow-300 shadow-md z-20" />
      
      {/* Card content */}
      <div className="pt-4">
        <motion.span
          className="text-4xl block mb-4"
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
        >
          {memory.emoji}
        </motion.span>
        
        <h3 className="text-xl font-display font-bold text-foreground mb-2">
          {memory.title}
        </h3>
        
        <p className="text-sm text-muted-foreground font-body">
          {memory.description}
        </p>
      </div>
      
      {/* Hover effect sparkle */}
      <motion.div
        className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <StarSticker size={30} color="sunshine" />
      </motion.div>
    </motion.div>
  );
};

const MemoryCards = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-4 mb-6"
        >
          <BunnySticker size={80} animation="dance" />
        </motion.div>
        
        <motion.h2
          className="text-4xl md:text-5xl font-display font-extrabold text-[#3b0f26]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Best Moments
        </motion.h2>
        
<motion.p
  className="text-lg !text-black"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Tap on a card to relive the memories ✨
</motion.p>

</div>  {/* 
      {/* Memory cards grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {memories.map((memory, index) => (
            <MemoryCard key={memory.id} memory={memory} index={index} />
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-peach/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint/15 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default MemoryCards;