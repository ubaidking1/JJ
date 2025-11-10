import Link from "next/link"; 
export default function Warehouse() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Warehouse</h1>

      <p className="text-gray-700">
        Buyer’s Consolidation is one of the strongest area of JSI services.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Services and Features</h2>
      <ol className="list-decimal list-inside text-gray-700">
        <li>Unload</li>
        <li>Order message</li>
        <li>Put to stock</li>
        <li>Receive</li>
        <li>Inventory</li>
        <li>Software update</li>
        <li>Unpack</li>
        <li>Move to software updation area</li>
        <li>Sort</li>
        <li>Move to pick and pack station</li>
        <li>Pick from all zone</li>
        <li>Repack</li>
        <li>Move to repacking area</li>
        <li>Pick packaging material</li>
        <li>Pick goods</li>
        <li>Pack</li>
        <li>Load the truck</li>
        <li>Move to shipping area</li>
      </ol>

      <h3 className="mt-6">Warehouse operations (details)</h3>
      <p className="text-gray-700">
        This section presents the processes that take place in the current facility of JSI. Most of the time, goods are placed in the inventory before being redirected to the particular operation...
      </p>

      <h3 className="mt-6">Pallets & Storage</h3>
      <p className="text-gray-700">
        Most of the goods are stored and transported on the standard EU pallets with dimensions of 80cm x 120cm, however, due to the collaboration with Asian suppliers, some cargo is moved with a help of sea pallets, which dimensions may vary from 100cm x 100cm to 120cm x 120cm.
      </p>
    </main>
  );
}
