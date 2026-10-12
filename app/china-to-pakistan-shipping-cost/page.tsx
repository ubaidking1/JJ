import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "China to Pakistan Shipping Cost: Per KG, CBM & 40ft" },
  description: "How much is shipping from China to Pakistan? See what drives sea, air and 20ft/40ft container cost, per-kg and CBM rules, transit times and get a quote.",
  keywords: [
    "China to Pakistan shipping cost",
    "shipping cost from China to Pakistan",
    "China to Pakistan shipping cost per kg",
    "40 ft container shipping cost from China to Pakistan",
    "China to Karachi shipping cost",
    "cheap shipping from China to Pakistan",
    "China Pakistan double clearance shipping",
    "shipping rates China to Pakistan",
    "sea freight China to Pakistan",
    "air cargo China to Pakistan",
  ],
  alternates: { canonical: "/china-to-pakistan-shipping-cost/" },
});

const th = "p-3 border text-left bg-gray-100";
const td = "p-3 border";

export default function ChinaPakistanShippingCost() {
  return <SeoLandingPage
    eyebrow="China to Pakistan Freight Rates"
    title="China to Pakistan Shipping Cost: Sea, Air, 20ft & 40ft Container"
    intro="The cost of shipping from China to Pakistan depends on the origin port, cargo volume (CBM) or weight (kg), container size, Incoterm and season. Below is how freight is priced, so you can estimate your own shipment, then send us your details for a current, itemised quotation to Karachi Port or Port Qasim."
    services={[
      { title: "LCL Shipping by CBM", text: "Best for smaller commercial shipments that do not fill a container. Priced per CBM or per tonne, whichever is greater. Share exact carton sizes for accurate pricing." },
      { title: "FCL 20ft, 40ft & 40HC", text: "Full-container quotations cover ocean freight, origin charges and Karachi destination handling. Cheaper per CBM once cargo volume is high enough." },
      { title: "Air Freight from China", text: "For urgent or high-value goods. Priced per chargeable kg (the greater of actual and volumetric weight)." },
      { title: "Door-to-Door & Double Clearance", text: "Pickup in China, customs at both ends and delivery in Pakistan under one quotation, with clearly stated duty and tax scope." },
    ]}
    process={["Send us the China city or port, supplier Incoterm (EXW / FOB / CIF) and cargo-ready date.", "Share commodity, number of cartons, weight and dimensions or the container size.", "Confirm Karachi Port, Port Qasim or your final delivery address.", "Receive a current itemised quotation: freight, origin, destination, customs and delivery."]}
    extra={
      <>
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-blue-950">How China to Pakistan Shipping Cost Is Calculated</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse border text-sm md:text-base">
              <thead><tr><th className={th}>Service</th><th className={th}>Priced by</th><th className={th}>Typical transit (indicative)</th><th className={th}>Best for</th></tr></thead>
              <tbody>
                <tr><td className={td}>Sea LCL</td><td className={td}>CBM (or per tonne if heavier)</td><td className={td}>About 20 to 35 days port to port</td><td className={td}>Under roughly 15 CBM</td></tr>
                <tr><td className={td}>Sea FCL 20ft / 40ft / 40HC</td><td className={td}>Flat rate per container</td><td className={td}>About 18 to 30 days port to port</td><td className={td}>Large or heavy volumes</td></tr>
                <tr><td className={td}>Air freight</td><td className={td}>Per chargeable kg</td><td className={td}>About 3 to 7 days</td><td className={td}>Urgent, high-value, samples</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">Transit times vary by carrier, port pair and transshipment. Rates move weekly, so we quote on current rates instead of publishing a fixed price.</p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-900">Cost per kg: what to know</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>Air freight uses <strong>chargeable weight</strong>: the greater of actual kg and volumetric kg (L × W × H in cm ÷ 6000).</li>
              <li>Sea LCL is commonly charged on the greater of <strong>1 CBM or 1,000 kg</strong>.</li>
              <li>Sea is almost always cheaper per kg than air; air makes sense when speed or high cargo value outweighs freight cost.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-900">20ft vs 40ft container: capacity guide</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li><strong>20ft:</strong> roughly 28 to 33 CBM, up to about 25 to 28 tonnes.</li>
              <li><strong>40ft:</strong> roughly 58 to 67 CBM, up to about 26 to 28 tonnes.</li>
              <li><strong>40ft High Cube:</strong> roughly 68 to 76 CBM.</li>
              <li>Once you pass about 15 to 20 CBM, compare an FCL quote against LCL.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-blue-950">What Is Included in the Total Cost to Karachi</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2 text-gray-700">
            <li className="rounded-xl border p-4"><strong>Origin charges:</strong> factory or warehouse pickup, export customs, terminal fees in China.</li>
            <li className="rounded-xl border p-4"><strong>Ocean or air freight</strong> plus fuel and seasonal surcharges.</li>
            <li className="rounded-xl border p-4"><strong>Karachi destination charges:</strong> terminal handling, delivery order, port and shipping-line fees.</li>
            <li className="rounded-xl border p-4"><strong>Customs duty and taxes</strong> based on HS code and assessable value, assessed by Pakistan Customs.</li>
            <li className="rounded-xl border p-4"><strong>Clearing agent fee and inland transport</strong> to your warehouse or shop.</li>
            <li className="rounded-xl border p-4"><strong>Optional:</strong> insurance, inspection, warehousing, buyer&apos;s consolidation of several suppliers.</li>
          </ul>
          <p className="mt-4 text-gray-700">The cheapest headline freight price can leave out origin or destination charges. Always ask for the all-in cost to your door, itemised.</p>
        </section>

        <section className="mt-12 rounded-3xl bg-blue-950 p-8 text-white">
          <h2 className="text-2xl font-bold">China to Pakistan Double Clearance (Door-to-Door)</h2>
          <p className="mt-3 text-blue-100">&quot;Double clearance&quot; means customs is handled in both China and Pakistan under one service, so you deal with a single forwarder from supplier to delivery. Ask what is included: freight only, or freight with duty and taxes. We state the scope in writing before booking. Pakistan clearance is subject to valid importer registration and customs rules.</p>
          <a href="https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20want%20a%20China%20to%20Pakistan%20shipping%20quote" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700">Get a China to Pakistan quote on WhatsApp</a>
        </section>
      </>
    }
    faq={[
      { question: "How much does shipping from China to Pakistan cost?", answer: "There is no single fixed price. Cost depends on origin port, sea or air, LCL or FCL, cargo volume and weight, Incoterm, season and local charges. Send your cargo details for a current itemised quotation." },
      { question: "What is the China to Pakistan shipping cost per kg?", answer: "Air freight is charged per chargeable kg, the greater of actual weight and volumetric weight. Sea freight is normally charged per CBM or per container, not per kg. Per-kg figures vary weekly, so we quote on current rates." },
      { question: "How much does a 40ft container from China to Pakistan cost?", answer: "A 40ft container is priced as a flat rate per container and changes with the origin port, carrier and season. Ask for an all-in quote including Karachi destination charges so you can compare like for like." },
      { question: "Which is cheaper from China: LCL or FCL?", answer: "LCL usually suits smaller volumes. As volume grows toward roughly 15 to 20 CBM or more, FCL can become more economical. The break-even point depends on current freight and local charges." },
      { question: "How long does shipping from China to Karachi take?", answer: "Sea freight typically takes about 18 to 35 days port to port depending on the service and transshipment; air freight about 3 to 7 days. Customs clearance and delivery are additional." },
      { question: "Which China ports ship to Karachi?", answer: "Common loading ports include Shanghai, Ningbo, Shenzhen, Guangzhou, Qingdao and Tianjin. The best port depends on your supplier location and the available service." },
    ]}
    related={[{ href: "/import-from-china-to-karachi/", label: "China to Karachi Import" }, { href: "/lcl-shipping/", label: "LCL Shipping" }, { href: "/customs-clearance-karachi/", label: "Customs Clearance Karachi" }, { href: "/buyerconsolidation/", label: "Buyer's Consolidation" }, { href: "/cargo-karachi-china/", label: "Pakistan–China Trade" }]}
  />;
}
