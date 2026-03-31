import { Globe, CheckCircle2, ShieldAlert, FileCheck, Truck, Zap, Activity, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import imgPassport from '../assets/generated/passport_processing_document_aesthetic_1774982380927.png';

export default function PassportVisa() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Magazine Style */}
      <section className="relative h-[80vh] w-full flex items-center justify-center -mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[var(--color-primary)]/50 to-[var(--color-primary-dim)]" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-white text-xs font-bold uppercase tracking-[0.4em] mb-10 border border-white/10">
              <Globe className="w-4 h-4" /> Global Mobility Experts
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.95]">
              Seamless <br /><span className="text-[var(--color-primary-container)]">Visa Services</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Navigating international borders shouldn't be a hurdle. We handle the complexity so you can focus on the journey ahead.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. The Narrative Section - Asymmetrical Layout */}
      <section className="py-32 bg-white rounded-[4rem] -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <FadeIn direction="right">
                   <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-8 leading-tight">Expert Consulting for <span className="text-[var(--color-secondary)]">155+ Countries</span></h2>
                   <p className="text-xl text-[var(--color-on-surface-variant)] mb-10 leading-loose italic font-serif">"Our mission is to translate complex embassy bureaucracy into a simple check-list for you."</p>
                   <div className="grid grid-cols-2 gap-8 pt-6">
                      <div>
                        <h4 className="text-4xl font-bold text-[var(--color-accent)] mb-2">98%</h4>
                        <p className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest">Visa Success Rate</p>
                      </div>
                      <div>
                        <h4 className="text-4xl font-bold text-[var(--color-accent)] mb-2">10+</h4>
                        <p className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest">Years Expertise</p>
                      </div>
                   </div>
                </FadeIn>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                 {[
                   { icon: FileCheck, title: 'Application Process', desc: 'Error-free filing of application forms. We ensure every detail matches embassy requirements precisely.', list: ['Form Verification', 'Slot Booking'] },
                   { icon: Truck, title: 'Doc Collection', desc: 'Doorstep pickup and secure handling of sensitive documents. We curate your dossier to maximize approval.', list: ['Personal Concierge', 'Safe Transport'] },
                   { icon: Zap, title: 'Fast-Track Visa', desc: 'Urgent travel needs require urgent solutions. Our premium channels expedite the processing time.', list: ['Priority Processing', 'Real-time Tracking'] }
                 ].map((box, i) => (
                   <FadeIn key={i} delay={0.2 * i} direction="left">
                      <div className="p-10 bg-[var(--color-surface-container-low)] rounded-[3rem] border border-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                         <div className="flex gap-6 items-start mb-6">
                             <div className="bg-white p-4 rounded-2xl shadow-sm"><box.icon className="w-8 h-8 text-[var(--color-primary)]"/></div>
                             <div>
                               <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">{box.title}</h3>
                               <p className="text-[var(--color-on-surface-variant)] leading-relaxed">{box.desc}</p>
                             </div>
                         </div>
                         <div className="flex gap-4">
                            {box.list.map((l, j) => (
                               <span key={j} className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] bg-white/50 px-4 py-2 rounded-full border border-white">
                                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]"/> {l}
                               </span>
                            ))}
                         </div>
                      </div>
                   </FadeIn>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Global Mobility Gallery */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter italic font-serif">Unlocking Every <span className="text-[var(--color-accent)]">Coordinate.</span></h2>
              <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose">From Schengen explorations to US business transitions, our dossier precision ensures your focus remains on the destination, not the documentation.</p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 flex gap-6">
             <div className="w-1/2 space-y-6">
                <FadeIn direction="down" delay={0.2}>
                   <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                      <img src={imgPassport} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Passport" />
                   </div>
                </FadeIn>
             </div>
             <div className="w-1/2 pt-12 space-y-6">
                <FadeIn direction="up" delay={0.4}>
                   <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-2xl relative group border-4 border-white">
                      <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Traveler" />
                   </div>
                </FadeIn>
             </div>
          </div>
        </div>
      </section>

      {/* 3. The Pillars of Trust */}
      <section className="py-32 bg-[var(--color-primary-dim)] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
            <FadeIn>
               <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">The Pillars of Trust</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { icon: ShieldAlert, title: '100% Reliability', desc: 'Your travel documents are our priority. We maintain a rigorous chain of custody and data privacy.' },
                 { icon: Clock, title: '24/7 Support', desc: 'Visa issues don’t follow office hours. Our experts are available around the clock to assist you.' },
                 { icon: Activity, title: 'Status Tracking', desc: 'Real-time updates on your application status via our mobile dashboard and SMS alerts.' }
               ].map((item, i) => (
                 <FadeIn key={i} delay={0.2 * i} direction="up">
                   <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                      <div className="w-16 h-16 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg"><item.icon className="w-8 h-8 text-white" /></div>
                      <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                      <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                   </div>
                 </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Steps to Freedom */}
      <section className="py-40 max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
               <FadeIn direction="right">
                  <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter">The Path to <span className="text-[var(--color-accent)]">Approval</span></h2>
                  <div className="space-y-12">
                     {[
                        { step: '01', title: 'Consultation', desc: 'Detailed analysis of your travel purpose and destination requirements.' },
                        { step: '02', title: 'Documentation', desc: 'Meticulous curating of financial, professional, and personal dossiers.' },
                        { step: '03', title: 'Submission', desc: 'Secure filing and appointment management with embassy officials.' }
                     ].map((s, i) => (
                        <div key={i} className="flex gap-8 group">
                           <div className="text-4xl font-black text-[var(--color-surface-container)] group-hover:text-[var(--color-accent)] transition-colors">{s.step}</div>
                           <div>
                              <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-2">{s.title}</h4>
                              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">{s.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </FadeIn>
            </div>
            <FadeIn direction="left">
               <div className="bg-[var(--color-primary)] p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <Clock className="w-16 h-16 text-[var(--color-accent)] mb-8" />
                  <h3 className="text-4xl font-bold mb-6 tracking-tight">Need it Urgently?</h3>
                  <p className="text-xl text-white/70 mb-10 leading-relaxed">Our "Fast-Track" executive channel cuts processing time by 40% for business emergencies.</p>
                  <a href="https://wa.me/918410617268" className="inline-block px-12 py-6 bg-white text-[var(--color-primary)] font-bold rounded-2xl hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-xl">Contact Visa Concierge</a>
               </div>
            </FadeIn>
         </div>
      </section>
    </div>
  );
}
