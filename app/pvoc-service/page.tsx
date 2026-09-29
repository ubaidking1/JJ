import { pageMetadata } from "@/lib/seo";
import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "PVOC Certification Services for Kenya & Uganda | JSI" },
  description: "Get PVOC coordination for exports to Kenya and Uganda, including document review, inspection planning, CoC process guidance and international freight support.",
  keywords: [
    "reliable PVOC coordination rates",
    "authentic CoC support",
    "export PVOC documentation",
    "PVOC certification services",
    "pre-export verification of conformity",
    "PVOC certificate",
    "Certificate of Conformity",
    "Kenya Uganda PVOC",
    "export compliance East Africa"
  ],
  alternates: { canonical: "/pvoc-service/" },
});

export default function PvocService() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">PVOC Certification Support for Kenya and Uganda</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            Ensuring your shipments meet international standards and quality requirements before they leave the port. Get your Certificate of Conformity (CoC) seamlessly with Jilani Shipping International.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all">
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
              Upon successful completion of the PVOC process, a <strong>Certificate of Conformity (CoC)</strong> is issued. The authorised assessment body issues the CoC for compliant goods within the applicable programme. Product coverage and exemptions must be checked before shipment.
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
            { step: "02", title: "Inspection", desc: "Inspection coordination with the authorised assessment body." },
            { step: "03", title: "Testing", desc: "Laboratory testing in accredited facilities if required." },
            { step: "04", title: "CoC Issuance", desc: "CoC follow-up with the authorised body after successful assessment." },
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
            Our destination-specific PVoC coordination covers regulated exports to Kenya and Uganda. Requirements depend on the product and current destination rules:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Kenya", "Uganda"].map((country) => (
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

      <section className="mt-20 grid md:grid-cols-2 gap-6">
        <Link href="/kenya-pvoc-service/" className="block rounded-2xl border border-green-200 bg-green-50 p-8 hover:shadow-lg transition-shadow">
          <p className="text-sm font-bold uppercase tracking-wide text-green-700">Pakistan exporters → Kenya</p>
          <h2 className="mt-2 text-2xl font-bold text-green-950">Kenya PVoC & CoC Support</h2>
          <p className="mt-3 text-gray-700">KEBS-focused document, inspection and shipment coordination with a direct WhatsApp quote.</p>
          <span className="mt-5 inline-block font-bold text-green-800">View Kenya service →</span>
        </Link>
        <Link href="/uganda-pvoc-service/" className="block rounded-2xl border border-yellow-200 bg-yellow-50 p-8 hover:shadow-lg transition-shadow">
          <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">Pakistan exporters → Uganda</p>
          <h2 className="mt-2 text-2xl font-bold text-red-950">Uganda PVoC & CoC Support</h2>
          <p className="mt-3 text-gray-700">UNBS-focused compliance coordination and freight support with a direct WhatsApp quote.</p>
          <span className="mt-5 inline-block font-bold text-red-800">View Uganda service →</span>
        </Link>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Ship with Confidence?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Don't let compliance issues delay your business. Partner with Jilani Shipping for hassle-free PVOC and international logistics.
        </p>
        <Link href="/contact/" className="inline-block px-10 py-4 bg-blue-700 text-white rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200">
          Get a Free Consultation
        </Link>
      </section>
    <section className="mt-12 rounded-2xl bg-blue-50 p-8"><h2 className="text-2xl font-bold text-blue-900">Reliable PVoC Rates and Authentic CoC Support</h2><p className="mt-4 text-gray-700">Share the product, HS code, invoice value, origin and test reports for an itemised quotation. JSI provides coordination; certificates are issued by the authorised conformity assessment body after successful assessment. Verify the issuer and certificate details rather than relying on a “100% original CoC” marketing claim.</p><h2 className="mt-8 text-2xl font-bold text-blue-900">PVoC for Turkey Imports?</h2><p className="mt-4 text-gray-700">Goods imported into Türkiye require a product-specific conformity review. Do not assume Kenya or Uganda PVoC rules apply: Türkiye uses technical regulations and risk-based import controls including TAREKS. For goods exported from Turkey to Uganda or Kenya, check the destination PVoC programme instead.</p><a href="https://www.trade.gov.tr/legislation/product-safety-and-technical-regulation" className="inline-block mt-4 font-semibold text-blue-800">Türkiye Ministry of Trade: product safety requirements</a></section></main>
  );
}
