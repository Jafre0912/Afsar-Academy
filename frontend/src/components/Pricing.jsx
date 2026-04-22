import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "CLASSIC",
      subtitle: "PLANNING PACKAGE",
      features: ["Floor Plan", "Site Plan & Setbacks"]
    },
    {
      name: "DELUXE",
      subtitle: "DESIGN PACKAGE",
      features: ["Floor Plan", "Site Plan & Setbacks"]
    },
    {
      name: "PREMIUM",
      subtitle: "ADVANCED PACKAGE",
      features: ["All Deluxe Features", "Electrical Layouts"]
    },
    {
      name: "LUXURY",
      subtitle: "END-TO-END PACKAGE",
      features: ["All Premium Features", "3D Exterior Designs"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#0B2136] mb-4">SELECT YOUR PLAN</h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          From basic structural planning to fully immersive 3D interior renders, choose the engineering package that fits your project.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Card Header (Image placeholder look) */}
              <div className="h-48 bg-[#1A365D] relative flex flex-col items-center justify-center p-6 text-white text-center">
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
                <h3 className="relative z-10 text-2xl font-bold tracking-wider mb-2">{plan.name}</h3>
                <span className="relative z-10 text-emerald-400 text-sm font-bold tracking-widest">{plan.subtitle}</span>
              </div>
              
              {/* Features list */}
              <div className="p-6 flex-grow">
                <ul className="space-y-4 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                      <Check className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;