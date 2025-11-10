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
          <div className="text-sm">© {new Date().getFullYear()} Jilani Shipping International. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
