import { Plane, Zap, ShieldCheck, Clock, Globe, CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import heroAviation from '../assets/generated/airline_hero_aviation_1774982401472.png';
import firstClass from '../assets/generated/airline_first_class_1774982641837_1774984172272.png';
import executiveCharter from '../assets/generated/airline_executive_charter_1774982652156_1774984190336.png';

export default function AirlineHelicopter() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Cloud Magazine Style */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroAviation})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/80 via-[var(--color-primary)]/40 to-transparent" />
        
        <div className="relative z-10 text-left px-8 max-w-7xl w-full pt-32">
          <FadeIn direction="right" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-white text-xs font-bold uppercase tracking-[0.4em] mb-10 border border-white/10">
              <Plane className="w-4 h-4" /> Global Flight Logistics
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.4}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.95]">
              Sky-High <br /><span className="text-[var(--color-primary-container)]">Precision</span>
            </h1>
          </FadeIn>
          <FadeIn direction="right" delay={0.6}>
            <p className="text-lg md:text-2xl text-white/80 max-w-xl font-light leading-relaxed mb-12">
              Duniya ki kisi bhi kone ki flight ho ya private helicopter, humaari premium service hamesha aapke saath hai. We manage the altitude.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Service Segments - Stitch Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <FadeIn direction="up">
              <div className="p-12 bg-white rounded-[4rem] shadow-xl border border-[var(--color-surface-container)] hover:shadow-2xl transition-all h-full relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-container)]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
                 <Plane className="w-16 h-16 text-[var(--color-primary)] mb-10" />
                 <h3 className="text-4xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">International & Domestic Flights</h3>
                 <p className="text-xl text-[var(--color-on-surface-variant)] mb-10 leading-loose text-justify">
                    Flight bookings mein no tension. Access exclusive inventory and negotiated fares. What makes us special? We secure premium cabin upgrades that regular web portals often miss, giving you real VIP treatment.
                 </p>
                 <ul className="space-y-4">
                    {['Corporate Flight Packs', 'Group Air Charters', 'Tiered 24/7 Monitoring'].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 font-bold text-[var(--color-primary)]">
                          <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> {item}
                       </li>
                    ))}
                 </ul>
              </div>
           </FadeIn>

           <FadeIn direction="up" delay={0.2}>
              <div className="p-12 bg-[var(--color-primary)] rounded-[4rem] shadow-xl text-white hover:shadow-2xl transition-all h-full relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
                 <Zap className="w-16 h-16 text-[var(--color-primary-container)] mb-10" />
                 <h3 className="text-4xl font-bold mb-6 tracking-tight">Helicopter Charters</h3>
                 <p className="text-xl text-white/70 mb-10 leading-loose text-justify">
                    Specialized heli-services for Mathura, Vrindavan, and Himalayan expeditions. Experience rapid transit for spiritual pilgrimages or executive site visits with certified pilots.
                 </p>
                 <ul className="space-y-4">
                    {['Temple Do Dham/Char Dham', 'Emergency Medical Evac', 'Aerial Photography Slots'].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 font-bold text-[var(--color-primary-container)]">
                          <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> {item}
                       </li>
                    ))}
                 </ul>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* Cabin Experience Gallery */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.2}>
              <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                 <img src={firstClass} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="First Class" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end">
                    <p className="text-white font-bold text-xl uppercase tracking-widest leading-loose">First Class Comfort</p>
                 </div>
              </div>
           </FadeIn>
           <FadeIn direction="up" delay={0.4}>
              <div className="h-[500px] md:-translate-y-12 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                 <img src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Helicopter View" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end">
                    <p className="text-white font-bold text-xl uppercase tracking-widest leading-loose">Aerial Expeditions</p>
                 </div>
              </div>
           </FadeIn>
           <FadeIn direction="up" delay={0.6}>
              <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                 <img src={executiveCharter} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Private Jet" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end">
                    <p className="text-white font-bold text-xl uppercase tracking-widest leading-loose">Executive Charters</p>
                 </div>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* 3. Detailed Trust Banner */}
      <section className="py-24 bg-[var(--color-surface-container-low)]">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
               { icon: Clock, title: 'Check-in Assistance', desc: 'Remote check-in and seat selection managed by our concierge for a wait-free airport experience.' },
               { icon: Globe, title: 'Global Connectivity', desc: 'Over 400+ airline partners worldwide, ensuring the best connections at the most competitive price points.' },
               { icon: ShieldCheck, title: 'Flight Guarantee', desc: 'Real-time alert systems for delays or cancellations with immediate alternative routing solutions.' }
            ].map((p, i) => (
               <FadeIn key={i} delay={0.2 * i} direction="up">
                  <div className="flex gap-6 items-start">
                     <div className="bg-white p-4 rounded-2xl shadow-sm border border-white"><p.icon className="w-8 h-8 text-[var(--color-primary)]" /></div>
                     <div>
                        <h4 className="text-xl font-bold text-[var(--color-primary)] mb-2 tracking-tight">{p.title}</h4>
                        <p className="text-[var(--color-on-surface-variant)] leading-relaxed">{p.desc}</p>
                     </div>
                  </div>
               </FadeIn>
            ))}
         </div>
      </section>

    </div>
  );
}
