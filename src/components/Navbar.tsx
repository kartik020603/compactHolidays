import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Plane, Train, Map, Car, Landmark, Banknote, Ship, Shield, ChevronDown } from 'lucide-react';

const OTHER_SERVICES = [
  { name: 'Tour & Travel', path: '/tour-travel', icon: Map },
  { name: 'Cabs & Buses', path: '/cabs-buses', icon: Car },
  { name: 'Airline tickets', path: '/airline-helicopter', icon: Plane },
  { name: 'Forex Exchange', path: '/forex', icon: Banknote },
  { name: 'Cruise Services', path: '/cruise', icon: Ship },
  { name: 'Travel Insurance', path: '/insurance', icon: Shield },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 glass border-b-[0.5px] border-[var(--color-outline-variant)]/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
               <Plane className="w-8 h-8 text-[var(--color-primary)]" />
               <div className="flex flex-col -space-y-1">
                 <span className="font-bold text-xl tracking-tight text-[var(--color-primary)]">Compact Holidays</span>
                 <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-secondary)] font-bold">Premium Agra Travel</span>
               </div>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors">Home</Link>
              <Link to="/passport-visa" className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors">Passport & Visa</Link>
              <Link to="/train-booking" className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors">Train Booking</Link>
              <Link to="/stories" className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors">Our Stories</Link>
              
              <div className="relative group">
                <button 
                  className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors flex items-center gap-1 py-4"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  Other Services <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                {/* Dropdown */}
                <div 
                  className={`absolute top-full right-0 w-64 bg-white shadow-[0_20px_40px_-4px_rgba(0,51,72,0.12)] rounded-3xl p-3 transition-all duration-300 origin-top ${showDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-2 invisible'}`}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  {OTHER_SERVICES.map((service) => (
                    <Link 
                      key={service.path} 
                      to={service.path} 
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[var(--color-surface)] text-[var(--color-on-surface)] transition-all group"
                    >
                      <div className="p-2 rounded-xl bg-[var(--color-surface-container)] group-hover:bg-[var(--color-primary-container)] transition-colors">
                        <service.icon className="w-4 h-4 text-[var(--color-primary)]" />
                      </div>
                      <span className="font-semibold text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/about" className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors">About</Link>
              <Link to="/reviews" className="px-6 py-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold rounded-xl border border-[var(--color-accent)]/20 hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-sm active:scale-95">Reviews</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-3 rounded-2xl transition-all ${isOpen ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-on-surface)] bg-[var(--color-surface-container)]'}`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Moved outside nested fixed with backdrop-filter to ensure correct viewport calculations */}
      <div className={`lg:hidden fixed inset-x-0 bottom-0 top-20 bg-white z-50 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="px-5 pt-8 pb-32 h-full overflow-y-auto bg-gradient-to-b from-white to-[var(--color-surface)]">
          <div className="max-w-md mx-auto space-y-3">
            {[
              { name: 'Home', path: '/', icon: Map },
              { name: 'Passport & Visa', path: '/passport-visa', icon: Landmark },
              { name: 'Train Booking', path: '/train-booking', icon: Train },
              { name: 'Our Stories', path: '/stories', icon: Banknote },
            ].map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-5 px-6 py-5 rounded-3xl bg-white shadow-sm border border-[var(--color-outline-variant)]/10 text-xl font-bold text-[var(--color-primary)]">
                <item.icon className="w-6 h-6" />
                {item.name}
              </Link>
            ))}
            
            <div className="pt-10 pb-4 px-2">
              <div className="h-1 w-10 bg-[var(--color-primary-container)] mb-4 rounded-full" />
              <span className="text-[11px] font-black text-[var(--color-primary)]/40 uppercase tracking-[0.4em]">Premium Travel Hub</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {OTHER_SERVICES.map((s) => (
                <Link 
                  key={s.path}
                  to={s.path} 
                  onClick={() => setIsOpen(false)} 
                  className="flex flex-col gap-4 p-6 rounded-[2.5rem] border border-[var(--color-outline-variant)]/10 bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-[var(--color-primary-container)]/30 w-12 h-12 flex items-center justify-center rounded-2xl">
                    <s.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <span className="font-bold text-[var(--color-primary)] text-[13px] leading-tight">{s.name}</span>
                </Link>
              ))}
            </div>

            <div className="pt-12 space-y-4">
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-6 py-5 text-center font-bold text-[var(--color-primary)] bg-[var(--color-primary-container)]/20 rounded-[2rem] border border-[var(--color-primary)]/10">About Compact Holidays</Link>
              <Link to="/reviews" onClick={() => setIsOpen(false)} className="block px-6 py-6 text-center font-bold text-white bg-[var(--color-primary)] rounded-[2rem] shadow-2xl shadow-[var(--color-primary)]/30 text-lg">Read Guest Reviews</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
