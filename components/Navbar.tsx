'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-sm border-b bg-white/95 relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
            JSI
          </div>
          <div>
            <h1 className="text-lg font-semibold">Jilani Shipping International</h1>
            <p className="text-xs text-gray-600">Freight Forwarding • Sea • Air • Customs</p>
          </div>
        </div>

        {/* Desktop nav (hide if menuOpen is true) */}
        <nav className={`${menuOpen ? 'hidden' : 'flex'} gap-4 items-center text-sm`}>
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="/companyprofile" className="hover:text-blue-700">Company Profile</Link>
          <Link href="/seafreight" className="hover:text-blue-700">Sea Freight</Link>
          <Link href="/buyerconsolidation" className="hover:text-blue-700">Buyer’s Consolidation</Link>
          <Link href="/warehouse" className="hover:text-blue-700">Warehouse</Link>
          <Link href="/csr" className="hover:text-blue-700">CSR</Link>
          <Link href="/project" className="hover:text-blue-700">Project</Link>
          <Link href="/contact" className="px-3 py-2 rounded bg-blue-900 text-white">Contact</Link>
        </nav>

        {/* Hamburger button (always visible) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu for all screens */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t shadow-sm px-6 py-4 flex flex-col gap-2 transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <Link href="/cargo-karachi-dubai" className="px-3 py-2 rounded bg-blue-600 text-white">Cargo KHI-DXB</Link>
        <Link href="/cargo-karachi-chaina" className="px-3 py-2 rounded bg-blue-600 text-white">Cargo KHI-CHN</Link>
        <Link href="/cargo-karachi-usa" className="px-3 py-2 rounded bg-blue-600 text-white">Cargo KHI-USA</Link>
        <Link href="/cargo-karachi-uk" className="px-3 py-2 rounded bg-blue-600 text-white">Cargo KHI-UK</Link>
        <Link href="/worldwide-cargo" className="px-3 py-2 rounded bg-blue-600 text-white">Cargo Worldwide</Link>
      </div>
    </header>
  );
}
