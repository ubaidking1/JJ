import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Singapore Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Singapore with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "Karachi to Singapore shipping",
    "Singapore to Karachi freight",
    "Pakistan Singapore cargo",
    "sea freight Singapore Pakistan",
    "LCL shipping Singapore",
    "FCL shipping Singapore",
    "Singapore import export"
  ],
  alternates: { canonical: "/cargo-karachi-singapore/" },
};

export default function CargoSingapore() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Singapore Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">JSI handles commercial shipments in both directions: Singapore to Karachi imports and Karachi to Singapore exports.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Frequent sailings and fast transit times</li>
          <li>✅ Specialized transshipment handling for global routes</li>
          <li>✅ Efficient LCL and FCL consolidation</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Singapore Quote</a>
        </div>
      </section>
    </main>
  );
}
