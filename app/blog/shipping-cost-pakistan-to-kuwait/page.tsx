import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/shipping-cost-pakistan-to-kuwait/" },
  title: "Pakistan to Kuwait Shipping Cost | Freight Guide",
  description: "Calculate your shipping costs to Kuwait. Breakdown of freight charges, customs duties, and door-to-door delivery prices.",
  keywords: ["shipping from Pakistan to Kuwait", "cargo services Karachi to Kuwait", "cheapest cargo to Kuwait", "door to door cargo Kuwait"],
};

export default function BlogKuwait() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-8">Shipping Cost from Pakistan to Kuwait – Full Breakdown</h1>
        <p>Understanding the costs involved in shipping to Kuwait helps in better financial planning for businesses.</p>
        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Freight Rates Breakdown</h2>
        <p>Current sea freight rates to Kuwait vary by season and carrier availability.</p>
      </article>
    </main>
  );
}
