import React, { useState } from 'react';
import { Sparkles, Calculator, RotateCcw, Calendar, User, ArrowRight, ShieldAlert, Star } from 'lucide-react';
import {
  calculateLifePath,
  calculateExpression,
  calculateSoulUrge,
  calculatePersonality,
  NUMBER_INTERPRETATIONS
} from '../utils/numerologyEngine';

export default function CalculatorPage({ setActivePage }) {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!fullName || !dob) return;

    setIsCalculating(true);
    setResults(null);

    setTimeout(() => {
      const lifePath = calculateLifePath(dob);
      const expression = calculateExpression(fullName);
      const soulUrge = calculateSoulUrge(fullName);
      const personality = calculatePersonality(fullName);

      setResults({
        lifePath,
        expression,
        soulUrge,
        personality
      });
      setIsCalculating(false);
    }, 800);
  };

  const handleReset = () => {
    setFullName('');
    setDob('');
    setResults(null);
  };

  return (
    <div className="pt-24 pb-20 bg-[#0C0C0D] min-h-screen text-[#F8F5EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Sacred Tool</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-gold-shimmer">
            Pythagorean Numerology Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Enter your Full Name (as per birth record) and Date of Birth to decode your Life Path, Destiny, Soul Urge, and Personality vibrations instantly.
          </p>
        </div>

        {/* Input Form & Wheel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Form Side */}
          <div className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border-[#C8A44D]/30 gold-glow space-y-6">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Birth Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rrajesh Hinduja"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] focus:ring-1 focus:ring-[#C8A44D] transition-all text-sm"
                />
                <span className="text-[11px] text-[#E8DFD1]/50 mt-1 block">
                  Use your full original name for accurate letter mapping.
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D] focus:ring-1 focus:ring-[#C8A44D] transition-all text-sm"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="flex-1 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:bg-gold-gradient-hover transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isCalculating ? (
                    <span className="animate-pulse">Decoding Frequencies...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Calculate My Blueprint</span>
                    </>
                  )}
                </button>

                {results && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-4 rounded-full glass-panel hover:bg-white/10 text-[#E8DFD1]"
                    title="Reset Calculation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Animated SVG Sacred Geometry Wheel */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 text-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer Spinning Sacred Geometry SVG */}
              <svg
                viewBox="0 0 200 200"
                className={`w-full h-full text-[#C8A44D]/40 ${
                  isCalculating ? 'animate-spin' : 'animate-spin-slow'
                }`}
              >
                <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="100,10 180,150 20,150" fill="none" stroke="currentColor" strokeWidth="1" />
                <polygon points="100,190 180,50 20,50" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="35" fill="none" stroke="#C8A44D" strokeWidth="1" />
              </svg>

              {/* Center Glow Core */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full glass-panel-gold border-[#C8A44D] flex items-center justify-center shadow-[0_0_30px_rgba(200,164,77,0.5)]">
                  {results ? (
                    <span className="font-serif text-3xl font-bold text-gold-shimmer animate-bounce">
                      {results.lifePath}
                    </span>
                  ) : (
                    <Sparkles className="w-8 h-8 text-[#C8A44D] animate-pulse" />
                  )}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#C8A44D] mt-2 font-bold">
                  {results ? 'Life Path Number' : 'Sacred Wheel'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* RESULTS SECTION */}
        {results && (
          <div className="space-y-12 animate-fade-up pt-8 border-t border-[#C8A44D]/20">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-gold-shimmer mb-2">
                Your Numerological Blueprint
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#E8DFD1]/60">
                Pythagorean Calculations for {fullName}
              </p>
            </div>

            {/* 4 Summary Score Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Life Path Number', val: results.lifePath, sub: 'Core Purpose' },
                { label: 'Destiny / Expression', val: results.expression, sub: 'Talents & Goals' },
                { label: 'Soul Urge Number', val: results.soulUrge, sub: 'Heart Desire' },
                { label: 'Personality Number', val: results.personality, sub: 'Outer Impression' }
              ].map((card, idx) => (
                <div key={idx} className="glass-panel-gold p-6 rounded-2xl border-[#C8A44D]/40 text-center space-y-2 gold-glow">
                  <span className="text-[11px] uppercase tracking-widest text-[#E8DFD1]/70 block font-semibold">
                    {card.label}
                  </span>
                  <div className="font-serif text-4xl font-bold text-gold-shimmer">
                    {card.val}
                  </div>
                  <span className="text-[10px] text-[#C8A44D] uppercase tracking-wider block">
                    {card.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Deep Interpretation Cards */}
            <div className="space-y-8">
              {[
                { label: 'Life Path Number Interpretation', num: results.lifePath },
                { label: 'Destiny / Expression Interpretation', num: results.expression },
                { label: 'Soul Urge Interpretation', num: results.soulUrge }
              ].map((item, idx) => {
                const info = NUMBER_INTERPRETATIONS[item.num] || NUMBER_INTERPRETATIONS[1];
                return (
                  <div key={idx} className="glass-panel p-8 sm:p-10 rounded-3xl border-[#C8A44D]/30 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#C8A44D]/20 pb-4 gap-4">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#C8A44D] font-bold block mb-1">
                          {item.label} — Number {item.num}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-[#F8F5EF]">
                          {info.title}
                        </h3>
                      </div>
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#121214] border border-[#C8A44D]/40 text-[#C8A44D] shrink-0">
                        {info.rulingPlanet}
                      </span>
                    </div>

                    <p className="text-sm text-[#E8DFD1]/90 leading-relaxed font-light">
                      {info.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase text-[#C8A44D]">Key Strengths:</span>
                        <div className="flex flex-wrap gap-2">
                          {info.strengths.map((str, i) => (
                            <span key={i} className="px-3 py-1 rounded-md bg-[#121214] text-xs text-[#E8DFD1]/80 border border-[#C8A44D]/20">
                              ✓ {str}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase text-[#C8A44D]">Potential Challenges:</span>
                        <div className="flex flex-wrap gap-2">
                          {info.challenges.map((chal, i) => (
                            <span key={i} className="px-3 py-1 rounded-md bg-[#121214] text-xs text-[#E8DFD1]/70 border border-[#C8A44D]/10">
                              ! {chal}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4 border-t border-[#C8A44D]/15 text-xs text-[#E8DFD1]/80">
                      <div>
                        <span className="text-[#C8A44D] font-bold">Lucky Colors: </span>
                        {info.luckyColors.join(', ')}
                      </div>
                      <div>
                        <span className="text-[#C8A44D] font-bold">Lucky Days: </span>
                        {info.luckyDays.join(', ')}
                      </div>
                      <div>
                        <span className="text-[#C8A44D] font-bold">Recommended Career Vocation: </span>
                        {info.careerPath}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA for Full In-Depth Consultation */}
            <div className="text-center glass-panel-gold p-10 rounded-3xl border-[#C8A44D]/40 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-gold-shimmer">
                Want a Complete Name Correction & Personal Predictive Cycle?
              </h3>
              <p className="text-xs text-[#E8DFD1]/80 max-w-xl mx-auto">
                Automated calculators provide baseline insights. Rrajesh Hinduja provides personalized, human synthesis of compound numbers, name tuning, and custom remedy recommendations.
              </p>
              <button
                onClick={() => setActivePage('booking')}
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:scale-105 transition-all shadow-xl"
              >
                Book Private In-Depth Session
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
