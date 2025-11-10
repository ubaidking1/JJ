import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Karachi to UK | Sea & Air Freight by Jilani Shipping International",
  description:
    "Reliable freight forwarding from Karachi to the United Kingdom. Sea, air, and door-to-door cargo delivery with Jilani Shipping International (JSI).",
  keywords: [
    "cargo Karachi to UK",
    "freight Karachi to London",
    "sea freight Karachi to UK",
    "air cargo Karachi to UK",
    "door to door cargo Karachi to UK",
    "shipping company Karachi to UK",
    "JSI cargo services",
  ],
};

export default function CargoKarachiUkPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <section className="prose max-w-none">
        <h1>Cargo Services from Karachi to the United Kingdom</h1>
        <p>
          Jilani Shipping International (JSI) provides reliable cargo shipping from Karachi to
          London, Manchester, Birmingham, and other UK destinations. We handle both air and sea
          freight with complete logistics support.
        </p>

        <h2>Why Choose JSI?</h2>
        <ul>
          <li>✅ Weekly LCL/FCL shipments to the UK</li>
          <li>✅ Air cargo for urgent delivery</li>
          <li>✅ Door-to-door pickup and delivery</li>
          <li>✅ Full customs documentation support</li>
          <li>✅ Real-time tracking and updates</li>
        </ul>

        <h2>UK Destinations We Serve</h2>
        <p>
          - Karachi to London  
          - Karachi to Birmingham  
          - Karachi to Manchester  
          - Karachi to Glasgow  
          - Karachi to Liverpool  
        </p>

        <h2>Our Services</h2>
        <ul>
          <li>🟩 Sea Freight (FCL/LCL)</li>
          <li>🟩 Air Freight</li>
          <li>🟩 Customs Clearance</li>
          <li>🟩 Warehousing</li>
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
