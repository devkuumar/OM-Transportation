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
    <footer className="bg-[#091630] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-bold text-base tracking-wide">OM TRANSPORT</div>
                <div className="text-orange text-xs font-medium tracking-widest">SERVICE & COMMISSION AGENT</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Reliable transportation and vehicle-arrangement services from Panethi, Aligarh, Uttar Pradesh.
              Full load, part load and special vehicle solutions across India.
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${COMPANY.phone1}`}
                className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                <Phone size={15} /> Call Now
              </a>
              <a
                href={waMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/#about' },
                { label: 'Services', href: '/#services' },
                { label: 'Vehicle Options', href: '/#vehicles' },
                { label: 'Get a Quote', href: '/#quote' },
                { label: 'Locations', href: '/#locations' },
                { label: 'Partner With Us', href: '/#partner' },
                { label: 'Contact', href: '/#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-orange text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">{COMPANY.address.full}</span>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone1}`} className="flex items-center gap-3 text-gray-400 hover:text-orange text-sm transition-colors">
                  <Phone size={16} className="text-orange flex-shrink-0" /> {COMPANY.phone1Display}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone2}`} className="flex items-center gap-3 text-gray-400 hover:text-orange text-sm transition-colors">
                  <Phone size={16} className="text-orange flex-shrink-0" /> {COMPANY.phone2Display}
                </a>
              </li>
              <li className="flex gap-3">
                <FileText size={16} className="text-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">GSTIN</div>
                  <div className="text-gray-300 text-sm font-mono">{COMPANY.gstin}</div>
                </div>
              </li>
              <li>
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange text-sm hover:underline"
                >
                  Get Directions →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <span>© {year} OM Transport Service & Commission Agent. All Rights Reserved.</span>
          <span>Proprietor: Rahul Kumar | GSTIN: {COMPANY.gstin}</span>
        </div>
      </div>
    </footer>
  );
}
