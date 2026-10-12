import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Qatar Cargo | Sea & Air Freight to Doha | JSI" },
  description: "Ship cargo from Karachi to Qatar by sea (about 7-14 days) or air (1-3 days). FCL, LCL, door-to-door to Doha with customs support. Get a quote.",
  keywords: [
    "export shipping Pakistan to Qatar",
    "import freight Qatar to Pakistan",
    "reliable freight rates Qatar",

    "Karachi to Qatar shipping",
    "Qatar to Karachi freight",
    "Pakistan Qatar cargo",
    "sea freight Qatar Pakistan",
    "LCL shipping Qatar",
    "FCL shipping Qatar",
    "Qatar import export"
  ],
  alternates: { canonical: "/cargo-karachi-qatar/" },
});

export default function CargoKarachiQatar() {
  return <CountryRoutePage slug="qatar" />;
}
