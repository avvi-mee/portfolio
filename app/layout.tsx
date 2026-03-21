import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Aviraj — Builder & Founder",
  description:
    "I build systems that reduce manual work. Founder of Unmatrix. Focused on execution, rapid prototyping, and building scalable digital solutions.",
  keywords: ["developer", "founder", "CRM", "automation", "Unmatrix", "Next.js"],
  authors: [{ name: "Aviraj" }],
  openGraph: {
    title: "Aviraj — Builder & Founder",
    description: "Focused on execution, rapid prototyping, and building scalable digital solutions for real-world workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
