import type { Metadata } from "next";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nextgen Computers - Elite Tech Solutions",
  description: "Professional computer repair, custom builds, and tech solutions. Expert laptop & desktop repairs, printer service, CCTV installations, and system optimization.",
  keywords: "computer repair, laptop repair, desktop repair, printer service, CCTV installation, custom PC builds, tech support",
  authors: [{ name: "Nextgen Computers" }],
  openGraph: {
    title: "Nextgen Computers - Elite Tech Solutions",
    description: "Professional computer repair, custom builds, and tech solutions.",
    url: "https://nextgencomputers.com",
    siteName: "Nextgen Computers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nextgen Computers - Elite Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextgen Computers - Elite Tech Solutions",
    description: "Professional computer repair, custom builds, and tech solutions.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} antialiased bg-dark-bg text-white`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
