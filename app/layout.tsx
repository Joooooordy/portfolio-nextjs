import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import localFont from "next/font/local";

// Load local Geist fonts with next/font/local
const geist = localFont({
  variable: "--font-sans",
  src: [
    { path: "../public/fonts/geist/Geist-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/geist/Geist-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/geist/Geist-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/geist/Geist-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/geist/Geist-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/geist/Geist-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/geist/Geist-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "../public/fonts/geist/Geist-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  display: "swap",
});

const geistMono = localFont({
  variable: "--font-mono",
  src: [{ path: "../public/fonts/geist/GeistMono-Regular.woff2", weight: "400", style: "normal" }],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jordy Breur — Portfolio",
  description: "Het persoonlijke portfolio van Jordy Breur. Projecten, bio en contact.",
  metadataBase: new URL("https://jordybreur.nl"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jordy Breur — Portfolio",
    description: "Het persoonlijke portfolio van Jordy Breur. Projecten, bio en contact.",
    siteName: "jordybreur.nl",
    locale: "nl_NL",
    type: "website",
    url: "https://jordybreur.nl/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${geist.className}`}>
      <head />
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
          <a href="#main-content" className="skip-link">Overslaan naar hoofdinhoud</a>
          <div className="min-h-dvh flex flex-col">
            <Navbar />
            <main id="main-content" role="main" tabIndex={-1} className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
