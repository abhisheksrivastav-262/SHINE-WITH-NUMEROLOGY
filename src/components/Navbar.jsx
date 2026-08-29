import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Calendar, Phone } from 'lucide-react';
import { BRAND_DETAILS } from '../utils/contentData';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-full border border-[#C8A44D]/40 bg-[#121214] flex items-center justify-center group-hover:border-[#C8A44D] group-hover:shadow-[0_0_15px_rgba(200,164,77,0.4)] transition-all">
            <Sparkles className="w-5 h-5 text-[#C8A44D] group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl tracking-wider font-bold text-gold-shimmer block leading-tight">
              SHINE WITH NUMEROLOGY
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8DFD1]/60 block">
              Mumbai • Luxury Studio
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wide transition-all rounded-md relative ${
                activePage === item.id
                  ? 'text-[#C8A44D]'
                  : 'text-[#E8DFD1]/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#C8A44D] to-transparent" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${BRAND_DETAILS.phone}`}
            className="flex items-center gap-1.5 text-xs text-[#E8DFD1]/80 hover:text-[#C8A44D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C8A44D]" />
            <span>+91 98702 26260</span>
          </a>

          <button
            onClick={() => handleNavClick('booking')}
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gold-gradient bg-gold-gradient-hover shadow-lg gold-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => handleNavClick('booking')}
            className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-black bg-gold-gradient shadow-md"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#E8DFD1] hover:text-[#C8A44D] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-[#C8A44D]/20 px-6 py-6 space-y-3 animate-fade-down">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left py-2.5 text-sm font-serif tracking-wider transition-colors ${
                activePage === item.id ? 'text-[#C8A44D] font-bold pl-2 border-l-2 border-[#C8A44D]' : 'text-[#E8DFD1]/80 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#C8A44D]/20 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient shadow-lg text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation Now
            </button>
            <a
              href={`tel:${BRAND_DETAILS.phone}`}
              className="text-center text-xs text-[#E8DFD1]/70 hover:text-[#C8A44D] py-1"
            >
              📞 {BRAND_DETAILS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
