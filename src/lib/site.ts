/**
 * Site configuration and canonical URL helpers for Techpronnet Technologies.
 * Supports Vercel preview environments, custom domains, and production fallback.
 */

export const SITE_CONFIG = {
  name: "Techpronnet Technologies",
  legalName: "Techpronnet Technologies",
  shortName: "Techpronnet",
  description:
    "Techpronnet Technologies engineers bespoke websites, cross-platform mobile apps, enterprise business software, and resilient workflow automation pipelines.",
  defaultTitle:
    "Techpronnet Technologies | Software Built Around Your Business",
  titleTemplate: "%s | Techpronnet Technologies",
  defaultOrigin: "https://techpronnet.com",
  contact: {
    email: "contact@techpronnet.com",
    phone: "+234 706 265 4567",
    address: {
      streetAddress: "Commercial Delivery Hub",
      addressLocality: "Lagos & Abuja",
      addressCountry: "NG",
    },
  },
  socials: {
    x: "https://x.com/Tech_pronnet",
    tiktok: "https://www.tiktok.com/@techpronnet1",
    facebook: "https://www.facebook.com/techpronnettechnologies",
  },
  foundingYear: 2019,
};

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return SITE_CONFIG.defaultOrigin;
}
