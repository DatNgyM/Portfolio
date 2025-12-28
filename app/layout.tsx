import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Developer Blog",
    template: "%s | Portfolio",
  },
  description: "Portfolio website và blog chia sẻ kiến thức về Java, JavaScript và Network Programming",
  keywords: ["portfolio", "developer", "blog", "Java", "JavaScript", "programming"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://your-portfolio.vercel.app",
    siteName: "Portfolio",
    title: "Portfolio | Developer Blog",
    description: "Portfolio website và blog chia sẻ kiến thức về Java, JavaScript và Network Programming",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Developer Blog",
    description: "Portfolio website và blog chia sẻ kiến thức về Java, JavaScript và Network Programming",
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

