import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = pageMetadata({
 title: { absolute: "Iran Transit by Road & Air Freight Enquiries | JSI" },
 description: "Request Iran transit rates via Pakistan, road transport and air freight enquiries with export documentation, route review and itemised shipment quotations.",
 keywords: ["Iran transit via Pakistan", "Iran transit by road", "air freight to Iran", "export cargo Pakistan to Iran", "Iran export freight rates", "reliable Iran transit rate", "Karachi Iran bonded transport"],
 alternates: { canonical: "/iran-transit-service/" },
});
export default function IranTransitService() {
 return <main className="max-w-6xl mx-auto px-6 py-12">
  <h1 className="text-4xl font-bold text-blue-900">Iran Transit by Road and Air Freight Enquiries</h1>
  <p className="mt-6 text-lg text-gray-700">Jilani Shipping coordinates Iran transit enquiries via Pakistan and export cargo planning from Karachi. Share the goods, origin and final destination so route availability, carrier acceptance, documentation and applicable requirements can be reviewed before a booking is offered.</p>
  <section className="mt-10"><h2 className="text-2xl font-bold text-blue-900">By Road: Iran Transit via Pakistan</h2><p className="mt-3 text-gray-700">For road transit, provide the arrival port, delivery location, commodity, HS code, gross weight and container or truck requirement. Our team can review port handling, transit documentation, border coordination and transport scope. Transit cargo passing through Pakistan and exports originating in Pakistan require different documentation.</p></section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-blue-900">By Air: Iran Import and Export Cargo Enquiries</h2><p className="mt-3 text-gray-700">For time-sensitive air freight enquiries, share the origin and destination airports, cargo dimensions, weight, product details and ready date. Air routing and acceptance must be confirmed for each shipment; an enquiry does not confirm an available flight or guaranteed delivery time.</p></section>
  <section className="mt-10 rounded-2xl bg-blue-50 p-7"><h2 className="text-2xl font-bold text-blue-900">Request a Reliable Rate for Iran Transit</h2><p className="mt-3 text-gray-700">A useful Iran transit quotation identifies the transport mode, handling, documentation, border charges, delivery scope and exclusions. Comparing the cheapest rate for Iran transit requires comparing the same service scope. Rates depend on cargo, route, availability and validity; we do not promise a universal lowest price or a 100% service guarantee.</p></section>
  <section className="mt-10"><h2 className="text-2xl font-bold text-blue-900">Documents for an Iran Export or Transit Quote</h2><p className="mt-3 text-gray-700">Send a commercial invoice or pro forma invoice, packing list, HS code, origin, destination, shipment size, Incoterm and planned date. Additional permits or supporting documents depend on the goods and proposed route.</p></section>
  <div className="mt-8 flex flex-wrap gap-6 font-semibold text-blue-800"><Link href="/export-from-pakistan/">Export shipping from Pakistan</Link><Link href="/air-freight-karachi/">Air freight support</Link><Link href="/customs-clearance-karachi/">Customs coordination</Link></div>
  <a className="inline-block mt-8 rounded-lg bg-blue-700 px-6 py-4 font-bold text-white" href="https://wa.me/923180155643?text=Website%20Inquiry%20-%20Iran%20transit%20or%20export%20quote.%20Mode%3A%20Road%2FAir.%20Origin%3A%20____%20Destination%3A%20____%20Commodity%3A%20____">Request Iran Transit or Export Quote</a>
 </main>;
}
