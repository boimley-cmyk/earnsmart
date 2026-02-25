import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, AlertCircle, PlayCircle } from 'lucide-react';
import { useState } from 'react';

const taskDetails: Record<string, any> = {
  'movie-reviews': {
    title: 'Movie & Show Reviews',
    category: 'Entertainment',
    pay: '$2 – $12 per review',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200&q=80',
    description: 'Help streaming platforms and production companies gauge audience sentiment by providing detailed, structured reviews of the latest content.',
    howItWorks: [
      'Receive a link to a movie or TV show episode.',
      'Watch the content in its entirety (no skipping!).',
      'Fill out our structured review form covering plot, acting, and technical aspects.',
      'Submit your review for quality check.',
      'Get paid within 24 hours of approval.'
    ],
    requirements: [
      'Active subscription to at least one major streaming service.',
      'Strong written English skills.',
      'Attention to detail.',
      'Ability to meet 48-hour deadlines.'
    ]
  },
  'translation': {
    title: 'Article Translation',
    category: 'Language',
    pay: '$5 – $25 per article',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    description: 'Bridge the language gap by translating various types of content for global brands and media outlets.',
    howItWorks: [
      'Select an article from our open queue.',
      'Translate the content while maintaining the original tone and context.',
      'Proofread for grammar and cultural nuances.',
      'Submit the final translation.',
      'Payment is released after client review.'
    ],
    requirements: [
      'Fluency in at least two languages.',
      'Excellent grammar and vocabulary.',
      'Previous translation experience is a plus but not required.',
      'Reliable internet connection.'
    ]
  },
  'web3-tasks': {
    title: 'Web3 Tasks',
    category: 'Crypto & Web3',
    pay: '$3 – $50+ per task',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&q=80',
    description: 'Explore the frontier of technology by testing new blockchain protocols and participating in ecosystem growth.',
    howItWorks: [
      'Connect your Web3 wallet (MetaMask, Phantom, etc.).',
      'Follow specific on-chain or off-chain instructions (e.g., swap tokens, mint NFT).',
      'Verify completion through our automated system.',
      'Receive rewards in tokens or stablecoins.'
    ],
    requirements: [
      'Basic understanding of crypto wallets.',
      'Small amount of gas fees for some tasks.',
      'Willingness to learn new protocols.',
      'Security-conscious mindset.'
    ]
  },
  'referrals': {
    title: 'Referral Program',
    category: 'Passive Income',
    pay: '$5 per signup + 10% commission',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80',
    description: 'Build a sustainable stream of passive income by inviting your network to join the EarnSmart community.',
    howItWorks: [
      'Get your unique referral link from your dashboard.',
      'Share it with friends, family, or your social audience.',
      'Track your referrals and their activity in real-time.',
      'Earn $5 for every active signup.',
      'Receive 10% of their earnings for the first 6 months.'
    ],
    requirements: [
      'An active EarnSmart account.',
      'Ethical promotion methods (no spamming).',
      'Social media presence is a plus.'
    ]
  }
};

export default function TaskDetail() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = taskId ? taskDetails[taskId] : null;

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-4xl mb-4">Task not found</h2>
          <Link to="/" className="text-brand font-bold underline">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-dark font-bold uppercase tracking-widest mb-12 hover:text-brand transition-colors">
          <ArrowLeft size={20} />
          Back to tasks
        </Link>

        <div className="grid gap-12">
          <div className="relative h-[400px] rounded-3xl overflow-hidden border-2 border-dark brutal-shadow">
            <img src={task.image} alt={task.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-12">
              <div>
                <div className="text-brand font-bold uppercase tracking-[0.2em] mb-4">{task.category}</div>
                <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">{task.title}</h1>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="font-display text-3xl uppercase tracking-tighter mb-6 border-b-2 border-dark pb-2">Overview</h2>
                <p className="text-gray-600 text-xl leading-relaxed font-medium">{task.description}</p>
              </section>

              <section>
                <h2 className="font-display text-3xl uppercase tracking-tighter mb-6 border-b-2 border-dark pb-2">How it works</h2>
                <div className="space-y-6">
                  {task.howItWorks.map((step: string, idx: number) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 min-w-[32px] rounded-lg bg-brand border-2 border-dark flex items-center justify-center font-display text-dark">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 font-medium pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl uppercase tracking-tighter mb-6 border-b-2 border-dark pb-2">Requirements</h2>
                <div className="grid gap-4">
                  {task.requirements.map((req: string, idx: number) => (
                    <div key={idx} className="flex gap-3 items-center bg-gray-50 border-2 border-dark p-4 rounded-xl">
                      <CheckCircle2 className="text-brand" size={20} />
                      <span className="font-bold text-sm uppercase tracking-tight">{req}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="bg-white border-2 border-dark p-8 rounded-3xl brutal-shadow sticky top-32">
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Estimated Payout</div>
                <div className="font-display text-4xl text-brand mb-8">{task.pay}</div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm font-bold uppercase">
                    <PlayCircle size={18} className="text-brand" />
                    Instant Payouts
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold uppercase">
                    <AlertCircle size={18} className="text-brand" />
                    No Experience Needed
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/signup')}
                  className="w-full bg-dark text-white py-5 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover"
                >
                  Apply for Task
                </button>
                <p className="text-center text-xs text-gray-400 font-bold uppercase mt-4">Takes less than 2 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
