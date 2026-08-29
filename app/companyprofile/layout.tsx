import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jilani Shipping | Freight Forwarder Karachi",
  description: "Learn about Jilani Shipping International, a Karachi freight forwarder providing commercial import, export, customs, warehousing and logistics services.",
  alternates: { canonical: "/companyprofile" },
};

export default function CompanyProfileLayout({ children }: { children: React.ReactNode }) {
  return children;
}
