import { MapPin, Package, Truck, Clock, Shield, Globe } from 'lucide-react';
import { COMPANY } from '@/lib/config';

const INFO = [
  { icon: MapPin, label: 'Base Location', value: 'Panethi, Aligarh, UP' },
  { icon: Package, label: 'Service Type', value: 'Full Load & Part Load' },
  { icon: Truck, label: 'Vehicles', value: '14ft – 22ft & Tata Ace' },
  { icon: Globe, label: 'Coverage', value: 'All India Service' },
  { icon: Clock, label: 'Enquiry Hours', value: '24 Hours, 7 Days' },
  { icon: Shield, label: 'GSTIN', value: COMPANY.gstin },
];

export default function QuickInfoBar() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-100">
          {INFO.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center text-center py-5 px-3 gap-2">
              <Icon size={20} className="text-orange" />
              <div>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{label}</div>
                <div className="text-[13px] font-semibold text-charcoal mt-0.5">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
