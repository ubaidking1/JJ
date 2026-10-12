import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Malaysia Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Malaysia with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "export shipping Pakistan to Malaysia",
    "import freight Malaysia to Pakistan",
    "reliable freight rates Malaysia",

    "Karachi to Malaysia shipping",
    "Malaysia to Karachi freight",
    "Pakistan Malaysia cargo",
    "sea freight Malaysia Pakistan",
    "LCL shipping Malaysia",
    "FCL shipping Malaysia",
    "Malaysia import export"
  ],
  alternates: { canonical: "/cargo-karachi-malaysia/" },
});

export default function CargoKarachiMalaysia() {
  return <CountryRoutePage slug="malaysia" />;
}
