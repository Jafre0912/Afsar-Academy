import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#053761] text-[#93a8c1] pt-16 pb-8 border-t-[6px] border-[#00d09c] font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-6 uppercase tracking-wider">
              AFSAR <span className="text-[#00d09c]">ACADEMY</span>
            </h3>
            <p className="text-[15px] leading-relaxed mb-8 max-w-[90%]">
              A premier educational platform based in Bihar. We are your dedicated partner for innovative learning, conceptual clarity, and modern educational solutions for academic excellence.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100068547481453"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#174e7a] text-[#93a8c1] hover:text-white rounded-sm hover:bg-[#00d09c] transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/md_afsar_i/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#174e7a] text-[#93a8c1] hover:text-white rounded-sm hover:bg-[#00d09c] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#174e7a] text-[#93a8c1] hover:text-white rounded-sm hover:bg-[#00d09c] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-8">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              QUICK LINKS
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/about", text: "About the Academy" },
                { to: "/courses", text: "Our Courses" },
                { to: "/dashboard", text: "Student Dashboard" },
                { to: "/results", text: "Our Results" },
                { to: "/contact", text: "Contact Us" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors duration-300 text-[15px]"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Headquarters */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              HEADQUARTERS
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#00d09c] mt-1 text-xl shrink-0" />
                <span className="text-[15px] leading-relaxed">
                  Sheoher, Piprahi,<br /> 
                  Basahiya Sekh,<br /> 
                  Bihar, 843301
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#00d09c] text-xl shrink-0" />
                <a
                  href="mailto:jafrea0912@gmail.com"
                  className="text-[15px] hover:text-white transition-colors duration-300"
                >
                  mdafsar0121@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#00d09c] text-xl shrink-0" />
                <a
                  href="tel:+916207817606"
                  className="text-[15px] hover:text-white transition-colors duration-300"
                >
                  +91 8754034447
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Divider */}
        <div className="pt-8 border-t border-[#174e7a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[#7a93b0]">
            &copy; {new Date().getFullYear()} AFSAR ACADEMY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[14px] text-[#7a93b0]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;