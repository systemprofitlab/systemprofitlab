import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SystemProfitLab | Traffic, Funnels, and Follow-Up",
  description:
    "Capture leads, automate follow-up, and turn attention into a repeatable profit system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
