import React from 'react';
import { Sparkles, Check, Clock, Globe, ArrowRight } from 'lucide-react';
import { SERVICES } from '../utils/contentData';

export default function ServicesPage({ setActivePage, setSelectedService }) {
  const handleSelectService = (service) => {
    if (setSelectedService) setSelectedService(service);
    setActivePage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-20 bg-[#0C0C0D] min-h-screen text-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spiritual Luxury Consultations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-gold-shimmer">
            Our Consultation Verticals
          </h1>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Discover bespoke numerology offerings crafted for life path alignment, relationship harmony, corporate brand scaling, and newborn blessings.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl glass-panel border-[#C8A44D]/30 overflow-hidden hover:border-[#C8A44D]/60 transition-all duration-500 gold-glow-hover flex flex-col justify-between"
            >
              <div>
                {/* Visual Banner */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full ${service.image.includes('a.png') ? 'object-contain object-top bg-[#121214]' : 'object-cover object-center'} group-hover:scale-105 transition-transform duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-black/70 border border-[#C8A44D]/40 text-[#C8A44D] backdrop-blur-md">
                      {service.subtitle}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-black bg-gold-gradient shadow-md">
                      {service.fee}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#F8F5EF] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-xs text-[#E8DFD1]/80 leading-relaxed font-light">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-4 text-xs text-[#E8DFD1]/70 border-t border-b border-[#C8A44D]/15 py-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C8A44D]" />
                      {service.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#C8A44D]" />
                      {service.mode}
                    </span>
                  </div>

                  {/* Included Deliverables */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C8A44D] block">
                      Key Session Benefits & Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E8DFD1]/80">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C8A44D] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-8 pt-0">
                <button
                  onClick={() => handleSelectService(service)}
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:bg-gold-gradient-hover transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Book This Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
