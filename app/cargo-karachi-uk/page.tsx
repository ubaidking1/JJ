import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to UK | Jilani Shipping International",
  description: "Ship your cargo from Karachi to UK (London Gateway, Felixstowe, Southampton). Professional sea and air freight with door-to-door solutions.",
  keywords: ["cargo Karachi to UK", "shipping to London Gateway", "Karachi to UK freight", "UK logistics Pakistan"],
};

export default function CargoUK() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to UK</h1>
        <p className="text-lg text-gray-700 mt-4">JSI provides top-tier freight forwarding services for businesses and individuals shipping to the United Kingdom.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct sailings to London Gateway and Felixstowe</li>
          <li>✅ Weekly LCL and FCL options</li>
          <li>✅ UK customs clearance and VAT support</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get UK Quote</a>
        </div>
      </section>
    </main>
  );
}
