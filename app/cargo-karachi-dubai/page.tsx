import { pageMetadata } from "@/lib/seo";
import RouteRateSection from "@/components/RouteRateSection";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi–Dubai Freight Forwarding | Commercial Sea & Air Shipments | JSI" },
  description: "Arrange commercial freight shipments between Karachi and Dubai by sea or air. JSI coordinates FCL, LCL, import and export documentation, customs requirements and delivery scope for businesses.",
  keywords: [
    "export shipping Pakistan to Dubai UAE",
    "import freight Dubai UAE to Pakistan",
    "reliable freight rates Dubai UAE",

    "Karachi to Dubai freight forwarding",
    "commercial shipments Karachi to Dubai",
    "Dubai to Karachi freight forwarding",
    "Pakistan UAE import export shipping",
    "sea freight Karachi Dubai",
    "air freight Karachi Dubai",
    "LCL freight Dubai Pakistan",
    "FCL shipping Dubai Pakistan",
    "commercial import export Dubai",
    "Karachi to Dubai cargo rates",
    "Karachi to Dubai cargo rates per kg",
    "ship commercial goods Karachi to Dubai",
    "Dubai to Karachi cargo charges",
    "Karachi to Dubai shipping time"
  ],
  alternates: { canonical: "/cargo-karachi-dubai/" },
});

const faq = [
  { q: "How are commercial freight shipments from Karachi to Dubai priced?", a: "Pricing depends on commodity, gross and chargeable weight, dimensions or CBM, FCL or LCL requirement, routing and delivery scope. Air freight is normally priced by chargeable weight, sea LCL by volume or weight rules, and FCL by container. Send shipment details for an itemised quotation." },
  { q: "How long does it take to ship from Karachi to Dubai by sea?", a: "Transit time depends on the confirmed vessel, routing, transshipment, port operations and customs clearance. JSI confirms the current estimated schedule with the shipment quotation." },
  { q: "How long does air cargo from Karachi to Dubai take?", a: "Air transit depends on airline routing, flight availability, handling and customs clearance. The applicable estimate is confirmed when the shipment is quoted." },
  { q: "Can you ship from Dubai or Sharjah to Karachi?", a: "Yes. We handle imports from Dubai, Sharjah, Abu Dhabi and Ajman to Karachi, including door-to-door cargo and customs clearance in Pakistan." },
  { q: "What documents are needed to ship cargo to Dubai?", a: "Typically a commercial invoice, packing list and bill of lading or airway bill. Some goods need extra certificates. We confirm requirements for your commodity before booking." },
];

export default function CargoKarachiDubaiPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <section className="prose max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-6">Karachi–Dubai Freight Forwarding for Commercial Import and Export Shipments</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-yellow-800 font-bold">Request the current Karachi–Jebel Ali sailing schedule and booking availability.</p>
        </div>

        <p className="text-lg leading-relaxed text-gray-700">
          Jilani Shipping International coordinates commercial <strong>freight shipments between Karachi and Dubai</strong> for importers and exporters. Arrange sea freight, air freight, FCL or LCL based on your shipment size, commodity, routing and delivery requirements. We help bring freight booking, documentation, customs coordination and delivery planning together through one point of contact.
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
            <p className="text-sm opacity-90 font-bold italic underline">Subject to route and cargo</p>
            <p className="text-sm opacity-90 mt-2">Origin pickup and destination delivery can be included where available and confirmed in the shipment quotation.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Commercial Freight Rates: Karachi to Dubai and Dubai to Karachi</h2>
        <p>
          Freight charges depend on weight, volume (CBM), commodity, service type, routing and the origin/destination services required. JSI can provide an itemised <strong>Karachi–Dubai freight quotation</strong> based on the shipment details. 
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

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Karachi–Dubai Shipping Schedule and Transit Estimates</h2>
        <p className="text-gray-700">Transit estimates are not fixed. They depend on the selected service, confirmed airline or vessel, routing, transshipment, port and terminal operations, customs clearance and final delivery scope. Ask JSI to confirm the current schedule and estimated transit for your specific cargo before booking.</p>
        <div className="my-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <h3 className="font-bold text-blue-900">What to include in your schedule enquiry</h3>
          <ul className="mt-3 list-disc pl-5 text-gray-700">
            <li>Origin and destination (airport, seaport or delivery address)</li>
            <li>Commodity, package count, gross weight and dimensions or CBM</li>
            <li>Preferred service: air, LCL or FCL</li>
            <li>Cargo-ready date and any delivery requirements</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Dubai to Karachi Commercial Import Shipments</h2>
        <p className="text-gray-700">Importing commercial goods from Dubai, Sharjah or Abu Dhabi to Pakistan? JSI can coordinate the freight and review supplier pickup, LCL consolidation, customs-clearance and delivery requirements according to the shipment scope. Charges depend on weight, CBM, commodity, routing and local services. Share your packing list and delivery location for an itemised quote.</p>

        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Karachi–Dubai Freight Forwarding: Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="rounded-xl border p-5"><summary className="cursor-pointer font-bold text-blue-900">{f.q}</summary><p className="mt-3 leading-7 text-gray-700">{f.a}</p></details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black text-blue-900 mb-6">Ready to Ship to Dubai?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20need%20Karachi%20to%20Dubai%20cargo%20rates" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 shadow-lg flex items-center justify-center gap-2">
              Discuss Your Freight Shipment
            </a>
            <a href="#smart-quote" className="px-10 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 shadow-lg">
              Get an Online Quote
            </a>
          </div>
        </div>
      </section>
    <RouteRateSection destination="Dubai UAE" />
    </main>
  );
}
