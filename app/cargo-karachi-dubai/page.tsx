import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/cargo-karachi-dubai/" },
  title: "Pakistan–Dubai Import & Export Shipping | JSI",
  description: "Import and export commercial shipments between Dubai, UAE and Karachi, Pakistan with FCL, LCL and door-to-door freight support.",
  keywords: [
    "cargo Karachi to Dubai",
    "cheapest cargo rates Karachi to Dubai",
    "door to door cargo Dubai from Karachi",
    "sea freight Karachi to Dubai cost",
    "air cargo price Karachi to Dubai",
    "Pakistan to Dubai shipping time",
    "LCL shipment Dubai",
    "JSI cargo Karachi",
  ],
};

export default function CargoKarachiDubaiPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <section className="prose max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-6">Import & Export Shipping Between Karachi and Dubai</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-800 font-bold">🚀 2026 Update: Weekly sailings confirmed every Friday from Karachi Port to Jebel Ali, Dubai.</p>
        </div>

        <p className="text-lg leading-relaxed text-gray-700">
          Searching for the <strong>cheapest cargo Karachi to Dubai</strong>? Jilani Shipping International (JSI) is the leader in Pakistan-UAE logistics. We don't just move boxes; we move your business with 100% safety and zero hidden charges.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="p-6 bg-blue-900 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Sea Freight</h3>
            <p className="text-sm opacity-90 font-bold italic underline">LCL Shipment Specialist</p>
            <p className="text-sm opacity-90 mt-2">Best for bulk textiles, furniture, and heavy machinery. Weekly departures.</p>
          </div>
          <div className="p-6 bg-blue-700 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Air Cargo</h3>
            <p className="text-sm opacity-90 font-bold italic underline">1-2 Day Delivery</p>
            <p className="text-sm opacity-90 mt-2">Ideal for urgent documents, electronics, and fashion samples.</p>
          </div>
          <div className="p-6 bg-blue-500 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Door-to-Door</h3>
            <p className="text-sm opacity-90 font-bold italic underline">Zero Hassle</p>
            <p className="text-sm opacity-90 mt-2">We pick up from your door in Karachi and deliver to your door in Dubai/Sharjah.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">How Much Does Cargo from Karachi to Dubai Cost?</h2>
        <p>
          The cost depends on weight, volume (CBM), and the type of goods. JSI offers the most competitive <strong>Karachi to Dubai cargo rates</strong>. 
          For an accurate quote, we need to know:
        </p>
        <ul className="grid md:grid-cols-2 gap-2">
          <li>✅ Dimensions (Length x Width x Height)</li>
          <li>✅ Total Weight</li>
          <li>✅ Nature of Goods (Personal or Commercial)</li>
          <li>✅ Destination Area (Dubai, Abu Dhabi, Sharjah, Ajman)</li>
        </ul>

        <div className="my-10 p-8 bg-gray-50 border rounded-3xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Items We Frequently Ship to UAE:</h2>
          <div className="flex flex-wrap gap-2">
            {["Textiles & Garments", "Leather Goods", "Surgical Instruments", "Sports Goods", "Furniture", "Household Items", "Electronics", "Commercial Samples"].map((item) => (
              <span key={item} className="px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-semibold text-blue-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Transit Times for Dubai</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border">Service Type</th>
                <th className="p-4 border">Transit Time</th>
                <th className="p-4 border">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border font-bold">Air Freight</td>
                <td className="p-4 border">24 - 48 Hours</td>
                <td className="p-4 border">Urgent & Small items</td>
              </tr>
              <tr>
                <td className="p-4 border font-bold">Sea Freight (Direct)</td>
                <td className="p-4 border">4 - 6 Days</td>
                <td className="p-4 border">Commercial Bulk</td>
              </tr>
              <tr>
                <td className="p-4 border font-bold">Door-to-Door</td>
                <td className="p-4 border">8 - 12 Days</td>
                <td className="p-4 border">Personal effects & E-commerce</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black text-blue-900 mb-6">Ready to Ship to Dubai?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/923180155643" className="px-10 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 shadow-lg flex items-center justify-center gap-2">
              WhatsApp Now for Rates
            </a>
            <a href="/contact/" className="px-10 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 shadow-lg">
              Get an Online Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
