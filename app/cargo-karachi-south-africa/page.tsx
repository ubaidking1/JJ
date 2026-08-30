import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/cargo-karachi-south-africa" },
  title: "Pakistan–South Africa Import & Export Freight | JSI",
  description: "Import and export commercial freight between South Africa and Karachi, Pakistan via Durban, Cape Town and Johannesburg.",
  keywords: ["cargo Karachi to South Africa", "shipping to Durban", "Karachi to South Africa freight", "Durban port logistics", "South Africa shipping agents"],
};

export default function CargoSouthAfrica() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and South Africa</h1>
        <p className="text-lg text-gray-700 mt-4">
          Jilani Shipping International (JSI) provides specialized logistics solutions for cargo moving from Pakistan to South Africa. 
          We offer direct sea freight services to major ports, with a focus on <strong>Durban</strong>, the gateway to Southern Africa.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Major Destinations</h2>
            <ul className="space-y-2 text-gray-700">
              <li>📍 <strong>Durban Port:</strong> Our primary hub for South African shipments.</li>
              <li>📍 <strong>Cape Town:</strong> Efficient delivery to the Western Cape.</li>
              <li>📍 <strong>Johannesburg:</strong> Comprehensive door-to-port and inland transit solutions.</li>
              <li>📍 <strong>Port Elizabeth:</strong> Reliable freight handling.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Service Highlights</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Weekly LCL and FCL sailings to Durban</li>
              <li>✅ Specialized handling for industrial and commercial goods</li>
              <li>✅ Complete customs documentation for SA revenue services</li>
              <li>✅ Competitive freight rates and transparent pricing</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center p-8 bg-blue-900 text-white rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to ship to South Africa?</h3>
          <p className="mb-6">Contact our team today for the best rates to Durban and beyond.</p>
          <a href="/contact" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all">
            Get South Africa Quote
          </a>
        </div>
      </section>
    </main>
  );
}
