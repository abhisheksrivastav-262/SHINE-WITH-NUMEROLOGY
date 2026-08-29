import React, { useState } from 'react';
import { Sparkles, Phone, MapPin, Mail, Send, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { BRAND_DETAILS, SERVICES } from '../utils/contentData';
import { sendWhatsAppEnquiry } from '../utils/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Personal Numerology Reading',
    date: '',
    time: '11:00 AM IST',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    sendWhatsAppEnquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      date: formData.date || 'Flexible / As per schedule',
      time: formData.time || '11:00 AM IST',
      message: formData.message || 'I would like to inquire about a consultation.'
    });
  };

  return (
    <div className="pt-24 pb-20 bg-[#0C0C0D] min-h-screen text-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-gold-shimmer">
            Contact Luxury Studio
          </h1>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Visit our Kalina Mumbai office or reach out to schedule your worldwide Zoom consultation.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Office Visual & Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            {/* Luxury Office Image */}
            <div className="glass-panel p-2.5 rounded-3xl border-[#C8A44D]/30 gold-glow">
              <img
                src="/assets/office_ambient.jpg"
                alt="Shine With Numerology Studio - Sashmira Centre, Kalina Mumbai"
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>

            {/* Contact Details Card */}
            <div className="glass-panel p-8 rounded-3xl border-[#C8A44D]/20 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#F8F5EF] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8A44D]" />
                Mumbai Studio Details
              </h2>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#121214] border border-[#C8A44D]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#C8A44D]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#E8DFD1]/50 font-semibold">
                      Direct Phone & WhatsApp
                    </span>
                    <a href={`tel:${BRAND_DETAILS.phone}`} className="text-base font-bold text-[#C8A44D] hover:underline">
                      {BRAND_DETAILS.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#121214] border border-[#C8A44D]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#C8A44D]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#E8DFD1]/50 font-semibold">
                      Studio Address
                    </span>
                    <p className="text-xs text-[#E8DFD1]/90 leading-relaxed pt-0.5">
                      {BRAND_DETAILS.address}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#121214] border border-[#C8A44D]/30 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#C8A44D]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#E8DFD1]/50 font-semibold">
                      Consultation Hours
                    </span>
                    <p className="text-xs text-[#E8DFD1]/90 leading-relaxed pt-0.5">
                      Mon – Sat: 10:00 AM – 7:00 PM IST (Prior Appointment Only)
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#121214] border border-[#C8A44D]/30 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current text-[#C8A44D]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#E8DFD1]/50 font-semibold">
                      Facebook Page
                    </span>
                    <a
                      href={BRAND_DETAILS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#C8A44D] font-medium hover:underline block pt-0.5"
                    >
                      facebook.com/share/1Dny3Fj8iF
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden glass-panel border-[#C8A44D]/30 h-64">
              <iframe
                title="Shine With Numerology Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835153245464!2d72.8687313!3d19.0709605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f0e5b7b9f3%3A0x6b2b62d8cfc52f6f!2sCST%20Rd%2C%20Kalina%2C%20Santacruz%20East%2C%20Mumbai%2C%20Maharashtra%20400055!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border-[#C8A44D]/30 gold-glow space-y-6 flex flex-col justify-between">
            <div>
              <div className="mb-6 space-y-2">
                <h2 className="font-serif text-3xl font-bold text-[#F8F5EF]">
                  Send Inquiry via WhatsApp
                </h2>
                <p className="text-xs text-[#E8DFD1]/70">
                  Submitting will automatically open WhatsApp with your formatted consultation details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                    Interested Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D] text-sm"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#121214] text-[#F8F5EF]">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D] text-sm"
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
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                    Your Message / Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share any specific details or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:bg-gold-gradient-hover transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Details via WhatsApp</span>
                </button>
              </form>
            </div>

            <div className="pt-4 border-t border-[#C8A44D]/15 text-center text-[11px] text-[#E8DFD1]/50">
              📲 Clicking submit will open WhatsApp with your formatted enquiry.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
