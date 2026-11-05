import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import ContentSections, { Section } from "@/components/ContentSections";
import FaqBlock from "@/components/FaqBlock";
import OperationsBlock from "@/components/OperationsBlock";


export const metadata: Metadata = pageMetadata({
  title: { absolute: "Export from Karachi to China | Freight Services | JSI" },
  description: "Export commercial goods from Karachi to China with FCL, LCL and air freight, export documentation, customs coordination and port-to-port shipping support today.",
  keywords: [
    "export from Karachi to China",
    "Pakistan to China shipping",
    "Karachi China freight",
    "sea freight Pakistan China",
    "air freight Karachi China",
    "FCL export China",
    "LCL export China"
  ],
  alternates: { canonical: "/export-from-karachi-to-china/" },
});


const sections: Section[] = [
  { title: "How an export from Karachi to China works",
    steps: [
      "Agree the Incoterm and payment terms with your Chinese buyer, and check import and product requirements in China.",
      "Book FCL, LCL or air freight to the Chinese port or airport nearest your buyer.",
      "Move the cargo to the port or CFS, or arrange pickup from your factory.",
      "A licensed customs agent files the export Goods Declaration in the Pakistan Customs system.",
      "Prepare the certificate of origin if the buyer wants reduced duty under the China\u2013Pakistan Free Trade Agreement.",
      "The cargo is loaded and the bill of lading or airway bill is issued.",
    ] },
  { title: "Documents usually needed",
    items: [
      "Commercial invoice and packing list.",
      "Export Goods Declaration and customs clearance.",
      "Bill of lading (sea) or airway bill (air).",
      "Certificate of origin when the buyer needs it for preferential duty.",
      "Food, agricultural and other regulated exports may need registrations or approvals on the Chinese side, so confirm these with your buyer before shipping.",
    ] },
  { title: "Transit time",
    paras: ["Transit depends on the shipping line, the Chinese destination port and transshipment. On the China corridor, sea freight typically takes several weeks and air freight a few days. We give the current schedule with each quotation."] },
  { title: "What affects the cost",
    items: [
      "FCL per container, LCL per CBM or tonne, or air per chargeable kilogram.",
      "The Chinese destination port and the shipping line.",
      "Origin charges in Karachi and destination handling in China.",
      "Season and carrier space, because rates change regularly.",
    ] },
];

const faq = [
  { q: "Which Chinese ports can you ship to?", a: "Shanghai, Ningbo, Shenzhen, Guangzhou, Qingdao, Tianjin and Xiamen are the main options, and other Chinese ports are available on request." },
  { q: "Do I need a certificate of origin for exports to China?", a: "Not always. It is needed if your buyer wants to claim reduced duty for qualifying goods under the China\u2013Pakistan Free Trade Agreement, so ask your buyer early." },
  { q: "Can I export less than a full container to China?", a: "Yes. LCL lets you ship a smaller volume, and we can compare it against an FCL quotation as your volume grows." },
];

export default function ExportFromKarachiToChina() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Pakistan → China Exports</p>
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 mt-3">Export Shipping from Karachi, Pakistan to China</h1>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Ship commercial goods from Karachi to major ports in China with reliable FCL and LCL freight forwarding. We support exporters with bookings, documentation, port handling and shipment coordination.
        </p>
      </section>

      <section className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-7">
        <h2 className="text-3xl font-bold text-blue-900">Export Services</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mt-6 text-gray-700">
          <li>✓ FCL and LCL freight booking</li>
          <li>✓ Export documentation support</li>
          <li>✓ Container and port coordination</li>
          <li>✓ Customs-clearance assistance</li>
          <li>✓ Shipping-line options</li>
          <li>✓ Rate and transit-time comparison</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900">Major China Destinations</h2>
        <p className="text-gray-700 mt-4">Shanghai, Ningbo, Shenzhen, Guangzhou, Qingdao, Tianjin and Xiamen, plus other Chinese ports on request.</p>
      </section>

      <ContentSections sections={sections} />
      <OperationsBlock />
      <FaqBlock items={faq} />

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/contact/" className="px-7 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800">Get China Export Rate</Link>
        <Link href="/import-from-china-to-karachi/" className="px-7 py-3 border border-blue-700 text-blue-800 rounded-lg font-bold">Need to import instead?</Link>
      </div>
    </main>
  );
}
