import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DollarSign, Coins } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const tasks = [
  {
    id: 'voice-recognition',
    category: 'Audio & Voice',
    title: 'Voice Recognition Training',
    description: 'Record short phrases and validate voice samples to help AI models understand diverse accents and speech patterns.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80',
    pay: '$18.50',
    payLabel: 'per hour',
    tag: 'Voice',
    perks: ['Quiet Environment', 'Clear Speech', 'Weekly Payouts']
  },
  {
    id: 'image-labeling',
    category: 'Computer Vision',
    title: 'Image Recognition Labeling',
    description: 'Identify and draw bounding boxes around objects in images to help autonomous systems see the world more accurately.',
    image: 'https://images.unsplash.com/photo-1527430253228-e903248512bf?w=800&q=80',
    pay: '$15.00',
    payLabel: 'per hour',
    tag: 'Visual',
    perks: ['High Accuracy', 'Detail Oriented', 'Instant Access']
  },
  {
    id: 'ai-training',
    category: 'Natural Language',
    title: 'Text Sentiment Evaluation',
    description: 'Rank and provide feedback on AI-generated text responses to ensure they are accurate, helpful, and safe for users.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    pay: '$21.00',
    payLabel: 'per hour',
    tag: 'Language',
    perks: ['Analytical Skills', 'Native English', 'Flexible Hours']
  },
  {
    id: 'video-annotation',
    category: 'Video Analysis',
    title: 'AI Video Annotation',
    description: 'Watch short video clips and label specific actions or objects to help AI understand movement and temporal context.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    pay: '$19.00',
    payLabel: 'per hour',
    tag: 'Video',
    perks: ['Fast Internet', 'Visual Focus', 'Bonus for Speed']
  }
];

const NAMES = [
  'Amara', 'James', 'Fatima', 'Alex', 'Sarah', 'Chen', 'Elena', 'Kwame', 'Zoe', 'Liam', 
  'Sofia', 'Mateo', 'Anya', 'Yuki', 'Omar', 'Priya', 'Lucas', 'Isabella', 'Noah', 'Mia',
  'Ethan', 'Ava', 'Mason', 'Charlotte', 'Logan', 'Amelia', 'Caleb', 'Harper', 'Ryan', 'Evelyn'
];

