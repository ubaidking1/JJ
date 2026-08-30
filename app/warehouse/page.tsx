import Link from "next/link"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/warehouse" },
  title: "Warehousing & Buyer's Consolidation Karachi | JSI",
  description: "Secure Karachi warehousing and buyer's consolidation with inventory management, pick and pack, and shipment coordination.",
  keywords: ["warehousing Karachi", "buyers consolidation Pakistan", "inventory management Karachi", "pick and pack services", "JSI warehouse"],
};

export default function Warehouse() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Warehousing & Consolidation</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Buyer’s Consolidation is one of the strongest areas of JSI services. 
              Our state-of-the-art warehousing solutions ensure your goods are handled 
              with maximum efficiency and safety.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">Services and Features</h2>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-600">
                <li>✅ Unload & Receive</li>
                <li>✅ Put to stock</li>
                <li>✅ Inventory Control</li>
                <li>✅ Software update</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Pick and Pack</li>
                <li>✅ Repacking Area</li>
                <li>✅ Load the truck</li>
                <li>✅ Shipping Area</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Pallets & Storage</h2>
            <p className="text-gray-700 leading-relaxed">
              Most of the goods are stored and transported on the standard EU pallets (80cm x 120cm). 
              Due to our extensive collaboration with Asian suppliers, we also handle sea pallets 
              varying from 100cm x 100cm to 120cm x 120cm.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-block px-10 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg">
            Inquire About Warehousing
          </Link>
        </div>
      </div>
    </main>
  );
}
