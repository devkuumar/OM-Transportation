'use client';
import { useState } from 'react';
import { Camera, Building, Truck, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/config';

type Category = 'all' | 'office' | 'vehicles' | 'operations';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'OM Transport Office & Signage',
    category: 'office',
    tag: 'Office Exterior',
    desc: 'Main office facility on Aligarh–Kanpur Road, Panethi, Aligarh (Near Nayara Petrol Pump).',
    icon: Building,
    badge: 'Panethi Hub',
  },
  {
    id: 2,
    title: 'Commercial Heavy Trucks in Transit',
    category: 'vehicles',
    tag: '14ft to 22ft Fleet',
    desc: 'Commercial trucks arranged for heavy machinery and industrial freight dispatches.',
    icon: Truck,
    badge: 'Heavy Vehicles',
  },
  {
    id: 3,
    title: 'Loading & Goods Arrangement',
    category: 'operations',
    tag: 'Industrial Loading',
    desc: 'Point-to-point commercial cargo loading under operator supervision.',
    icon: ShieldCheck,
    badge: 'Operations',
  },
  {
    id: 4,
    title: 'Tata Ace & Light Commercial Transport',
    category: 'vehicles',
    tag: 'Tata Ace',
    desc: 'Small commercial vehicles for localized deliveries, mandi transport, and parcel loads.',
    icon: Truck,
    badge: 'Local Fleet',
  },
  {
    id: 5,
    title: 'Highway Route Dispatches',
    category: 'operations',
    tag: 'Highway Movement',
    desc: 'Trucks moving on the Aligarh–Kanpur and regional Western UP industrial corridors.',
    icon: MapPin,
    badge: 'Highway Transit',
  },
  {
    id: 6,
    title: 'Proprietor & Dispatch Desk',
    category: 'office',
    tag: 'Customer Support',
    desc: 'Direct communication desk for customer booking queries and driver coordination.',
    icon: Building,
    badge: 'Customer Desk',
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<Category>('all');

  const filtered = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeTab);

  return (
    <section id="gallery" className="section-pad bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="section-label mx-auto">Visual Glimpse</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Operations & Facility Gallery
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Real snapshots from our Panethi, Aligarh office, commercial dispatch operations, and regional transport movements.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: 'all', label: 'All Operations' },
            { id: 'office', label: 'Office & Signage' },
            { id: 'vehicles', label: 'Commercial Vehicles' },
            { id: 'operations', label: 'Loading & Transit' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-orange text-white shadow-md shadow-orange/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-navy via-navy-light to-navy relative flex items-center justify-center p-6 text-white overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange transition-all duration-300">
                  <item.icon size={32} />
                </div>
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-md">
                  {item.badge}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-orange uppercase tracking-wider">{item.tag}</span>
                  <h3 className="font-bold text-charcoal text-base mt-1 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Panethi, Aligarh Hub</span>
                  <span className="text-orange font-semibold">OM Transport</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Note: Authentic photos of the Panethi office premises and vehicle dispatches are displayed. Updated fleet media is added periodically.
        </p>
      </div>
    </section>
  );
}
