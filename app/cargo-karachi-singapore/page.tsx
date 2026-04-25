import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Singapore | Jilani Shipping International",
  description: "Direct and transshipment services from Karachi to Singapore. Expert freight forwarding for the world's busiest transshipment hub.",
  keywords: ["cargo Karachi to Singapore", "shipping to Singapore", "Karachi to Singapore freight", "Singapore logistics"],
};

export default function CargoSingapore() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to Singapore</h1>
        <p className="text-lg text-gray-700 mt-4">JSI provides seamless connectivity to the global trade gateway of Singapore.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Frequent sailings and fast transit times</li>
          <li>✅ Specialized transshipment handling for global routes</li>
          <li>✅ Efficient LCL and FCL consolidation</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Singapore Quote</a>
        </div>
      </section>
    </main>
  );
}
