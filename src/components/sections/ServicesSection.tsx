import { Package, PackageOpen, Star, Handshake, MapPin, Route, Globe, Building2 } from 'lucide-react';

const SERVICES = [
  {
    icon: Package,
    title: 'Full Load Transport',
    description:
      'Dedicated truck transportation for customers with a complete vehicle load. The entire vehicle is reserved for your cargo, ensuring direct transportation from pickup to delivery.',
    highlight: 'Whole truck for your cargo',
  },
  {
    icon: PackageOpen,
    title: 'Part Load Transport',
    description:
      'Cost-effective transportation for smaller shipments that do not require a full vehicle. Share vehicle capacity with other consignments to reduce transportation costs.',
    highlight: 'Cost-effective for smaller loads',
  },
  {
    icon: Star,
    title: 'Special Vehicle Arrangement',
    description:
      'Arrangement of specific vehicle types required for particular cargo or transportation conditions. Contact us to discuss your specific vehicle requirement.',
    highlight: 'Vehicle types: 14ft to 22ft',
  },
  {
    icon: Handshake,
    title: 'Commission Agent Services',
    description:
      'We connect customers requiring transportation with suitable vehicle owners and operators from our network. A reliable bridge between transportation needs and available vehicles.',
    highlight: 'Your requirement matched to right vehicle',
  },
  {
    icon: MapPin,
    title: 'Local Transportation',
    description:
      'Transportation services within the local area and nearby regions. Suitable for businesses requiring regular or one-time local goods movement.',
    highlight: 'Local & nearby areas',
  },
  {
    icon: Route,
    title: 'Long-Distance Transportation',
    description:
      'Transportation between cities and states depending on vehicle availability and route requirements. Contact us to check availability for your specific route.',
    highlight: 'City-to-city transportation',
  },
  {
    icon: Globe,
    title: 'All India Transport Service',
    description:
      'Transportation arrangements available across India subject to vehicle availability and route requirements. We work to find suitable transport for your all-India requirements.',
    highlight: 'Pan-India arrangements',
  },
  {
    icon: Building2,
    title: 'Business / Commercial Transport',
    description:
      'Transportation support for businesses requiring regular or recurring goods movement. We can help businesses manage their transportation needs efficiently.',
    highlight: 'B2B transportation solutions',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Transportation Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From full truck loads to part loads and special vehicle arrangements —
            we help customers and businesses move goods reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow card-hover border border-gray-100 flex flex-col"
            >
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0">
                <Icon size={22} className="text-orange" />
              </div>
              <h3 className="font-bold text-charcoal text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-orange">{highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 bg-navy rounded-2xl p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-3">
            Need a specific transportation arrangement?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Contact us to discuss your requirement. We will find the best suitable vehicle for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/#quote"
              className="bg-orange hover:bg-orange-dark text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="tel:+919897270966"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
