import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Netherlands Cargo | Rotterdam Freight | JSI" },
  description: "Ship from Karachi to Rotterdam and onward to the EU. Sea freight about 20-30 days, air 2-5 days. FCL, LCL and customs coordination. Get a quote.",
  keywords: [
    "export shipping Pakistan to Netherlands",
    "import freight Netherlands to Pakistan",
    "reliable freight rates Netherlands",

    "Karachi to Netherlands shipping",
    "Netherlands to Karachi freight",
    "Pakistan Netherlands cargo",
    "sea freight Netherlands Pakistan",
    "LCL shipping Netherlands",
    "FCL shipping Netherlands",
    "Netherlands import export"
  ],
  alternates: { canonical: "/cargo-karachi-netherlands/" },
});

export default function CargoKarachiNetherlands() {
  return <CountryRoutePage slug="netherlands" />;
}
