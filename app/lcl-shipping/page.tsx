import { Metadata } from "next";
import CBMCalculator from "@/components/CBMCalculator";

export const metadata: Metadata = {
  title: "LCL Shipment Karachi | Best Less than Container Load Rates 2026",
  description: "Get the cheapest LCL shipment rates from Karachi. Specialized in small cargo consolidation for UAE, UK, USA, and Europe. Weekly sailings, 100% safe handling.",
  keywords: ["LCL shipment", "LCL shipment Karachi", "LCL shipping Pakistan", "LCL rates Karachi", "Less than container load Pakistan", "shared container shipping Karachi", "cargo consolidation Karachi"],
};

export default function LCLShipping() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-6 text-center">International LCL Shipment & Consolidation</h1>
        <p className="text-xl text-gray-700 text-center mb-12">
          Global <strong>LCL shipment</strong> solutions from China, Gulf, and Worldwide to Pakistan. Jilani Shipping International (JSI) provides the most reliable and cost-effective Less than Container Load services.
        </p>

        <div className="mb-16 bg-blue-900 text-white p-8 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="relative z-10 md:flex items-center justify-between">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">China to Pakistan LCL Specialists</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                We offer the most reliable <strong>LCL shipment from China to Karachi</strong>. With our own consolidation warehouses in Yiwu, Guangzhou, and Shenzhen, we ensure your small cargo is handled with expert care and delivered at the best rates.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm font-semibold">
                <li>✅ Weekly Consolidations</li>
                <li>✅ Yiwu to Karachi LCL</li>
                <li>✅ Guangzhou Direct LCL</li>
                <li>✅ Shenzhen LCL Service</li>
              </ul>
            </div>
            <div className="hidden md:block text-6xl">🇨🇳🚢🇵🇰</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">What is an LCL Shipment?</h2>
            <p className="text-gray-700 leading-relaxed">
              An <strong>LCL shipment</strong> (Less than Container Load) is a shipping method where your cargo shares space with other shipments in a single container. This is ideal for those who don't have enough goods to fill a 20ft or 40ft container but still want the security of sea freight.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✅ <strong>LCL Shipment Savings:</strong> Pay only for the space (CBM) your cargo occupies.</li>
              <li>✅ <strong>Weekly Consolidation:</strong> We offer frequent LCL shipment schedules to major global ports.</li>
              <li>✅ <strong>Safe Handling:</strong> Our expert team handles the consolidation and de-consolidation with extreme care.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Expert LCL Shipment Handling</h2>
            <div className="p-4 border-l-4 border-blue-700 bg-gray-50">
              <h4 className="font-bold">LCL Shipment Karachi to Worldwide</h4>
              <p className="text-sm text-gray-600">We specialize in LCL shipments from Karachi port to destinations across the globe, including Dubai, UK, USA, and Europe.</p>
            </div>
            <div className="p-4 border-l-4 border-blue-700 bg-gray-50">
              <h4 className="font-bold">Real-time LCL Tracking</h4>
              <p className="text-sm text-gray-600">Track your LCL shipment every step of the way with our advanced cargo tracking system.</p>
            </div>
            <div className="p-4 border-l-4 border-blue-700 bg-gray-50">
              <h4 className="font-bold">No Hidden LCL Charges</h4>
              <p className="text-sm text-gray-600">JSI provides transparent quotes for every LCL shipment, ensuring you know exactly what you're paying for.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 py-12 border-y border-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10">How LCL Shipping Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">1</div>
              <h5 className="font-bold">Booking</h5>
              <p className="text-xs text-gray-500">Provide cargo dimensions & destination.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">2</div>
              <h5 className="font-bold">Consolidation</h5>
              <p className="text-xs text-gray-500">Your goods are packed with other shipments.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">3</div>
              <h5 className="font-bold">Shipping</h5>
              <p className="text-xs text-gray-500">The container is loaded onto the vessel.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">4</div>
              <h5 className="font-bold">De-Consolidation</h5>
              <p className="text-xs text-gray-500">Cargo is sorted at destination and delivered.</p>
            </div>
          </div>
        </div>

        <CBMCalculator />

        <div className="mt-16 grid md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-3xl border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">How to Calculate LCL Shipment Cost?</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              LCL shipment costs are calculated based on <strong>Volume (CBM)</strong>. 1 CBM is 1 meter x 1 meter x 1 meter. Even if your cargo is small, Jilani Shipping ensures you get the most competitive per-CBM rates from Karachi.
            </p>
            <div className="bg-white p-4 rounded-xl border border-blue-100 font-mono text-xs">
              <p className="font-bold text-blue-800">LCL Formula:</p>
              <p>Length(m) x Width(m) x Height(m) = Total CBM</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Primary LCL Routes</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li>🚢 Karachi to Dubai (Weekly)</li>
              <li>🚢 Karachi to Jebel Ali</li>
              <li>🚢 Karachi to Riyadh (via Dammam)</li>
              <li>🚢 Karachi to Jeddah</li>
              <li>🚢 Karachi to Kuwait (Shuaiba)</li>
              <li>🚢 Karachi to Doha, Qatar</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions about LCL</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border-b pb-4">
              <h4 className="font-bold text-blue-800">What is the minimum volume for an LCL shipment?</h4>
              <p className="text-sm text-gray-600">Generally, the minimum is 1 CBM, but at Jilani Shipping, we accommodate smaller shipments through our flexible consolidation service.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold text-blue-800">How long does an LCL shipment to Dubai take?</h4>
              <p className="text-sm text-gray-600">The sailing time from Karachi to Dubai is approximately 4-6 days. Total transit time including consolidation is about 10-12 days.</p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold text-blue-800">Is my LCL cargo safe with other goods?</h4>
              <p className="text-sm text-gray-600">Yes, we use professional palletizing and shrink-wrapping to ensure your goods are secured and separated from other cargo.</p>
            </div>
          </div>
        </div>

        <div id="quote-form" className="mt-16 text-center">
          <a href="/contact" className="inline-block px-12 py-5 bg-blue-700 text-white font-black rounded-full hover:bg-blue-800 transition-all shadow-xl hover:shadow-blue-200 uppercase tracking-widest">
            Request LCL Shipping Rates
          </a>
        </div>
      </section>
    </main>
  );
}
