import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whatsapp";

export const metadata: Metadata = {
  metadataBase: new URL("https://jilanishipping.net"),
  alternates: {
    canonical: "https://jilanishipping.net",
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
    "JSI offers professional freight forwarding, sea freight, air cargo, customs clearance, and logistics services in Karachi. Cargo shipping from Karachi to Dubai & China.",
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
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}