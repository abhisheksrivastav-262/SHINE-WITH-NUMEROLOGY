import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { SERVICES } from '../utils/contentData';
import { sendWhatsAppEnquiry } from '../utils/whatsapp';

export default function QuickEnquiryModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Personal Numerology Reading',
    date: '',
    time: '11:00 AM IST',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    sendWhatsAppEnquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      date: formData.date || 'As per availability',
      time: formData.time || '11:00 AM IST',
      message: formData.message || 'Quick consultation inquiry via popup modal.'
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel-gold max-w-lg w-full rounded-3xl border-[#C8A44D] p-6 sm:p-8 space-y-6 shadow-2xl relative animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel hover:bg-white/10 text-[#E8DFD1]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-[10px] uppercase tracking-widest text-[#C8A44D]">
            <Sparkles className="w-3 h-3" />
            <span>Instant WhatsApp Enquiry</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-gold-shimmer">
            Book Consultation
          </h2>
          <p className="text-xs text-[#E8DFD1]/70">
            Submit your details below to instantly open WhatsApp chat.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D]"
              />
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D]"
              />
            </div>
          </div>

          <div>
            <label className="block uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
              Select Service
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#121214] text-[#F8F5EF]">
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D]"
              />
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                Preferred Time
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D]"
              >
                <option value="10:00 AM IST">10:00 AM IST</option>
                <option value="11:30 AM IST">11:30 AM IST</option>
                <option value="02:00 PM IST">02:00 PM IST</option>
                <option value="03:30 PM IST">03:30 PM IST</option>
                <option value="05:00 PM IST">05:00 PM IST</option>
                <option value="06:30 PM IST">06:30 PM IST</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
              Message / Notes
            </label>
            <textarea
              rows={2}
              placeholder="Your specific inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send to WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
