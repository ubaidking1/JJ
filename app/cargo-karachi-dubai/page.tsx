import { pageMetadata } from "@/lib/seo";
import HubLink from "@/components/HubLinks";
import RouteRateSection from "@/components/RouteRateSection";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Dubai Cargo: Shipping Time & Rates | JSI" },
  description: "Karachi to Dubai cargo by sea (about 4-6 days) or air (24-48 hrs). LCL, FCL and door-to-door with customs support. Get rates per kg or CBM on WhatsApp.",
  keywords: [
    "export shipping Pakistan to Dubai UAE",
    "import freight Dubai UAE to Pakistan",
    "reliable freight rates Dubai UAE",

    "Karachi to Dubai shipping",
    "Dubai to Karachi freight",
    "Pakistan Dubai cargo",
    "sea freight Dubai Pakistan",
    "LCL shipping Dubai",
    "FCL shipping Dubai",
    "Dubai import export",
    "Karachi to Dubai cargo rates",
    "Karachi to Dubai cargo rates per kg",
    "ship from Karachi to Dubai",
    "cargo Pakistan to Dubai",
    "Dubai to Karachi cargo charges",
    "Karachi to Dubai by ship time"
  ],
  alternates: { canonical: "/cargo-karachi-dubai/" },
});

const faq = [
  { q: "How much does cargo from Karachi to Dubai cost?", a: "Cost depends on weight (kg), volume (CBM), commodity and service. Air cargo is priced per chargeable kg, sea LCL per CBM, and FCL per container. Send your cargo details for an itemised quotation." },
  { q: "How long does it take to ship from Karachi to Dubai by sea?", a: "Sea freight to Jebel Ali typically takes about 4 to 6 days port to port on direct services, plus customs clearance and delivery. Door-to-door usually takes 8 to 12 days." },
  { q: "How long does air cargo from Karachi to Dubai take?", a: "Air freight usually takes 24 to 48 hours from flight departure, plus clearance on arrival." },
  { q: "How can I ship from Karachi to Dubai?", a: "Send your cargo details, get an itemised quotation, confirm the booking and share the invoice and packing list. We handle export clearance in Karachi, shipping by sea or air, and clearance and delivery in the UAE." },
  { q: "Can you ship from Dubai or Sharjah to Karachi?", a: "Yes. We handle imports from Dubai, Sharjah, Abu Dhabi and Ajman to Karachi, including door-to-door cargo and customs clearance in Pakistan." },
  { q: "What documents are needed to ship cargo to Dubai?", a: "Typically a commercial invoice, packing list and bill of lading or airway bill. Some goods need extra certificates. We confirm requirements for your commodity before booking." },
];

export default function CargoKarachiDubaiPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <section className="prose max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-6">Karachi to Dubai Cargo: Shipping Time, Rates and Door-to-Door Service</h1>

        <p className="text-lg leading-relaxed text-gray-800 font-medium">
          <strong>Karachi to Dubai shipping time:</strong> sea freight takes about 4 to 6 days port to port (Karachi to Jebel Ali), air cargo takes 24 to 48 hours, and door-to-door cargo usually takes 8 to 12 days including customs clearance. Rates are charged per chargeable kg (air), per CBM (sea LCL) or per container (FCL).
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-800 font-bold">Request the current Karachi–Jebel Ali sailing schedule and booking availability.</p>
        </div>

        <p className="text-lg leading-relaxed text-gray-700">
          Request <strong>Karachi to Dubai cargo rates</strong> with Jilani Shipping International. Compare an itemised quotation for your cargo, routing and delivery scope before booking.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="p-6 bg-blue-900 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Sea Freight</h3>
            <p className="text-sm opacity-90 font-bold italic underline">LCL Shipment Specialist</p>
            <p className="text-sm opacity-90 mt-2">Best for bulk textiles, furniture, and heavy machinery. Sailing availability confirmed on enquiry.</p>
          </div>
          <div className="p-6 bg-blue-700 text-white rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2">Air Cargo</h3>
            <p className="text-sm opacity-90 font-bold italic underline">Time-sensitive shipment enquiries</p>
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

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-4">Karachi to Dubai Cargo Rates: How Each Service Is Priced</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border">Service</th>
                <th className="p-4 border">Rate Basis</th>
                <th className="p-4 border">What We Need For Your Quote</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border font-bold">Air cargo</td>
                <td className="p-4 border">Per chargeable kg</td>
                <td className="p-4 border">Weight and dimensions</td>
              </tr>
              <tr>
                <td className="p-4 border font-bold">Sea LCL</td>
                <td className="p-4 border">Per CBM</td>
                <td className="p-4 border">Total CBM and commodity</td>
              </tr>
              <tr>
                <td className="p-4 border font-bold">Sea FCL</td>
                <td className="p-4 border">Per 20ft or 40ft container</td>
                <td className="p-4 border">Container size and cargo-ready date</td>
              </tr>
              <tr>
                <td className="p-4 border font-bold">Door-to-door</td>
                <td className="p-4 border">All-inclusive quotation</td>
                <td className="p-4 border">Pickup address in Karachi and delivery address in the UAE</td>
              </tr>
            </tbody>
          </table>
        </div>

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

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Karachi to Dubai Shipping Time (Sea, Air and Door-to-Door)</h2>
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

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">How to Ship from Karachi to Dubai</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Send your cargo details (weight, dimensions or CBM, commodity) on WhatsApp or through the online quote form.</li>
          <li>Receive an itemised quotation for sea, air or door-to-door service and confirm the booking.</li>
          <li>Prepare the commercial invoice and packing list. We confirm any extra certificates for your goods.</li>
          <li>We handle export clearance in Karachi and book the sailing or flight to Dubai.</li>
          <li>Cargo is cleared in the UAE and delivered to your door in Dubai, Sharjah, Abu Dhabi or Ajman.</li>
        </ol>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Dubai to Karachi Cargo Charges and Imports</h2>
        <p className="text-gray-700">Importing from Dubai, Sharjah or Abu Dhabi to Pakistan? We collect from your supplier or warehouse in the UAE, consolidate LCL cargo, and handle customs clearance and delivery in Karachi. Cargo charges depend on weight, CBM and commodity, so send us your packing list for an exact quote.</p>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Karachi to Dubai Cargo: Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="rounded-xl border p-5"><summary className="cursor-pointer font-bold text-blue-900">{f.q}</summary><p className="mt-3 leading-7 text-gray-700">{f.a}</p></details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black text-blue-900 mb-6">Ready to Ship to Dubai?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20need%20Karachi%20to%20Dubai%20cargo%20rates" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 shadow-lg flex items-center justify-center gap-2">
              WhatsApp Now for Rates
            </a>
            <a href="#smart-quote" className="px-10 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 shadow-lg">
              Get an Online Quote
            </a>
          </div>
        </div>
      </section>
    <HubLink country="dubai" />
    <RouteRateSection destination="Dubai UAE" />
    </main>
  );
}
