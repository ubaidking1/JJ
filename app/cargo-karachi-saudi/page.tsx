import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Saudi Arabia | Jeddah & Riyadh | Jilani Shipping",
  description: "Fastest shipping from Karachi to Saudi Arabia. Serving Jeddah, Riyadh, Dammam, and Madinah with expert customs support.",
  keywords: ["cargo Karachi to Saudi Arabia", "shipping to Jeddah", "Karachi to Riyadh cargo", "Saudi logistics"],
};

export default function CargoSaudi() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to Saudi Arabia</h1>
        <p className="text-lg text-gray-700 mt-4">Expand your reach in the Kingdom with JSI's premium logistics and customs clearance services.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-blue-900 text-white rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Key Saudi Ports</h2>
            <ul className="space-y-3">
              <li>📍 Jeddah Islamic Port</li>
              <li>📍 King Abdulaziz Port, Dammam</li>
              <li>📍 Riyadh Dry Port</li>
            </ul>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Service Expertise</h2>
            <ul className="space-y-3">
              <li>✅ SASO & SABER Documentation Support</li>
              <li>✅ Temperature-controlled shipping for perishables</li>
              <li>✅ Door-to-Door delivery to all major cities</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="/contact" className="bg-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-lg">Get Saudi Quote</a>
        </div>
      </section>
    </main>
  );
}
