import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to USA | Sea & Air Freight by Jilani Shipping International",
  description:
    "Ship your cargo from Karachi to USA with Jilani Shipping International. Reliable air and sea freight, customs clearance, and door-to-door delivery services from Pakistan to America.",
  keywords: [
    "cargo Karachi to USA",
    "freight Karachi to America",
    "sea freight Karachi to USA",
    "air cargo Karachi to USA",
    "door to door cargo Karachi to USA",
    "shipping company Karachi to USA",
    "JSI cargo services",
  ],
};

export default function CargoKarachiUsaPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <section className="prose max-w-none">
        <h1>Cargo Services from Karachi to USA</h1>
        <p>
          Jilani Shipping International (JSI) provides fast, safe, and cost-effective freight
          services from Karachi to all major U.S. destinations. Whether sea or air freight, we
          ensure your goods arrive on time and in perfect condition.
        </p>

        <h2>Why Choose JSI?</h2>
        <ul>
          <li>✅ Weekly sea & air cargo from Karachi to USA</li>
          <li>✅ Customs clearance & documentation handled by our experts</li>
          <li>✅ Door-to-door delivery available</li>
          <li>✅ Real-time shipment tracking</li>
          <li>✅ Competitive freight rates</li>
        </ul>

        <h2>Major U.S. Destinations</h2>
        <p>
          - Karachi to New York  
          - Karachi to Houston  
          - Karachi to Los Angeles  
          - Karachi to Chicago  
          - Karachi to Miami  
        </p>

        <h2>Our Services Include</h2>
        <ul>
          <li>🟩 Sea Freight (LCL/FCL)</li>
          <li>🟩 Air Freight for urgent shipments</li>
          <li>🟩 Warehousing & Consolidation</li>
          <li>🟩 Customs Brokerage</li>
          <li>🟩 Door-to-Door Cargo</li>
        </ul>

        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Request a Quote
        </a>
      </section>
    </main>
  );
}
