import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "odirey",
  description:
    "Odirey chronicles intelligent testing systems, automation craft, and quality leadership.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://odirey.com"
  ),
  openGraph: {
    title: "odirey",
    description:
      "Odirey chronicles intelligent testing systems, automation craft, and quality leadership.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://odirey.com",
    siteName: "odirey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "odirey",
    description:
      "Odirey chronicles intelligent testing systems, automation craft, and quality leadership.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          sans.variable,
          display.variable,
          "min-h-screen bg-midnight-950 font-sans text-white"
        )}
      >
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
