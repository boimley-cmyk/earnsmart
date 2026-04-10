import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-12">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-gray-600 text-xl font-medium mb-12 leading-relaxed">
                Have questions about a task? Need help with your account? Our support team is here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand border-2 border-dark flex items-center justify-center shrink-0 brutal-shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-tight mb-1">Email Support</h3>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">support@earnie.com</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand border-2 border-dark flex items-center justify-center shrink-0 brutal-shadow-sm">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-tight mb-1">Live Chat</h3>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Available 9am - 5pm GMT</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand border-2 border-dark flex items-center justify-center shrink-0 brutal-shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-tight mb-1">Headquarters</h3>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-dark rounded-3xl p-8 brutal-shadow">
              <h3 className="font-display text-2xl uppercase tracking-tight mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-white border-2 border-dark rounded-xl px-4 py-3 outline-none font-bold" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-white border-2 border-dark rounded-xl px-4 py-3 outline-none font-bold" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea className="w-full bg-white border-2 border-dark rounded-xl px-4 py-3 outline-none font-bold h-32 resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-dark text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand hover:text-dark transition-all brutal-shadow-hover">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
