// Push events to the GTM dataLayer (the site loads GTM, not gtag.js, so
// window.gtag is usually undefined and earlier gtag() calls tracked nothing).
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwadvro";

// Sends a lead to Formspree in the background (no redirect away from the site).
export async function sendLead(fields: Record<string, string>, source: string) {
  const body = new FormData();
  Object.entries(fields).forEach(([k, v]) => body.append(k, v));
  body.append("lead_source", source);
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body,
    headers: { Accept: "application/json" },
    keepalive: true,
  });
  return res.ok;
}
