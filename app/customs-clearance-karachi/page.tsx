import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Customs Clearing Agent in Karachi | Import & Export | JSI" },
  description: "Looking for a clearing agent in Karachi? JSI handles import and export customs clearance at Karachi Port and Port Qasim: documents, duties, release and delivery.",
  keywords: [
    "customs clearing agent Karachi",
    "customs clearance Karachi",
    "import clearance Pakistan",
    "export customs Karachi",
    "customs broker Karachi",
    "port clearance services",
    "clearing agent in Karachi",
    "best clearing agent in Karachi",
    "custom clearing agent Karachi",
    "clearing and forwarding agent Karachi",
    "Karachi port custom clearance"
  ],
  alternates: { canonical: "/customs-clearance-karachi/" },
});

export default function CustomsClearanceKarachi() {
  return <SeoLandingPage
    eyebrow="Customs Clearance Karachi"
    title="Customs Clearing Agent in Karachi for Commercial Shipments"
    intro="Jilani Shipping supports importers and exporters with customs documentation, shipment coordination and clearance assistance at Karachi Port and Port Qasim. Share your cargo documents for a case-specific review and quotation."
    services={[
      { title: "Import Customs Clearance", text: "Coordination for eligible commercial imports, including document review, arrival planning and port handling support." },
      { title: "Export Documentation", text: "Support for commercial invoices, packing lists and shipping documents required before export cargo handover." },
      { title: "Port Coordination", text: "Shipment follow-up with carriers, terminals and relevant service providers to keep the clearance process organized." },
    ]}
    process={["Share BL or AWB, invoice, packing list, HS code and arrival details.", "We review the shipment scope and identify required information.", "Receive a clear service quotation based on the documents provided.", "Our operations team coordinates the approved clearance and delivery scope."]}
    faq={[
      { question: "Which documents are needed for customs clearance in Karachi?", answer: "Requirements vary by commodity and shipment, but commonly include the BL or AWB, commercial invoice, packing list, HS code and relevant import or export documents." },
      { question: "Do you handle both Karachi Port and Port Qasim?", answer: "We can review commercial shipment requirements for Karachi Port and Port Qasim, subject to cargo type, documentation and applicable regulations." },
      { question: "Can you estimate duty and taxes?", answer: "A case-specific estimate requires the correct HS code, assessable value and complete shipment documents. Final assessment remains subject to the relevant authorities." },
    ]}
    extra={
      <>
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-blue-950">Clearing Agent in Karachi: Import Clearance Steps</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2 text-gray-700 list-decimal pl-6">
            <li>Vessel or flight arrival and delivery order (DO) from the shipping line or airline.</li>
            <li>Filing of the Goods Declaration (GD) in WeBOC with HS code and assessable value.</li>
            <li>Assessment, duty and tax payment, and examination if selected.</li>
            <li>Port or terminal charges, release, and transport to your warehouse.</li>
          </ol>
          <p className="mt-4 text-gray-700">Documents normally needed: Bill of Lading or AWB, commercial invoice, packing list, HS code, and importer registration details. Exact requirements depend on the commodity.</p>
        </section>
        <section className="mt-12 rounded-3xl bg-blue-950 p-8 text-white">
          <h2 className="text-2xl font-bold">Need a customs clearing agent in Karachi now?</h2>
          <p className="mt-3 text-blue-100">Send your BL or AWB and invoice on WhatsApp for a clear service quotation.</p>
          <a href="https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20need%20a%20customs%20clearing%20agent%20in%20Karachi" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700">WhatsApp Your Documents</a>
        </section>
      </>
    }
    related={[{ href: "/import-to-pakistan/", label: "Import to Pakistan" }, { href: "/export-from-pakistan/", label: "Export from Pakistan" }, { href: "/freight-forwarder-karachi/", label: "Freight Forwarder Karachi" }, { href: "/china-to-pakistan-shipping-cost/", label: "China to Pakistan Shipping Cost" }]}
  />;
}
