import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-gray-700">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="font-semibold">Jilani Shipping International</h4>
                      <p className="text-sm">info.jilanishipping@gmail.com | +92 301 8204493</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div>
                        <h5 className="font-semibold mb-2">Quick Links</h5>
                        <ul className="text-sm space-y-1">
                          <li><Link href="/" className="hover:text-blue-700">Home</Link></li>
                          <li><Link href="/companyprofile" className="hover:text-blue-700">Company Profile</Link></li>
                          <li><Link href="/seafreight" className="hover:text-blue-700">Sea Freight</Link></li>
                          <li><Link href="/buyerconsolidation" className="hover:text-blue-700">Buyer's Consolidation</Link></li>
                          <li><Link href="/warehouse" className="hover:text-blue-700">Warehouse</Link></li>
                          <li><Link href="/csr" className="hover:text-blue-700">CSR</Link></li>
                          <li><Link href="/project" className="hover:text-blue-700">Project</Link></li>
                          <li><Link href="/contact" className="hover:text-blue-700">Contact Us</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Our Services</h5>
                        <ul className="text-sm space-y-1">
                          <li><Link href="/cargo-karachi-chaina" className="hover:text-blue-700">Cargo Karachi to China</Link></li>
                          <li><Link href="/cargo-karachi-dubai" className="hover:text-blue-700">Cargo Karachi to Dubai</Link></li>
                          <li><Link href="/cargo-karachi-uk" className="hover:text-blue-700">Cargo Karachi to UK</Link></li>
                          <li><Link href="/cargo-karachi-usa" className="hover:text-blue-700">Cargo Karachi to USA</Link></li>
                          <li><Link href="/worldwide-cargo" className="hover:text-blue-700">Worldwide Cargo</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-sm">© {new Date().getFullYear()} Jilani Shipping International. All rights reserved.</div>
                  </div>      </div>
    </footer>
  );
}
