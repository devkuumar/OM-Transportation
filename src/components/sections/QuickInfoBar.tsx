import { MapPin, Package, Truck, Clock, Shield, Globe } from 'lucide-react';
import { COMPANY } from '@/lib/config';

const INFO = [
  { icon: MapPin, label: 'Base Location', value: 'Panethi, Aligarh, UP' },
  { icon: Package, label: 'Service Type', value: 'Full & Part Load' },
  { icon: Truck, label: 'Fleet Sizes', value: '14ft–22ft & Ace' },
  { icon: Globe, label: 'Coverage', value: 'All India Service' },
  { icon: Clock, label: 'Enquiries', value: '24/7 Availability' },
  { icon: Shield, label: 'GSTIN', value: COMPANY.gstin },
];

export default function QuickInfoBar() {
  return (
    <section className="bg-white border-b border-gray-200/70 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200/80 border-x border-gray-200/80">
          {INFO.map(({ icon: Icon, label, value }) => {
            const isLocation = label === 'Base Location';
            const Wrapper = isLocation ? 'a' : 'div';
            const extraProps = isLocation
              ? {
                  href: COMPANY.googleMapsUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  title: 'Open location in Google Maps',
                  className:
                    'bg-white flex flex-col items-center justify-center text-center py-4 px-2.5 sm:py-5 sm:px-3 gap-1.5 min-w-0 hover:bg-orange/5 transition-colors cursor-pointer group',
                }
              : {
                  className:
                    'bg-white flex flex-col items-center justify-center text-center py-4 px-2.5 sm:py-5 sm:px-3 gap-1.5 min-w-0',
                };

            return (
              <Wrapper key={label} {...extraProps}>
                <Icon size={18} className="text-orange flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="min-w-0 w-full px-1">
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider truncate">
                    {label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-charcoal mt-0.5 truncate font-mono sm:font-sans group-hover:text-orange transition-colors">
                    {value}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
