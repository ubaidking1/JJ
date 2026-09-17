import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Germany Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Germany with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "Karachi to Germany shipping",
    "Germany to Karachi freight",
    "Pakistan Germany cargo",
    "sea freight Germany Pakistan",
    "LCL shipping Germany",
    "FCL shipping Germany",
    "Germany import export"
  ],
  alternates: { canonical: "/cargo-karachi-germany/" },
};

export default function CargoGermany() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Germany Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">Helping Pakistani exporters reach the German market with seamless logistics and door-to-door solutions.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Shipping to Hamburg and Bremerhaven ports</li>
          <li>✅ Air freight to Frankfurt and Munich</li>
          <li>✅ EU customs clearance support</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Germany Quote</a>
        </div>
      </section>
    </main>
  );
}
