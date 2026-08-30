import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "China to Pakistan Shipping Cost | FCL, LCL & Air",
  description: "Request China to Pakistan shipping costs for FCL, LCL and air freight with supplier pickup and Karachi import support.",
  alternates: { canonical: "/china-to-pakistan-shipping-cost/" },
};

export default function ChinaPakistanShippingCost() {
  return <SeoLandingPage
    eyebrow="China to Pakistan Freight Rates"
    title="China to Pakistan Shipping Cost for Commercial Imports"
    intro="China-to-Pakistan shipping cost depends on the origin city, port, cargo volume, weight, Incoterm and selected service. Request a current FCL, LCL or air freight quotation instead of relying on an outdated fixed rate."
    services={[
      { title: "LCL Shipping by CBM", text: "Suitable for smaller commercial shipments that do not require a full container. Share exact package dimensions for accurate CBM pricing." },
      { title: "FCL 20ft & 40ft", text: "Full-container quotations can include ocean freight, China origin scope and relevant Karachi destination requirements." },
      { title: "Air Freight from China", text: "For urgent or high-value goods, compare chargeable weight, routing and estimated transit against available sea freight options." },
    ]}
    process={["Share the China pickup city or POL and supplier Incoterm.", "Provide commodity, packages, weight, dimensions or container size.", "Confirm Karachi Port, Port Qasim or required delivery location.", "Receive a current freight quotation and charges breakdown for review."]}
    faq={[
      { question: "How much does shipping from China to Pakistan cost?", answer: "There is no reliable permanent price. Rates change by origin, carrier capacity, cargo size, weight, season and service type. A current quotation requires complete shipment details." },
      { question: "Which is cheaper from China: LCL or FCL?", answer: "LCL is often suitable for smaller volumes, while FCL may become more economical as cargo volume increases. The break-even point depends on current freight and local charges." },
      { question: "Which China ports ship to Karachi?", answer: "Common options include Shanghai, Ningbo, Shenzhen, Qingdao, Tianjin and other ports. The best port depends on the supplier location, cargo and available routing." },
    ]}
    related={[{ href: "/import-from-china-to-karachi/", label: "China to Karachi Import" }, { href: "/lcl-shipping/", label: "LCL Shipping" }, { href: "/cargo-karachi-china/", label: "Pakistan–China Trade" }]}
  />;
}
