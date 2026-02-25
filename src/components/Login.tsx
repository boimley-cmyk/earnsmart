import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-2 border-dark p-10 rounded-3xl brutal-shadow"
        >
          <div className="text-center mb-10">
            <h1 className="font-display text-5xl uppercase tracking-tighter mb-2">Welcome Back</h1>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Log in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-gray-50 border-2 border-dark rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand transition-colors font-bold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] font-bold uppercase text-brand hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  required
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-gray-50 border-2 border-dark rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand transition-colors font-bold"
                />
              </div>
            </div>

            <button className="w-full bg-dark text-white py-5 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover flex items-center justify-center gap-2 group">
              Log In
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-100"></div>
              </div>
              <span className="relative bg-white px-4 text-xs font-bold uppercase text-gray-400 tracking-widest">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 border-2 border-dark py-3 rounded-xl hover:bg-gray-50 transition-all font-bold uppercase text-xs">
                <Chrome size={18} />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-dark py-3 rounded-xl hover:bg-gray-50 transition-all font-bold uppercase text-xs">
                <Github size={18} />
                GitHub
              </button>
            </div>
          </div>

          <p className="text-center mt-10 text-sm font-bold text-gray-500 uppercase tracking-tight">
            Don't have an account? <Link to="/signup" className="text-brand hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
