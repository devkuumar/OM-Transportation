'use client';
import { Phone, MessageCircle, Truck } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

export default function MobileStickyCTA() {
  const waMsg = WHATSAPP_URL(WHATSAPP_MESSAGE());

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy-dark shadow-[0_-4px_20px_rgba(0,0,0,0.35)] border-t border-white/10"
      style={{
        paddingBottom: 'max(0px, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="grid grid-cols-3 h-14 sm:h-16">
        <a
          href={`tel:${COMPANY.phone1}`}
          className="flex flex-col items-center justify-center gap-1 text-white hover:bg-white/5 active:bg-white/10 transition-colors"
          aria-label="Call Now"
        >
          <Phone size={18} className="text-orange" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-gray-200 uppercase">CALL</span>
        </a>
        <a
          href={waMsg}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} fill="white" strokeWidth={1.5} />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">WHATSAPP</span>
        </a>
        <a
          href="/#quote"
          className="flex flex-col items-center justify-center gap-1 bg-orange hover:bg-orange-dark active:bg-orange-dark text-white transition-colors"
          aria-label="Request Vehicle"
        >
          <Truck size={18} />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">REQUEST</span>
        </a>
      </div>
    </div>
  );
}
