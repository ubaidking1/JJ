import Link from "next/link";

export default function Warehouse() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">PROJECT</h1>  
      <p>We coordinate and supervise projects from conception till completion.</p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
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
