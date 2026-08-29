import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan–Italy Import & Export Shipping | JSI",
  description: "Import and export commercial freight between Italy and Karachi, Pakistan via Genoa, La Spezia, Milan and Rome.",
  keywords: ["cargo Karachi to Italy", "shipping to Genoa", "Karachi to Italy freight", "Italy shipping agents"],
};

export default function CargoItaly() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and Italy</h1>
        <p className="text-lg text-gray-700 mt-4">Expert freight forwarding solutions from Pakistan to the heart of the Mediterranean market.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct sailings to Genoa and La Spezia</li>
          <li>✅ Air freight solutions to Milan Malpensa and Rome Fiumicino</li>
          <li>✅ Specialized logistics for fashion, machinery, and commercial goods</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Italy Quote</a>
        </div>
      </section>
    </main>
  );
}
