import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to USA Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and USA with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates today.",
  keywords: [
    "Karachi to USA shipping",
    "USA to Karachi freight",
    "Pakistan USA cargo",
    "sea freight USA Pakistan",
    "LCL shipping USA",
    "FCL shipping USA",
    "USA import export"
  ],
  alternates: { canonical: "/cargo-karachi-usa/" },
};

export default function CargoUSA() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to USA Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">Expand your business to the United States with JSI's reliable maritime and air cargo solutions.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Major ports: New York, Houston, Los Angeles, and Savannah</li>
          <li>✅ Specialized handling for textile and commercial goods</li>
          <li>✅ ISF filing and US customs support</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get USA Quote</a>
        </div>
      </section>
    </main>
  );
}
