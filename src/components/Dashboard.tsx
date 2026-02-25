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
  Users
} from 'lucide-react';
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
  { day: 'Mon', amount: 12.50 },
  { day: 'Tue', amount: 18.20 },
  { day: 'Wed', amount: 15.00 },
  { day: 'Thu', amount: 25.40 },
  { day: 'Fri', amount: 32.10 },
  { day: 'Sat', amount: 28.50 },
  { day: 'Sun', amount: 14.20 },
];

const taskDistribution = [
  { name: 'Surveys', value: 45, color: '#00a854' },
  { name: 'Reviews', value: 30, color: '#1a2e22' },
  { name: 'Micro-tasks', value: 25, color: '#6b8070' },
];

const recentTasks = [
  { id: 1, title: 'App UI Review', category: 'Reviews', amount: 4.50, status: 'Completed', time: '2h ago' },
  { id: 2, title: 'Data Labeling #42', category: 'Micro-tasks', amount: 1.20, status: 'Completed', time: '5h ago' },
  { id: 3, title: 'Student Survey', category: 'Surveys', amount: 2.00, status: 'Pending', time: '1d ago' },
  { id: 4, title: 'Translation (ES-EN)', category: 'Translation', amount: 12.00, status: 'Completed', time: '2d ago' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r-2 border-dark hidden lg:flex flex-col p-6 sticky top-20 h-[calc(100vh-80px)]">
        <div className="space-y-4 flex-1">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <SidebarItem icon={<ListTodo size={20} />} label="Available Tasks" />
          <SidebarItem icon={<History size={20} />} label="Earnings History" />
          <SidebarItem icon={<Users size={20} />} label="Referrals" />
          <SidebarItem icon={<Settings size={20} />} label="Settings" />
        </div>
        
        <div className="bg-brand/10 p-6 rounded-2xl border-2 border-dark brutal-shadow">
          <div className="flex items-center gap-2 text-dark mb-4">
            <Gift size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Daily Bonus</span>
          </div>
          <p className="text-sm text-dark font-bold mb-4 uppercase leading-tight">Complete 5 more tasks to unlock $5.00 bonus!</p>
          <div className="w-full bg-white border-2 border-dark h-3 rounded-full overflow-hidden">
            <div className="bg-brand h-full w-[60%]" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12">
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="font-display text-5xl uppercase tracking-tighter text-dark">Welcome back, Alex! 👋</h1>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-2">Here's what's happening with your earnings today.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white border-2 border-dark text-dark font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-gray-50 transition-all">
              History
            </button>
            <button className="bg-dark text-white font-bold uppercase tracking-widest px-8 py-3 rounded-full shadow-lg hover:bg-brand hover:text-dark transition-all brutal-shadow-hover flex items-center gap-2">
              <Wallet size={18} />
              Withdraw
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatCard 
            title="Total Balance" 
            value="$1,240.50" 
            trend="+12.5%" 
            trendUp={true} 
            icon={<DollarSign className="text-dark" />} 
          />
          <StatCard 
            title="Today's Earnings" 
            value="$42.10" 
            trend="+5.2%" 
            trendUp={true} 
            icon={<TrendingUp className="text-dark" />} 
          />
          <StatCard 
            title="Tasks Completed" 
            value="154" 
            trend="+8" 
            trendUp={true} 
            icon={<CheckCircle2 className="text-dark" />} 
          />
          <StatCard 
            title="Referral Earnings" 
            value="$215.00" 
            trend="+12" 
            trendUp={true} 
            icon={<Users className="text-dark" />} 
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2 bg-white p-10 rounded-3xl border-2 border-dark brutal-shadow">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-display text-3xl uppercase tracking-tighter">Earnings Overview</h3>
              <select className="bg-gray-50 border-2 border-dark text-xs font-bold uppercase tracking-widest rounded-full px-6 py-2 outline-none focus:border-brand">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[350px] w-full">
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

          <div className="bg-white p-10 rounded-3xl border-2 border-dark brutal-shadow">
            <h3 className="font-display text-3xl uppercase tracking-tighter mb-10">Task Distribution</h3>
            <div className="h-[280px] w-full">
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
          <div className="p-10 border-b-2 border-gray-100 flex items-center justify-between">
            <h3 className="font-display text-3xl uppercase tracking-tighter">Recent Activity</h3>
            <button className="text-brand font-bold uppercase tracking-widest text-xs hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
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

function StatCard({ title, value, trend, trendUp, icon }: { title: string, value: string, trend: string, trendUp: boolean, icon: React.ReactNode }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white p-8 rounded-3xl border-2 border-dark brutal-shadow"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 bg-gray-50 border-2 border-dark rounded-2xl flex items-center justify-center">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${trendUp ? 'text-brand' : 'text-red-500'}`}>
          {trendUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {trend}
        </div>
      </div>
      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{title}</p>
      <h4 className="font-display text-4xl text-dark tracking-tighter">{value}</h4>
    </motion.div>
  );
}
