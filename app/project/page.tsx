import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/project" },
  title: "Project Cargo & Turnkey Solutions | JSI Karachi",
  description: "Project cargo handling in Karachi for heavy goods, turnkey logistics, customs documentation and port coordination.",
  keywords: ["project cargo Karachi", "heavy goods shipping", "turnkey projects Pakistan", "chartering services"],
};

export default function Project() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Specialized Project Cargo</h1>
        
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Jilani Shipping International coordinates and supervises projects from 
              initial conception all the way to final completion. We handle the 
              logistics that others find too complex.
            </p>

            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              <li className="flex gap-3 bg-blue-50 p-4 rounded-lg">
                <span className="text-blue-600 font-bold">01.</span>
                <p className="text-gray-700 font-medium text-sm">Chartering, booking and transportation of heavy goods</p>
              </li>
              <li className="flex gap-3 bg-blue-50 p-4 rounded-lg">
                <span className="text-blue-600 font-bold">02.</span>
                <p className="text-gray-700 font-medium text-sm">Supervision until delivery at the job site</p>
              </li>
              <li className="flex gap-3 bg-blue-50 p-4 rounded-lg">
                <span className="text-blue-600 font-bold">03.</span>
                <p className="text-gray-700 font-medium text-sm">Execution of “turnkey projects”</p>
              </li>
              <li className="flex gap-3 bg-blue-50 p-4 rounded-lg">
                <span className="text-blue-600 font-bold">04.</span>
                <p className="text-gray-700 font-medium text-sm">Customs clearance and documentation</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-blue-900 text-white p-10 rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-4">Have a complex project?</h3>
          <p className="text-blue-100 mb-8">We have the expertise to manage your most challenging logistics needs.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            Contact Project Team
          </Link>
        </div>
      </div>
    </main>
  );
}
