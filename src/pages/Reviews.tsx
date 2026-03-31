import { Star, Quote, Award, MapPin, CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import happyCustomer from '../assets/generated/happy_customer_sticker_badge_1774982717837_1774984334442.png';

const REVIEWS = [
  {
    name: "Arjun Sharma",
    location: "New Delhi",
    text: "The best train booking experience I've had in 10 years. They got me a confirmed 2AC ticket for my family when everything was showing waitlisted on IRCTC. True professionals.",
    service: "Train Booking",
    rating: 5,
    date: "March 2025"
  },
  {
    name: "Priya Verma",
    location: "Agra",
    text: "Used their passport service for my renewal. I was worried about the documents, but they sent a concierge to my house, handled everything, and I got my passport in 4 days! Amazing speed.",
    service: "Passport Assistance",
    rating: 5,
    date: "February 2025"
  },
  {
    name: "Rahul Khanna",
    location: "Jaipur",
    text: "Booked the Same Day Agra Tour. The luxury cab was immaculate, and the guide provided by Compact Holidays was incredibly knowledgeable about the Taj Mahal's history. 10/10.",
    service: "Tour Packages",
    rating: 5,
    date: "January 2025"
  },
  {
    name: "Amit Patel",
    location: "Mumbai",
    text: "Efficient forex exchange. The rates were better than the airport and the delivery was secure. Will definitely use them for my next international trip.",
    service: "Forex Exchange",
    rating: 5,
    date: "March 2025"
  },
  {
    name: "Sneha Gupta",
    location: "Agra",
    text: "The cruise booking was seamless. They took care of the deck selection and all dietary requirements. A truly curated holiday as promised.",
    service: "Cruise Services",
    rating: 5,
    date: "December 2024"
  },
  {
    name: "Vikram Singh",
    location: "Lucknow",
    text: "Fast visa processing for my US trip. The error-free documentation they prepared made the embassy interview very smooth. Highly recommend for international travel.",
    service: "Visa Services",
    rating: 5,
    date: "January 2025"
  }
];

export default function Reviews() {
  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* 1. Hero Section - Wall of Love */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center grayscale opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-surface)]/60 to-[var(--color-surface)]" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl pt-32">
          <FadeIn direction="down">
             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.4em] mb-10 border border-[var(--color-primary-container)]">
               <Award className="w-4 h-4" /> Trusted by 12,000+ Travelers
             </div>
             <h1 className="text-6xl md:text-9xl font-bold text-[var(--color-primary)] mb-8 tracking-tighter leading-[0.9]">
               Guest <br /><span className="text-[var(--color-accent)]">Testimonials</span>
             </h1>
          </FadeIn>
        </div>
      </section>

      {/* 2. Highlights Summary */}
      <section className="py-24 max-w-7xl mx-auto px-4 -mt-20 relative z-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Overall Rating', val: '4.9/5', icon: Star, color: 'text-[#fbc02d]' },
              { label: 'Booking Success', val: '99.9%', icon: CheckCircle2, color: 'text-[var(--color-accent)]' },
              { label: 'Ambassador Score', val: '80%', icon: Quote, color: 'text-[var(--color-primary)]' }
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.2 * i} direction="up">
                 <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-white flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform">
                    <stat.icon className={`w-12 h-12 ${stat.color}`} />
                    <h3 className="text-5xl font-bold text-[var(--color-primary)] tracking-tighter">{stat.val}</h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                 </div>
              </FadeIn>
            ))}
         </div>
      </section>

      {/* 3. Review Wall - Asymmetrical Masonry Inspiration */}
      <section className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
            {REVIEWS.map((review, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up" fullWidth>
                 <div className="inline-block w-full p-12 bg-white rounded-[4rem] border border-[var(--color-surface-container)] hover:shadow-2xl transition-all duration-500 overflow-hidden relative group">
                    {i % 2 === 0 && (
                       <img src={happyCustomer} className="absolute -top-4 -right-4 w-24 h-24 transform rotate-12 z-20 pointer-events-none drop-shadow-xl" alt="Happy Customer" />
                    )}
                    <Quote className="absolute -top-10 -right-10 w-40 h-40 text-[var(--color-primary)] opacity-5 -z-0" />
                    <div className="absolute top-10 right-10 rotate-12 transition-transform group-hover:rotate-0">
                       <span className="bg-[var(--color-primary-container)] text-[var(--color-primary)] text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-xl shadow-sm border border-white">Verified Trip</span>
                    </div>
                    
                    <div className="relative z-10">
                       <div className="flex gap-1 mb-8">
                          {[...Array(review.rating)].map((_, i) => (
                             <Star key={i} className="w-5 h-5 text-[#fbc02d] fill-[#fbc02d]" />
                          ))}
                       </div>
                       
                       <p className="text-xl text-[var(--color-on-surface-variant)] mb-10 leading-relaxed font-serif italic text-justify tracking-tight">
                         "{review.text}"
                       </p>
                       
                       <div className="flex items-center gap-6 border-t border-[var(--color-surface-container)] pt-8">
                          <div className="w-16 h-16 bg-[var(--color-primary-container)] rounded-full flex items-center justify-center text-2xl font-bold text-[var(--color-primary)] shadow-inner">
                             {review.name[0]}
                          </div>
                          <div>
                             <h4 className="text-2xl font-bold text-[var(--color-primary)] tracking-tighter">{review.name}</h4>
                             <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)] font-medium">
                                <MapPin className="w-3 h-3" /> {review.location} | <CheckCircle2 className="w-3 h-3 text-[var(--color-accent)]" /> {review.service}
                             </div>
                          </div>
                       </div>
                       
                       <div className="mt-8 text-[10px] font-bold text-gray-300 uppercase tracking-widest bg-gray-50 inline-block px-4 py-2 rounded-full">
                          Travel Date: {review.date}
                       </div>
                    </div>
                 </div>
              </FadeIn>
            ))}
         </div>
      </section>

    </div>
  );
}
