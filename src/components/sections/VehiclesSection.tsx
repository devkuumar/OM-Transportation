'use client';
import { Truck, Phone, MessageCircle } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

const VEHICLES = [
  {
    name: 'Tata Ace',
    size: 'Small Commercial Vehicle',
    lengthFt: '7–8 ft',
    suitable: 'Small parcels, local goods, retail distribution, short-distance commercial cargo',
    highlight: 'Urban & local deliveries',
    color: 'bg-blue-50/60 border-blue-200/80',
    badge: 'bg-blue-100 text-blue-800',
  },
  {
    name: '14 FT Vehicle',
    size: 'Light Commercial Truck',
    lengthFt: '14 ft',
    suitable: 'Medium commercial goods, household goods, retail, small business cargo',
    highlight: 'Medium loads',
    color: 'bg-orange-50/60 border-orange-200/80',
    badge: 'bg-orange-100 text-orange-800',
  },
  {
    name: '17 FT Vehicle',
    size: 'Medium Commercial Truck',
    lengthFt: '17 ft',
    suitable: 'Commercial goods, building materials, machinery parts, business cargo',
    highlight: 'Business cargo',
    color: 'bg-purple-50/60 border-purple-200/80',
    badge: 'bg-purple-100 text-purple-800',
  },
  {
    name: '19 FT Vehicle',
    size: 'Medium-Heavy Truck',
    lengthFt: '19 ft',
    suitable: 'Industrial goods, larger commercial cargo, construction materials',
    highlight: 'Industrial requirements',
    color: 'bg-emerald-50/60 border-emerald-200/80',
    badge: 'bg-emerald-100 text-emerald-800',
  },
  {
    name: '20 FT Vehicle',
    size: 'Heavy Duty Truck',
    lengthFt: '20 ft',
    suitable: 'Heavy goods, manufacturing cargo, large commercial requirements',
    highlight: 'Heavy commercial cargo',
    color: 'bg-rose-50/60 border-rose-200/80',
    badge: 'bg-rose-100 text-rose-800',
  },
  {
    name: '22 FT Vehicle',
    size: 'Large Heavy Truck',
    lengthFt: '22 ft',
    suitable: 'Large bulk loads, heavy industrial goods, full-truck commercial cargo',
    highlight: 'Maximum capacity',
    color: 'bg-slate-50 border-slate-200',
    badge: 'bg-navy text-white',
  },
];

export default function VehiclesSection() {
  return (
    <section id="vehicles" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label mx-auto">Vehicle Options</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal">
            Available Vehicle Sizes
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            We arrange commercial vehicles ranging from Tata Ace for localized transport to 22 ft trucks for heavy industrial loads. Contact our Panethi office to check current availability.
          </p>
          <div className="mt-4 bg-orange/10 border border-orange/20 rounded-xl px-4 py-2.5 sm:px-6 sm:py-3 inline-block max-w-xl">
            <p className="text-orange text-xs sm:text-sm font-semibold">
              ⚠️ Exact payload, body type, and technical specifications are confirmed with client per dispatch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {VEHICLES.map((v) => {
            const waMsg = WHATSAPP_URL(
              WHATSAPP_MESSAGE('Your Location', 'Destination', v.name, 'Full / Part Load')
            );
            return (
              <div
                key={v.name}
                className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between card-hover shadow-sm ${v.color}`}
              >
                <div>
                  {/* Vehicle icon & title */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                        <Truck size={22} className="text-charcoal" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-charcoal text-base sm:text-lg leading-tight truncate">
                          {v.name}
                        </h3>
                        <p className="text-gray-500 text-xs truncate mt-0.5">{v.size}</p>
                      </div>
                    </div>
                    <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg flex-shrink-0 font-mono ${v.badge}`}>
                      {v.lengthFt}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div>
                      <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                        Suitable For
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {v.suitable}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0" />
                      <span className="text-xs font-bold text-orange">{v.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Availability & Action Buttons */}
                <div className="pt-4 border-t border-black/5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-medium">Network Availability</span>
                    <span className="text-green-700 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                      Enquire Now
                    </span>
                  </div>

                  <div className="flex items-stretch gap-2">
                    <a
                      href="/#quote"
                      className="flex-1 bg-orange hover:bg-orange-dark active:bg-orange-dark text-white text-center text-xs font-bold py-2.5 sm:py-3 rounded-xl transition-colors flex items-center justify-center min-h-[42px]"
                    >
                      Request Vehicle
                    </a>
                    <a
                      href={waMsg}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp enquiry for ${v.name}`}
                      className="w-11 sm:w-12 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white flex items-center justify-center rounded-xl transition-colors flex-shrink-0 min-h-[42px]"
                    >
                      <MessageCircle size={18} />
                    </a>
                    <a
                      href={`tel:${COMPANY.phone1}`}
                      aria-label={`Call regarding ${v.name}`}
                      className="w-11 sm:w-12 bg-navy hover:bg-navy-dark active:bg-navy-dark text-white flex items-center justify-center rounded-xl transition-colors flex-shrink-0 min-h-[42px]"
                    >
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Note: Authentic fleet photographs and specific registered body types will be displayed as client media is finalized.
        </p>
      </div>
    </section>
  );
}
