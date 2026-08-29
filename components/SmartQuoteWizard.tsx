"use client";

import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "923180155643";

const routeNames: Record<string, string> = {
  "/cargo-karachi-dubai": "Pakistan ↔ Dubai",
  "/cargo-karachi-saudi": "Pakistan ↔ Saudi Arabia",
  "/cargo-karachi-kuwait": "Pakistan ↔ Kuwait",
  "/cargo-karachi-qatar": "Pakistan ↔ Qatar",
  "/cargo-karachi-china": "Pakistan ↔ China",
  "/import-from-china-to-karachi": "China → Karachi Import",
  "/export-from-karachi-to-china": "Karachi → China Export",
  "/cargo-karachi-uk": "Pakistan ↔ United Kingdom",
  "/cargo-karachi-usa": "Pakistan ↔ United States",
  "/cargo-karachi-canada": "Pakistan ↔ Canada",
  "/cargo-karachi-australia": "Pakistan ↔ Australia",
  "/cargo-karachi-italy": "Pakistan ↔ Italy",
  "/cargo-karachi-france": "Pakistan ↔ France",
  "/cargo-karachi-netherlands": "Pakistan ↔ Netherlands",
  "/cargo-karachi-turkey": "Pakistan ↔ Turkey",
  "/cargo-karachi-malaysia": "Pakistan ↔ Malaysia",
  "/cargo-karachi-singapore": "Pakistan ↔ Singapore",
  "/cargo-karachi-thailand": "Pakistan ↔ Thailand",
  "/cargo-karachi-bangladesh": "Pakistan ↔ Bangladesh",
  "/cargo-karachi-south-africa": "Pakistan ↔ South Africa",
  "/cargo-karachi-germany": "Pakistan ↔ Germany",
  "/import-to-pakistan": "Worldwide → Pakistan Import",
  "/export-from-pakistan": "Pakistan → Worldwide Export",
  "/seafreight": "Sea Freight",
  "/lcl-shipping": "LCL Shipping",
  "/freight-forwarder-karachi": "Freight Forwarding",
  "/buyerconsolidation": "Buyer’s Consolidation",
  "/warehouse": "Warehousing",
  "/pvoc-service": "PVOC Service",
  "/iran-transit-service": "Iran Transit Service",
  "/project": "Project Cargo",
  "/worldwide-cargo": "Worldwide Shipping",
};

const serviceFromPath = (pathname: string) => {
  if (pathname.includes("warehouse")) return "Warehousing";
  if (pathname.includes("buyerconsolidation")) return "Buyer’s Consolidation";
  if (pathname.includes("pvoc")) return "PVOC Service";
  if (pathname.includes("iran-transit")) return "Iran Transit";
  if (pathname.includes("project")) return "Project Cargo";
  return "Commercial Freight";
};

