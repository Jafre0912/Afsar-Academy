import { motion } from 'framer-motion';
import { BookOpen, Trophy, Target } from 'lucide-react';

const Hero = () => {
  // Floating animation variant
  const floatingVariant = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brandBlue to-brandDark pt-20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="bg-brandGold text-black px-4 py-1 rounded-full text-sm font-bold tracking-wider">
            YOUR SUCCESS, OUR MISSION
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-lg"
          variants={floatingVariant}
          animate="animate"
        >
          AFSAR ACADEMY
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl font-medium mb-10 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          पढ़ाई भी, समझ भी — और 100% RESULT भी!
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {[
            { icon: <BookOpen />, text: "Easy Concepts" },
            { icon: <Target />, text: "Weekly Tests" },
            { icon: <Trophy />, text: "Competitive Prep" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20"
            >
              <span className="text-brandGold">{item.icon}</span>
              <span className="font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-brandGold text-black font-bold text-xl px-10 py-4 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] transition-shadow"
        >
          Call Now: 8757403447
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;