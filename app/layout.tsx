import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whatsapp";
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
  title: "Jilani Shipping | International Freight & China LCL Specialists",
  description:
    "Expert International Shipping & LCL solutions. Specialized in China to Pakistan imports, Gulf exports, and global freight forwarding. Reliable, fast, and cost-effective.",
  keywords: [
    "international freight forwarder Pakistan",
    "China to Pakistan LCL shipment",
    "global shipping solutions Karachi",
    "China import logistics Pakistan",
    "worldwide cargo services",
    "LCL consolidation China to Karachi",
    "shipping from Pakistan to UAE",
    "cargo services Pakistan to Dubai",
    "reliable shipping Pakistan to Gulf",
    "door to door cargo worldwide",
    "freight forwarder Karachi to global",
    "sea freight Pakistan to Europe",
    "air cargo international prices",
    "shipping from Pakistan to Saudi Arabia",
    "cargo to Riyadh from Karachi",
    "freight services Pakistan to Jeddah",
    "door to door shipping Saudi Arabia",
    "best logistics company Pakistan to KSA",
    "export services Pakistan to Saudi",
    "shipping from Pakistan to Kuwait",
    "cargo services Karachi to Kuwait",
    "freight forwarding Pakistan to Kuwait",
    "cheapest cargo to worldwide",
    "door to door cargo international",
    "international shipping company Pakistan",
    "freight forwarder Karachi",
    "logistics company Pakistan",
    "export shipping services Pakistan",
    "cargo company near me Pakistan",
    "best freight company for international shipping",
    "shipping rates Pakistan to worldwide",
    "sea freight vs air freight cost Pakistan",
    "container shipping Pakistan to worldwide",
    "customs clearance Pakistan shipping",
    "LCL shipment",
    "LCL shipment Karachi",
    "LCL shipping Pakistan",
    "Less than Container Load Karachi",
    "freight forwarding Karachi",
    "shipping company Karachi",
    "cargo services Karachi",
    "Karachi to Dubai cargo",
    "Karachi to China cargo",
    "import export Karachi",
    "custom clearance Karachi",
    "sea freight Pakistan",
    "air freight Karachi",
    "LCL cargo services",
    "FCL container shipping",
    "buyer consolidation services",
    "warehouse services Karachi",
    "project cargo handling",
    "door to door delivery Karachi",
    "supply chain solutions Pakistan",
    "freight logistics JSI",
    "Jilani Shipping International",
    "JSI freight services",
    "global cargo shipping",
    "international freight Karachi",
    "cargo tracking Karachi",
    "freight consultancy Pakistan",
    "multimodal transport Karachi",
    "cargo insurance services",
    "customs brokerage Karachi",
    "cargo consolidation Karachi",
    "warehouse management Karachi",
    "logistics solutions JSI",
    "Shipping and logistics Karachi",
    "supply chain management Pakistan",
    "jilani shipping international",
    "freight services Karachi",
    "cargo forwarding JSI",
    "international shipping Karachi",
    "logistics experts Pakistan",
    "freight handling Karachi",
    "cargo solutions JSI",
    "shipping logistics Karachi",
    "freight network Pakistan",
    "global logistics JSI",
    "cargo operations Karachi",
    "freight management Pakistan",
    "logistics services JSI",
    "shipping solutions Karachi",
    "freight specialists Pakistan",
    "cargo logistics JSI",
    "international freight services Karachi",
    "supply chain experts Pakistan",
    "freight and logistics JSI",
    "cargo transport Karachi",
    "logistics consultancy Pakistan",
    "freight solutions JSI",
    "shipping and freight Karachi",
    "cargo handling services Pakistan",
    "logistics management JSI",
    "freight operations Karachi",
    "global freight services Pakistan",
    "cargo shipping solutions JSI",
    "international logistics Karachi",
    "freight and cargo Pakistan",
    "logistics network JSI",
    "freight forwarding services Karachi",
    "shipping and logistics solutions Pakistan",
    "shipping and freight services JSI",
    "shipping or logistic",
    "Best Rate",
    "Worldwide Shipping",
    "Trusted Shipping",
    "Logistics Solutions",
    "Efficient Freight",
    "Cargo Experts",
    "Reliable Shipping",
    "Global Freight",
    "Freight Specialists",
    "Comprehensive Logistics",
    "Seamless Shipping",
    "Innovative Freight",
    "Customized Logistics",
    "End-to-End Shipping",
    "Freight Excellence",
    "Logistics Professionals",
    "Worldwide Freight",
    "Shipping Made Easy",
    "Freight and Logistics Experts",
    "Your Shipping Partner",
    "Cargo and Freight Solutions",
    "Logistics You Can Trust",
    "Freight Forwarding Experts",
    "Global Shipping Solutions",
    "Efficient Cargo Handling",
    "Reliable Freight Services",
    "Comprehensive Freight Solutions",
    "Seamless Logistics Services",
    "Innovative Shipping Solutions",
    "Customized Freight Services",
    "End-to-End Logistics Solutions",
    "Freight and Shipping Experts",
    "Logistics Made Simple",
    "Your Freight Partner",
    "Cargo and Logistics Solutions",
    "Shipping You Can Trust",
    "challenging Rates",
    "Competative Rates",
    "No hidden charges",
    "bestest graantee rates",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsBusiness",
    "name": "Jilani Shipping International",
    "url": "https://jilanishipping.net",
    "logo": "https://jilanishipping.net/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-301-8204493",
      "contactType": "customer service",
      "email": "info@jilanishipping.net"
    },
    "description": "Professional international freight forwarding and world-wide one-stop integrated logistics service. Specializing in LCL shipment, Karachi to Dubai, China, USA, and UK routes. Partners with CMA CGM, MAERSK, MSC, EVERGREEN.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jilani Shipping Global Services",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "LCL Shipment Services Karachi" }},
        { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "Karachi to Dubai Cargo" }},
        { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "Karachi to China Freight" }},
        { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "Karachi to USA Shipping" }},
        { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": "Karachi to UK Air Cargo" }},
        { "@type": "ListItem", "position": 6, "item": { "@type": "Service", "name": "Iran Transit Service" }},
        { "@type": "ListItem", "position": 7, "item": { "@type": "Service", "name": "Karachi to South Africa Durban" }},
        { "@type": "ListItem", "position": 8, "item": { "@type": "Service", "name": "Karachi to Australia Sydney" }},
        { "@type": "ListItem", "position": 9, "item": { "@type": "Service", "name": "Europe Gateway Rotterdam" }},
        { "@type": "ListItem", "position": 10, "item": { "@type": "Service", "name": "PVOC Pre-Export Verification of Conformity" }}
      ]
    },
    "areaServed": ["PK", "AE", "CN", "US", "GB", "SA", "QA", "DE", "ZA", "AU", "NL", "FR", "IT"],
    "subjectOf": {
      "@type": "VideoObject",
      "name": "Jilani Shipping Port Operations",
      "description": "Professional port and shipping operations by Jilani Shipping International.",
      "thumbnailUrl": "https://jilanishipping.net/logo.png",
      "uploadDate": "2024-01-01T08:00:00+05:00",
      "duration": "PT0M27S",
      "contentUrl": "https://jilanishipping.net/images/shipping.mp4"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressCountry": "PK"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <Script 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="1HjjmS9vsobNlQH0F/jVAg" 
          strategy="afterInteractive"
        />
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-C4PRZE07D3" strategy="afterInteractive" />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C4PRZE07D3');
          `}
        </Script>
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
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
