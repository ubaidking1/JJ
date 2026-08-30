import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/seafreight/" },
  title: "Sea Freight Services Karachi | Jilani Shipping International",
  description: "Sea freight services in Karachi for FCL, LCL, break-bulk chartering and project cargo across global trade routes.",
  keywords: ["sea freight Karachi", "FCL shipping Pakistan", "LCL cargo Karachi", "break-bulk chartering", "project cargo Pakistan"],
};

export default function Seafreight() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Sea Freight Solutions</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              With our local competency, we stand to be a leading sea freight forwarder in Pakistan. 
              We provide comprehensive global freight forwarding services by sea, specializing in both 
              FCL (Full Container Load) and LCL (Less than Container Load) transports.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">Product and Services</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✅ Global freight forwarding by sea</li>
              <li className="flex items-center gap-2">✅ FCL and LCL transports</li>
              <li className="flex items-center gap-2">✅ Special services (projects, fairs and events)</li>
              <li className="flex items-center gap-2">✅ Rice, Cement, Ethanol & spices forwarding</li>
              <li className="flex items-center gap-2">✅ Break-Bulk chartering vessel</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Specialized Projects</h2>
            <p className="text-gray-600 mb-6">We coordinate and supervise projects from conception till completion.</p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>• Chartering, booking and transportation of heavy goods</li>
              <li>• Supervision until delivery at the job site</li>
              <li>• Execution of “turnkey projects”</li>
              <li>• Preparation of packaging for special components</li>
              <li>• Customs clearance and documentation</li>
              <li>• Survey (insurance and liability)</li>
              <li>• Supervision of loading and unloading</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact/" className="inline-block px-10 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200">
            Request Sea Freight Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