const fieldClass = "w-full rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function SmartQuoteWizard() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [service, setService] = useState(serviceFromPath(pathname));
  const [direction, setDirection] = useState("Import to Pakistan");
  const [mode, setMode] = useState("LCL");
  const route = routeNames[pathname] || "Worldwide Shipping";

  const isFreight = service === "Commercial Freight";
  const isCargo = service === "Personal Cargo & Household Goods";
  const isWarehouse = service === "Warehousing";
  const isConsolidation = service === "Buyer’s Consolidation";
  const isPvoc = service === "PVOC Service";
  const isTransit = service === "Iran Transit";
  const isProject = service === "Project Cargo";

  const heading = useMemo(() => `Get a Quote for ${route}`, [route]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Website Inquiry – Jilani Shipping",
      `Page/Route: ${route}`,
      `Service: ${service}`,
    ];

    data.forEach((value, key) => {
      if (String(value).trim()) lines.push(`${key}: ${value}`);
    });

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  if (pathname === "/" || pathname === "/contact" || pathname.startsWith("/blog/")) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12" aria-labelledby="smart-quote-heading">
      <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-xl">
        <div className="bg-blue-900 px-6 py-7 text-white md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Website Rate Request</p>
          <h2 id="smart-quote-heading" className="mt-2 text-2xl font-bold md:text-3xl">{heading}</h2>
          <p className="mt-2 text-sm text-blue-100">Complete the relevant fields and send the structured inquiry directly on WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 p-6 md:grid-cols-2 md:p-10">
          <label className="text-sm font-semibold text-gray-700">
            Select Service
            <select value={service} onChange={(e) => setService(e.target.value)} className={`${fieldClass} mt-2`}>
              <option>Commercial Freight</option>
              <option>Personal Cargo & Household Goods</option>
              <option>Customs Clearance</option>
              <option>Buyer’s Consolidation</option>
              <option>Warehousing</option>
              <option>PVOC Service</option>
              <option>Iran Transit</option>
              <option>Project Cargo</option>
            </select>
          </label>

          {(isFreight || service === "Customs Clearance") && (
            <label className="text-sm font-semibold text-gray-700">
              Shipment Direction
              <select name="Direction" value={direction} onChange={(e) => setDirection(e.target.value)} className={`${fieldClass} mt-2`}>
                <option>Import to Pakistan</option>
                <option>Export from Pakistan</option>
                <option>Cross Trade</option>
              </select>
            </label>
          )}

          {isFreight && (
            <label className="text-sm font-semibold text-gray-700">
              Shipping Method
              <select name="Shipping Method" value={mode} onChange={(e) => setMode(e.target.value)} className={`${fieldClass} mt-2`}>
                <option>LCL</option><option>FCL 20ft</option><option>FCL 40ft</option><option>FCL 40HC</option><option>Air Freight</option><option>Break-bulk</option><option>Not Sure</option>
              </select>
            </label>
          )}

          {isCargo && <>
            <Input name="Cargo Type" placeholder="Boxes / Household Goods / Excess Baggage" required />
            <Input name="Pickup Address" placeholder="Pickup city or full address" required />
            <Input name="Delivery Address" placeholder="Delivery city or full address" required />
            <Input name="Number of Boxes" placeholder="e.g. 5 boxes" />
          </>}

          {(isFreight || isCargo || service === "Customs Clearance" || isTransit || isProject) && <>
            <Input name="POL" placeholder="Port of Loading (POL)" required={isFreight} />
            <Input name="POD" placeholder="Port of Discharge (POD)" required={isFreight} />
            <Input name="Commodity" placeholder="Commodity / Product" required />
            <Input name="Weight" placeholder="Total weight in KG" required />
            <Input name="CBM or Dimensions" placeholder="CBM or package dimensions" />
            <Input name="Packages" placeholder="Number and type of packages" />
          </>}

          {isFreight && <>
            <label className="text-sm font-semibold text-gray-700">Incoterm<select name="Incoterm" className={`${fieldClass} mt-2`}><option>EXW</option><option>FOB</option><option>CFR</option><option>CIF</option><option>Not Sure</option></select></label>
            <Input name="Cargo Ready Date" type="date" placeholder="Cargo Ready Date" />
          </>}

          {service === "Customs Clearance" && <>
            <Input name="BL or AWB Status" placeholder="BL / AWB status" />
            <Input name="HS Code" placeholder="HS Code (if available)" />
            <Input name="Arrival Date" type="date" placeholder="Arrival Date" />
          </>}

          {isConsolidation && <>
            <Input name="Origin City" placeholder="Origin city/country" required />
            <Input name="Number of Suppliers" placeholder="Number of suppliers" required />
            <Input name="Estimated CBM" placeholder="Estimated total CBM" />
            <Input name="Destination" placeholder="Final destination" required />
          </>}

          {isWarehouse && <>
            <Input name="Storage Location" placeholder="Required city/location" required />
            <Input name="Cargo Type" placeholder="Cargo / commodity type" required />
            <Input name="Pallets or CBM" placeholder="Pallet quantity or CBM" required />
            <Input name="Storage Duration" placeholder="Expected storage duration" required />
          </>}

          {isPvoc && <>
            <Input name="Exporting Country" placeholder="Exporting country" required />
            <Input name="Destination Country" placeholder="Destination country" required />
            <Input name="Product" placeholder="Product description" required />
            <Input name="HS Code" placeholder="HS Code (if available)" />
          </>}

          {isTransit && <>
            <Input name="Pakistan Arrival Port" placeholder="Karachi Port / Port Qasim / Gwadar" required />
            <Input name="Border Destination" placeholder="Iran border / final destination" required />
            <Input name="Container Quantity" placeholder="Containers / trailers required" />
          </>}

          {isProject && <>
            <Input name="Heaviest Piece" placeholder="Heaviest piece weight" />
            <Input name="Largest Dimensions" placeholder="Largest piece dimensions" />
            <Input name="Lifting Requirement" placeholder="Crane / lifting requirement" />
          </>}

          <Input name="Customer Name" placeholder="Your full name" required />
          <Input name="Company" placeholder="Company name" />
          <Input name="Phone" placeholder="Phone / WhatsApp number" required />
          <textarea name="Additional Details" rows={4} placeholder="Additional shipment details" className={`${fieldClass} md:col-span-2`} />

          <button type="submit" className="md:col-span-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-green-700">
            Send Website Inquiry on WhatsApp
          </button>
          <p className="text-xs text-gray-500 md:col-span-2">WhatsApp will open with your completed details. Review the message and press Send.</p>
        </form>
      </div>
    </section>
  );
}

function Input({ name, placeholder, type = "text", required = false }: { name: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <label className="text-sm font-semibold text-gray-700">
      {placeholder}
      <input name={name} type={type} placeholder={type === "date" ? undefined : placeholder} required={required} className={`${fieldClass} mt-2`} />
    </label>
  );
}
