import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = {
  title: { absolute: "Air Freight Services in Karachi, Pakistan | JSI" },
  description: "Send urgent commercial shipments with air freight from Karachi. JSI supports airport handling, documentation, customs coordination and global delivery today.",
  keywords: [
    "air freight Karachi",
    "air cargo Pakistan",
    "air freight company Karachi",
    "international air freight Pakistan",
    "airport cargo Karachi",
    "air export Pakistan"
  ],
  alternates: { canonical: "/air-freight-karachi/" },
};

export default function AirFreightKarachi() {
  return <SeoLandingPage
    eyebrow="International Air Freight"
    title="Air Freight Services in Karachi for Imports & Exports"
    intro="Move urgent commercial shipments through international air freight from Karachi. Jilani Shipping coordinates airport-to-airport and approved door delivery requirements for time-sensitive cargo."
    services={[
      { title: "Air Import to Karachi", text: "Coordination from overseas airports to Karachi with supplier follow-up, airway bill support and arrival planning." },
      { title: "Air Export from Karachi", text: "Export booking support for commercial samples, spare parts and time-sensitive goods moving from Pakistan." },
      { title: "Door Delivery Support", text: "Pickup and delivery scope can be reviewed according to origin, destination, commodity and applicable restrictions." },
    ]}
    process={["Share origin, destination, commodity, pieces, weight and dimensions.", "We calculate chargeable weight and review available service options.", "Receive the rate, routing, estimated transit and charges breakdown.", "After approval, we coordinate booking, documents and cargo handover."]}
    faq={[
      { question: "How is an air freight rate calculated?", answer: "Air freight is generally based on chargeable weight, which compares actual weight with volumetric weight. Routing, commodity and handling requirements also affect the quotation." },
      { question: "What details are required for an air freight quote?", answer: "Provide pickup location, airport or destination, commodity, package count, gross weight, dimensions, Incoterm and cargo-ready date." },
      { question: "Do you handle dangerous or restricted goods?", answer: "Such cargo requires advance review of the commodity, safety documentation, airline acceptance and applicable regulations before any service can be confirmed." },
    ]}
    related={[{ href: "/seafreight/", label: "Sea Freight" }, { href: "/import-to-pakistan/", label: "Import to Pakistan" }, { href: "/export-from-pakistan/", label: "Export from Pakistan" }]}
  />;
}
