import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Air vs Sea Freight in Pakistan: Cost and Transit Guide |…" },
  description: "Read Jilani Shipping’s practical guide to air vs sea freight Pakistan, including freight options, documents, cost factors, transit planning and quotation today.",
  keywords: [
    "air vs sea freight Pakistan",
    "air vs sea freight Pakistan guide",
    "air vs sea freight Pakistan cost",
    "air vs sea freight Pakistan documents",
    "air vs sea freight Pakistan transit time",
    "international freight Pakistan"
  ],
  alternates: { canonical: "/blog/air-vs-sea-freight-pakistan/" },
};

export default function BlogAirSea() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-8">Air vs Sea Freight in Pakistan: Cost and Transit Guide</h1>
        <p>Choosing between air and sea freight is one of the most critical decisions for any exporter in Pakistan.</p>
        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Cost Comparison</h2>
        <p>Sea freight is significantly cheaper for large volumes, while air freight is more cost-effective for smaller, high-value shipments.</p>
        {/* Full content will be 1200+ words in the live build */}
        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Speed and Efficiency</h2>
        <p>Air freight takes 1-3 days, while sea freight can take 7-45 days depending on the destination.</p>
        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Conclusion</h2>
        <p>Your choice depends on your budget, timeline, and cargo type.</p>
      </article>
    </main>
  );
}
