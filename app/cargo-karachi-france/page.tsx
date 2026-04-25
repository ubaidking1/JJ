import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to France | Jilani Shipping International",
  description: "Professional freight forwarding from Karachi to France (Le Havre, Marseille, Paris). Reliable sea and air cargo solutions.",
  keywords: ["cargo Karachi to France", "shipping to Le Havre", "Karachi to France freight", "France logistics agents"],
};

export default function CargoFrance() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to France</h1>
        <p className="text-lg text-gray-700 mt-4">JSI connects your business to the French market with specialized shipping services to major ports and airports.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Shipping to Le Havre, Marseille, and Fos-sur-Mer</li>
          <li>✅ Air cargo to Paris CDG</li>
          <li>✅ Expert handling of export documentation and EU customs</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get France Quote</a>
        </div>
      </section>
    </main>
  );
}
