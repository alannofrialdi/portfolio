import type { Metadata } from "next";
import "./globals.css";

import { Inter, Poppins } from "next/font/google";
import { useLocale } from "next-intl";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Alan's Portfolio",
  description: "Alan's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
