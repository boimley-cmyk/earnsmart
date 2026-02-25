import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isVerified, setIsVerified] = React.useState(false);

  React.useEffect(() => {
    // Dynamically load the captcha script
    const scriptId = 'captcha-locker-script';
    const existingScript = document.getElementById(scriptId);
    
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://lockedpage1.website/cp/js/dxw6n";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Polling for common captcha completion indicators
    // and setting up a global callback in case the script supports it
    const checkVerification = () => {
      const verified = 
        (window as any).captcha_done === true || 
        (window as any).isVerified === true ||
        (window as any)._dxw6n_completed === true;
      
      if (verified) {
        setIsVerified(true);
        return true;
      }
      return false;
    };

    (window as any).onCaptchaSuccess = () => setIsVerified(true);
    (window as any).captchaCallback = () => setIsVerified(true);

    const interval = setInterval(() => {
      if (checkVerification()) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      // Clean up global indicators to prevent stale state on re-mount
      delete (window as any).captcha_done;
      delete (window as any).isVerified;
      delete (window as any)._dxw6n_completed;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isVerified) {
      alert("Please complete the captcha verification to continue.");
      return;
    }

    // Simulate signup
    login();
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
            <h1 className="font-display text-5xl uppercase tracking-tighter mb-2">Join Now</h1>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Start earning in minutes</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  required
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-gray-50 border-2 border-dark rounded-xl py-4 pl-12 pr-4 outline-none focus:border-brand transition-colors font-bold"
                />
              </div>
            </div>

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
              <label className="text-xs font-bold uppercase tracking-widest ml-1">Password</label>
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

            <div className="my-6 space-y-3">
              <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-[10px] tracking-widest bg-red-50 p-3 border border-red-100 rounded-lg">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                Verification Required: Complete the captcha below to unlock the signup button
              </div>
              <div key={Date.now()} data-captcha-enable="true"></div>
            </div>

            <button 
              type="submit"
              disabled={!isVerified}
              className={`w-full py-5 rounded-full font-bold text-xl uppercase tracking-wider transition-all flex items-center justify-center gap-2 group ${
                isVerified 
                  ? 'bg-dark text-white hover:bg-brand hover:text-dark brutal-shadow-hover' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed border-2 border-gray-300'
              }`}
            >
              Create Account
              <ArrowRight className={`${isVerified ? 'group-hover:translate-x-1' : ''} transition-transform`} />
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
            Already have an account? <Link to="/login" className="text-brand hover:underline">Log in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
