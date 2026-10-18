import { Handshake, Truck, Search, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

export default function CommissionAgentSection() {
  const waMsg = WHATSAPP_URL(WHATSAPP_MESSAGE('', '', 'Commission Agent Enquiry', 'Full/Part'));

  return (
    <section id="commission-agent" className="section-pad bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Commission Agent Model</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            How Our Commission-Agent Service Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Need commercial vehicles but don’t own a fleet? OM Transport acts as your dedicated logistics partner, matching your transport requirements with verified vehicle operators.
          </p>
        </div>

        {/* 4-Step Process Visual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 relative">
          {[
            {
              step: '01',
              title: 'Requirement Shared',
              desc: 'You provide pickup, drop location, cargo type, and approximate weight or dimensions.',
              icon: Search,
            },
            {
              step: '02',
              title: 'Vehicle Matching',
              desc: 'We verify our active commercial vehicle network to identify the right vehicle size and availability.',
              icon: Truck,
            },
            {
              step: '03',
              title: 'Rate & Confirmation',
              desc: 'Transparent commercial terms and route scheduling agreed before movement begins.',
              icon: Handshake,
            },
            {
              step: '04',
              title: 'Safe Transportation',
              desc: 'Vehicle arrives for loading and completes transit as per agreed terms.',
              icon: ShieldCheck,
            },
          ].map((item, idx) => (
            <div key={item.step} className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm relative group hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-orange/20 group-hover:text-orange/40 transition-colors font-mono">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center">
                  <item.icon size={20} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison: Full Load vs Part Load */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-navy" />
            <div className="inline-block bg-navy/10 text-navy font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Dedicated Transit
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-3">Full Truck Load (FTL)</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The entire vehicle is exclusively chartered for your consignment. Ideal for factory dispatches, heavy machinery, full raw material shipments, and time-critical deliveries.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-navy" />
                <span>Non-stop point-to-point transit from source to destination</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-navy" />
                <span>Zero intermediate transshipment or handling of goods</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-navy" />
                <span>Available for 14ft, 17ft, 19ft, 20ft, 22ft & Tata Ace</span>
              </li>
            </ul>
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 font-semibold text-navy hover:text-navy-light text-sm"
            >
              Enquire for Full Load <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-orange" />
            <div className="inline-block bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Cost-Optimized
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-3">Part Load Transport (PTL)</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              When cargo volume or weight does not justify paying for an entire truck, part-load freight sharing allows you to transport goods at reduced costs.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange" />
                <span>Pay only for the space or weight your consignment occupies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange" />
                <span>Ideal for small businesses, trade samples, and recurring retail cargo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange" />
                <span>Flexible vehicle assignment tailored to delivery schedules</span>
              </li>
            </ul>
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 font-semibold text-orange hover:text-orange-dark text-sm"
            >
              Enquire for Part Load <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
