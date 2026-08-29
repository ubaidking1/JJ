import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan–Saudi Import & Export Shipping | JSI",
  description: "Import and export commercial shipments between Saudi Arabia and Karachi, Pakistan via Jeddah, Riyadh and Dammam.",
  keywords: [
    "cargo Karachi to Saudi Arabia",
    "cheapest cargo rates Karachi to Saudi",
    "door to door cargo Saudi Arabia from Pakistan",
    "sea freight Karachi to Jeddah cost",
    "Karachi to Riyadh cargo price",
    "Pakistan to Saudi shipping time",
    "LCL shipment Saudi Arabia",
    "JSI cargo Saudi",
  ],
};

export default function CargoSaudi() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-6">Import & Export Shipping Between Pakistan and Saudi Arabia</h1>
        
        <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-8">
          <p className="text-green-800 font-bold">🇸🇦 Specialized in SASO & SABER documentation for smooth customs clearance in Jeddah and Riyadh.</p>
        </div>

        <p className="text-lg leading-relaxed text-gray-700">
          Looking for reliable <strong>cargo from Karachi to Saudi Arabia</strong>? Jilani Shipping International (JSI) provides end-to-end logistics solutions, ensuring your goods reach any city in the Kingdom safely and on time.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="p-6 bg-blue-900 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Sea Freight</h3>
            <p className="text-sm opacity-90 font-bold italic underline">Jeddah & Dammam</p>
            <p className="text-sm opacity-90 mt-2">Cost-effective shipping for bulk textile, machinery, and food items.</p>
          </div>
          <div className="p-6 bg-blue-700 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Air Cargo</h3>
            <p className="text-sm opacity-90 font-bold italic underline">Fast Delivery</p>
            <p className="text-sm opacity-90 mt-2">Daily flights from Karachi to Riyadh and Jeddah for urgent shipments.</p>
          </div>
          <div className="p-6 bg-blue-500 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Customs Support</h3>
            <p className="text-sm opacity-90 font-bold italic underline">Expert Advice</p>
            <p className="text-sm opacity-90 mt-2">Complete assistance with SASO, SABER, and Saudi Customs regulations.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Service Area in Saudi Arabia</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Jeddah", "Riyadh", "Dammam", "Madinah", "Mecca", "Khobar", "Jubail", "Yanbu"].map(city => (
            <div key={city} className="p-4 border rounded-xl font-bold text-blue-900 bg-gray-50">{city}</div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">How to Ship to Saudi Arabia with JSI?</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold">Contact & Quote</h4>
              <p className="text-sm text-gray-600">Provide shipment details and get an instant quote for sea or air freight.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold">Documentation</h4>
              <p className="text-sm text-gray-600">Our experts help prepare SABER certificates and other required Saudi documents.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold">Shipping & Tracking</h4>
              <p className="text-sm text-gray-600">Your cargo is dispatched and you receive a tracking ID for real-time monitoring.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black text-blue-900 mb-6">Get Lowest Rates for Saudi Arabia</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/923180155643" className="px-10 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 shadow-lg flex items-center justify-center gap-2">
              WhatsApp Now for Saudi Rates
            </a>
            <a href="/contact" className="px-10 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 shadow-lg">
              Inquiry Form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
