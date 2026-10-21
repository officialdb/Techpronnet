import { SITE_CONFIG, getSiteUrl } from "@/lib/site";

export function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.shortName,
    url: siteUrl,
    logo: `${siteUrl}/icon`,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    foundingDate: "2019",
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address.streetAddress,
      addressLocality: SITE_CONFIG.contact.address.addressLocality,
      addressCountry: SITE_CONFIG.contact.address.addressCountry,
    },
    sameAs: [
      SITE_CONFIG.socials.x,
      SITE_CONFIG.socials.tiktok,
      SITE_CONFIG.socials.facebook,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phone,
      contactType: "customer service",
      email: SITE_CONFIG.contact.email,
      availableLanguage: ["en"],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: Array<{ name: string; path: string }>;
}) {
  const siteUrl = getSiteUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${siteUrl}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServicesJsonLd({
  services,
}: {
  services: Array<{
    name: string;
    description: string;
    category: string;
    path: string;
  }>;
}) {
  const siteUrl = getSiteUrl();

  const schema = {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.description,
      category: s.category,
      provider: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: siteUrl,
      },
      url: `${siteUrl}${s.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
