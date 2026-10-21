import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getSiteUrl, SITE_CONFIG } from "@/lib/site";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  keywords: [
    "Techpronnet Technologies",
    "custom software development",
    "bespoke web portals",
    "mobile application development",
    "business software ERP",
    "workflow automation",
    "Neon Serverless Postgres",
    "systems integration Nigeria",
    "hospital management systems",
    "legal practice portals",
    "logistics dispatch systems",
  ],
  authors: [{ name: SITE_CONFIG.name, url: getSiteUrl() }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
    url: "/",
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Tech_pronnet",
    creator: "@Tech_pronnet",
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;650;700;750&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink antialiased min-h-screen flex flex-col">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
