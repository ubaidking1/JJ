import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Freight Forwarder Karachi | Import & Export | JSI",
  description: "Karachi freight forwarder for commercial imports, exports, FCL/LCL sea freight, air freight and customs clearance.",
  keywords: ["best freight forwarder in Karachi", "freight forwarding company Karachi", "import export company Karachi", "customs clearing agent Karachi", "shipping company Karachi"],
  alternates: { canonical: "/freight-forwarder-karachi/" },
};

export default function FreightForwarder() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:py-12">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Karachi, Pakistan</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-2 text-blue-900">Freight Forwarder in Karachi for Imports & Exports</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Jilani Shipping International (JSI) specializes in providing comprehensive <strong>supply chain solutions for importers and exporters</strong>. 
              As an experienced <strong>international freight forwarder in Karachi</strong>, we handle <strong>customs clearing, commercial documentation, and port-to-port logistics</strong> for commercial shipments moving into and out of Pakistan.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">Export Logistics & Shipping</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✅ <strong>Customs Clearing Agent</strong> for Exports in Karachi</li>
              <li className="flex items-center gap-2">✅ <strong>FCL & LCL Export Shipping</strong> to 100+ Countries</li>
              <li className="flex items-center gap-2">✅ Commercial Invoice & Packing List Assistance</li>
              <li className="flex items-center gap-2">✅ <strong>Door-to-Door Export Logistics</strong></li>
              <li className="flex items-center gap-2">✅ Competitive <strong>Sea Freight Rates</strong> for Exporters</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">Import Freight & Customs Brokerage</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✅ <strong>Import Customs Brokerage</strong> & Duty Estimation</li>
              <li className="flex items-center gap-2">✅ Reliable <strong>Import Logistics</strong> for Industrial Raw Materials</li>
              <li className="flex items-center gap-2">✅ <strong>LCL Consolidation</strong> from China, Europe & USA</li>
              <li className="flex items-center gap-2">✅ De-consolidation & Bonded Warehousing</li>
              <li className="flex items-center gap-2">✅ <strong>Import Documentation</strong> & Form-E/Form-I Support</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Why Choose JSI for Your Trade?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-800">Expert Customs Handling</h3>
                <p className="text-sm text-gray-600">We navigate the complex customs regulations in Pakistan so you don't have to, ensuring zero delays for your imports and exports.</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-800">Global Network</h3>
                <p className="text-sm text-gray-600">With partners in over 100 countries, we provide a seamless bridge between you and your international buyers or suppliers.</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-800">Real-time Tracking</h3>
                <p className="text-sm text-gray-600">Stay informed about your shipment's status with our dedicated tracking and support team.</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/contact/" className="block w-full text-center py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md">
                Get a Quote for Your Business
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-16 grid md:grid-cols-3 gap-5" aria-label="Jilani Shipping credentials">
          <div className="p-5 rounded-xl border border-blue-100 bg-blue-50"><strong className="text-blue-900">PIFFA Member</strong><p className="text-sm text-gray-600 mt-1">Professional freight-forwarding network membership.</p></div>
          <div className="p-5 rounded-xl border border-blue-100 bg-blue-50"><strong className="text-blue-900">KCCI Member</strong><p className="text-sm text-gray-600 mt-1">Karachi Chamber of Commerce & Industry member.</p></div>
          <div className="p-5 rounded-xl border border-blue-100 bg-blue-50"><strong className="text-blue-900">Karachi Office</strong><p className="text-sm text-gray-600 mt-1">Suite #266, Glass Tower, Clifton, Karachi.</p></div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Optimized Supply Chain Solutions</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white border rounded-2xl text-center">
              <div className="text-4xl mb-4">🚢</div>
              <h3 className="font-bold text-lg mb-2">Sea Freight</h3>
              <p className="text-sm text-gray-600">FCL and LCL options for large scale exporters and regular importers.</p>
            </div>
            <div className="p-6 bg-white border rounded-2xl text-center">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="font-bold text-lg mb-2">Air Freight</h3>
              <p className="text-sm text-gray-600">Urgent shipping solutions for high-value or time-sensitive goods.</p>
            </div>
            <div className="p-6 bg-white border rounded-2xl text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-bold text-lg mb-2">Warehousing</h3>
              <p className="text-sm text-gray-600">Secure storage and distribution for your inventory management.</p>
            </div>
          </div>
        </section>

        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Freight Forwarding FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-xl p-5"><summary className="font-bold cursor-pointer">Does Jilani Shipping handle imports into Pakistan?</summary><p className="mt-3 text-gray-600">Yes. We arrange commercial import shipments to Karachi from China, UAE, UK, USA, Europe and other international origins through FCL, LCL and air freight.</p></details>
            <details className="border rounded-xl p-5"><summary className="font-bold cursor-pointer">Do you also export shipments from Karachi?</summary><p className="mt-3 text-gray-600">Yes. We provide export freight booking, documentation, customs support and international shipping from Karachi to worldwide destinations.</p></details>
            <details className="border rounded-xl p-5"><summary className="font-bold cursor-pointer">What information is needed for a freight quote?</summary><p className="mt-3 text-gray-600">Commodity, weight or CBM, package count, POL, POD, Incoterm, container type and cargo-ready date.</p></details>
          </div>
        </section>
      </div>
    </main>
  );
}
