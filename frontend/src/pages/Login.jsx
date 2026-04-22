import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaArrowRight, FaGraduationCap } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Dummy login for testing (Bypassing real auth)
    setTimeout(() => {
      if(email && password) {
         localStorage.setItem('user', JSON.stringify({ name: "Student", role: "student" }));
         navigate('/dashboard');
      }
      setLoading(false);
    }, 1000);

    // TODO: Uncomment this when backend is ready
    /*
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        alert('Login Failed. Please check credentials.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className="min-h-screen flex font-sans text-slate-800 bg-slate-50">
      
      {/* Left Side - Image Showcase */}
      <div className="hidden lg:block lg:w-1/2 relative bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-end p-16 text-white">
          <h2 className="text-5xl font-black uppercase mb-4 leading-tight">
            Welcome <br/><span className="text-cyan-400">Back.</span>
          </h2>
          <p className="text-xl font-light text-slate-300 max-w-md">
            Access your student dashboard to track your academic progress, view course materials, and connect with faculty.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
        <div className="max-w-md w-full bg-white p-10 rounded-lg shadow-2xl border-t-4 border-cyan-500">
          
          <div className="mb-10 text-right">
            <span className="text-slate-900 font-bold tracking-widest uppercase text-xs mb-2 block flex justify-end items-center gap-2">
              <FaGraduationCap className="text-cyan-500 text-lg" /> Student Portal
            </span>
            <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-wide">
              Account Login
            </h2>
            <div className="w-12 h-1 bg-cyan-500 ml-auto mb-4"></div>
            <p className="text-slate-500 text-sm">Please enter your authorized credentials.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300"
                placeholder="student@example.com" 
                required
              />
            </div>
            
            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Password
                </label>
                <Link to="/forgot-password"
                  className="text-xs font-bold text-slate-400 hover:text-cyan-500 transition-colors uppercase tracking-wider"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300"
                placeholder="••••••••" 
                required
              />
            </div>
            
            <button
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-cyan-500 transition-all duration-300 disabled:bg-slate-400 group mt-4 shadow-md"
            >
              {loading ? 'Authenticating...' : 'Secure Login'}
              {!loading && <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account yet?{" "}
              <Link to="/register" className="text-slate-900 hover:text-cyan-500 font-bold uppercase tracking-wider transition-colors duration-200">
                Register here
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;