import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Plane, Train, Map, Car, Landmark, Banknote, Ship, Shield, ChevronDown } from 'lucide-react';

const OTHER_SERVICES = [
  { name: 'Passport & Visa', path: '/passport-visa', icon: Landmark },
  { name: 'Airline & Helicopter', path: '/airline-helicopter', icon: Plane },
  { name: 'Forex Exchange', path: '/forex', icon: Banknote },
  { name: 'Cruise Services', path: '/cruise', icon: Ship },
  { name: 'Travel Insurance', path: '/insurance', icon: Shield },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 glass border-b-[0.5px] border-[var(--color-outline-variant)]/20 shadow-sm">
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
            <Link to="/train-booking" className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors">Train Booking</Link>
            <Link to="/tour-travel" className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors">Tour & Travel</Link>
            <Link to="/cabs-buses" className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] font-medium transition-colors">Cabs & Buses</Link>
            
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-on-surface)] p-2 p-round-lg hover:bg-[var(--color-surface-container)] transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-50 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="px-4 pt-6 pb-20 h-full overflow-y-auto bg-gradient-to-b from-white to-[var(--color-surface)]">
          <div className="space-y-2">
            {[
              { name: 'Home', path: '/', icon: Map },
              { name: 'Train Booking', path: '/train-booking', icon: Train },
              { name: 'Tour & Travel', path: '/tour-travel', icon: Map },
              { name: 'Cabs & Buses', path: '/cabs-buses', icon: Car },
            ].map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white shadow-sm border border-[0.5px] border-[var(--color-outline-variant)]/10 text-lg font-bold text-[var(--color-primary)]">
                <item.icon className="w-6 h-6" />
                {item.name}
              </Link>
            ))}
            
            <div className="pt-6 pb-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-5">All Premium Services</span>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {OTHER_SERVICES.map((s) => (
                <Link 
                  key={s.path}
                  to={s.path} 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-[0.5px] border-[var(--color-outline-variant)]/10 bg-white/50"
                >
                  <div className="bg-[var(--color-primary-container)] p-2 rounded-xl">
                    <s.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <span className="font-semibold text-gray-700">{s.name}</span>
                </Link>
              ))}
            </div>

            <div className="pt-8 space-y-2">
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-5 py-4 text-center font-bold text-[var(--color-primary)] bg-[var(--color-primary-container)]/30 rounded-2xl">Our Story (About)</Link>
              <Link to="/reviews" onClick={() => setIsOpen(false)} className="block px-5 py-4 text-center font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-2xl">Guest Reviews</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
