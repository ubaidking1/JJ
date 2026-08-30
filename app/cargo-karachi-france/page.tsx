import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/cargo-karachi-france/" },
  title: "Pakistan–France Import & Export Shipping | JSI",
  description: "Import and export commercial freight between France and Karachi, Pakistan via Le Havre, Marseille and Paris.",
  keywords: ["cargo Karachi to France", "shipping to Le Havre", "Karachi to France freight", "France logistics agents"],
};

export default function CargoFrance() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and France</h1>
        <p className="text-lg text-gray-700 mt-4">JSI connects your business to the French market with specialized shipping services to major ports and airports.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Shipping to Le Havre, Marseille, and Fos-sur-Mer</li>
          <li>✅ Air cargo to Paris CDG</li>
          <li>✅ Expert handling of export documentation and EU customs</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get France Quote</a>
        </div>
      </section>
    </main>
  );
}
