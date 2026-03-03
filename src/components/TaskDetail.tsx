import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, AlertCircle, PlayCircle, ExternalLink, Send, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const taskDetails: Record<string, any> = {
  'movie-reviews': {
    title: 'Movie & Show Reviews',
    category: 'Entertainment',
    pay: '$6.50 per review',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200&q=80',
    description: 'Current Assignment: Review "Dune: Part Two" or "The Bear" Season 3. Provide a structured 300-word critique on plot, acting, and cinematography for our streaming partner database.',
    howItWorks: [
      'Receive a secure link to the assigned content (Access provided by us).',
      'Watch the content in its entirety on our secure player.',
      'Fill out our structured review form covering specific technical and narrative aspects.',
      'Submit your review for quality check by our editorial team.',
      'Get paid within 24 hours of approval.'
    ],
    requirements: [
      'Strong written English skills (300+ words).',
      'Attention to cinematography and pacing.',
      'Ability to meet 48-hour deadlines.',
      'Reliable internet connection for streaming.'
    ],
    workspace: {
      instruction: 'Please watch the assigned content using the secure link below. Once finished, write your 300-word review in the box provided.',
      mockLink: 'https://secure-stream.earnie.app/v/dune-2-internal-review',
      placeholder: 'Write your critique here (min. 300 words)...'
    }
  },
  'translation': {
    title: 'Article Translation',
    category: 'Language',
    pay: '$18.00 per article',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    description: 'Current Assignment: Translate a 2,000-word Spanish lifestyle article into English. Maintain a casual, engaging tone suitable for a high-traffic travel blog audience.',
    howItWorks: [
      'Select the "Spanish Travel Blog" task from your queue.',
      'Translate the 2,000-word content while maintaining the original tone.',
      'Proofread for grammar and cultural nuances.',
      'Submit the final translation in .docx or .pdf format.',
      'Payment is released after client review (usually < 12h).'
    ],
    requirements: [
      'Native-level fluency in Spanish and English.',
      'Excellent grammar and creative writing skills.',
      'Ability to handle 2,000 words in one sitting.',
      'Reliable internet connection.'
    ],
    workspace: {
      instruction: 'Download the source Spanish article below. Upload your completed English translation (.docx or .pdf) when ready.',
      mockLink: 'https://cdn.earnie.app/docs/spanish-lifestyle-v4.pdf',
      placeholder: 'Paste a summary or upload your file...'
    }
  },
  'web3-tasks': {
    title: 'Web3 Protocol Testing',
    category: 'Crypto & Web3',
    pay: '$12.50 per quest',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&q=80',
    description: 'Current Assignment: Test the new "ZkSync" mainnet bridge. Perform 3 swaps, mint a testnet NFT, and report any UI/UX bugs or latency issues encountered during the process.',
    howItWorks: [
      'Connect your Web3 wallet (MetaMask or Phantom).',
      'Follow the specific quest steps (Swap, Mint, Bridge).',
      'Verify completion through our automated on-chain verification system.',
      'Submit a brief 3-sentence bug report if any issues are found.',
      'Receive rewards in stablecoins + gas fee reimbursement.'
    ],
    requirements: [
      'Basic understanding of crypto wallets and bridging.',
      'Small amount of ETH/SOL for initial gas (reimbursed).',
      'Willingness to learn new protocols.',
      'Security-conscious mindset.'
    ],
    workspace: {
      instruction: 'Connect your wallet to the testnet dApp below. Complete the 3 swaps and mint the NFT. Paste your transaction hash below for verification.',
      mockLink: 'https://testnet.zksync-bridge.io/quest/earnie-alpha',
      placeholder: 'Paste transaction hash (0x...)'
    }
  },
  'referrals': {
    title: 'Ambassador Program',
    category: 'Passive Income',
    pay: '$5.00 per signup + 10% cut',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80',
    description: 'Current Assignment: Build a sustainable stream of passive income by inviting 5 friends from your university to join the Earnie community.',
    howItWorks: [
      'Get your referral link from your dashboard.',
      'Share it with friends, family, or your social audience.',
      'Track your referrals and their activity in real-time.',
      'Earn $5 for every active signup that completes 1 task.',
      'Receive 10% of their earnings for the first 6 months.'
    ],
    requirements: [
      'An active Earnie account.',
      'Ethical promotion methods (no spamming).',
      'Social media presence or student status is a plus.'
    ],
    workspace: {
      instruction: 'Copy your unique ambassador link below and share it with your network. Your earnings will update automatically as people join.',
      mockLink: 'https://earnie.app/join?ref=ALEX_STUDENT_2024',
      placeholder: 'Enter notes about your promotion strategy...'
    }
  }
};

