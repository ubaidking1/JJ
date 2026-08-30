import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/cargo-karachi-kuwait/" },
  title: "Pakistan–Kuwait Import & Export Shipping | JSI",
  description: "Import and export commercial shipments between Kuwait and Karachi, Pakistan via Shuaiba, Shuwaikh and Kuwait City.",
  keywords: ["cargo Karachi to Kuwait", "shipping to Kuwait", "Karachi to Kuwait freight", "Kuwait shipping agents"],
};

export default function CargoKuwait() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and Kuwait</h1>
        <p className="text-lg text-gray-700 mt-4">Jilani Shipping International (JSI) provides the most competitive and reliable freight forwarding solutions to Kuwait.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Kuwait Routes</h2>
            <ul className="space-y-3">
              <li>🚢 <strong>Sea Freight:</strong> Direct to Shuwaikh & Shuaiba Ports.</li>
              <li>✈️ <strong>Air Freight:</strong> Express delivery to Kuwait International Airport.</li>
              <li>📦 <strong>LCL/FCL:</strong> Weekly consolidation for all cargo types.</li>
            </ul>
          </div>
          <div className="p-8 bg-white border rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Kuwait Shippers Choose JSI?</h2>
            <ul className="space-y-3">
              <li>✅ Lowest transit time (12-15 days sea)</li>
              <li>✅ Door-to-door delivery available</li>
              <li>✅ Specialized textile and commercial cargo handling</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="/contact/" className="bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-lg">Get Kuwait Quote</a>
        </div>
      </section>
    </main>
  );
}
