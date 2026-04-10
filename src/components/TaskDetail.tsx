import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, AlertCircle, PlayCircle, ExternalLink, Send, Loader2, DollarSign } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const taskDetails: Record<string, any> = {
  'voice-recognition': {
    title: 'Voice Recognition Training',
    category: 'Audio & Voice',
    pay: '$18.50 per hour',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&q=80',
    description: 'Current Assignment: Record 50 short phrases in your native accent to help improve speech recognition for virtual assistants. You will also validate 20 samples recorded by other users.',
    howItWorks: [
      'Access the recording interface.',
      'Read the displayed phrases clearly into your microphone.',
      'Listen to and validate samples from other contributors.',
      'Submit your session for automated quality verification.',
      'Earnings are credited to your account instantly.'
    ],
    requirements: [
      'Quiet environment for recording.',
      'Clear, natural speaking voice.',
      'Reliable microphone (smartphone mic is okay).',
      'Native-level fluency in the assigned language.'
    ],
    workspace: {
      instruction: 'Press "Record" and read the phrases as they appear. Ensure there is no background noise.',
      mockLink: 'https://voice.earnie.ai/session/voice-v12',
      placeholder: 'Enter any notes about audio quality or technical issues...'
    }
  },
  'image-labeling': {
    title: 'Image Recognition Labeling',
    category: 'Computer Vision',
    pay: '$15.00 per hour',
    image: 'https://images.unsplash.com/photo-1527430253228-e903248512bf?w=1200&q=80',
    description: 'Current Assignment: Draw bounding boxes around pedestrians, cyclists, and traffic signs in a series of street-view images to train autonomous driving systems.',
    howItWorks: [
      'Open the image labeling tool.',
      'Follow the specific guidelines for each object type.',
      'Draw precise bounding boxes around all requested objects.',
      'Submit your batch for manual review by our quality team.',
      'Payment is released after review (usually < 2h).'
    ],
    requirements: [
      'High attention to detail.',
      'Ability to follow strict labeling guidelines.',
      'Steady hand for precise drawing.',
      'Large screen recommended for better accuracy.'
    ],
    workspace: {
      instruction: 'Use the tool below to label all pedestrians and vehicles in the provided images.',
      mockLink: 'https://vision.earnie.ai/label/street-view-v4',
      placeholder: 'Notes on image clarity or edge cases...'
    }
  },
  'ai-training': {
    title: 'Text Sentiment Evaluation',
    category: 'Natural Language',
    pay: '$21.00 per hour',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    description: 'Current Assignment: Evaluate and rank responses from a large language model. You will be presented with two AI-generated answers to a prompt and must determine which is more accurate, helpful, and safe based on our detailed guidelines.',
    howItWorks: [
      'Access our secure AI training interface.',
      'Read the provided prompt and the two AI-generated responses.',
      'Apply our quality guidelines to evaluate both responses.',
      'Select the preferred response and provide a brief justification.',
      'Submit your evaluation for real-time quality verification.'
    ],
    requirements: [
      'Excellent reading comprehension and analytical skills.',
      'Strong attention to detail and nuance.',
      'Ability to follow complex evaluation rubrics.',
      'Native-level fluency in English.'
    ],
    workspace: {
      instruction: 'Access the AI evaluation interface below. Complete at least 5 rankings to submit your hourly progress.',
      mockLink: 'https://train.earnie.ai/rlhf/eval-session-v9',
      placeholder: 'Enter any technical notes or issues encountered during the session...'
    }
  },
  'video-annotation': {
    title: 'AI Video Annotation',
    category: 'Video Analysis',
    pay: '$19.00 per hour',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    description: 'Current Assignment: Watch 10-second clips of human activities and tag the exact start and end times of specific actions (e.g., "walking", "sitting", "picking up an object").',
    howItWorks: [
      'Load the video annotation player.',
      'Identify the requested actions in the video stream.',
      'Use the timeline to mark precise start and end frames.',
      'Submit your annotations for cross-validation.',
      'Earnings are calculated based on validated clips.'
    ],
    requirements: [
      'Good visual focus and timing.',
      'Reliable high-speed internet for video streaming.',
      'Patience for repetitive tasks.',
      'Basic understanding of video playback controls.'
    ],
    workspace: {
      instruction: 'Mark the start and end points of the requested actions in the video clips below.',
      mockLink: 'https://video.earnie.ai/annotate/activity-v7',
      placeholder: 'Notes on action ambiguity or video quality...'
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
                    Open to Contributors
                  </div>
                </div>

                {!isStarted ? (
                  <button 
                    onClick={handleStartTask}
                    className="w-full bg-dark text-white py-3.5 md:py-4 rounded-full font-bold text-lg md:text-xl uppercase tracking-wider hover:bg-brand hover:text-dark transition-all brutal-shadow-hover"
                  >
                    {isAuthenticated ? 'Start Task' : 'Apply & Start Earning'}
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
        {/* Signup CTA for Guests */}
        {!isAuthenticated && (
          <div className="mt-16 md:mt-24 bg-brand border-2 border-dark rounded-3xl p-8 md:p-16 text-center brutal-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
              <DollarSign size={120} />
            </div>
            <div className="relative z-10">
              <div className="inline-block bg-white border-2 border-dark px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Limited Spots Available
              </div>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-6 leading-none">
                Get Paid for Your <br />Expertise Today
              </h2>
              <p className="text-dark font-bold mb-10 uppercase tracking-tight text-sm md:text-xl max-w-2xl mx-auto">
                Join 14,000+ contributors earning real money. Create your account in 60 seconds and start this assignment immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/signup" 
                  className="bg-dark text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-xl md:text-2xl uppercase tracking-wider hover:bg-white hover:text-dark transition-all brutal-shadow-hover"
                >
                  Create Your Free Account
                </Link>
              </div>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-widest opacity-60">
                No credit card required • Instant access • Verified payments
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
