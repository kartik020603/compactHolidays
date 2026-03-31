import { Car, Compass, Bus, MapPin, CheckCircle2, ShieldCheck, Users, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import imgAirport from '../assets/generated/airport_transfers_luxury_sedan_1774982363532.png';

export default function CabsBuses() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Magazine Style */}
      <section className="relative h-[80vh] w-full flex items-center justify-center -mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00101a]/95 via-[#003348]/40 to-black/10" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-white text-xs font-bold uppercase tracking-[0.4em] mb-10 border border-white/10">
              <Car className="w-4 h-4" /> Your Trusted Transit Partner
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.95]">
              Elite Fleet <br /><span className="text-[var(--color-primary-container)]">& Luxury Transit</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Experience the pinnacle of curated transit. From executive sedans for solo voyages to high-capacity luxury liners for grand expeditions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Service Segments - Stitch Quality */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-32">
           <div className="lg:w-1/3">
             <FadeIn direction="right">
               <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-8 leading-[1.1]">The Fleet That Matches Your Need</h2>
               <p className="text-xl text-[var(--color-on-surface-variant)] mb-12 leading-loose">We redefine reliability through meticulously maintained vehicles and professional chauffeurs who prioritize your comfort.</p>
               <div className="bg-[var(--color-primary-container)] p-10 rounded-[3rem] shadow-sm transform -rotate-3 border border-white">
                  <h4 className="text-4xl font-bold text-[var(--color-primary)] mb-4">42-Point</h4>
                  <p className="text-sm font-bold text-[var(--color-primary-dim)] uppercase tracking-widest leading-loose">Daily Safety Checks for Every Single Voyage</p>
               </div>
             </FadeIn>
           </div>
           
           <div className="lg:w-2/3 grid grid-cols-1 gap-6">
              {[
                { 
                  icon: Compass, 
                  title: 'Intercity Cabs', 
                  desc: 'Seamless long-distance travel designed for the modern professional. Our intercity service prioritizes deep comfort, climate control, and route optimization.',
                  list: ['GPS Tracked High-Speed Corridors', 'Ergonomic Leather Interiors'] 
                },
                { 
                  icon: Bus, 
                  title: 'Group Bus Bookings', 
                  desc: 'Luxury liners for corporate retreats and large-scale family gatherings. Reclining seats, on-board entertainment, and spacious aisles for group harmony.',
                  list: ['On-board Refreshments & Wi-Fi', 'Certified Large-Vehicle Captains'] 
                },
                { 
                  icon: MapPin, 
                  title: 'Airport Transfers', 
                  desc: 'Arrive before time, every time. Our specialized airport dispatch system monitors flight status in real-time to ensure your driver is waiting.',
                  list: ['Real-time Flight Tracking', 'Dedicated Luggage Assistance'],
                  img: imgAirport
                }
              ].map((service, idx) => (
                <FadeIn key={idx} delay={0.2 * idx} direction="left">
                   <div className="bg-white rounded-[4rem] border border-[var(--color-surface-container)] hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                      <div className="flex flex-col md:flex-row items-stretch min-h-[300px]">
                         {service.img && (
                            <div className="md:w-1/3 relative">
                               <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                               <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                            </div>
                         )}
                         <div className={`p-10 relative z-10 flex-1 ${service.img ? 'md:w-2/3' : 'w-full'}`}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-surface-container-low)] rounded-bl-[4rem] -z-10 opacity-40" />
                            <div className="flex gap-8 items-start mb-6">
                               <div className="bg-[var(--color-surface-container-low)] p-6 rounded-3xl shrink-0"><service.icon className="w-10 h-10 text-[var(--color-primary)]"/></div>
                               <h3 className="text-3xl font-bold text-[var(--color-primary)] tracking-tight pt-4">{service.title}</h3>
                            </div>
                            <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed max-w-xl">{service.desc}</p>
                            <div className="flex flex-wrap gap-4">
                               {service.list.map((l, i) => (
                                  <span key={i} className="flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] bg-[var(--color-surface-container-low)] px-6 py-3 rounded-2xl shadow-sm border border-white">
                                     <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> {l}
                                  </span>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* Prestige Fleet Gallery */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-[5rem] -translate-y-20 relative z-20 shadow-2xl">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter italic font-serif">The <span className="text-[var(--color-accent)]">Prestige</span> Fleet</h2>
            <p className="text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto italic font-serif">"Immaculate logistics for the discerning traveler."</p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FadeIn direction="right">
             <div className="group relative h-[500px] rounded-[4rem] overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Luxury Sedan" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-12 flex flex-col justify-end">
                   <h4 className="text-3xl font-bold text-white mb-2">Executive Sedans</h4>
                   <p className="text-white/70 italic">Mercedes-Benz & Premium SUVs for intercity excellence.</p>
                </div>
             </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
             <div className="group relative h-[500px] rounded-[4rem] overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Luxury Bus" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-12 flex flex-col justify-end">
                   <h4 className="text-3xl font-bold text-white mb-2">Luxury Charters</h4>
                   <p className="text-white/70 italic">Multi-axle Volvo & Scania buses for group voyages.</p>
                </div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. The Pillars of Compact Excellence */}
      <section className="py-40 bg-[var(--color-primary-dim)] relative overflow-hidden text-white rounded-t-[5rem]">
         <div className="absolute top-0 left-0 w-full h-[100%] bg-[url('https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=2000')] bg-cover opacity-10 grayscale scale-150" />
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <FadeIn>
               <h2 className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter">The Compact Pillars</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {[
                 { icon: ShieldCheck, title: 'Passenger Safety', desc: 'Every vehicle undergoes a 42-point safety check daily. Equipped with advanced telematics and SOS assistance.' },
                 { icon: Users, title: 'Verified Chauffeurs', desc: 'Chauffeurs are background-verified hospitality professionals with local route expertise and verified history.' },
                 { icon: Clock, title: '24/7 Expert Support', desc: 'A dedicated concierge team is available around the clock to assist with trip modifications or itinerary shifts.' }
               ].map((p, i) => (
                 <FadeIn key={i} delay={0.2 * i} direction="up">
                   <div className="space-y-8 max-w-sm mx-auto">
                      <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto border border-white/20 backdrop-blur-xl rotate-12"><p.icon className="w-12 h-12 text-[var(--color-primary-container)] -rotate-12" /></div>
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
