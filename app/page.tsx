"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left">
          <motion.h1 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.8}} 
            className="text-3xl md:text-5xl font-bold leading-tight text-blue-900"
          >
            Jilani Shipping International: Global Logistics & Freight Forwarding
          </motion.h1>
          
          <div className="mt-6 space-y-4">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Jilani Shipping International (JSI) is a premier <strong>international freight forwarding</strong> company providing world-wide one-stop integrated logistics services. 
              As a trusted partner of global carriers like <strong>CMA CGM, MAERSK, MSC, and COSCO</strong>, we ensure your cargo reaches destinations like <strong>Dubai, China, USA, and UK</strong> with the best rates and professional handling.
            </p>
            <p className="text-xs md:text-md text-gray-600 italic max-w-xl mx-auto lg:mx-0">
              "Our final goal is to provide safe and swift logistics service with minimum cost, helping our clients build a competitive advantage in their global supply chain management."
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/companyprofile" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-bold shadow-lg hover:bg-blue-800 transition-all text-center">Company Profile</Link>
            <Link href="/contact" className="px-6 py-3 border-2 border-blue-700 text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-all text-center">Request a Global Quote</Link>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <video
              src="/images/shipping.mp4"
              className="w-full h-auto aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Jilani Shipping Port and Container Operations Video"
            />
          </div>
        </div>
      </section>
    
      <section className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4 font-bold" aria-hidden="true">🚢</div>
          <h2 className="font-bold text-blue-900 text-lg">International Sea Freight</h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">Global forwarding (FCL, LCL, Break-bulk). Specialized <strong>project cargo</strong> & chartering with competitive rates for worldwide shipping routes.</p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4 font-bold" aria-hidden="true">📦</div>
          <h2 className="font-bold text-blue-900 text-lg">Global Buyer’s Consolidation</h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">Optimized consolidation, labelling, and inventory control. We bridge the gap between <strong>international suppliers</strong> and global buyers.</p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4 font-bold" aria-hidden="true">🏢</div>
          <h2 className="font-bold text-blue-900 text-lg">Secure Warehousing</h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">Bonded storage and eco-friendly operations within 5km of Port Qasim. Essential for <strong>supply chain optimization</strong> in Pakistan.</p>
        </div>
        <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4 font-bold" aria-hidden="true">🚛</div>
          <h2 className="font-bold text-blue-900 text-lg">Iran Transit Service</h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">Professional transit solutions from <strong>Karachi Port</strong> and <strong>Gwadar Port</strong> to Iran. Reliable and efficient cargo handling.</p>
        </div>
      </section>
    </main>
  );
}
