'use client';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  const msg = WHATSAPP_URL(WHATSAPP_MESSAGE());

  return (
    <a
      href={msg}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 md:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-950/30 transition-all hover:scale-105 active:scale-95"
      style={{
        bottom: 'calc(4.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="white" strokeWidth={1.5} />
    </a>
  );
}
