import { Link } from 'react-router-dom';
import { DollarSign, Coins } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-20 px-6 border-t-2 border-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="font-display text-3xl tracking-tighter text-white mb-6 block">
            EARN<span className="text-brand">IE</span>
          </Link>
          <p className="text-gray-400 text-sm font-medium leading-relaxed">
            Empowering students worldwide through professional micro-task opportunities.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
            <li><Link to="/" className="hover:text-brand transition-colors">Available Tasks</Link></li>
            <li><Link to="/" className="hover:text-brand transition-colors">How it Works</Link></li>
            <li><Link to="/" className="hover:text-brand transition-colors">Success Stories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
            <li><Link to="/" className="hover:text-brand transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
            <li><Link to="/" className="hover:text-brand transition-colors">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
            <li><Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-brand transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-brand transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          © 2024 EARNIE PLATFORM. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><DollarSign size={18} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Coins size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
