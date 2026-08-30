import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-gray-700">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="font-semibold">Jilani Shipping International</h4>
                      <p className="text-sm">info@jilanishipping.net | +92 318 0155643</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div>
                        <h5 className="font-semibold mb-2">Quick Links</h5>
                        <ul className="text-sm space-y-1">
                          <li><Link href="/" className="hover:text-blue-700">Home</Link></li>
                          <li><Link href="/companyprofile/" className="hover:text-blue-700">Company Profile</Link></li>
                          <li><Link href="/seafreight/" className="hover:text-blue-700">Sea Freight</Link></li>
                          <li><Link href="/air-freight-karachi/" className="hover:text-blue-700 font-semibold">Air Freight Karachi</Link></li>
                          <li><Link href="/customs-clearance-karachi/" className="hover:text-blue-700 font-semibold">Customs Clearance Karachi</Link></li>
                          <li><Link href="/import-to-pakistan/" className="hover:text-blue-700 font-semibold">Import to Pakistan</Link></li>
                          <li><Link href="/export-from-pakistan/" className="hover:text-blue-700 font-semibold">Export from Pakistan</Link></li>
                          <li><Link href="/buyerconsolidation/" className="hover:text-blue-700">Buyer's Consolidation</Link></li>
                          <li><Link href="/pvoc-service/" className="hover:text-blue-700 font-semibold text-blue-900 italic">PVOC Service (New)</Link></li>
                          <li><Link href="/warehouse/" className="hover:text-blue-700">Warehouse</Link></li>
                          <li><Link href="/csr/" className="hover:text-blue-700">CSR</Link></li>
                          <li><Link href="/project/" className="hover:text-blue-700">Project</Link></li>
                          <li><Link href="/iran-transit-service/" className="hover:text-blue-700">Iran Transit</Link></li>
                          <li><Link href="/track-cargo/" className="hover:text-blue-700 font-semibold text-blue-700">Track Shipment</Link></li>
                          <li><Link href="/contact/" className="hover:text-blue-700">Contact Us</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Our Services</h5>
                        <ul className="text-sm space-y-1">
                          <li><Link href="/import-from-china-to-karachi/" className="hover:text-blue-700 font-semibold">Import: China to Karachi</Link></li>
                          <li><Link href="/china-to-pakistan-shipping-cost/" className="hover:text-blue-700 font-semibold">China to Pakistan Shipping Cost</Link></li>
                          <li><Link href="/export-from-karachi-to-china/" className="hover:text-blue-700 font-semibold">Export: Karachi to China</Link></li>
                          <li><Link href="/cargo-karachi-dubai/" className="hover:text-blue-700">Pakistan–Dubai Import & Export</Link></li>
                          <li><Link href="/cargo-karachi-uk/" className="hover:text-blue-700">Pakistan–UK Import & Export</Link></li>
                          <li><Link href="/cargo-karachi-usa/" className="hover:text-blue-700">Pakistan–USA Import & Export</Link></li>
                          <li><Link href="/cargo-karachi-saudi/" className="hover:text-blue-700">Pakistan–Saudi Import & Export</Link></li>
                          <li><Link href="/cargo-karachi-qatar/" className="hover:text-blue-700">Pakistan–Qatar Import & Export</Link></li>
                          <li><Link href="/cargo-karachi-germany/" className="hover:text-blue-700">Pakistan–Germany Import & Export</Link></li>
                          <li><Link href="/cargo-karachi-canada/" className="hover:text-blue-700">Pakistan–Canada Import & Export</Link></li>
                          <li><Link href="/cargo-karachi-south-africa/" className="hover:text-blue-700">Pakistan–South Africa Trade</Link></li>
                          <li><Link href="/iran-transit-service/" className="hover:text-blue-700">Iran Transit Service</Link></li>
                          <li><Link href="/worldwide-cargo/" className="hover:text-blue-700">Worldwide Commercial Shipping</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-sm">© {new Date().getFullYear()} Jilani Shipping International. All rights reserved.</div>
                  </div>      </div>
    </footer>
  );
}
