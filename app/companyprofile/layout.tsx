import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jilani Shipping | Freight Forwarder Karachi",
  description: "Meet Jilani Shipping, a Karachi freight forwarder for commercial import, export, customs, warehousing and logistics.",
  alternates: { canonical: "/companyprofile" },
};

export default function CompanyProfileLayout({ children }: { children: React.ReactNode }) {
  return children;
}
