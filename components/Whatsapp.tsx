"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "@/lib/track";

export default function WhatsAppButton() {
  const handleClick = () => trackEvent("whatsapp_click", { event_category: "Engagement", event_label: "WhatsApp Click" });
  const handleCall = () => trackEvent("phone_click", { event_category: "Engagement", event_label: "Call Click" });

  return (
    <>
      {/* Mobile Sticky Call Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 z-[60] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex gap-3">
        <a 
          href="tel:+923180155643"
          onClick={handleCall}
          className="flex-1 bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          📞 Call Now
        </a>
        <a 
          href="https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20need%20a%20commercial%20shipment%20rate.%20POL%3A%20___%20POD%3A%20___%20Commodity%3A%20___%20Weight%2FCBM%3A%20___"
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
        href="https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20need%20a%20commercial%20shipment%20rate.%20POL%3A%20___%20POD%3A%20___%20Commodity%3A%20___%20Weight%2FCBM%3A%20___"
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Contact Jilani Shipping on WhatsApp"
        className="hidden lg:flex fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-50 items-center justify-center"
      >
        <FaWhatsapp aria-hidden="true" className="w-10 h-10 text-white" />
      </a>
    </>
  );
}
