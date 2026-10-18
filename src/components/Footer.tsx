'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Truck, MessageCircle, Mail, FileText } from 'lucide-react';
import { COMPANY, WHATSAPP_MESSAGE, WHATSAPP_URL } from '@/lib/config';

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const waMsg = WHATSAPP_URL(WHATSAPP_MESSAGE());

  return (
    <footer className="bg-[#091630] text-white border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm shadow-orange/30">
                <Truck className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-black text-base sm:text-lg tracking-wide">OM TRANSPORT</div>
                <div className="text-orange text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  SERVICE & COMMISSION AGENT
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
              Reliable transportation and vehicle-arrangement services from Panethi, Aligarh, Uttar Pradesh.
              Full load, part load, and special commercial vehicle solutions connecting businesses across India.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <a
                href={`tel:${COMPANY.phone1}`}
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark active:bg-orange-dark text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors shadow-md shadow-orange/30"
              >
                <Phone size={15} /> Call Now
              </a>
              <a
                href={waMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors shadow-md shadow-green-950/30"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-widest mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/#about' },
                { label: 'Services', href: '/#services' },
                { label: 'Vehicle Options', href: '/#vehicles' },
                { label: 'Get a Quote', href: '/#quote' },
                { label: 'Locations & Map', href: '/#locations' },
                { label: 'Partner With Us', href: '/#partner' },
                { label: 'Contact Us', href: '/#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-orange transition-colors inline-block py-0.5">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-widest mb-4">
              Panethi Office
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex gap-2.5">
                <MapPin size={16} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">{COMPANY.address.full}</span>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone1}`} className="flex items-center gap-2.5 text-gray-400 hover:text-orange transition-colors">
                  <Phone size={16} className="text-orange flex-shrink-0" /> {COMPANY.phone1Display}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone2}`} className="flex items-center gap-2.5 text-gray-400 hover:text-orange transition-colors">
                  <Phone size={16} className="text-orange flex-shrink-0" /> {COMPANY.phone2Display}
                </a>
              </li>
              <li className="flex gap-2.5">
                <FileText size={16} className="text-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Verified GSTIN</div>
                  <div className="text-gray-300 font-mono text-xs sm:text-sm mt-0.5 font-semibold">{COMPANY.gstin}</div>
                </div>
              </li>
              <li>
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange text-xs font-bold hover:underline inline-flex items-center gap-1"
                >
                  Get Directions in Google Maps →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left text-xs text-gray-500">
          <span>© {year} OM Transport Service & Commission Agent. All Rights Reserved.</span>
          <span>Proprietor: Rahul Kumar | Registered GSTIN: {COMPANY.gstin}</span>
        </div>
      </div>
    </footer>
  );
}
