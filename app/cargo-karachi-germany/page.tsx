import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/cargo-karachi-germany/" },
  title: "Pakistan–Germany Import & Export Shipping | JSI",
  description: "Import and export commercial freight between Germany and Karachi, Pakistan via Hamburg, Bremerhaven and Frankfurt.",
  keywords: ["cargo Karachi to Germany", "shipping to Hamburg", "Karachi to Europe cargo", "Germany logistics"],
};

export default function CargoGermany() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and Germany</h1>
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
