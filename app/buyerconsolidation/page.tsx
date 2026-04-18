import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer's Consolidation Services | Jilani Shipping International",
  description: "Optimized buyer's consolidation services in Karachi. We organize supply chain processes in a leaner and efficient manner with maximum resource optimization.",
  keywords: ["buyer consolidation Karachi", "supply chain optimization", "LCL to FCL consolidation", "JSI logistics"],
};

export default function BuyerConsolidation() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Buyer's Consolidation</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Introduction</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              With latest developments in logistics industry, the scope of work for buyer’s consolidation does not remain limited to only consolidation of multiple LCL shipments from different suppliers to FCL for a specific buyer but to organize supply chain process in leaner and efficient manner along with maximum optimization of resources.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">JSI's Strong Arm</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center gap-2">✅ Security First</li>
              <li className="flex items-center gap-2">✅ Fire Safety Equipped</li>
              <li className="flex items-center gap-2">✅ Flexible working hours</li>
              <li className="flex items-center gap-2">✅ Warehouse Management</li>
              <li className="flex items-center gap-2">✅ Bar Coding & Stickers</li>
              <li className="flex items-center gap-2">✅ Scanning & Uploading</li>
              <li className="flex items-center gap-2">✅ Local deliveries</li>
              <li className="flex items-center gap-2">✅ Reporting & Analysis</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Operational Excellence</h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Our facility within 5 Kms vicinity of Port Qasim allows easy access for shipments coming from upcountry and near all industrial areas.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              All received pallets are checked with the delivery list. Our software generates unique barcodes containing information about goods, quantity, supplier, and end customer to ensure seamless tracking.
            </p>
            <div className="mt-8">
               <Link href="/contact" className="inline-block w-full text-center px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all">
                Book Consolidation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
