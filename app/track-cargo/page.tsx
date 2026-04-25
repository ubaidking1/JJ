import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Cargo | Jilani Shipping International",
  description: "Track your shipment across global carriers. Quick links to Maersk, MSC, CMA CGM, COSCO, and more.",
  keywords: ["track cargo", "container tracking", "shipment tracking", "Maersk tracking", "MSC tracking", "JSI tracking"],
};

const carriers = [
  { name: "Maersk Line", url: "https://www.maersk.com/tracking/" },
  { name: "MSC (Mediterranean Shipping Company)", url: "https://www.msc.com/track-a-shipment" },
  { name: "CMA CGM", url: "https://www.cma-cgm.com/ebusiness/tracking" },
  { name: "Hapag-Lloyd", url: "https://www.hapag-lloyd.com/en/online-business/track/track-by-container.html" },
  { name: "COSCO Shipping", url: "https://lines.coscoshipping.com/ebusiness/cargoTracking" },
  { name: "Evergreen Line", url: "https://www.shipmentlink.com/servlet/TDB1_CargoTracking.do" },
  { name: "Ocean Network Express (ONE)", url: "https://www.one-line.com/en/standard-page/cargo-tracking" },
  { name: "Yang Ming Marine Transport", url: "https://www.yangming.com/e-service/track_trace/track_trace_cargo_tracking.aspx" },
];

export default function TrackCargo() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto p-6 md:py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">Track Your Cargo</h1>
        <p className="text-gray-600 text-center mb-12">Select your shipping line below to track your container or shipment in real-time.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {carriers.map((carrier) => (
            <a 
              key={carrier.name} 
              href={carrier.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 border rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex justify-between items-center"
            >
              <span className="font-semibold text-gray-800 group-hover:text-blue-700">{carrier.name}</span>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Need Assistance?</h2>
          <p className="text-gray-600 mb-6">If you cannot find your carrier or need help with tracking, our team is ready to assist you.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-all">
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}
