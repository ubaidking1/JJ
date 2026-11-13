import { pageMetadata } from "@/lib/seo";
import RouteRateSection from "@/components/RouteRateSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to China Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and China with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates now.",
  keywords: [
    "export shipping Pakistan to China",
    "import freight China to Pakistan",
    "reliable freight rates China",

    "Karachi to China shipping",
    "China to Karachi freight",
    "Pakistan China cargo",
    "sea freight China Pakistan",
    "LCL shipping China",
    "FCL shipping China",
    "China import export"
  ],
  alternates: { canonical: "/cargo-karachi-china/" },
});

export default function CargoKarachiChinaPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-6">Pakistan–China Import and Export Shipping</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Jilani Shipping International (JSI) coordinates freight enquiries for commercial shipments between China and Pakistan. Whether you are an <strong>exporter</strong> sending goods to Guangzhou or an <strong>importer</strong> sourcing from Yiwu or Shanghai, we can review <strong>LCL consolidation, FCL, air freight and customs-clearance coordination</strong> requirements for each shipment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
          <Link href="/import-from-china-to-karachi/" className="p-6 bg-blue-900 text-white rounded-2xl shadow-lg">
            <span className="text-sm font-bold text-blue-200">CHINA → PAKISTAN</span>
            <h2 className="text-2xl font-bold mt-2">Import from China to Karachi</h2>
            <p className="text-blue-100 mt-3">FCL, LCL, consolidation and customs-clearance support.</p>
            <span className="inline-block mt-5 font-bold">Get Import Rate →</span>
          </Link>
          <Link href="/export-from-karachi-to-china/" className="p-6 bg-white border-2 border-blue-200 text-blue-900 rounded-2xl shadow-sm">
            <span className="text-sm font-bold text-blue-700">PAKISTAN → CHINA</span>
            <h2 className="text-2xl font-bold mt-2">Export from Karachi to China</h2>
            <p className="text-gray-600 mt-3">Commercial freight, documentation and port handling.</p>
            <span className="inline-block mt-5 text-blue-700 font-bold">Get Export Rate →</span>
          </Link>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 my-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">China to Pakistan Import Specialists</h2>
          <p className="text-sm text-gray-700">We review China-origin import requirements, including supplier collection details where arranged, freight options, shipment documentation and customs-clearance coordination at Karachi. LCL availability, routing and charges are confirmed for each shipment based on cargo details and current schedules.</p>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Why JSI for China Trade?</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start gap-2">✅ <strong>LCL Shipment Enquiries</strong> - Consolidation options reviewed against cargo and routing.</li>
          <li className="flex items-start gap-2">✅ <strong>Customs Coordination</strong> - Documentation and clearance requirements reviewed.</li>
          <li className="flex items-start gap-2">✅ <strong>Global Sourcing Support</strong> - We bridge the gap with suppliers.</li>
          <li className="flex items-start gap-2">✅ <strong>Delivery Options</strong> - Scope confirmed by origin, destination and cargo.</li>
        </ul>

        <h2>Our Cargo Services Include:</h2>
        <ul>
          <li>🟩 <strong>Sea Freight</strong> — cost-effective solutions for large shipments</li>
          <li>🟩 <strong>Air Freight</strong> — express shipping for urgent deliveries</li>
          <li>🟩 <strong>Customs Brokerage</strong> — complete import/export support</li>
          <li>🟩 <strong>Shipment Coordination</strong> — origin and destination handling scope confirmed in the quotation</li>
          <li>🟩 <strong>Delivery Arrangements</strong> — subject to destination, commodity and confirmed service scope</li>
        </ul>

        <h2>Popular Routes from Karachi to China</h2>
        <p>
          - Karachi Port to Guangzhou Port  
          - Karachi Port to Shanghai Port  
          - Karachi Port to Shenzhen Port  
          - Karachi Port to Ningbo Port  
          - Karachi Airport to Beijing / Shanghai Airports
        </p>

        <h2>Transit Time and Routing</h2>
        <p>
          Transit estimates depend on origin and destination ports, carrier schedule, routing, transshipment and customs clearance.  
          <br />
          JSI confirms the current estimated schedule with each shipment quotation.
        </p>

        <h2>Get a Free Quote</h2>
        <p>
          Planning an import or export shipment between Pakistan and China? Share the origin, destination, commodity, weight or CBM and Incoterm with Jilani Shipping International for a shipment-specific quotation.
        </p>

        <a
          href="/contact/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Request a Quote
        </a>
      </section>
    <RouteRateSection destination="China" />
    </main>
  );
}
