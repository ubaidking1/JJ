import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "PVOC Services Pakistan | Export Compliance | JSI",
  description: "PVOC and Certificate of Conformity support for regulated exports from Pakistan to Kenya, Tanzania, Uganda and more.",
  alternates: { canonical: "/pvoc-service" },
  keywords: ["PVOC service", "Pre-Export Verification of Conformity", "CoC certificate", "shipping compliance", "Kenya PVOC", "Tanzania PVOC", "Uganda PVOC", "conformity assessment"],
};

export default function PvocService() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">PVOC: Pre-Export Verification of Conformity</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            Ensuring your shipments meet international standards and quality requirements before they leave the port. Get your Certificate of Conformity (CoC) seamlessly with Jilani Shipping International.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all">
              Request PVOC Quote
            </Link>
            <a href="https://wa.me/923180155643" className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all">
              WhatsApp Expert
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">What is PVOC?</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Pre-Export Verification of Conformity (PVOC)</strong> is a conformity assessment procedure applied to products in the respective exporting countries to ensure they comply with the applicable destination country standards and technical regulations.
            </p>
            <p>
              The primary objective of PVOC is to ensure that imported products meet the necessary quality, safety, and environmental standards, thereby protecting consumers and the environment in the importing country.
            </p>
            <p>
              Upon successful completion of the PVOC process, a <strong>Certificate of Conformity (CoC)</strong> is issued. This document is mandatory for customs clearance at the destination port.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Why is PVOC Mandatory?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Prevents importation of substandard or dangerous goods.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Protects local consumers from health and safety risks.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Ensures environmental protection in the destination country.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Facilitates faster customs clearance with a valid CoC.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Avoids costly delays, fines, or rejection of goods at entry.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">The PVOC Process with JSI</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Document Review", desc: "We verify your technical data sheets and test reports." },
            { step: "02", title: "Inspection", desc: "Physical inspection of goods to confirm quantity and quality." },
            { step: "03", title: "Testing", desc: "Laboratory testing in accredited facilities if required." },
            { step: "04", title: "CoC Issuance", desc: "Issuance of the Certificate of Conformity for your shipment." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow-lg border border-gray-50 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl font-black text-blue-100 mb-2">{item.step}</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-blue-50 rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Countries Requiring PVOC</h2>
          <p className="text-gray-700 mb-8">
            Many countries across Africa and the Middle East require PVOC for a wide range of products. Jilani Shipping provides expert guidance for:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Kenya", "Tanzania", "Uganda", "Nigeria", "Kuwait", "Saudi Arabia", "Ghana", "Zambia"].map((country) => (
              <span key={country} className="px-4 py-2 bg-white rounded-lg shadow-sm text-blue-800 font-semibold border border-blue-100">
                {country}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500 italic">
            *Product categories vary by country. Contact our experts to verify if your shipment requires PVOC.
          </p>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Ship with Confidence?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Don't let compliance issues delay your business. Partner with Jilani Shipping for hassle-free PVOC and international logistics.
        </p>
        <Link href="/contact" className="inline-block px-10 py-4 bg-blue-700 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200">
          Get a Free Consultation
        </Link>
      </section>
    </main>
  );
}
