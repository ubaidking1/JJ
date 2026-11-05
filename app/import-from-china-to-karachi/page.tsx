import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import ContentSections, { Section } from "@/components/ContentSections";
import FaqBlock from "@/components/FaqBlock";
import OperationsBlock from "@/components/OperationsBlock";


export const metadata: Metadata = pageMetadata({
  title: { absolute: "Import from China to Karachi | Sea & Air Freight | JSI" },
  description: "Import goods from China to Karachi with FCL, LCL and air freight, supplier coordination, documentation, consolidation and Pakistan customs support with JSI.",
  keywords: [
    "import from China to Karachi",
    "China freight forwarder",
    "import freight forwarder",
    "China to Pakistan freight",
    "China to Karachi sea freight",
    "China Pakistan LCL shipment",
    "China FCL Pakistan",
    "air freight China Karachi",
    "shipping China to Pakistan"
  ],
  alternates: { canonical: "/import-from-china-to-karachi/" },
});


const sections: Section[] = [
  { title: "China to Karachi transit times and pricing",
    paras: ["These are indicative port-to-port ranges. Real schedules depend on the loading port, the carrier and transshipment, and customs clearance and delivery are additional."],
    table: { head: ["Service", "Priced by", "Typical transit"], rows: [
      ["Sea LCL", "CBM (or per tonne if heavier)", "About 20 to 35 days"],
      ["Sea FCL 20ft / 40ft / 40HC", "Flat rate per container", "About 18 to 30 days"],
      ["Air freight", "Per chargeable kg", "About 3 to 7 days"],
    ] } },
  { title: "Understanding Incoterms with Chinese suppliers",
    items: [
      "EXW: you arrange everything from the supplier's factory, including pickup and export clearance in China.",
      "FOB: the supplier delivers the cargo on board at the Chinese port, and you pay the main freight.",
      "CIF: the supplier pays freight and insurance to Karachi, and you handle destination charges and clearance.",
      "The Incoterm decides who pays which charges, so confirm it before you place the order.",
    ] },
  { title: "How a China import is handled",
    steps: [
      "Share your supplier details, the Incoterm, the commodity and the cargo-ready date.",
      "We coordinate pickup or collection from your supplier and consolidate cartons from several suppliers if needed.",
      "The cargo ships from the Chinese port on LCL, FCL or air.",
      "Pakistan Customs clearance is filed on arrival, and duty and taxes are paid on the HS code and value.",
      "The cargo is delivered to your warehouse in Karachi or onward.",
    ] },
  { title: "Tips to avoid delays",
    items: [
      "Confirm the HS code and any import permit before the supplier ships.",
      "Make sure the invoice, packing list and bill of lading describe the goods the same way.",
      "Ask your supplier for carton counts, weights and dimensions so we can quote accurately.",
      "Plan for port charges and clear quickly to avoid container detention.",
    ] },
];

const faq = [
  { q: "How long does shipping from China to Karachi take?", a: "Sea freight typically takes about 18 to 35 days port to port depending on the service and transshipment, and air freight about 3 to 7 days. Clearance and delivery are additional." },
  { q: "Is LCL or FCL cheaper from China?", a: "LCL suits smaller volumes. Once you reach roughly 15 to 20 CBM, compare FCL, because a whole container can become more economical." },
  { q: "Can you consolidate cargo from several Chinese suppliers?", a: "Yes. Buyer's consolidation combines cartons from different suppliers into one shipment to save on freight." },
];

export default function ImportFromChinaToKarachi() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">China → Pakistan Imports</p>
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 mt-3">Import Shipping from China to Karachi, Pakistan</h1>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Import commercial shipments from major Chinese ports to Karachi with complete FCL and LCL support. As a China freight forwarder for Pakistan-bound cargo, Jilani Shipping coordinates supplier pickup, consolidation, shipping documents and customs clearance in Pakistan.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
          <h2 className="text-2xl font-bold text-blue-900">LCL Import Shipping</h2>
          <p className="text-gray-700 mt-3">Pay for the space you use. Suitable for smaller commercial shipments from multiple suppliers.</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-2xl">
          <h2 className="text-2xl font-bold text-blue-900">FCL Container Shipping</h2>
          <p className="text-gray-700 mt-3">Dedicated 20ft and 40ft containers for larger, regular or high-volume imports.</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">China Import Support</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mt-6 text-gray-700">
          <li>✓ Supplier pickup and coordination</li>
          <li>✓ Buyer’s consolidation</li>
          <li>✓ FCL and LCL sea freight</li>
          <li>✓ Import documentation</li>
          <li>✓ Karachi Port customs clearance</li>
          <li>✓ Delivery planning in Pakistan</li>
        </ul>
        <p className="mt-8 text-gray-700">Common origins include Shanghai, Ningbo, Shenzhen, Guangzhou, Qingdao, Tianjin and Xiamen.</p>
      </section>

      <ContentSections sections={sections} />
      <OperationsBlock />
      <FaqBlock items={faq} />
      <p className="mt-6 text-gray-700">For a detailed breakdown of rates, see our guide to <Link href="/china-to-pakistan-shipping-cost/" className="text-blue-800 underline">China to Pakistan shipping cost</Link>, or read about <Link href="/buyerconsolidation/" className="text-blue-800 underline">buyer's consolidation</Link> and <Link href="/customs-clearance-karachi/" className="text-blue-800 underline">customs clearance in Karachi</Link>.</p>
      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/contact/" className="px-7 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800">Get China Import Rate</Link>
        <Link href="/export-from-karachi-to-china/" className="px-7 py-3 border border-blue-700 text-blue-800 rounded-lg font-bold">Need to export instead?</Link>
      </div>
    </main>
  );
}
