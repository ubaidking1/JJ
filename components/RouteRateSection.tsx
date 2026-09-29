import Link from "next/link";
export default function RouteRateSection({ destination }: { destination: string }) {
 return <section className="my-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
  <h2 className="text-2xl font-bold text-blue-900">Reliable Import and Export Freight Rates for {destination}</h2>
  <p className="mt-4 text-gray-700">Request a reliable rate quotation for export shipping from Pakistan to {destination}, or import freight from {destination} to Pakistan. Compare the total scope for sea freight, FCL, LCL or air cargo where available; the lowest headline price may exclude origin or destination charges.</p>
  <p className="mt-3 text-gray-700">Share the port of shipment, destination, commodity, weight, dimensions or CBM, Incoterm and cargo-ready date. Ask for freight, handling, documentation, customs coordination and delivery charges to be itemised, with quotation validity and exclusions confirmed before booking.</p>
  <div className="mt-5 flex flex-wrap gap-5 font-semibold text-blue-800"><Link href="#smart-quote">Request a {destination} freight quote</Link><Link href="/export-from-pakistan/">Export shipping support</Link><Link href="/import-to-pakistan/">Import shipping support</Link></div>
 </section>;
}
