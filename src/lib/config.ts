// OM Transport Service & Commission Agent — Central Configuration
// Centralized business WhatsApp number in international format (no +, spaces, hyphens, or brackets)
export const BUSINESS_WHATSAPP_NUMBER = '919897270966';

export const COMPANY = {
  name: 'OM Transport Service & Commission Agent',
  shortName: 'OM Transport',
  legalName: 'RAHUL KUMAR',
  tradeName: 'OM TRANSPORT SERVICE AND COMMISSION AGENT',
  proprietor: 'Rahul Kumar',
  businessType: 'Proprietorship',
  gstin: '09DUMPK2053N1Z3',
  gstType: 'Regular',
  gstFrom: '30/01/2026',
  gstJurisdiction: 'ALIGARH-I',

  phone1: '+919897270966',
  phone1Display: '+91 98972 70966',
  phone2: '+917037870966',
  phone2Display: '+91 70378 70966',

  whatsapp: BUSINESS_WHATSAPP_NUMBER,
  whatsappDisplay: '+91 98972 70966',

  email: '', // Add when available

  address: {
    line1: 'Aligarh–Kanpur Road',
    line2: 'Near Nayara Petrol Pump',
    area: 'Panethi',
    city: 'Aligarh',
    district: 'Aligarh',
    state: 'Uttar Pradesh',
    pincode: '202002',
    full: 'Aligarh–Kanpur Road, Near Nayara Petrol Pump, Panethi, Aligarh, Uttar Pradesh – 202002',
  },

  googleMapsUrl: 'https://maps.app.goo.gl/dinot76ZDZD8N1aU9',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14170.!2d78.!3d27.!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI2JzU5LjkiTiA3OMKwMDEnMjAuMCJF!5e0!3m2!1sen!2sin!4v1',

  businessHours: 'Open 24 Hours – Enquiries Accepted Anytime',

  tagline: 'Reliable Transportation Solutions for Full Load, Part Load & Special Vehicle Requirements',
  description:
    'Based in Panethi, Aligarh, OM Transport Service & Commission Agent helps customers and businesses arrange suitable commercial transportation for local, long-distance and all-India requirements.',

  vehicles: ['14 FT', '17 FT', '19 FT', '20 FT', '22 FT', 'Tata Ace'],

  services: [
    'Full Load Transport',
    'Part Load Transport',
    'Special Vehicle Arrangement',
    'Commission Agent Services',
    'Local Transportation',
    'Long-Distance Transportation',
    'All India Transport Service',
    'Business / Commercial Transport',
  ],

  seo: {
    title: 'OM Transport Service & Commission Agent | Truck Transport Aligarh | Full Load, Part Load',
    description:
      'OM Transport Service & Commission Agent – Reliable heavy truck transportation from Panethi, Aligarh. Full load, part load, special vehicles. All India service. Call +91 98972 70966.',
    keywords:
      'transport service aligarh, truck transport aligarh, full load transport, part load transport, commission agent aligarh, heavy transport uttar pradesh, commercial truck service, all india transport, truck booking aligarh',
    ogImage: '/og-image.jpg',
    siteUrl: 'https://omtransport.in', // Update with actual domain
  },
} as const;

// Default helper for generic CTAs
export const WHATSAPP_MESSAGE = (
  pickup = '[Pickup Location]',
  delivery = '[Delivery Location]',
  vehicle = '[Vehicle Type]',
  load = '[Full / Part Load]'
) =>
  encodeURIComponent(
    `Hello OM Transport Service & Commission Agent,\n\nI need a vehicle for transportation.\n\nPickup: ${pickup}\nDelivery: ${delivery}\nVehicle Required: ${vehicle}\nLoad Type: ${load}\n\nPlease provide availability and quotation.\n\nThank you.`
  );

export const WHATSAPP_URL = (message: string) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

// Helper to generate the exact professional WhatsApp message for the transport quote form
export function buildTransportQuoteWhatsAppUrl(data: {
  pickup?: string;
  delivery?: string;
  pickupDate?: string;
  loadType?: string;
  vehicleType?: string;
  approxWeight?: string;
  cargoType?: string;
  notes?: string;
}): string {
  const lines: string[] = [
    'Hello OM Transport Service & Commission Agent,',
    '',
    'I would like to request a transport quotation.',
  ];

  // Locations (Pickup & Delivery)
  const locLines: string[] = [];
  if (data.pickup && data.pickup.trim()) {
    locLines.push(`📍 Pickup Location: ${data.pickup.trim()}`);
  }
  if (data.delivery && data.delivery.trim()) {
    locLines.push(`📍 Delivery Location: ${data.delivery.trim()}`);
  }
  if (locLines.length > 0) {
    lines.push('');
    lines.push(locLines.join('\n'));
  }

  // Preferred Pickup Date (format YYYY-MM-DD -> DD/MM/YYYY if needed)
  if (data.pickupDate && data.pickupDate.trim()) {
    let dateStr = data.pickupDate.trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      const [y, m, d] = dateStr.split('-');
      dateStr = `${d}/${m}/${y}`;
    }
    lines.push('');
    lines.push(`📅 Preferred Pickup Date: ${dateStr}`);
  }

  // Load Type
  if (data.loadType && data.loadType.trim()) {
    let loadStr = data.loadType.trim();
    if (loadStr === 'full') loadStr = 'Full Truck Load';
    else if (loadStr === 'part') loadStr = 'Part Load';
    else if (loadStr === 'special') loadStr = 'Special Vehicle';
    lines.push('');
    lines.push(`🚛 Load Type: ${loadStr}`);
  }

  // Vehicle Type (omit if empty or placeholder)
  if (
    data.vehicleType &&
    data.vehicleType.trim() &&
    data.vehicleType.trim() !== 'Any / Suggest Suitable'
  ) {
    lines.push('');
    lines.push(`🚚 Vehicle Type: ${data.vehicleType.trim()}`);
  }

  // Approx. Weight (omit if empty)
  if (data.approxWeight && data.approxWeight.trim()) {
    lines.push('');
    lines.push(`⚖️ Approx. Weight: ${data.approxWeight.trim()}`);
  }

  // Cargo / Material Type (omit if empty)
  if (data.cargoType && data.cargoType.trim()) {
    lines.push('');
    lines.push(`📦 Cargo / Material: ${data.cargoType.trim()}`);
  }

  // Special Instructions (omit if empty)
  if (data.notes && data.notes.trim()) {
    lines.push('');
    lines.push(`📝 Special Instructions:\n${data.notes.trim()}`);
  }

  // Closing
  lines.push('');
  lines.push('Please provide me with the available vehicle and transport quotation.');
  lines.push('');
  lines.push('Thank you.');

  const fullMessage = lines.join('\n');
  const cleanNumber = BUSINESS_WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(fullMessage)}`;
}
