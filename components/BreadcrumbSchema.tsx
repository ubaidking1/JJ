"use client";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  blog: "Blog", "cargo-karachi-dubai": "Karachi to Dubai Cargo", "freight-forwarder-karachi": "Freight Forwarder Karachi",
  "customs-clearance-karachi": "Customs Clearance Karachi", "china-to-pakistan-shipping-cost": "China to Pakistan Shipping Cost",
};
const pretty = (seg: string) => labels[seg] ?? seg.split("-").map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w.toUpperCase())).join(" ");

export default function BreadcrumbSchema() {
  const path = usePathname() || "/";
  const segs = path.split("/").filter(Boolean);
  if (segs.length === 0) return null;
  let acc = "";
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: "https://jilanishipping.net/" }].concat(
    segs.map((s, i) => {
      acc += `/${s}`;
      return { "@type": "ListItem", position: i + 2, name: pretty(s), item: `https://jilanishipping.net${acc}/` };
    })
  );
  const ld = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}
