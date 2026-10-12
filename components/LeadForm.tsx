"use client";
import { FormEvent, useState } from "react";
import { sendLead, trackEvent } from "@/lib/track";

type Props = { source: string; compact?: boolean; services?: string[] };

const DEFAULT_SERVICES = [
  "Import from China to Karachi",
  "Export from Karachi to China",
  "Karachi to Dubai / UAE",
  "Karachi to Saudi / Kuwait / Qatar",
  "Customs Clearance Karachi",
  "Air Freight",
  "Other / International",
];

const WA = "https://wa.me/923180155643?text=Hello%20Jilani%20Shipping%2C%20I%20need%20a%20shipment%20rate.";

export default function LeadForm({ source, compact = false, services = DEFAULT_SERVICES }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fields: Record<string, string> = {};
    new FormData(form).forEach((v, k) => { if (String(v).trim()) fields[k] = String(v); });
    setState("sending");
    try {
      const ok = await sendLead(fields, source);
      if (!ok) throw new Error("failed");
      trackEvent("generate_lead", { lead_source: source, service: fields.service || "" });
      setState("done");
      form.reset();
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-xl font-bold text-green-800">Thank you, your request is received.</p>
        <p className="mt-2 text-gray-700">Our team will contact you shortly. For a faster reply, message us on WhatsApp.</p>
        <a href={WA} onClick={() => trackEvent("whatsapp_click", { lead_source: source + " thank-you" })} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700">Chat on WhatsApp</a>
      </div>
    );
  }

  const field = "p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-blue-500";
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <input name="name" placeholder="Full Name" aria-label="Full Name" autoComplete="name" className={field} required />
      <input name="phone" type="tel" placeholder="Phone / WhatsApp" aria-label="Phone or WhatsApp" autoComplete="tel" className={field} required />
      <select name="service" aria-label="Select Service" className={`${field} sm:col-span-2`}>
        {services.map((s) => <option key={s}>{s}</option>)}
      </select>
      <textarea name="message" placeholder="What are you shipping, from where to where? (optional)" aria-label="Shipment details" rows={compact ? 2 : 3} className={`${field} sm:col-span-2`} />
      <input name="email" type="email" placeholder="Email (optional)" aria-label="Email" autoComplete="email" className={`${field} sm:col-span-2`} />
      <button type="submit" disabled={state === "sending"} className="sm:col-span-2 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-all shadow-md disabled:opacity-60">
        {state === "sending" ? "Sending..." : "Get My Quote"}
      </button>
      {state === "error" && (
        <p role="alert" className="sm:col-span-2 text-sm text-red-700">
          Could not send right now. Please WhatsApp us on <a className="underline font-semibold" href={WA}>+92 318 0155643</a> or email info@jilanishipping.net.
        </p>
      )}
      <p className="sm:col-span-2 text-xs text-gray-500">Only name and phone are required. We reply with an itemised quotation.</p>
    </form>
  );
}
