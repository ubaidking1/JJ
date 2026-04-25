import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Netherlands (Rotterdam) | Jilani Shipping International",
  description: "Ship to Europe via Rotterdam with JSI. Reliable cargo services from Karachi to the Netherlands. Gateway to the European market.",
  keywords: ["cargo Karachi to Netherlands", "shipping to Rotterdam", "Karachi to Europe cargo", "Rotterdam port logistics"],
};

export default function CargoNetherlands() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to Netherlands</h1>
        <p className="text-lg text-gray-700 mt-4">Utilize Rotterdam, Europe's largest port, as your gateway for exporting goods from Pakistan to the Netherlands and beyond.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct and transit services to Rotterdam Port</li>
          <li>✅ Fast air freight to Amsterdam Schiphol Airport</li>
          <li>✅ Seamless distribution throughout the EU</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Netherlands Quote</a>
        </div>
      </section>
    </main>
  );
}
