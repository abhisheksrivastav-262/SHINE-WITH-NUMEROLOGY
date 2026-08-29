import React from 'react';
import { Sparkles, Heart, Compass, ShieldCheck, Award } from 'lucide-react';
import { BRAND_DETAILS } from '../utils/contentData';

export default function AboutPage({ setActivePage }) {
  const philosophyPillars = [
    {
      title: "Numbers",
      icon: <Sparkles className="w-6 h-6 text-[#C8A44D]" />,
      desc: "Sacred mathematical blueprints encoding personality, timing, and karmic milestones."
    },
    {
      title: "Energy",
      icon: <Compass className="w-6 h-6 text-[#C8A44D]" />,
      desc: "The subtle electromagnetic vibration surrounding names, spaces, and digital communication."
    },
    {
      title: "Relationships",
      icon: <Heart className="w-6 h-6 text-[#C8A44D]" />,
      desc: "Emotional harmony, synastry, and mutual soul alignment between partners and families."
    },
    {
      title: "Destiny",
      icon: <ShieldCheck className="w-6 h-6 text-[#C8A44D]" />,
      desc: "Manifesting your highest potential by aligning daily actions with auspicious timing cycles."
    }
  ];

  const timelineEvents = [
    {
      year: "2010",
      title: "Foundational Practice Initiated",
      desc: "Began offering personalized numerology charts to clients in South Mumbai, focusing on name vibration tuning."
    },
    {
      year: "2015",
      title: "Relationship Coaching Integration",
      desc: "Expanded scope to include specialized dual-chart relationship coaching to resolve marriage friction."
    },
    {
      year: "2019",
      title: "Corporate & Business Rebranding Verticals",
      desc: "Launched strategic business name and brand logo numerology for industrialists and luxury retailers."
    },
    {
      year: "2023",
      title: "Global Studio Expansion in Kalina",
      desc: "Established state-of-the-art luxury consultation suite in Sashmira Centre, CST Road, Kalina."
    },
    {
      year: "Present",
      title: "700+ Consultations Delivered",
      desc: "Guiding Local & Overseas Clients via private online sessions and Mumbai studio visits."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#0C0C0D] min-h-screen text-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        

        {/* Dedicated Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-[#C8A44D]/20 pb-16">
          {/* Left: Founder Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel border-[#C8A44D]/40 p-2.5 gold-glow bg-[#121214] flex items-center justify-center">
              <img
                src="/assets/a.png"
                alt="Rrajesh Hinduja - Founder & Master Numerologist"
                className="w-full h-[450px] sm:h-[520px] object-contain object-top rounded-xl"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel-gold backdrop-blur-md border-[#C8A44D]/40 shadow-xl">
                <p className="font-serif text-lg font-bold text-gold-shimmer">
                  Rrajesh Hinduja
                </p>
                <p className="text-xs text-[#E8DFD1]/70 uppercase tracking-wider">
                  Numerologist • Relationship Coach • Educator • Story Teller
                </p>
              </div>
            </div>
          </div>

          {/* Right: Founder Bio & Signature */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet The Founder</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F8F5EF] leading-tight">
              Rrajesh Hinduja
            </h2>

            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A44D]">
              Numerologist • Relationship Coach • Educator • Story Teller
            </p>

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

            {/* Gold Signature Accent */}
            <div className="pt-6 border-t border-[#C8A44D]/20 flex items-center justify-between">
              <div>
                <span className="font-serif italic text-3xl text-gold-shimmer block">
                  Rrajesh Hinduja
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#E8DFD1]/50">
                  Founder & Master Numerologist
                </span>
              </div>
              <button
                onClick={() => setActivePage('booking')}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient hover:scale-105 transition-all shadow-lg"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-gold-shimmer mb-2">
              Our 4 Pillars of Philosophy
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#E8DFD1]/60">
              Numbers • Energy • Relationships • Destiny
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl border-[#C8A44D]/20 hover:border-[#C8A44D]/60 transition-all hover:-translate-y-1 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#121214] border border-[#C8A44D]/30 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F8F5EF]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#E8DFD1]/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Timeline */}
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-gold-shimmer">
              The Evolution of Excellence
            </h2>
          </div>

          <div className="relative border-l-2 border-[#C8A44D]/30 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-10">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#C8A44D] border-4 border-[#0C0C0D] group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold text-[#C8A44D] uppercase tracking-wider block mb-1">
                  {item.year}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#F8F5EF] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E8DFD1]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-panel p-10 rounded-2xl border-[#C8A44D]/30">
          <h3 className="font-serif text-2xl font-bold text-[#F8F5EF] mb-3">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-xs text-[#E8DFD1]/70 mb-6">
            Book a session at our Mumbai studio or via online Zoom consultation.
          </p>
          <button
            onClick={() => setActivePage('booking')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:scale-105 transition-all shadow-xl"
          >
            Schedule Consultation Now
          </button>
        </div>

      </div>
    </div>
  );
}
