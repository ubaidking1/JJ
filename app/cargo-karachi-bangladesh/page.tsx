import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Bangladesh Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Bangladesh with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "Karachi to Bangladesh shipping",
    "Bangladesh to Karachi freight",
    "Pakistan Bangladesh cargo",
    "sea freight Bangladesh Pakistan",
    "LCL shipping Bangladesh",
    "FCL shipping Bangladesh",
    "Bangladesh import export"
  ],
  alternates: { canonical: "/cargo-karachi-bangladesh/" },
};

export default function CargoBangladesh() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Bangladesh Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">JSI facilitates direct trade between Pakistan and Bangladesh with specialized shipping solutions.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct sailings to Chittagong Port</li>
          <li>✅ Weekly air cargo services to Dhaka Airport</li>
          <li>✅ Expert handling of textile-related goods and raw materials</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Bangladesh Quote</a>
        </div>
      </section>
    </main>
  );
}
