import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Batches = () => {
  const batches = [
    { class: "9th & 10th", date: "10 April", tag: "New Batch" },
    { class: "11th (Science)", date: "1 May", tag: "Starting Soon" },
    { class: "10th & 12th", date: "Ongoing", tag: "Special Urdu" },
  ];

  return (
    <section className="py-20 bg-brandDark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Upcoming <span className="text-brandGold">Batches</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {batches.map((batch, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-brandGold transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                {batch.tag}
              </div>
              <Calendar className="text-brandGold w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-2">Class {batch.class}</h3>
              <p className="text-gray-400">Starts on: <span className="text-brandGold font-semibold">{batch.date}</span></p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Batches;