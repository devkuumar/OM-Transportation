'use client';
import { useState } from 'react';
import { Truck, MessageCircle, AlertCircle, Phone, Calendar, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY, buildTransportQuoteWhatsAppUrl } from '@/lib/config';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    whatsapp: '',
    email: '',
    pickup: '',
    delivery: '',
    pickupDate: '',
    vehicleType: '',
    loadType: 'full',
    cargoType: '',
    approxWeight: '',
    dimensions: '',
    vehicleCount: '1',
    notes: '',
    honeypot: '', // anti-spam
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Anti-spam honeypot check
    if (formData.honeypot) {
      return;
    }

    // Validate required fields (Pickup & Delivery)
    if (!formData.pickup.trim() || !formData.delivery.trim()) {
      setError('Please fill in required fields: Pickup Location and Delivery Location.');
      return;
    }

    // 1. Generate professional WhatsApp click-to-chat URL with pre-filled message
    const whatsappUrl = buildTransportQuoteWhatsAppUrl(formData);

    // 2. Open WhatsApp (app on mobile, WhatsApp Web on desktop)
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }

    // 3. Silently record lead to server in background without blocking WhatsApp flow
    try {
      fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        keepalive: true,
      }).catch(() => {});
    } catch {
      // Ignore background logging errors
    }
  };

  return (
    <section id="quote" className="section-pad bg-navy-dark text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left information column */}
          <div className="lg:col-span-5">
            <span className="section-label">Quick Transport Enquiry</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
              Request a Vehicle / <br />
              <span className="text-orange">Get Transport Quote</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Submit your cargo and route requirements. We analyze your load weight, dimensions, and schedule to match the most suitable vehicle at competitive rates.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-orange/20 text-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Verified Operator Network</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Every commercial vehicle arranged is verified with transparent communication and direct driver coordination.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Instant WhatsApp Assistance</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Prefer direct chat? Connect directly with proprietor Rahul Kumar on WhatsApp at {COMPANY.phone1Display}.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-navy to-navy-light border border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Immediate Dispatch Emergency?</p>
                <div className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-orange" />
                  <a href={`tel:${COMPANY.phone1}`} className="hover:text-orange transition-colors">
                    {COMPANY.phone1Display}
                  </a>
                </div>
                <div className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <Phone size={15} className="text-orange" />
                  <a href={`tel:${COMPANY.phone2}`} className="hover:text-orange transition-colors">
                    {COMPANY.phone2Display}
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-3">Office: Panethi, Aligarh, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-charcoal shadow-2xl relative">
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Honeypot field for anti-spam */}
                <input
                  type="text"
                  name="website_url"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Section 1: Customer Details */}
                <div>
                  <h4 className="text-xs font-bold text-orange uppercase tracking-wider mb-3">1. Contact Information</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Sharma"
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Sharma Traders (optional)"
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="Same as mobile or WhatsApp (optional)"
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Route Details */}
                <div className="pt-2 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-orange uppercase tracking-wider mb-3">2. Route & Schedule</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                        <MapPin size={12} className="text-orange" /> Pickup Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        placeholder="City / District / Area"
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                        <MapPin size={12} className="text-orange" /> Delivery Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.delivery}
                        onChange={(e) => setFormData({ ...formData, delivery: e.target.value })}
                        placeholder="Destination City / State"
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                        <Calendar size={12} className="text-gray-400" /> Preferred Pickup Date
                      </label>
                      <input
                        type="date"
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Load Type
                      </label>
                      <select
                        value={formData.loadType}
                        onChange={(e) => setFormData({ ...formData, loadType: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none bg-white"
                      >
                        <option value="full">Full Truck Load (Dedicated)</option>
                        <option value="part">Part Load (Consolidation)</option>
                        <option value="special">Special Vehicle</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Cargo & Vehicle Requirements */}
                <div className="pt-2 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-orange uppercase tracking-wider mb-3">3. Vehicle & Cargo Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Vehicle Type
                      </label>
                      <select
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none bg-white"
                      >
                        <option value="">Any / Suggest Suitable</option>
                        {COMPANY.vehicles.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Approx. Weight
                      </label>
                      <input
                        type="text"
                        value={formData.approxWeight}
                        onChange={(e) => setFormData({ ...formData, approxWeight: e.target.value })}
                        placeholder="e.g. 5 Tonnes / 500 kg"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Cargo / Material Type
                      </label>
                      <input
                        type="text"
                        value={formData.cargoType}
                        onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                        placeholder="e.g. Machinery, Steel, Cartons"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Special Instructions / Loading Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Mention any cargo dimensions, loading/unloading requirements, or specific vehicle preferences..."
                      className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-charcoal focus:border-orange focus:ring-1 focus:ring-orange focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-orange hover:bg-orange-dark active:bg-orange-dark text-white font-bold py-4 rounded-xl text-base transition-all shadow-lg hover:shadow-orange/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle size={18} /> Request Transport Quote
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Clicking will open WhatsApp with your requirement details pre-filled. You can review before sending.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
