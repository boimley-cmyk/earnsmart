import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-12">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the Earnie platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">2. Eligibility</h2>
              <p>You must be at least 18 years old or have legal parental consent to use our services. Our platform is primarily designed for students.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">3. User Conduct</h2>
              <p>You agree to provide accurate information and to complete tasks in good faith. Any attempt to manipulate or defraud the platform will result in immediate termination of your account.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">4. Payments</h2>
              <p>Payments are processed after task verification. We reserve the right to withhold payments for tasks that do not meet our quality standards.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display uppercase tracking-tight text-dark mb-4">5. Limitation of Liability</h2>
              <p>Earnie is not liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the platform.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
