import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Thailand Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Thailand with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "export shipping Pakistan to Thailand",
    "import freight Thailand to Pakistan",
    "reliable freight rates Thailand",

    "Karachi to Thailand shipping",
    "Thailand to Karachi freight",
    "Pakistan Thailand cargo",
    "sea freight Thailand Pakistan",
    "LCL shipping Thailand",
    "FCL shipping Thailand",
    "Thailand import export"
  ],
  alternates: { canonical: "/cargo-karachi-thailand/" },
});

export default function CargoKarachiThailand() {
  return <CountryRoutePage slug="thailand" />;
}
