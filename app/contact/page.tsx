"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">Email: info.jilanishipping@gmail.com | Phone: 0301-8204493</p>

      <form action="https://formspree.io/f/xpwadvro" method="POST" className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded shadow">
        <input name="name" placeholder="Full Name" className="p-3 border rounded" required />
        <input name="email" type="email" placeholder="Email" className="p-3 border rounded" required />
        <input name="phone" placeholder="Phone" className="p-3 border rounded" required />
        <select name="service" className="p-3 border rounded">
          <option>Sea Freight</option>
          <option>Air Freight</option>
          <option>Customs Clearance</option>
          <option>Warehousing</option>
        </select>
        <textarea name="message" placeholder="Message" rows={5} className="p-3 border rounded md:col-span-2" />
        <div className="md:col-span-2 flex gap-4">
          <button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded">Send</button>
          <button type="reset" className="px-6 py-2 border rounded">Reset</button>
        </div>
      </form>
    </main>
  );
}
