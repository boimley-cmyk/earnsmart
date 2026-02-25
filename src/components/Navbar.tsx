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
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 bg-white border-b-2 border-dark">
      <Link to="/" className="font-display text-2xl tracking-tighter text-dark">
        EARN<span className="text-brand">SMART</span>
      </Link>
      
      <div className="flex items-center gap-8">
        <Link to="/" className="hidden md:block text-sm font-bold uppercase tracking-wider hover:text-brand transition-colors">Tasks</Link>
        <Link to="/" className="hidden md:block text-sm font-bold uppercase tracking-wider hover:text-brand transition-colors">How it works</Link>
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="bg-dark text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover">
              Dashboard
            </Link>
            <button 
              onClick={handleLogout}
              className="text-sm font-bold uppercase tracking-wider hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-dark text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
