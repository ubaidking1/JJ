import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freight Forwarder for Importers & Exporters Karachi | JSI",
  description: "Jilani Shipping International is the leading freight forwarder in Karachi for importers and exporters. We provide end-to-end logistics, customs clearance, and global shipping solutions.",
  keywords: ["freight forwarder for exporters", "importer logistics Pakistan", "export import shipping Karachi", "customs clearance for importers", "international trade logistics"],
};

export default function FreightForwarder() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Freight Forwarding for Importers & Exporters</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Jilani Shipping International (JSI) specializes in providing comprehensive <strong>supply chain solutions for importers and exporters</strong>. 
              As a premier <strong>international freight forwarder in Karachi</strong>, we handle <strong>customs clearing, commercial documentation, and port-to-port logistics</strong> to ensure your trade business grows globally.
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
              <Link href="/contact" className="block w-full text-center py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md">
                Get a Quote for Your Business
              </Link>
            </div>
          </div>
        </div>

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
      </div>
    </main>
  );
}
