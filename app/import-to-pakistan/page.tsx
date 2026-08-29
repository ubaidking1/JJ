import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Import Shipping to Pakistan | Worldwide to Karachi Freight | JSI",
  description: "Import commercial shipments to Karachi, Pakistan from China, UAE, UK, USA, Europe and worldwide origins. FCL, LCL, air freight and customs-clearance support.",
  alternates: { canonical: "/import-to-pakistan" },
};

const origins = ["China", "UAE", "United Kingdom", "United States", "Europe", "Saudi Arabia", "Malaysia", "Singapore"];

export default function ImportToPakistanPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Worldwide → Pakistan</p>
      <h1 className="text-4xl md:text-5xl font-black text-blue-900 mt-2">Import Shipping to Karachi, Pakistan</h1>
      <p className="text-lg text-gray-700 mt-6 max-w-4xl">Jilani Shipping arranges commercial imports from worldwide suppliers to Karachi through FCL containers, LCL consolidation and air freight, with documentation and customs-clearance support.</p>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {origins.map((origin) => <div key={origin} className="p-5 border border-blue-100 bg-blue-50 rounded-xl font-bold text-blue-900">Import from {origin}</div>)}
      </section>
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl"><h2 className="text-xl font-bold text-blue-900">FCL Import</h2><p className="text-gray-600 mt-2">20ft and 40ft container shipping for large commercial loads.</p></div>
        <div className="p-6 border rounded-xl"><h2 className="text-xl font-bold text-blue-900">LCL Import</h2><p className="text-gray-600 mt-2">Consolidated shipping when your cargo does not fill a container.</p></div>
        <div className="p-6 border rounded-xl"><h2 className="text-xl font-bold text-blue-900">Air Freight</h2><p className="text-gray-600 mt-2">Faster import solutions for urgent and time-sensitive shipments.</p></div>
      </section>
      <Link href="/contact" className="inline-block mt-10 px-7 py-3 bg-blue-700 text-white rounded-lg font-bold">Get Import Freight Rate</Link>
    </main>
  );
}
