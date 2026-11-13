import type { Metadata } from "next";

const SITE_URL = "https://jilanishipping.net";
const DEFAULT_SOCIAL_IMAGE = "/images/shipping-hero.webp";

export function pageMetadata(meta: Metadata): Metadata {
  const canonical = meta.alternates?.canonical;
  const canonicalUrl =
    typeof canonical === "string"
      ? new URL(canonical, SITE_URL).href
      : SITE_URL + "/";

  const title =
    typeof meta.title === "string"
      ? meta.title
      : meta.title && "absolute" in meta.title
        ? meta.title.absolute
        : undefined;

  const description =
    typeof meta.description === "string" ? meta.description : undefined;

  const pageImages = meta.openGraph?.images ?? [
    { url: DEFAULT_SOCIAL_IMAGE, alt: "Jilani Shipping International freight forwarding services" },
  ];
  const twitterImages = meta.twitter?.images ?? pageImages;

  return {
    ...meta,
    keywords: Array.isArray(meta.keywords)
      ? [...new Map(meta.keywords.map((keyword) => [keyword.trim().toLowerCase(), keyword.trim()])).values()]
      : meta.keywords,
    openGraph: {
      type: "website",
      ...meta.openGraph,
      url: canonicalUrl,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      images: pageImages,
    },
    twitter: {
      ...meta.twitter,
      card: "summary_large_image",
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      images: twitterImages,
    },
  };
}
