import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan–Thailand Import & Export Shipping | JSI",
  description: "Import and export commercial freight between Thailand and Karachi, Pakistan via Laem Chabang and Bangkok.",
  keywords: ["cargo Karachi to Thailand", "shipping to Bangkok", "Karachi to Thailand freight", "Thailand logistics"],
};

export default function CargoThailand() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and Thailand</h1>
        <p className="text-lg text-gray-700 mt-4">Expert logistics connecting Pakistani exporters to the thriving Thai market.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Shipping to Laem Chabang and Bangkok Port</li>
          <li>✅ Weekly air freight to Suvarnabhumi Airport</li>
          <li>✅ Complete customs documentation and support</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Thailand Quote</a>
        </div>
      </section>
    </main>
  );
}
