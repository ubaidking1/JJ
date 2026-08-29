"use client";
import Link from "next/link";

export default function Contact() {
  const handleSubmit = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        'event_category': 'Contact Form',
        'event_label': 'Lead Generated'
      });
    }
  };

  return (
    <main className="container py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">Email: info@jilanishipping.net | Phone: 0318-0155643</p>

      <form 
        action="https://formspree.io/f/xpwadvro" 
        method="POST" 
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded shadow"
      >
        <input type="hidden" name="lead_source" value="Contact Page RFQ" />
        <input name="name" placeholder="Full Name" className="p-3 border rounded" required />
        <input name="email" type="email" placeholder="Email" className="p-3 border rounded" required />
        <input name="phone" placeholder="Phone" className="p-3 border rounded" required />
        <select name="service" className="p-3 border rounded">
          <option>Import from China to Karachi</option>
          <option>Export from Karachi to China</option>
          <option>Sea Freight</option>
          <option>Air Freight</option>
          <option>Customs Clearance</option>
          <option>Warehousing</option>
        </select>
        <input name="commodity" placeholder="Commodity / Product" className="p-3 border rounded" />
        <input name="weight" placeholder="Weight / CBM / Container Type" className="p-3 border rounded" />
        <input name="pol" placeholder="POL (Port of Loading)" className="p-3 border rounded" />
        <input name="pod" placeholder="POD (Port of Discharge)" className="p-3 border rounded" />
        <input name="cargoReadyDate" type="date" aria-label="Cargo Ready Date" className="p-3 border rounded" />
        <textarea name="message" placeholder="Additional shipment details" rows={5} className="p-3 border rounded md:col-span-2" />
        <div className="md:col-span-2 flex gap-4">
          <button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded">Send</button>
          <button type="reset" className="px-6 py-2 border rounded">Reset</button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <a
          href="https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20need%20a%20commercial%20shipment%20rate.%20POL%3A%20___%20POD%3A%20___%20Commodity%3A%20___%20Weight%2FCBM%3A%20___"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
        >
          Send Shipment Details on WhatsApp
        </a>
      </div>
    </main>
  );
}
