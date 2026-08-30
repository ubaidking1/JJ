import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/cargo-karachi-china/" },
  title: "China–Pakistan Import & Export Shipping | JSI",
  description:
    "China–Pakistan import and export freight with FCL, LCL consolidation, customs clearance and commercial shipping support.",
  keywords: [
    "cargo Karachi to China",
    "China to Pakistan LCL shipment",
    "import from China to Pakistan",
    "customs clearing agent for China imports",
    "sea freight Karachi to China",
    "air cargo Karachi to China",
    "door to door cargo Karachi to China",
    "Jilani Shipping International China",
  ],
};

export default function CargoKarachiChinaPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-6">China–Pakistan Import & Export Shipping</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Jilani Shipping International (JSI) is the premier <strong>logistics partner for China-Pakistan trade</strong>. Whether you are an <strong>exporter</strong> sending goods to Guangzhou or an <strong>importer</strong> sourcing from Yiwu or Shanghai, we provide the most reliable <strong>LCL consolidation and customs brokerage</strong> services.
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
          <p className="text-sm text-gray-700">We handle the entire import process, from <strong>supplier coordination in China</strong> to <strong>customs clearing at Karachi Port</strong>. Our dedicated LCL service for China imports is the most cost-effective in the market.</p>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Why JSI for China Trade?</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start gap-2">✅ <strong>Direct LCL Consolidation</strong> - No third-party markups.</li>
          <li className="flex items-start gap-2">✅ <strong>In-house Customs Agents</strong> - Expert documentation & clearing.</li>
          <li className="flex items-start gap-2">✅ <strong>Global Sourcing Support</strong> - We bridge the gap with suppliers.</li>
          <li className="flex items-start gap-2">✅ <strong>Door-to-Door Delivery</strong> - Seamless logistics from origin to destination.</li>
        </ul>

        <h2>Our Cargo Services Include:</h2>
        <ul>
          <li>🟩 <strong>Sea Freight</strong> — cost-effective solutions for large shipments</li>
          <li>🟩 <strong>Air Freight</strong> — express shipping for urgent deliveries</li>
          <li>🟩 <strong>Customs Brokerage</strong> — complete import/export support</li>
          <li>🟩 <strong>Warehousing</strong> — secure storage before shipment</li>
          <li>🟩 <strong>Door Delivery</strong> — available in Guangzhou, Shanghai, Shenzhen, Ningbo & more</li>
        </ul>

        <h2>Popular Routes from Karachi to China</h2>
        <p>
          - Karachi Port to Guangzhou Port  
          - Karachi Port to Shanghai Port  
          - Karachi Port to Shenzhen Port  
          - Karachi Port to Ningbo Port  
          - Karachi Airport to Beijing / Shanghai Airports
        </p>

        <h2>Estimated Transit Time</h2>
        <p>
          <strong>Sea Freight:</strong> 7–10 days  
          <br />
          <strong>Air Freight:</strong> 2–4 days
        </p>

        <h2>Get a Free Quote</h2>
        <p>
          Ready to ship your cargo from Karachi to China? Contact Jilani Shipping International
          today for reliable service and competitive rates.
        </p>

        <a
          href="/contact/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
}
