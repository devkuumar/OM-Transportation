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
        <div className="text-center mb-14">
          <span className="section-label mx-auto">Statutory Compliance</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal">
            Business & Legal Details
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We operate with complete statutory transparency. Here are our verified business registration and tax identification details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={24} className="text-orange" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg sm:text-xl text-charcoal">{COMPANY.tradeName}</h3>
                <p className="text-xs text-gray-500 font-medium">Proprietorship • Registered under Rahul Kumar</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
              <span className="text-xs text-gray-500 font-mono">GSTIN: <strong className="text-charcoal">{COMPANY.gstin}</strong></span>
              <button
                onClick={handleCopyGST}
                className="text-orange hover:text-orange-dark transition-colors p-1"
                title="Copy GSTIN"
                aria-label="Copy GSTIN"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-8">
            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Legal Name</span>
              <p className="text-sm font-bold text-charcoal">{COMPANY.legalName}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Trade Name</span>
              <p className="text-sm font-bold text-charcoal">{COMPANY.tradeName}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Constitution of Business</span>
              <p className="text-sm font-bold text-charcoal">{COMPANY.businessType}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Proprietor Name</span>
              <p className="text-sm font-bold text-charcoal">{COMPANY.proprietor}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">GST Registration Type</span>
              <p className="text-sm font-bold text-charcoal">{COMPANY.gstType} (Valid from {COMPANY.gstFrom})</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">GST Jurisdiction</span>
              <p className="text-sm font-bold text-charcoal">{COMPANY.gstJurisdiction}</p>
            </div>

            <div className="sm:col-span-2 space-y-1 pt-2 border-t border-gray-100">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Principal Place of Business</span>
              <p className="text-sm font-semibold text-charcoal leading-relaxed">{COMPANY.address.full}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Primary Contact</span>
              <p className="text-sm font-bold text-orange">{COMPANY.phone1Display}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Secondary Contact</span>
              <p className="text-sm font-bold text-orange">{COMPANY.phone2Display}</p>
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
