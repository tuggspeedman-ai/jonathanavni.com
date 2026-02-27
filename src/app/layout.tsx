import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jonathan Avni — Product Leader & AI Builder",
    template: "%s | Jonathan Avni",
  },
  description:
    "10+ years building developer platforms and payments infrastructure at Yahoo, Pinterest, Coinbase, and Paxos. Now going deep on AI — training models, building products, and writing about it.",
  metadataBase: new URL("https://jonathanavni.com"),
  openGraph: {
    title: "Jonathan Avni — Product Leader & AI Builder",
    description:
      "10+ years building developer platforms and payments infrastructure at Yahoo, Pinterest, Coinbase, and Paxos. Now going deep on AI.",
    url: "https://jonathanavni.com",
    siteName: "Jonathan Avni",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Avni — Product Leader & AI Builder",
    description:
      "10+ years building developer platforms and payments infrastructure at Yahoo, Pinterest, Coinbase, and Paxos. Now going deep on AI.",
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
    <html lang="en" className="dark">
      <body
        className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
