import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Germany Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Germany with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "export shipping Pakistan to Germany",
    "import freight Germany to Pakistan",
    "reliable freight rates Germany",

    "Karachi to Germany shipping",
    "Germany to Karachi freight",
    "Pakistan Germany cargo",
    "sea freight Germany Pakistan",
    "LCL shipping Germany",
    "FCL shipping Germany",
    "Germany import export"
  ],
  alternates: { canonical: "/cargo-karachi-germany/" },
});

export default function CargoKarachiGermany() {
  return <CountryRoutePage slug="germany" />;
}
