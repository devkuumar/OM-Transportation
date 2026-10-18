'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { COMPANY } from '@/lib/config';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Vehicles', href: '/#vehicles' },
  { label: 'Locations', href: '/#locations' },
  { label: 'Partner With Us', href: '/#partner' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:flex bg-[#091630] text-white text-sm px-4 py-2 justify-between items-center">
        <span className="flex items-center gap-2 text-gray-300">
          <span className="text-orange">📍</span> Aligarh–Kanpur Road, Panethi, Aligarh, UP 202002
        </span>
        <div className="flex items-center gap-6">
          <a href={`tel:${COMPANY.phone1}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
            <Phone size={13} /> {COMPANY.phone1Display}
          </a>
          <a href={`tel:${COMPANY.phone2}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
            <Phone size={13} /> {COMPANY.phone2Display}
          </a>
          <span className="text-gray-400">GSTIN: {COMPANY.gstin}</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled ? 'bg-navy shadow-lg shadow-black/20' : 'bg-navy'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-sm md:text-base tracking-wide leading-none">
                  OM TRANSPORT
                </div>
                <div className="text-orange text-[10px] md:text-xs font-medium tracking-widest leading-none mt-0.5">
                  SERVICE & COMMISSION AGENT
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-gray-200 hover:text-orange px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#quote"
                className="ml-4 bg-orange hover:bg-orange-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Request a Vehicle
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={`tel:${COMPANY.phone1}`}
                className="flex items-center gap-1.5 bg-orange text-white px-3 py-1.5 rounded-lg text-sm font-semibold"
                aria-label="Call Now"
              >
                <Phone size={14} /> Call
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="text-white p-1.5"
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-navy-dark border-t border-white/10">
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-orange py-2.5 px-3 text-base font-medium border-b border-white/5 last:border-0 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#quote"
                onClick={() => setOpen(false)}
                className="mt-3 bg-orange hover:bg-orange-dark text-white py-3 px-4 rounded-lg text-center font-semibold transition-colors"
              >
                Request a Vehicle
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
