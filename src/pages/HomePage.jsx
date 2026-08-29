import React, { useState } from 'react';
import { Sparkles, ArrowRight, Star, Award, Users, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import { SERVICES, TESTIMONIALS, WHY_CHOOSE_STATS, BRAND_DETAILS } from '../utils/contentData';
import FAQSection from '../components/FAQSection';
import InstagramGrid from '../components/InstagramGrid';

export default function HomePage({ setActivePage, setSelectedService }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleBookService = (service) => {
    if (setSelectedService) setSelectedService(service);
    setActivePage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Dark Luxury Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero_bg.jpg"
            alt="Numerology luxury background"
            className="w-full h-full object-cover object-center scale-105 animate-pulse-glow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D] via-[#0C0C0D]/80 to-[#0C0C0D]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0C0C0D]/60 to-[#0C0C0D]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex flex-col items-center justify-center gap-1.5 px-6 py-3 rounded-3xl glass-panel border-[#C8A44D]/40 text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] gold-glow text-center leading-tight">
            <div className="flex items-center gap-2 text-[#F8F5EF]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C8A44D] shrink-0" />
              <span>Mumbai's</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-1.5">
              <span className="text-[#C8A44D]">Spiritual</span>
              <span className="font-bold text-[#C8A44D]">Affordable</span>
              <span className="text-[#C8A44D]">Studio</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-[#F8F5EF]">
            Discover the Power of <br />
            <span className="text-gold-shimmer">Your Numbers</span>
          </h1>

          <p className="text-base sm:text-xl text-[#E8DFD1]/80 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your relationships, career, business and life through personalized numerology guidance by Mumbai's trusted Numerologist & Relationship Coach.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button
              onClick={() => setActivePage('booking')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-black bg-gold-gradient bg-gold-gradient-hover shadow-2xl gold-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActivePage('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-[#F8F5EF] glass-panel hover:bg-white/10 border-[#C8A44D]/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
            </button>
          </div>

          {/* Floating Trust Badges */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center border-t border-[#C8A44D]/20">
            <div className="text-xs text-[#E8DFD1]/70">
              <span className="block font-serif text-lg font-bold text-[#C8A44D]">700+</span>
              Consultations Delivered
            </div>
            <div className="text-xs text-[#E8DFD1]/70">
              <span className="block font-serif text-lg font-bold text-[#C8A44D]">5+ Years</span>
              of Experience
            </div>
            <div className="text-xs text-[#E8DFD1]/70">
              <span className="block font-serif text-lg font-bold text-[#C8A44D]">70%</span>
              Client Satisfaction
            </div>
            <div className="text-xs text-[#E8DFD1]/70">
              <span className="block font-serif text-lg font-bold text-[#C8A44D]">Local & Overseas</span>
              Clients
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER INTRODUCTION */}
      <section className="py-24 bg-[#0C0C0D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden glass-panel border-[#C8A44D]/40 p-2.5 gold-glow bg-[#121214] flex items-center justify-center">
                <img
                  src="/assets/a.png"
                  alt="Rrajesh Hinduja - Professional Numerologist & Relationship Coach"
                  className="w-full h-[480px] sm:h-[540px] object-contain object-top rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel-gold backdrop-blur-md border-[#C8A44D]/40 shadow-xl">
                  <p className="font-serif text-lg font-bold text-gold-shimmer">
                    {BRAND_DETAILS.founder}
                  </p>
                  <p className="text-xs text-[#E8DFD1]/70 uppercase tracking-wider">
                    {BRAND_DETAILS.founderTitles.join(' • ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.18em] text-[#C8A44D] max-w-full text-center">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>THE VISIONARY BEHIND SHINE WITH NUMEROLOGY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-[#F8F5EF]">
                Bridging Sacred Mathematics & <span className="text-gold-gradient">Modern Harmony</span>
              </h2>

              <p className="text-base text-[#E8DFD1]/80 leading-relaxed font-light">
                We are definitely not the biggest or the most trusted name in Numerology—but we strive to be the most approachable and most understanding.
              </p>

              <p className="text-sm text-[#E8DFD1]/75 leading-relaxed font-light">
                With our practical and pragmatic approach, we sincerely work towards raising the standards of customer satisfaction and meaningful problem-solving.
              </p>

              <p className="text-sm text-[#E8DFD1]/75 leading-relaxed font-light">
                We have helped couples on the verge of separation reconnect, brought fathers and sons together when they were not even on speaking terms, resolved deep misunderstandings, and saved family-run businesses where brothers stood against each other — of course, with the help of Numerology.
              </p>

              <div className="py-2 text-center border-y border-[#C8A44D]/20 my-3">
                <span className="font-serif italic text-lg sm:text-xl font-medium text-gold-shimmer block">
                  "We only help… HE Heals."
                </span>
              </div>

              {/* 4 Credentials Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {BRAND_DETAILS.founderTitles.map((title, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl glass-panel border-[#C8A44D]/20">
                    <CheckCircle className="w-4 h-4 text-[#C8A44D] shrink-0" />
                    <span className="text-xs font-semibold text-[#F8F5EF]">{title}</span>
                  </div>
                ))}
              </div>

              {/* Signature Accent */}
              <div className="pt-6 border-t border-[#C8A44D]/20 flex items-center justify-between">
                <div>
                  <span className="font-serif italic text-2xl text-gold-shimmer block">
                    Rrajesh Hinduja
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-[#E8DFD1]/50">
                    Founder & Master Numerologist
                  </span>
                </div>
                <button
                  onClick={() => setActivePage('about')}
                  className="text-xs uppercase tracking-wider text-[#C8A44D] hover:underline flex items-center gap-1"
                >
                  <span>Read Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="py-24 bg-[#080809] relative border-t border-b border-[#C8A44D]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Guidance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-shimmer">
              Featured Consultation Offerings
            </h2>
            <p className="text-sm text-[#E8DFD1]/70">
              Each session is meticulously crafted to decode your unique birth energy and deliver practical, high-impact life solutions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl glass-panel border-[#C8A44D]/20 overflow-hidden hover:border-[#C8A44D]/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full ${service.image.includes('a.png') ? 'object-contain object-top bg-[#121214]' : 'object-cover object-center'} group-hover:scale-105 transition-transform duration-700`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D] via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-black bg-gold-gradient shadow-md">
                      {service.duration}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#C8A44D] font-semibold block">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#F8F5EF] group-hover:text-[#C8A44D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#E8DFD1]/70 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-[#C8A44D]/15 mt-4">
                  <span className="text-xs font-bold text-[#C8A44D]">
                    {service.fee}
                  </span>
                  <button
                    onClick={() => handleBookService(service)}
                    className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gold-gradient hover:bg-gold-gradient-hover transition-all flex items-center gap-1.5"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setActivePage('services')}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#F8F5EF] glass-panel hover:border-[#C8A44D] transition-all"
            >
              View All Consultation Verticals
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SHINE (STATS) */}
      <section className="py-20 bg-[#0C0C0D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl text-center space-y-2 border-[#C8A44D]/30 gold-glow-hover transition-all"
              >
                <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-shimmer">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-[#E8DFD1]/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-[#080809] relative border-t border-[#C8A44D]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D] mb-4">
            <Star className="w-3.5 h-3.5 fill-current text-[#C8A44D]" />
            <span>Client Transformations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-shimmer mb-12">
            Stories of Elevation & Harmony
          </h2>

          {/* Testimonial Card */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border-[#C8A44D]/30 gold-glow relative text-left transition-all duration-500">
            <div className="text-5xl font-serif text-[#C8A44D]/40 mb-4">“</div>
            <p className="text-base sm:text-xl text-[#F8F5EF] leading-relaxed font-light mb-8 italic">
              {TESTIMONIALS[activeTestimonial].quote}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-[#C8A44D]/20 pt-6 gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIALS[activeTestimonial].avatar}
                  alt={TESTIMONIALS[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C8A44D]"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#F8F5EF]">
                    {TESTIMONIALS[activeTestimonial].name}
                  </h4>
                  <p className="text-xs text-[#E8DFD1]/60">
                    {TESTIMONIALS[activeTestimonial].title} • {TESTIMONIALS[activeTestimonial].location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#C8A44D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === idx ? 'bg-[#C8A44D] w-8' : 'bg-[#E8DFD1]/30 hover:bg-[#C8A44D]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-24 bg-[#0C0C0D] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-panel-gold p-12 sm:p-16 rounded-3xl border-[#C8A44D]/40 space-y-6 shadow-2xl">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-shimmer leading-tight">
              Your Numbers Already Know Your Story.
            </h2>
            <p className="text-base text-[#E8DFD1]/80 max-w-2xl mx-auto font-light">
              Step into alignment today. Schedule a private consultation at our Kalina Mumbai studio or via online Zoom.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setActivePage('booking')}
                className="px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-black bg-gold-gradient bg-gold-gradient-hover shadow-2xl gold-glow hover:scale-105 transition-all duration-300"
              >
                Book Your Consultation Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <InstagramGrid />
    </div>
  );
}
