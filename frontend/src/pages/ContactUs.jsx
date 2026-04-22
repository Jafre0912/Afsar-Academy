import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-[#00D289] font-bold tracking-widest uppercase text-sm">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#05264E] mt-2 mb-6 uppercase">
            We're Here to Help
          </h1>
          <div className="w-24 h-1 bg-[#00D289] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses, batches, or admission process? Drop us a message and our team will get back to you immediately.
          </p>
        </div>

        {/* Contact Form Component */}
        <ContactForm />

      </div>
    </div>
  );
};

export default ContactUs;