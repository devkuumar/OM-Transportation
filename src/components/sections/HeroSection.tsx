'use client';
import { Phone, Truck, ChevronDown, MapPin, Clock } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

export default function HeroSection() {
  const waMsg = WHATSAPP_URL(WHATSAPP_MESSAGE());

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #091630 0%, #0f2044 40%, #1a1a2e 100%)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange via-orange-light to-orange" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin size={13} className="text-orange" />
            <span className="text-gray-300 text-xs font-medium tracking-wide">Panethi, Aligarh, Uttar Pradesh</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
            OM TRANSPORT
            <span className="block text-orange mt-1">SERVICE</span>
            <span className="block text-2xl sm:text-3xl font-semibold text-gray-300 mt-2">
              & Commission Agent
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
            Reliable transportation solutions for{' '}
            <strong className="text-white">Full Load</strong>,{' '}
            <strong className="text-white">Part Load</strong> &{' '}
            <strong className="text-white">Special Vehicle Requirements</strong>.
            Based in Aligarh — serving customers across India.
          </p>

          {/* Vehicle badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {COMPANY.vehicles.map((v) => (
              <span
                key={v}
                className="bg-white/10 border border-white/20 text-gray-200 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-all cursor-default"
              >
                {v}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/#quote"
              className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-orange/30"
            >
              <Truck size={18} /> Request a Vehicle
            </a>
            <a
              href={waMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all"
            >
              💬 WhatsApp Us
            </a>
            <a
              href={`tel:${COMPANY.phone1}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Quick info strip */}
          <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-orange" />
              <span className="text-gray-400 text-sm">24-Hour Enquiry</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-orange" />
              <span className="text-gray-400 text-sm">All India Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={15} className="text-orange" />
              <span className="text-gray-400 text-sm">Full & Part Load</span>
            </div>
          </div>
        </div>

        {/* Right — quick enquiry card */}
        <div className="hidden lg:block animate-fade-in">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-white text-xl font-bold mb-6">Quick Transport Enquiry</h2>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-xs font-medium block mb-1">From (Pickup Location)</label>
                <input
                  type="text"
                  placeholder="Enter pickup city / area"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange transition-colors"
                  readOnly
                  onFocus={(e) => { e.currentTarget.readOnly = false; }}
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs font-medium block mb-1">To (Delivery Location)</label>
                <input
                  type="text"
                  placeholder="Enter delivery city / area"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange transition-colors"
                  readOnly
                  onFocus={(e) => { e.currentTarget.readOnly = false; }}
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs font-medium block mb-1">Vehicle Required</label>
                <select className="w-full bg-[#1a3561] border border-white/20 rounded-lg px-4 py-2.5 text-gray-300 text-sm focus:outline-none focus:border-orange transition-colors">
                  <option value="">Select vehicle size</option>
                  {COMPANY.vehicles.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="text-gray-400 text-xs font-medium block mb-1">Load Type</label>
                <select className="w-full bg-[#1a3561] border border-white/20 rounded-lg px-4 py-2.5 text-gray-300 text-sm focus:outline-none focus:border-orange transition-colors">
                  <option value="">Select load type</option>
                  <option value="full">Full Load</option>
                  <option value="part">Part Load</option>
                  <option value="special">Special Vehicle</option>
                </select>
              </div>
              <a
                href="/#quote"
                className="block w-full bg-orange hover:bg-orange-dark text-white text-center font-bold py-3 rounded-xl transition-colors"
              >
                Get Transport Quote
              </a>
              <p className="text-center text-gray-500 text-xs">
                Or call <a href={`tel:${COMPANY.phone1}`} className="text-orange">{COMPANY.phone1Display}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown size={20} className="text-white/40" />
      </div>
    </section>
  );
}
