import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Customs Clearing Agent Karachi | Import & Export | JSI",
  description: "Customs clearance in Karachi for commercial imports and exports with documentation, port coordination and shipment support.",
  alternates: { canonical: "/customs-clearance-karachi/" },
};

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
    related={[{ href: "/import-to-pakistan/", label: "Import to Pakistan" }, { href: "/export-from-pakistan/", label: "Export from Pakistan" }, { href: "/freight-forwarder-karachi/", label: "Freight Forwarder Karachi" }]}
  />;
}
