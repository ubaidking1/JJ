import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Export Shipping from Pakistan | Karachi to Worldwide | JSI",
  description: "Export commercial shipments from Karachi, Pakistan to worldwide destinations with FCL, LCL, air freight, documentation and customs support.",
  alternates: { canonical: "/export-from-pakistan" },
};

export default function ExportFromPakistanPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Pakistan → Worldwide</p>
      <h1 className="text-4xl md:text-5xl font-black text-blue-900 mt-2">Export Shipping from Karachi, Pakistan</h1>
      <p className="text-lg text-gray-700 mt-6 max-w-4xl">We support Pakistan’s exporters with international freight booking, FCL and LCL shipping, air freight, export documentation, customs coordination and port handling.</p>
      <section className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-7">
        <h2 className="text-3xl font-bold text-blue-900">Commercial Export Support</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mt-6 text-gray-700"><li>✓ FCL and LCL bookings</li><li>✓ Air freight</li><li>✓ Export documentation</li><li>✓ Customs coordination</li><li>✓ Port handling</li><li>✓ Worldwide destinations</li></ul>
      </section>
      <Link href="#smart-quote" className="inline-block mt-10 px-7 py-3 bg-blue-700 text-white rounded-lg font-bold">Get Export Freight Rate</Link>
    </main>
  );
}
