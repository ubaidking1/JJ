import FaqSchema from "@/components/FaqSchema";

export default function FaqBlock({ title = "Frequently Asked Questions", items }: { title?: string; items: { q: string; a: string }[] }) {
  return (
    <section className="mt-12">
      <FaqSchema items={items} />
      <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>
      <div className="space-y-3">
        {items.map((f) => (
          <details key={f.q} className="rounded-xl border p-5">
            <summary className="cursor-pointer font-bold text-blue-900">{f.q}</summary>
            <p className="mt-3 leading-7 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
