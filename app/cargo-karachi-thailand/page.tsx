import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Thailand Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Thailand with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "Karachi to Thailand shipping",
    "Thailand to Karachi freight",
    "Pakistan Thailand cargo",
    "sea freight Thailand Pakistan",
    "LCL shipping Thailand",
    "FCL shipping Thailand",
    "Thailand import export"
  ],
  alternates: { canonical: "/cargo-karachi-thailand/" },
};

export default function CargoThailand() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Thailand Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">Expert logistics connecting Pakistani exporters to the thriving Thai market.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Shipping to Laem Chabang and Bangkok Port</li>
          <li>✅ Weekly air freight to Suvarnabhumi Airport</li>
          <li>✅ Complete customs documentation and support</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Thailand Quote</a>
        </div>
      </section>
    </main>
  );
}
