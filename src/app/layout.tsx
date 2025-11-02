import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Atelier Lumi Nails | Artful Manicure Boutique",
  description:
    "Discover couture-inspired manicure products, treatments, and accessories curated for modern tastemakers.",
  keywords: [
    "manicure",
    "nail care",
    "luxury beauty",
    "gel polish",
    "hand treatments",
    "artisanal nail studio"
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body className="bg-cream-50 font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
