import { FileText, Cpu, CheckSquare, Truck } from 'lucide-react';

const STEPS = [
  {
    step: '1',
    title: 'Share Your Requirement',
    description: 'Provide pickup & drop locations, preferred dates, vehicle type, and cargo weight/dimensions.',
    icon: FileText,
  },
  {
    step: '2',
    title: 'Vehicle Matching',
    description: 'We query our active network of commercial truck owners to find an available vehicle that fits your specs.',
    icon: Cpu,
  },
  {
    step: '3',
    title: 'Confirm the Transport',
    description: 'We finalize rates, timings, and commercial terms with clear communication and no hidden surprises.',
    icon: CheckSquare,
  },
  {
    step: '4',
    title: 'Pickup & Delivery',
    description: 'The arranged vehicle arrives at the loading site and safely transports your consignment to its destination.',
    icon: Truck,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-pad bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Straightforward Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            How It Works in 4 Simple Steps
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From initial booking enquiry to delivery completion, our streamlined process ensures zero confusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s, idx) => (
            <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-orange text-white font-extrabold text-lg flex items-center justify-center mb-4 shadow-md shadow-orange/20">
                {s.step}
              </div>
              <h3 className="font-bold text-charcoal text-base mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
