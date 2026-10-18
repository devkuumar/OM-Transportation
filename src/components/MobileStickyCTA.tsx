'use client';
import { Phone, MessageCircle, Truck } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

export default function MobileStickyCTA() {
  const waMsg = WHATSAPP_URL(WHATSAPP_MESSAGE());

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy shadow-2xl border-t border-white/10">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${COMPANY.phone1}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-white/5 transition-colors"
          aria-label="Call us"
        >
          <Phone size={20} className="text-orange" />
          <span className="text-[11px] font-semibold text-gray-200">CALL</span>
        </a>
        <a
          href={waMsg}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-green-600 text-white"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} fill="white" strokeWidth={1.5} />
          <span className="text-[11px] font-semibold">WHATSAPP</span>
        </a>
        <a
          href="/#quote"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-orange text-white hover:bg-orange-dark transition-colors"
          aria-label="Request vehicle"
        >
          <Truck size={20} />
          <span className="text-[11px] font-semibold">REQUEST</span>
        </a>
      </div>
    </div>
  );
}
