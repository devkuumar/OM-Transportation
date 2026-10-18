import { MapPin, Navigation, Phone, MessageCircle, ExternalLink, Globe } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

export default function ServiceAreaSection() {
  const waMsg = WHATSAPP_URL(WHATSAPP_MESSAGE('Service Area Enquiry', 'Panethi / UP', 'Any Vehicle', 'Full Load'));

  return (
    <section id="locations" className="section-pad bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Operating Coverage</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Service Areas & Network Reach
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Headquartered at Panethi on the Aligarh–Kanpur highway with commercial vehicle connectivity extending across Uttar Pradesh and all major national corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Base Office Card */}
          <div className="lg:col-span-5 bg-navy text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange/20 text-orange rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin size={12} /> Principal Place of Business
              </div>
              <h3 className="text-2xl font-bold mb-3">{COMPANY.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {COMPANY.address.full}
              </p>

              <div className="space-y-3 border-t border-white/10 pt-4 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-400">Landmark:</span>
                  <span className="font-semibold text-white">Near Nayara Petrol Pump</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Highway Corridor:</span>
                  <span className="font-semibold text-white">Aligarh–Kanpur Road</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">District:</span>
                  <span className="font-semibold text-white">Aligarh, UP (PIN: 202002)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Office Working Hours:</span>
                  <span className="font-semibold text-orange">24/7 Phone & WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href={COMPANY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                <Navigation size={14} /> Get Directions
              </a>
              <a
                href={`tel:${COMPANY.phone1}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                <Phone size={14} /> Call
              </a>
              <a
                href={waMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Regional & National Network Coverage */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-orange uppercase tracking-wider mb-2">
                <Globe size={14} /> Operational Scope
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Regional & All-India Transport Operations</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We operate with a realistic model: our physical dispatch hub is located in Panethi, while our commission-agent network enables vehicle placement across key commercial routes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Primary Highway Corridors</h4>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    <li>• Aligarh – Kanpur Highway (NH 34)</li>
                    <li>• Aligarh – Agra – Mathura Corridor</li>
                    <li>• Aligarh – Hathras – Kasganj Belt</li>
                    <li>• Western Uttar Pradesh Industrial Belt</li>
                    <li>• Delhi NCR – Aligarh Trade Links</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Pan-India Reach</h4>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    <li>• Long-distance inter-state truck movement</li>
                    <li>• Direct full-load factory dispatches</li>
                    <li>• Subject to vehicle availability & scheduling</li>
                    <li>• Direct driver phone coordination</li>
                    <li>• Competitive open-market freight rates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange/5 border border-orange/20 text-xs text-gray-600">
              <strong className="text-orange">Notice:</strong> Transportation arrangements for outstation routes are matched based on commercial vehicle availability at the time of enquiry.
            </div>
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-3 px-2 gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Google Maps Location — Aligarh Kanpur Road, Panethi
            </span>
            <a
              href={COMPANY.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-orange hover:underline flex items-center gap-1"
            >
              Open in Google Maps App <ExternalLink size={12} />
            </a>
          </div>
          <div className="w-full h-80 rounded-xl overflow-hidden bg-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=Aligarh+Kanpur+Road,+Panethi,+Aligarh,+Uttar+Pradesh+202002&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OM Transport Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
