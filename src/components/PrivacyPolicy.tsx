import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-12">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you create an account, complete tasks, or communicate with us. This may include your name, email address, and payment information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, to process payments, and to communicate with you about your account and tasks.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">3. Data Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@earnie.com.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
