import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Germany | Jilani Shipping International",
  description: "Export your goods from Karachi to Germany (Hamburg, Bremen, Frankfurt). Professional sea and air freight services for European markets.",
  keywords: ["cargo Karachi to Germany", "shipping to Hamburg", "Karachi to Europe cargo", "Germany logistics"],
};

export default function CargoGermany() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to Germany</h1>
        <p className="text-lg text-gray-700 mt-4">Helping Pakistani exporters reach the German market with seamless logistics and door-to-door solutions.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Shipping to Hamburg and Bremerhaven ports</li>
          <li>✅ Air freight to Frankfurt and Munich</li>
          <li>✅ EU customs clearance support</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Germany Quote</a>
        </div>
      </section>
    </main>
  );
}
