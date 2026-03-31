import { Ship, Globe, Star, Clock, Anchor } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import imgCaribbean from '../assets/generated/cruise_caribbean_bliss_1774982901526_1774984939081.png';
import imgAntarctic from '../assets/generated/cruise_antarctic_frontiers_1774982912186_1774984962263.png';

export default function Cruise() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Nautical Editorial */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/40 via-transparent to-[var(--color-primary-dim)]/90" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-32">
          <FadeIn direction="down" delay={0.2}>
             <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass text-white text-xs font-bold uppercase tracking-[0.4em] mb-10 border border-white/10">
               <Anchor className="w-4 h-4" /> The Ocean's Collection
             </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.8] drop-shadow-2xl italic font-serif">
               Elite <br /><span className="text-[var(--color-primary-container)]">Cruises</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-12">
               Curated maritime voyages from the Arabian Sea to the Caribbean. Luxury staterooms and personalized shore excursions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Trending Destinations - Stitch Quality */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-xl text-left">
               <FadeIn direction="right">
                  <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">Vessels of Distinction</h2>
                  <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose italic font-serif">"We partner with the world's most elite liners to ensure your voyage is of unparalleled fidelity."</p>
               </FadeIn>
            </div>
         </div>

        <div className="space-y-32">
          {/* Tier 1 */}
          <div className="relative">
             <div className="absolute -left-20 top-0 text-[15rem] font-black text-[var(--color-primary)] opacity-5 select-none leading-none">01</div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {[
                  { 
                    title: 'Mediterranean Masterpieces', 
                    img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800', 
                    desc: 'Venice, Santorini, and the French Riviera. A cultural odyssey across the world’s most iconic shores.',
                    tags: ['12 Days', 'Luxury Suite'] 
                  },
                  { 
                    title: 'Caribbean Bliss', 
                    img: imgCaribbean, 
                    desc: 'Turquoise waters and white-sand beaches. The ultimate relaxation voyage across the island paradises of the West Indies.',
                    tags: ['8 Days', 'Family Suites'] 
                  }
                ].map((cruise, i) => (
                  <FadeIn key={i} delay={0.2 * i} direction="up">
                     <div className="group rounded-[4rem] overflow-hidden bg-white shadow-xl hover:shadow-3xl transition-transform duration-700 hover:-translate-y-4">
                        <div className="h-[500px] overflow-hidden relative">
                           <img src={cruise.img} alt={cruise.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                           <div className="absolute top-10 right-10 flex flex-col gap-2">
                              {cruise.tags.map((t, j) => (
                                 <span key={j} className="px-5 py-2 glass rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em]">{t}</span>
                              ))}
                           </div>
                        </div>
                        <div className="p-16">
                           <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4 tracking-tighter">{cruise.title}</h3>
                           <p className="text-lg text-[var(--color-on-surface-variant)] mb-10 leading-relaxed font-light">{cruise.desc}</p>
                           <a href="https://wa.me/918410617268" className="inline-flex items-center gap-4 text-xl font-bold text-[var(--color-primary)] hover:gap-6 transition-all">Request Itinerary Map <Star className="w-5 h-5 text-[var(--color-accent)] animate-pulse" /></a>
                        </div>
                     </div>
                  </FadeIn>
                ))}
             </div>
          </div>

          {/* Tier 2 */}
          <div className="relative">
             <div className="absolute -right-20 top-0 text-[15rem] font-black text-[var(--color-primary)] opacity-5 select-none leading-none">02</div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {[
                  { 
                    title: 'Arabian Gulf Expeditions', 
                    img: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=800', 
                    desc: 'Experience the futuristic skyline of Dubai and the majestic fjords of Oman from the comfort of a 5-star liner.',
                    tags: ['7 Days', 'Themed Nights'] 
                  },
                  { 
                    title: 'Antarctic Frontiers', 
                    img: imgAntarctic, 
                    desc: 'A rare expedition to the world’s final frontier. Witness glacial cathedrals and pristine wildlife from reinforced luxury hulls.',
                    tags: ['14 Days', 'Expedition Luxe'] 
                  }
                ].map((cruise, i) => (
                  <FadeIn key={i} delay={0.2 * i} direction="up">
                     <div className="group rounded-[4rem] overflow-hidden bg-white shadow-xl hover:shadow-3xl transition-transform duration-700 hover:-translate-y-4">
                        <div className="h-[500px] overflow-hidden relative">
                           <img src={cruise.img} alt={cruise.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                           <div className="absolute top-10 right-10 flex flex-col gap-2">
                              {cruise.tags.map((t, j) => (
                                 <span key={j} className="px-5 py-2 glass rounded-full text-white text-[10px] font-bold uppercase tracking-[0.3em]">{t}</span>
                              ))}
                           </div>
                        </div>
                        <div className="p-16">
                           <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4 tracking-tighter">{cruise.title}</h3>
                           <p className="text-lg text-[var(--color-on-surface-variant)] mb-10 leading-relaxed font-light">{cruise.desc}</p>
                           <a href="https://wa.me/918410617268" className="inline-flex items-center gap-4 text-xl font-bold text-[var(--color-primary)] hover:gap-6 transition-all">Request Itinerary Map <Star className="w-5 h-5 text-[var(--color-accent)] animate-pulse" /></a>
                        </div>
                     </div>
                  </FadeIn>
                ))}
             </div>
          </div>

          {/* Tier 3 */}
          <div className="relative">
             <div className="absolute -left-20 top-0 text-[15rem] font-black text-[var(--color-primary)] opacity-5 select-none leading-none">03</div>
             <div className="max-w-4xl mx-auto relative z-10">
                <FadeIn direction="up">
                   <div className="group rounded-[4rem] overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dim)] shadow-2xl p-1 lg:p-2">
                      <div className="bg-white rounded-[3.8rem] overflow-hidden">
                        <div className="h-[600px] overflow-hidden relative">
                           <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200" alt="Boutique Luxury" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                           <div className="absolute inset-0 bg-black/10" />
                           <div className="absolute top-12 left-12">
                              <span className="px-8 py-3 bg-[var(--color-accent)] rounded-full text-white font-bold uppercase tracking-widest text-xs">Boutique Selection</span>
                           </div>
                        </div>
                        <div className="p-20 text-center">
                           <h3 className="text-5xl font-bold text-[var(--color-primary)] mb-6 tracking-tighter italic font-serif">Bespoke Yacht Charters</h3>
                           <p className="text-2xl text-[var(--color-on-surface-variant)] mb-12 leading-loose max-w-2xl mx-auto font-light">For those who seek the path less traveled. Private sails and tailored routes across the hidden gems of the Aegean and Adriatic.</p>
                           <a href="https://wa.me/918410617268" className="inline-flex items-center gap-6 px-16 py-8 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dim)] text-white rounded-[2.5rem] font-bold text-2xl transition-all shadow-2xl">Consult Yacht Architect</a>
                        </div>
                      </div>
                   </div>
                </FadeIn>
             </div>
          </div>
        </div>
      </section>

      {/* 3. The Pillars of Compact Sea Logistics */}
      <section className="py-40 bg-[var(--color-primary-dim)] relative overflow-hidden rounded-t-[6rem]">
         <div className="absolute top-0 right-0 w-full h-[150%] bg-[url('https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=2000')] bg-cover opacity-5 grayscale scale-150" />
         <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
            <FadeIn>
               <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-tighter">On-Board Premium Support</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
               {[
                 { icon: Clock, title: 'Shore Excursion Pre-Booking', desc: 'Secure the most exclusive local experiences months in advance. No queues for tours at any port.' },
                 { icon: Globe, title: 'Concierge Desk 24/7', desc: 'Remote assistance for trip modifications or onboard requests via our dedicated travel architect.' },
                 { icon: Ship, title: 'Best Stateroom Guidance', desc: 'Expert advice on cabin locations—avoiding noisy sections while maximizing the best ocean vistas.' }
               ].map((p, i) => (
                 <FadeIn key={i} delay={0.2 * i} direction="up">
                   <div className="space-y-8">
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
