import { ShieldCheck, Zap, Globe, Star, Clock, HeartPulse, ShieldAlert } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import heroInsurance from '../assets/generated/insurance_hero_protection_1774982662460_1774984213821.png';
import medicalGuard from '../assets/generated/insurance_medical_guard_1774982673772_1774984236654.png';
import safetyProtection from '../assets/generated/insurance_safety_protection_1774982684071_1774984258727.png';

export default function TravelInsurance() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Protection Editorial */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroInsurance})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dim)] via-[var(--color-primary)]/40 to-black/30" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-32">
          <FadeIn direction="down" delay={0.2}>
             <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-10 border border-white/10">
               <ShieldCheck className="w-4 h-4" /> Global Protection Protocol
             </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.8] drop-shadow-2xl">
               Ironclad <br /><span className="text-[var(--color-primary-container)]">Assurance</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-12">
               Comprehensive global travel insurance coverage for medical emergencies, trip cancellations, and lost logistics. Your invisible safety net.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Coverage Grid - Stitch Detail */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-[6rem] -translate-y-20 relative z-20 shadow-2xl">
         <div className="text-center mb-24 max-w-3xl mx-auto">
            <FadeIn>
               <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-8 tracking-tight">The Perimeter of Coverage</h2>
               <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose">We provide curated protection plans from top-tier global insurers to ensure you are never stranded, no matter the coordinates.</p>
            </FadeIn>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: HeartPulse, title: 'Medical Emergencies', desc: 'Comprehensive hospitalization coverage including emergency medical evacuation and cashless treatment at network hospitals worldwide.' },
              { icon: ShieldAlert, title: 'Trip Cancellation', desc: 'Reimbursement for non-refundable expenses if your trip is cancelled due to covered unforeseen circumstances.' },
              { icon: Globe, title: 'Passport/Luggage Loss', desc: 'Fast-track assistance and financial coverage for lost passports, documents, or checked baggage delay/loss.' },
              { icon: Clock, title: 'Missed Connections', desc: 'Coverage for unexpected flight delays or missed connections beyond your control, including accommodation.' },
              { icon: ShieldCheck, title: 'Personal Liability', desc: 'Protection against accidental damage to third-party property or bodily injury during your international travel.' },
              { icon: Zap, title: 'Cashless Assistance', desc: 'Access to wide-reaching global assistance networks for immediate medical settlement without upfront payments.' }
            ].map((f, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up" fullWidth>
                 <div className="p-12 bg-[var(--color-surface-container-low)] rounded-[4rem] border border-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:rotate-6 duration-500"><f.icon className="w-8 h-8 text-[var(--color-primary)]" /></div>
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">{f.title}</h3>
                    <p className="text-[var(--color-on-surface-variant)] leading-relaxed italic font-serif opacity-70 text-justify">"{f.desc}"</p>
                 </div>
              </FadeIn>
            ))}
         </div>
      </section>

      {/* Global Protection Visual Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
           <div className="md:w-1/2">
              <FadeIn direction="right">
                 <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter italic font-serif">A Shield Across <br /><span className="text-[var(--color-accent)]">Boundaries.</span></h2>
                 <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose mb-10">We believe travel should be about horizons, not hazards. Our localized Agra concierge manages the complex claim settlement process so you can focus on recovery and reunion.</p>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                       { val: '24/7', label: 'Assistance' },
                       { val: 'Cashless', label: 'Worldwide' }
                    ].map((s, i) => (
                       <div key={i} className="p-6 bg-[var(--color-surface-container-low)] rounded-3xl border border-white text-center">
                          <p className="text-3xl font-black text-[var(--color-primary)] mb-1">{s.val}</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</p>
                       </div>
                    ))}
                 </div>
              </FadeIn>
           </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
               <FadeIn direction="left" delay={0.2}>
                  <div className="h-[500px] rounded-[4rem] overflow-hidden shadow-2xl relative group border-4 border-white">
                     <img src={medicalGuard} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Resort Protection" />
                  </div>
               </FadeIn>
               <FadeIn direction="left" delay={0.4}>
                  <div className="h-[450px] mt-12 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                     <img src={safetyProtection} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Safe Journey" />
                  </div>
               </FadeIn>
            </div>
        </div>
      </section>

      {/* 3. The Pillars of Compact Protection */}
      <section className="py-40 bg-[var(--color-primary-dim)] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
            <FadeIn>
               <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-tighter">Authorized Partner</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
               {[
                 { icon: ShieldCheck, title: 'TATA AIG & HDFC ERGO', desc: 'Authorized distribution partner for India’s most reliable insurance providers. Ensuring the fastest claim settlement ratio in the industry.' },
                 { icon: Star, title: 'Corporate/SME Plans', desc: 'Specialized high-frequency travel insurance blocks for businesses and corporate teams traveling across borders monthly.' }
               ].map((p, i) => (
                 <FadeIn key={i} delay={0.2 * i} direction="up">
                   <div className="space-y-8 p-12 bg-white/10 rounded-[4rem] border border-white/10 backdrop-blur-3xl hover:bg-white/20 transition-all duration-500">
                      <div className="w-24 h-24 bg-white/10 rounded-[3rem] flex items-center justify-center mx-auto border border-white/10 transition-transform group-hover:scale-110 group-hover:rotate-6 backdrop-blur-3xl"><p.icon className="w-12 h-12 text-[var(--color-primary-container)]" /></div>
                      <h4 className="text-3xl font-bold tracking-tight">{p.title}</h4>
                      <p className="text-white/60 text-lg leading-loose">{p.desc}</p>
                   </div>
                 </FadeIn>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
