import React, { useState } from 'react';
import { Sparkles, Star, Filter, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SUCCESS_STORIES, TESTIMONIALS } from '../utils/contentData';

export default function StoriesPage({ setActivePage }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Relationship Coaching', 'Business Numerology', 'Career & Life Guidance'];

  const filteredStories = filter === 'All'
    ? SUCCESS_STORIES
    : SUCCESS_STORIES.filter(s => s.category.toLowerCase().includes(filter.toLowerCase().split(' ')[0]));

  return (
    <div className="pt-24 pb-20 bg-[#0C0C0D] min-h-screen text-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Real-World Impact</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-gold-shimmer">
            Client Success Stories
          </h1>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Read inspiring Before & After transformations across marriage reconciliation, corporate rebranding, and life path shifts.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                filter === cat
                  ? 'bg-gold-gradient text-black border-[#C8A44D] shadow-lg scale-105'
                  : 'glass-panel text-[#E8DFD1]/80 hover:text-white border-[#C8A44D]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Before & After Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="rounded-3xl glass-panel border-[#C8A44D]/30 overflow-hidden hover:border-[#C8A44D]/60 transition-all duration-500 gold-glow-hover flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-black/70 text-[#C8A44D] border border-[#C8A44D]/40 backdrop-blur-md">
                    {story.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#C8A44D]/15 pb-3">
                    <h3 className="font-serif text-lg font-bold text-[#F8F5EF]">
                      {story.clientName}
                    </h3>
                    <span className="text-xs text-[#E8DFD1]/50">
                      {story.location}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-semibold text-[#C8A44D]">
                    {story.title}
                  </h4>

                  {/* Before / After Blocks */}
                  <div className="space-y-3 pt-1">
                    <div className="p-3 rounded-xl bg-[#121214] border-l-2 border-red-500/60 text-xs">
                      <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">
                        Before Consultation:
                      </span>
                      <p className="text-[#E8DFD1]/70 leading-relaxed">
                        {story.beforeState}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#121214] border-l-2 border-[#C8A44D] text-xs">
                      <span className="text-[10px] uppercase font-bold text-[#C8A44D] block mb-1">
                        After Consultation Result:
                      </span>
                      <p className="text-[#E8DFD1]/90 leading-relaxed">
                        {story.afterState}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#E8DFD1]/70 leading-relaxed pt-2 line-clamp-4 italic">
                    "{story.story}"
                  </p>
                </div>
              </div>

              {/* Impact Metrics Footer */}
              <div className="p-6 pt-0 border-t border-[#C8A44D]/15 mt-4">
                <div className="flex flex-wrap gap-2 pt-3">
                  {story.impactMetrics.map((metric, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#C8A44D]/10 border border-[#C8A44D]/30 text-[10px] font-semibold text-[#C8A44D]">
                      ✓ {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Long Testimonial Grid Section */}
        <div className="space-y-8 pt-10">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-gold-shimmer">
              More Verified Client Voices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-panel p-8 rounded-2xl border-[#C8A44D]/20 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#C8A44D] shadow-md"
                  />
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#F8F5EF]">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#E8DFD1]/60">
                      {t.title} • {t.location}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#E8DFD1]/80 leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center justify-between border-t border-[#C8A44D]/15 pt-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A44D] font-bold">
                    Service: {t.service}
                  </span>
                  <div className="flex gap-1 text-[#C8A44D]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-panel-gold p-10 rounded-2xl border-[#C8A44D]/30 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-gold-shimmer">
            Write Your Own Success Story
          </h3>
          <p className="text-xs text-[#E8DFD1]/80 max-w-lg mx-auto">
            Book a confidential 1-on-1 session to align your numbers with love, health, and wealth.
          </p>
          <button
            onClick={() => setActivePage('booking')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:scale-105 transition-all shadow-xl"
          >
            Start Your Journey Today
          </button>
        </div>

      </div>
    </div>
  );
}
