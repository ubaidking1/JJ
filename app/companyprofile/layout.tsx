import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About Jilani Shipping International | Company Profile" },
  description: "Learn about Jilani Shipping International, our freight forwarding experience, services, trade routes and commitment to dependable import-export support today.",
  keywords: [
    "Jilani Shipping International",
    "shipping company profile Pakistan",
    "freight forwarder company Karachi",
    "logistics company experience",
    "import export company Pakistan",
    "JSI Karachi"
  ],
  alternates: { canonical: "/companyprofile/" },
};

export default function CompanyProfileLayout({ children }: { children: React.ReactNode }) {
  return children;
}
