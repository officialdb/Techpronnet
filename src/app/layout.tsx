import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techpronnet Technologies | Software Built Around Your Business",
  description:
    "Techpronnet Technologies builds custom websites, mobile applications, business software and workflow automation for growing businesses.",
  keywords: [
    "custom software",
    "web development",
    "mobile applications",
    "workflow automation",
    "business portals",
    "systems integration",
    "Techpronnet",
  ],
  authors: [{ name: "Techpronnet Technologies" }],
  openGraph: {
    title: "Techpronnet Technologies | Software Built Around Your Business",
    description:
      "We design and build practical digital solutions that help businesses simplify operations, serve customers better and grow with confidence.",
    siteName: "Techpronnet Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techpronnet Technologies | Software Built Around Your Business",
    description:
      "Practical digital solutions that simplify operations, serve customers better and support long-term growth.",
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
        {children}
      </body>
    </html>
  );
}
