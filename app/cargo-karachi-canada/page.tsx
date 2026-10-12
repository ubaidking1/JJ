import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Canada Cargo | Sea & Air Freight | JSI" },
  description: "Karachi to Canada shipping via Vancouver, Montreal and Halifax. FCL, LCL and air cargo with documentation support. Get a quote.",
  keywords: [
    "export shipping Pakistan to Canada",
    "import freight Canada to Pakistan",
    "reliable freight rates Canada",

    "Karachi to Canada shipping",
    "Canada to Karachi freight",
    "Pakistan Canada cargo",
    "sea freight Canada Pakistan",
    "LCL shipping Canada",
    "FCL shipping Canada",
    "Canada import export"
  ],
  alternates: { canonical: "/cargo-karachi-canada/" },
});

export default function CargoKarachiCanada() {
  return <CountryRoutePage slug="canada" />;
}
