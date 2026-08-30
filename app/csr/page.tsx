import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/csr/" },
  title: "CSR & Sustainability | Jilani Shipping International",
  description: "Explore JSI's social responsibility, ethical logistics and GO GREENER environmental sustainability commitments.",
  keywords: ["logistics CSR", "sustainability in shipping", "GO GREENER program", "ethical logistics Pakistan"],
};

export default function CSR() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-6 md:py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Corporate Social Responsibility</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              CSR being the part of Group's vision statement makes it an integral and important part of its day to day activity. The philosophy of JSI’s corporate social responsibility (CSR) is its complete and utter adherence to the code of ethics.
            </p>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-2">GO GREENER Program</h3>
              <p className="text-green-700">
                JSI deeply understands the impact the environment takes under a logistics company and feels responsible for its activities. Our GO GREENER Program is our way to express this responsibility.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Commitment to Future</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We ensure care for the natural environment as well as engage in humanitarian services to reduce pain, obstacles and potential threats for future generations. Our adherence to ethical standards is non-negotiable in every aspect of our global operations.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span>🌱</span>
                <p>Environmental Impact Management</p>
              </li>
              <li className="flex items-start gap-2">
                <span>🤝</span>
                <p>Humanitarian Support Services</p>
              </li>
              <li className="flex items-start gap-2">
                <span>📜</span>
                <p>Strict Code of Ethics Adherence</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
