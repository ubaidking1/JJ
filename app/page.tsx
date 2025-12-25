"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="container py-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl font-bold">
            Jilani Shipping International
          </motion.h1>
          <p className="mt-4 text-gray-700 max-w-xl leading-relaxed">
            Freight Forwarding & Logistics — With 25+ years of excellence, JSI offers end-to-end sea, air and land logistics solutions. Branches in Pakistan, China and UAE ensure smooth global movement of goods.
          </p>

          <div className="mt-6 flex gap-4">
            <Link href="/companyprofile" className="px-5 py-3 bg-blue-700 text-white rounded">Company Profile</Link>
            <Link href="/contact" className="px-5 py-3 border border-blue-700 text-blue-700 rounded">Contact</Link>
          </div>
        </div>
      <div>
  <video
    src="/images/shipping.mp4"
    className="rounded-xl shadow-lg w-full"
    autoPlay
    loop
    muted
    playsInline
    aria-label="Port Shipping Video"
  />
</div>
</section>
    
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded">
          <h4 className="font-semibold">Sea Freight</h4>
          <p className="text-sm text-gray-600 mt-2">Global forwarding (FCL, LCL, Break-bulk). Project cargo & chartering.</p>
        </div>
        <div className="p-6 border rounded">
          <h4 className="font-semibold">Buyer’s Consolidation</h4>
          <p className="text-sm text-gray-600 mt-2">Optimized consolidation, labelling, local delivery and inventory control.</p>
        </div>
        <div className="p-6 border rounded">
          <h4 className="font-semibold">Warehousing</h4>
          <p className="text-sm text-gray-600 mt-2">Bonded storage, pallet positions and eco-friendly operations.</p>
        </div>
      </section>
    </main>
  );
}
{(
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

        <h2>Popular Routes from Karachi to Dubai</h2>
        <p>
          - Karachi Port to Jebel Ali Port <br />
          - Karachi Airport to Dubai International Airport <br />
          - Door-to-door service between Karachi & UAE cities
        </p>

        <h2>Estimated Transit Time</h2>
        <p>
          <strong>Sea Freight:</strong> 4–6 days <br />
          <strong>Air Freight:</strong> 1–2 days
        </p>

        <h2>Get a Free Quote</h2>
        <p>
          Ready to ship your cargo from Karachi to Dubai? Contact us today for a quick and
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
{(
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="prose max-w-none">
        <h1>Cargo Services from Karachi to Chaina</h1>
        <p>
          Jilani Shipping International (JSI) provides reliable, cost-effective, and fast cargo
          shipping solutions from Karachi to China. Whether you’re an exporter, importer, or
          individual, we handle all types of sea and air freight with professional care.
        </p>

        <h2>Why Choose JSI for Karachi to China Cargo?</h2>
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

        <h2>Popular Routes from Karachi to Dubai</h2>
        <p>
          - Karachi Port to Jebel Ali Port <br />
          - Karachi Airport to Dubai International Airport <br />
          - Door-to-door service between Karachi & UAE cities
        </p>

        <h2>Estimated Transit Time</h2>
        <p>
          <strong>Sea Freight:</strong> 4–6 days <br />
          <strong>Air Freight:</strong> 1–2 days
        </p>

        <h2>Get a Free Quote</h2>
        <p>
          Ready to ship your cargo from Karachi to Dubai? Contact us today for a quick and
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
