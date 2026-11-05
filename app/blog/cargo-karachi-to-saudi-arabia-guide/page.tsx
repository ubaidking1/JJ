import { pageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Saudi Arabia Shipping Guide | JSI" },
  description: "Shipping cargo from Karachi to Saudi Arabia: Jeddah, Dammam and Riyadh routes, SASO and SABER conformity, documents, cost factors and how to get a quote.",
  alternates: { canonical: "/blog/cargo-karachi-to-saudi-arabia-guide/" },
});

const sections = [
  { title: "Choosing the right Saudi port or airport",
    paras: ["Saudi Arabia is large, so the right entry point depends on where your buyer is located."],
    items: [
      "Jeddah Islamic Port on the Red Sea is the main sea gateway for Jeddah, Makkah, Madinah and the western region.",
      "King Abdulaziz Port in Dammam serves the Eastern Province, including Dammam, Khobar and Jubail, and cargo for Riyadh often continues inland by road or rail.",
      "Riyadh is the main inland hub. Urgent cargo usually arrives by air, while sea cargo reaches it through a coastal port and moves on.",
    ] },
  { title: "Documents for shipping to Saudi Arabia",
    paras: ["Most shipments need a commercial invoice, a packing list and a bill of lading (sea) or airway bill (air), plus a certificate of origin where required. Saudi customs clearance is handled electronically by a licensed customs broker on behalf of the consignee, so the consignee details on the documents must be accurate and match."],
    items: [
      "Commercial invoice with a clear product description and value.",
      "Packing list showing packages, weights and dimensions.",
      "Bill of lading or airway bill.",
      "Certificate of origin when the buyer or customs requires it.",
    ] },
  { title: "SASO and SABER conformity",
    paras: [
      "Many regulated product categories must be registered and carry a product conformity certificate through the SABER platform, linked to SASO standards, before they can be cleared into Saudi Arabia. Goods that arrive without the required certificate can be held at the port.",
      "Food, medicines and cosmetics are controlled by separate authorities and may need additional approvals. Check the requirements for your product with your buyer before you book, not after the cargo has sailed.",
    ] },
  { title: "What affects the cost",
    items: [
      "Sea or air, and LCL per CBM or FCL per container, or air per chargeable kilogram.",
      "The Saudi port chosen and the inland delivery distance.",
      "Origin charges in Karachi and destination handling in Saudi Arabia.",
      "Customs duty and any conformity or inspection costs for your product.",
      "Season and carrier space, because rates change regularly.",
    ] },
  { title: "Commonly shipped goods",
    paras: ["Pakistani exporters commonly send textiles and garments, home textiles, leather goods, rice and food items, surgical and sports goods, and household products to Saudi Arabia. Each category has its own documentation, so confirm the rules for your product first."] },
  { title: "How to get an accurate quotation",
    steps: [
      "Tell us the commodity, HS code if you have it, packages, weight and dimensions or CBM.",
      "Share the Karachi pickup or port and the Saudi city or port of delivery.",
      "Confirm the Incoterm and the cargo-ready date.",
      "Receive an itemised quotation that shows every charge and what is excluded.",
    ] },
];

const faq = [
  { q: "Which port should I use for cargo to Riyadh?", a: "Sea cargo for Riyadh normally enters through Dammam or Jeddah and continues inland. The best choice depends on the schedule, the carrier and the inland delivery cost, so compare both when you request a quotation." },
  { q: "Do I need SABER for my shipment?", a: "Many regulated product categories do. The requirement depends on the product and its HS code, so check with your buyer or your customs broker before shipping." },
  { q: "How long does shipping from Karachi to Saudi Arabia take?", a: "Sea transit depends on the carrier, the Saudi port and any transshipment, and air freight is much faster. We give the current schedule with each quotation." },
];

export default function BlogSaudi() {
  return (
    <GuideLayout
      h1="Karachi to Saudi Arabia Shipping Guide"
      intro="Saudi Arabia is one of the largest markets for Pakistani exporters. This guide covers which port or airport to use, the documents and conformity rules to prepare, and what shapes the cost, so your cargo is not held up at arrival."
      sections={sections}
      faq={faq}
      waText="Hello Jilani Shipping, I need a Karachi to Saudi Arabia shipping quote"
      related={[
        { href: "/cargo-karachi-saudi/", label: "Karachi to Saudi Arabia Cargo" },
        { href: "/shipping-pakistan-to-middle-east/", label: "Shipping to the Middle East" },
        { href: "/export-from-pakistan/", label: "Export from Pakistan" },
        { href: "/customs-clearance-karachi/", label: "Customs Clearance Karachi" },
      ]}
    />
  );
}
