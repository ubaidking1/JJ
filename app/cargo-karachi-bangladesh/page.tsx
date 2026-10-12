import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Bangladesh Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Bangladesh with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "export shipping Pakistan to Bangladesh",
    "import freight Bangladesh to Pakistan",
    "reliable freight rates Bangladesh",

    "Karachi to Bangladesh shipping",
    "Bangladesh to Karachi freight",
    "Pakistan Bangladesh cargo",
    "sea freight Bangladesh Pakistan",
    "LCL shipping Bangladesh",
    "FCL shipping Bangladesh",
    "Bangladesh import export"
  ],
  alternates: { canonical: "/cargo-karachi-bangladesh/" },
});

export default function CargoKarachiBangladesh() {
  return <CountryRoutePage slug="bangladesh" />;
}
