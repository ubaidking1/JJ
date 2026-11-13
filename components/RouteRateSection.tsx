import Link from "next/link";
export default function RouteRateSection({ destination }: { destination: string }) {
 return <section className="my-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
  <h2 className="text-2xl font-bold text-blue-900">Commercial Import and Export Freight Quotations for {destination}</h2>
  <p className="mt-4 text-gray-700">Request a shipment-specific quotation for commercial exports from Pakistan to {destination}, or imports from {destination} to Pakistan. Compare the scope for sea freight, FCL, LCL or air freight where available, including origin and destination services.</p>
  <p className="mt-3 text-gray-700">Share the port of shipment, destination, commodity, weight, dimensions or CBM, Incoterm and cargo-ready date. JSI can help coordinate freight options, handling, documentation, customs requirements and delivery arrangements through one point of contact. Confirm charges, quotation validity and exclusions before booking.</p>
  <div className="mt-5 flex flex-wrap gap-5 font-semibold text-blue-800"><Link href="#smart-quote">Coordinate a {destination} freight enquiry</Link><Link href="/export-from-pakistan/">Export shipping support</Link><Link href="/import-to-pakistan/">Import shipping support</Link></div>
 </section>;
}
