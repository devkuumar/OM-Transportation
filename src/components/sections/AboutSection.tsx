import { Users, Handshake, Globe, Truck, CheckCircle } from 'lucide-react';
import { COMPANY } from '@/lib/config';

const HIGHLIGHTS = [
  { icon: CheckCircle, text: 'Full Load & Part Load arrangements' },
  { icon: CheckCircle, text: 'Special vehicle sourcing through our network' },
  { icon: CheckCircle, text: 'Commission agent connecting customers with vehicle owners' },
  { icon: CheckCircle, text: 'All India transport arrangements' },
  { icon: CheckCircle, text: 'Direct phone and WhatsApp contact — no middlemen' },
  { icon: CheckCircle, text: '24-hour enquiry availability' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — content */}
          <div>
            <span className="section-label">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight mb-6">
              OM Transport Service &<br />
              <span className="text-orange">Commission Agent</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              OM Transport Service & Commission Agent is a transportation business based in{' '}
              <strong className="text-charcoal">Panethi, Aligarh, Uttar Pradesh</strong>, operated by
              proprietor{' '}
              <strong className="text-charcoal">Rahul Kumar</strong>. We provide transportation
              assistance and vehicle-arrangement services for customers and businesses requiring
              commercial vehicles for goods movement.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Whether you need a{' '}
              <strong className="text-charcoal">full truck load</strong>, a{' '}
              <strong className="text-charcoal">part load</strong>, or a{' '}
              <strong className="text-charcoal">special vehicle</strong> for a specific
              transportation requirement, we help identify and arrange the right vehicle from our
              network of commercial vehicle operators.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              As a <strong className="text-charcoal">commission agent</strong>, we connect customers
              who need transportation with suitable vehicle owners and operators, making it easier
              for businesses to fulfil their transportation requirements without having to search for
              vehicles individually.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={18} className="text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — info cards */}
          <div className="space-y-5">
            {/* Commission agent explained */}
            <div className="bg-[#f5f5f7] rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center">
                  <Handshake size={20} className="text-orange" />
                </div>
                <h3 className="font-bold text-charcoal text-lg">How the Commission-Agent Model Works</h3>
              </div>
              <div className="flex items-center gap-2 flex-wrap text-sm text-gray-600">
                {['Your Requirement', '→', 'Vehicle Search', '→', 'Suitable Transport', '→', 'Confirmation', '→', 'Transportation'].map((step, i) => (
                  <span key={i} className={step === '→' ? 'text-orange font-bold' : 'bg-white px-3 py-1.5 rounded-lg font-medium shadow-sm'}>
                    {step}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4">
                We act as a bridge between your transportation needs and available vehicles. You
                describe the requirement; we arrange the suitable transport.
              </p>
            </div>

            {/* Business info */}
            <div className="bg-navy text-white rounded-2xl p-7">
              <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
                <Truck size={18} className="text-orange" /> Business Information
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Legal Name', value: COMPANY.legalName },
                  { label: 'Trade Name', value: COMPANY.tradeName },
                  { label: 'Business Type', value: COMPANY.businessType },
                  { label: 'Proprietor', value: COMPANY.proprietor },
                  { label: 'GSTIN', value: COMPANY.gstin, mono: true },
                  { label: 'GST Type', value: COMPANY.gstType },
                  { label: 'GST Valid From', value: COMPANY.gstFrom },
                  { label: 'Jurisdiction', value: COMPANY.gstJurisdiction },
                ].map(({ label, value, mono }) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-white/10 pb-2.5">
                    <span className="text-gray-400">{label}</span>
                    <span className={`text-white font-medium text-right ${mono ? 'font-mono text-orange' : ''}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proprietor */}
            <div className="bg-orange/5 border border-orange/20 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-orange" />
              </div>
              <div>
                <div className="font-bold text-charcoal text-lg">{COMPANY.proprietor}</div>
                <div className="text-gray-500 text-sm">Proprietor, OM Transport Service & Commission Agent</div>
                <div className="text-gray-400 text-xs mt-1">Panethi, Aligarh, Uttar Pradesh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
