// OM Transport Service & Commission Agent — Central Configuration
// Update this file to reflect actual business information.

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

  whatsapp: '919897270966',
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

export const WHATSAPP_MESSAGE = (pickup = '[Pickup Location]', delivery = '[Delivery Location]', vehicle = '[Vehicle Type]', load = '[Full / Part Load]') =>
  encodeURIComponent(
    `Hello OM Transport Service & Commission Agent,\n\nI need a vehicle for transportation.\n\nPickup: ${pickup}\nDelivery: ${delivery}\nVehicle Required: ${vehicle}\nLoad Type: ${load}\n\nPlease provide availability and quotation.\n\nThank you.`
  );

export const WHATSAPP_URL = (message: string) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${message}`;
