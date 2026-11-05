import { pageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Air vs Sea Freight in Pakistan: Cost and Transit Guide | JSI" },
  description: "Air or sea freight from Karachi? Compare how each is priced, typical transit times to Dubai, Kuwait, the UK and USA, and when each option makes sense.",
  alternates: { canonical: "/blog/air-vs-sea-freight-pakistan/" },
});

const sections = [
  { title: "How air and sea freight are priced",
    paras: [
      "Air freight is charged per chargeable kilogram. That is the greater of the actual weight and the volumetric weight, which for most airlines is calculated as length x width x height in centimetres divided by 6,000. A light but bulky carton can therefore cost more than its scale weight suggests.",
      "Sea freight is priced differently. LCL (less than container load) is usually charged per CBM, or per tonne if the cargo is heavy, whichever is greater. FCL (full container load) is a flat rate for a whole 20ft or 40ft container, plus origin and destination charges.",
    ] },
  { title: "Indicative transit times from Karachi",
    paras: ["These are typical port-to-port or airport-to-airport ranges. Real schedules depend on the carrier, routing and transshipment, and customs clearance and delivery are additional."],
    table: { head: ["Destination", "Sea freight", "Air freight"], rows: [
      ["Dubai (UAE)", "About 4 to 6 days", "24 to 48 hours"],
      ["Kuwait", "About 12 to 15 days", "1 to 3 days"],
      ["Singapore", "About 10 to 16 days", "1 to 3 days"],
      ["United Kingdom", "About 22 to 32 days", "2 to 5 days"],
      ["United States", "About 28 to 40 days", "3 to 6 days"],
    ] } },
  { title: "When air freight makes sense",
    items: [
      "The cargo is urgent, for example to avoid a stock-out or meet an event or exhibition date.",
      "The goods are high in value compared with their weight, such as electronics, surgical instruments and fashion samples.",
      "The shipment is small, so the difference in cost between air and LCL is limited.",
      "The goods are time-sensitive or cannot sit in transit for weeks.",
    ] },
  { title: "When sea freight makes sense",
    items: [
      "The cargo is heavy or bulky, such as furniture, machinery, building materials or bulk textiles.",
      "You ship regularly and can plan stock weeks ahead.",
      "The volume is large enough to compare FCL against LCL.",
      "Freight is a large share of the product price, so a lower cost per kilogram matters most.",
    ] },
  { title: "Costs people forget to compare",
    paras: ["A headline freight price is not the full cost. Always ask for an itemised quotation that states what is included, and compare like with like (port to port, or door to door)."],
    items: [
      "Origin charges in Karachi: pickup, port or CFS handling and export clearance.",
      "Destination charges: terminal handling, delivery order, customs clearance and inland delivery.",
      "Customs duty and taxes at the destination, based on the HS code and value.",
      "Insurance, and for sea freight, detention or demurrage if containers are held beyond the free days.",
    ] },
  { title: "A practical way to decide",
    steps: [
      "Write down the date the goods must arrive and work backwards, allowing for customs clearance at both ends.",
      "Get the actual weight and the packed dimensions, so you can see the chargeable weight for air and the CBM for sea.",
      "Ask for both air and sea quotations with the same scope and compare the cost per unit of product, not just the freight total.",
      "If part of the order is urgent, consider splitting it: urgent items by air and the balance by sea.",
    ] },
];

const faq = [
  { q: "Is air freight always faster than sea freight?", a: "Air is much faster on the flight itself, usually days instead of weeks. Customs clearance and delivery add time on both modes, so plan the door-to-door timeline rather than just the transit time." },
  { q: "How is volumetric weight calculated?", a: "For most air cargo it is length x width x height in centimetres divided by 6,000, per piece. You are charged on the greater of that figure and the actual weight." },
  { q: "Can I send one order partly by air and partly by sea?", a: "Yes. Many importers and exporters send the urgent part by air and the rest by sea to balance speed and cost. We can quote both from the same cargo list." },
];

export default function BlogAirSea() {
  return (
    <GuideLayout
      h1="Air vs Sea Freight in Pakistan: Cost and Transit Guide"
      intro="Choosing between air and sea freight from Karachi comes down to four things: how fast the cargo must arrive, how heavy or bulky it is, how valuable it is, and what freight costs as a share of the goods. This guide explains how each mode is priced and when each one makes sense."
      sections={sections}
      faq={faq}
      waText="Hello Jilani Shipping, I need air and sea freight quotes from Karachi"
      related={[
        { href: "/air-freight-karachi/", label: "Air Freight Karachi" },
        { href: "/seafreight/", label: "Sea Freight" },
        { href: "/lcl-shipping/", label: "LCL Shipping" },
        { href: "/freight-forwarder-karachi/", label: "Freight Forwarder Karachi" },
        { href: "/shipping-pakistan-to-middle-east/", label: "Shipping to the Middle East" },
      ]}
    />
  );
}
