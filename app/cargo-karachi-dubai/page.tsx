import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to Dubai | Sea & Air Freight by Jilani Shipping International",
  description:
    "Ship your cargo from Karachi to Dubai with Jilani Shipping International. Reliable sea & air freight, customs clearance, and door-to-door delivery services.",
  keywords: [
    "cargo Karachi to Dubai",
    "freight Karachi to Dubai",
    "sea freight Karachi to Dubai",
    "air cargo Karachi to Dubai",
    "door to door cargo Karachi to Dubai",
    "shipping company Karachi to Dubai",
    "JSI cargo services",
  ],
};

export default function CargoKarachiDubaiPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1>Cargo Services from Karachi to Dubai</h1>
        <p>
          Jilani Shipping International (JSI) provides reliable, cost-effective, and fast cargo
          shipping solutions from Karachi to Dubai. Whether you’re an exporter, importer, or
          individual, we handle all types of sea and air freight with professional care.
        </p>

        <h2>Why Choose JSI for Karachi to Dubai Cargo?</h2>
        <ul>
          <li>✅ Weekly LCL (Less than Container Load) and FCL (Full Container Load) shipments</li>
          <li>✅ Door-to-door cargo delivery available</li>
          <li>✅ Customs clearance & documentation handled by our team</li>
          <li>✅ Real-time shipment tracking</li>
          <li>✅ Competitive and transparent pricing</li>
        </ul>

        <h2>Our Cargo Services Include:</h2>
        <ul>
          <li>🟩 <strong>Sea Freight</strong> — affordable solutions for commercial shipments</li>
          <li>🟩 <strong>Air Freight</strong> — fastest delivery for urgent cargo</li>
          <li>🟩 <strong>Customs Brokerage</strong> — import/export documentation support</li>
          <li>🟩 <strong>Warehousing</strong> — safe storage before shipment</li>
          <li>🟩 <strong>Door Delivery</strong> — Dubai, Sharjah, Abu Dhabi & more</li>
        </ul>

        <h2>Estimated Transit Time</h2>
        <p>
          <strong>Sea Freight:</strong> 14–18 days <br />
          <strong>Air Freight:</strong> 1–2 days
        </p>

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
