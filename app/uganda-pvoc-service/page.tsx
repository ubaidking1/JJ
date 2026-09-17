import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uganda PVoC & CoC Service from Pakistan | JSI",
  description: "Uganda PVoC and Certificate of Conformity coordination for exporters in Pakistan. Get compliance documentation and freight support from JSI.",
  alternates: { canonical: "/uganda-pvoc-service/" },
  keywords: ["Uganda PVoC service Pakistan", "Certificate of Conformity Uganda", "UNBS PVoC Pakistan", "export to Uganda from Pakistan", "Uganda CoC service"],
};

const whatsapp = "https://wa.me/923180155643?text=Hello%20JSI%2C%20I%20need%20Uganda%20PVoC%2FCoC%20support.%20Product%3A%20____%20HS%20Code%3A%20____%20FOB%20Value%3A%20____%20Shipment%20Mode%3A%20Sea%2FAir%20Exporting%20Country%3A%20____";

export default function UgandaPvocService() {
  const faq = [
    ["What is Uganda PVoC?", "Uganda's PVoC programme assesses regulated products before export against applicable Uganda standards. A compliant shipment receives a Certificate of Conformity used for import clearance."],
    ["Does JSI issue the Uganda CoC?", "No. An UNBS-authorised inspection body issues the CoC after applicable assessment. JSI assists with documentation, coordination and freight movement."],
    ["Do all products require PVoC?", "Coverage and exemptions depend on the product and current UNBS rules. Share your product description and HS code so the applicable requirement can be checked before shipment."],
    ["What should I send for an initial review?", "Send the invoice, packing list, product description, HS code, origin, FOB value, available test reports, exporter location and planned shipment date."],
  ];
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "Uganda PVoC and Certificate of Conformity Support", provider: { "@type": "Organization", name: "Jilani Shipping International", url: "https://jilanishipping.net" }, areaServed: ["UG", "PK"], serviceType: "PVoC documentation and shipment coordination" };

  return <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="rounded-3xl bg-gradient-to-br from-yellow-500 via-yellow-600 to-red-700 text-white p-8 md:p-14 shadow-xl">
      <p className="font-semibold text-yellow-50 mb-3">Pakistan exporters → Uganda</p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">Uganda PVoC & Certificate of Conformity Support</h1>
      <p className="mt-5 text-lg text-white/95 max-w-3xl">Get practical support for regulated exports to Uganda: document preparation, authorised inspection coordination, CoC follow-up and freight planning.</p>
      <div className="mt-8 flex flex-wrap gap-4"><a href={whatsapp} className="rounded-full bg-white px-7 py-3 font-bold text-red-800">Get Uganda PVoC Quote on WhatsApp</a><Link href="/pvoc-service/" className="rounded-full border border-white px-7 py-3 font-bold">View All PVoC Services</Link></div>
    </section>

    <section className="grid md:grid-cols-2 gap-10 mt-14">
      <div><h2 className="text-3xl font-bold text-blue-950">Uganda Export Compliance Support</h2><ul className="mt-6 space-y-3 text-gray-700"><li>✓ Product and HS-code information collection</li><li>✓ Invoice, packing list and technical-document checklist</li><li>✓ Coordination with an applicable UNBS-authorised inspection body</li><li>✓ Inspection/testing follow-up where applicable</li><li>✓ CoC documentation follow-up before dispatch</li><li>✓ Freight support to Mombasa/Dar es Salaam corridors or air cargo routing</li></ul></div>
      <div className="rounded-2xl bg-yellow-50 p-7 border border-yellow-100"><h2 className="text-2xl font-bold text-red-900">Information Required</h2><ul className="mt-5 space-y-2 text-gray-700"><li>• Exporter and importer details</li><li>• Commercial/pro forma invoice</li><li>• Packing list and product specifications</li><li>• HS code and origin country</li><li>• Available laboratory test reports</li><li>• Proposed shipment date and transport mode</li></ul><p className="mt-5 text-sm text-gray-600">The authorised inspection body determines the final assessment, inspection, testing and certification requirements.</p></div>
    </section>

    <section className="mt-16"><h2 className="text-3xl font-bold text-blue-950 text-center">Uganda PVoC Process</h2><div className="grid md:grid-cols-4 gap-5 mt-8">{[["1","Send product details"],["2","Requirement check"],["3","Inspection/testing"],["4","CoC and dispatch"]].map(([n,t])=><div key={n} className="rounded-xl border p-6 bg-white shadow-sm"><span className="text-3xl font-black text-yellow-600">{n}</span><h3 className="font-bold mt-3">{t}</h3></div>)}</div></section>

    <section className="mt-16 rounded-3xl bg-blue-950 text-white p-8 text-center"><h2 className="text-3xl font-bold">Need Uganda PVoC Help?</h2><p className="mt-3 text-blue-100">Send product, HS code, FOB value, quantity and shipment date for an initial review.</p><a href={whatsapp} className="inline-block mt-6 rounded-full bg-yellow-500 px-8 py-3 font-bold text-blue-950">WhatsApp +92 318 0155643</a></section>

    <section className="mt-16"><h2 className="text-3xl font-bold text-blue-950">Frequently Asked Questions</h2><div className="mt-6 space-y-4">{faq.map(([q,a])=><article key={q} className="rounded-xl border p-6"><h3 className="font-bold text-lg">{q}</h3><p className="mt-2 text-gray-700">{a}</p></article>)}</div></section>
    <p className="mt-10 text-sm text-gray-500">Official reference: <a className="underline" href="https://unbs.go.ug/" rel="noopener noreferrer" target="_blank">Uganda National Bureau of Standards</a>. Always confirm current requirements before shipping.</p>
  </main>;
}
