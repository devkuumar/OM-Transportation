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
      className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 transition-all hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={1.5} />
    </a>
  );
}
