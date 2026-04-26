import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SystemProfitLab | Stop Losing Leads and Book More Appointments",
  description:
    "SystemProfitLab helps businesses capture more leads, respond faster, automate follow-up, manage conversations, improve reviews, and replace scattered tools with one HighLevel growth system.",
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
