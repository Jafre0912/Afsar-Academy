import React from 'react';
import { FaHardHat, FaRulerCombined, FaAward, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { icon: <FaHardHat />, count: "150+", label: "Projects Completed" },
    { icon: <FaUsers />, count: "50+", label: "Expert Engineers" },
    { icon: <FaAward />, count: "15+", label: "Years Experience" },
    { icon: <FaRulerCombined />, count: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/80 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <span className="text-bright-green font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">Discover Our Legacy</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase drop-shadow-lg">About Al-Noor</h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 border-4 border-bright-green rounded-sm transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Engineers planning" 
                className="relative z-10 w-full h-auto object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/2">
              <span className="text-bright-green font-bold tracking-widest uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl font-extrabold text-deep-blue mt-2 mb-6 uppercase">Building The Future With Precision</h2>
              <div className="w-16 h-1 bg-bright-green mb-8"></div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                AL-NOOR BUILDWORKS & ENGINEERS PVT. LTD. is a nationally recognized construction and engineering firm. We specialize in turning visionary architectural concepts into concrete realities. With a deep commitment to sustainable practices and modern engineering, we ensure every structure stands the test of time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of dedicated professionals operates on the core principles of ethics, transparency, and uncompromising safety. From commercial high-rises to industrial warehouses, we deliver excellence in every square foot.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 border-l-4 border-bright-green shadow-sm">
                  <h4 className="font-bold text-deep-blue uppercase">Our Mission</h4>
                  <p className="text-sm text-gray-500 mt-2">To deliver high-quality, cost-effective projects on schedule by employing motivated, flexible, and focused teams.</p>
                </div>
                <div className="bg-white p-4 border-l-4 border-bright-green shadow-sm">
                  <h4 className="font-bold text-deep-blue uppercase">Our Vision</h4>
                  <p className="text-sm text-gray-500 mt-2">To be the preferred contractor of choice, recognized for our relentless pursuit of structural perfection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-deep-blue text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-6">
                <div className="text-bright-green text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-black mb-2">{stat.count}</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;