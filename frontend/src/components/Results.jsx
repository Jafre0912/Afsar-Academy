import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Results = () => {
  const students = [
    { name: "Muskan Khatoon", marks: 435, rank: 1 },
    { name: "Jainav Kaushar", marks: 359, rank: 2 },
    { name: "Gajala Perween", marks: 307, rank: 3 },
    { name: "Sawrin Khatun", marks: 300, rank: 4 },
    { name: "Siba Khatoon", marks: 264, rank: 5 },
  ];

  return (
    <section className="py-20 bg-brandBlue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('path/to/sparkle-bg.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brandGold mb-4 drop-shadow-md">Bihar Board 10th Result 2026</h2>
          <p className="text-xl">दम है तभी तो क्षेत्र में No1 है...</p>
        </div>

        <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
          {students.map((student, index) => (
            <motion.div 
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between py-4 border-b border-white/10 last:border-0"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brandGold/20 text-brandGold font-bold">
                  {student.rank}
                </span>
                <span className="text-lg font-medium">{student.name}</span>
              </div>
              <div className="flex items-center gap-2 text-brandGold font-bold text-xl">
                {student.rank === 1 && <Trophy className="w-5 h-5" />}
                {student.marks}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;