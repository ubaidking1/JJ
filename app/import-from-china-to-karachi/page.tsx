import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "China to Karachi Sea Freight | FCL & LCL | JSI",
  description: "Import from China to Karachi with FCL, LCL consolidation, supplier pickup, documentation and customs support.",
  alternates: { canonical: "/import-from-china-to-karachi/" },
};

export default function ImportFromChinaToKarachi() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">China → Pakistan Imports</p>
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 mt-3">Sea Freight from China to Karachi</h1>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Import commercial shipments from major Chinese ports to Karachi with complete FCL and LCL support. Jilani Shipping coordinates supplier pickup, consolidation, shipping documents and customs clearance in Pakistan.
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

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/contact/" className="px-7 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800">Get China Import Rate</Link>
        <Link href="/export-from-karachi-to-china/" className="px-7 py-3 border border-blue-700 text-blue-800 rounded-lg font-bold">Need to export instead?</Link>
      </div>
    </main>
  );
}
