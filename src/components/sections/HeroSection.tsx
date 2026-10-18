'use client';
import { Phone, Truck, ChevronDown, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

export default function HeroSection() {
  const waMsg = WHATSAPP_URL(WHATSAPP_MESSAGE());

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #091630 0%, #0f2044 45%, #1a1a2e 100%)' }}
    >
      {/* Background industrial motif */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 40px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative highway line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-orange via-orange-light to-orange" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 animate-fade-up">
          {/* Location pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6">
            <MapPin size={12} className="text-orange flex-shrink-0" />
            <span className="text-gray-300 text-[11px] sm:text-xs font-semibold tracking-wide truncate">
              Panethi, Aligarh, Uttar Pradesh
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-4">
            OM TRANSPORT
            <span className="block text-orange mt-1">SERVICE</span>
            <span className="block text-xl sm:text-3xl font-bold text-gray-300 mt-2">
              & Commission Agent
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8">
            Reliable transportation solutions for{' '}
            <strong className="text-white">Full Load</strong>,{' '}
            <strong className="text-white">Part Load</strong> &{' '}
            <strong className="text-white">Special Vehicle Requirements</strong>.
            Operating from Aligarh — providing commercial vehicle connectivity across India.
          </p>

          {/* Vehicle size pills */}
          <div className="mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
              Available Vehicles:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {COMPANY.vehicles.map((v) => (
                <a
                  key={v}
                  href="/#vehicles"
                  className="bg-white/10 hover:bg-orange border border-white/20 hover:border-orange text-gray-200 hover:text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all"
                >
                  {v}
                </a>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
            <a
              href="/#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark active:bg-orange-dark text-white font-bold px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-orange/30"
            >
              <Truck size={18} /> Request a Vehicle
            </a>
            <a
              href={waMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all"
            >
              💬 WhatsApp Us
            </a>
            <a
              href={`tel:${COMPANY.phone1}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/30 text-white font-bold px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Key Value Indicators */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 pt-6 sm:pt-8 border-t border-white/10 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-orange flex-shrink-0" />
              <span className="text-gray-300 font-medium">24/7 Enquiry</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-orange flex-shrink-0" />
              <span className="text-gray-300 font-medium">All India Network</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-orange flex-shrink-0" />
              <span className="text-gray-300 font-medium">GST Registered</span>
            </div>
          </div>
        </div>

        {/* Right Column (Hero Quick Card) */}
        <div className="lg:col-span-5 hidden lg:block animate-fade-in">
          <div className="bg-white/5 border border-white/15 rounded-3xl p-7 xl:p-8 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white text-lg font-bold">Quick Vehicle Enquiry</h2>
              <span className="text-[10px] font-bold text-orange uppercase tracking-wider bg-orange/10 border border-orange/20 px-2 py-0.5 rounded">
                Direct Dispatch
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="text-gray-300 font-semibold block mb-1">Pickup Location</label>
                <input
                  type="text"
                  placeholder="e.g. Panethi / Aligarh / Hathras"
                  className="w-full bg-navy border border-white/20 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-orange"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold block mb-1">Delivery Destination</label>
                <input
                  type="text"
                  placeholder="e.g. Kanpur / Agra / Delhi / Outstation"
                  className="w-full bg-navy border border-white/20 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-orange"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 font-semibold block mb-1">Vehicle Size</label>
                  <select className="w-full bg-navy border border-white/20 rounded-xl px-2.5 py-2.5 text-gray-200 text-xs focus:outline-none focus:border-orange">
                    <option value="">Any Vehicle</option>
                    {COMPANY.vehicles.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 font-semibold block mb-1">Load Type</label>
                  <select className="w-full bg-navy border border-white/20 rounded-xl px-2.5 py-2.5 text-gray-200 text-xs focus:outline-none focus:border-orange">
                    <option value="full">Full Load (FTL)</option>
                    <option value="part">Part Load (PTL)</option>
                    <option value="special">Special Vehicle</option>
                  </select>
                </div>
              </div>

              <a
                href="/#quote"
                className="w-full inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold py-3.5 rounded-xl text-xs transition-colors shadow-lg mt-2"
              >
                Continue with Full Details <ArrowRight size={14} />
              </a>

              <p className="text-center text-gray-400 text-[11px] pt-1">
                Direct phone booking: <a href={`tel:${COMPANY.phone1}`} className="text-orange font-bold hover:underline">{COMPANY.phone1Display}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle indicator for desktop */}
      <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center pointer-events-none opacity-50">
        <ChevronDown size={18} className="text-white" />
      </div>
    </section>
  );
}
