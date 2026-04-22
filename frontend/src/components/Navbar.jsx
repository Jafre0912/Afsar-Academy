import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COURSES", path: "/courses" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <FaGraduationCap className="text-4xl text-cyan-600" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-slate-900 tracking-wide">AFSAR</span>
              <span className="text-[11px] font-bold text-cyan-500 tracking-[0.2em] mt-1">ACADEMY</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-colors ${
                  isActive(link.path) ? "text-cyan-600" : "text-slate-600 hover:text-cyan-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/login" 
              className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-md font-bold text-sm tracking-wide hover:bg-cyan-600 transition-colors"
            >
              <FaUserCircle className="text-lg" /> LOGIN
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-lg absolute w-full">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block font-bold text-slate-800 hover:text-cyan-600"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/login" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-slate-900 text-white p-3 rounded-md font-bold w-full"
          >
            LOGIN
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;