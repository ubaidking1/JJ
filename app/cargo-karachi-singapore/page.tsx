import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Singapore Cargo | Sea & Air Freight | JSI" },
  description: "Karachi to Singapore cargo by sea (about 10-16 days) or air (1-3 days). FCL, LCL and transshipment to Southeast Asia. Get a quote.",
  keywords: [
    "export shipping Pakistan to Singapore",
    "import freight Singapore to Pakistan",
    "reliable freight rates Singapore",

    "Karachi to Singapore shipping",
    "Singapore to Karachi freight",
    "Pakistan Singapore cargo",
    "sea freight Singapore Pakistan",
    "LCL shipping Singapore",
    "FCL shipping Singapore",
    "Singapore import export"
  ],
  alternates: { canonical: "/cargo-karachi-singapore/" },
});

export default function CargoKarachiSingapore() {
  return <CountryRoutePage slug="singapore" />;
}
