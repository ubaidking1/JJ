import Link from "next/link";

export type Hub = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  // slugs that live in lib/countries.ts (data-driven table rows)
  countrySlugs: string[];
  // pages with their own custom route page
  customPages: { href: string; label: string; blurb: string }[];
};

export const hubs: Record<string, Hub> = {
  "middle-east": {
    slug: "shipping-pakistan-to-middle-east",
    title: "Shipping from Pakistan to the Middle East | JSI Karachi",
    h1: "Shipping from Karachi to the Middle East",
    description: "Cargo from Karachi to Dubai, Saudi Arabia, Kuwait, Qatar and Turkey by sea and air. Compare ports, transit times and routes, then request a quote.",
    intro: "Karachi has frequent sea and air links to the Gulf, so Middle East shipments are among the most common routes we handle. Choose your destination below to see ports, indicative transit times and required documents.",
    countrySlugs: ["qatar", "turkey"],
    customPages: [
      { href: "/cargo-karachi-dubai/", label: "Karachi to Dubai (UAE)", blurb: "Sea about 4 to 6 days port to port, air 24 to 48 hours." },
      { href: "/cargo-karachi-saudi/", label: "Karachi to Saudi Arabia", blurb: "Sea and air cargo to Saudi ports and airports." },
      { href: "/cargo-karachi-kuwait/", label: "Karachi to Kuwait", blurb: "Commercial cargo to Kuwait by sea and air." },
    ],
  },
  europe: {
    slug: "shipping-pakistan-to-europe",
    title: "Shipping from Pakistan to Europe | JSI Karachi",
    h1: "Shipping from Karachi to Europe and the UK",
    description: "Cargo from Karachi to the UK, Netherlands, Germany, France and Italy by FCL, LCL and air freight. See ports, transit times and import documents.",
    intro: "European imports need the right customs numbers and origin documents, and port choice affects both transit time and inland delivery cost. Pick your destination to see the details for each country.",
    countrySlugs: ["uk", "netherlands", "germany", "france", "italy"],
    customPages: [],
  },
  "asia-pacific": {
    slug: "shipping-pakistan-to-asia-pacific",
    title: "Shipping from Pakistan to Asia-Pacific | JSI Karachi",
    h1: "Shipping from Karachi to China, Southeast Asia and Australia",
    description: "Cargo from Karachi to China, Singapore, Malaysia, Thailand, Bangladesh and Australia by sea and air. Compare ports and transit times, then get a quote.",
    intro: "Asia-Pacific trade covers both imports into Karachi, especially from China, and exports from Pakistan. Choose a country to see ports, indicative transit times and documents.",
    countrySlugs: ["singapore", "malaysia", "thailand", "bangladesh", "australia"],
    customPages: [
      { href: "/cargo-karachi-china/", label: "Karachi to China", blurb: "Import from China and export to China by FCL, LCL and air." },
    ],
  },
};

const slugToHub: Record<string, keyof typeof hubs> = {
  dubai: "middle-east", saudi: "middle-east", kuwait: "middle-east", qatar: "middle-east", turkey: "middle-east",
  uk: "europe", netherlands: "europe", germany: "europe", france: "europe", italy: "europe",
  china: "asia-pacific", singapore: "asia-pacific", malaysia: "asia-pacific", thailand: "asia-pacific", bangladesh: "asia-pacific", australia: "asia-pacific",
};

export default function HubLink({ country }: { country: string }) {
  const key = slugToHub[country];
  if (!key) return null;
  const h = hubs[key];
  return (
    <p className="mt-6 text-gray-700">
      See all routes: <Link href={`/${h.slug}/`} className="font-semibold text-blue-800 underline">{h.h1}</Link>
    </p>
  );
}
