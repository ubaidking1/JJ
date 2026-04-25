import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Turkey | Jilani Shipping International",
  description: "Ship your goods from Karachi to Turkey (Istanbul, Izmir, Mersin). Professional sea and air freight with specialized transit solutions.",
  keywords: ["cargo Karachi to Turkey", "shipping to Istanbul", "Karachi to Turkey freight", "Turkey logistics Pakistan"],
};

export default function CargoTurkey() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to Turkey</h1>
        <p className="text-lg text-gray-700 mt-4">JSI connects Pakistan to the heart of the Eurasia trade route with reliable shipping to major Turkish ports.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct and transit services to Istanbul Ambarli and Mersin</li>
          <li>✅ Specialized handling for textile machinery and raw materials</li>
          <li>✅ Complete documentation for Turkey-Pakistan FTA trade</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Turkey Quote</a>
        </div>
      </section>
    </main>
  );
}