export default function TaskDetail() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleStartTask = () => {
    if (!isAuthenticated) {
      navigate('/signup');
      return;
    }
    setIsStarted(true);
    // Scroll to workspace
    setTimeout(() => {
      document.getElementById('workspace')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20 px-4 md:px-6 bg-grid">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-dark font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8 md:mb-12 hover:text-brand transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to tasks
        </Link>

        <div className="grid gap-8 md:gap-12">
          <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border-2 border-dark brutal-shadow">
            <img src={task.image} alt={task.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-6 md:p-12">
              <div>
                <div className="text-brand font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-2 md:mb-4">{task.category}</div>
                <h1 className="font-display text-3xl md:text-7xl text-white uppercase tracking-tighter leading-none">{task.title}</h1>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-10 md:space-y-12">
              <section>
                <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter mb-4 md:mb-6 border-b-2 border-dark pb-2">Overview</h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">{task.description}</p>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter mb-4 md:mb-6 border-b-2 border-dark pb-2">How it works</h2>
                <div className="space-y-4 md:space-y-6">
                  {task.howItWorks.map((step: string, idx: number) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-7 h-7 md:w-8 md:h-8 min-w-[28px] md:min-w-[32px] rounded-lg bg-brand border-2 border-dark flex items-center justify-center font-display text-dark text-sm md:text-base">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 font-medium pt-0.5 md:pt-1 text-sm md:text-base">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter mb-4 md:mb-6 border-b-2 border-dark pb-2">Requirements</h2>
                <div className="grid gap-3 md:gap-4">
                  {task.requirements.map((req: string, idx: number) => (
                    <div key={idx} className="flex gap-3 items-center bg-gray-50 border-2 border-dark p-3 md:p-4 rounded-xl">
                      <CheckCircle2 className="text-brand shrink-0" size={18} />
                      <span className="font-bold text-[10px] md:text-sm uppercase tracking-tight">{req}</span>
                    </div>
                  ))}
                </div>
              </section>

              <AnimatePresence>
                {isStarted && (
                  <motion.section 
                    id="workspace"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border-2 border-dark rounded-3xl p-6 md:p-10 brutal-shadow scroll-mt-32"
                  >
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-brand rounded-xl border-2 border-dark flex items-center justify-center">
                        <PlayCircle className="text-dark" size={20} />
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">Task Workspace</h2>
                    </div>

                    {!isSubmitted ? (
                      <div className="space-y-6 md:space-y-8">
                        <div className="bg-gray-50 border-2 border-dark p-5 md:p-6 rounded-2xl">
                          <p className="font-bold text-dark mb-3 md:mb-4 uppercase text-[10px] tracking-widest opacity-60">Instructions</p>
                          <p className="text-gray-600 font-medium mb-6 text-sm md:text-base">{task.workspace.instruction}</p>
                          
                          <a 
                            href={task.workspace.mockLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white border-2 border-dark px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-[10px] md:text-sm uppercase tracking-widest hover:bg-brand transition-all w-full sm:w-auto justify-center"
                          >
                            <ExternalLink size={16} />
                            Access Task Resource
                          </a>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest ml-1 opacity-60">Your Submission</label>
                            <textarea 
                              required
                              rows={6}
                              placeholder={task.workspace.placeholder}
                              className="w-full bg-gray-50 border-2 border-dark rounded-2xl p-5 md:p-6 outline-none focus:border-brand transition-colors font-medium text-sm md:text-base"
                            />
                          </div>

                          <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-dark text-white py-3.5 md:py-4 rounded-full font-bold text-lg md:text-xl uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover flex items-center justify-center gap-3"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="animate-spin" size={20} />
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Send size={18} />
                                Submit for Review
                              </>
                            )}
                          </button>
                        </form>
                      </div>
                    ) : (
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-8 md:py-12"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-brand rounded-full border-2 border-dark flex items-center justify-center mx-auto mb-4 md:mb-6">
                          <CheckCircle2 size={32} className="text-dark md:hidden" />
                          <CheckCircle2 size={40} className="text-dark hidden md:block" />
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tighter mb-3 md:mb-4">Task Submitted!</h3>
                        <p className="text-gray-600 font-bold uppercase text-[10px] tracking-widest mb-6 md:mb-8">Your submission is being reviewed. Payout will be processed within 24 hours.</p>
                        <button 
                          onClick={() => navigate('/dashboard')}
                          className="bg-dark text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold uppercase tracking-widest hover:bg-brand hover:text-dark transition-all brutal-shadow-hover text-xs md:text-sm"
                        >
                          Back to Dashboard
                        </button>
                      </motion.div>
                    )}
                  </motion.section>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-white border-2 border-dark p-6 md:p-8 rounded-3xl brutal-shadow md:sticky md:top-32">
                <div className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">Estimated Payout</div>
                <div className="font-display text-3xl md:text-4xl text-brand mb-6 md:mb-8">{task.pay}</div>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center gap-3 text-[10px] md:text-sm font-bold uppercase">
                    <PlayCircle size={16} className="text-brand" />
                    Verified Assignments
                  </div>
                  <div className="flex items-center gap-3 text-[10px] md:text-sm font-bold uppercase">
                    <AlertCircle size={16} className="text-brand" />
                    Open to Students
                  </div>
                </div>

                {!isStarted ? (
                  <button 
                    onClick={handleStartTask}
                    className="w-full bg-dark text-white py-3.5 md:py-4 rounded-full font-bold text-lg md:text-xl uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover"
                  >
                    {isAuthenticated ? 'Start Task' : 'Apply for Task'}
                  </button>
                ) : (
                  <div className="bg-brand/10 border-2 border-brand p-4 rounded-2xl text-center">
                    <p className="text-brand font-bold uppercase text-[10px] tracking-widest">Task in Progress</p>
                  </div>
                )}
                <p className="text-center text-[10px] text-gray-400 font-bold uppercase mt-4">Professional review process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
