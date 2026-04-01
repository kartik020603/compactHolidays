import { Star, Navigation, Globe, HeartPulse } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import heroTour from '../assets/generated/tour_hero_bespoke_1774982248718.png';
import imgGoldenTriangle from '../assets/generated/golden_triangle_heritage_1774982272860.png';
import imgMathura from '../assets/generated/mathura_vrindavan_spiritual_1774982292695.png';
import imgJaipur from '../assets/generated/jaipur_amer_fort_premium_1774982320716.png';
import imgRanthambore from '../assets/generated/ranthambore_tiger_safari_1774982339632.png';

export default function TourTravel() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Taj Mahal High Res */}
      <section className="relative h-[85vh] w-full flex items-center justify-center -mt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroTour})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[var(--color-primary)]/40 to-[var(--color-primary-dim)]" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <FadeIn direction="down" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-white text-xs font-bold uppercase tracking-[0.4em] mb-10 border border-white/10">
              <Star className="w-4 h-4 text-[#fbc02d]" /> Curated Holiday Experiences
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl">
              Agra's <br /><span className="text-[var(--color-primary-container)]">Signature Tours</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-[var(--color-primary-container)] max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Bespoke travel itineraries crafted for discovery, not just sightseeing. Apno ke saath ek yaadgaar safar. We don't just book trips, we curate memories.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Trending Grid - Stitch Editorial Style */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-[5rem] -translate-y-20 relative z-20 shadow-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12 px-6">
          <div className="max-w-2xl">
            <FadeIn direction="right">
               <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-6 tracking-tight leading-tight">Aapke Liye Khas Destinations</h2>
               <p className="text-xl text-[var(--color-on-surface-variant)] leading-loose">Explore our hand-picked signature tours that define the cultural landscape. What makes us special? We include deep local guides who treat you like family.</p>
            </FadeIn>
          </div>
          <FadeIn direction="left">
               <a href="https://wa.me/918410617268" className="px-12 py-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dim)] text-white font-bold text-xl rounded-[2rem] shadow-xl transition-all">Request Custom Itinerary</a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              title: "Golden Triangle Tour", 
              img: imgGoldenTriangle,
              desc: "Delhi, Agra, and Jaipur. A royal journey through the architectural heart of India. 5 Days / 4 Nights.",
              badges: ['Flights', '5★ Hotels', 'Guided Tours']
            },
            { 
              title: "Jaipur Legacy Tour", 
              img: imgJaipur,
              desc: "Deep dive into the Pink City. From the Amer Fort's reflections to the Hawa Mahal's breeze.",
              badges: ['Fort Access', 'Local Arts', 'Royal Stays']
            },
            { 
              title: "Delhi to Mathura & Vrindavan", 
              img: imgMathura,
              desc: "A spiritual odyssey through the birthplaces of Hindu mythology. Deeply cultural and vibrant.",
              badges: ['Spiritual Guide', 'Group AC Bus', 'Temples']
            },
            { 
              title: "Ranthambore Safari", 
              img: imgRanthambore,
              desc: "Exclusive access to Ranthambore tiger reserves. Luxury jungle lodges and safari jeep excursions.",
              badges: ['Forest Permits', 'Resorts', 'Open Jeeps']
            }
          ].map((tour, idx) => (
            <FadeIn key={idx} delay={0.2 * idx} direction={idx % 2 === 0 ? 'right' : 'left'}>
              <div className="group bg-[var(--color-surface-container-low)] rounded-[4rem] overflow-hidden border border-white hover:shadow-2xl transition-all duration-500">
                 <div className="h-[450px] overflow-hidden relative">
                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
                       {tour.badges.map((b, i) => (
                          <span key={i} className="px-4 py-2 glass rounded-full text-white text-[10px] uppercase font-bold tracking-widest">{b}</span>
                       ))}
                    </div>
                 </div>
                 <div className="p-12">
                   <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4 tracking-tighter">{tour.title}</h3>
                   <p className="text-lg text-[var(--color-on-surface-variant)] mb-10 leading-relaxed">{tour.desc}</p>
                   <a href={`https://wa.me/918410617268?text=I'm%20interested%20in%20the%20${tour.title}%20package.`} className="block w-full py-5 text-center font-bold text-white bg-[var(--color-accent)] rounded-[2rem] shadow-lg hover:bg-[#20ba59] transition-all">WhatsApp Booking</a>
                 </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us Section - Stitch Narrative */}
      <section className="py-40 bg-[var(--color-surface)] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
             <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-24 tracking-tighter">The Pillars of Compact Choice</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <FadeIn delay={0.2} direction="up">
               <div className="space-y-8 max-w-sm mx-auto">
                 <div className="w-24 h-24 bg-white rounded-[3rem] shadow-xl flex items-center justify-center mx-auto text-[var(--color-primary)]"><Globe className="w-12 h-12" /></div>
                 <h4 className="text-2xl font-bold tracking-tight">Local Expertise</h4>
                 <p className="text-[var(--color-on-surface-variant)] leading-loose">Deeply rooted in Indian travel, we know the "hidden sektor" routes embassies and standard agents miss.</p>
               </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
               <div className="space-y-8 max-w-sm mx-auto p-12 bg-white rounded-[4rem] shadow-2xl scale-110 border-4 border-[var(--color-primary-container)]/10">
                 <div className="w-24 h-24 bg-[var(--color-primary-container)] rounded-[3rem] shadow-xl flex items-center justify-center mx-auto text-[var(--color-primary)]"><Navigation className="w-12 h-12" /></div>
                 <h4 className="text-2xl font-bold tracking-tight">End-to-End Planning</h4>
                 <p className="text-[var(--color-on-surface-variant)] leading-loose">Stress-free logistics from the moment you land until the minute you fly home.</p>
               </div>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
               <div className="space-y-8 max-w-sm mx-auto">
                 <div className="w-24 h-24 bg-white rounded-[3rem] shadow-xl flex items-center justify-center mx-auto text-[var(--color-accent)]"><HeartPulse className="w-12 h-12" /></div>
                 <h4 className="text-2xl font-bold tracking-tight">24/7 Concierge Support</h4>
                 <p className="text-[var(--color-on-surface-variant)] leading-loose">Always available for real-time itinerary shifts, flight changes, or local advice.</p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Signature Experiences Gallery */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter italic font-serif">Capture the <span className="text-[var(--color-accent)]">Moment.</span></h2>
            <p className="text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">High-fidelity memories from our signature Northern India expeditions.</p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80", title: "Taj Mahal Sunrise", desc: "Private access before the crowds." },
            { url: imgJaipur, title: "Jaipur Forts", desc: "Royal heritage and amber hues." },
            { url: imgRanthambore, title: "Ranthambore Safari", desc: "Exclusive tiger reserve permits." }
          ].map((item, i) => (
            <FadeIn key={i} delay={0.2 * i} direction="up">
               <div className="group relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl">
                  <img src={item.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                     <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                     <p className="text-white/70 italic font-serif ">{item.desc}</p>
                  </div>
               </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </div>
  );
}
