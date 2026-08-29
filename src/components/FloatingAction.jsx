import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BRAND_DETAILS } from '../utils/contentData';

export default function FloatingAction() {
  const whatsappUrl = `https://wa.me/${BRAND_DETAILS.whatsapp}?text=${encodeURIComponent(
    'Hello Shine With Numerology, I would like to inquire about booking a consultation.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Call Quick Action */}
      <a
        href={`tel:${BRAND_DETAILS.phone}`}
        className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#E8DFD1] hover:text-[#C8A44D] hover:border-[#C8A44D] transition-all duration-300 shadow-lg gold-glow-hover group"
        title="Call +91 98702 26260"
      >
        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </a>

      {/* WhatsApp Quick Chat */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
