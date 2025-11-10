import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worldwide Cargo Shipping | Jilani Shipping International",
  description:
    "Ship your cargo worldwide with Jilani Shipping International. Reliable global freight forwarding, sea & air cargo, and door-to-door delivery from Karachi to any destination.",
  keywords: [
    "worldwide cargo Karachi",
    "global shipping services",
    "international freight forwarding",
    "sea freight worldwide",
    "air cargo services",
    "door to door global shipping",
    "Jilani Shipping International",
    "JSI cargo services",
    "export from Karachi",
    "import logistics Pakistan",
  ],
};

export default function CargoWorldwidePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <section className="prose max-w-none">
        <h1>Worldwide Cargo Services</h1>
        <p>
          Jilani Shipping International (JSI) offers reliable and cost-effective worldwide cargo
          shipping solutions from Karachi to every major destination. Whether it’s sea, air, or
          multimodal transport, we ensure your goods reach safely and on time.
        </p>

        <h2>Why Choose JSI for Worldwide Cargo?</h2>
        <ul>
          <li>✅ Global network of logistics partners</li>
          <li>✅ Sea, air, and door-to-door delivery options</li>
          <li>✅ Professional customs clearance services</li>
          <li>✅ Real-time tracking and customer support</li>
          <li>✅ Competitive and transparent pricing</li>
        </ul>

        <h2>Popular Global Destinations</h2>
        <p>
          - Karachi to Dubai  
          - Karachi to China  
          - Karachi to USA  
          - Karachi to UK  
          - Karachi to Europe  
          - Karachi to Africa  
          - Karachi to Far East & Middle East  
        </p>

        <h2>Our Freight Services</h2>
        <ul>
          <li>🟩 <strong>Sea Freight</strong> — affordable solutions for large shipments</li>
          <li>🟩 <strong>Air Freight</strong> — fast and secure global delivery</li>
          <li>🟩 <strong>Customs Brokerage</strong> — expert documentation & clearance</li>
          <li>🟩 <strong>Warehousing</strong> — secure storage and consolidation</li>
          <li>🟩 <strong>Door-to-Door Service</strong> — complete end-to-end logistics</li>
        </ul>

        <h2>Get a Free Quote</h2>
        <p>
          Ready to ship your cargo anywhere in the world? Contact us today for a quick and
          competitive freight quote.
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
