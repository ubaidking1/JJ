import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import ContentSections, { Section } from "@/components/ContentSections";
import FaqBlock from "@/components/FaqBlock";
import OperationsBlock from "@/components/OperationsBlock";


export const metadata: Metadata = pageMetadata({
  title: { absolute: "Export Shipping from Pakistan | Sea & Air Freight | JSI" },
  description: "Export goods from Pakistan with FCL, LCL and air freight, export documentation, customs coordination and worldwide shipping support from Jilani Shipping today.",
  keywords: [
    "export shipping from Pakistan",
    "export freight Karachi",
    "international export Pakistan",
    "sea freight export Karachi",
    "air freight export Pakistan",
    "export documentation Pakistan"
  ],
  alternates: { canonical: "/export-from-pakistan/" },
});


const sections: Section[] = [
  { title: "How an export from Karachi works",
    steps: [
      "Agree the Incoterm and payment terms with your buyer, and check any destination-country requirements for your product.",
      "Book the freight with your preferred service: FCL, LCL or air.",
      "Deliver the cargo to the port, the CFS (for LCL) or the airport, or arrange pickup from your factory.",
      "A licensed customs agent files the export Goods Declaration in the Pakistan Customs system.",
      "Obtain a certificate of origin or other certificates if the buyer or destination needs them.",
      "The cargo is loaded, and the bill of lading or airway bill is issued and sent to you.",
    ] },
  { title: "Documents usually needed",
    items: [
      "Commercial invoice and packing list.",
      "Export Goods Declaration and customs clearance.",
      "Bill of lading (sea) or airway bill (air).",
      "Certificate of origin where required, usually issued through a chamber of commerce.",
      "Destination-specific certificates, such as quality, phytosanitary or conformity certificates, depending on the goods and the country.",
    ] },
  { title: "Goods we commonly ship from Pakistan",
    paras: ["Textiles and garments, home textiles, leather goods, surgical and sports goods, rice and food items, and household products are among the goods we regularly handle. Each product and destination has its own rules, so tell us the commodity and the country at the start."] },
  { title: "What affects export freight cost",
    items: [
      "Mode and volume: FCL per container, LCL per CBM or tonne, air per chargeable kilogram.",
      "Destination port or airport and the carrier chosen.",
      "Origin charges: trucking, port or CFS handling and export clearance.",
      "Season and carrier space, because rates change regularly.",
    ] },
];

const faq = [
  { q: "Should I export FCL or LCL?", a: "LCL suits smaller volumes. As your cargo approaches a full container, compare an FCL quotation, since a whole container can become the cheaper option." },
  { q: "Do I need a certificate of origin?", a: "It depends on the buyer, the destination and the product. Some countries and trade agreements require it for customs or reduced duty. Ask your buyer early." },
  { q: "Can you help with destination-specific requirements?", a: "Yes. We coordinate documentation for your shipment, including services such as Kenya and Uganda PVoC support where they apply." },
];

export default function ExportFromPakistanPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Pakistan → Worldwide</p>
      <h1 className="text-4xl md:text-5xl font-black text-blue-900 mt-2">Export Shipping from Pakistan to Worldwide Destinations</h1>
      <p className="text-lg text-gray-700 mt-6 max-w-4xl">We support Pakistan’s exporters with international freight booking, FCL and LCL shipping, air freight, export documentation, customs coordination and port handling.</p>
      <section className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-7">
        <h2 className="text-3xl font-bold text-blue-900">Commercial Export Support</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mt-6 text-gray-700"><li>✓ FCL and LCL bookings</li><li>✓ Air freight</li><li>✓ Export documentation</li><li>✓ Customs coordination</li><li>✓ Port handling</li><li>✓ Worldwide destinations</li></ul>
      </section>
      <ContentSections sections={sections} />
      <OperationsBlock />
      <FaqBlock items={faq} />

      <Link href="#smart-quote" className="inline-block mt-10 px-7 py-3 bg-blue-700 text-white rounded-lg font-bold">Get Export Freight Rate</Link>
    <section className="mt-10"><h2 className="text-2xl font-bold text-blue-900">Export Routes and Compliance Support</h2><div className="mt-4 flex flex-wrap gap-5 text-blue-800 underline"><Link href="/iran-transit-service/">Iran export and transit enquiries</Link><Link href="/cargo-karachi-china/">Export shipping to China</Link><Link href="/cargo-karachi-dubai/">Export shipping to Dubai</Link><Link href="/kenya-pvoc-service/">Kenya export PVoC support</Link><Link href="/uganda-pvoc-service/">Uganda export PVoC support</Link></div></section></main>
  );
}