export default function LandingPage() {
  const [liveEarnings, setLiveEarnings] = useState<any[]>([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const generateEarning = () => {
      const isBigPayout = Math.random() > 0.9;
      const amount = isBigPayout 
        ? (Math.random() * 40 + 20).toFixed(2) 
        : (Math.random() * 5 + 1).toFixed(2);
      
      return {
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        amount,
        id: Math.random(),
        isBig: isBigPayout
      };
    };

    // Initial set
    setLiveEarnings(Array.from({ length: 5 }, generateEarning));

    const interval = setInterval(() => {
      setLiveEarnings(prev => [generateEarning(), ...prev].slice(0, 5));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-grid">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center max-w-6xl mx-auto relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none select-none flex flex-wrap gap-12 justify-center content-center rotate-12 scale-150">
          {Array.from({ length: 40 }).map((_, i) => (
            <DollarSign key={i} size={64} strokeWidth={1} />
          ))}
        </div>

        {/* Floating Illustrations */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-brand/20 hidden lg:block"
        >
          <DollarSign size={120} strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 text-brand/20 hidden lg:block"
        >
          <Coins size={100} strokeWidth={1} />
        </motion.div>
        
        {/* More scattered dollar signs */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-20 right-1/4 text-brand/15 hidden lg:block"
        >
          <DollarSign size={80} strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-40 left-1/4 text-brand/15 hidden lg:block"
        >
          <DollarSign size={60} strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-10 text-brand/10 hidden lg:block"
        >
          <DollarSign size={40} strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute top-1/2 left-10 text-brand/10 hidden lg:block"
        >
          <DollarSign size={50} strokeWidth={1} />
        </motion.div>
        
        {/* Smaller scattered icons */}
        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 text-brand/10 hidden md:block"
        >
          <DollarSign size={40} strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/4 text-brand/10 hidden md:block"
        >
          <Coins size={30} strokeWidth={1} />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] -z-10"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-brand/10 border-2 border-dark rounded-full px-6 py-2 text-sm font-bold uppercase tracking-widest mb-12"
        >
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
          Open to all contributors worldwide
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.82] tracking-tighter mb-12 uppercase"
        >
          Train the Future <br />
          Earn <span className="text-brand">Rewards</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
        >
          The minimalistic platform for AI training. Help models see, hear, and understand the world — and get paid for your expertise.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link to={isAuthenticated ? "/dashboard" : "/signup"} className="bg-dark text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-xl md:text-2xl uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover">
            {isAuthenticated ? 'Go to Dashboard' : 'Start Earning Today'}
          </Link>
          <a href="#tasks" className="border-2 border-dark px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-xl md:text-2xl uppercase tracking-wider hover:bg-gray-50 transition-all">
            View Tasks
          </a>
        </motion.div>
      </section>

      {/* Tasks Section */}
      <section id="tasks" className="py-24 px-6 bg-gray-50 border-y-2 border-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex flex-wrap gap-16 justify-center content-center -rotate-6">
          {Array.from({ length: 30 }).map((_, i) => (
            <DollarSign key={i} size={48} strokeWidth={1} />
          ))}
        </div>

        <div className="text-center mb-20 relative z-10">
          <div className="font-display text-xl text-brand uppercase tracking-[0.2em] mb-4">AI Training Tasks</div>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-6">Help AI Grow</h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">Simple tasks with high impact. Choose your specialty and start training today.</p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-12">
          {tasks.map((task, idx) => (
            <Link to={`/task/${task.id}`} key={task.id}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`bg-white border-2 border-dark rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[300px] brutal-shadow-hover group`}
              >
                <div className="md:w-[400px] relative overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-dark">
                  <img src={task.image} alt={task.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex-1 p-10 flex flex-col justify-between">
                  <div>
                    <div className="text-brand font-bold uppercase tracking-widest mb-4">{task.category}</div>
                    <h3 className="font-display text-4xl uppercase tracking-tighter mb-4">{task.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">{task.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {task.perks.map(perk => (
                        <span key={perk} className="bg-gray-100 border-2 border-dark rounded-full px-4 py-1 text-xs font-bold uppercase">{perk}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end justify-between pt-8 mt-8 border-t-2 border-dark">
                    <div>
                      <div className="font-display text-3xl text-brand">{task.pay}</div>
                      <div className="text-gray-500 text-xs font-bold uppercase mt-1">{task.payLabel}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      {!isAuthenticated && (
                        <Link 
                          to="/signup" 
                          onClick={(e) => e.stopPropagation()}
                          className="hidden sm:block bg-dark text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand hover:text-dark transition-all brutal-shadow-sm"
                        >
                          Quick Apply
                        </Link>
                      )}
                      <div className="bg-brand text-dark border-2 border-dark rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest">
                        {task.tag}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works & Live Feed */}
      <section id="how" className="py-24 px-6 relative overflow-hidden">
        {/* Background Illustration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 text-brand/5 hidden lg:block"
        >
          <Coins size={300} strokeWidth={0.5} />
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start relative z-10">
          <div>
            <div className="font-display text-xl text-brand uppercase tracking-[0.2em] mb-4">The Process</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-8">Simple <br />Workflow</h2>
            <p className="text-gray-500 text-xl mb-16 font-medium">No fluff. Just high-quality training data and fair payouts.</p>
            
            <div className="space-y-12">
              <StepItem number="01" title="Sign Up" description="Create your profile in seconds. No complex onboarding." />
              <StepItem number="02" title="Train Models" description="Pick a task, follow the guidelines, and provide high-quality data." />
              <StepItem number="03" title="Get Paid" description="Weekly payouts directly to your preferred method. Simple." />
            </div>
          </div>

          <div className="bg-white border-2 border-dark rounded-3xl p-12 brutal-shadow relative overflow-hidden">
            <div className="font-display text-2xl uppercase tracking-widest mb-8 border-b-2 border-dark pb-4">Live Activity</div>
            <div className="font-display text-7xl text-dark tracking-tighter mb-12">
              $300,000<span className="text-brand">+</span>
            </div>
            
            <div className="space-y-6">
              {liveEarnings.map((earning) => (
                <motion.div 
                  key={earning.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center justify-between py-4 border-b-2 border-gray-100 last:border-0 ${earning.isBig ? 'bg-brand/5 -mx-4 px-4 rounded-xl' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${earning.isBig ? 'bg-orange-500 animate-ping' : 'bg-brand'}`} />
                    <span className="text-lg font-bold uppercase tracking-tight">{earning.name} earned</span>
                  </div>
                  <span className={`font-display text-2xl ${earning.isBig ? 'text-orange-500' : 'text-brand'}`}>+${earning.amount}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-24 px-6 bg-white border-t-2 border-dark">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-display text-xl text-brand uppercase tracking-[0.2em] mb-6">Security First</div>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tighter mb-8 leading-none">Your Data & Privacy<br />Are Protected.</h2>
            <p className="text-gray-600 text-xl font-medium mb-10">We use industry-standard encryption and secure payment gateways. Our platform is built on transparency and fair work practices.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border-2 border-dark rounded-2xl brutal-shadow-sm">
                <div className="font-display text-2xl mb-2">SECURE</div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">SSL Encrypted</p>
              </div>
              <div className="p-6 border-2 border-dark rounded-2xl brutal-shadow-sm">
                <div className="font-display text-2xl mb-2">VERIFIED</div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Human Reviewed</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 border-2 border-dark rounded-3xl p-8 md:p-12 brutal-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <DollarSign size={120} />
            </div>
            <h3 className="font-display text-3xl uppercase tracking-tighter mb-6">Transparency Report</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b-2 border-dark/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Payouts</span>
                <span className="font-display text-3xl">$300,000+</span>
              </div>
              <div className="flex justify-between items-end border-b-2 border-dark/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Active Tasks</span>
                <span className="font-display text-3xl">1,420</span>
              </div>
              <div className="flex justify-between items-end border-b-2 border-dark/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Avg. Review Time</span>
                <span className="font-display text-3xl">4.2 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-24 px-6 text-center bg-brand border-t-2 border-dark">
        <div className="max-w-4xl mx-auto">
          <div className="font-display text-xl text-dark uppercase tracking-[0.2em] mb-6">Join Today</div>
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-12">Ready to Start<br />Your Journey?</h2>
          <p className="text-dark text-2xl mb-16 font-bold">Join thousands of contributors already building their professional portfolio with EARNIE.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            {!isAuthenticated && (
              <input type="email" placeholder="Enter your email address" className="flex-1 bg-white border-2 border-dark rounded-full px-8 py-4 outline-none font-bold text-lg" />
            )}
            <Link to={isAuthenticated ? "/dashboard" : "/signup"} className="bg-dark text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-dark transition-all brutal-shadow-hover flex-1">
              {isAuthenticated ? 'Go to Dashboard' : 'Join Free'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function StatItem({ number, prefix = '', suffix = '', label, color = 'text-dark' }: { number: string, prefix?: string, suffix?: string, label: string, color?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="text-center group cursor-default"
    >
      <div className={`font-display text-5xl md:text-7xl tracking-tighter ${color} transition-transform group-hover:scale-110`}>
        {prefix}{number}{suffix}
      </div>
      <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mt-4 opacity-60">{label}</div>
    </motion.div>
  );
}

function StepItem({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-8 items-start">
      <div className="w-16 h-16 min-w-[64px] rounded-2xl bg-brand border-2 border-dark flex items-center justify-center font-display text-3xl text-dark brutal-shadow">
        {number}
      </div>
      <div>
        <h4 className="font-display text-3xl uppercase tracking-tighter mb-2">{title}</h4>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}
