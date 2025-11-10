import Link from "next/link";
export default function Seafreight() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Sea Freight</h1>

      <p className="mb-4">
        With our local competency, we stand to be a leading sea freight forwarder in Pakistan.
      </p>

      <h2 className="text-xl font-semibold mt-4">Product and Services</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Global freight forwarding by sea</li>
        <li>FCL and LCL transports</li>
        <li>Special services (projects, fairs and events)</li>
        <li>Commodities being forwarded (Rice, Cement, Ethanol & spices)</li>
        <li>Break-Bulk chartering vessel</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Projects</h2>
      <p>We coordinate and supervise projects from conception till completion.</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Chartering, booking and transportation of heavy goods</li>
        <li>Supervision until delivery at the job site</li>
        <li>Execution of “turnkey projects”</li>
        <li>Preparation of packaging for special components</li>
        <li>Customs clearance and documentation</li>
        <li>Survey (insurance and liability)</li>
        <li>Supervision of loading and unloading as per requirements</li>
      </ul>
    </main>
  );
}
