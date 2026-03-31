import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Shield, Clock, Award, Star, ArrowRight, Train, Car, Map, Landmark, Plane, Ship, Coins, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { Helmet } from 'react-helmet-async';

import heroGoa from '../assets/generated/home_hero_goa_1774982106174.png';
import heroTrain from '../assets/generated/home_hero_train_1774982124786.png';
import heroFlight from '../assets/generated/home_hero_flight_1774982142469.png';
import heroFrance from '../assets/generated/home_hero_france_1774982162545.png';

const HERO_IMAGES = [
  {
    url: heroGoa,
    title: "Bespoke Goa Escapes",
    subtitle: "Tropical luxury curated for the discerning traveler."
  },
  {
    url: heroTrain,
    title: "Elite Rail Journeys",
    subtitle: "Authorized precision ticketing for India's finest tracks."
  },
  {
    url: heroFlight,
    title: "Sky-High Excellence",
    subtitle: "First-class logistics for your global horizons."
  },
  {
    url: heroFrance,
    title: "European Grandeur",
    subtitle: "Immersive tours across the heart of France."
  }
];

const SERVICES = [
  { title: "Train Booking", icon: Train, path: "/train-booking", desc: "Express Tatkal & Luxury Rail reservations with expert confirmation hunters." },
  { title: "Tour & Travel", icon: Map, path: "/tour-travel", desc: "Agra Signature Tours, Golden Triangle, & Bespoke Global Itineraries." },
  { title: "Cabs & Buses", icon: Car, path: "/cabs-buses", desc: "Elite intercity chauffeurs and luxury bus charters for group excellence." },
  { title: "Forex Exchange", icon: Coins, path: "/forex", desc: "Instant currency exchange with the best rates in Agra. Secure and reliable." },
  { title: "Airline Tickets", icon: Plane, path: "/airline-helicopter", desc: "Global flight bookings, private charters, and helicopter expeditions." },
  { title: "Cruise Services", icon: Ship, path: "/cruise", desc: "Elite maritime voyages from the Arabian sea to the Caribbean horizons." },
  { title: "Travel Insurance", icon: HeartPulse, path: "/travel-insurance", desc: "Comprehensive protection for medical emergencies and trip cancellations." },
  { title: "Passport & Visa", icon: Landmark, path: "/passport-visa", desc: "Error-free documentation & fast-track embassy assistance." },
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <Helmet>
        <title>Compact Holidays | Best Travel Agency in Agra | Train & Tour Specialist</title>
        <meta name="description" content="Compact Holidays is Agra's leading premium travel agency. Specialized in Train Booking, Same Day Agra Tours, Luxury Cabs, and Visa Services. Book your curated holiday today." />
      </Helmet>

      {/* Hero Carousel */}
      <section className="relative h-[90vh] overflow-hidden -mt-20">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentHero}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dim)]/80 to-transparent z-10" />
            <img src={HERO_IMAGES[currentHero].url} className="w-full h-full object-cover" alt="Hero" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex flex-col justify-center px-4 max-w-7xl mx-auto pt-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-[var(--color-primary-container)] uppercase tracking-[0.4em] font-bold text-sm mb-6 block">Est. 2014 | Agra, India</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              {HERO_IMAGES[currentHero].title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-[var(--color-primary-container)]' : ''}>{word} </span>
              ))}
            </h1>
            <p className="text-xl md:text-3xl text-white/80 font-light mb-12 max-w-xl leading-relaxed italic font-serif">
              "{HERO_IMAGES[currentHero].subtitle}"
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/tour-travel" className="bg-[var(--color-accent)] hover:bg-[#20ba59] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2">
                Explore Signature Tours <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="glass text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20 hover:bg-white/10 text-center">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-10 right-10 z-30 flex space-x-3">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setCurrentHero(i)} className={`h-1 transition-all duration-300 rounded-full ${currentHero === i ? "w-12 bg-[var(--color-primary-container)]" : "w-4 bg-white/30"}`} />
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <FadeIn direction="right">
              <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter">Premier <br />Hand-Picked <span className="text-[var(--color-accent)]">Services</span></h2>
              <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose italic font-serif">"Every reservation at Compact Holidays is a curated blueprint for a seamless journey."</p>
            </FadeIn>
          </div>
          <FadeIn direction="left">
            <div className="h-1 w-32 bg-[var(--color-primary-container)] mb-4" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up" fullWidth>
              <div className="group block p-10 bg-[var(--color-surface-container-low)] rounded-[3.5rem] hover:bg-[var(--color-primary)] transition-all duration-500 border border-white shadow-sm hover:shadow-2xl">
                <div className="bg-white p-6 rounded-[2rem] w-fit shadow-sm group-hover:bg-[var(--color-primary-container)] transition-colors mb-10">
                   <service.icon className="w-10 h-10 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-3xl font-bold text-[var(--color-primary)] group-hover:text-white mb-4 tracking-tighter leading-tight">{service.title}</h3>
                <p className="text-[var(--color-on-surface-variant)] group-hover:text-white/70 mb-8 leading-relaxed font-light text-lg">{service.desc}</p>
                <div className="flex items-center gap-6">
                   <Link to={service.path} className="flex items-center gap-2 text-[var(--color-primary)] group-hover:text-[var(--color-primary-container)] font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                   </Link>
                   <a 
                     href={`https://wa.me/918410617268?text=I'm%20interested%20in%20${service.title}%20service.`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="px-6 py-3 bg-[var(--color-accent)] group-hover:bg-white group-hover:text-[var(--color-primary)] text-white font-bold rounded-2xl text-[10px] uppercase tracking-widest transition-all shadow-md active:scale-95"
                   >
                      Book Now
                   </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Editorial Style */}
      <section className="py-40 bg-[var(--color-primary-container)]/20 rounded-[5rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-24 tracking-tighter">Defining the Compact <span className="italic font-serif">Excellence</span></h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { icon: Shield, title: "Ironclad Security", desc: "42-point safety checks for fleets and 12-layer data security for ticketing." },
              { icon: Clock, title: "High-Priority Support", desc: "No queues. No bots. 24/7 access to travel destination architects." },
              { icon: Award, title: "10+ Years Trust", desc: "Over a decade of navigating complex global reservation ecosystems." }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.2} direction="up">
                <div className="space-y-6 group">
                  <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center mx-auto transition-transform group-hover:rotate-12 duration-500"><feature.icon className="w-12 h-12 text-[var(--color-primary)]" /></div>
                  <h4 className="text-2xl font-bold tracking-tight text-[var(--color-primary)]">{feature.title}</h4>
                  <p className="text-[var(--color-on-surface-variant)] leading-loose max-w-xs mx-auto">"{feature.desc}"</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Collections Gallery */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter">Signature <span className="text-[var(--color-accent)] italic font-serif">Collections</span></h2>
            <p className="text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">A visual record of the horizons we've unlocked for our discerning guests.</p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
          <div className="md:col-span-8 h-full">
            <FadeIn direction="right" fullWidth>
              <div className="relative h-full rounded-[4rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Taj Mahal" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                   <div className="text-white">
                      <h4 className="text-3xl font-bold mb-2">Agra Heritage</h4>
                      <p className="text-white/70 italic">Bespoke guided explorations of the Mughal Legacy.</p>
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-6 h-full">
            <FadeIn direction="left" delay={0.2} fullWidth>
              <div className="relative h-full rounded-[3rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Varanasi" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex items-end">
                   <p className="text-white font-bold text-xl">Spiritual Odysseys</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.4} fullWidth>
              <div className="relative h-full rounded-[3rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Beach" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex items-end">
                   <p className="text-white font-bold text-xl">Global Escapes</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews Sneak Peek */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <FadeIn direction="right">
                  <div className="space-y-8">
                    <Star className="w-16 h-16 text-[#fbc02d] fill-[#fbc02d]" />
                    <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] tracking-tighter leading-[0.9]">Loved by <br />Elite Travelers.</h2>
                    <p className="text-2xl text-[var(--color-on-surface-variant)] leading-loose font-serif italic italic font-serif">"From Delhi to Dubai, our guests share stories of seamless horizons."</p>
                    <Link to="/reviews" className="inline-flex items-center gap-4 text-xl font-bold text-[var(--color-primary)] hover:gap-6 transition-all">Read 500+ Reviews <ArrowRight /></Link>
                  </div>
               </FadeIn>
            </div>
            <div className="lg:w-1/2 w-full">
               <FadeIn direction="left">
                  <div className="p-12 bg-white rounded-[4rem] shadow-2xl relative border-l-8 border-[var(--color-accent)]">
                     <p className="text-2xl italic leading-loose text-[var(--color-primary)] mb-10 font-serif">"The best train booking experience I've had. They got 2AC confirmed tickets for my entire family when everything was waitlisted. True professionals."</p>
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[var(--color-primary-container)] rounded-full flex items-center justify-center font-bold text-[var(--color-primary)]">A</div>
                        <div>
                           <p className="font-bold text-[var(--color-primary)] tracking-tight">Arjun Sharma</p>
                           <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">New Delhi Guest</p>
                        </div>
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

    </div>
  );
}
