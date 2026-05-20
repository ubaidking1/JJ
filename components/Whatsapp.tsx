"use client";
import React from "react";
import Image from "next/image";

declare global {
  interface Window {
    gtag: any;
  }
}

export default function WhatsAppButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'contact', {
        'event_category': 'Engagement',
        'event_label': 'WhatsApp Click',
        'value': 1
      });
    }
  };

  return (
    <>
      {/* Mobile Sticky Call Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 z-[60] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex gap-3">
        <a 
          href="tel:+923018204493" 
          className="flex-1 bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          📞 Call Now
        </a>
        <a 
          href="https://wa.me/923018204493" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex-1 bg-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          💬 WhatsApp
        </a>
      </div>

      {/* Desktop WhatsApp Button */}
      <a
        href="https://wa.me/923018204493"
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Contact Jilani Shipping on WhatsApp"
        className="hidden lg:flex fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-50 items-center justify-center"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </a>
    </>
  );
}
