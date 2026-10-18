import { ShieldCheck, Clock, MapPin, Truck, PhoneCall, Handshake, Users, Sparkles } from 'lucide-react';
import { COMPANY } from '@/lib/config';

const ADVANTAGES = [
  {
    icon: Truck,
    title: 'Multiple Vehicle Sizes',
    description: 'Choice of 14ft, 17ft, 19ft, 20ft, 22ft vehicles and Tata Ace to precisely match your payload and dimensions.',
  },
  {
    icon: Handshake,
    title: 'Active Commission Network',
    description: 'We connect your freight needs with trusted commercial vehicle owners, ensuring availability when you need it.',
  },
  {
    icon: Clock,
    title: '24-Hour Enquiry Availability',
    description: 'Logistics doesn’t stop at 5 PM. Our team is accessible around the clock for freight quotes and status checks.',
  },
  {
    icon: MapPin,
    title: 'Strong Local Presence',
    description: 'Based directly on Aligarh–Kanpur Road in Panethi, providing deep ground knowledge of UP and highway routes.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Business & GST Registered',
    description: `Legitimate registered proprietorship under Rahul Kumar (GSTIN: ${COMPANY.gstin}) offering complete billing clarity.`,
  },
  {
    icon: PhoneCall,
    title: 'Direct Operator Access',
    description: 'No convoluted call centers. Speak directly with responsible transport professionals via phone or WhatsApp.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Why Partner With Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Why Choose OM Transport Service
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Practical, dependable, and relationship-driven transportation solutions tailored for businesses and individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange/30 hover:bg-white hover:shadow-xl transition-all card-hover flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 text-orange flex items-center justify-center mb-5">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-navy via-navy-light to-navy text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-orange font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles size={14} /> Our Core Commitment
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Reliable Load Allocation & Transparent Dealing</h3>
            <p className="text-gray-300 text-sm mt-1 max-w-xl">
              We focus on genuine availability, realistic scheduling, and respectful coordination between shippers and truck owners.
            </p>
          </div>
          <a
            href="/#quote"
            className="flex-shrink-0 bg-orange hover:bg-orange-dark text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors"
          >
            Request a Vehicle Today
          </a>
        </div>
      </div>
    </section>
  );
}
