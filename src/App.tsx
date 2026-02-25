import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import TaskDetail from './components/TaskDetail';
import Signup from './components/Signup';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  useEffect(() => {
    document.title = "EarnSmart | Turn Free Time Into Real Money";
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/task/:taskId" 
                element={
                  <ProtectedRoute>
                    <TaskDetail />
                  </ProtectedRoute>
                } 
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        
        <footer className="bg-dark text-white py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-1">
              <span className="font-display text-2xl tracking-tighter">Earn</span>
              <span className="font-display text-2xl tracking-tighter text-brand">Smart</span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
            
            <p className="text-sm text-gray-500">© 2024 EarnSmart. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  </AuthProvider>
);
}
