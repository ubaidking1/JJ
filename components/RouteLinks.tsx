import Link from "next/link";
import { hubs } from "@/components/HubLinks";
import { countryBySlug } from "@/lib/countries";

const guides = [
  { href: "/blog/shipping-from-pakistan-to-uae-guide/", label: "Shipping from Pakistan to UAE: Complete Guide" },
  { href: "/blog/cargo-karachi-to-saudi-arabia-guide/", label: "Karachi to Saudi Arabia Shipping Guide" },
  { href: "/blog/shipping-cost-pakistan-to-kuwait/", label: "Pakistan to Kuwait Shipping Cost Guide" },
  { href: "/blog/air-vs-sea-freight-pakistan/", label: "Air vs Sea Freight in Pakistan: Cost and Transit Guide" },
  { href: "/blog/best-freight-forwarder-pakistan-guide/", label: "How to Choose a Freight Forwarder in Pakistan" },
];

export default function RouteLinks() {
  return (
    <section className="mt-20 max-w-6xl mx-auto" aria-labelledby="routes-heading">
      <h2 id="routes-heading" className="text-center text-3xl font-bold text-blue-900 mb-8">Shipping Routes from Karachi</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {Object.values(hubs).map((h) => (
          <div key={h.slug} className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-900">
              <Link href={`/${h.slug}/`} className="hover:underline">{h.h1}</Link>
            </h3>
            <ul className="mt-3 space-y-1 text-gray-700">
              {h.customPages.map((p) => (
                <li key={p.href}><Link href={p.href} className="text-blue-800 hover:underline">{p.label}</Link></li>
              ))}
              {h.countrySlugs.map((s) => (
                <li key={s}><Link href={`/cargo-karachi-${s}/`} className="text-blue-800 hover:underline">Karachi to {countryBySlug(s).name}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-gray-700">
        Also shipping to <Link href="/cargo-karachi-usa/" className="text-blue-800 hover:underline">the USA</Link>,{" "}
        <Link href="/cargo-karachi-canada/" className="text-blue-800 hover:underline">Canada</Link> and{" "}
        <Link href="/cargo-karachi-south-africa/" className="text-blue-800 hover:underline">South Africa</Link>.
      </p>

      <h3 className="mt-10 text-center text-2xl font-bold text-blue-900">Shipping Guides</h3>
      <ul className="mt-4 grid gap-2 md:grid-cols-2 text-gray-700">
        {guides.map((g) => (
          <li key={g.href}><Link href={g.href} className="text-blue-800 hover:underline">{g.label}</Link></li>
        ))}
      </ul>
    </section>
  );
}
