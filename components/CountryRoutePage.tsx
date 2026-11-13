import Link from "next/link";
import RouteRateSection from "@/components/RouteRateSection";
import { countryBySlug } from "@/lib/countries";

export default function CountryRoutePage({ slug }: { slug: string }) {
  const c = countryBySlug(slug);
  const wa = `https://wa.me/923180155643?text=${encodeURIComponent(`Hello Jilani Shipping, I need a Karachi to ${c.name} shipping quote`)}`;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <section>
        <h1 className="text-4xl font-bold text-blue-900">Freight Forwarding from Karachi to {c.name}: Sea &amp; Air</h1>
        <p className="text-lg text-gray-700 mt-4">
          Jilani Shipping International coordinates commercial freight shipments from Karachi to {c.name} by FCL, LCL and air freight, and import enquiries from {c.short} to Pakistan. We help align freight options, shipment documents, customs requirements and delivery scope through one point of contact. {c.note}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700">Discuss Commercial Freight</a>
          <a href="#smart-quote" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800">Request a Quote</a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">{c.short} Route at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-left">
            <tbody>
              <tr><th className="p-3 border bg-gray-100 w-1/3">Sea ports</th><td className="p-3 border">{c.seaPorts}</td></tr>
              <tr><th className="p-3 border bg-gray-100">Sea schedule</th><td className="p-3 border">Confirmed for each shipment enquiry</td></tr>
              <tr><th className="p-3 border bg-gray-100">Air freight gateways</th><td className="p-3 border">{c.airports}</td></tr>
              <tr><th className="p-3 border bg-gray-100">Air schedule</th><td className="p-3 border">Confirmed for each shipment enquiry</td></tr>
              <tr><th className="p-3 border bg-gray-100">Services</th><td className="p-3 border">FCL, LCL, air freight, documentation review and customs / delivery-scope coordination where available</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-gray-600">Carrier schedules, routing, transshipment and transit estimates can change. JSI confirms the available option against your cargo details and the current carrier schedule before quotation.</p>
      </section>


      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Commercial Import &amp; Export Shipments</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold text-blue-900">Export from Pakistan to {c.name}</h3>
            <p className="mt-2 leading-7 text-gray-700">For exporters, manufacturers and trading companies, JSI reviews the commodity, packing, shipment volume, destination and required documents to help identify a suitable FCL, LCL or air-freight option.</p>
            <Link href="/export-from-pakistan/" className="mt-3 inline-block font-semibold text-blue-800 underline">Pakistan export freight services</Link>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold text-blue-900">Import from {c.name} to Pakistan</h3>
            <p className="mt-2 leading-7 text-gray-700">For importers, JSI reviews supplier location, cargo readiness, Incoterm, shipment dimensions, destination port and customs-document requirements before confirming the freight scope.</p>
            <Link href="/import-to-pakistan/" className="mt-3 inline-block font-semibold text-blue-800 underline">Pakistan import freight services</Link>
          </div>
        </div>
      </section>
      <section className="mt-12 rounded-2xl bg-blue-50 p-6">
        <h2 className="text-2xl font-bold text-blue-900">Get a Commercial Freight Quote</h2>
        <p className="mt-2 leading-7 text-gray-700">To help us assess your shipment, share the origin and destination, commodity, number and type of packages, gross weight, CBM or dimensions, preferred shipping mode and Incoterm if known. Rates and service scope are confirmed against the actual shipment requirements.</p>
      </section>
\n      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">Goods we commonly ship to {c.short}</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">{c.cargo.map((g) => <li key={g}>{g}</li>)}</ul>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">Documents usually required</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">{c.docs.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Karachi–{c.name} Commercial Freight: FAQs</h2>
        <div className="space-y-3">
          {c.faq.map((f) => (
            <details key={f.q} className="rounded-xl border p-5"><summary className="cursor-pointer font-bold text-blue-900">{f.q}</summary><p className="mt-3 leading-7 text-gray-700">{f.a}</p></details>
          ))}
        </div>
      </section>

      <nav className="mt-10 flex flex-wrap gap-3" aria-label="Related services">
        <Link href="/freight-forwarder-karachi/" className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">Freight Forwarder Karachi</Link>
        <Link href="/customs-clearance-karachi/" className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">Customs Clearance Karachi</Link>
        <Link href="/lcl-shipping/" className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">LCL Shipping</Link>
        <Link href="/air-freight-karachi/" className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">Air Freight Karachi</Link>
      </nav>

      <RouteRateSection destination={c.name} />
    </main>
  );
}
