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
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:flex bg-[#091630] text-white text-xs lg:text-sm px-4 sm:px-6 lg:px-8 py-2 justify-between items-center border-b border-white/5">
        <span className="flex items-center gap-2 text-gray-300 truncate">
          <span className="text-orange flex-shrink-0">📍</span>
          <span className="truncate">Aligarh–Kanpur Road, Panethi, Aligarh, UP 202002</span>
        </span>
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <a href={`tel:${COMPANY.phone1}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
            <Phone size={13} className="text-orange" /> {COMPANY.phone1Display}
          </a>
          <a href={`tel:${COMPANY.phone2}`} className="hidden lg:flex items-center gap-1.5 hover:text-orange transition-colors">
            <Phone size={13} className="text-orange" /> {COMPANY.phone2Display}
          </a>
          <span className="text-gray-400 font-mono text-xs">GSTIN: {COMPANY.gstin}</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled ? 'bg-navy shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-navy'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm shadow-orange/30">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight min-w-0">
                <div className="text-white font-black text-sm sm:text-base tracking-wide leading-none truncate">
                  OM TRANSPORT
                </div>
                <div className="text-orange text-[9px] sm:text-[11px] font-bold tracking-wider leading-none mt-1 uppercase truncate">
                  SERVICE & COMMISSION AGENT
                </div>
              </div>
            </Link>

            {/* Desktop navigation (min-width: 1024px) */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-gray-200 hover:text-orange px-3 py-2 text-sm font-semibold transition-colors rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#quote"
                className="ml-3 bg-orange hover:bg-orange-dark text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-orange/20"
              >
                Request a Vehicle
              </a>
            </div>

            {/* Mobile / Tablet controls (< 1024px) */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
              <a
                href={`tel:${COMPANY.phone1}`}
                className="flex items-center gap-1.5 bg-orange text-white px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold shadow-sm"
                aria-label="Call Now"
              >
                <Phone size={13} />
                <span>Call</span>
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="text-white p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none"
                aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={open}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown with landscape scrolling support */}
        {open && (
          <div className="lg:hidden bg-navy-dark/95 backdrop-blur-xl border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 flex flex-col gap-1 safe-pb">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-200 hover:text-orange py-3 px-3 text-base font-semibold border-b border-white/5 last:border-0 transition-colors flex items-center justify-between"
                >
                  <span>{l.label}</span>
                  <span className="text-gray-500 text-xs">→</span>
                </a>
              ))}
              <a
                href="/#quote"
                onClick={() => setOpen(false)}
                className="mt-3 bg-orange hover:bg-orange-dark active:bg-orange-dark text-white py-3.5 px-4 rounded-xl text-center font-bold text-sm transition-colors shadow-lg shadow-orange/30"
              >
                Request a Vehicle Now
              </a>
              <div className="pt-4 mt-2 border-t border-white/10 text-xs text-gray-400 space-y-1">
                <div>Aligarh–Kanpur Road, Panethi, Aligarh</div>
                <div className="text-orange font-bold">{COMPANY.phone1Display}</div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
