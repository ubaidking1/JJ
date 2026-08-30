import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/cargo-karachi-turkey" },
  title: "Pakistan–Turkey Import & Export Shipping | JSI",
  description: "Import and export commercial freight between Turkey and Karachi, Pakistan via Istanbul, Izmir and Mersin.",
  keywords: ["cargo Karachi to Turkey", "shipping to Istanbul", "Karachi to Turkey freight", "Turkey logistics Pakistan"],
};

export default function CargoTurkey() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and Turkey</h1>
        <p className="text-lg text-gray-700 mt-4">JSI connects Pakistan to the heart of the Eurasia trade route with reliable shipping to major Turkish ports.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct and transit services to Istanbul Ambarli and Mersin</li>
          <li>✅ Specialized handling for textile machinery and raw materials</li>
          <li>✅ Complete documentation for Turkey-Pakistan FTA trade</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Turkey Quote</a>
        </div>
      </section>
    </main>
  );
}
