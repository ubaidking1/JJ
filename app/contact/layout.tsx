import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Jilani Shipping | Freight Quote Karachi",
  description: "Contact Jilani Shipping for commercial import, export, FCL, LCL, air freight, customs clearance and worldwide shipping quotations.",
  alternates: { canonical: "/contact/" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
