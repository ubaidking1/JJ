import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to France Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and France with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "Karachi to France shipping",
    "France to Karachi freight",
    "Pakistan France cargo",
    "sea freight France Pakistan",
    "LCL shipping France",
    "FCL shipping France",
    "France import export"
  ],
  alternates: { canonical: "/cargo-karachi-france/" },
};

export default function CargoFrance() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to France Shipping Services</h1>
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
