import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Malaysia | Jilani Shipping International",
  description: "Reliable shipping from Karachi to Malaysia (Port Klang, Tanjung Pelepas). Competitive sea and air freight rates.",
  keywords: ["cargo Karachi to Malaysia", "shipping to Port Klang", "Karachi to Malaysia freight", "Malaysia logistics"],
};

export default function CargoMalaysia() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to Malaysia</h1>
        <p className="text-lg text-gray-700 mt-4">Safe and efficient logistics solutions connecting Karachi Port to Malaysia's primary maritime hubs.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Weekly sailings to Port Klang and Penang</li>
          <li>✅ Specialized export handling for palm oil and electronics</li>
          <li>✅ Fast air cargo to Kuala Lumpur International Airport</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Malaysia Quote</a>
        </div>
      </section>
    </main>
  );
}
