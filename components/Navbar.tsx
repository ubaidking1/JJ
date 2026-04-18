'use client';

import Link from 'next/link';
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
          <img 
            src="/logo.png" 
            alt="JSI Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-sm md:text-lg font-bold leading-tight text-blue-900">Jilani Shipping</h1>
            <p className="text-[10px] md:text-xs text-gray-600 font-medium">International Logistics</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 items-center text-sm font-semibold text-gray-700">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <Link href="/companyprofile" className="hover:text-blue-700 transition-colors">Profile</Link>
          <Link href="/seafreight" className="hover:text-blue-700 transition-colors">Sea Freight</Link>
          <Link href="/buyerconsolidation" className="hover:text-blue-700 transition-colors">Consolidation</Link>
          <Link href="/warehouse" className="hover:text-blue-700 transition-colors">Warehouse</Link>
          <Link href="/csr" className="hover:text-blue-700 transition-colors">CSR</Link>
          <Link href="/project" className="hover:text-blue-700 transition-colors">Project</Link>
          <Link href="/iran-transit-service" className="hover:text-blue-700 transition-colors">Iran Transit</Link>
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
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-1 text-gray-800 font-medium">
          <Link href="/" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Home</Link>
          <Link href="/companyprofile" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Company Profile</Link>
          <Link href="/seafreight" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Sea Freight</Link>
          <Link href="/buyerconsolidation" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Buyer’s Consolidation</Link>
          <Link href="/warehouse" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Warehouse</Link>
          <Link href="/csr" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">CSR</Link>
          <Link href="/project" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Project</Link>
          <Link href="/iran-transit-service" onClick={closeMenu} className="p-3 hover:bg-blue-50 rounded-lg">Iran Transit</Link>
          <Link href="/contact" onClick={closeMenu} className="p-3 bg-blue-900 text-white rounded-lg text-center mt-2">Contact Us</Link>
          
          <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-2 text-[10px]">
            <Link href="/cargo-karachi-dubai" onClick={closeMenu} className="p-2 bg-gray-100 rounded text-center">KHI-Dubai</Link>
            <Link href="/cargo-karachi-china" onClick={closeMenu} className="p-2 bg-gray-100 rounded text-center">KHI-China</Link>
            <Link href="/cargo-karachi-usa" onClick={closeMenu} className="p-2 bg-gray-100 rounded text-center">KHI-USA</Link>
            <Link href="/cargo-karachi-uk" onClick={closeMenu} className="p-2 bg-gray-100 rounded text-center">KHI-UK</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
