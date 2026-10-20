import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { COMPANY } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import MobileStickyCTA from '@/components/MobileStickyCTA';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#091630',
};

export const metadata: Metadata = {
  title: COMPANY.seo.title,
  description: COMPANY.seo.description,
  keywords: COMPANY.seo.keywords,
  metadataBase: new URL(COMPANY.seo.siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: COMPANY.seo.title,
    description: COMPANY.seo.description,
    url: COMPANY.seo.siteUrl,
    siteName: COMPANY.name,
    locale: 'en_IN',
    type: 'website',
    images: [{ url: COMPANY.seo.ogImage, width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY.seo.title,
    description: COMPANY.seo.description,
    images: [COMPANY.seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': COMPANY.seo.siteUrl,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description: COMPANY.description,
    url: COMPANY.seo.siteUrl,
    telephone: [COMPANY.phone1, COMPANY.phone2],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.pincode,
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: COMPANY.location.latitude, longitude: COMPANY.location.longitude },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer',
    areaServed: { '@type': 'Country', name: 'India' },
    serviceType: 'Heavy Transportation & Commission Agent',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-charcoal antialiased overflow-x-hidden selection:bg-orange/20 selection:text-orange-dark`}>
        <Navbar />
        {/* pb-20 md:pb-0 ensures mobile sticky bar never overlaps footer or forms */}
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
