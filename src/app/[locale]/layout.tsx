import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { Inter, Poppins } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Alan's Portfolio",
  description: "Alan's Portfolio Site",
};

const locales = ["en", "id"];
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
