import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/cargo-karachi-to-saudi-arabia-guide" },
  title: "Karachi to Saudi Shipping | Freight & Cargo Guide",
  description: "Detailed guide on shipping to Jeddah and Riyadh. Learn about customs, rates, and the best cargo services for Saudi Arabia.",
  keywords: ["shipping from Pakistan to Saudi Arabia", "cargo to Riyadh from Karachi", "freight services Pakistan to Jeddah", "Saudi logistics"],
};

export default function BlogSaudi() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-8">Best Cargo Services from Karachi to Saudi Arabia</h1>
        <p>Saudi Arabia is a key market for Pakistani exporters. This guide explores the best shipping practices for the Kingdom.</p>
        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Jeddah vs Riyadh: Which Port to Use?</h2>
        <p>Jeddah is the primary gateway for sea cargo, while Riyadh is the hub for air freight and dry port operations.</p>
      </article>
    </main>
  );
}
