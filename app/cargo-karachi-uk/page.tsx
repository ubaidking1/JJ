import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to UK Cargo | Sea & Air Freight | JSI" },
  description: "Karachi to UK shipping: sea freight to Felixstowe, Southampton and London Gateway, plus air cargo. FCL, LCL, customs and VAT guidance. Get a quote.",
  keywords: [
    "export shipping Pakistan to UK",
    "import freight UK to Pakistan",
    "reliable freight rates UK",

    "Karachi to United Kingdom shipping",
    "United Kingdom to Karachi freight",
    "Pakistan United Kingdom cargo",
    "sea freight United Kingdom Pakistan",
    "LCL shipping United Kingdom",
    "FCL shipping United Kingdom",
    "United Kingdom import export"
  ],
  alternates: { canonical: "/cargo-karachi-uk/" },
});

export default function CargoKarachiUk() {
  return <CountryRoutePage slug="uk" />;
}
