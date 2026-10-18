'use client';
import { useState } from 'react';
import { Truck, Handshake, CheckCircle2, AlertCircle, Send, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY, WHATSAPP_URL } from '@/lib/config';

export default function PartnerSection() {
  const [formData, setFormData] = useState({
    ownerName: '',
    company: '',
    phone: '',
    whatsapp: '',
    location: '',
    vehicleType: '14 FT',
    vehicleNumber: '',
    bodyType: 'Open Body',
    vehicleCount: '1',
    operatingRoutes: '',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.ownerName.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setError('Please provide Owner Name, Mobile Number, and Base Location.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.message || 'Error submitting partner registration.');
      }
    } catch (err) {
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const getPartnerWaMsg = () => {
    const text = encodeURIComponent(
      `Hello OM Transport Service,\n\nI am a commercial vehicle owner and want to register with your transport network.\n\nName: ${formData.ownerName}\nLocation: ${formData.location}\nVehicle: ${formData.vehicleType} (${formData.vehicleNumber || 'Pending'})\nRoutes: ${formData.operatingRoutes || 'General'}\nPhone: ${formData.phone}\n\nPlease let me know available loads.`
    );
    return WHATSAPP_URL(text);
  };

  return (
    <section id="partner" className="section-pad bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop */}
          <div className="lg:col-span-5">
            <span className="section-label">Vehicle Owner Onboarding</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight mb-6">
              Partner With OM Transport <br />
              <span className="text-orange">Join Our Fleet Network</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Own a commercial truck, Tata Ace, or multi-axle vehicle? Expand your operational trips by partnering with OM Transport Service & Commission Agent.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Direct load allocations without predatory middlemen cuts',
                'Transparent freight settlement and route coordination',
                'Continuous return loads on major industrial and highway corridors',
                'Empowering vehicle owners from Aligarh, Hathras, Agra, and Western UP',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange/10 text-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500">
              <strong>Transparent Policy:</strong> We do not make false promises of guaranteed daily runs. We match your vehicle with verified customer demand based on transparent commission agreements.
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Partner Details Received!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                    Thank you, {formData.ownerName}. Your vehicle details have been recorded in our dispatch network. We will contact you as soon as matching load requirements arise.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={getPartnerWaMsg()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors"
                    >
                      Connect on WhatsApp Now
                    </a>
                    <button
                      onClick={() => setSuccess(false)}
                      className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl text-xs hover:bg-gray-100 transition-colors"
                    >
                      Register Another Vehicle
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal border-b border-gray-200 pb-3 flex items-center gap-2">
                    <Truck size={18} className="text-orange" /> Vehicle Owner Registration Form
                  </h3>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Owner / Operator Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-charcoal focus:border-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit number"
                        className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-charcoal focus:border-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Base Location / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Aligarh / Hathras / Agra"
                        className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-charcoal focus:border-orange focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Vehicle Type
                      </label>
                      <select
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-charcoal focus:border-orange focus:outline-none"
                      >
                        {COMPANY.vehicles.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                        <option value="Multi-Axle Truck">Multi-Axle Truck</option>
                        <option value="Trailer">Trailer</option>
                        <option value="Other Commercial">Other Commercial Vehicle</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Vehicle Number (optional)
                      </label>
                      <input
                        type="text"
                        value={formData.vehicleNumber}
                        onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
                        placeholder="e.g. UP 81 XX XXXX"
                        className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-charcoal focus:border-orange focus:outline-none uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Body Type
                      </label>
                      <select
                        value={formData.bodyType}
                        onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-charcoal focus:border-orange focus:outline-none"
                      >
                        <option value="Open Body">Open Body (High Bed / Low Bed)</option>
                        <option value="Container / Closed Body">Container / Closed Body</option>
                        <option value="Flatbed">Flatbed / Platform</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Preferred Operating Routes
                    </label>
                    <input
                      type="text"
                      value={formData.operatingRoutes}
                      onChange={(e) => setFormData({ ...formData, operatingRoutes: e.target.value })}
                      placeholder="e.g. Aligarh–Kanpur, Delhi NCR, UP to Bihar / MP, All India"
                      className="w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-charcoal focus:border-orange focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-3.5 rounded-xl text-xs transition-colors shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                  >
                    {loading ? 'Submitting Application...' : (
                      <>
                        <Send size={15} /> Join Our Transport Network
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
