import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Qatar Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Qatar with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates now.",
  keywords: [
    "Karachi to Qatar shipping",
    "Qatar to Karachi freight",
    "Pakistan Qatar cargo",
    "sea freight Qatar Pakistan",
    "LCL shipping Qatar",
    "FCL shipping Qatar",
    "Qatar import export"
  ],
  alternates: { canonical: "/cargo-karachi-qatar/" },
};

export default function CargoQatar() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Qatar Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">Safe and efficient shipping services from Karachi Port to Hamad Port, Doha.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct sea freight to Doha</li>
          <li>✅ Express air cargo services</li>
          <li>✅ Specialized handling for commercial goods</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Qatar Quote</a>
        </div>
      </section>
    </main>
  );
}
