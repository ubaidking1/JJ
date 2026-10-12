import { pageMetadata } from "@/lib/seo";
import CountryRoutePage from "@/components/CountryRoutePage";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: { absolute: "Karachi to Australia Shipping | FCL & LCL | JSI" },
  description: "Ship commercial cargo between Karachi and Australia with FCL, LCL and air freight options, documentation support, port coordination and tailored freight rates.",
  keywords: [
    "export shipping Pakistan to Australia",
    "import freight Australia to Pakistan",
    "reliable freight rates Australia",

    "Karachi to Australia shipping",
    "Australia to Karachi freight",
    "Pakistan Australia cargo",
    "sea freight Australia Pakistan",
    "LCL shipping Australia",
    "FCL shipping Australia",
    "Australia import export"
  ],
  alternates: { canonical: "/cargo-karachi-australia/" },
});

export default function CargoKarachiAustralia() {
  return <CountryRoutePage slug="australia" />;
}
