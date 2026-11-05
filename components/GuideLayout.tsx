import Link from "next/link";
import ContentSections, { Section } from "@/components/ContentSections";
import FaqBlock from "@/components/FaqBlock";

export default function GuideLayout({
  h1, intro, sections, faq, related, waText,
}: {
  h1: string;
  intro: string;
  sections: Section[];
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
  waText: string;
}) {
  const wa = `https://wa.me/923180155643?text=${encodeURIComponent(waText)}`;
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <article>
        <p className="text-sm text-gray-500">Shipping guide by Jilani Shipping International, Karachi. Updated October 2026.</p>
        <h1 className="mt-2 text-4xl font-black text-blue-900">{h1}</h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">{intro}</p>
        <ContentSections sections={sections} />
        <FaqBlock items={faq} />
        <div className="mt-12 flex flex-wrap gap-4">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-500 px-8 py-3 font-bold text-white hover:bg-green-600">Get a Quote on WhatsApp</a>
          <Link href="/contact/" className="rounded-full bg-blue-700 px-8 py-3 font-bold text-white hover:bg-blue-800">Request a Quote</Link>
        </div>
        <nav className="mt-10" aria-label="Related pages">
          <h2 className="text-xl font-bold text-blue-900">Related pages</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {related.map((r) => (
              <li key={r.href}><Link href={r.href} className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">{r.label}</Link></li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  );
}
