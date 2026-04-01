import { Camera, Heart, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TourPackages() {
  return (
    <div className="w-full">
      <section className="relative h-[65vh] w-full flex items-center justify-center -mt-20 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary-dim)]/40 to-black/20" />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl pt-20"
        >
          <span className="px-4 py-2 rounded-full glass text-white text-sm font-bold uppercase tracking-widest mb-6 inline-block">Apno Waali Trips</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-md">Tour Packages</h1>
          <p className="text-xl text-[var(--color-primary-container)]">Bespoke itineraries designed for memories. Duniya ghumo, par apno jaisa bharose ke saath.</p>
        </motion.div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Aapke Liye Khas Destinations</h2>
            <p className="text-[var(--color-on-surface-variant)] text-lg">Hand-picked locations highly rated by our travelers. Humari speciality? Har trip ek smooth experience hoti hai.</p>
          </div>
          <a href="https://wa.me/918410617268" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-[#00576e] transition-colors">
            Request Custom Safari
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Dubai Golden Sands", days: "5 Days / 4 Nights", include: ["Flights", "4★ Hotel", "Desert Safari"] },
            { img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Parisian Romance", days: "7 Days / 6 Nights", include: ["Visas", "5★ Boutique", "Eiffel Dinner"] },
            { img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Kerala Backwaters", days: "6 Days / 5 Nights", include: ["Houseboat", "Ayurvedic Spa", "Transfers"] }
          ].map((tour, i) => (
            <div key={i} className="group rounded-[2rem] overflow-hidden bg-white shadow-sm border border-[var(--color-surface-container)] hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)] shadow-sm">
                  {tour.days}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{tour.title}</h3>
                <div className="flex gap-4 mb-8 text-[var(--color-on-surface-variant)] text-sm">
                  {tour.include.map((inc, j) => (
                    <span key={j} className="flex items-center gap-1 bg-[var(--color-surface-container-low)] px-3 py-1 rounded-lg">
                      {j === 0 ? <Navigation className="w-3 h-3"/> : j === 1 ? <Heart className="w-3 h-3"/> : <Camera className="w-3 h-3"/> }
                      {inc}
                    </span>
                  ))}
                </div>
                <a href={`https://wa.me/918410617268?text=I'm%20interested%20in%20the%20${tour.title}%20tour%20package.`} target="_blank" rel="noreferrer" className="block w-full text-center py-4 bg-[var(--color-surface-container-low)] text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white font-bold rounded-xl transition-colors">
                  Check Pricing & Dates
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
