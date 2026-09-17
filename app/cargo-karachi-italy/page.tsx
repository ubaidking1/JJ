import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Italy Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Italy with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates now.",
  keywords: [
    "Karachi to Italy shipping",
    "Italy to Karachi freight",
    "Pakistan Italy cargo",
    "sea freight Italy Pakistan",
    "LCL shipping Italy",
    "FCL shipping Italy",
    "Italy import export"
  ],
  alternates: { canonical: "/cargo-karachi-italy/" },
};

export default function CargoItaly() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Italy Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">Expert freight forwarding solutions from Pakistan to the heart of the Mediterranean market.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct sailings to Genoa and La Spezia</li>
          <li>✅ Air freight solutions to Milan Malpensa and Rome Fiumicino</li>
          <li>✅ Specialized logistics for fashion, machinery, and commercial goods</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Italy Quote</a>
        </div>
      </section>
    </main>
  );
}
