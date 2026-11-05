import { pageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Pakistan to Kuwait Shipping Cost Guide | JSI" },
  description: "What decides the cost of shipping from Pakistan to Kuwait: sea, air, LCL and FCL pricing, port charges, documents, transit time and how to get a quote.",
  alternates: { canonical: "/blog/shipping-cost-pakistan-to-kuwait/" },
});

const sections = [
  { title: "What decides the cost of shipping to Kuwait",
    paras: ["There is no single price for Pakistan to Kuwait shipping, because the cost depends on the cargo and the service. These are the main factors:"],
    items: [
      "Mode and volume: air is charged per chargeable kilogram, LCL per CBM (or per tonne if heavier) and FCL as a flat rate per container.",
      "Commodity and packing, since dangerous, oversized or regulated goods cost more to handle.",
      "Origin charges in Karachi: pickup, port or CFS handling and export clearance.",
      "Destination charges in Kuwait: terminal handling, delivery order, customs clearance and delivery to the consignee.",
      "Customs duty. Kuwait is part of the GCC customs union, where many goods attract a common external tariff, but rates and exemptions depend on the product, so check your HS code.",
      "Season and carrier space, because freight rates change regularly.",
    ] },
  { title: "Sea freight to Kuwait",
    paras: ["Sea cargo goes to Shuwaikh Port or Shuaiba Port. Transit from Karachi is typically about 12 to 15 days port to port, plus customs clearance and delivery. LCL suits smaller shipments, and FCL becomes worth comparing as your volume grows toward a full container."] },
  { title: "Air freight to Kuwait",
    paras: ["Air cargo goes to Kuwait International Airport and is the best choice for urgent, high-value or time-sensitive goods. Because air freight is charged on chargeable weight, measure your cartons carefully, as bulky light cargo costs more than its scale weight suggests."] },
  { title: "Documents you will need",
    items: [
      "Commercial invoice and packing list.",
      "Bill of lading (sea) or airway bill (air).",
      "Certificate of origin, which buyers in the Gulf often ask to be attested.",
      "Conformity or approval certificates for regulated products.",
      "The consignee's valid import details, which your buyer in Kuwait should confirm.",
    ] },
  { title: "How to get an accurate quotation",
    steps: [
      "Send the commodity, number of packages, weight and dimensions or CBM.",
      "Give the Karachi pickup location or port, and the Kuwait delivery address or port.",
      "Confirm the Incoterm and the cargo-ready date.",
      "Ask for every charge to be itemised, with what is included and excluded, so you can compare quotations fairly.",
    ] },
  { title: "Why we do not publish a fixed price",
    paras: ["Freight rates move often and depend on your cargo, so any fixed price on a web page is likely to be out of date. We quote on current market rates and list every charge before you book."] },
];

const faq = [
  { q: "How much does it cost to ship from Pakistan to Kuwait?", a: "The cost depends on the mode, the volume or weight, the commodity, the ports and the season. Send your cargo details and we will give an itemised quotation on current rates." },
  { q: "How long does sea freight from Karachi to Kuwait take?", a: "Typically about 12 to 15 days port to port to Shuwaikh or Shuaiba, plus customs clearance and delivery." },
  { q: "Can you arrange door-to-door shipping to Kuwait?", a: "Yes. We can quote pickup in Karachi, shipping, destination clearance and delivery in Kuwait as one scope, or port to port if you prefer." },
];

export default function BlogKuwait() {
  return (
    <GuideLayout
      h1="Pakistan to Kuwait Shipping Cost Guide"
      intro="Understanding what drives the cost of shipping to Kuwait helps you compare quotations properly and plan your budget. This guide explains how sea and air freight are priced, which charges to expect and what to prepare before you book."
      sections={sections}
      faq={faq}
      waText="Hello Jilani Shipping, I need a Pakistan to Kuwait shipping quote"
      related={[
        { href: "/cargo-karachi-kuwait/", label: "Karachi to Kuwait Cargo" },
        { href: "/shipping-pakistan-to-middle-east/", label: "Shipping to the Middle East" },
        { href: "/lcl-shipping/", label: "LCL Shipping" },
        { href: "/export-from-pakistan/", label: "Export from Pakistan" },
      ]}
    />
  );
}
