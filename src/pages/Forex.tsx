import { CreditCard, Zap, ShieldCheck, Globe, Star, CheckCircle2, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import heroForex from '../assets/generated/forex_hero_premium_1774982620123_1774984126837.png';
import travelCard from '../assets/generated/forex_travel_card_1774982631526_1774984148792.png';

export default function Forex() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Financial Editorial */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroForex})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-black/20" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-32">
          <FadeIn direction="down" delay={0.2}>
             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.4em] mb-10 border border-[var(--color-primary-container)]">
               <CreditCard className="w-4 h-4" /> Secure Currency Logistics
             </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-9xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter leading-[0.9]">
               Elite <br /><span className="text-[var(--color-accent)]">Forex Desk</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto font-light leading-relaxed mb-12">
               Competitive real-time exchange rates and global travel card solutions with localized doorstep delivery across Agra.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Features Grid - Stitch Quality */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Multi-Currency Cash', desc: 'Secure availability of 35+ global currencies. We specialize in competitive rates for USD, EUR, GBP, and AED.' },
              { icon: CreditCard, title: 'Multi-Currency Cards', desc: 'Reloadable travel cards with zero cross-currency markup for seamless global spending at ATMs and POS.' },
              { icon: Star, title: 'Doorstep Delivery', desc: 'Secure, verified logistics straight to your doorstep in Agra, handled with professional confidentiality.' },
              { icon: ShieldCheck, title: 'Ironclad Security', desc: 'Every transaction is digitally logged and receipted. Full compliance with RBI guidelines for peace of mind.' },
              { icon: Zap, title: 'Instant Processing', desc: 'No long queues at the bank. Experience high-speed currency delivery and card activation services.' },
              { icon: Clock, title: '24/7 Card Support', desc: 'Dedicated helpline for immediate card blocking or lost wallet emergency assistance anywhere on the planet.' }
            ].map((f, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up" fullWidth>
                 <div className="p-12 bg-white rounded-[3.5rem] border border-[var(--color-surface-container)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    <div className="w-16 h-16 bg-[var(--color-surface-container-low)] rounded-2xl flex items-center justify-center mb-8"><f.icon className="w-8 h-8 text-[var(--color-primary)]" /></div>
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">{f.title}</h3>
                    <p className="text-[var(--color-on-surface-variant)] leading-loose">{f.desc}</p>
                 </div>
              </FadeIn>
            ))}
         </div>
      </section>

      {/* Currency & Card Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
           <div className="md:w-1/2">
              <FadeIn direction="right">
                 <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter">Global Liquidity, <br /><span className="text-[var(--color-accent)] italic font-serif">Simplified.</span></h2>
                 <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose mb-10">Whether you need physical currency for local markets or a multicurrency card for global dining, our forex desk ensures you are never without the right tender.</p>
                 <div className="p-8 bg-[var(--color-primary-container)]/30 rounded-[3rem] border border-white">
                    <p className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-[0.3em] mb-4 text-center">Top Traded Currencies</p>
                    <div className="flex justify-around text-3xl font-black text-[var(--color-primary)]">
                       <span>USD</span> <span>EUR</span> <span>GBP</span> <span>AED</span>
                    </div>
                 </div>
              </FadeIn>
           </div>
           <div className="md:w-1/2 flex gap-6">
              <FadeIn direction="left" delay={0.2}>
                 <div className="h-[450px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Cash" />
                 </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.4}>
                 <div className="h-[400px] mt-12 rounded-[3rem] overflow-hidden shadow-2xl relative group border-4 border-white">
                    <img src={travelCard} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Travel Card" />
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* 3. Competitive Rate Banner */}
      <section className="py-24 bg-[var(--color-primary)] rounded-[5rem] mx-4 lg:mx-8 mb-32 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" />
         <div className="max-w-7xl mx-auto px-12 text-white relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
               <div className="max-w-2xl">
                  <FadeIn direction="right">
                     <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter italic font-serif">Beat the Airport Rates.</h2>
                     <p className="text-xl text-white/70 leading-relaxed font-light">Don't settle for highway robbery exchange fees. Our localized Agra desk provides bank-beating spreads for international departures.</p>
                  </FadeIn>
               </div>
               <FadeIn direction="left">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                     <div className="text-center p-8 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-xl min-w-[200px]">
                        <p className="text-sm font-bold text-[var(--color-primary-container)] uppercase tracking-widest mb-2">Live Rate Inquiry</p>
                        <p className="text-3xl font-bold tracking-tighter italic font-serif">WhatsApp Us</p>
                     </div>
                     <a href="https://wa.me/918410617268" className="px-12 py-6 bg-[var(--color-accent)] hover:bg-[#20ba59] text-white rounded-2xl font-bold text-2xl shadow-xl transition-all">Get Current Quote</a>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* 4. Pillars Summary */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
         <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-12 tracking-tight">The Forensic Compliance</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
               {['RBI Fully Compliant', 'GST Transparent Receipts', 'Verified Currency Notes', 'Secure Multi-Currency Portals'].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-[var(--color-on-surface-variant)]">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" /> {p}
                  </div>
               ))}
            </div>
         </FadeIn>
      </section>
    </div>
  );
}
