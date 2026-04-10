import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio | UI/UX Designer & Frontend Developer",
    template: "%s | Portfolio",
  },
  description: "UI/UX Designer & Frontend Developer",
  keywords: ["portfolio", "ui ux", "frontend developer", "product design", "figma", "design to code"],
  authors: [{ name: "Nguyen Minh Dat" }],
  creator: "Nguyen Minh Dat",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://nguyenminhdat.vercel.app",
    siteName: "Nguyen Minh Dat Portfolio",
    title: "Portfolio | UI/UX Designer & Frontend Developer",
    description: "UI/UX Designer & Frontend Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | UI/UX Designer & Frontend Developer",
    description: "UI/UX Designer & Frontend Developer",
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
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

