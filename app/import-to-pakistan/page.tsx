import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import ContentSections, { Section } from "@/components/ContentSections";
import FaqBlock from "@/components/FaqBlock";
import OperationsBlock from "@/components/OperationsBlock";


export const metadata: Metadata = pageMetadata({
  title: { absolute: "Import Shipping to Pakistan | Freight Support | JSI" },
  description: "Import goods to Pakistan with sea and air freight, FCL and LCL shipping, documentation and customs coordination through Jilani Shipping in Karachi with JSI.",
  keywords: [
    "import shipping to Pakistan",
    "import freight Pakistan",
    "international shipping to Karachi",
    "sea import Pakistan",
    "air import Karachi",
    "import customs clearance Pakistan"
  ],
  alternates: { canonical: "/import-to-pakistan/" },
});

const origins = ["China", "UAE", "United Kingdom", "United States", "Europe", "Saudi Arabia", "Malaysia", "Singapore"];


const sections: Section[] = [
  { title: "How an import to Karachi works",
    steps: [
      "Confirm the supplier terms (Incoterm), the HS code of the goods and whether any permit or approval applies.",
      "Book the shipment and collect the commercial invoice, packing list and bill of lading or airway bill.",
      "The cargo arrives at Karachi Port, Port Qasim or the airport and the carrier files the manifest.",
      "A licensed clearing agent files the Goods Declaration in the Pakistan Customs system.",
      "Customs assesses the declaration, and the importer pays the applicable duty and taxes.",
      "After release, the delivery order is issued and the container or cargo is collected.",
      "The cargo is delivered to your warehouse or shop, and empty containers are returned.",
    ] },
  { title: "Documents usually needed",
    items: [
      "Commercial invoice and packing list.",
      "Bill of lading (sea) or airway bill (air).",
      "Certificate of origin where required.",
      "Importer registration and tax details.",
      "Permits or NOCs for regulated goods. Requirements depend on the product, so we confirm them before shipping.",
    ] },
  { title: "What makes up your landed cost",
    items: [
      "Freight and origin charges at the supplier's end.",
      "Terminal, port and shipping-line charges at Karachi.",
      "Customs duty and taxes, based on the HS code and assessable value.",
      "Clearing agent fees and inland transport.",
      "Detention or demurrage if containers are held beyond the free days, so fast clearance matters.",
    ] },
];

const faq = [
  { q: "Do I need a clearing agent to import into Pakistan?", a: "Most importers use a licensed customs clearing agent to file the Goods Declaration and handle assessment and release. We coordinate this together with the freight." },
  { q: "Why does the HS code matter?", a: "The HS code decides the customs duty and taxes and whether a permit is needed. A wrong code can mean delays or extra charges, so confirm it before you ship." },
  { q: "Can I ship less than a full container?", a: "Yes. LCL consolidation lets you pay for the space your cargo uses, and FCL is worth comparing as volume grows." },
];

export default function ImportToPakistanPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Worldwide → Pakistan</p>
      <h1 className="text-4xl md:text-5xl font-black text-blue-900 mt-2">Import Shipping to Pakistan by Sea and Air</h1>
      <p className="text-lg text-gray-700 mt-6 max-w-4xl">Jilani Shipping arranges commercial imports from worldwide suppliers to Karachi through FCL containers, LCL consolidation and air freight, with documentation and customs-clearance support.</p>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {origins.map((origin) => <div key={origin} className="p-5 border border-blue-100 bg-blue-50 rounded-xl font-bold text-blue-900">Import from {origin}</div>)}
      </section>
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl"><h2 className="text-xl font-bold text-blue-900">FCL Import</h2><p className="text-gray-600 mt-2">20ft and 40ft container shipping for large commercial loads.</p></div>
        <div className="p-6 border rounded-xl"><h2 className="text-xl font-bold text-blue-900">LCL Import</h2><p className="text-gray-600 mt-2">Consolidated shipping when your cargo does not fill a container.</p></div>
        <div className="p-6 border rounded-xl"><h2 className="text-xl font-bold text-blue-900">Air Freight</h2><p className="text-gray-600 mt-2">Faster import solutions for urgent and time-sensitive shipments.</p></div>
      </section>
      <ContentSections sections={sections} />
      <OperationsBlock />
      <FaqBlock items={faq} />

      <Link href="#smart-quote" className="inline-block mt-10 px-7 py-3 bg-blue-700 text-white rounded-lg font-bold">Get Import Freight Rate</Link>
    </main>
  );
}
