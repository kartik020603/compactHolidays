import { Globe, ShieldAlert, Zap, Activity, Clock, GraduationCap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { getWhatsAppUrl, getServiceInquiry } from '../utils/whatsapp';
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
              Visa in <span className="text-[var(--color-primary-container)]">7 Days</span>
            </h1>
            <p className="text-2xl md:text-3xl text-[var(--color-accent)] font-black mb-10 tracking-widest uppercase">Guaranteed Assistance</p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Jo passport kahin nahi ban pate, humara expert staff banwa kar deta hai. Specializing in <span className="text-white font-bold underline">Student Visas</span> & Express processing.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <a 
                 href={getWhatsAppUrl(getServiceInquiry('Visa', '', 'student'))}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-10 py-5 bg-[var(--color-accent)] text-white font-bold rounded-2xl text-lg shadow-2xl hover:bg-[#20ba59] transition-all hover:-translate-y-1"
               >
                 Book Student Slot Now
               </a>
               <a 
                 href={getWhatsAppUrl(getServiceInquiry('Urgent Visa'))}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-10 py-5 glass text-white font-bold rounded-2xl text-lg border border-white/20 hover:bg-white/10 transition-all"
               >
                 Get Expert Quote (2 min response)
               </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Student Special Section */}
      <section className="py-32 bg-[var(--color-primary)] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Student <span className="text-[var(--color-accent)]">Study Abroad</span> Specialists</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">Preferred partner for students flying from Delhi/UP to global universities.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { country: 'USA', desc: 'F1/J1 Visa Interview slots and documentation.', flag: '🇺🇸', price: '₹4,999*' },
              { country: 'UK', desc: 'Student CAS verification and Priority visa assistance.', flag: '🇬🇧', price: '₹3,999*' },
              { country: 'Canada', desc: 'SDS & Non-SDS Category application experts.', flag: '🇨🇦', price: '₹3,999*' },
              { country: 'Europe', desc: 'Schengen student & internship visa filing.', flag: '🇪🇺', price: '₹2,999*' },
            ].map((s, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up">
                <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="text-5xl mb-6">{s.flag}</div>
                  <h4 className="text-2xl font-bold mb-2">{s.country} Student Visa</h4>
                  <p className="text-white/60 text-sm mb-6">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-accent)] font-black text-xl">{s.price}</span>
                    <a 
                      href={getWhatsAppUrl(getServiceInquiry(`${s.country} Student Visa`, s.country, 'student'))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-[var(--color-primary)] rounded-xl group-hover:scale-110 transition-transform"
                    >
                      <Zap className="w-5 h-5 fill-current" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-20 text-center">
             <FadeIn delay={0.5}>
                <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 bg-white/5 rounded-[3rem] border border-white/10">
                   <div className="flex items-center gap-4 text-left">
                      <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center"><GraduationCap className="w-8 h-8 text-white" /></div>
                      <div>
                         <p className="font-bold text-xl line-through text-white/40">Regular Price: ₹9,999</p>
                         <p className="font-black text-3xl text-[var(--color-accent)] tracking-tighter">Student Price: ₹1,999*</p>
                      </div>
                   </div>
                   <div className="h-12 w-px bg-white/10 hidden md:block" />
                   <a 
                    href={getWhatsAppUrl(getServiceInquiry('Student Discount Offer', '', 'student'))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-white text-[var(--color-primary)] font-bold rounded-2xl hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-xl"
                   >
                     Claim Student Discount Now
                   </a>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Global Mobility Gallery */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter italic font-serif">Unlocking Every <span className="text-[var(--color-accent)]">Coordinate.</span></h2>
              <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose mb-6">From Schengen explorations to US business transitions, our dossier precision ensures your focus remains on the destination, not the documentation.</p>
              <p className="text-xl text-[var(--color-primary)] font-bold italic border-l-4 border-[var(--color-accent)] pl-4">What makes us special? Jo files aur passports reject ho jaate hain, humari expert team unhe clear karwane mein mahir hai. As the premier provider of <strong className="text-[var(--color-primary)]">visa applying services in Agra</strong>, we handle the impossible.</p>
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
                  <h3 className="text-4xl font-bold mb-6 tracking-tight">Visa in 7 Days?</h3>
                  <p className="text-xl text-white/70 mb-10 leading-relaxed">Tatkal visa ya urgent passport? Tension mat lijiye. Our executive channel cuts processing time down significantly with <span className="text-white font-bold">100% Guaranteed Assistance</span>.</p>
                  <a 
                    href={getWhatsAppUrl(getServiceInquiry('Urgent Visa Concierge'))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-12 py-6 bg-white text-[var(--color-primary)] font-bold rounded-2xl hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-xl"
                  >
                    Contact Visa Concierge (2 min response)
                  </a>
               </div>
            </FadeIn>
         </div>
      </section>
    </div>
  );
}
