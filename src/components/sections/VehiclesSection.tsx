'use client';
import { Truck, Phone, MessageCircle } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

const VEHICLES = [
  {
    name: 'Tata Ace',
    size: 'Small Commercial',
    lengthFt: '7–8 ft',
    suitable: 'Small parcels, local goods, retail distribution, short-distance commercial cargo',
    highlight: 'Urban & local deliveries',
    color: 'bg-blue-50 border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    name: '14 FT Vehicle',
    size: 'Light Truck',
    lengthFt: '14 ft',
    suitable: 'Medium commercial goods, household goods, retail, small business cargo',
    highlight: 'Medium loads',
    color: 'bg-orange-50 border-orange-100',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    name: '17 FT Vehicle',
    size: 'Medium Truck',
    lengthFt: '17 ft',
    suitable: 'Commercial goods, building materials, machinery parts, business cargo',
    highlight: 'Business cargo',
    color: 'bg-purple-50 border-purple-100',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    name: '19 FT Vehicle',
    size: 'Medium-Heavy Truck',
    lengthFt: '19 ft',
    suitable: 'Industrial goods, larger commercial cargo, construction materials',
    highlight: 'Industrial requirements',
    color: 'bg-green-50 border-green-100',
    badge: 'bg-green-100 text-green-700',
  },
  {
    name: '20 FT Vehicle',
    size: 'Heavy Truck',
    lengthFt: '20 ft',
    suitable: 'Heavy goods, manufacturing cargo, large commercial requirements',
    highlight: 'Heavy commercial cargo',
    color: 'bg-red-50 border-red-100',
    badge: 'bg-red-100 text-red-700',
  },
  {
    name: '22 FT Vehicle',
    size: 'Large Heavy Truck',
    lengthFt: '22 ft',
    suitable: 'Large bulk loads, heavy industrial goods, full-truck commercial cargo',
    highlight: 'Maximum capacity',
    color: 'bg-navy/5 border-navy/10',
    badge: 'bg-navy text-white',
  },
];

export default function VehiclesSection() {
  return (
    <section id="vehicles" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Vehicle Options</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Available Vehicle Sizes
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We arrange vehicles from Tata Ace for small requirements to 22 ft trucks for large
            commercial loads. Contact us to check availability for your specific requirement.
          </p>
          <div className="mt-4 bg-orange/10 border border-orange/20 rounded-xl px-6 py-3 inline-block">
            <p className="text-orange text-sm font-medium">
              ⚠️ Exact payload and technical specifications require confirmation. Contact us for details.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VEHICLES.map((v) => {
            const waMsg = WHATSAPP_URL(
              WHATSAPP_MESSAGE('Your Location', 'Destination', v.name, 'Full / Part Load')
            );
            return (
              <div
                key={v.name}
                className={`rounded-2xl border-2 p-6 flex flex-col gap-4 card-hover ${v.color}`}
              >
                {/* Vehicle icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Truck size={24} className="text-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal text-lg leading-tight">{v.name}</h3>
                      <p className="text-gray-500 text-xs">{v.size}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${v.badge}`}>
                    {v.lengthFt}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 flex-1">
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-1">Suitable For</div>
                    <p className="text-sm text-gray-700">{v.suitable}</p>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-1.5 h-1.5 bg-orange rounded-full" />
                    <span className="text-xs font-semibold text-orange">{v.highlight}</span>
                  </div>
                </div>

                {/* Availability & CTA */}
                <div className="pt-4 border-t border-black/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-green-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
                      Contact Us
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="/#quote"
                      className="flex-1 bg-orange hover:bg-orange-dark text-white text-center text-xs font-bold py-2.5 rounded-lg transition-colors"
                    >
                      Request Vehicle
                    </a>
                    <a
                      href={waMsg}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp enquiry"
                      className="w-10 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center rounded-lg transition-colors"
                    >
                      <MessageCircle size={15} />
                    </a>
                    <a
                      href={`tel:${COMPANY.phone1}`}
                      aria-label="Call"
                      className="w-10 bg-navy hover:bg-navy-dark text-white flex items-center justify-center rounded-lg transition-colors"
                    >
                      <Phone size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Vehicle images will be displayed once provided by the client. Payload and GVW specifications
          require confirmation and will be updated accordingly.
        </p>
      </div>
    </section>
  );
}
