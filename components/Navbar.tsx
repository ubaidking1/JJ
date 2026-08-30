'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="shadow-sm border-b bg-white/95 sticky top-0 z-[100]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0" onClick={closeMenu}>
          <Image 
            src="/logo.png" 
            alt="JSI Logo" 
            width={48}
            height={48}
            priority
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-bold leading-tight text-blue-900 block">Jilani Shipping</span>
            <p className="text-[10px] md:text-xs text-gray-600 font-medium">International Logistics</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 items-center text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <Link href="/companyprofile" className="hover:text-blue-700 transition-colors">Profile</Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-700 transition-colors py-2">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110] max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600">
              <Link href="/freight-forwarder-karachi" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold text-blue-900 italic">Freight Forwarding (New)</Link>
              <Link href="/customs-clearance-karachi" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold">Customs Clearance Karachi</Link>
              <Link href="/air-freight-karachi" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold">Air Freight Karachi</Link>
              <Link href="/import-to-pakistan" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold">Import to Pakistan</Link>
              <Link href="/export-from-pakistan" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold">Export from Pakistan</Link>
              <Link href="/seafreight" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Sea Freight</Link>
              <Link href="/lcl-shipping" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold text-blue-800 italic">LCL Shipping (New)</Link>
              <Link href="/buyerconsolidation" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Consolidation</Link>
              <Link href="/pvoc-service" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold text-blue-900 italic">PVOC Service (New)</Link>
              <Link href="/warehouse" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Warehouse</Link>
              <div className="px-4 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Primary Gulf Trade Routes</div>
              <Link href="/cargo-karachi-dubai" className="block px-4 py-2 hover:bg-blue-50 font-bold text-blue-900">Pakistan ↔ Dubai</Link>
              <Link href="/cargo-karachi-saudi" className="block px-4 py-2 hover:bg-blue-50 font-bold text-blue-900">Pakistan ↔ Saudi Arabia</Link>
              <Link href="/cargo-karachi-kuwait" className="block px-4 py-2 hover:bg-blue-50 font-bold text-blue-900">Pakistan ↔ Kuwait</Link>
              <hr className="my-1 border-gray-50" />
              <div className="px-4 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Global Import & Export Routes</div>
              <Link href="/worldwide-cargo" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold text-blue-900 italic">Worldwide Shipping (All Countries)</Link>
              <Link href="/import-from-china-to-karachi" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-semibold">Import: China to Karachi</Link>
              <Link href="/china-to-pakistan-shipping-cost" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-semibold">China to Pakistan Shipping Cost</Link>
              <Link href="/export-from-karachi-to-china" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-semibold">Export: Karachi to China</Link>
              <Link href="/cargo-karachi-uk" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ UK</Link>
              <Link href="/cargo-karachi-usa" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ USA</Link>
              <Link href="/cargo-karachi-canada" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Canada</Link>
              <Link href="/cargo-karachi-australia" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Australia</Link>
              <Link href="/cargo-karachi-italy" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Italy</Link>
              <Link href="/cargo-karachi-france" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ France</Link>
              <Link href="/cargo-karachi-netherlands" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Netherlands</Link>
              <Link href="/cargo-karachi-turkey" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Turkey</Link>
              <Link href="/cargo-karachi-malaysia" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Malaysia</Link>
              <Link href="/cargo-karachi-singapore" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Singapore</Link>
              <Link href="/cargo-karachi-thailand" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Thailand</Link>
              <Link href="/cargo-karachi-bangladesh" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ Bangladesh</Link>
              <Link href="/cargo-karachi-south-africa" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Pakistan ↔ South Africa</Link>
              <Link href="/iran-transit-service" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">Iran Transit Service</Link>
            </div>
          </div>

          <Link href="/csr" className="hover:text-blue-700 transition-colors">CSR</Link>
          <Link href="/project" className="hover:text-blue-700 transition-colors">Project</Link>
          
          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-700 transition-colors py-2">
              Resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute right-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
              <Link href="/track-cargo" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-bold">Track Your Shipment</Link>
              <hr className="my-1 border-gray-50" />
              <div className="px-4 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Expert Guides</div>
              <Link href="/blog/mistakes-marketers-make-with-ai" className="block px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-700 font-bold text-blue-900">AI Marketing Mistakes (New)</Link>
              <Link href="/blog/shipping-from-pakistan-to-uae-guide" className="block px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-700">Pakistan to UAE Guide</Link>
              <Link href="/blog/cargo-karachi-to-saudi-arabia-guide" className="block px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-700">Saudi Arabia Shipping Guide</Link>
              <Link href="/blog/air-vs-sea-freight-pakistan" className="block px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-700">Air vs Sea Freight</Link>
            </div>
          </div>

          <Link href="/contact" className="px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-all">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-blue-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl transition-all duration-300 ease-in-out overflow-y-auto ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col p-4 gap-1 text-gray-800 font-medium">
          <Link href="/" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Home</Link>
          <Link href="/companyprofile" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Company Profile</Link>
          <Link href="/lcl-shipping" onClick={closeMenu} className="p-3 hover:bg-blue-50 font-bold text-blue-800 rounded-lg">LCL Shipping (New)</Link>
          <Link href="/customs-clearance-karachi" onClick={closeMenu} className="p-3 hover:bg-blue-50 font-bold text-blue-900 rounded-lg">Customs Clearance Karachi</Link>
          <Link href="/air-freight-karachi" onClick={closeMenu} className="p-3 hover:bg-blue-50 font-bold text-blue-900 rounded-lg">Air Freight Karachi</Link>
          <Link href="/import-to-pakistan" onClick={closeMenu} className="p-3 hover:bg-blue-50 font-bold text-blue-900 rounded-lg">Import to Pakistan</Link>
          <Link href="/export-from-pakistan" onClick={closeMenu} className="p-3 hover:bg-blue-50 font-bold text-blue-900 rounded-lg">Export from Pakistan</Link>
          <Link href="/seafreight" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Sea Freight</Link>
          <Link href="/buyerconsolidation" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Buyer’s Consolidation</Link>
          <Link href="/pvoc-service" onClick={closeMenu} className="p-3 hover:bg-blue-50 font-bold text-blue-900 rounded-lg">PVOC Service (New)</Link>
          <Link href="/warehouse" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Warehouse</Link>
          <Link href="/csr" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">CSR</Link>
          <Link href="/project" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Project</Link>
          <Link href="/iran-transit-service" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Iran Transit</Link>
          <Link href="/contact" onClick={closeMenu} className="p-3 bg-blue-900 text-white rounded-lg text-center mt-2">Contact Us</Link>
          
          <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-2 text-[10px]">
            <Link href="/cargo-karachi-dubai" onClick={closeMenu} className="p-2 bg-gray-100 rounded text-center">KHI-Dubai</Link>
            <Link href="/import-from-china-to-karachi" onClick={closeMenu} className="p-2 bg-gray-100 rounded text-center">China-KHI Import</Link>
            <Link href="/cargo-karachi-usa" onClick={closeMenu} className="p-2 bg-gray-100 rounded text-center">KHI-USA</Link>
            <Link href="/cargo-karachi-uk" onClick={closeMenu} className="p-2 bg-gray-100 rounded text-center">KHI-UK</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
