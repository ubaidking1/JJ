import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Turkey Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Turkey with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "Karachi to Turkey shipping",
    "Turkey to Karachi freight",
    "Pakistan Turkey cargo",
    "sea freight Turkey Pakistan",
    "LCL shipping Turkey",
    "FCL shipping Turkey",
    "Turkey import export"
  ],
  alternates: { canonical: "/cargo-karachi-turkey/" },
};

export default function CargoTurkey() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Turkey Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">JSI connects Pakistan to the heart of the Eurasia trade route with reliable shipping to major Turkish ports.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Direct and transit services to Istanbul Ambarli and Mersin</li>
          <li>✅ Specialized handling for textile machinery and raw materials</li>
          <li>✅ Complete documentation for Turkey-Pakistan FTA trade</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Turkey Quote</a>
        </div>
      </section>
    </main>
  );
}
