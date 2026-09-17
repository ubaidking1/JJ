import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Netherlands Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Netherlands with FCL, LCL and air freight options, documentation support, port coordination and tailored freight now.",
  keywords: [
    "Karachi to Netherlands shipping",
    "Netherlands to Karachi freight",
    "Pakistan Netherlands cargo",
    "sea freight Netherlands Pakistan",
    "LCL shipping Netherlands",
    "FCL shipping Netherlands",
    "Netherlands import export"
  ],
  alternates: { canonical: "/cargo-karachi-netherlands/" },
};

export default function CargoNetherlands() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Netherlands Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">Utilize Rotterdam, Europe's largest port, as your gateway for exporting goods from Pakistan to the Netherlands and beyond.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct and transit services to Rotterdam Port</li>
          <li>✅ Fast air freight to Amsterdam Schiphol Airport</li>
          <li>✅ Seamless distribution throughout the EU</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Netherlands Quote</a>
        </div>
      </section>
    </main>
  );
}
