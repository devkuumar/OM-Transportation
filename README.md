# OM Transport Service & Commission Agent — Website

Official, modern, responsive website built for **OM Transport Service & Commission Agent** (Panethi, Aligarh, Uttar Pradesh).

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd om-transport
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 🏢 Business Configuration

All verified business data (GSTIN, Address, Phone Numbers, WhatsApp, Coordinates) is centralized in:
📂 `src/lib/config.ts`

To update any details (such as new telephone numbers, updated email, or Google Maps coordinates), simply edit this single file.

```typescript
export const COMPANY = {
  name: 'OM Transport Service & Commission Agent',
  legalName: 'RAHUL KUMAR',
  tradeName: 'OM TRANSPORT SERVICE AND COMMISSION AGENT',
  proprietor: 'Rahul Kumar',
  gstin: '09DUMPK2053N1Z3',
  phone1: '+919897270966',
  phone2: '+917037870966',
  ...
}
```

---

## 📦 Project Architecture

```
om-transport/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── quote/route.ts      # Quote & Transport Request handler
│   │   │   └── partner/route.ts    # Vehicle Owner Registration handler
│   │   ├── globals.css             # Industrial theme (Navy, Charcoal, Safety Orange)
│   │   ├── layout.tsx              # SEO Schema (LocalBusiness), Metadata & Global Shell
│   │   ├── page.tsx                # Complete 16-section homepage
│   │   ├── robots.ts               # Search engine crawler instructions
│   │   └── sitemap.ts              # XML Sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx              # Responsive navigation with top contact bar
│   │   ├── Footer.tsx              # Full footer with verified business details
│   │   ├── WhatsAppFAB.tsx         # Floating quick WhatsApp conversion button
│   │   ├── MobileStickyCTA.tsx     # Sticky mobile conversion bar (CALL | WHATSAPP | REQUEST)
│   │   └── sections/
│   │       ├── HeroSection.tsx             # 3-5s value proposition with instant booking
│   │       ├── QuickInfoBar.tsx            # Compact verified business facts strip
│   │       ├── AboutSection.tsx            # Company history, Proprietor Rahul Kumar
│   │       ├── ServicesSection.tsx         # 8 verified services (FTL, PTL, etc.)
│   │       ├── VehiclesSection.tsx         # 14ft, 17ft, 19ft, 20ft, 22ft & Tata Ace
│   │       ├── CommissionAgentSection.tsx  # Commission model & FTL vs PTL
│   │       ├── QuoteSection.tsx            # Interactive lead-gen form
│   │       ├── WhyChooseSection.tsx        # Real operational strengths (no fake claims)
│   │       ├── HowItWorksSection.tsx       # 4-step transport workflow
│   │       ├── IndustriesSection.tsx       # Sectors served (Construction, Steel, etc.)
│   │       ├── ServiceAreaSection.tsx      # Operating coverage & Google Maps
│   │       ├── GallerySection.tsx          # Real operations & office visual previews
│   │       ├── PartnerSection.tsx          # Vehicle owner onboarding form
│   │       ├── ExpansionSection.tsx        # Future logistics network vision
│   │       ├── BusinessInfoSection.tsx     # Legal compliance & copyable GSTIN
│   │       └── ContactSection.tsx          # Contact desk, click-to-dial & callback
│   └── lib/
│       ├── config.ts               # Single source of business truth
│       └── utils.ts                # Class merging utility
```

---

## 🎯 Verified Business Data Included

- **Trade Name**: OM TRANSPORT SERVICE AND COMMISSION AGENT
- **Legal Name**: RAHUL KUMAR
- **Constitution**: Proprietorship (Proprietor: Rahul Kumar)
- **GSTIN**: `09DUMPK2053N1Z3` (Regular, valid from 30/01/2026, Aligarh-I)
- **Principal Address**: Aligarh–Kanpur Road, Near Nayara Petrol Pump, Panethi, District Aligarh, Uttar Pradesh – 202002
- **Direct Telephones**:
  - `+91 98972 70966` (Primary & WhatsApp)
  - `+91 70378 70966` (Secondary)
- **Vehicle Sizes Advertised**: 14 FT, 17 FT, 19 FT, 20 FT, 22 FT and Tata Ace
- **Google Maps Destination**: [Open Map](https://maps.app.goo.gl/dinot76ZDZD8N1aU9)
