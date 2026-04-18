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
    title: "Jilani Shipping International | Freight & Logistics",
    description:
      "Reliable freight & cargo solutions from Karachi to Dubai, China, and worldwide.",
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
    title: "Jilani Shipping International | Freight & Logistics",
    description:
      "JSI — trusted freight forwarding, cargo, and logistics services from Karachi to worldwide destinations.",
    images: ["https://jilanishipping.net/og-image.jpg"],
  },
  title: "Freight Forwarding Karachi | Jilani Shipping International",
  description:
    "JSI offers professional international freight forwarding, sea freight, air cargo, and logistics services. Partners with CMA CGM, MAERSK, MSC for global shipping.",
  keywords: [
    "freight forwarding Karachi",
    "shipping company Karachi",
    "cargo services Karachi",
    "Karachi to Dubai cargo",
    "Karachi to China cargo",
    "logistics company Pakistan",
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
    "international shipping company",
"import export shipping services",
"global cargo services",
"sea freight services",
"FCL shipping rates",
"LCL shipping services",
"best logistics company UAE",
"door to door cargo service",
"container shipping service",
"worldwide freight forwarding",
    "import export services Dubai",
"shipping company in Dubai",
"cargo service Dubai",
"sea freight Dubai",
"Dubai to Pakistan cargo service",
"Dubai to China cargo service",
"Dubai customs clearance service",
"freight forwarding Dubai",
"container shipping Dubai",
"commercial cargo service Dubai",

"shipping company Kuwait",
"Kuwait import export services",
"Kuwait to Dubai cargo service",
"freight forwarding Kuwait",
"Kuwait sea freight rates",
"Kuwait to Pakistan cargo service",
"Kuwait to China shipping",

"China to Dubai shipping",
"China to UAE cargo service",
"China to Pakistan sea freight",
"China import export services",
"China container shipping rates",
"door to door shipping China to UAE",
"freight forwarding China to Dubai",

"Dubai to Pakistan cargo",
"UAE to Pakistan shipping service",
"Pakistan import export services",
"Pakistan sea freight services",
"Karachi shipping company",
"Pakistan customs clearance service",
"freight forwarding Pakistan",

"shipping company Doha Qatar",
"Qatar to Dubai cargo service",
"Qatar import export services",
"sea freight Qatar",
"freight forwarding Qatar",
"Qatar to Pakistan shipping",
"Qatar to China cargo service",

"international shipping company",
"import export shipping services",
"global cargo service",
"sea freight services",
"FCL shipping rates",
"LCL shipping services",
"door to door cargo service",
"container shipping services",
"worldwide freight forwarding",
"best shipping line",
"affordable shipping services",
"reliable freight company",
"trusted logistics provider",
"efficient cargo solutions",
"professional shipping services",
"expert freight management",
"comprehensive logistics solutions",
"global shipping network",
"customized freight services",
"end-to-end logistics management",
"cargo tracking services",
"24/7 customer support",
"competitive shipping rates",         
"best freight company",
"affordable freight services",
"reliable shipping solutions",
"trusted cargo provider",
"efficient logistics services",
"professional freight forwarding",
"expert shipping management",
"comprehensive cargo solutions",
"global freight network",
"customized shipping services",
"end-to-end freight management",
"real-time cargo tracking",
"24/7 logistics support",
"competitive freight rates",
"jilani shipping international",
"jilani",
"JSI",
"JSI shipping",
"JSI freight",
"JSI logistics",
"Jilani freight services",
"Jilani logistics solutions",
"Jilani cargo handling",
"Jilani shipping company",
"Jilani international shipping",
"Jilani supply chain management",
"Jilani transport services",
"Jilani warehousing solutions",
"Jilani distribution services",
"Jilani customs brokerage",
"Jilani door to door delivery",
"Jilani project cargo",
"Jilani buyer consolidation",
"Jilani sea freight",
"Jilani air freight",
"Jilani FCL services",
"Jilani LCL services",
"Jilani global shipping",
"Jilani freight forwarding experts",
"Jilani logistics professionals",
"Jilani cargo solutions",
"Jilani shipping experts",
"Jilani freight management",
"Jilani logistics network",
"Jilani shipping and logistics",
"Iran transit service",
"Gwadar to Iran cargo",
"Karachi to Iran transit",
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
      "name": "Logistics Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sea Freight Karachi to Dubai" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cargo Karachi to China" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Freight Karachi to USA" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Air Cargo Karachi to UK" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Iran Transit Service from Karachi & Gwadar" }}
      ]
    },
    "areaServed": ["PK", "AE", "CN", "US", "GB"],
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHSWB82F');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHSWB82F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
