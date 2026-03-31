import { Link } from 'react-router-dom';
import { Plane, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-on-primary)] py-16 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
               <Plane className="w-8 h-8 text-[var(--color-primary-container)]" />
               <span className="font-bold text-xl tracking-tight text-white">Compact Holidays</span>
            </Link>
            <p className="text-[var(--color-primary-container)] text-sm leading-relaxed max-w-xs">
              Curating premium travel experiences and seamless journeys worldwide. Your horizon awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[var(--color-primary-container)] hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/tour-packages" className="text-[var(--color-primary-container)] hover:text-white transition-colors text-sm">Tour Packages</Link></li>
              <li><Link to="/train-tickets" className="text-[var(--color-primary-container)] hover:text-white transition-colors text-sm">Train Tickets</Link></li>
              <li><Link to="/passport-visa" className="text-[var(--color-primary-container)] hover:text-white transition-colors text-sm">Passport & Visa</Link></li>
            </ul>
          </div>

          {/* Extra Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/airline-helicopter" className="text-[var(--color-primary-container)] hover:text-white transition-colors text-sm">Flights & Helicopters</Link></li>
              <li><Link to="/cruise" className="text-[var(--color-primary-container)] hover:text-white transition-colors text-sm">Luxury Cruises</Link></li>
              <li><Link to="/forex" className="text-[var(--color-primary-container)] hover:text-white transition-colors text-sm">Forex Exchange</Link></li>
              <li><Link to="/insurance" className="text-[var(--color-primary-container)] hover:text-white transition-colors text-sm">Travel Insurance</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary-fixed)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--color-primary-container)] text-sm leading-relaxed">Shop No 5, New Market<br/>Agra, Uttar Pradesh 282001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary-fixed)] flex-shrink-0" />
                <span className="text-[var(--color-primary-container)] text-sm">+91 84106 17268</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary-fixed)] flex-shrink-0" />
                <span className="text-[var(--color-primary-container)] text-sm">info@compactholidays.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00576e] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-primary-container)]">
          <p>&copy; {new Date().getFullYear()} Compact Holidays. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
