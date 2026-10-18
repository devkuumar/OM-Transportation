import { TrendingUp, Network, Building2, MapPin, Layers, Smartphone } from 'lucide-react';

const EXPANSION_PILLARS = [
  {
    icon: Network,
    title: 'Fleet Network Expansion',
    desc: 'Onboarding more reliable commercial vehicle owners across 14ft–22ft categories to minimize shipper wait times.',
  },
  {
    icon: Building2,
    title: 'Dedicated B2B Freight Agreements',
    desc: 'Establishing recurring freight movement contracts with regional manufacturing plants, mills, and traders.',
  },
  {
    icon: MapPin,
    title: 'Highway Corridors Extension',
    desc: 'Expanding direct round-trip load allocations across Uttar Pradesh, Delhi-NCR, Rajasthan, Madhya Pradesh, and Bihar.',
  },
  {
    icon: Smartphone,
    title: 'Digital Freight Matching',
    desc: 'Introducing streamlined digital enquiry and WhatsApp dispatch tracking to keep customers informed at every mile.',
  },
];

export default function ExpansionSection() {
  return (
    <section className="section-pad bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="section-label mx-auto">Future Vision</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Growing the OM Transport Network
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            OM Transport Service & Commission Agent is continuously strengthening its logistics network to serve more commercial enterprises, open new routes, and bridge vehicle owners with genuine cargo opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {EXPANSION_PILLARS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:border-orange/30 hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-charcoal text-base mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-navy text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-1">Looking for a Reliable Regional Logistics Partner?</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Connect directly with our team in Panethi, Aligarh to discuss long-term transportation support for your business.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="/#quote"
              className="bg-orange hover:bg-orange-dark text-white font-bold py-3 px-5 rounded-xl text-xs transition-colors"
            >
              Request Transport
            </a>
            <a
              href="/#partner"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl text-xs transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
