import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SystemProfitLab | Growth Systems That Make Business Easier",
  description:
    "SystemProfitLab helps business owners, creators, and agencies find the right HighLevel growth path for AI follow-up, automation, lead capture, booking, and easier operations.",
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
