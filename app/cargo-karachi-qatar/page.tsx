import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Qatar | Jilani Shipping International",
  description: "Reliable freight forwarding from Karachi to Doha, Qatar. Competitive sea and air freight rates with secure handling.",
  keywords: ["cargo Karachi to Qatar", "shipping to Doha", "Karachi to Qatar freight", "Doha logistics"],
};

export default function CargoQatar() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to Qatar</h1>
        <p className="text-lg text-gray-700 mt-4">Safe and efficient shipping services from Karachi Port to Hamad Port, Doha.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct sea freight to Doha</li>
          <li>✅ Express air cargo services</li>
          <li>✅ Specialized handling for commercial goods</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Qatar Quote</a>
        </div>
      </section>
    </main>
  );
}
