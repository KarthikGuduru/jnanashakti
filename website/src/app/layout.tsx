import type { Metadata } from "next";
import { Inter, Playfair_Display, Yatra_One } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const yatra = Yatra_One({
  variable: "--font-sanskrit",
  weight: "400",
  subsets: ["latin", "devanagari"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jnanashakti — Illuminating Lives Through Ancient Wisdom",
    template: "%s | Jnanashakti",
  },
  description:
    "Jnanashakti works in the fields of human values, spiritual education, and empowering individuals and organisations through the wisdom of ancient Indian traditions.",
  keywords: [
    "Jnanashakti",
    "ashram",
    "spiritual education",
    "human values",
    "Vedanta",
    "meditation",
    "retreat",
    "Shakti Ashram",
  ],
  openGraph: {
    title: "Jnanashakti — Illuminating Lives Through Ancient Wisdom",
    description:
      "Nurturing human values, spiritual education, and inner transformation through the wisdom of ancient traditions.",
    type: "website",
    locale: "en_IN",
    siteName: "Jnanashakti",
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
        className={`${inter.variable} ${playfair.variable} ${yatra.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100dvh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
