import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/iran-transit-service" },
  title: "Iran Transit Service | Jilani Shipping International",
  description: "Professional Iran transit services from Karachi Port and Gwadar Port. Reliable logistics solutions for transit cargo to Iran.",
  keywords: ["Iran transit service", "Karachi to Iran transit", "Gwadar to Iran transit", "transit cargo Iran", "logistics Pakistan to Iran"],
};

export default function IranTransitService() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Iran Transit Service</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Jilani Shipping International (JSI) offers specialized Iran transit services, 
              providing seamless logistics solutions for cargo moving through Pakistan to Iran. 
              We leverage our strategic presence at major Pakistani ports to ensure efficient 
              handling and transportation of your transit goods.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">Our Strategic Gateways</h2>
            <p className="text-gray-700 mb-4">
              We offer comprehensive transit services from Pakistan's primary maritime hubs:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✅ <strong>Karachi Port:</strong> Efficient transit handling from the heart of Pakistan's maritime trade.</li>
              <li className="flex items-center gap-2">✅ <strong>Gwadar Port:</strong> Utilizing the strategic location of Gwadar for direct and faster transit to Iran.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Why Choose JSI for Iran Transit?</h2>
            <p className="text-gray-600 mb-6">Expertise in regional logistics ensures your cargo reaches its destination safely and on time.</p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>• Specialized documentation for transit cargo</li>
              <li>• Customs clearance and border processing</li>
              <li>• Secure cross-border transportation</li>
              <li>• Real-time tracking and updates</li>
              <li>• Competitive transit rates</li>
              <li>• Expertise in Gwadar and Karachi port operations</li>
              <li>• Reliable network of partners in Iran</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-block px-10 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200">
            Get Iran Transit Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
