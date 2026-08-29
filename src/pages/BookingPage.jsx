import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, CheckCircle2, User, Phone, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, BRAND_DETAILS } from '../utils/contentData';
import { sendWhatsAppEnquiry } from '../utils/whatsapp';

export default function BookingPage({ selectedService, setSelectedService }) {
  const [step, setStep] = useState(1);

  // Default to first service or pre-selected service
  const [activeService, setActiveService] = useState(selectedService || SERVICES[0]);
  const [mode, setMode] = useState('In-Person Mumbai Studio');
  const [bookingDate, setBookingDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM IST');
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    notes: ''
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeSlots = [
    '10:00 AM IST',
    '11:30 AM IST',
    '02:00 PM IST',
    '03:30 PM IST',
    '05:00 PM IST',
    '06:30 PM IST'
  ];

  const handleServiceSelect = (service) => {
    setActiveService(service);
    if (setSelectedService) setSelectedService(service);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.phone || !userDetails.email) return;

    const refId = 'SWN-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refId);
    setIsConfirmed(true);

    // Send formatted details directly to WhatsApp
    const fullMessage = userDetails.notes 
      ? `[DOB: ${userDetails.dob}] ${userDetails.notes}` 
      : `[DOB: ${userDetails.dob}] Mode: ${mode}`;

    sendWhatsAppEnquiry({
      name: userDetails.name,
      phone: userDetails.phone,
      email: userDetails.email,
      service: activeService.title,
      date: bookingDate || 'As per availability',
      time: timeSlot,
      message: fullMessage
    });

    // Trigger Gold Confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C8A44D', '#FFF0CA', '#E8DFD1', '#D4AF37']
      });
    } catch (err) {
      // fallback
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#0C0C0D] min-h-screen text-[#F8F5EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D]">
            <Calendar className="w-3.5 h-3.5" />
            <span>VIP Appointment Booking</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-gold-shimmer">
            Reserve Your Session
          </h1>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Follow the 4-step wizard below to secure your private consultation slot.
          </p>
        </div>

        {/* Step Indicator Bar */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#C8A44D]/20 -translate-y-1/2 -z-0" />
            
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Mode' },
              { num: 3, label: 'Date & Time' },
              { num: 4, label: 'Details' }
            ].map((s) => (
              <div
                key={s.num}
                onClick={() => { if (step > s.num) setStep(s.num); }}
                className={`relative z-10 flex flex-col items-center gap-2 cursor-pointer ${
                  step === s.num ? 'scale-110' : ''
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    step >= s.num
                      ? 'bg-gold-gradient text-black shadow-[0_0_15px_rgba(200,164,77,0.5)]'
                      : 'bg-[#121214] border border-[#C8A44D]/30 text-[#E8DFD1]/50'
                  }`}
                >
                  {s.num}
                </div>
                <span
                  className={`text-[11px] font-medium uppercase tracking-wider hidden sm:block ${
                    step >= s.num ? 'text-[#C8A44D]' : 'text-[#E8DFD1]/40'
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Main Layout (Wizard + Live Summary Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Wizard Steps */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border-[#C8A44D]/30 gold-glow">
            
            {/* STEP 1: SELECT SERVICE */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-up">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#F8F5EF] mb-1">
                    Step 1: Choose Consultation Service
                  </h2>
                  <p className="text-xs text-[#E8DFD1]/70">
                    Select the vertical aligned with your current life priorities.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => handleServiceSelect(s)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                        activeService.id === s.id
                          ? 'glass-panel-gold border-[#C8A44D] shadow-lg scale-[1.02]'
                          : 'bg-[#121214] border-[#C8A44D]/20 hover:border-[#C8A44D]/50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] uppercase font-bold text-[#C8A44D] tracking-wider">
                          {s.duration}
                        </span>
                        <span className="text-xs font-bold text-[#F8F5EF] bg-[#C8A44D]/20 px-2 py-0.5 rounded border border-[#C8A44D]/30">
                          {s.fee}
                        </span>
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#F8F5EF] mb-1">
                        {s.title}
                      </h3>
                      <p className="text-[11px] text-[#E8DFD1]/70 line-clamp-2">
                        {s.shortDesc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:scale-105 transition-all shadow-xl flex items-center gap-2"
                  >
                    <span>Continue to Step 2</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE CONSULTATION MODE */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-up">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#F8F5EF] mb-1">
                    Step 2: Select Consultation Venue
                  </h2>
                  <p className="text-xs text-[#E8DFD1]/70">
                    Experience private 1-on-1 guidance at our Mumbai studio or online.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div
                    onClick={() => setMode('In-Person Mumbai Studio')}
                    className={`p-6 rounded-2xl cursor-pointer transition-all border space-y-3 ${
                      mode === 'In-Person Mumbai Studio'
                        ? 'glass-panel-gold border-[#C8A44D] shadow-lg scale-[1.02]'
                        : 'bg-[#121214] border-[#C8A44D]/20 hover:border-[#C8A44D]/50'
                    }`}
                  >
                    <MapPin className="w-8 h-8 text-[#C8A44D]" />
                    <h3 className="font-serif text-lg font-bold text-[#F8F5EF]">
                      In-Person Studio Session
                    </h3>
                    <p className="text-xs text-[#E8DFD1]/70 leading-relaxed">
                      Sashmira Centre, CST Road, Kalina, Mumbai. Private tea & serene ambiance.
                    </p>
                  </div>

                  <div
                    onClick={() => setMode('Worldwide Online Zoom Call')}
                    className={`p-6 rounded-2xl cursor-pointer transition-all border space-y-3 ${
                      mode === 'Worldwide Online Zoom Call'
                        ? 'glass-panel-gold border-[#C8A44D] shadow-lg scale-[1.02]'
                        : 'bg-[#121214] border-[#C8A44D]/20 hover:border-[#C8A44D]/50'
                    }`}
                  >
                    <Clock className="w-8 h-8 text-[#C8A44D]" />
                    <h3 className="font-serif text-lg font-bold text-[#F8F5EF]">
                      Worldwide Online Zoom Call
                    </h3>
                    <p className="text-xs text-[#E8DFD1]/70 leading-relaxed">
                      High-definition video session with screen recording & digital chart delivery.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8DFD1] glass-panel hover:bg-white/10 flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    onClick={() => setStep(3)}
                    className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:scale-105 transition-all shadow-xl flex items-center gap-2"
                  >
                    <span>Continue to Step 3</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: DATE & TIME SLOT */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-up">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#F8F5EF] mb-1">
                    Step 3: Pick Date & Time Slot
                  </h2>
                  <p className="text-xs text-[#E8DFD1]/70">
                    Select your preferred consultation appointment day.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-2">
                      Available Time Slots (IST)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`py-3 px-4 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                            timeSlot === slot
                              ? 'bg-gold-gradient text-black border-[#C8A44D] shadow-md font-bold'
                              : 'bg-[#121214] text-[#E8DFD1]/80 border-[#C8A44D]/20 hover:border-[#C8A44D]/50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8DFD1] glass-panel hover:bg-white/10 flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    onClick={() => {
                      if (!bookingDate) {
                        alert('Please select a valid date first.');
                        return;
                      }
                      setStep(4);
                    }}
                    className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:scale-105 transition-all shadow-xl flex items-center gap-2"
                  >
                    <span>Final Step (Details)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: ENTER DETAILS & CONFIRM */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-up">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#F8F5EF] mb-1">
                    Step 4: Client Contact & Birth Record
                  </h2>
                  <p className="text-xs text-[#E8DFD1]/70">
                    Provide your birth details for prior chart calculation.
                  </p>
                </div>

                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                      Full Original Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="As per birth certificate"
                      value={userDetails.name}
                      onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={userDetails.phone}
                        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={userDetails.dob}
                        onChange={(e) => setUserDetails({ ...userDetails, dob: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] focus:outline-none focus:border-[#C8A44D] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#C8A44D] mb-1">
                      Specific Areas / Questions to Focus On
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Relationship marriage timing, business brand expansion..."
                      value={userDetails.notes}
                      onChange={(e) => setUserDetails({ ...userDetails, notes: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-[#F8F5EF] placeholder-[#E8DFD1]/40 focus:outline-none focus:border-[#C8A44D] text-sm"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E8DFD1] glass-panel hover:bg-white/10 flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:bg-gold-gradient-hover transition-all shadow-2xl gold-glow hover:scale-105 flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Confirm & Lock Booking</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Live Luxury Booking Summary Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 glass-panel-gold p-8 rounded-3xl border-[#C8A44D]/40 space-y-6 shadow-2xl gold-glow">
              <div className="flex items-center justify-between border-b border-[#C8A44D]/30 pb-4">
                <h3 className="font-serif text-xl font-bold text-gold-shimmer">
                  Booking Summary
                </h3>
                <Sparkles className="w-5 h-5 text-[#C8A44D]" />
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[#E8DFD1]/60 block font-medium">Selected Service</span>
                  <span className="font-serif text-base font-bold text-[#F8F5EF] block mt-0.5">
                    {activeService.title}
                  </span>
                  <span className="text-[#C8A44D] text-[11px] font-semibold">
                    {activeService.duration} Duration
                  </span>
                </div>

                <div className="border-t border-[#C8A44D]/15 pt-3">
                  <span className="text-[#E8DFD1]/60 block font-medium">Mode</span>
                  <span className="font-semibold text-[#F8F5EF] block mt-0.5">
                    {mode}
                  </span>
                </div>

                <div className="border-t border-[#C8A44D]/15 pt-3">
                  <span className="text-[#E8DFD1]/60 block font-medium">Date & Time</span>
                  <span className="font-semibold text-[#F8F5EF] block mt-0.5">
                    {bookingDate || 'Not selected yet'} • {timeSlot}
                  </span>
                </div>

                <div className="border-t border-[#C8A44D]/30 pt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#F8F5EF]">Consultation Fee</span>
                  <span className="font-serif text-xl font-bold text-gold-shimmer">
                    {activeService.fee}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-[#C8A44D]/20 text-[11px] text-[#E8DFD1]/70 leading-relaxed">
                📍 Kalina Studio: C-102, Sashmira Centre, CST Road, Mumbai – 400055
              </div>
            </div>
          </div>

        </div>

        {/* GOLD CONFIRMATION MODAL */}
        {isConfirmed && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass-panel-gold max-w-lg w-full rounded-3xl border-[#C8A44D] p-8 sm:p-10 text-center space-y-6 shadow-2xl gold-glow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold-gradient mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-black" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C8A44D] font-bold block">
                  Reference ID: {bookingRef}
                </span>
                <h2 className="font-serif text-3xl font-bold text-gold-shimmer">
                  Consultation Reserved!
                </h2>
                <p className="text-xs text-[#E8DFD1]/90 leading-relaxed font-light">
                  Thank you, <strong className="text-white">{userDetails.name}</strong>. Your session for <strong className="text-[#C8A44D]">{activeService.title}</strong> on <strong className="text-white">{bookingDate} ({timeSlot})</strong> has been logged.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-[#C8A44D]/30 text-xs text-left space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#E8DFD1]/60">Mode:</span>
                  <span className="text-white font-semibold">{mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#E8DFD1]/60">Studio Contact:</span>
                  <span className="text-[#C8A44D] font-semibold">{BRAND_DETAILS.phone}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsConfirmed(false);
                  setStep(1);
                }}
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient shadow-xl"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
