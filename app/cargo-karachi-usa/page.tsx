import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to USA Cargo | Sea & Air Freight | JSI" },
  description: "Karachi to USA shipping to New York, Houston, Los Angeles and Savannah. FCL, LCL, air cargo, ISF and customs support. Get a quote.",
  keywords: [
    "export shipping Pakistan to USA",
    "import freight USA to Pakistan",
    "reliable freight rates USA",

    "Karachi to USA shipping",
    "USA to Karachi freight",
    "Pakistan USA cargo",
    "sea freight USA Pakistan",
    "LCL shipping USA",
    "FCL shipping USA",
    "USA import export"
  ],
  alternates: { canonical: "/cargo-karachi-usa/" },
});

export default function CargoKarachiUsa() {
  return <CountryRoutePage slug="usa" />;
}
