import React from 'react';
import { Sparkles, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { BRAND_DETAILS } from '../utils/contentData';

export default function Footer({ setActivePage }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'calculator', label: 'Numerology Calculator' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'blog', label: 'Blog & Articles' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'booking', label: 'Book Consultation' }
  ];

  const handleLinkClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080809] border-t border-[#C8A44D]/20 pt-16 pb-8 text-[#E8DFD1]/80 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#C8A44D]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A44D] bg-[#121214] flex items-center justify-center shadow-[0_0_15px_rgba(200,164,77,0.3)]">
                <Sparkles className="w-5 h-5 text-[#C8A44D]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-gold-gradient">
                SHINE WITH NUMEROLOGY
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A44D] font-medium">
              Numerologist • Relationship Coach • Educator • Story Teller
            </p>
            <p className="text-sm text-[#E8DFD1]/60 leading-relaxed pt-2">
              Transform your relationships, career, business, and life through personalized numerology guidance by Mumbai's trusted Numerologist & Relationship Coach.
            </p>
            <div className="pt-2">
              <a
                href={BRAND_DETAILS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-[#C8A44D]/30 text-xs font-semibold text-[#C8A44D] hover:bg-[#C8A44D] hover:text-black transition-all group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#F8F5EF] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]" />
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-[#C8A44D] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A44D] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#F8F5EF] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]" />
              Luxury Studio
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C8A44D] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-[#E8DFD1]/50">Phone / WhatsApp</span>
                  <a href={`tel:${BRAND_DETAILS.phone}`} className="hover:text-[#C8A44D] font-medium transition-colors">
                    {BRAND_DETAILS.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A44D] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-[#E8DFD1]/50">Address</span>
                  <span className="text-xs text-[#E8DFD1]/80 leading-relaxed block">
                    {BRAND_DETAILS.address}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C8A44D] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-[#E8DFD1]/50">Email</span>
                  <a href={`mailto:${BRAND_DETAILS.email}`} className="hover:text-[#C8A44D] font-medium transition-colors text-xs">
                    {BRAND_DETAILS.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Consultation Hours & Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#F8F5EF] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A44D]" />
              Consultation Hours
            </h3>
            <p className="text-xs text-[#E8DFD1]/70 leading-relaxed mb-4">
              In-Person & Online consultations by prior appointment only.
            </p>
            <div className="glass-panel p-4 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#C8A44D]/10 pb-1.5">
                <span>Mon – Sat:</span>
                <span className="text-[#C8A44D]">10:00 AM – 7:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-[#E8DFD1]/50">By Special Request</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Copyright Strip */}
        <div className="pt-8 border-t border-[#C8A44D]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DFD1]/50 gap-4">
          <p>© {new Date().getFullYear()} SHINE WITH NUMEROLOGY. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#C8A44D] transition-colors cursor-pointer" onClick={() => handleLinkClick('contact')}>Privacy Policy</span>
            <span className="hover:text-[#C8A44D] transition-colors cursor-pointer" onClick={() => handleLinkClick('contact')}>Terms of Service</span>
            <span className="text-[#C8A44D]">Mumbai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
