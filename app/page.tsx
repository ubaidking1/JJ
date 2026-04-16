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
