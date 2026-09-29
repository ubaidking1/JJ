import type { Metadata } from "next";
export function pageMetadata(meta: Metadata): Metadata {
  const canonical = meta.alternates?.canonical;
  const url = typeof canonical === "string" ? new URL(canonical, "https://jilanishipping.net").href : "https://jilanishipping.net/";
  const title = typeof meta.title === "string" ? meta.title : meta.title && "absolute" in meta.title ? meta.title.absolute : undefined;
  return { ...meta,
    keywords: Array.isArray(meta.keywords) ? [...new Map(meta.keywords.map(k => [k.trim().toLowerCase(), k.trim()])).values()] : meta.keywords,
    openGraph: { type: "website", ...meta.openGraph, url, title, description: meta.description || undefined, images: [{ url: "/images/shipping-hero.webp", alt: "Jilani Shipping International freight services" }] },
    twitter: { ...meta.twitter, card: "summary_large_image", title, description: meta.description || undefined, images: ["/images/shipping-hero.webp"] }
  };
}
