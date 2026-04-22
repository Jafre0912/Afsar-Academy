import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError('');
    setLoading(true);

    // Dummy Registration Logic for testing
    setTimeout(() => {
      alert("Registration Successful! Please log in.");
      navigate('/login');
      setLoading(false);
    }, 1000);

    // TODO: Uncomment this when backend is ready
    /*
    try {
      // await registerUser(formData);
      // alert('Registration successful! Please log in.');
      // navigate('/login'); 
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className="min-h-screen flex font-sans text-slate-800 bg-slate-50">
      
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
        <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-2xl border-t-4 border-slate-900">
          
          <div className="mb-10">
            <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-2 flex items-center gap-2">
              <FaGraduationCap className="text-lg" /> Join The Academy
            </span>
            <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-wide">
              Create an Account
            </h2>
            <div className="w-12 h-1 bg-cyan-500 mb-4"></div>
            <p className="text-slate-500 text-sm">Enroll with Afsar Academy today.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300" required />
              </div>
              <div className="w-full">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300" required />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300" required />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 rounded-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300" required />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Confirm Password</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-3 rounded-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300" required />
            </div>
            
            <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-3 bg-cyan-500 text-slate-900 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 disabled:bg-slate-400 group mt-4 shadow-md">
              {loading ? "Creating Account..." : "Create Account"}
              {!loading && <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-slate-900 hover:text-cyan-500 font-bold uppercase tracking-wider transition-colors duration-200">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image Showcase */}
      <div className="hidden lg:block lg:w-1/2 relative bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent mix-blend-multiply"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-end p-16 text-white">
          <h2 className="text-5xl font-black uppercase mb-4 leading-tight">
            Shape Your <br/><span className="text-cyan-400">Future.</span>
          </h2>
          <p className="text-xl font-light text-slate-300 max-w-md">
            Join a network of dedicated students and expert educators committed to academic excellence.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Register;