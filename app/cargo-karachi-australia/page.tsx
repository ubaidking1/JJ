import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Australia | Jilani Shipping International",
  description: "Ship your cargo from Karachi to Australia (Sydney, Melbourne, Brisbane, Fremantle). Expert sea and air freight services with customs support.",
  keywords: ["cargo Karachi to Australia", "shipping to Sydney", "Karachi to Melbourne cargo", "Australia logistics services"],
};

export default function CargoAustralia() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-bold text-blue-900">Cargo Services Karachi to Australia</h1>
        <p className="text-lg text-gray-700 mt-4">JSI offers reliable and efficient freight forwarding solutions connecting Pakistan to Australia's major commercial hubs.</p>
        <ul className="mt-6 space-y-2">
          <li>✅ Weekly sailings to Sydney, Melbourne, and Brisbane</li>
          <li>✅ Comprehensive LCL and FCL shipping options</li>
          <li>✅ Assistance with Australian customs and quarantine (DAFF)</li>
        </ul>
        <div className="mt-8">
          <a href="/contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold">Get Australia Quote</a>
        </div>
      </section>
    </main>
  );
}
