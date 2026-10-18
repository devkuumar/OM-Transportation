import { HardHat, Factory, Hammer, Cog, Wheat, Boxes, Building, Wrench } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: HardHat,
    title: 'Construction & Infrastructure',
    description: 'Bulk building supplies, steel rebar, prefabricated items, scaffolding, and structural components.',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Plants',
    description: 'Inbound raw materials, factory dispatches, spare assemblies, and industrial consumables.',
  },
  {
    icon: Building,
    title: 'Building Materials',
    description: 'Bricks, cement bags, ceramic tiles, sanitaryware, glass panels, and roofing sheets.',
  },
  {
    icon: Cog,
    title: 'Industrial Machinery',
    description: 'Plant equipment, electrical transformers, generator units, pumps, and fabrication assemblies.',
  },
  {
    icon: Hammer,
    title: 'Steel & Hardware Trade',
    description: 'Iron girders, sheet coils, pipe bundles, heavy hardware fittings, and metal components.',
  },
  {
    icon: Wheat,
    title: 'Agricultural Commodities',
    description: 'Grains, pulses, bagged produce, seeds, and farm supplies dispatched to wholesale mandis.',
  },
  {
    icon: Boxes,
    title: 'Commercial Wholesale & FMCG',
    description: 'Packaged commercial goods, carton distribution, wholesale trade supplies, and retail stock.',
  },
  {
    icon: Wrench,
    title: 'Engineering & Fabrication',
    description: 'Custom fabricated structures, metal frames, casting goods, and general industrial loads.',
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Sectors We Support</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Industries We Serve
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Providing tailored heavy commercial transport and vehicle assignment across core Indian manufacturing and trading sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:border-orange/20 hover:shadow-lg transition-all card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-4 group-hover:bg-orange transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-charcoal text-base mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
