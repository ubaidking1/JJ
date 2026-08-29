"use client";
import Link from "next/link";
import Image from "next/image";
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
            International Freight Forwarder & Customs Clearing Agent for Importers & Exporters
          </motion.h1>
          
          <div className="mt-6 space-y-4">
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Jilani Shipping International (JSI) is your <strong>global logistics partner in Pakistan</strong>. We specialize in <strong>customs brokerage, import-export documentation</strong>, and reliable <strong>FCL & LCL shipping</strong> to 100+ worldwide destinations.
            </p>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              With competitive pricing, fast transit times, and expert customs handling, we move commercial shipments safely and on time—from supplier pickup to customs clearance and final delivery.
            </p>
          </div>

          <div className="mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-50 max-w-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Get a Quick Quote</h2>
              <form action="https://formspree.io/f/xpwadvro" method="POST" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="hidden" name="lead_source" value="Homepage Quick Quote" />
                <input name="name" placeholder="Full Name" aria-label="Full Name" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-blue-500" required />
                <input name="email" type="email" placeholder="Email Address" aria-label="Email Address" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-blue-500" required />
                <input name="phone" placeholder="Phone Number" aria-label="Phone Number" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-blue-500" required />
                <select name="service" aria-label="Select Service" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-blue-500">
                  <option>Import from China to Karachi</option>
                  <option>Export from Karachi to China</option>
                  <option>Karachi to Dubai</option>
                  <option>Karachi to Saudi Arabia</option>
                  <option>Karachi to Kuwait</option>
                  <option>Other / International</option>
                </select>
                <input name="pol" placeholder="POL (Port of Loading)" aria-label="Port of Loading" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-blue-500" />
                <input name="pod" placeholder="POD (Port of Discharge)" aria-label="Port of Discharge" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-blue-500" />
                <textarea name="comments" placeholder="Your Message / Comments" aria-label="Your Message or Comments" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-blue-500 sm:col-span-2" rows={3}></textarea>
                <button type="submit" className="sm:col-span-2 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-all shadow-md">
                  Get Rates Now
                </button>
              </form>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">🛡️ Reliable Handling</span>
                <span className="flex items-center gap-1">⚡ Fast Reply</span>
                <span className="flex items-center gap-1">💰 Best Rates</span>
              </div>
            </div>
            {/* Global Reach Stats */}
            <div className="mt-6 flex justify-between max-w-lg px-2">
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-900">100+</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Countries</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-900">50+</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Ports</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-900">24/7</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Global Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/shipping-hero.webp"
              alt="Commercial container shipping operations at port"
              width={1280}
              height={720}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto aspect-video object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/90 to-transparent p-6 pt-16 text-white">
              <p className="font-bold text-lg">Commercial Freight. Clear Rates. Global Reach.</p>
              <p className="text-sm text-blue-100">FCL • LCL • Customs Clearance • Door Delivery</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs font-bold text-blue-900">
            <span className="bg-blue-50 border border-blue-100 rounded-lg px-2 py-3">PIFFA Member</span>
            <span className="bg-blue-50 border border-blue-100 rounded-lg px-2 py-3">KCCI Member</span>
            <span className="bg-blue-50 border border-blue-100 rounded-lg px-2 py-3">Karachi Based</span>
          </div>
        </div>
      </section>

      {/* China Import & Export Routes */}
      <section className="mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700">China–Pakistan Trade</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">Import or Export Commercial Shipments</h2>
          <p className="text-gray-600 mt-4">Choose your shipment direction to get the right FCL, LCL, documentation and customs-clearance support.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/import-from-china-to-karachi" className="p-7 bg-blue-900 text-white rounded-2xl shadow-lg hover:-translate-y-1 transition-transform group">
            <span className="text-sm font-bold text-blue-200">CHINA → PAKISTAN</span>
            <h3 className="text-2xl font-bold mt-2">Sea Freight from China to Karachi</h3>
            <p className="text-blue-100 mt-3 leading-relaxed">FCL and LCL imports with supplier coordination, consolidation, documentation and customs clearance at Karachi Port.</p>
            <span className="inline-block mt-6 font-bold group-hover:translate-x-1 transition-transform">Get Import Rate →</span>
          </Link>
          <Link href="/export-from-karachi-to-china" className="p-7 bg-white border-2 border-blue-200 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform group">
            <span className="text-sm font-bold text-blue-700">PAKISTAN → CHINA</span>
            <h3 className="text-2xl font-bold text-blue-900 mt-2">Export Shipping from Karachi to China</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">Commercial export shipping to major Chinese ports with freight booking, documentation and port handling support.</p>
            <span className="inline-block mt-6 text-blue-700 font-bold group-hover:translate-x-1 transition-transform">Get Export Rate →</span>
          </Link>
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-2 gap-5">
        <Link href="/import-to-pakistan" className="p-6 border-2 border-blue-200 rounded-2xl hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-blue-700">WORLDWIDE → PAKISTAN</span>
          <h2 className="text-2xl font-bold text-blue-900 mt-2">Import Shipping to Karachi</h2>
          <p className="text-gray-600 mt-2">Import commercial shipments from China, UAE, UK, USA, Europe and worldwide suppliers.</p>
        </Link>
        <Link href="/export-from-pakistan" className="p-6 border-2 border-blue-200 rounded-2xl hover:shadow-md transition-shadow">
          <span className="text-sm font-bold text-blue-700">PAKISTAN → WORLDWIDE</span>
          <h2 className="text-2xl font-bold text-blue-900 mt-2">Export Shipping from Karachi</h2>
          <p className="text-gray-600 mt-2">Export commercial shipments from Pakistan through FCL, LCL and air freight.</p>
        </Link>
      </section>

      {/* Partners Section */}
      <section className="mt-20 py-10 border-y border-gray-100 bg-gray-50/50 -mx-4 md:-mx-6 px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Trusted Partners & Carriers</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-blue-900 tracking-tighter italic">MAERSK</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-yellow-600 tracking-widest italic">MSC</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-red-700 tracking-tighter">CMA CGM</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-blue-800 tracking-normal">COSCO</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-green-700 tracking-normal italic">EVERGREEN</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-orange-600 tracking-tighter">HAPAG-LLOYD</span>
          </div>
        </div>
      </section>

      {/* LCL vs FCL Section */}
      <section className="mt-20 p-8 bg-blue-50 rounded-3xl border border-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Choose the Right Shipment Type</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">📦 LCL Shipment</h3>
              <p className="text-sm text-gray-600 mb-4"><strong>Less than Container Load:</strong> Best for smaller cargo that doesn't fill a whole container. You only pay for the space you use.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✅ Most Cost-Effective</li>
                <li>✅ Pay per CBM (Cubic Meter)</li>
                <li>✅ Weekly departures from Karachi</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">🚢 FCL Shipment</h3>
              <p className="text-sm text-gray-600 mb-4"><strong>Full Container Load:</strong> Best for large shipments where you have exclusive use of a 20ft or 40ft container.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✅ Maximum Security</li>
                <li>✅ Faster Transit (No consolidation)</li>
                <li>✅ Best for Bulk Goods</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/lcl-shipping" className="inline-block px-8 py-3 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all">
              Compare LCL Shipping Rates
            </Link>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="mt-20">
        <div className="bg-blue-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Jilani Shipping is Pakistan's Choice?</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Jilani Shipping International (JSI) supports Pakistan’s importers and exporters with dependable freight coordination, clear rate breakdowns and global shipping coverage.
                We don't just move shipments; we help businesses keep their supply chains moving.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Reliable</h3>
                  <p className="text-blue-200 text-sm">Shipment Handling</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">24/7</h3>
                  <p className="text-blue-200 text-sm">Customer Support</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">50+</h3>
                  <p className="text-blue-200 text-sm">Global Ports</p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Clear</h3>
                  <p className="text-blue-200 text-sm">Rate Breakdowns</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 italic">"JSI is the only name you need for global trade."</h3>
              <p className="text-blue-100 mb-6">
                Our strategic partnerships with global carriers and our own bonded warehousing make us the most competitive player in the market.
              </p>
              <Link href="/contact" className="inline-block w-full text-center py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all">
                Partner with Jilani Shipping Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-10">Global Shipping & Logistics Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/freight-forwarder-karachi" className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white mb-4 font-bold group-hover:scale-110 transition-transform" aria-hidden="true">🌐</div>
            <h3 className="font-bold text-blue-900 text-lg">Importer & Exporter Logistics</h3>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">End-to-end supply chain solutions for <strong>international traders</strong>. Expert customs clearance and global freight forwarding.</p>
            <span className="text-blue-700 text-xs font-bold mt-4 inline-block group-hover:translate-x-1 transition-transform">Learn More →</span>
          </Link>
          <Link href="/lcl-shipping" className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 font-bold group-hover:scale-110 transition-transform" aria-hidden="true">📦</div>
            <h3 className="font-bold text-blue-900 text-lg">LCL Shipment Services</h3>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">Save costs with our <strong>LCL shipment</strong> solutions. Share container space for smaller loads with weekly sailings from Karachi to worldwide ports.</p>
            <span className="text-blue-600 text-xs font-bold mt-4 inline-block group-hover:translate-x-1 transition-transform">Learn More →</span>
          </Link>
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4 font-bold" aria-hidden="true">🚢</div>
            <h3 className="font-bold text-blue-900 text-lg">Sea Freight & Customs Clearing</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">Expert <strong>customs clearing agent</strong> services. Global forwarding (FCL, LCL, Break-bulk) with specialized handling for <strong>commercial cargo</strong>.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4 font-bold" aria-hidden="true">📦</div>
            <h3 className="font-bold text-blue-900 text-lg">Global Trade Consolidation</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">Optimized <strong>buyer’s consolidation</strong> and inventory control. Bridging the gap between <strong>international suppliers</strong> and global exporters.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4 font-bold" aria-hidden="true">🏢</div>
            <h3 className="font-bold text-blue-900 text-lg">Secure Warehousing</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">Bonded storage and eco-friendly operations within 5km of Port Qasim. Essential for <strong>supply chain optimization</strong> in Pakistan.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mb-4 font-bold" aria-hidden="true">🚛</div>
            <h3 className="font-bold text-blue-900 text-lg">Iran Transit Service</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">Professional transit solutions from <strong>Karachi Port</strong> and <strong>Gwadar Port</strong> to Iran. Reliable and efficient cargo handling.</p>
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">Commercial Shipping Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-xl p-5">
            <summary className="font-bold text-blue-900 cursor-pointer">What details are required for a freight quote?</summary>
            <p className="text-gray-600 mt-3">Share the commodity, total weight or CBM, package count, POL, POD, Incoterm and cargo-ready date. For FCL, also mention the container size.</p>
          </details>
          <details className="group bg-white border border-gray-200 rounded-xl p-5">
            <summary className="font-bold text-blue-900 cursor-pointer">Do you handle both China imports and exports?</summary>
            <p className="text-gray-600 mt-3">Yes. We arrange China-to-Karachi imports and Karachi-to-China exports through FCL and LCL services, with documentation and customs support.</p>
          </details>
          <details className="group bg-white border border-gray-200 rounded-xl p-5">
            <summary className="font-bold text-blue-900 cursor-pointer">Can you arrange customs clearance in Karachi?</summary>
            <p className="text-gray-600 mt-3">Yes. Customs-clearance support is available for eligible commercial shipments, subject to shipment documents and applicable regulations.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
