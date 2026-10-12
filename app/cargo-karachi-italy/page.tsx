import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Italy Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Italy with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates now.",
  keywords: [
    "export shipping Pakistan to Italy",
    "import freight Italy to Pakistan",
    "reliable freight rates Italy",

    "Karachi to Italy shipping",
    "Italy to Karachi freight",
    "Pakistan Italy cargo",
    "sea freight Italy Pakistan",
    "LCL shipping Italy",
    "FCL shipping Italy",
    "Italy import export"
  ],
  alternates: { canonical: "/cargo-karachi-italy/" },
});

export default function CargoKarachiItaly() {
  return <CountryRoutePage slug="italy" />;
}
