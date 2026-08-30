import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  services: { title: string; text: string }[];
  process: string[];
  faq: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

export default function SeoLandingPage({ eyebrow, title, intro, services, process, faq, related }: Props) {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">{intro}</p>
          <a href="#smart-quote" className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-4 font-bold text-white hover:bg-green-700">Get Commercial Shipping Quote</a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <section>
          <h2 className="text-3xl font-bold text-blue-950">Services for Pakistan Importers & Exporters</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-700">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border p-7 md:p-10">
          <h2 className="text-3xl font-bold text-blue-950">How the Shipment Process Works</h2>
          <ol className="mt-7 grid gap-4 md:grid-cols-2">
            {process.map((step, index) => <li key={step} className="flex gap-4 text-gray-700"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-900 font-bold text-white">{index + 1}</span><span className="pt-1">{step}</span></li>)}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-blue-950">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faq.map((item) => <details key={item.question} className="rounded-xl border p-5"><summary className="cursor-pointer font-bold text-blue-900">{item.question}</summary><p className="mt-3 leading-7 text-gray-700">{item.answer}</p></details>)}
          </div>
        </section>

        <nav className="mt-14 border-t pt-8" aria-label="Related shipping services">
          <h2 className="text-xl font-bold text-blue-950">Related Commercial Shipping Services</h2>
          <div className="mt-4 flex flex-wrap gap-3">{related.map((item) => <Link key={item.href} href={item.href} className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-100">{item.label}</Link>)}</div>
        </nav>
      </div>
    </main>
  );
}
