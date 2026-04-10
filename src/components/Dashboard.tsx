import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight,
  LayoutDashboard,
  ListTodo,
  History,
  Settings,
  Wallet,
  Gift,
  Users,
  PlayCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const earningsData = [
  { day: 'Mon', amount: 45.50 },
  { day: 'Tue', amount: 62.20 },
  { day: 'Wed', amount: 55.00 },
  { day: 'Thu', amount: 85.40 },
  { day: 'Fri', amount: 112.10 },
  { day: 'Sat', amount: 98.50 },
  { day: 'Sun', amount: 74.20 },
];

const taskDistribution = [
  { name: 'Surveys', value: 45, color: '#00a854' },
  { name: 'Reviews', value: 30, color: '#1a2e22' },
  { name: 'Micro-tasks', value: 25, color: '#6b8070' },
];

const recentTasks = [
  { id: 1, title: 'Referral Bonus: James S.', category: 'Referrals', amount: 5.00, status: 'Completed', time: '10m ago' },
  { id: 2, title: 'Referral Bonus: Fatima R.', category: 'Referrals', amount: 5.00, status: 'Completed', time: '45m ago' },
  { id: 3, title: 'Ambassador Commission (10%)', category: 'Referrals', amount: 12.50, status: 'Completed', time: '2h ago' },
  { id: 4, title: 'Referral Bonus: Chen W.', category: 'Referrals', amount: 5.00, status: 'Completed', time: '5h ago' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row pt-16 lg:pt-20 pb-24 lg:pb-0">
      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-dark z-50 px-6 py-4 flex justify-between items-center shadow-[0_-4px_0_0_rgba(0,0,0,0.05)]">
        <MobileNavItem icon={<LayoutDashboard size={20} />} active />
        <MobileNavItem icon={<ListTodo size={20} />} />
        <div className="relative -top-6">
          <button className="w-12 h-12 bg-brand border-2 border-dark rounded-full flex items-center justify-center brutal-shadow-sm rotate-45 hover:rotate-0 transition-transform">
            <Wallet size={20} className="-rotate-45" />
          </button>
        </div>
        <MobileNavItem icon={<History size={20} />} />
        <MobileNavItem icon={<Settings size={20} />} />
      </nav>

      {/* Sidebar (Desktop) */}
      <aside className="w-72 bg-white border-r-2 border-dark hidden lg:flex flex-col p-8 sticky top-20 h-[calc(100vh-80px)]">
        <div className="space-y-4 flex-1">
          <SidebarItem icon={<LayoutDashboard size={22} />} label="Overview" active />
          <SidebarItem icon={<ListTodo size={22} />} label="Available Tasks" />
          <SidebarItem icon={<History size={22} />} label="Earnings History" />
          <SidebarItem icon={<Users size={22} />} label="Referrals" />
          <SidebarItem icon={<Settings size={22} />} label="Settings" />
        </div>
        
        <div className="bg-brand border-2 border-dark p-8 rounded-3xl brutal-shadow">
          <div className="flex items-center gap-3 text-dark mb-4">
            <Gift size={24} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Daily Bonus</span>
          </div>
          <p className="text-sm text-dark font-bold mb-6 uppercase leading-tight">Complete 2 more tasks to unlock $10.00 bonus!</p>
          <div className="w-full bg-white border-2 border-dark h-4 rounded-full overflow-hidden">
            <div className="bg-dark h-full w-[85%]" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 lg:p-16 bg-grid">
        <header className="mb-10 lg:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-dark">Welcome back, Alex! 👋</h1>
            <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-widest mt-2">Track your progress and manage your professional assignments.</p>
          </div>
          <div className="flex gap-3 md:gap-4">
            <button className="flex-1 md:flex-none bg-white border-2 border-dark text-dark font-bold uppercase tracking-widest px-5 md:px-6 py-2.5 rounded-full hover:bg-gray-50 transition-all text-xs md:text-sm">
              History
            </button>
            <button className="flex-1 md:flex-none bg-dark text-white font-bold uppercase tracking-widest px-5 md:px-6 py-2.5 rounded-full shadow-lg hover:bg-brand hover:text-dark transition-all brutal-shadow-hover flex items-center justify-center gap-2 text-xs md:text-sm">
              <Wallet size={18} />
              Withdraw
            </button>
          </div>
        </header>

        {/* Active Task (Mock) */}
        <div className="mb-10 lg:mb-12">
          <div className="bg-brand border-2 border-dark rounded-3xl p-6 md:p-8 brutal-shadow flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-dark rounded-2xl flex items-center justify-center animate-pulse shrink-0">
                <PlayCircle size={24} className="text-dark md:hidden" />
                <PlayCircle size={32} className="text-dark hidden md:block" />
              </div>
              <div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-dark/60 mb-1">Active Task</div>
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-dark leading-none">Movie Review: Dune Part Two</h3>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t-2 md:border-t-0 border-dark/10 pt-6 md:pt-0">
              <div className="text-left md:text-right">
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/60">Progress</div>
                <div className="text-sm font-bold text-dark">45% Complete</div>
              </div>
              <button 
                onClick={() => navigate('/task/movie-reviews')}
                className="bg-dark text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-all brutal-shadow-hover text-xs md:text-sm"
              >
                Resume Task
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatCard 
            title="Total Balance" 
            value="$1,648.00" 
            trend="+32.4%" 
            trendUp={true} 
            icon={<DollarSign className="text-dark" />} 
          />
          <StatCard 
            title="Today's Earnings" 
            value="$165.20" 
            trend="+15.2%" 
            trendUp={true} 
            icon={<TrendingUp className="text-dark" />} 
          />
          <StatCard 
            title="Tasks Completed" 
            value="248" 
            trend="+12" 
            trendUp={true} 
            icon={<CheckCircle2 className="text-dark" />} 
          />
          <StatCard 
            title="Referral Earnings" 
            value="$342.00" 
            trend="+24" 
            trendUp={true} 
            icon={<Users className="text-dark" />} 
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-3xl border-2 border-dark brutal-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">Earnings Overview</h3>
              <select className="bg-gray-50 border-2 border-dark text-[10px] font-bold uppercase tracking-widest rounded-full px-6 py-2 outline-none focus:border-brand w-fit">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[250px] md:h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00D166" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#00D166" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#141414', fontSize: 12, fontWeight: 'bold' }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#141414', fontSize: 12, fontWeight: 'bold' }}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '2px solid #141414', boxShadow: '4px 4px 0px 0px #141414' }}
                    formatter={(value) => [`$${value}`, 'Earnings']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#00D166" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorAmount)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-3xl border-2 border-dark brutal-shadow">
            <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter mb-10">Task Distribution</h3>
            <div className="h-[200px] md:h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taskDistribution}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#141414', fontWeight: 'bold' }} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {taskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#141414" strokeWidth={2} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-10 space-y-4">
              {taskDistribution.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm border-2 border-dark" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.name}</span>
                  </div>
                  <span className="text-sm font-display">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl border-2 border-dark brutal-shadow overflow-hidden">
          <div className="p-6 md:p-10 border-b-2 border-gray-100 flex items-center justify-between">
            <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">Recent Activity</h3>
            <button className="text-brand font-bold uppercase tracking-widest text-[10px] md:text-xs hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-10 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Task</th>
                  <th className="px-10 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
                  <th className="px-10 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Amount</th>
                  <th className="px-10 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-10 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-gray-50">
                {recentTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-10 py-6 font-bold uppercase tracking-tight text-dark">{task.title}</td>
                    <td className="px-10 py-6 text-gray-500 text-xs font-bold uppercase tracking-widest">{task.category}</td>
                    <td className="px-10 py-6 font-display text-2xl text-brand">+${task.amount.toFixed(2)}</td>
                    <td className="px-10 py-6">
                      <span className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border-2 border-dark ${
                        task.status === 'Completed' ? 'bg-brand text-dark' : 'bg-orange-400 text-dark'
                      }`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-gray-400 text-xs font-bold uppercase tracking-widest">{task.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all ${
      active ? 'bg-dark text-white brutal-shadow' : 'text-gray-400 hover:bg-gray-100 hover:text-dark'
    }`}>
      {icon}
      {label}
    </button>
  );
}

function MobileNavItem({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) {
  return (
    <button className={`p-2.5 rounded-xl transition-all ${
      active ? 'bg-brand border-2 border-dark text-dark brutal-shadow-sm' : 'text-gray-400'
    }`}>
      {icon}
    </button>
  );
}

function StatCard({ title, value, trend, trendUp, icon }: { title: string, value: string, trend: string, trendUp: boolean, icon: React.ReactNode }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white p-6 md:p-8 rounded-3xl border-2 border-dark brutal-shadow"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 border-2 border-dark rounded-2xl flex items-center justify-center">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-[10px] md:text-xs font-bold ${trendUp ? 'text-brand' : 'text-red-500'}`}>
          {trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {trend}
        </div>
      </div>
      <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">{title}</p>
      <h4 className="font-display text-3xl md:text-4xl text-dark tracking-tighter">{value}</h4>
    </motion.div>
  );
}
