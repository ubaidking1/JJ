import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Turkey Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Turkey with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "export shipping Pakistan to Turkey",
    "import freight Turkey to Pakistan",
    "reliable freight rates Turkey",

    "Karachi to Turkey shipping",
    "Turkey to Karachi freight",
    "Pakistan Turkey cargo",
    "sea freight Turkey Pakistan",
    "LCL shipping Turkey",
    "FCL shipping Turkey",
    "Turkey import export"
  ],
  alternates: { canonical: "/cargo-karachi-turkey/" },
});

export default function CargoKarachiTurkey() {
  return <CountryRoutePage slug="turkey" />;
}
