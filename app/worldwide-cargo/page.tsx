import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/worldwide-cargo/" },
  title: "Worldwide Cargo Shipping | Ship to Any Country | JSI",
  description:
    "Worldwide freight forwarding from Karachi to the USA, UK, Europe, Africa and Asia with reliable logistics support.",
  keywords: [
    "worldwide cargo Karachi",
    "global shipping to all countries",
    "international freight forwarding",
    "sea freight worldwide",
    "air cargo services",
    "door to door global shipping",
    "ship from Pakistan to Europe",
    "ship from Pakistan to USA",
    "ship from Pakistan to Africa",
  ],
};

export default function CargoWorldwidePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Reach, Local Expertise</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Jilani Shipping International (JSI) connects your business to the world. We provide 
            seamless freight forwarding and logistics solutions to <strong>every major port and city across the globe.</strong>
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-700">100+</div>
            <p className="text-gray-600 font-medium">Countries Served</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-700">500+</div>
            <p className="text-gray-600 font-medium">Global Agents</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-700">10k+</div>
            <p className="text-gray-600 font-medium">Shipments Delivered</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-700">24/7</div>
            <p className="text-gray-600 font-medium">Global Support</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Shipping to All Continents</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you are an exporter reaching new markets or an importer sourcing goods globally, 
              JSI provides the infrastructure you need. We specialize in navigating the unique customs 
              and logistics requirements of every region.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">🌍</div>
                <div>
                  <h3 className="font-bold text-blue-800">Europe & UK</h3>
                  <p className="text-sm text-gray-600">Daily connections to Rotterdam, Antwerp, London, and Felixstowe.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🇺🇸</div>
                <div>
                  <h3 className="font-bold text-blue-800">North & South America</h3>
                  <p className="text-sm text-gray-600">Comprehensive coverage across the USA, Canada, and Brazil.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🌏</div>
                <div>
                  <h3 className="font-bold text-blue-800">Asia & Far East</h3>
                  <p className="text-sm text-gray-600">Specialized routes to China, Japan, Korea, and Southeast Asia.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🦁</div>
                <div>
                  <h3 className="font-bold text-blue-800">Africa</h3>
                  <p className="text-sm text-gray-600">Reliable shipping to South Africa, Kenya, Nigeria, and Egypt.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🇦🇺</div>
                <div>
                  <h3 className="font-bold text-blue-800">Oceania</h3>
                  <p className="text-sm text-gray-600">Fast transit to Sydney, Melbourne, and Auckland.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">World-Class Carriers</h2>
            <p className="text-sm text-gray-600 mb-8">We partner with the world's most reliable shipping lines to ensure your cargo is always in safe hands.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center justify-center font-black text-blue-900 italic">MAERSK</div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center justify-center font-black text-yellow-600 italic">MSC</div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center justify-center font-black text-red-700">CMA CGM</div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center justify-center font-black text-blue-800">COSCO</div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center justify-center font-black text-green-700 italic">EVERGREEN</div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center justify-center font-black text-orange-600">HAPAG-LLOYD</div>
            </div>

            <div className="mt-10 p-6 bg-blue-900 text-white rounded-2xl">
              <h3 className="font-bold mb-2">Ready to ship worldwide?</h3>
              <p className="text-sm text-blue-100 mb-6">Our experts are standing by to provide you with the most competitive global rates.</p>
              <Link href="/contact/" className="block w-full text-center py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all">
                Get Your Global Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Global Logistics Section */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Integrated Global Logistics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Beyond just shipping, we provide end-to-end supply chain management across every border.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-4">🚢</div>
              <h3 className="font-bold text-blue-900 mb-2">Intermodal Transport</h3>
              <p className="text-sm text-gray-600">Seamlessly combining sea, air, and land transport for maximum efficiency.</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-4">📜</div>
              <h3 className="font-bold text-blue-900 mb-2">Global Compliance</h3>
              <p className="text-sm text-gray-600">We handle the complex legal and customs documentation for all 195 countries.</p>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-bold text-blue-900 mb-2">Global Sourcing</h3>
              <p className="text-sm text-gray-600">Supporting importers with supplier coordination and quality inspections globally.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
