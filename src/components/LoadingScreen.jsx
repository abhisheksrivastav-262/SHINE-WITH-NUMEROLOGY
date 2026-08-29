import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0D] flex flex-col items-center justify-center transition-opacity duration-700">
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer Rotating Sacred Geometry Ring */}
        <div className="w-24 h-24 border border-[#C8A44D]/30 rounded-full animate-spin-slow" />
        <div className="w-16 h-16 border border-[#C8A44D]/60 rotate-45 absolute" />
        <Sparkles className="w-8 h-8 text-[#C8A44D] absolute animate-pulse" />
      </div>

      <div className="text-center">
        <h2 className="font-serif text-2xl tracking-[0.25em] text-gold-shimmer font-bold mb-2 uppercase">
          Shine With Numerology
        </h2>
        <p className="text-xs uppercase tracking-[0.3em] text-[#E8DFD1]/60">
          Mumbai • Worldwide Consultations
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-0.5 bg-[#1F1E24] mt-8 overflow-hidden rounded-full">
        <div className="h-full bg-gradient-to-r from-[#C8A44D] to-[#FFF0CA] animate-[shimmer_1.5s_infinite]" />
      </div>
    </div>
  );
}
