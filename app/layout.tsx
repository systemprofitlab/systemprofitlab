import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/routes";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SystemProfitLab | SaaS systems for modern business growth",
    template: "%s | SystemProfitLab",
  },
  description:
    "SystemProfitLab helps entrepreneurs, creators, agencies, and service businesses explore SaaS tools for CRM, funnels, automation, lead capture, and client follow-up.",
  keywords: [
    "SystemProfitLab",
    "GoHighLevel",
    "HighLevel CRM",
    "SaaS systems",
    "business automation",
    "lead automation",
    "funnels",
    "client management",
    "marketing automation",
    "CRM pipelines",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "SystemProfitLab",
    description:
      "Discover the SaaS operating layer for lead capture, CRM, automation, booking, and follow-up.",
    siteName: "SystemProfitLab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
