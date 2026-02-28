import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DollarSign, Coins } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const tasks = [
  {
    id: 'movie-reviews',
    category: 'Entertainment',
    title: 'Movie & Show Reviews',
    description: 'Get paid to watch and critique the latest blockbusters and trending series. No subscriptions required — we provide access.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    pay: 'Up to $12.00',
    payLabel: 'per review',
    tag: 'Popular',
    perks: ['Watch Dune 2', 'Access Provided', 'Instant Payout']
  },
  {
    id: 'translation',
    category: 'Language',
    title: 'Article Translation',
    description: 'Fluent in Spanish or French? Help global brands reach new audiences by translating short articles and blog posts.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    pay: 'Up to $25.00',
    payLabel: 'per article',
    tag: 'High Demand',
    perks: ['Spanish/French', '2,000 words', '48h Deadline']
  },
  {
    id: 'web3-tasks',
    category: 'Crypto & Web3',
    title: 'Web3 Protocol Testing',
    description: 'Be the first to test new blockchain protocols. Complete simple on-chain quests and earn rewards in crypto.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80',
    pay: 'Up to $50.00',
    payLabel: 'per quest',
    tag: 'Crypto',
    perks: ['Airdrop Farming', 'ZkSync/LayerZero', 'Gas Reimbursed']
  },
  {
    id: 'referrals',
    category: 'Passive Income',
    title: 'Ambassador Program',
    description: 'Invite your friends and classmates to Earnie. Earn a commission for every task they complete for life.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
    pay: '$5.00 + 10%',
    payLabel: 'per referral',
    tag: 'Passive',
    perks: ['Unlimited Invites', 'Weekly Payouts', 'Student Leaders']
  }
];

