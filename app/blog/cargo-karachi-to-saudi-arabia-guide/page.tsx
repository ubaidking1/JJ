import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Karachi to Saudi Arabia Shipping Guide | JSI" },
  description: "Read Jilani Shipping’s practical guide to Karachi to Saudi Arabia shipping, including freight options, documents, cost factors, transit planning and quotation.",
  keywords: [
    "Karachi to Saudi Arabia shipping",
    "Karachi to Saudi Arabia shipping guide",
    "Karachi to Saudi Arabia shipping cost",
    "Karachi to Saudi Arabia shipping documents",
    "Karachi to Saudi Arabia shipping transit time",
    "international freight Pakistan"
  ],
  alternates: { canonical: "/blog/cargo-karachi-to-saudi-arabia-guide/" },
};

export default function BlogSaudi() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-black text-blue-900 mb-8">Karachi to Saudi Arabia Shipping Guide</h1>
        <p>Saudi Arabia is a key market for Pakistani exporters. This guide explores the best shipping practices for the Kingdom.</p>
        <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Jeddah vs Riyadh: Which Port to Use?</h2>
        <p>Jeddah is the primary gateway for sea cargo, while Riyadh is the hub for air freight and dry port operations.</p>
      </article>
    </main>
  );
}
