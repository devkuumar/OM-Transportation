'use client';
import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Navigation, Clock, Shield, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';
export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const waMsg = WHATSAPP_URL(WHATSAPP_MESSAGE('General Enquiry', 'General Delivery', 'Any Vehicle', 'Inquiry'));

  return (
    <section id="contact" className="section-pad bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Contact OM Transport Service
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question or require immediate commercial vehicle placement? Reach out to us via direct phone, WhatsApp, or visit our Panethi office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left contact details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-charcoal mb-6">Dispatch & Booking Contacts</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Phone Numbers (Click to Call)</h4>
                    <div className="flex flex-col gap-1 mt-1">
                      <a href={`tel:${COMPANY.phone1}`} className="text-base font-bold text-charcoal hover:text-orange transition-colors">
                        {COMPANY.phone1Display} <span className="text-xs text-gray-400 font-normal">(Primary / WhatsApp)</span>
                      </a>
                      <a href={`tel:${COMPANY.phone2}`} className="text-base font-bold text-charcoal hover:text-orange transition-colors">
                        {COMPANY.phone2Display} <span className="text-xs text-gray-400 font-normal">(Secondary)</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Instant WhatsApp Booking</h4>
                    <p className="text-xs text-gray-500 mt-1 mb-2">Send your pickup & delivery details directly for immediate rate quote.</p>
                    <a
                      href={waMsg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      <MessageCircle size={14} /> Open WhatsApp ({COMPANY.whatsappDisplay})
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/10 text-navy flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Office Location</h4>
                    <p className="text-sm font-semibold text-charcoal mt-1 leading-relaxed">
                      {COMPANY.address.full}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">Landmark: Near Nayara Petrol Pump, Panethi</p>
                    <a
                      href={COMPANY.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange mt-2 hover:underline"
                    >
                      <Navigation size={12} /> Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Business Hours</h4>
                    <p className="text-sm font-semibold text-charcoal mt-1">{COMPANY.businessHours}</p>
                    <p className="text-xs text-gray-500">Commercial transport bookings arranged 7 days a week.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right quick callback request card */}
          <div className="lg:col-span-6">
            <div className="bg-navy rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">Request a Quick Callback</h3>
              <p className="text-gray-300 text-xs mb-6">
                Leave your number and load requirement. Proprietor Rahul Kumar or our dispatch team will call you back promptly.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-lg font-bold mb-1">Callback Requested!</h4>
                  <p className="text-gray-300 text-xs mb-4">
                    We will call you at {formData.phone} shortly.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone1}`}
                    className="inline-block bg-orange text-white text-xs font-bold py-2.5 px-4 rounded-lg"
                  >
                    Need Immediate Answer? Call Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anil Kumar"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:border-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:border-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Short Requirement Note</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need 19ft vehicle for Panethi to Kanpur on Tuesday..."
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-400 focus:border-orange focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-3.5 rounded-xl text-xs transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={14} /> Request Call Back
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1"><Shield size={12} className="text-orange" /> Zero Spam</span>
                    <span>•</span>
                    <span>Direct Call Back</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
