import { Train, Clock, CheckCircle2, Search, ShieldCheck, Zap, Activity } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import heroTrain from '../assets/generated/train_hero_modern_1774982179196.png';
import trainInterior from '../assets/generated/train_interior_luxury_1774982212585.png';
import trainRoute from '../assets/generated/train_route_scenic_1774982231233.png';
import vandeBharat from '../assets/generated/train_vande_bharat_luxury_1774982706532_1774984311434.png';

export default function TrainBooking() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Magazine Style */}
      <section className="relative h-[80vh] w-full flex items-center justify-center -mt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroTrain})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dim)] via-[var(--color-primary)]/40 to-black/30" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-bold uppercase tracking-[0.3em] mb-8">
              <Train className="w-4 h-4" /> Indian Railways Specialist
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter drop-shadow-2xl leading-[1.1]">
              Premium Rail <br /><span className="text-[var(--color-primary-container)]">Reservations</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-[var(--color-primary-container)] max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Authorized precision ticketing for Vande Bharat, Rajdhani, and Shatabdi. From executive luxury to urgent Tatkal assistance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 1.5 Luxury Rail Experience Section - New Visuals */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn direction="right">
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl group">
              <img src={trainInterior} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Luxury Interior" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Refined Comfort</p>
                <h4 className="text-3xl font-bold tracking-tight">Executive Cabin Luxury</h4>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl group">
              <img src={trainRoute} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Scenic Route" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Unrivaled Views</p>
                <h4 className="text-3xl font-bold tracking-tight">Breathtaking Rail Corridors</h4>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. The Process Section - Stitch Level Detail */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">
           <div className="md:w-1/3">
             <FadeIn direction="right">
               <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 leading-tight">Navigating the Rails with Expert Precision</h2>
               <p className="text-lg text-[var(--color-on-surface-variant)] mb-10 leading-relaxed">We scan every available schedule instantly to find you the most efficient routes across the subcontinent.</p>
               <div className="h-1 w-20 bg-[var(--color-accent)]" />
             </FadeIn>
           </div>
           
           <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { step: '01', icon: Search, title: 'Search', desc: 'Tell us your origin, destination, and preferred dates. We scan all available schedules instantly.' },
                { step: '02', icon: Activity, title: 'Select', desc: 'Choose from Sleeper, 3AC, 2AC or Executive class based on your budget and comfort.' },
                { step: '03', icon: CheckCircle2, title: 'Book', desc: 'Confirm your details and receive your e-ticket instantly on WhatsApp and Email.' }
              ].map((item, i) => (
                <FadeIn key={i} delay={0.2 * i} direction="left">
                  <div className="group p-8 rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--color-surface-container)]">
                    <span className="text-4xl font-bold text-[var(--color-primary-container)] mb-6 block font-serif tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">{item.step}</span>
                    <item.icon className="w-10 h-10 text-[var(--color-primary)] mb-6" />
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{item.title}</h3>
                    <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* 3. High-Fidelity Benefit Cards */}
      <section className="py-32 bg-[var(--color-surface-container-low)] rounded-[4rem] mx-4 lg:mx-8 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[var(--color-primary)]/5 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">Expert Solutions for Complexity</h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-white hover:-translate-y-2 transition-transform h-full">
                <div className="w-16 h-16 bg-[#fff8e1] rounded-2xl flex items-center justify-center mb-8"><Zap className="text-[#fbc02d] w-8 h-8"/></div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Tatkal Assistance</h3>
                <p className="text-[var(--color-on-surface-variant)] leading-relaxed">Struggling with high-demand tickets? Our experts use optimized systems to maximize your chances during peak hours.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-white hover:-translate-y-2 transition-transform h-full">
                <div className="w-16 h-16 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-8"><ShieldCheck className="text-[#2e7d32] w-8 h-8"/></div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Waitlist Prediction</h3>
                <p className="text-[var(--color-on-surface-variant)] leading-relaxed">Leverage our data-driven insights to know the probability of your waitlisted ticket getting confirmed before you pay.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-white hover:-translate-y-2 transition-transform h-full">
                <div className="w-16 h-16 bg-[#e3f2fd] rounded-2xl flex items-center justify-center mb-8"><Clock className="text-[#1976d2] w-8 h-8"/></div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Clear Cancellation</h3>
                <p className="text-[var(--color-on-surface-variant)] leading-relaxed">No hidden fees. We follow official IRCTC refund norms with zero additional service processing charges for cancellations.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visual Showcase - Vande Bharat & Luxury Rails */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter">Velocity Meets <br /><span className="text-[var(--color-accent)] italic font-serif">Luxury.</span></h2>
              <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose mb-10">From the ultra-modern Vande Bharat Express to the regal heritage of the Palace on Wheels, we secure the most coveted seats in the Indian railway ecosystem.</p>
              <div className="flex gap-4">
                 {[
                    { label: 'Speed', val: '160km/h' },
                    { label: 'Network', val: '7k+ Stations' },
                    { label: 'Class', val: 'Executive/1AC' }
                 ].map((stat, i) => (
                    <div key={i} className="p-4 bg-white rounded-2xl border border-[var(--color-surface-container)] text-center w-1/3 shadow-sm border-b-4 border-b-[var(--color-primary-container)]">
                       <p className="text-2xl font-black text-[var(--color-primary)]">{stat.val}</p>
                       <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{stat.label}</p>
                    </div>
                 ))}
              </div>
            </FadeIn>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
             <FadeIn direction="left" delay={0.2}>
                <div className="h-[400px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                   <img src={vandeBharat} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Vande Bharat" />
                   <div className="absolute inset-0 bg-black/20" />
                </div>
             </FadeIn>
             <FadeIn direction="left" delay={0.4}>
                <div className="h-[350px] mt-12 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                   <img src={trainInterior} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury Train Interior" />
                   <div className="absolute inset-0 bg-black/20" />
                </div>
             </FadeIn>
          </div>
        </div>
      </section>
      {/* 4. Trust Summary - Stitch Pillar */}
      <section className="py-32 max-w-7xl mx-auto px-4 text-center">
        <FadeIn>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Unmatched Reliability</h3>
            <p className="text-[var(--color-on-surface-variant)] max-w-2xl mx-auto text-lg leading-relaxed">
              Authorized travel partner with 10+ years of ticketing expertise. We manage the complexity, you enjoy the scenery.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex gap-6 items-center p-8 bg-white rounded-3xl border border-[var(--color-surface-container)] text-left group hover:bg-[var(--color-primary)] transition-all duration-300">
               <div className="bg-[var(--color-primary-container)] p-4 rounded-2xl group-hover:bg-white transition-colors"><Clock className="w-8 h-8 text-[var(--color-primary)]"/></div>
               <div>
                  <h4 className="font-bold text-xl text-[var(--color-primary)] group-hover:text-white mb-1">24/7 Concierge Support</h4>
                  <p className="text-sm text-[var(--color-on-surface-variant)] group-hover:text-white/80">Late-night PNR checks or emergency rerouting.</p>
               </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <div className="flex gap-6 items-center p-8 bg-white rounded-3xl border border-[var(--color-surface-container)] text-left group hover:bg-[var(--color-primary)] transition-all duration-300">
               <div className="bg-[var(--color-primary-container)] p-4 rounded-2xl group-hover:bg-white transition-colors"><Zap className="w-8 h-8 text-[var(--color-primary)]"/></div>
               <div>
                  <h4 className="font-bold text-xl text-[var(--color-primary)] group-hover:text-white mb-1">Fast Bookings</h4>
                  <p className="text-sm text-[var(--color-on-surface-variant)] group-hover:text-white/80">Confirmed in minutes, not hours. Speed is our standard.</p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
