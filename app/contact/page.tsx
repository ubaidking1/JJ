"use client";
import LeadForm from "@/components/LeadForm";
import { trackEvent } from "@/lib/track";

export default function Contact() {
  return (
    <main className="container py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Contact Jilani Shipping for a Freight Quote</h1>
      <p className="text-gray-700 mb-6">Email: info@jilanishipping.net | Phone: 0318-0155643</p>

      <div className="bg-white p-6 rounded shadow"><LeadForm source="Contact Page RFQ" /></div>

      <div className="mt-6 text-center">
        <a
          href="https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20need%20a%20commercial%20shipment%20rate.%20POL%3A%20___%20POD%3A%20___%20Commodity%3A%20___%20Weight%2FCBM%3A%20___"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { lead_source: "Contact Page" })}
          className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
        >
          Send Shipment Details on WhatsApp
        </a>
      </div>
    </main>
  );
}
