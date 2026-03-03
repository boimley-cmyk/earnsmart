import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-5 bg-white border-b-2 border-dark">
      <Link to="/" className="font-display text-3xl tracking-tighter text-dark hover:scale-105 transition-transform">
        EARN<span className="text-brand">IE</span>
      </Link>
      
      <div className="flex items-center gap-10">
        <Link to="/" className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] hover:text-brand transition-colors relative group">
          Tasks
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
        </Link>
        {isAuthenticated && (
          <>
            <Link to="/dashboard" className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] hover:text-brand transition-colors relative group">
              Earnings
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
            </Link>
            <Link to="/dashboard" className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] hover:text-brand transition-colors relative group">
              Referrals
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
            </Link>
          </>
        )}
        <Link to="/" className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] hover:text-brand transition-colors relative group">
          How it works
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
        </Link>
        {isAuthenticated ? (
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="bg-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand hover:text-dark transition-all brutal-shadow-hover">
              Dashboard
            </Link>
            <button 
              onClick={handleLogout}
              className="text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors">
              Login
            </Link>
            <Link to="/signup" className="bg-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand hover:text-dark transition-all brutal-shadow-hover">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
