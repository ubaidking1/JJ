import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/cargo-karachi-netherlands/" },
  title: "Pakistan–Netherlands Import & Export Freight | JSI",
  description: "Import and export commercial freight between the Netherlands and Karachi, Pakistan via Rotterdam and Amsterdam.",
  keywords: ["cargo Karachi to Netherlands", "shipping to Rotterdam", "Karachi to Europe cargo", "Rotterdam port logistics"],
};

export default function CargoNetherlands() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and Netherlands</h1>
        <p className="text-lg text-gray-700 mt-4">Utilize Rotterdam, Europe's largest port, as your gateway for exporting goods from Pakistan to the Netherlands and beyond.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct and transit services to Rotterdam Port</li>
          <li>✅ Fast air freight to Amsterdam Schiphol Airport</li>
          <li>✅ Seamless distribution throughout the EU</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Netherlands Quote</a>
        </div>
      </section>
    </main>
  );
}
