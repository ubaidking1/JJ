import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Canada Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Canada with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "Karachi to Canada shipping",
    "Canada to Karachi freight",
    "Pakistan Canada cargo",
    "sea freight Canada Pakistan",
    "LCL shipping Canada",
    "FCL shipping Canada",
    "Canada import export"
  ],
  alternates: { canonical: "/cargo-karachi-canada/" },
};

export default function CargoCanada() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Canada Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">Commercial freight in both directions: Canada to Karachi imports and Karachi to Canada exports.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Shipping to Toronto, Vancouver, and Montreal</li>
          <li>✅ Door-to-port and door-to-door services</li>
          <li>✅ Expert handling of personal effects and commercial cargo</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Canada Quote</a>
        </div>
      </section>
    </main>
  );
}
