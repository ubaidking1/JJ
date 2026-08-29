import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan–USA Import & Export Shipping | JSI",
  description: "Import and export freight between the USA and Karachi, Pakistan via New York, Houston, Los Angeles and Savannah.",
  keywords: ["cargo Karachi to USA", "shipping to New York", "Karachi to USA freight", "USA logistics agents"],
};

export default function CargoUSA() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Import & Export Shipping Between Pakistan and USA</h1>
        <p className="text-lg text-gray-700 mt-4">Expand your business to the United States with JSI's reliable maritime and air cargo solutions.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Major ports: New York, Houston, Los Angeles, and Savannah</li>
          <li>✅ Specialized handling for textile and commercial goods</li>
          <li>✅ ISF filing and US customs support</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get USA Quote</a>
        </div>
      </section>
    </main>
  );
}
