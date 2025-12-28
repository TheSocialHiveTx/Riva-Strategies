
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COLORS } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header py-3 shadow-lg border-b border-gray-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold tracking-tighter" style={{ color: COLORS.primaryBlue }}>
              RIVA<span className="font-light tracking-widest text-riva-gold group-hover:text-riva-blue transition-colors duration-300 ml-1">STRATEGIES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-all relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-riva-gold after:left-0 after:-bottom-1 after:transition-all hover:after:w-full ${
                  location.pathname === link.path ? 'text-riva-blue after:w-full' : 'text-gray-500 hover:text-riva-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all bg-riva-gold text-riva-blue hover:bg-riva-gold-dark hover:scale-105 active:scale-95 shadow-md"
            >
              Book Strategy Call
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-riva-blue p-2">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? 'top-full opacity-100' : '-top-96 opacity-0 pointer-events-none'}`}>
        <div className="py-6 px-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold text-riva-blue hover:text-riva-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-4 rounded font-bold uppercase tracking-widest bg-riva-gold text-riva-blue"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-riva-blue text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-2xl font-bold tracking-tighter">
              RIVA<span className="font-light tracking-widest text-riva-gold ml-1">STRATEGIES</span>
            </span>
            <p className="mt-6 text-blue-100/70 text-base leading-relaxed max-w-sm">
              Architecting sustainable growth for high-ambition operators through systemic operational excellence.
            </p>
            <div className="mt-8 flex space-x-4">
              {/* Placeholder for social icons */}
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-riva-gold hover:border-riva-gold transition-all cursor-pointer">
                <span className="font-bold text-xs">LI</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-riva-gold hover:border-riva-gold transition-all cursor-pointer">
                <span className="font-bold text-xs">X</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-riva-gold mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm text-blue-100/80">
              <li><Link to="/services" className="hover:text-white transition-colors">Revenue Engines</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">OpEx Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Strategic Maps</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Elite Teams</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-riva-gold mb-8">Verticals</h4>
            <ul className="space-y-4 text-sm text-blue-100/80">
              <li><Link to="/industries/hospitality-food-service" className="hover:text-white transition-colors">Hospitality Groups</Link></li>
              <li><Link to="/industries/professional-services" className="hover:text-white transition-colors">Professional Firms</Link></li>
              <li><Link to="/industries/technology-software" className="hover:text-white transition-colors">SaaS & Software</Link></li>
              <li><Link to="/industries/healthcare-medical" className="hover:text-white transition-colors">Medical Groups</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-riva-gold mb-8">Headquarters</h4>
            <div className="space-y-6">
              <a href="tel:+15550000000" className="flex items-center text-blue-100 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center mr-3 group-hover:bg-riva-gold transition-colors">
                    <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">(555) 000-0000</span>
              </a>
              <Link to="/contact" className="group inline-flex items-center px-6 py-3 border border-riva-gold text-riva-gold rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-riva-gold hover:text-riva-blue transition-all">
                Start Audit <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <p>© {new Date().getFullYear()} Riva Strategies Group. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
      {/* Abstract Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-riva-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-riva-gold selection:text-riva-blue">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
