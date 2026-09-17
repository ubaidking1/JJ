import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kenya PVoC & CoC Service from Pakistan | JSI",
  description: "Kenya PVoC and Certificate of Conformity coordination for exporters in Pakistan. Get document, inspection and shipment support from JSI.",
  alternates: { canonical: "/kenya-pvoc-service/" },
  keywords: ["Kenya PVoC service Pakistan", "Certificate of Conformity Kenya", "KEBS PVoC Pakistan", "export to Kenya from Pakistan", "Kenya CoC service"],
};

const whatsapp = "https://wa.me/923180155643?text=Hello%20JSI%2C%20I%20need%20Kenya%20PVoC%2FCoC%20support.%20Product%3A%20____%20HS%20Code%3A%20____%20FOB%20Value%3A%20____%20Shipment%20Mode%3A%20Sea%2FAir%20Exporting%20Country%3A%20____";

export default function KenyaPvocService() {
  const faq = [
    ["What is Kenya PVoC?", "Kenya's Pre-Export Verification of Conformity programme checks regulated goods against applicable Kenya standards before shipment and supports issuance of a Certificate of Conformity by an authorised contractor."],
    ["Who issues the Kenya CoC?", "The Certificate of Conformity is issued by a KEBS-authorised PVoC contractor after the applicable document review, inspection and testing requirements are completed. JSI supports coordination and shipment documentation; JSI does not issue the certificate."],
    ["Which contractor covers exports from Pakistan?", "KEBS currently lists Pakistan in the Indian Subcontinent zone allocated to SGS. Exporters should verify the latest contractor allocation with KEBS before applying."],
    ["What information is needed for a quote?", "Share the product description, HS code, quantity, FOB value, invoice, packing list, test reports if available, exporter location and expected shipment date."],
  ];
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "Kenya PVoC and Certificate of Conformity Support", provider: { "@type": "Organization", name: "Jilani Shipping International", url: "https://jilanishipping.net" }, areaServed: ["KE", "PK"], serviceType: "PVoC documentation and shipment coordination" };

  return <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="rounded-3xl bg-gradient-to-br from-green-900 via-green-800 to-red-800 text-white p-8 md:p-14 shadow-xl">
      <p className="font-semibold text-green-100 mb-3">Pakistan exporters → Kenya</p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">Kenya PVoC & Certificate of Conformity Support</h1>
      <p className="mt-5 text-lg text-white/90 max-w-3xl">Prepare regulated exports for Kenya with document review, authorised inspection coordination, CoC follow-up and freight support from Pakistan.</p>
      <div className="mt-8 flex flex-wrap gap-4"><a href={whatsapp} className="rounded-full bg-white px-7 py-3 font-bold text-green-900">Get Kenya PVoC Quote on WhatsApp</a><Link href="/pvoc-service/" className="rounded-full border border-white px-7 py-3 font-bold">View All PVoC Services</Link></div>
    </section>

    <section className="grid md:grid-cols-2 gap-10 mt-14">
      <div><h2 className="text-3xl font-bold text-blue-950">How JSI Supports Your Kenya Shipment</h2><ul className="mt-6 space-y-3 text-gray-700"><li>✓ Initial product and HS-code information check</li><li>✓ Commercial invoice, packing list and test-report checklist</li><li>✓ Coordination with the applicable authorised PVoC contractor</li><li>✓ Inspection and testing follow-up where required</li><li>✓ CoC documentation follow-up before shipment</li><li>✓ Sea or air freight planning from Pakistan to Kenya</li></ul></div>
      <div className="rounded-2xl bg-green-50 p-7 border border-green-100"><h2 className="text-2xl font-bold text-green-900">Documents to Prepare</h2><ul className="mt-5 space-y-2 text-gray-700"><li>• Request for Certification information</li><li>• Commercial or pro forma invoice</li><li>• Packing list and product specifications</li><li>• HS code and country of origin</li><li>• Valid test reports, where applicable</li><li>• Import permits or licences for restricted goods</li></ul><p className="mt-5 text-sm text-gray-600">Requirements depend on the product and certification route. Final eligibility is determined by the authorised contractor/KEBS.</p></div>
    </section>

    <section className="mt-16"><h2 className="text-3xl font-bold text-blue-950 text-center">Kenya PVoC Process</h2><div className="grid md:grid-cols-4 gap-5 mt-8">{[["1","Share shipment details"],["2","Documents assessed"],["3","Inspection/testing"],["4","CoC and shipment"]].map(([n,t])=><div key={n} className="rounded-xl border p-6 bg-white shadow-sm"><span className="text-3xl font-black text-green-700">{n}</span><h3 className="font-bold mt-3">{t}</h3></div>)}</div></section>

    <section className="mt-16 rounded-3xl bg-blue-950 text-white p-8 text-center"><h2 className="text-3xl font-bold">Exporting to Kenya?</h2><p className="mt-3 text-blue-100">Send product, HS code, FOB value, quantity and shipment date for an initial PVoC review.</p><a href={whatsapp} className="inline-block mt-6 rounded-full bg-green-500 px-8 py-3 font-bold text-white">WhatsApp +92 318 0155643</a></section>

    <section className="mt-16"><h2 className="text-3xl font-bold text-blue-950">Frequently Asked Questions</h2><div className="mt-6 space-y-4">{faq.map(([q,a])=><article key={q} className="rounded-xl border p-6"><h3 className="font-bold text-lg">{q}</h3><p className="mt-2 text-gray-700">{a}</p></article>)}</div></section>
    <p className="mt-10 text-sm text-gray-500">Official reference: <a className="underline" href="https://inspection.kebs.go.ke/pvoc-services/" rel="noopener noreferrer" target="_blank">Kenya Bureau of Standards PVoC overview</a>. Always confirm current requirements before shipping.</p>
  </main>;
}
