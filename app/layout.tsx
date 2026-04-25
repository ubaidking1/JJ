import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whatsapp";

export const metadata: Metadata = {
  metadataBase: new URL("https://jilanishipping.net"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "en-AE": "/",
    },
  },
  other: {
    "google-site-verification": "aj94_WtlcjHxi1gd7f2KwaEQaLHX8lkPHJr7Xf-NJUg",
    "google-site-verification-2": "pd_oDtTHCN_0supzJeLXGK_Tfn8xpahdkdx2VCNpUUs",
    "geo.region": "PK-SD",
    "geo.placename": "Karachi",
    "geo.position": "24.8607;67.0011",
    "ICBM": "24.8607, 67.0011",
  },
  openGraph: {
    title: "Jilani Shipping | Pakistan's No.1 Freight Forwarder",
    description:
      "Reliable freight solutions from Karachi to Dubai, Kuwait & Saudi Arabia. Expert sea/air freight & customs clearance.",
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
    title: "Jilani Shipping | Pakistan's No.1 Freight Forwarder",
    description:
      "Trusted freight forwarding, cargo, and logistics services from Karachi to worldwide destinations.",
    images: ["https://jilanishipping.net/og-image.jpg"],
  },
  title: "Jilani Shipping | #1 Cargo to UAE, Saudi & Kuwait - Lowest Rates Guaranteed",
  description:
    "Shipping from Pakistan to UAE, Saudi or Kuwait? Save up to 20% on freight. Fast, door-to-door delivery with zero hidden charges. Get your FREE quote in minutes!",
  keywords: [
    "shipping from Pakistan to UAE",
    "cargo services Pakistan to Dubai",
    "cheapest shipping to Dubai from Karachi",
    "door to door cargo UAE from Pakistan",
    "freight forwarder Karachi to UAE",
    "sea freight Pakistan to Dubai rates",
    "air cargo Pakistan to UAE price",
    "logistics company Pakistan to UAE",
    "shipping from Pakistan to Saudi Arabia",
    "cargo to Riyadh from Karachi",
    "freight services Pakistan to Jeddah",
    "door to door shipping Saudi Arabia",
    "best logistics company Pakistan to KSA",
    "export services Pakistan to Saudi",
    "shipping from Pakistan to Kuwait",
    "cargo services Karachi to Kuwait",
    "freight forwarding Pakistan to Kuwait",
    "cheapest cargo to Kuwait",
    "door to door cargo Kuwait",
    "international shipping company Pakistan",
    "freight forwarder Karachi",
    "logistics company Pakistan",
    "export shipping services Pakistan",
    "cargo company near me Pakistan",
    "best freight company for UAE shipping",
    "shipping rates Pakistan to Gulf",
    "sea freight vs air freight cost Pakistan",
    "container shipping Pakistan to UAE",
    "customs clearance Pakistan shipping",
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
    "description": "Professional international freight forwarding and world-wide one-stop integrated logistics service. Specializing in Karachi to Dubai, China, USA, and UK routes. Partners with CMA CGM, MAERSK, MSC, EVERGREEN.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jilani Shipping Global Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jilani Shipping Karachi to Dubai Cargo" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jilani Shipping Karachi to China Freight" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jilani Shipping Karachi to USA Shipping" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jilani Shipping Karachi to UK Air Cargo" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jilani Shipping Iran Transit Service" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jilani Shipping Karachi to South Africa Durban" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jilani Shipping Karachi to Australia Sydney" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jilani Shipping Europe Gateway Rotterdam" }}
      ]
    },
    "areaServed": ["PK", "AE", "CN", "US", "GB", "SA", "QA", "DE", "ZA", "AU", "NL", "FR", "IT"],
    "video": {
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHSWB82F');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C4PRZE07D3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C4PRZE07D3', {
                page_path: window.location.pathname,
              });
            `,
          }}
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
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
