import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Australia Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Australia with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "Karachi to Australia shipping",
    "Australia to Karachi freight",
    "Pakistan Australia cargo",
    "sea freight Australia Pakistan",
    "LCL shipping Australia",
    "FCL shipping Australia",
    "Australia import export"
  ],
  alternates: { canonical: "/cargo-karachi-australia/" },
};

export default function CargoAustralia() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Karachi to Australia Shipping Services</h1>
        <p className="text-lg text-gray-700 mt-4">JSI offers reliable and efficient freight forwarding solutions connecting Pakistan to Australia's major commercial hubs.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Weekly sailings to Sydney, Melbourne, and Brisbane</li>
          <li>✅ Comprehensive LCL and FCL shipping options</li>
          <li>✅ Assistance with Australian customs and quarantine (DAFF)</li>
        </ul>
        <div className="mt-8">
          <a href="/contact/" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Australia Quote</a>
        </div>
      </section>
    </main>
  );
}
