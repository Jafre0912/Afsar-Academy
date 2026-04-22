import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect to your backend API here
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-deep-blue/90"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <span className="text-bright-green font-bold tracking-[0.2em] uppercase mb-4 text-sm">Get In Touch</span>
          <h1 className="text-5xl font-extrabold text-white uppercase drop-shadow-lg">Contact Us</h1>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information (Left) */}
            <div className="w-full lg:w-1/3">
              <span className="text-bright-green font-bold tracking-widest uppercase text-sm">Headquarters</span>
              <h2 className="text-3xl font-extrabold text-deep-blue mt-2 mb-8 uppercase">Reach Out To Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-sm text-deep-blue text-2xl group-hover:bg-bright-green group-hover:text-white transition-colors duration-300">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-blue uppercase mb-1">Office Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      R-12, New Colony, Raja Nagar,<br />
                      Talkhapur, Sitamarhi,<br />
                      Bihar, 843301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-sm text-deep-blue text-2xl group-hover:bg-bright-green group-hover:text-white transition-colors duration-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-blue uppercase mb-1">Email Address</h4>
                    <a href="mailto:anbuildworks@gmail.com" className="text-gray-600 text-sm hover:text-bright-green transition-colors">
                      anbuildworks@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-sm text-deep-blue text-2xl group-hover:bg-bright-green group-hover:text-white transition-colors duration-300">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-blue uppercase mb-1">Phone Number</h4>
                    <a href="tel:+919142873421" className="text-gray-600 text-sm font-semibold hover:text-bright-green transition-colors">
                      +91 91428 73421
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="w-full lg:w-2/3">
              <div className="bg-gray-50 p-10 md:p-12 rounded-sm shadow-sm border-t-4 border-deep-blue">
                <h3 className="text-2xl font-extrabold text-deep-blue mb-8 uppercase tracking-wide">Send Us A Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">Your Name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-bright-green focus:ring-1 focus:ring-bright-green outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-bright-green focus:ring-1 focus:ring-bright-green outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">Subject</label>
                    <input 
                      type="text" name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-bright-green focus:ring-1 focus:ring-bright-green outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-2">Message</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleChange} required rows="5"
                      className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-bright-green focus:ring-1 focus:ring-bright-green outline-none transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="flex items-center justify-center gap-3 bg-deep-blue text-white px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-bright-green transition-all duration-300 group"
                  >
                    Send Message
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;