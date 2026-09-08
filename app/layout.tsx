import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whatsapp";
import SmartQuoteWizard from "@/components/SmartQuoteWizard";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://jilanishipping.net"),
  other: {
    "google-site-verification": "aj94_WtlcjHxi1gd7f2KwaEQaLHX8lkPHJr7Xf-NJUg",
    "google-site-verification-2": "pd_oDtTHCN_0supzJeLXGK_Tfn8xpahdkdkdx2VCNpUUs",
    "geo.region": "PK-SD",
    "geo.placename": "Karachi",
    "geo.position": "24.8607;67.0011",
    "ICBM": "24.8607, 67.0011",
  },
  openGraph: {
    type: "website",
    url: "https://jilanishipping.net",
    images: [
      {
        url: "https://jilanishipping.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jilani Shipping International - Freight & Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://jilanishipping.net/og-image.jpg"],
  },
  title: {
    default: "Jilani Shipping | Shipping Company in Karachi",
    template: "%s | Jilani Shipping International",
  },
  description:
    "Jilani Shipping International is a shipping company in Karachi for commercial import and export shipments, cargo, FCL, LCL, air freight and customs clearance.",
  keywords: [
    "Jilani Shipping International",
    "Jilani Shipping",
    "best shipping company in Karachi",
    "shipping company in Karachi",
    "freight forwarder Karachi",
    "import shipment management",
    "export inquiry management",
    "export shipment management",
    "commercial cargo shipping Pakistan",
    "import export shipping Karachi",
    "FCL and LCL shipping Pakistan",
    "sea freight Karachi",
    "air freight Karachi",
    "customs clearance Karachi",
    "China to Pakistan shipping",
    "Pakistan worldwide shipping",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsBusiness",
    "name": "Jilani Shipping International",
    "alternateName": ["Jilani Shipping", "JSI"],
    "url": "https://jilanishipping.net",
    "logo": "https://jilanishipping.net/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-318-0155643",
      "contactType": "customer service",
      "email": "info@jilanishipping.net"
    },
    "description": "Karachi shipping company for commercial import and export shipment management, cargo, FCL, LCL, air freight, customs clearance and worldwide freight forwarding.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jilani Shipping Global Services",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "LCL Shipment Services Karachi" }},
        { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "Karachi to Dubai Cargo" }},
        { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "China to Karachi Import Freight" }},
        { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "Karachi to China Export Shipping" }},
        { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": "Karachi to USA Shipping" }},
        { "@type": "ListItem", "position": 6, "item": { "@type": "Service", "name": "Karachi to UK Air Cargo" }},
        { "@type": "ListItem", "position": 7, "item": { "@type": "Service", "name": "Iran Transit Service" }},
        { "@type": "ListItem", "position": 8, "item": { "@type": "Service", "name": "Karachi to South Africa Durban" }},
        { "@type": "ListItem", "position": 9, "item": { "@type": "Service", "name": "Karachi to Australia Sydney" }},
        { "@type": "ListItem", "position": 10, "item": { "@type": "Service", "name": "PVOC Pre-Export Verification of Conformity" }}
      ]
    },
    "areaServed": ["PK", "AE", "CN", "US", "GB", "SA", "QA", "DE", "ZA", "AU", "NL", "FR", "IT"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite #266, Glass Tower, Teen Talwar, Clifton",
      "addressLocality": "Karachi",
      "postalCode": "75600",
      "addressCountry": "PK"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WHSWB82F');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHSWB82F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <SmartQuoteWizard />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
