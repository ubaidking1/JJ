import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to France Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and France with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "export shipping Pakistan to France",
    "import freight France to Pakistan",
    "reliable freight rates France",

    "Karachi to France shipping",
    "France to Karachi freight",
    "Pakistan France cargo",
    "sea freight France Pakistan",
    "LCL shipping France",
    "FCL shipping France",
    "France import export"
  ],
  alternates: { canonical: "/cargo-karachi-france/" },
});

export default function CargoKarachiFrance() {
  return <CountryRoutePage slug="france" />;
}
