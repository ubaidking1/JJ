import { pageMetadata } from "@/lib/seo";
import RouteRateSection from "@/components/RouteRateSection";
import { hubs } from "@/components/HubLinks";
import { countryBySlug } from "@/lib/countries";
import { Metadata } from "next";
import Link from "next/link";

const hub = hubs["asia-pacific"];

export const metadata: Metadata = pageMetadata({
  title: { absolute: hub.title },
  description: hub.description,
  alternates: { canonical: `/${hub.slug}/` },
});

export default function HubPage() {
  const rows = hub.countrySlugs.map(countryBySlug);
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900">{hub.h1}</h1>
      <p className="text-lg text-gray-700 mt-4">{hub.intro}</p>

      {hub.customPages.length > 0 && (
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {hub.customPages.map((p) => (
            <Link key={p.href} href={p.href} className="rounded-2xl border border-blue-100 bg-blue-50 p-6 hover:bg-blue-100">
              <h2 className="text-xl font-bold text-blue-900">{p.label}</h2>
              <p className="mt-2 text-gray-700">{p.blurb}</p>
            </Link>
          ))}
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Routes at a glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-left">
            <thead className="bg-gray-100">
              <tr><th className="p-3 border">Destination</th><th className="p-3 border">Sea ports</th><th className="p-3 border">Sea transit (indicative)</th><th className="p-3 border">Air transit (indicative)</th></tr>
            </thead>
            <tbody>
              {rows.map((c) => (
                <tr key={c.slug}>
                  <td className="p-3 border font-bold"><Link href={`/cargo-karachi-${c.slug}/`} className="text-blue-800 underline">Karachi to {c.name}</Link></td>
                  <td className="p-3 border">{c.seaPorts}</td>
                  <td className="p-3 border">{c.seaTransit}</td>
                  <td className="p-3 border">{c.airTransit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-gray-600">Transit times depend on carrier, routing and transshipment. Rates are quoted on current market rates.</p>
      </section>

      <nav className="mt-10 flex flex-wrap gap-3" aria-label="Related services">
        <Link href="/freight-forwarder-karachi/" className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">Freight Forwarder Karachi</Link>
        <Link href="/customs-clearance-karachi/" className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">Customs Clearance Karachi</Link>
        <Link href="/lcl-shipping/" className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">LCL Shipping</Link>
        <Link href="/air-freight-karachi/" className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">Air Freight Karachi</Link>
      </nav>

      <RouteRateSection destination={hub.h1.replace("Shipping from Karachi to ", "")} />
    </main>
  );
}