const NAMES = [
  'Amara', 'James', 'Fatima', 'Sarah', 'Chen', 'Elena', 'Kwame', 'Zoe', 'Liam',
  'Sofia', 'Mateo', 'Anya', 'Yuki', 'Omar', 'Priya', 'Lucas', 'Isabella', 'Noah', 'Mia',
  'Ethan', 'Ava', 'Mason', 'Charlotte', 'Logan', 'Amelia', 'Caleb', 'Harper', 'Ryan', 'Evelyn',
  'Aiden', 'Layla', 'Jackson', 'Nora', 'Sebastian', 'Lily', 'Henry', 'Eleanor', 'Owen', 'Hannah',
  'Gabriel', 'Stella', 'Carter', 'Hazel', 'Jayden', 'Aurora', 'Wyatt', 'Savannah', 'Dylan', 'Aria',
  'Levi', 'Camila', 'Isaac', 'Penelope', 'Lincoln', 'Riley', 'Elijah', 'Zoey', 'Benjamin', 'Nadia',
  'Kofi', 'Aisha', 'Tariq', 'Imani', 'Darius', 'Zara', 'Malik', 'Keisha', 'Jabari', 'Nia',
  'Ravi', 'Meera', 'Arjun', 'Divya', 'Vikram', 'Ananya', 'Sanjay', 'Kavya', 'Rohan', 'Pooja',
  'Wei', 'Mei', 'Jing', 'Hao', 'Xiu', 'Fang', 'Bao', 'Ling', 'Tao', 'Yan',
  'Emre', 'Ayesha', 'Hassan', 'Leila', 'Karim', 'Yasmin', 'Tariq', 'Soraya', 'Nasir', 'Dina',
  'Luca', 'Giulia', 'Marco', 'Valentina', 'Enzo', 'Chiara', 'Filippo', 'Francesca', 'Matteo', 'Alessia',
  'Hugo', 'Camille', 'Louis', 'Manon', 'Antoine', 'Chloe', 'Pierre', 'Inès', 'Théo', 'Léa',
  'Andile', 'Thandiwe', 'Sipho', 'Nomsa', 'Bongani', 'Zanele', 'Thabo', 'Lindiwe', 'Siyanda', 'Nokwanda',
  'Diego', 'Valentina', 'Santiago', 'Catalina', 'Alejandro', 'Mariana', 'Emilio', 'Gabriela', 'Rodrigo', 'Daniela',
  'Finn', 'Sienna', 'Oscar', 'Ivy', 'Jasper', 'Luna', 'Archie', 'Poppy', 'Theo', 'Rosie',
  'Mikael', 'Astrid', 'Erik', 'Freya', 'Bjorn', 'Ingrid', 'Sven', 'Sigrid', 'Lars', 'Helga',
  'Dimitri', 'Katerina', 'Nikolai', 'Anastasia', 'Ivan', 'Natasha', 'Alexei', 'Olga', 'Pavel', 'Irina',
  'Seun', 'Temi', 'Chidi', 'Ngozi', 'Emeka', 'Adaeze', 'Uche', 'Chisom', 'Obinna', 'Amaka',
  'Hiroshi', 'Yuki', 'Kenji', 'Sakura', 'Takeshi', 'Hana', 'Ryo', 'Aiko', 'Daiki', 'Natsuki',
  'Jin', 'Soo', 'Hyun', 'Jae', 'Min', 'Eun', 'Seok', 'Yeon', 'Tae', 'Hye',
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
      {/* Stats Bar */}
      <div className="border-b-2 border-dark py-12 px-6 flex flex-wrap justify-center gap-12 md:gap-24">
        <StatItem number="14" suffix="K+" label="Active Students" />
        <StatItem number="300" prefix="$" suffix="K+" label="Paid Out" color="text-brand" />
        <StatItem number="38" suffix="+" label="Countries" />
        <StatItem number="4.8" suffix="★" label="Average Rating" />
      </div>

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
          Open to all students worldwide
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.82] tracking-tighter mb-12 uppercase"
        >
          Turn Your Free <br />
          Time Into <span className="text-brand">Real Money</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
        >
          Simple tasks, instant payouts. Review movies, translate articles, complete Web3 tasks and more — all from your phone or laptop.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link to="/signup" className="bg-dark text-white px-12 py-5 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover">
            Start Earning Now
          </Link>
          <a href="#how" className="border-2 border-dark px-12 py-5 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-gray-50 transition-all">
            How it works
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
          <div className="font-display text-xl text-brand uppercase tracking-[0.2em] mb-4">What You Can Do</div>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-6">Pick Tasks You Enjoy</h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">No experience required. Choose from dozens of task types that fit your skills and schedule.</p>
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
                    <div className="bg-brand text-dark border-2 border-dark rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest">
                      {task.tag}
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
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-8">Earn in 3 <br />Simple Steps</h2>
            <p className="text-gray-500 text-xl mb-16 font-medium">No complicated setups. Sign up, pick tasks, and get paid — it really is that simple.</p>
            
            <div className="space-y-12">
              <StepItem number="01" title="Create Your Free Account" description="Sign up with your email or Google account in under 60 seconds. No payment info needed to start." />
              <StepItem number="02" title="Browse & Complete Tasks" description="Filter tasks by category, payout, or time required. Complete them at your own pace." />
              <StepItem number="03" title="Withdraw Your Earnings" description="Cash out via PayPal, bank transfer, or crypto wallet. Minimum withdrawal is just $5." />
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

      {/* CTA Section */}
      <section id="join" className="py-24 px-6 text-center bg-brand border-t-2 border-dark">
        <div className="max-w-4xl mx-auto">
          <div className="font-display text-xl text-dark uppercase tracking-[0.2em] mb-6">Join Today</div>
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-12">Ready to Start<br />Earning?</h2>
          <p className="text-dark text-2xl mb-16 font-bold">Join 14,000+ students already earning with EARNIE. Free to join, free to withdraw.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-1 bg-white border-2 border-dark rounded-full px-8 py-5 outline-none font-bold text-lg" />
            <Link to="/signup" className="bg-dark text-white px-12 py-5 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-white hover:text-dark transition-all brutal-shadow-hover">
              Join Free
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
