import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Karachi to China Export Shipping | FCL & LCL | JSI",
  description: "Export from Karachi to China with FCL, LCL, freight booking, documentation and professional port handling support.",
  alternates: { canonical: "/export-from-karachi-to-china" },
};

export default function ExportFromKarachiToChina() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Pakistan → China Exports</p>
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 mt-3">Export Shipping from Karachi to China</h1>
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

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/contact" className="px-7 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800">Get China Export Rate</Link>
        <Link href="/import-from-china-to-karachi" className="px-7 py-3 border border-blue-700 text-blue-800 rounded-lg font-bold">Need to import instead?</Link>
      </div>
    </main>
  );
}
