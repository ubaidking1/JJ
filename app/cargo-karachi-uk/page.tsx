import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to United Kingdom Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and United Kingdom with FCL, LCL and air freight options, documentation support, port coordination and tailored freight.",
  keywords: [
    "Karachi to United Kingdom shipping",
    "United Kingdom to Karachi freight",
    "Pakistan United Kingdom cargo",
    "sea freight United Kingdom Pakistan",
    "LCL shipping United Kingdom",
    "FCL shipping United Kingdom",
    "United Kingdom import export"
  ],
  alternates: { canonical: "/cargo-karachi-uk/" },
};

export default function CargoUK() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to UK Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">JSI provides top-tier freight forwarding services for businesses and individuals shipping to the United Kingdom.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct sailings to London Gateway and Felixstowe</li>
          <li>✅ Weekly LCL and FCL options</li>
          <li>✅ UK customs clearance and VAT support</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get UK Quote</a>
        </div>
      </section>
    </main>
  );
}
