import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../utils/contentData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0C0C0D] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarify Your Doubts</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-shimmer mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#E8DFD1]/70 max-w-xl mx-auto">
            Everything you need to know about numerology consultations, name corrections, and session scheduling.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-300 ${
                openIndex === idx
                  ? 'glass-panel-gold border-[#C8A44D]/50 shadow-xl'
                  : 'glass-panel hover:border-[#C8A44D]/30'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-base sm:text-lg font-medium text-[#F8F5EF] pr-4">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border border-[#C8A44D]/30 shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 bg-[#C8A44D] text-black' : 'text-[#C8A44D]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 text-sm text-[#E8DFD1]/80 leading-relaxed border-t border-[#C8A44D]/15">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
