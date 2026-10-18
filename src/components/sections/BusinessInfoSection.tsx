'use client';
import { useState } from 'react';
import { ShieldCheck, Copy, Check, FileText, MapPin, Phone, Building } from 'lucide-react';
import { COMPANY } from '@/lib/config';

export default function BusinessInfoSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyGST = () => {
    navigator.clipboard.writeText(COMPANY.gstin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="business-info" className="section-pad bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label mx-auto">Statutory Compliance</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal">
            Business & Legal Details
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            We operate with complete statutory transparency. Here are our verified business registration and tax identification details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl p-5 sm:p-10 border border-gray-200 shadow-md">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-navy text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <ShieldCheck size={22} className="text-orange" />
              </div>
              <div className="min-w-0">
                <h3 className="font-extrabold text-base sm:text-xl text-charcoal truncate">
                  {COMPANY.tradeName}
                </h3>
                <p className="text-xs text-gray-500 font-medium truncate">
                  Proprietorship • Registered under Rahul Kumar
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-sm flex-shrink-0">
              <span className="text-xs text-gray-500 font-mono">
                GSTIN: <strong className="text-charcoal font-bold">{COMPANY.gstin}</strong>
              </span>
              <button
                onClick={handleCopyGST}
                className="text-orange hover:text-orange-dark active:scale-95 transition-all p-1.5 rounded-lg hover:bg-orange/10"
                title="Copy GSTIN"
                aria-label="Copy GSTIN"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 pt-6 sm:pt-8 text-xs sm:text-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">Legal Name</span>
              <p className="font-bold text-charcoal">{COMPANY.legalName}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">Trade Name</span>
              <p className="font-bold text-charcoal">{COMPANY.tradeName}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">Constitution of Business</span>
              <p className="font-bold text-charcoal">{COMPANY.businessType}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">Proprietor Name</span>
              <p className="font-bold text-charcoal">{COMPANY.proprietor}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">GST Registration Type</span>
              <p className="font-bold text-charcoal">{COMPANY.gstType} (Valid from {COMPANY.gstFrom})</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">GST Jurisdiction</span>
              <p className="font-bold text-charcoal">{COMPANY.gstJurisdiction}</p>
            </div>

            <div className="sm:col-span-2 space-y-1 pt-2 border-t border-gray-100">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">Principal Place of Business</span>
              <p className="font-semibold text-charcoal leading-relaxed">{COMPANY.address.full}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">Primary Contact</span>
              <a href={`tel:${COMPANY.phone1}`} className="block font-bold text-orange hover:underline">
                {COMPANY.phone1Display}
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">Secondary Contact</span>
              <a href={`tel:${COMPANY.phone2}`} className="block font-bold text-orange hover:underline">
                {COMPANY.phone2Display}
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 leading-relaxed bg-white p-4 rounded-xl border border-gray-100">
            <strong>B2B Billing Notice:</strong> GST-compliant invoices and e-way bill generation support are available for registered business customers. Commercial contracts are subject to mutually agreed transportation terms.
          </div>
        </div>
      </div>
    </section>
  );
}
