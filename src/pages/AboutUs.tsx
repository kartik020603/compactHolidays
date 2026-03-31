import { Users, Globe, ShieldCheck, Landmark } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import tajDetail from '../assets/generated/about_taj_detail_1774982695326_1774984286135.png';

export default function AboutUs() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Editorial Heritage */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-surface)]/80 to-[var(--color-surface)]" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-40">
          <FadeIn direction="down">
            <h1 className="text-6xl md:text-9xl font-bold text-[var(--color-primary)] mb-12 tracking-tighter leading-[0.9]">
              Agra's Legacy <br /><span className="text-[var(--color-accent)]">Travel Architect</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-3xl text-[var(--color-on-surface-variant)] max-w-3xl mx-auto font-light leading-relaxed font-serif italic">
              "We don't just book tickets; we design the bridge between your doorstep and the world's most breathtaking horizons."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. The Narrative - Stitch Asymmetry */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
           <div className="lg:w-1/2">
             <FadeIn direction="right">
                <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-10 leading-tight tracking-tight">10+ Years of <br />Ticketing Expertise</h2>
                <div className="space-y-8 text-xl text-[var(--color-on-surface-variant)] leading-loose font-light">
                   <p>Based in the architectural heart of India—Agra—Compact Holidays was founded on a singular principle: <span className="font-bold text-[var(--color-primary)] opacity-70">Travel should be high-fidelity, not high-stress.</span></p>
                   <p>What started as a specialized railway ticketing desk has evolved into a full-spectrum travel concierge, serving thousands of global travelers who seek precision in their journeys.</p>
                   <div className="h-1 w-24 bg-[var(--color-accent)]" />
                </div>
             </FadeIn>
           </div>
           
           <div className="lg:w-1/2 grid grid-cols-2 gap-6 p-4 bg-white rounded-[4rem] shadow-2xl rotate-3 border-8 border-[var(--color-surface-container-low)]">
              <div className="space-y-6">
                 <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600" className="rounded-[3rem] shadow-lg w-full h-80 object-cover" />
                 <div className="bg-[var(--color-primary)] p-8 rounded-[3rem] text-white">
                    <h4 className="text-3xl font-bold mb-2 tracking-tighter">Gold</h4>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60">Service Standard</p>
                 </div>
              </div>
              <div className="space-y-6 pt-12">
                 <div className="bg-[var(--color-accent)] p-8 rounded-[3rem] text-white">
                    <h4 className="text-3xl font-bold mb-2 tracking-tighter">24/7</h4>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60">Global Concierge</p>
                 </div>
                 <img src={tajDetail} className="rounded-[3rem] shadow-lg w-full h-80 object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* 3. The Pillars - Editorial Detail */}
      <section className="py-40 bg-[var(--color-primary-dim)] relative overflow-hidden rounded-t-[5rem]">
         <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
            <FadeIn>
               <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-tighter">Why Agra Trusts Us</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
               {[
                 { icon: ShieldCheck, title: 'Ironclad Reliability', desc: 'Authorized partner status for over a decade. We manage the complexity of government IRCTC and Embassy portals so you don’t have to.' },
                 { icon: Users, title: 'Personalized Concierge', desc: 'No bots. No wait times. Direct access to a human expert who knows the Agra-Delhi corridor and global routes intimately.' },
                 { icon: Globe, title: 'End-to-End Delivery', desc: 'From the moment you need a passport to the second you land back from your international cruise, we are your silent co-pilot.' }
               ].map((p, i) => (
                 <FadeIn key={i} delay={0.2 * i} direction="up">
                   <div className="space-y-10 group">
                      <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto border border-white/10 transition-transform group-hover:scale-110 group-hover:rotate-6 backdrop-blur-3xl"><p.icon className="w-12 h-12 text-[var(--color-primary-container)]" /></div>
                      <h4 className="text-3xl font-bold tracking-tight">{p.title}</h4>
                      <p className="text-white/60 text-lg leading-loose">{p.desc}</p>
                   </div>
                 </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 4. The Stats Summary */}
      <section className="py-32 px-4 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
         {[
           { val: '12K+', label: 'Happy Travelers' },
           { val: '150+', label: 'Global Destinations' },
           { val: '24HR', label: 'Response Time' },
           { val: '98%', label: 'Visa Success Rate' }
         ].map((s, i) => (
           <FadeIn key={i} delay={0.2 * i}>
              <div>
                 <h3 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-4 tracking-tighter">{s.val}</h3>
                 <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-loose">{s.label}</p>
              </div>
           </FadeIn>
         ))}
      </section>

      {/* 5. Team / Office CTA */}
      <section className="py-24 px-4">
         <FadeIn>
           <div className="max-w-6xl mx-auto bg-white rounded-[4rem] p-16 shadow-2xl border border-[var(--color-surface-container)] flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 p-4">
                 <div className="relative">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" className="rounded-[3rem] shadow-xl" />
                    <div className="absolute -bottom-8 -right-8 bg-[var(--color-accent)] p-8 rounded-[2.5rem] shadow-xl text-white">
                       <Landmark className="w-8 h-8" />
                    </div>
                 </div>
              </div>
              <div className="md:w-1/2">
                 <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter">Visit the Horizon Plaza</h2>
                 <p className="text-xl text-[var(--color-on-surface-variant)] mb-10 leading-loose">Based in the heart of the business district, we invite you to discuss your next grand expedition in person.</p>
                 <div className="space-y-4 mb-10">
                    <p className="text-lg font-bold text-[var(--color-primary)] uppercase tracking-widest">Office Address</p>
                    <p className="text-xl leading-relaxed text-gray-600">Shop No 5, New Market, Agra, Uttar Pradesh - 282001</p>
                 </div>
                 <a href="https://wa.me/918410617268" className="inline-flex items-center gap-4 px-12 py-5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dim)] text-white rounded-2xl font-bold text-lg transition-all shadow-xl">WhatsApp Our Office</a>
              </div>
           </div>
         </FadeIn>
      </section>
    </div>
  );
}
