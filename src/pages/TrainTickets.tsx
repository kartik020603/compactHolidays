import { Train, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrainTickets() {
  return (
    <div className="w-full">
      <section className="relative h-[60vh] w-full flex items-center justify-center -mt-20 border-b border-[var(--color-surface-container)] bg-[url('https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[var(--color-primary-dim)]/70 backdrop-blur-sm" />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl pt-20"
        >
          <Train className="w-16 h-16 text-[var(--color-primary-container)] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Premium Train Reservations</h1>
          <p className="text-xl text-[var(--color-primary-container)]">Instant booking for Vande Bharat, Rajdhani, Shatabdi, and international railways.</p>
        </motion.div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Why Book With Us?</h2>
            <div className="space-y-6">
              {[
                { icon: Clock, title: 'Tatkal & Premium Tatkal', desc: 'Expert assistance in securing last-minute emergency quotas.' },
                { icon: CheckCircle2, title: 'Confirmed Berth Guarantee', desc: 'Advanced routing algorithms to hunt down confirmed tickets.' },
                { icon: MapPin, title: 'Group Bookings', desc: 'Seamless management for large families, corporate tours, and school trips.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-[var(--color-surface-container)]">
                  <div className="bg-[var(--color-primary-container)] p-3 rounded-xl h-fit">
                    <feature.icon className="w-6 h-6 text-[var(--color-primary-dim)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-primary)] text-lg mb-2">{feature.title}</h3>
                    <p className="text-[var(--color-on-surface-variant)]">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--color-surface-container-low)] p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-primary-container)] rounded-full blur-3xl opacity-50" />
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 relative z-10">Get a Live Quote</h3>
            <p className="text-[var(--color-on-surface-variant)] mb-8 relative z-10">
              Skip the IRCTC login hassle. Connect with our dedicated railway ticking agent immediately.
            </p>
            <a href="https://wa.me/918410617268?text=Hi!%20I%20want%20to%20book%20a%20train%20ticket." target="_blank" rel="noreferrer" className="block w-full text-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold rounded-xl shadow-[0_12px_32px_-4px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform">
              Book via WhatsApp (+91 84106 17268)
            </a>
            <p className="text-xs text-center mt-6 text-[var(--color-on-surface-variant)]">
              No hidden gateway charges. 100% transparent pricing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
